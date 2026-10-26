/* Hip-Hop Academy: builds each hip-hop style into a multi-part masterclass.
   A style either supplies hand-written `lessons` or the data fields below, which become:
   1 Sound, history & culture · 2 Drums & groove · 3 Melody, samples & low end ·
   4 Arrangement, vocals, mix & selling. */
(function () {
  const A = (window.ACADEMY = window.ACADEMY || { semesters: [] });
  A.hhStyles = A.hhStyles || [];

  function range(b) { return b[0] === b[1] ? b[0] + ' BPM' : b[0] + '–' + b[1] + ' BPM'; }
  function list(arr) { return (arr || []).map(function (s) { return '- ' + s; }).join('\n'); }
  function table(head, rows) {
    return '| ' + head.join(' | ') + ' |\n|' + head.map(function () { return '---'; }).join('|') + '|\n' +
      rows.map(function (r) { return '| ' + r.join(' | ') + ' |'; }).join('\n');
  }
  function clock(bpm, bars) {
    const s = Math.round(bars * 4 * 60 / bpm);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  // Generic questions, rotated across styles so every part has a solid quiz.
  const POOL = {
    drums: [
      { q: 'Why vary a drum loop every 4 or 8 bars?', a: ['To change the tempo', 'To keep the listener engaged while the groove stays familiar', 'Because DAWs require it', 'To make the file smaller'], c: 1, why: 'Small changes (a missing snare, a roll, a fill) keep a loop alive.' },
      { q: 'What does swing do to a drum pattern?', a: ['Raises the pitch', 'Delays every second subdivision for a bouncy feel', 'Adds reverb', 'Doubles the tempo'], c: 1, why: 'Swing shifts off-beat 16ths (or 8ths) later; around 66% is triplet feel.' },
      { q: 'What is a ghost note?', a: ['A deleted note', 'A very quiet hit between main hits', 'A note in the wrong key', 'A reversed sample'], c: 1, why: 'Ghost notes add movement without cluttering the groove.' },
      { q: 'Where should kick and snare usually sit in the stereo field in hip-hop?', a: ['Hard left and right', 'Centre', 'Only in the side channel', 'It does not matter'], c: 1, why: 'The core rhythm anchors the centre with the bass and lead vocal.' },
      { q: 'Before writing drums for a style, the best first step is to...', a: ['Buy a new plugin', 'Study how reference songs place kick, snare and hats', 'Master the beat', 'Choose a beat name'], c: 1, why: 'Drum placement defines a style; references show you exactly how.' },
      { q: 'What does a drum bus with gentle compression add?', a: ['Pitch correction', 'Glue: the kit feels like one instrument', 'Stereo width only', 'More tempo'], c: 1, why: 'Bus compression of 2–4 dB makes drums cohesive.' }
    ],
    melody: [
      { q: 'Why keep the 808 or bass in the same key as the melody?', a: ['It is louder', 'An out-of-key bass clashes with every chord', 'Bass is not pitched', 'For stereo width'], c: 1, why: '808s and bass are pitched instruments.' },
      { q: 'A good beat melody for rappers usually...', a: ['Plays constantly in the vocal range with no gaps', 'Leaves space so the vocal can sit on top', 'Changes key every bar', 'Has no repetition'], c: 1, why: 'Space and repetition make room for the artist.' },
      { q: 'What is a counter-melody?', a: ['The bassline', 'A second melody that answers or moves when the main one rests', 'A drum fill', 'A key change'], c: 1, why: 'Counter-melodies add interest without fighting the main hook.' },
      { q: 'Low-passing the melody in the verse and opening it in the hook creates...', a: ['A key change', 'Contrast and lift into the hook', 'Phase problems', 'Nothing'], c: 1, why: 'Filtering is a simple way to build energy between sections.' },
      { q: 'If a sample or loop is not yours, before releasing you must...', a: ['Rename the file', 'Clear it or use royalty-free / self-made material', 'Pitch it up 1 semitone', 'Use less than 7 seconds'], c: 1, why: 'There is no safe length; uncleared samples can get songs removed.' },
      { q: 'Why save your best loops and melodies as templates or MIDI?', a: ['To slow your DAW', 'To build a reusable library that speeds up sessions', 'Streaming services require it', 'To avoid stems'], c: 1, why: 'Producers work fast in sessions by reusing their own material.' }
    ],
    sell: [
      { q: 'What do trackouts (stems) for a beat usually include?', a: ['Only an MP3', 'Each instrument group as its own WAV starting at bar 1', 'The DAW project file only', 'A video'], c: 1, why: 'Engineers need separate stems to mix the artist\'s vocals with the beat.' },
      { q: 'Why put BPM and key in your beat filenames?', a: ['For decoration', 'Artists and engineers can set up sessions and write faster', 'It increases loudness', 'It is required by PROs'], c: 1, why: 'Clear labelling is professional and saves time.' },
      { q: 'A tagged MP3 preview is used to...', a: ['Replace the master', 'Let artists hear the beat without being able to release it untagged', 'Raise the price', 'Upload to Spotify'], c: 1, why: 'The producer tag protects previews; untagged files come after payment.' },
      { q: 'What should you agree in writing when an artist uses your beat?', a: ['Nothing', 'Licence terms or a producer agreement, including credit and splits', 'Only the price', 'Their favourite colour'], c: 1, why: 'Written terms protect both sides and your royalties.' },
      { q: 'Leaving a pocket around 2–5 kHz in the beat helps...', a: ['The 808', 'The vocal cut through', 'The kick sub', 'Reverb tails'], c: 1, why: 'Vocal intelligibility lives in the upper mids.' },
      { q: 'Where does the producer tag usually go?', a: ['Over the hook vocal', 'In the intro, before the vocal', 'Every bar', 'At the very end only'], c: 1, why: 'It identifies you without interfering with the artist.' }
    ]
  };

  function pick(pool, i) { return pool[i % pool.length]; }

  function shuffleIn(correct, wrong, seed) {
    const arr = wrong.slice();
    const pos = seed % (arr.length + 1);
    arr.splice(pos, 0, correct);
    return { a: arr, c: pos };
  }

  function watchFor(st, part) {
    const n = st.name;
    const base = {
      1: [[n + ' history and producers', n + ' history documentary'], ['How classic ' + n + ' beats were made', n + ' producer breakdown']],
      2: [['Programming ' + n + ' drums', 'how to make ' + n + ' drums tutorial'], [n + ' drum patterns', n + ' drum pattern FL Studio Ableton']],
      3: [['Writing ' + n + ' melodies', 'how to make ' + n + ' melody tutorial'], [n + ' bass and 808', n + ' 808 bassline tutorial']],
      4: [['A full ' + n + ' beat from scratch', n + ' beat from scratch'], ['Mixing ' + n + ' beats', 'how to mix ' + n + ' beat'], ['Selling ' + n + ' beats', 'how to sell ' + n + ' type beats']]
    }[part];
    const extra = (st.watch && st.watch[part]) || [];
    return extra.concat(base);
  }

  function makeStyle(st, idx, allStyles) {
    const others = allStyles.filter(function (o) { return o.id !== st.id && o.sig && o.sig !== st.sig; });
    function distinct(key, n, seed) {
      const out = [];
      for (let k = 0; out.length < n && k < others.length * 3; k++) {
        const v = key(others[(seed + k * 5) % others.length]);
        if (v && out.indexOf(v) === -1 && v !== key(st)) out.push(v);
      }
      return out;
    }
    const sigQ = shuffleIn(st.sig, distinct(function (o) { return o.sig; }, 3, idx + 1), idx);
    const tempoQ = shuffleIn(range(st.bpm), distinct(function (o) { return o.bpm ? range(o.bpm) : null; }, 3, idx + 2), idx + 1);
    const originQ = shuffleIn(st.origin, distinct(function (o) { return o.origin; }, 3, idx + 3), idx + 2);

    const n = st.name;
    const demoBars = (st.arrangement || []).reduce(function (m, r) {
      const parts = String(r[0]).split('–'); const end = +parts[parts.length - 1]; return Math.max(m, isNaN(end) ? 0 : end);
    }, 0);
    const demoBpm = (st.demo && st.demo.bpm) || st.bpm[0];
    const common = { styleId: st.id, styleName: n, group: n };

    const p1 = Object.assign({}, common, {
      id: st.id + '-1', part: 1,
      title: n + ' · Part 1: Sound, History & Culture',
      minutes: 60,
      summary: 'Where ' + n + ' comes from, what defines it, who to study and the sounds you need.',
      objectives: ['Explain the history and culture behind ' + n, 'Recognise its signature sound by ear', 'Build a ' + n + ' reference playlist and sound kit'],
      body: '## The story\n' + st.history +
        '\n\n## The signature sound\n' + list(st.signature) +
        '\n\n' + table(['Fact', 'Detail'], [['Tempo', range(st.bpm)], ['Feel', st.feel], ['Keys & harmony', st.keys], ['Era', st.era], ['Origin', st.origin]]) +
        '\n\n## Producers and artists to study\n' + table(['Name', 'What to study'], st.study) +
        '\n\n> Search these names with "studio session", "making a beat" or "Genius Deconstructed" on YouTube, and read the credits of their songs on Spotify, Genius or Discogs.' +
        '\n\n## Sound palette\n' + table(['Sound', 'How to get or make it'], st.palette) +
        '\n\n## Classic gear and modern equivalents\n' + st.gear +
        (st.culture ? '\n\n## Respect the culture\n' + st.culture : ''),
      steps: [
        'Build a "' + n + ' references" playlist of at least 10 songs from the names above.',
        'For 3 of those songs, tap the BPM with the Metronome, find the key with the Theory Explorer, and write the structure with timestamps.',
        'Write down 5 things all three songs share (drum placement, bass type, melody instrument, vocal style, mix character).',
        'Create a ' + n + ' sound kit folder using the palette table: kicks, snares/claps, hats, percussion, 808 or bass, melodic sounds, FX.',
        'Open Part 3 and play the demo beat in the Beat Lab. Mute each layer to hear what it contributes.',
        'Watch at least two of the videos below and write three techniques you will use.'
      ],
      tips: ['Study the originals before the imitators: go back to the records that defined the sound.', 'Read interviews with the producers; they often explain their gear and process.', 'Keep notes on what makes each producer unique, not only what they share.'],
      mistakes: ['Learning a style only from "type beat" tutorials without hearing the classic records.', 'Ignoring the culture and context the music came from.'],
      assignment: {
        title: n + ' Listening Lab & Kit',
        brief: 'Train your ears on ' + n + ' and build the sounds you will produce with.',
        deliverables: ['A playlist of 10+ ' + n + ' references', 'Analysis of 3 songs: BPM, key, structure, instruments, vocal style, mix notes', 'A ' + n + ' sound kit folder organised by category', 'Three techniques learned from the videos, written in your journal']
      },
      quiz: [st.quiz[0],
        { q: 'Which description best matches ' + n + '?', a: sigQ.a, c: sigQ.c, why: st.sig + '.' },
        { q: 'Where did ' + n + ' develop?', a: originQ.a, c: originQ.c, why: n + ': ' + st.origin + '.' }],
      watch: watchFor(st, 1),
      tools: ['metronome', 'piano']
    });

    const p2 = Object.assign({}, common, {
      id: st.id + '-2', part: 2,
      title: n + ' · Part 2: Drums & Groove',
      minutes: 90,
      summary: 'Program authentic ' + n + ' drums: placement, swing, velocity, variations and processing.',
      objectives: ['Program the core ' + n + ' drum patterns from memory', 'Apply the right swing, velocity and timing', 'Process drums for the ' + n + ' sound'],
      body: '## Tempo and feel\nSet your project between **' + range(st.bpm) + '**. Feel: **' + st.feel + '**.' + (st.swing ? ' Swing: **' + st.swing + '**.' : '') +
        '\n\n## Drum programming\n' + st.drums +
        '\n\n## Patterns in the Beat Lab\nUse the buttons above to load each pattern. Mute rows to hear their roles, change the swing, then rebuild the pattern in your DAW with your own samples.\n\n' +
        list((st.patterns || []).map(function (p) { return '**' + p.name + '** · ' + p.bpm + ' BPM' + (p.note ? ': ' + p.note : ''); })) +
        (st.drumProcessing ? '\n\n## Drum processing\n' + st.drumProcessing : '') +
        '\n\n## Groove checklist\n' + list([
          'Kick and snare placement matches your references',
          'Hats have velocity variation (no machine-gun repetition)',
          'Something changes every 4 bars and a fill or drop happens every 8',
          'Drums are routed to a drum bus',
          'The loop still grooves with the melody muted'
        ]),
      steps: [
        'Set your DAW project inside ' + range(st.bpm) + ' and load your ' + n + ' drum kit.',
        'Load each pattern in the Beat Lab and listen with rows muted one by one.',
        'Rebuild every pattern in your DAW with your own samples.',
        'Apply the swing and velocity approach described above; compare with a reference.',
        'Make a 4-bar loop using the 3 + 1 rule: three bars the same, the fourth varied.',
        'Add a fill or dropout at bar 8 and a transition into a new section.',
        'Route drums to a bus and apply the processing described above.',
        'Bounce an 8-bar drum loop as WAV.'
      ],
      tips: st.tips,
      mistakes: st.mistakes,
      assignment: {
        title: n + ' Drum Library',
        brief: 'Build the drum patterns you will reuse in every ' + n + ' beat.',
        deliverables: ['All patterns from this lesson rebuilt in your DAW', 'Two original variations of your own', 'An 8-bar loop with a fill or dropout', 'A processed drum bus', 'A bounced WAV drum loop saved to your library']
      },
      quiz: [st.quiz[1],
        { q: 'What tempo range is typical for ' + n + '?', a: tempoQ.a, c: tempoQ.c, why: n + ' usually sits around ' + range(st.bpm) + ' (' + st.feel + ').' },
        pick(POOL.drums, idx)],
      watch: watchFor(st, 2),
      tools: ['drums'],
      beats: st.patterns || []
    });

    const p3 = Object.assign({}, common, {
      id: st.id + '-3', part: 3,
      title: n + ' · Part 3: Melody, Samples & Low End',
      minutes: 120,
      summary: 'Write ' + n + ' melodies, chords and samples, and the bass or 808 that holds them up. Includes a playable demo beat.',
      objectives: ['Write melodies and harmony in the ' + n + ' style', 'Write a bass or 808 line that locks with the drums', 'Recreate and then reinvent the demo beat'],
      body: '## Melody, chords and samples\n' + st.melody +
        '\n\n## Bass and 808\n' + st.bass +
        '\n\n## The demo beat\nUse the Play button above to open it in the Beat Lab. ' + (st.demoNote || '') + ' The melodic layers show every note like a piano roll; use **Copy as text** in the Beat Lab to read the exact notes, then rebuild it in your DAW with real sounds.' +
        '\n\n## Writing method\n' + (st.method || []).map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n'),
      steps: [
        'Play the demo beat in the Beat Lab. Mute the melody, then the chords, then the bass, and listen to what each adds.',
        'Use Copy as text in the Beat Lab and rebuild the demo note-for-note in your DAW with your own sounds.',
        'Follow the writing method above to create three original 8-bar loops.',
        'Write a bass or 808 line for your best loop, in key, locked to the kick.',
        'Add a counter-melody or texture that answers the main idea.',
        'Process the melody (EQ, filter, reverb, delay, saturation) to match your references.',
        'Save the loop and bass as MIDI and audio in your ' + n + ' library.'
      ],
      tips: st.tips,
      mistakes: st.mistakes,
      assignment: {
        title: n + ' Loops & Low End',
        brief: 'Create original loops that could start a real record.',
        deliverables: ['The demo beat recreated in your DAW', 'Three original 8-bar ' + n + ' loops', 'A bass or 808 line in key for each loop', 'Your best loop extended to 16 bars with drums', 'Loops saved as MIDI and WAV with BPM and key in the filenames']
      },
      quiz: [st.quiz[2], pick(POOL.melody, idx), pick(POOL.melody, idx + 3)],
      watch: watchFor(st, 3),
      tools: ['drums', 'piano', 'synth'],
      beats: st.demo ? [st.demo] : []
    });

    const p4 = Object.assign({}, common, {
      id: st.id + '-4', part: 4,
      title: n + ' · Part 4: Arrangement, Vocals, Mix & Selling',
      minutes: 180,
      summary: 'Turn the loop into a full ' + n + ' beat, leave room for the artist, mix, master, package and sell it.',
      objectives: ['Arrange a complete ' + n + ' beat bar by bar', 'Produce and mix with vocals in mind', 'Deliver an industry-standard beat package and pitch it'],
      body: '## Arrangement template\n' + table(['Bars', 'Section', 'What happens'], st.arrangement) +
        (demoBars ? '\n\nAt ' + demoBpm + ' BPM, ' + demoBars + ' bars is about **' + clock(demoBpm, demoBars) + '**.' : '') +
        '\n\n## Vocals: the pocket and the session\n' + st.vocals +
        '\n\n## Mixing the beat\n' + st.mix +
        '\n\n## Mastering and export\n' + st.master +
        '\n\nEvery beat you sell or send should include:\n' + list([
          'Tagged MP3 preview (producer tag in the intro)',
          'Untagged 24-bit WAV of the full beat',
          'Trackouts / stems: each instrument group as a WAV from bar 1, no master processing',
          'Filenames with title, BPM and key (e.g. "Nightshift_92bpm_Fmin.wav")',
          'Licence terms or a producer agreement'
        ]) +
        '\n\n## Selling and placing ' + n + ' beats\n' + st.sell,
      steps: [
        'Lay out the arrangement template in your DAW with markers for each section.',
        'Build each section from your Part 3 loop, adding or removing layers as the table says.',
        'Add a change every 4–8 bars and a transition into every new section.',
        'Mute the melody and check the drums and bass groove on their own; then check the beat leaves room for a vocal.',
        'Mix following the notes above and compare with a reference at matched loudness.',
        'Master to the target, then export the full beat package.',
        'Write the title, tags and description, and upload or pitch the beat.'
      ],
      tips: st.tips,
      mistakes: st.mistakes,
      assignment: {
        title: 'Sellable ' + n + ' Beat',
        brief: 'Your capstone for this style: a complete beat an artist could record on today.',
        deliverables: ['A full ' + n + ' beat (2:30+) following the arrangement template', 'Mixed and mastered, compared with 2 references at matched loudness', 'The full export package: tagged MP3, untagged WAV, stems, labelled files', 'A title, tags and description written for your beat store or YouTube', 'Feedback from at least two artists or producers', 'Stretch: record an artist (or yourself) on the beat'],
        stretch: st.capstone
      },
      quiz: [st.quiz[3], pick(POOL.sell, idx), pick(POOL.sell, idx + 2)],
      watch: watchFor(st, 4),
      tools: ['drums', 'calc'],
      beats: st.demo ? [st.demo] : []
    });

    return [p1, p2, p3, p4].concat((st.extra || []).map(function (l) { return Object.assign({}, common, l); }));
  }

  // Registers a hip-hop semester. Lessons are built in hhFinalize() once every style is
  // known, so quiz distractors can draw on all styles.
  A.hhSemester = function (spec) {
    spec.styles.forEach(function (st) { A.hhStyles.push(st); st.sem = spec.id; });
    A.semesters.push({
      id: spec.id, no: spec.no, title: spec.title, tagline: spec.tagline, weeks: spec.weeks,
      outcomes: spec.outcomes, hiphop: true, lessons: [], _spec: spec
    });
  };

  A.hhFinalize = function () {
    const all = A.hhStyles;
    A.semesters.forEach(function (sem) {
      const spec = sem._spec;
      if (!spec) return;
      const lessons = [];
      spec.styles.forEach(function (st) {
        if (st.lessons) {
          st.lessons.forEach(function (l, i) { lessons.push(Object.assign({ styleId: st.id, styleName: st.name, group: st.name, part: i + 1 }, l)); });
        } else {
          lessons.push.apply(lessons, makeStyle(st, all.indexOf(st), all));
        }
      });
      (spec.extra || []).forEach(function (l) { lessons.push(Object.assign({ group: spec.extraGroup || 'Industry skills' }, l)); });
      if (spec.project) lessons.push(Object.assign({ group: 'Semester project', project: true }, spec.project));
      sem.lessons = lessons;
      delete sem._spec;
    });
    if (A.flAttach) A.flAttach();
  };
})();
