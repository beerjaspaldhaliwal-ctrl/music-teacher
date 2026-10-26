/* FL Studio builds: turns a compact spec (sounds, chords, melody, drums, 808, mixer,
   arrangement and writing rules) into a step-by-step "Build It in FL Studio" lesson with
   exact piano-roll notes, plus Beat Lab presets so the student can hear each stage.

   Notes in specs use standard names (middle C = C4) and are shown in FL Studio names
   (middle C = C5). Note strings: "step:note:len" separated by spaces, steps are 16ths
   from 0; add ":0.6" for velocity and a trailing "g" on the length for a glide. */
(function () {
  const A = (window.ACADEMY = window.ACADEMY || { semesters: [] });
  A.flSpecs = A.flSpecs || {};
  A.flBuild = function (spec) { A.flSpecs[spec.id] = spec; };

  const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  function midi(name) {
    const m = /^([A-G])([#b]?)(-?\d)$/.exec(name.trim());
    if (!m) throw new Error('Bad note ' + name);
    return (+m[3] + 1) * 12 + PC[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  }
  // Keeps the spelling used in the spec (Bb stays Bb) and shifts the octave to FL's numbering.
  function fl(name) {
    const m = /^([A-G][#b]?)(-?\d)$/.exec(name.trim());
    return m ? m[1] + (+m[2] + 1) : name;
  }
  function flMidi(n) { return NAMES[n % 12] + Math.floor(n / 12); }

  function parseNotes(str) {
    return String(str || '').trim().split(/\s+/).filter(Boolean).map(function (tok) {
      const p = tok.split(':');
      const glide = /g$/.test(p[2]);
      const len = parseFloat(p[2]);
      return { step: +p[0], name: p[1], m: midi(p[1]), len: len, vel: p[3] ? +p[3] : null, glide: glide };
    });
  }

  function pos(step) {
    return (Math.floor(step / 16) + 1) + '.' + (Math.floor((step % 16) / 4) + 1) + '.' + (step % 4 + 1);
  }
  function len(steps) {
    if (steps % 16 === 0) return steps / 16 + (steps === 16 ? ' bar' : ' bars');
    if (steps % 4 === 0) return steps / 4 + (steps === 4 ? ' beat' : ' beats');
    if (steps === 2) return '½ beat';
    if (steps === 1) return '1 step';
    if (steps === 6) return '1½ beats';
    if (steps === 10) return '2½ beats';
    if (steps === 14) return '3½ beats';
    if (steps === 0.5) return '½ step';
    return steps + ' steps';
  }

  function table(head, rows) {
    return '| ' + head.join(' | ') + ' |\n|' + head.map(function () { return '---'; }).join('|') + '|\n' +
      rows.map(function (r) { return '| ' + r.join(' | ') + ' |'; }).join('\n');
  }
  function list(arr) { return (arr || []).map(function (s) { return '- ' + s; }).join('\n'); }
  function clock(bpm, bars) {
    const s = Math.round(bars * 4 * 60 / bpm);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  const ROWNAME = { kick: 'Kick', snare: 'Snare', clap: 'Clap', chh: 'Hi-hat', ohh: 'Open hat', perc: 'Perc', sub: '808 hits' };

  function barsOf(spec) {
    let max = 16;
    const d = (spec.drums && spec.drums.rows) || {};
    Object.keys(d).forEach(function (k) { max = Math.max(max, d[k].length); });
    (spec.chords ? spec.chords.list : []).forEach(function (c) { max = Math.max(max, c[0] + c[1]); });
    ['melody', 'bass', 'counter'].forEach(function (k) {
      if (spec[k]) parseNotes(spec[k].notes).forEach(function (n) { max = Math.max(max, n.step + Math.min(n.len, 16)); });
    });
    const b = Math.ceil(max / 16);
    return b <= 1 ? 1 : b <= 2 ? 2 : 4;
  }

  function fill(row, n) {
    if (!row) return '.'.repeat(n);
    const unit = row.length <= 16 ? 16 : row.length <= 32 ? 32 : 64;
    let r = row.padEnd(unit, '.');
    while (r.length < n) r += r.slice(0, unit);
    return r.slice(0, n);
  }

  // A drum grid in a code block, one block per bar (or one block when every bar is the same).
  function drumGrid(spec, bars) {
    const rows = spec.drums.rows, names = Object.assign({}, ROWNAME, spec.drums.names || {});
    const keys = Object.keys(rows);
    const n = bars * 16;
    const full = {};
    keys.forEach(function (k) { full[k] = fill(rows[k], n); });
    const same = keys.every(function (k) { for (let b = 1; b < bars; b++) { if (full[k].slice(b * 16, b * 16 + 16) !== full[k].slice(0, 16)) return false; } return true; });
    const pad = Math.max.apply(null, keys.map(function (k) { return names[k].length; })) + 2;
    function block(b, label) {
      let out = label + '\n' + ' '.repeat(pad) + '1   2   3   4\n';
      keys.forEach(function (k) {
        const seg = full[k].slice(b * 16, b * 16 + 16);
        out += names[k].padEnd(pad) + seg.slice(0, 4) + ' ' + seg.slice(4, 8) + ' ' + seg.slice(8, 12) + ' ' + seg.slice(12, 16) + '\n';
      });
      return out;
    }
    let txt = '';
    if (same || bars === 1) txt = block(0, bars > 1 ? 'Every bar (1–' + bars + ')' : 'Bar 1');
    else for (let b = 0; b < bars; b++) txt += block(b, 'Bar ' + (b + 1)) + (b < bars - 1 ? '\n' : '');
    return '```\n' + txt.replace(/\n$/, '') + '\n```';
  }

  function noteTable(notes, withGlide) {
    return table(withGlide ? ['#', 'Note (FL)', 'Starts at', 'Length', 'Glide'] : ['#', 'Note (FL)', 'Starts at', 'Length'],
      notes.map(function (n, i) {
        const r = [String(i + 1), '**' + fl(n.name) + '**', pos(n.step), len(n.len)];
        if (withGlide) r.push(n.glide ? 'Slide into this note' : '');
        return r;
      }));
  }

  function chordTable(ch) {
    return table(['Bar', 'Chord', 'Notes, low to high (FL)', 'Starts at', 'Length'],
      ch.list.map(function (c) {
        return [String(Math.floor(c[0] / 16) + 1), '**' + c[2] + '**', c[3].split(/\s+/).map(fl).join(' · '), pos(c[0]), len(c[1])];
      }));
  }

  function labPattern(spec, bars, withDrums, withBass, name) {
    const p = { name: name, bpm: spec.bpm, swing: spec.labSwing || 50, bars: bars };
    if (withDrums) Object.keys(spec.drums.rows).forEach(function (k) { p[k] = fill(spec.drums.rows[k], bars * 16); });
    if (spec.melody) p.keys = { inst: spec.melody.lab || 'piano', notes: parseNotes(spec.melody.notes).map(function (n) { return [n.step, n.m, n.len, n.vel || 0.85]; }) };
    if (spec.chords) {
      const notes = [];
      spec.chords.list.forEach(function (c) { c[3].split(/\s+/).forEach(function (nm) { notes.push([c[0], midi(nm), c[1], c[4] || 0.6]); }); });
      p.keys2 = { inst: spec.chords.lab || 'pad', notes: notes };
    }
    if (withBass && spec.bass) p.bass = { inst: spec.bass.lab || '808', notes: parseNotes(spec.bass.notes).map(function (n) { return [n.step, n.m, n.len, n.vel || 0.9, n.glide ? 1 : 0]; }) };
    return p;
  }

  // ---------- Shared FL Studio instructions ----------
  function setup(spec, file) {
    return list([
      'Open FL Studio and start a new project: **File → New from template → Basic** (or Empty).',
      'Set the tempo to **' + spec.bpm + ' BPM**: right-click the tempo display in the toolbar → *Type in value*.',
      'Save straight away (Ctrl+S) as **' + file + '**. Put BPM and key in every project name.',
      'Make sure you are in **Pattern** mode (PAT next to the play button) while building loops, and switch to **Song** mode to hear the Playlist.',
      'Open the windows you will use: **F6** Channel Rack, **F7** Piano Roll, **F5** Playlist, **F9** Mixer, **Alt+F8** Browser.',
      'In the Piano Roll, open the snap menu (the magnet) and choose **Step**. Every position below is written as **Bar.Beat.Step**: 1.3.1 means bar 1, beat 3, first 16th.',
      'Key and scale: **' + spec.key + '** (' + spec.scale + '). In recent FL versions, turn on scale highlighting in the Piano Roll and pick this root and scale so the correct notes are marked.'
    ]);
  }

  const ENTER = 'How to enter notes: select the channel in the Channel Rack, press **F7**, choose the Draw tool (**P**) and click the notes in. Drag the right edge of a note to change its length. Select notes and press **Up/Down** to move a semitone or **Ctrl+Up/Down** to move an octave. **Ctrl+B** duplicates a selection to the right. Use a new pattern for each part (**F4** opens the next empty pattern; press **F2** to name it): one for chords, one for the melody, one for drums, one for the 808.';

  function glideHow(spec) {
    return list([
      '**Method 1, Porta (easiest):** open the 808 (or bass) channel settings → *Miscellaneous functions* tab (wrench icon) → under *Polyphony* turn on **Mono** and **Porta**, then set the **Slide** knob (start around 30–40%). Make the end of one note overlap the start of the next and it glides.',
      '**Method 2, slide notes (exact control):** in the Piano Roll click the **slide** toggle (the triangle icon) before drawing a note. A slide note bends the note before it to its own pitch; the slide note\'s length sets how long the glide takes. Slide notes work with FL\'s own instruments (Sampler, FPC, 3xOsc, FLEX, Transistor Bass).',
      'The **Glide** column in the 808 table marks the notes that should slide.',
      'Keep the 808 or bass **mono** so notes never stack and muddy the low end.'
    ]);
  }

  function tune808() {
    return 'Tune your 808 sample first: in the 808 channel settings, play C5 on the little keyboard and compare it with a C on FL Keys. If it is not a C, right-click the key that matches the 808\'s real pitch → **Set root note**. Now every note you draw plays at the correct pitch.';
  }

  const MIXROUTE = list([
    'In the Channel Rack, select every channel (click the first name, Shift+click the last) and press **Ctrl+L**. Each channel is sent to its own Mixer insert.',
    'Press **F9**, select each insert and press **F2** to name it like the channel.',
    'Make a **Drums bus**: select an empty insert and name it. Click each drum insert, then right-click the small arrow at the bottom of the Drums bus → **Route to this track only**.',
    'Add effects in each insert\'s slots on the right side of the Mixer. The chains below list the order, top to bottom.'
  ]);

  function exportHow(spec, file) {
    return list([
      'Master insert: ' + (spec.master || 'Fruity Parametric EQ 2 (gentle shaping only) → Fruity Limiter or Maximus, ceiling −1 dB. Check loudness with a free LUFS meter such as Youlean Loudness Meter.'),
      'Export the full beat: **Ctrl+R** (File → Export → WAV). Mode **Full song**, Tail **Leave remainder**, bit depth **24-bit**, and name it **' + file.replace('.flp', '.wav') + '**.',
      'Export an MP3 for previews: **Ctrl+Shift+R**, 320 kbps. Add your producer tag in the intro first.',
      'Export stems (trackouts): **Ctrl+R** again and tick **Split mixer tracks**. Turn off the master limiter before you export stems.',
      'Save the project (Ctrl+S) and also **File → Export → Project data files** to keep a zipped backup with all its samples.'
    ]);
  }

  // Rotating FL Studio questions, so every build tests some workflow knowledge.
  const FLQ = [
    { q: 'What does FL Studio call middle C in the Piano Roll?', a: ['C3', 'C4', 'C5', 'C6'], c: 2, why: 'FL Studio numbers octaves one higher than standard notation: middle C is C5.' },
    { q: 'Which shortcut sends the selected Channel Rack channels to their own Mixer inserts?', a: ['Ctrl+B', 'Ctrl+L', 'Ctrl+R', 'F4'], c: 1, why: 'Ctrl+L in the Channel Rack routes each selected channel to a free Mixer insert.' },
    { q: 'How do you make an 808 glide between two notes in FL Studio?', a: ['Use Fruity Reeverb 2', 'Turn on Mono + Porta in channel settings or use slide notes', 'Raise the channel volume', 'Use Edison only'], c: 1, why: 'Porta (with overlapping notes) or slide notes create pitch glides.' },
    { q: 'When you export stems in FL Studio, which option do you tick?', a: ['Split mixer tracks', 'Leave remainder only', 'Pattern mode', 'Dither off'], c: 0, why: 'Split mixer tracks renders every Mixer insert as its own WAV.' },
    { q: 'Which keys open the Piano Roll, Playlist and Mixer?', a: ['F7, F5, F9', 'F1, F2, F3', 'F9, F7, F5', 'F6, F8, F10'], c: 0, why: 'F7 Piano Roll, F5 Playlist, F9 Mixer (F6 is the Channel Rack).' },
    { q: 'What does Ctrl+B do in the Piano Roll?', a: ['Bounces audio', 'Duplicates the selected notes to the right', 'Opens the browser', 'Adds a slide note'], c: 1, why: 'Ctrl+B duplicates the selection, the fastest way to repeat a bar.' },
    { q: 'The swing knob at the top of the Channel Rack affects...', a: ['Every plugin on the master', 'The step-sequencer steps of the Channel Rack', 'Only audio clips', 'The tempo'], c: 1, why: 'Channel Rack swing shifts the off-beat steps; Piano Roll notes need swing from the Quantize tool or manual nudging.' },
    { q: 'Which piano roll tool splits a long hi-hat note into fast repeats for a roll?', a: ['Chop (Alt+U)', 'Strum (Alt+S)', 'Quick legato (Ctrl+L)', 'Randomize (Alt+R)'], c: 0, why: 'Chop cuts notes to the snap grid: set snap to ½ step for 32nds or a triplet value for triplet rolls.' }
  ];

  function shuffleIn(correct, wrong, seed) {
    const arr = wrong.slice();
    const p = seed % (arr.length + 1);
    arr.splice(p, 0, correct);
    return { a: arr, c: p };
  }

  // Builds the lesson. ctx: { id, name, part, styleId, styleName, group, idx, all }
  A.flLesson = function (spec, ctx) {
    const bars = barsOf(spec);
    const keyShort = spec.key.replace(' minor', 'min').replace(' major', 'maj').replace(/\s+/g, '');
    const file = ctx.name.replace(/[^A-Za-z0-9]+/g, '') + '_' + spec.bpm + 'bpm_' + keyShort + '.flp';
    const mel = spec.melody ? parseNotes(spec.melody.notes) : [];
    const bas = spec.bass ? parseNotes(spec.bass.notes) : [];
    const ctr = spec.counter ? parseNotes(spec.counter.notes) : [];
    const totalBars = (spec.arrangement || []).reduce(function (m, r) {
      const e = +String(r[0]).split('–').pop(); return Math.max(m, isNaN(e) ? 0 : e);
    }, 0);
    let stepNo = 0;
    function H(t) { stepNo++; return '\n\n## Step ' + stepNo + ' · ' + t + '\n'; }
    // Extra hand-written steps (sampling, chopping, vocal chops…) placed after a named section.
    function X(after) {
      return (spec.extra || []).filter(function (e) { return e.after === after; }).map(function (e) { return H(e.title) + e.body; }).join('');
    }

    let body = '## What you will build\n' + spec.goal + '\n\n' +
      table(['', ''], [
        ['Tempo', spec.bpm + ' BPM' + (spec.feel ? ' (' + spec.feel + ')' : '')],
        ['Key', spec.key + ': ' + spec.scale],
        ['Progression', spec.chords ? spec.chords.roman : 'See below'],
        ['Loop length', bars + (bars > 1 ? ' bars' : ' bar')],
        ['Full beat', totalBars ? totalBars + ' bars ≈ ' + clock(spec.bpm, totalBars) : '2:30–3:30'],
        ['Project name', file]
      ]) +
      '\n\n> **Hear it before you build it.** Use the Beat Lab buttons above: *Chords + melody* plays the loop without drums, *Full loop* plays everything. The Beat Lab uses synthesised sounds, so it shows you the notes and rhythm; your FL Studio version with real sounds will sound much better.' +
      '\n\n> **FL Studio note names:** FL calls middle C **C5** (most theory books call it C4). Every note in this lesson uses FL names, so you can copy them straight into the Piano Roll.';

    body += H('Set up the project') + setup(spec, file) + X('setup');

    body += H('Load your sounds (Channel Rack)') +
      'Press **F6**. Add each instrument with the **+** button at the bottom of the Channel Rack (or drag from the Browser). Drag drum samples from your kit or from **Browser → Packs**. All of these come with **FL Studio All Plugins Edition**.\n\n' +
      table(['Channel', 'Load this', 'How to set it up'], spec.sounds.map(function (r) { return [r[0], r[1], r[2] || 'Pick one that matches your reference tracks.']; })) +
      (spec.soundsNote ? '\n\n' + spec.soundsNote : '') + X('sounds');

    if (spec.chords) {
      body += H('The chord progression') + spec.chords.why +
        '\n\nProgression: **' + spec.chords.roman + '**. Instrument: **' + spec.chords.plugin + '**.\n\n' + chordTable(spec.chords) +
        '\n\n' + ENTER +
        (spec.chords.tips ? '\n\n' + list(spec.chords.tips) : '') +
        '\n\nCheck: loop the chord pattern (it should be ' + bars + (bars > 1 ? ' bars' : ' bar') + ' long; drag the end marker in the Piano Roll timeline if it is not) and compare with the Beat Lab.';
    }
    body += X('chords');

    if (spec.melody) {
      body += H('The melody') + spec.melody.why +
        '\n\nInstrument: **' + spec.melody.plugin + '**. Draw these notes in a new pattern:\n\n' + noteTable(mel, false) +
        '\n\n' + list([
          'Velocity: open the velocity lane at the bottom of the Piano Roll and lower a few in-between notes to about 70–80% so the line breathes.',
          'Play the chord and melody patterns together (in the Playlist, or by selecting both in the pattern list in Song mode) and check that nothing clashes.'
        ].concat(spec.melody.tips || []));
    }
    body += X('melody');

    if (spec.counter) {
      body += H('Counter-melody or texture') + spec.counter.why +
        '\n\nInstrument: **' + spec.counter.plugin + '**.\n\n' + noteTable(ctr, false);
    }
    body += X('counter');

    if (spec.drums) {
      body += H('Drums') + spec.drums.why +
        '\n\nProgram this in the Channel Rack step sequencer. Each character is one 16th step: **x** = hit, **o** = soft hit (right-click the step and lower its velocity in the Graph editor, or use the Piano Roll), **.** = rest. Beats 1–4 are marked at the top.\n\n' +
        drumGrid(spec, bars) +
        '\n\n' + list([
          bars > 1 ? 'The Channel Rack shows 16 steps per bar. For a ' + bars + '-bar pattern, drag the step-count control (to the left of the steps) out to ' + bars * 16 + ' steps, or open each drum in the Piano Roll and draw the bars there.' : 'One bar of 16 steps; the pattern repeats.',
          spec.swing ? 'Swing: turn the **swing knob** at the top of the Channel Rack ' + (typeof spec.swing === 'number' ? 'to about **' + spec.swing + '%**' : spec.swing) + ' and adjust by ear against your references.' : 'Swing: leave the Channel Rack swing at 0 for a straight, tight feel.'
        ].concat(spec.drums.extra || []));
    }
    body += X('drums');

    if (spec.bass) {
      body += H(spec.bass.title || 'The 808 / bass') + spec.bass.why +
        '\n\nInstrument: **' + spec.bass.plugin + '**.' + (spec.bass.is808 === false ? '' : '\n\n' + tune808()) +
        '\n\n' + noteTable(bas, bas.some(function (n) { return n.glide; })) +
        (bas.some(function (n) { return n.glide; }) ? '\n\n### Making the glides\n' + glideHow(spec) : '') +
        (spec.bass.tips ? '\n\n' + list(spec.bass.tips) : '');
    }
    body += X('bass');

    body += H('Mixer: routing and effect chains') + MIXROUTE + '\n\n' + table(['Mixer insert', 'Effects, in order, and settings'], spec.mixer) + X('mixer');

    body += H('Arrange the full beat (Playlist)') +
      list([
        'Press **F5** and switch to **Song** mode.',
        'Paint each pattern into the Playlist with the Brush tool (**B**). Put each pattern on its own track and name the tracks (Chords, Melody, Drums, 808…).',
        'Add markers for each section: right-click the timeline at the top → *Add marker*, and name it (Intro, Hook, Verse…).',
        'To drop an element for a bar, cut the clip with the Slice tool (**C**) and delete that part, or simply leave that bar empty on that track. To change notes in only one copy of a pattern, click the clip\'s name → **Make unique** first.'
      ]) + '\n\n' + table(['Bars', 'Section', 'What plays'], spec.arrangement.map(function (r) { return [r[0], r[1], r[2] || 'As the earlier section of the same name, with one small change (a fill, a new layer or a drop-out).']; })) +
      (totalBars ? '\n\nAt ' + spec.bpm + ' BPM, ' + totalBars + ' bars is about **' + clock(spec.bpm, totalBars) + '**.' : '');

    body += X('arrangement') + H('Transitions and room for the vocal') + list(spec.vocals);

    body += H('Master and export') + exportHow(spec, file);

    if (spec.write) {
      body += '\n\n## Now write your own: the ' + ctx.name + ' rules\nYou have built one beat note-for-note. Use these rules to write original ones.';
      if (spec.write.progressions) body += '\n\n### Chord progressions that work\n' + table(['Progression', 'Example in ' + spec.key, 'Mood'], spec.write.progressions);
      if (spec.write.melody) body += '\n\n### Writing the melody\n' + list(spec.write.melody);
      if (spec.write.bass) body += '\n\n### Writing the 808 / bass\n' + list(spec.write.bass);
      if (spec.write.drums) body += '\n\n### Drum rules\n' + list(spec.write.drums);
    }

    const steps = [
      'Set up the project at ' + spec.bpm + ' BPM and save it as ' + file + '.',
      'Load every sound in the Channel Rack table.',
      spec.chords ? 'Enter the chords (' + spec.chords.roman + ') exactly as in the table and loop them.' : null,
      spec.melody ? 'Enter the melody note by note, then shape the velocities.' : null,
      spec.counter ? 'Add the counter-melody or texture.' : null,
      spec.drums ? 'Program the drum pattern and set the swing.' : null,
      spec.bass ? 'Tune the 808/bass and enter its notes' + (bas.some(function (n) { return n.glide; }) ? ', including the glides.' : '.') : null,
      'Compare your loop with the Full loop in the Beat Lab.',
      'Route everything to the Mixer and build the effect chains.',
      'Arrange the full beat in the Playlist following the table.',
      'Add the transitions and check there is room for a vocal.',
      'Master, then export the WAV, MP3 and stems.',
      'Write a second, original beat using the rules at the bottom.'
    ].filter(Boolean);

    const others = Object.keys(A.flSpecs).map(function (k) { return A.flSpecs[k]; }).filter(function (o) { return o !== spec; });
    function distinct(get, n, seed) {
      const out = [], mine = get(spec);
      for (let k = 0; out.length < n && k < others.length * 3; k++) {
        const v = get(others[(seed + k * 7) % others.length]);
        if (v && v !== mine && out.indexOf(v) === -1) out.push(v);
      }
      return out;
    }
    const idx = ctx.idx || 0;
    const quiz = [];
    const kq = shuffleIn(spec.key, distinct(function (o) { return o.key; }, 3, idx + 1), idx);
    quiz.push({ q: 'What key is this ' + ctx.name + ' build in?', a: kq.a, c: kq.c, why: 'The build is in ' + spec.key + ' (' + spec.scale + ').' });
    if (spec.chords) {
      const pq = shuffleIn(spec.chords.roman, distinct(function (o) { return o.chords && o.chords.roman; }, 3, idx + 2), idx + 1);
      quiz.push({ q: 'Which chord progression does the build use?', a: pq.a, c: pq.c, why: spec.chords.roman + ' in ' + spec.key + '.' });
    }
    (spec.quiz || []).forEach(function (q) { quiz.push(q); });
    quiz.push(FLQ[idx % FLQ.length]);

    const beats = [labPattern(spec, bars, false, false, ctx.name + ' FL build · Chords + melody')];
    if (spec.drums || spec.bass) beats.push(labPattern(spec, bars, !!spec.drums, true, ctx.name + ' FL build · Full loop'));

    return {
      id: ctx.id, part: ctx.part, styleId: ctx.styleId, styleName: ctx.styleName, group: ctx.group, elFamily: ctx.elFamily,
      fl: true,
      title: ctx.title || (ctx.name + ' · Part ' + ctx.part + ': Build It in FL Studio'),
      minutes: 240,
      summary: 'Make a complete ' + ctx.name + ' beat in FL Studio, step by step: ' + spec.title + '. Exact chords, melody, drums and ' + (spec.bass && spec.bass.is808 === false ? 'bass' : '808') + ' notes, the plugins to load, mixer chains, arrangement and export.',
      objectives: [
        'Build a full ' + ctx.name + ' beat in FL Studio from an empty project',
        'Enter chords, melodies, drums and ' + (spec.bass && spec.bass.is808 === false ? 'bass' : '808s') + ' in the Piano Roll and Channel Rack with confidence',
        'Use FL Studio stock plugins to get the ' + ctx.name + ' sound',
        'Write original ' + ctx.name + ' progressions and melodies using the genre rules'
      ],
      body: body,
      steps: steps,
      tips: (spec.tips || []).concat(['Save versions as you go (Ctrl+N: "Save new version") so you can always go back.', 'After building it once, rebuild the loop from memory without looking. That is how it sticks.']),
      mistakes: (spec.mistakes || []).concat(['Skipping the tuning of the 808 or bass sample, so every note is slightly off key.', 'Mixing with the master limiter pushing hard: turn it off while balancing levels.']),
      assignment: {
        title: 'FL Studio Build: ' + spec.title,
        brief: 'Build this beat completely in FL Studio, then prove you understand it by writing an original one with the same rules.',
        deliverables: [
          'The build project saved as ' + file,
          'The full arrangement exported as a 24-bit WAV and a 320 kbps MP3',
          'Stems exported with Split mixer tracks',
          'A second, original ' + ctx.name + ' beat using a different progression from the rules table',
          'A screenshot of your Piano Roll for the chords, melody and ' + (spec.bass && spec.bass.is808 === false ? 'bass' : '808')
        ],
        stretch: spec.stretch || 'Record a vocalist (or yourself) on the beat and mix the vocal in FL Studio.'
      },
      quiz: quiz,
      watch: (spec.watch || []).concat([
        [ctx.name + ' beat in FL Studio from scratch', 'how to make ' + ctx.name + ' beat FL Studio'],
        [ctx.name + ' melodies and chords in FL Studio', ctx.name + ' melody chords FL Studio tutorial']
      ]),
      tools: ['drums', 'piano', 'calc'],
      beats: beats
    };
  };

  // Called from hhFinalize: adds a build lesson after each hip-hop style and each elective genre.
  A.flAttach = function () {
    let idx = 0;
    A.semesters.forEach(function (sem) {
      if (sem.hiphop) {
        (A.hhStyles || []).filter(function (st) { return st.sem === sem.id && A.flSpecs[st.id]; }).forEach(function (st) {
          const mine = sem.lessons.filter(function (l) { return l.styleId === st.id; });
          const last = mine[mine.length - 1];
          const at = sem.lessons.indexOf(last) + 1;
          sem.lessons.splice(at, 0, A.flLesson(A.flSpecs[st.id], {
            id: st.id + '-fl', name: st.name, part: mine.length + 1, styleId: st.id, styleName: st.name, group: st.name, idx: idx++
          }));
        });
      }
      if (sem.genres) {
        sem.genres.forEach(function (g) {
          const spec = A.flSpecs['g-' + g.id];
          const orig = sem.lessons.find(function (l) { return l.id === 'g-' + g.id; });
          if (!spec || !orig) return;
          orig.styleId = 'el-' + g.id; orig.styleName = g.name; orig.elFamily = g.family;
          sem.lessons.splice(sem.lessons.indexOf(orig) + 1, 0, A.flLesson(spec, {
            id: 'g-' + g.id + '-fl', name: g.name, part: 2, styleId: 'el-' + g.id, styleName: g.name, elFamily: g.family, idx: idx++,
            title: g.name + ' · Build It in FL Studio'
          }));
        });
      }
    });
  };

  A.flUtil = { midi: midi, fl: fl, flMidi: flMidi, parseNotes: parseNotes, pos: pos, len: len };

  // Helpers for writing specs compactly.
  function shift(name, oct) { return name.replace(/(-?\d)$/, function (d) { return String(+d + oct); }); }
  A.flHelp = {
    // One root per bar, the same rhythm in every bar: pattern = [[offset, octaveShift, len], ...]
    perBar: function (roots, pattern) {
      return roots.map(function (r, b) {
        return pattern.map(function (p) { return (b * 16 + p[0]) + ':' + shift(r, p[1]) + ':' + p[2]; }).join(' ');
      }).join(' ');
    },
    // Repeats each chord with a rhythm: chords = [[name, 'notes'], ...] one per bar, rhythm = [[offset, len], ...]
    stabs: function (chords, rhythm) {
      const out = [];
      chords.forEach(function (c, b) { rhythm.forEach(function (r) { out.push([b * 16 + r[0], r[1], c[0], c[1]]); }); });
      return out;
    },
    // Arpeggio: for each bar, walk through the chord notes in the given index order, one note every `every` steps.
    arp: function (chordNotes, order, every, len) {
      const out = [];
      chordNotes.forEach(function (notes, b) {
        const ns = notes.split(/\s+/);
        for (let i = 0, k = 0; i < 16; i += every, k++) out.push((b * 16 + i) + ':' + ns[order[k % order.length] % ns.length] + ':' + (len || every));
      });
      return out.join(' ');
    }
  };
})();
