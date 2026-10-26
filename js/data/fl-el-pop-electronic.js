/* FL Studio builds for the elective genres: pop and electronic. */
(function () {
  const A = window.ACADEMY, H = A.flHelp;
  const OCT = [[0, 0, 2], [2, 1, 2], [4, 0, 2], [6, 1, 2], [8, 0, 2], [10, 1, 2], [12, 0, 2], [14, 1, 2]];
  const OFFBEAT = [[2, 0, 2], [6, 0, 2], [10, 0, 2], [14, 0, 2]];
  const ROLLING = [[1, 0, 1], [2, 0, 1], [3, 0, 1], [5, 0, 1], [6, 0, 1], [7, 0, 1], [9, 0, 1], [10, 0, 1], [11, 0, 1], [13, 0, 1], [14, 0, 1], [15, 0, 1]];
  const FOUR = { kick: 'x...x...x...x...', clap: '....x.......x...', ohh: '..x...x...x...x.', chh: 'xxxxxxxxxxxxxxxx' };
  const SIDECHAIN = 'Sidechain pumping: route the Kick insert to this insert with right-click on its arrow → *Sidechain to this track*, then load **Fruity Limiter**, switch to **COMP**, choose the kick as the sidechain input, and lower the threshold until the sound ducks on every kick. (Or draw a volume dip on every beat with **Gross Beat**\'s volume envelope.)';
  const BUS = ['Drums bus', 'Fruity Compressor, 2–3 dB of gain reduction.'];

  A.flBuild({
    id: 'g-pop',
    title: 'Dance-pop chorus in A minor',
    bpm: 116, key: 'A minor', scale: 'A B C D E F G', feel: 'four-on-the-floor',
    goal: 'A modern dance-pop track in the style of Dua Lipa\'s "Future Nostalgia" era: a disco-style octave bassline, bright synth chords, a catchy synth hook, four-on-the-floor drums and sidechain pumping.',
    sounds: [['Kick', 'Sampler: a tight, punchy kick', 'Four on the floor.'], ['Clap', 'Sampler: a bright clap', '2 and 4.'], ['Hats', 'Sampler: closed and open hats', '16ths closed, off-beat open.'], ['Synth chords', 'Sytrus or FLEX: a bright poly-synth / pluck', 'Short and punchy.'], ['Lead', 'FLEX or Sytrus: a bright synth lead', 'The hook.'], ['Bass', 'Sytrus, Transistor Bass or 3xOsc (saw + square)', 'A funky analog-style bass.']],
    chords: {
      lab: 'pluck', plugin: 'Sytrus or FLEX poly-synth', roman: 'i – VI – III – VII',
      why: 'Am → F → C → G: the most-used minor pop progression (it is the famous I–V–vi–IV starting on vi). It sounds catchy and a little emotional, perfect for a dance chorus. Played in short off-beat stabs.',
      list: H.stabs([['Am', 'A3 C4 E4'], ['F', 'A3 C4 F4'], ['C', 'G3 C4 E4'], ['G', 'G3 B3 D4']], [[0, 2], [3, 2], [6, 2], [10, 2], [12, 3]])
    },
    melody: {
      lab: 'lead', plugin: 'FLEX or Sytrus synth lead',
      why: 'A short, repeated hook with a rhythmic pickup. Pop hooks repeat the same rhythm and change only one or two notes.',
      notes: '0:E5:2 2:E5:2 4:D5:2 6:C5:2 8:D5:3 11:E5:3 16:F5:2 18:E5:2 20:D5:2 22:C5:2 24:C5:3 27:A4:3 32:E5:2 34:E5:2 36:D5:2 38:C5:2 40:D5:3 43:E5:3 48:G5:2 50:F5:2 52:E5:2 54:D5:2 56:D5:4 60:B4:4'
    },
    drums: { why: 'Four-on-the-floor: a kick on every beat, claps on 2 and 4, open hats on the off-beats (the "tss" between kicks) and 16th closed hats.', rows: FOUR },
    bass: { lab: 'moog', plugin: 'Sytrus / Transistor Bass / 3xOsc', is808: false, title: 'The disco octave bass', why: 'The classic disco and dance-pop bass: 8th notes jumping between the root and the octave above. It drives the whole track.', notes: H.perBar(['A1', 'F1', 'C2', 'G1'], OCT) },
    mixer: [['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'], ['Clap', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 12%.'], ['Hats', 'High-pass at 400 Hz.'], ['Synth chords', 'High-pass at 200 Hz. ' + SIDECHAIN], ['Lead', 'High-pass at 300 Hz. Fruity Delay 3, 1/8 dotted, wet 12%. Fruity Reeverb 2, wet 15%.'], ['Bass', 'High-pass at 30 Hz. Fruity Compressor. Sidechain lightly to the kick.'], BUS],
    arrangement: [['1–8', 'Intro', 'Chords and filtered drums.'], ['9–24', 'Verse', 'Bass and drums; chords quieter.'], ['25–32', 'Pre-chorus', 'Build: drums thin, riser, snare roll.'], ['33–48', 'Chorus', 'Everything, lead hook.'], ['49–64', 'Verse 2', 'As verse 1 with new details.'], ['65–72', 'Pre-chorus', 'Build.'], ['73–88', 'Chorus', 'Everything.'], ['89–96', 'Outro', 'Drums and bass, then fade.']],
    vocals: ['Pop is built around the vocal: leave the lead out when the singer is singing the hook.', 'Snare roll + riser into each chorus; a one-beat drop before it hits.', 'Keep the track 2:45–3:15.'],
    write: { progressions: [['i – VI – III – VII', 'Am – F – C – G', 'Catchy (this build)'], ['I – V – vi – IV', 'C – G – Am – F', 'Happy pop'], ['vi – IV – I – V', 'Am – F – C – G', 'Same chords, emotional'], ['i – iv – VI – V', 'Am – Dm – F – E', 'Dramatic']], melody: ['One short rhythm, repeated.', 'Stepwise motion with one leap.', 'Leave room for the vocal.'], bass: ['Octave disco bass or a funky syncopated line.'], drums: ['Four-on-the-floor kick.', 'Clap 2 and 4.', 'Off-beat open hats.'] },
    quiz: [{ q: 'What is "four-on-the-floor"?', a: ['A kick drum on every beat of the bar', 'Four claps per bar', 'A 4-bar loop', 'A type of chord'], c: 0, why: 'A kick on all four beats is the foundation of dance-pop, disco and house.' }]
  });

  A.flBuild({
    id: 'g-kpop',
    title: 'K-pop dance chorus with a trap breakdown in E minor',
    bpm: 122, key: 'E minor', scale: 'E F# G A B C D (D# for the B chord)', feel: 'switches between sections',
    goal: 'A high-energy K-pop chorus in the style of BLACKPINK, Stray Kids and ITZY productions: punchy brass-synth stabs, a big hook, hard drums, and the K-pop trick of switching to a half-time trap breakdown.',
    sounds: [['Kick', 'Sampler: a hard, punchy kick', ''], ['Clap', 'Sampler: a big clap + snare', ''], ['Hats', 'Sampler: closed and open hats', ''], ['Brass stabs', 'FLEX brass or Sytrus brass-synth', 'Huge, short stabs.'], ['Lead', 'FLEX or Harmor: a bright lead or vocal chop', 'The hook.'], ['808 / bass', 'Sampler: an 808', 'Mono + Porta.']],
    chords: {
      lab: 'brass', plugin: 'FLEX brass or Sytrus brass synth', roman: 'i – VI – VII – V',
      why: 'Em → C → D → B major. The B major (with D#) is the harmonic minor V chord, giving K-pop choruses their dramatic, girl-crush energy.',
      list: H.stabs([['Em', 'E4 G4 B4'], ['C', 'E4 G4 C5'], ['D', 'D4 F#4 A4'], ['B', 'D#4 F#4 B4']], [[0, 2], [3, 1], [6, 2], [10, 2]])
    },
    melody: { lab: 'lead', plugin: 'Bright lead or vocal chop', why: 'A chant-like hook with repeated notes: easy to sing and dance to.', notes: '0:B4:2 2:B4:2 4:B4:2 6:G4:2 8:A4:2 10:B4:2 12:D5:4 16:C5:2 18:C5:2 20:C5:2 22:B4:2 24:A4:4 28:G4:4 32:A4:2 34:A4:2 36:A4:2 38:F#4:2 40:A4:2 42:B4:2 44:D5:4 48:D#5:4 52:B4:4 56:F#4:8' },
    drums: { why: 'Hard dance drums: kick on 1 and 3 with syncopation, clap on 2 and 4, 16th hats. In the breakdown, switch to half-time trap.', rows: { kick: 'x.....x.x.......', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', ohh: '..............x.' } },
    extra: [{ after: 'drums', title: 'The K-pop section switch', body: 'K-pop songs change feel between sections. After the second chorus, make an 8-bar **dance break** in half-time trap: same tempo, but the clap moves to beat 3 only, the hats get rolls and the 808 glides.\n\n```\n          1   2   3   4\nKick      x... .... ..x. ....\nClap      .... .... x... ....\nHi-hat    x.x. x.x. x.xx x.x.\n```\n\nUse a riser and a one-beat silence before the switch so the dancers hit it.' }],
    bass: { lab: '808', plugin: 'Sampler with an 808', why: '808 on the roots with the kick and an octave slide at the end.', notes: '0:E2:6 6:E2:2 8:E2:6 16:C2:6 22:C2:2 24:C2:6 32:D2:6 38:D2:2 40:D2:6 48:B1:6 54:B1:2 56:B1:4 60:B2:4g' },
    mixer: [['Kick', 'High-pass at 30 Hz. Fruity Soft Clipper.'], ['Clap', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 10%.'], ['Hats', 'High-pass at 400 Hz.'], ['Brass stabs', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 12%. Fruity Stereo Shaper.'], ['Lead', 'High-pass at 300 Hz. Fruity Delay 3, wet 10%.'], ['808', 'High-pass at 30 Hz. Fruity Blood Overdrive (light). Fruity Limiter.'], BUS],
    arrangement: [['1–8', 'Intro', 'Stabs and a chant.'], ['9–24', 'Verse (rap)', 'Trap feel.'], ['25–32', 'Pre-chorus', 'Melodic, building.'], ['33–48', 'Chorus', 'Everything at full power.'], ['49–64', 'Verse 2', 'New beat variation.'], ['65–72', 'Pre-chorus', 'Build.'], ['73–88', 'Chorus', 'Everything.'], ['89–96', 'Dance break', 'Half-time trap switch.'], ['97–112', 'Final chorus', 'Key change up a semitone (select all notes, press Up once).']],
    vocals: ['K-pop groups split lines between members: make every section sound different.', 'A key change in the final chorus is a classic lift.', 'Silence for one beat before each big section.'],
    write: { progressions: [['i – VI – VII – V', 'Em – C – D – B', 'Dramatic (this build)'], ['i – VII – VI – VII', 'Em – D – C – D', 'Driving'], ['VI – VII – i', 'C – D – Em', 'Rising']], melody: ['Chant-like repeated notes.', 'Different melody style for each section.'], bass: ['808 in trap sections, synth bass in dance sections.'], drums: ['Switch feels between sections.'] },
    quiz: [{ q: 'What is a typical K-pop production trick between sections?', a: ['Never changing anything', 'Switching feel, e.g. from four-on-the-floor to a half-time trap breakdown', 'Removing the vocals', 'Lowering the tempo by half permanently'], c: 1, why: 'K-pop songs change genre and feel between sections to keep energy and choreography fresh.' }]
  });

  A.flBuild({
    id: 'g-hyperpop',
    title: 'Glitchy hyperpop in D major',
    bpm: 160, key: 'D major', scale: 'D E F# G A B C#', feel: 'fast, maximal',
    goal: 'A bright, chaotic hyperpop track in the style of 100 gecs, SOPHIE and Charli XCX\'s "how i\'m feeling now": distorted supersaws, a blown-out 808, pitched-up vocals and glitch edits.',
    sounds: [['Kick', 'Sampler: a distorted kick', ''], ['Snare', 'Sampler: a hard snare', ''], ['Hats', 'Sampler: a closed hat', ''], ['Supersaw', 'Harmor, Sytrus or Toxic Biohazard: a supersaw', 'Unison 7+ voices.'], ['Lead', 'FLEX or Harmor: a bright, plucky or chiptune lead', ''], ['808', 'Sampler: an 808', 'Distorted hard.']],
    chords: { lab: 'lead', plugin: 'Harmor / Sytrus supersaw', roman: 'I – V – vi – IV', why: 'D → A → Bm → G: the happiest pop progression, played on a huge distorted supersaw. Hyperpop takes pop to the extreme.', list: [[0, 16, 'D', 'D4 F#4 A4'], [16, 16, 'A', 'C#4 E4 A4'], [32, 16, 'Bm', 'D4 F#4 B4'], [48, 16, 'G', 'D4 G4 B4']] },
    melody: { lab: 'square', plugin: 'Chiptune / pluck lead', why: 'A fast, bright, video-game-like melody with octave jumps.', notes: H.arp(['D5 F#5 A5 D6', 'C#5 E5 A5 C#6', 'D5 F#5 B5 D6', 'D5 G5 B5 D6'], [0, 1, 2, 3, 2, 1, 3, 2], 2) },
    drums: { why: 'Hyperpop drums are often trap-style but harder and faster, with glitches.', rows: { kick: 'x.....x...x.....', snare: '........x.......', chh: 'x.xxx.xxx.xxx.xx' }, extra: ['Glitch edits: use **Gross Beat** stutter presets, or slice a bar with the Slice tool and repeat tiny pieces. **Fruity Granulizer** turns any sound into glitchy grains.'] },
    bass: { lab: 'reese', plugin: 'Sampler with an 808, heavily distorted', why: 'A loud, distorted 808 on the roots with slides.', notes: '0:D2:6 6:D2:4 10:D2:6 16:A1:6 22:A1:4 26:A1:4 30:B1:2g 32:B1:6 38:B1:4 42:B1:6 48:G1:6 54:G1:4 58:G1:3 61:A1:3g' },
    mixer: [['Kick / Snare', 'Fruity Soft Clipper, heavy.'], ['Hats', 'High-pass at 400 Hz.'], ['Supersaw', 'Fruity Blood Overdrive or Distructor → Fruity Reeverb 2 → Fruity Stereo Shaper.'], ['Lead', 'Fruity Squeeze (bitcrush) for chiptune grit.'], ['808', 'Distructor (heavy) → Fruity Limiter.'], ['Vocals', 'Pitcher or NewTone set to D major (hard tuning) → Pitch Shifter up 3–7 semitones for the "nightcore" voice.']],
    arrangement: [['1–8', 'Intro', 'Lead alone, glitched.'], ['9–24', 'Chorus', 'Everything, maximal.'], ['25–40', 'Verse', 'Strip back to 808 and vocal.'], ['41–56', 'Chorus', 'Everything.'], ['57–64', 'Bridge', 'Switch genre: drum & bass or metal guitars for 8 bars.'], ['65–80', 'Final chorus', 'Everything, louder.']],
    vocals: ['Hard-tuned, pitched-up vocals are part of the sound (Pitcher, NewTone, Pitch Shifter).', 'Sudden genre switches are welcome in hyperpop.', 'Glitch every transition.'],
    write: { progressions: [['I – V – vi – IV', 'D – A – Bm – G', 'Bright (this build)'], ['IV – I – V – vi', 'G – D – A – Bm', 'Euphoric']], melody: ['Fast, bright, chiptune-like.', 'Octave jumps.'], bass: ['Distorted 808.'], drums: ['Hard trap or fast four-on-the-floor.', 'Glitches.'] },
    quiz: [{ q: 'Which FL Studio plugin is good for glitchy stutters and repeats?', a: ['Gross Beat', 'Fruity Balance', 'Fruity Notebook', 'Fruity dB Meter'], c: 0, why: 'Gross Beat manipulates time and volume for stutters, repeats and tape stops.' }]
  });

  A.flBuild({
    id: 'g-house',
    title: 'Deep house groove in A minor',
    bpm: 124, key: 'A minor (Dorian)', scale: 'A B C D E F# G (Dorian: F# natural 6th)', feel: 'four-on-the-floor, light swing', labSwing: 54, swing: 'a little (10–20%)',
    goal: 'A classic deep house groove in the tradition of Chicago and New York house (Larry Heard, Kerri Chandler) and modern deep house: jazzy organ/piano stabs, an off-beat bass, four-on-the-floor drums with shakers and open hats.',
    sounds: [['Kick', 'Sampler: a round house kick', 'A 909-style kick works well.'], ['Clap', 'Sampler: a clap', ''], ['Hats', 'Sampler: closed and open hats', ''], ['Shaker', 'Sampler: a shaker', ''], ['Keys', 'FLEX organ or FL Keys piano', 'Classic house piano or organ stabs.'], ['Bass', '3xOsc sine/triangle or FLEX deep bass', 'Round and deep.']],
    chords: { lab: 'organ', plugin: 'FLEX organ or FL Keys', roman: 'i7 – IV9 – i7 – VII6', why: 'Am7 → D9 → Am7 → G6. The D9 uses F# (the Dorian natural 6th), giving that warm, jazzy deep-house sound. Played as rhythmic stabs.', list: H.stabs([['Am7', 'G3 A3 C4 E4'], ['D9', 'F#3 A3 C4 E4'], ['Am7', 'G3 A3 C4 E4'], ['G6', 'E3 G3 B3 D4']], [[0, 3], [3, 3], [10, 4]]) },
    melody: { lab: 'epiano', plugin: 'FL Keys electric piano', why: 'A small, jazzy phrase on top, like a sampled vocal or keyboard lick.', notes: '6:E5:2 8:G5:2 10:A5:4 22:F#5:2 24:A5:2 26:C6:4 38:E5:2 40:F#5:2 42:A5:4 54:D5:2 56:E5:2 58:G5:4' },
    drums: { why: 'Kick on every beat, clap on 2 and 4, open hats on the off-beats, 16th shakers. House is about the groove of these four sounds.', rows: { kick: 'x...x...x...x...', clap: '....x.......x...', ohh: '..x...x...x...x.', perc: 'x.xxx.xxx.xxx.xx' }, names: { perc: 'Shaker' } },
    bass: { lab: 'sub', plugin: '3xOsc sine/triangle', is808: false, title: 'The off-beat bass', why: 'The bass plays on the off-beats, between the kicks, so kick and bass never clash. This "bounce" is the essence of house.', notes: H.perBar(['A1', 'D2', 'A1', 'G1'], OFFBEAT) },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Clap', 'Fruity Reeverb 2, wet 15%.'], ['Hats / Shaker', 'High-pass at 400 Hz. Pan the shaker.'], ['Keys', 'High-pass at 150 Hz. Fruity Reeverb 2, wet 15%. ' + SIDECHAIN], ['Bass', 'High-pass at 30 Hz. Sidechain to the kick (lightly).'], BUS],
    arrangement: [['1–16', 'Intro', 'Drums only (DJs mix here).'], ['17–32', 'Groove', 'Add bass and keys.'], ['33–48', 'Main', 'Everything plus the melody.'], ['49–56', 'Breakdown', 'Kick out; keys and pads, filter sweep.'], ['57–88', 'Main 2', 'Everything.'], ['89–104', 'Outro', 'Drums only for the DJ.']],
    vocals: ['House often uses a soulful vocal or a short vocal chop.', 'Filter sweeps (Fruity Love Philter automation) build tension.', 'Keep 16-bar intros and outros of drums for DJs.'],
    write: { progressions: [['i7 – IV9', 'Am7 – D9', 'Dorian vamp'], ['i7 – IV9 – i7 – VII6', 'Am7 – D9 – Am7 – G6', 'This build'], ['ii7 – V7 – Imaj7', 'Dm7 – G7 – Cmaj7', 'Jazzy']], melody: ['Short jazzy licks, vocal chops.'], bass: ['Off-beat bass between kicks.'], drums: ['Four-on-the-floor, clap 2 and 4, off-beat open hats, shakers.'] },
    quiz: [{ q: 'Why does the house bass play on the off-beats?', a: ['To be louder', 'So it does not clash with the kick and creates bounce', 'Because it is easier', 'To change key'], c: 1, why: 'Off-beat bass sits between the kicks, the classic house bounce.' }]
  });

  A.flBuild({
    id: 'g-techno',
    title: 'Acid techno with Transistor Bass in F minor',
    bpm: 130, key: 'F minor', scale: 'F G Ab Bb C Db Eb', feel: 'driving, hypnotic',
    goal: 'A driving techno track with a squelchy **acid line** from Transistor Bass (FL Studio\'s TB-303-style synth), a rumbling kick, a dub chord stab and hypnotic percussion, in the tradition of Detroit and Berlin techno.',
    sounds: [['Kick', 'Sampler: a hard techno kick (909 style)', ''], ['Clap', 'Sampler: a clap', ''], ['Hats', 'Sampler: closed hats and a ride', ''], ['Perc', 'Sampler: a rim or metallic perc', ''], ['Acid line', 'Transistor Bass', 'FL\'s 303-style synth: saw wave, cutoff low, resonance high, accent and slide per note.'], ['Dub stab', 'FLEX or Sytrus: a short chord stab', 'With a long delay.']],
    chords: { lab: 'stab', plugin: 'FLEX / Sytrus stab with Fruity Delay 3', roman: 'i7 (one chord)', why: 'Techno often uses **one chord** for the whole track: Fm7, played as a short off-beat stab drowned in delay (a "dub techno" chord). Repetition is hypnotic.', list: H.stabs([['Fm7', 'F3 Ab3 C4 Eb4'], ['Fm7', 'F3 Ab3 C4 Eb4'], ['Fm7', 'F3 Ab3 C4 Eb4'], ['Fm7', 'F3 Ab3 C4 Eb4']], [[2, 1], [11, 1]]) },
    melody: { lab: 'moog', plugin: 'Transistor Bass (acid line)', why: 'The acid line: 16th notes around F with octave jumps and a few slides. In Transistor Bass, mark some notes as **slide** and some as **accent**, then slowly automate the **cutoff** and **resonance** knobs over 16 bars. That movement is what makes acid exciting.', notes: '0:F2:1 1:F2:1 2:F3:1 3:F2:1 4:Ab2:1 5:F2:1 6:C3:1 7:F2:1 8:Eb3:1 9:F2:1 10:F3:1 11:F2:1 12:Ab2:1 13:Bb2:1 14:C3:1 15:F2:1 16:F2:1 17:F2:1 18:F3:1 19:F2:1 20:Ab2:1 21:F2:1 22:Db3:1 23:C3:1 24:F2:1 25:F2:1 26:Eb3:1 27:F2:1 28:Ab2:1 29:C3:1 30:Eb3:1 31:F3:1' },
    drums: { why: 'Kick on every beat, clap on 2 and 4, off-beat open hats and 16th closed hats, plus a rim pattern that loops against the kick.', rows: { kick: 'x...x...x...x...', clap: '....x.......x...', chh: 'xxxxxxxxxxxxxxxx', ohh: '..x...x...x...x.', perc: '..x..x..x..x..x.' } },
    extra: [{ after: 'drums', title: 'The rumble kick', body: 'Modern techno has a "rumble" under the kick:\n1. Send the kick to an extra insert called *Rumble*.\n2. On it, load **Fruity Reeverb 2** (100% wet, long decay), then **Fruity Parametric EQ 2** with a low-pass around 150–200 Hz, then **Fruity Fast Dist** or **Distructor**.\n3. Sidechain the Rumble insert to the kick with **Fruity Limiter** (COMP mode) so the rumble ducks on every kick and swells in between.' }],
    mixer: [['Kick', 'High-pass at 25 Hz. Fruity Soft Clipper.'], ['Clap', 'Fruity Reeverb 2, wet 15%.'], ['Hats / Ride', 'High-pass at 500 Hz.'], ['Acid line', 'Fruity Blood Overdrive (light) → Fruity Delay 3 (1/8 dotted, wet 10%).'], ['Dub stab', 'Fruity Delay 3: 1/8 dotted, feedback 50%, wet 40% → Fruity Reeverb 2. Automate the delay feedback for dub swirls.'], BUS],
    arrangement: [['1–16', 'Intro', 'Kick and hats.'], ['17–32', 'Build', 'Add the acid line, filter closed.'], ['33–64', 'Main', 'Everything; open the acid filter slowly.'], ['65–72', 'Break', 'Kick out; acid line and stab, max resonance.'], ['73–104', 'Main 2', 'Everything, peak.'], ['105–120', 'Outro', 'Kick and hats.']],
    vocals: ['Techno is mostly instrumental; add short vocal samples sparingly.', 'Change something every 8 or 16 bars; automation is your arrangement.', 'Long intros and outros for DJs.'],
    write: { progressions: [['i7 (one chord)', 'Fm7', 'Hypnotic (this build)'], ['i – bVII', 'Fm – Eb', 'Driving'], ['No chords', 'Only drums and an acid line', 'Minimal']], melody: ['16th-note acid lines with octave jumps.', 'Slides and accents.', 'Automate cutoff and resonance.'], bass: ['Rumble kick or a simple off-beat sub.'], drums: ['Four-on-the-floor, 909 sounds, rides and percussion loops.'] },
    quiz: [{ q: 'Which FL Studio synth imitates the Roland TB-303 for acid lines?', a: ['Transistor Bass', 'FL Keys', 'Sakura', 'FPC'], c: 0, why: 'Transistor Bass is FL\'s 303-style bass synth with slide and accent per note.' }]
  });

  A.flBuild({
    id: 'g-trance',
    title: 'Uplifting trance in A minor',
    bpm: 138, key: 'A minor', scale: 'A B C D E F G', feel: 'four-on-the-floor, rolling',
    goal: 'An uplifting trance track in the style of Armin van Buuren and Above & Beyond: huge supersaw chords, a 16th-note arpeggio, a rolling bassline, a soaring lead, and a long breakdown with a big build.',
    sounds: [['Kick', 'Sampler: a punchy trance kick', ''], ['Clap', 'Sampler: a clap', ''], ['Hats', 'Sampler: open and closed hats', ''], ['Supersaw', 'Harmor, Sytrus, Toxic Biohazard or Sawer', 'Huge, wide supersaw with unison.'], ['Arp', 'Sytrus or 3xOsc pluck', 'Short pluck for the arpeggio.'], ['Rolling bass', 'Sytrus, 3xOsc or Sawer bass', 'Short, punchy notes.']],
    chords: { lab: 'pad', plugin: 'Supersaw (Harmor / Sytrus / Toxic Biohazard)', roman: 'i – VI – III – VII', why: 'Am → F → C → G: the emotional progression behind countless trance anthems. Played as long supersaw chords with sidechain pumping.', list: [[0, 16, 'Am', 'A3 C4 E4'], [16, 16, 'F', 'A3 C4 F4'], [32, 16, 'C', 'G3 C4 E4'], [48, 16, 'G', 'G3 B3 D4']] },
    melody: { lab: 'pluck', plugin: 'Pluck arpeggio', why: 'A 16th-note arpeggio of each chord. Trance arps keep the energy moving even in calm sections. In FL you can also use the channel **Arpeggiator** (Channel settings → Miscellaneous functions → Arp) on held chords.', notes: H.arp(['A4 C5 E5 A5', 'A4 C5 F5 A5', 'G4 C5 E5 G5', 'G4 B4 D5 G5'], [0, 1, 2, 3, 2, 1, 3, 2, 0, 2, 1, 3, 0, 1, 2, 3], 1) },
    drums: { why: 'Four-on-the-floor with off-beat open hats and 16th closed hats.', rows: FOUR },
    bass: { lab: 'moog', plugin: 'Sytrus / 3xOsc / Sawer bass', is808: false, title: 'The rolling bass', why: 'Trance bass plays the 3 off-beat 16ths of each beat (never on the kick): the "rolling" gallop.', notes: H.perBar(['A1', 'F1', 'C2', 'G1'], ROLLING) },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Clap', 'Fruity Reeverb 2, wet 15%.'], ['Hats', 'High-pass at 400 Hz.'], ['Supersaw', 'Fruity Parametric EQ 2: high-pass at 200 Hz. Fruity Reeverb 2: hall, wet 25%. Fruity Stereo Shaper. ' + SIDECHAIN], ['Arp', 'Fruity Delay 3: 1/8 dotted, wet 20%.'], ['Rolling bass', 'High-pass at 30 Hz. Sidechain to the kick (strong).'], BUS],
    arrangement: [['1–32', 'Intro', 'Drums and bass build.'], ['33–64', 'Main 1', 'Add arp and chords.'], ['65–96', 'Breakdown', 'Drums out; chords, piano version of the lead, emotional.'], ['97–112', 'Build', 'Snare roll speeding up (4ths → 8ths → 16ths), white-noise riser, filter opening.'], ['113–144', 'Drop / Main 2', 'Everything plus the lead.'], ['145–176', 'Outro', 'Drums and bass.']],
    vocals: ['Vocal trance uses a long, emotional female or male vocal in the breakdown.', 'The snare roll build is the most important transition in trance.', 'Arrange in 16- and 32-bar blocks.'],
    write: { progressions: [['i – VI – III – VII', 'Am – F – C – G', 'Uplifting (this build)'], ['i – VI – VII', 'Am – F – G', 'Anthemic'], ['VI – VII – i', 'F – G – Am', 'Euphoric']], melody: ['16th arps of the chords.', 'Soaring lead with long notes in the drop.'], bass: ['Rolling off-beat 16ths.'], drums: ['Four-on-the-floor; snare-roll builds.'] },
    quiz: [{ q: 'How does a rolling trance bassline avoid clashing with the kick?', a: ['It plays only on the kick', 'It plays the off-beat 16ths between kicks', 'It is muted', 'It plays one long note'], c: 1, why: 'The bass fills the three 16ths after each kick, creating a gallop.' }]
  });

  A.flBuild({
    id: 'g-dnb',
    title: 'Liquid drum & bass in F minor',
    bpm: 174, key: 'F minor', scale: 'F G Ab Bb C Db Eb', feel: 'fast two-step breakbeat',
    goal: 'A liquid drum & bass track in the style of Hospital Records artists (London Elektricity, Netsky, High Contrast): lush Rhodes chords, a fast two-step breakbeat, a deep Reese bass and a soulful lead.',
    sounds: [['Kick', 'Sampler: a punchy DnB kick', ''], ['Snare', 'Sampler: a sharp, bright DnB snare', ''], ['Hats', 'Sampler: closed hats / ride', ''], ['Break', 'Sampler or Slicex: a breakbeat loop (royalty-free)', 'Layered quietly under the drums.'], ['Rhodes', 'FL Keys (electric piano)', ''], ['Reese bass', 'Harmor, Sytrus or 3xOsc: two detuned saws, low-passed', 'The classic DnB bass.']],
    chords: { lab: 'epiano', plugin: 'FL Keys Rhodes', roman: 'i9 – VII – VImaj7 – v7', why: 'Fm9 → Eb → Dbmaj7 → Cm7: soulful, jazzy harmony over fast drums is what makes DnB "liquid".', list: [[0, 16, 'Fm9', 'Ab3 C4 Eb4 G4'], [16, 16, 'Eb', 'G3 Bb3 Eb4'], [32, 16, 'Dbmaj7', 'F3 Ab3 C4 Db4'], [48, 16, 'Cm7', 'Eb3 G3 Bb3 C4']] },
    melody: { lab: 'bell', plugin: 'FLEX soft lead or vocal', why: 'A slow, singing melody over fast drums: the contrast is the liquid DnB sound.', notes: '0:C5:8 8:Eb5:4 12:F5:4 16:G5:8 24:Eb5:8 32:F5:6 38:Eb5:2 40:C5:8 48:Bb4:8 56:G4:8' },
    drums: { why: 'The two-step: kick on beat 1 and the "and" of beat 3, snare on beats 2 and 4. At 174 BPM this is fast and rolling. Ghost snares fill the gaps.', rows: { kick: 'x.........x.....', snare: '....x..o....x..o', chh: 'x.x.x.x.x.x.x.x.' }, extra: ['Layer a chopped breakbeat quietly underneath (Slicex), high-passed at 300 Hz, for the classic DnB texture.'] },
    bass: { lab: 'reese', plugin: 'Harmor / Sytrus / 3xOsc Reese', is808: false, title: 'The Reese bass', why: 'A Reese bass is two saw waves slightly detuned, low-passed, so it "moves" and growls. Long notes on the roots.', notes: '0:F1:10 10:F1:6 16:Eb1:16 32:Db1:10 42:Db1:6 48:C1:12 60:Eb1:4' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'High-pass at 200 Hz. Fruity Reeverb 2: short, wet 15%.'], ['Hats / Break', 'High-pass at 300–400 Hz.'], ['Rhodes', 'High-pass at 150 Hz. Vintage Chorus. Fruity Reeverb 2, wet 20%.'], ['Lead', 'Fruity Reeverb 2: hall, wet 25%.'], ['Reese bass', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Blood Overdrive (light). Keep the sub (below 100 Hz) mono: Fruity Stereo Shaper or a separate sine sub.'], BUS],
    arrangement: [['1–32', 'Intro', 'Rhodes and break, DJ-friendly.'], ['33–64', 'Drop 1', 'Everything.'], ['65–96', 'Breakdown', 'Drums out, chords and vocal.'], ['97–128', 'Drop 2', 'Everything, new bass variation.'], ['129–160', 'Outro', 'Drums for DJs.']],
    vocals: ['Liquid DnB loves soulful vocals in the breakdown.', 'Drum fills and reverse cymbals into drops.', 'Arrange in 32-bar blocks.'],
    write: { progressions: [['i9 – VII – VImaj7 – v7', 'Fm9 – Eb – Dbmaj7 – Cm7', 'Liquid (this build)'], ['i7 – iv7', 'Fm7 – Bbm7', 'Rolling'], ['VImaj7 – VII – i', 'Dbmaj7 – Eb – Fm', 'Emotional']], melody: ['Slow, singing lines.', 'Rhodes and pads.'], bass: ['Reese bass: detuned saws, low-passed.'], drums: ['Two-step at 170–176 BPM.', 'Ghost snares.', 'Break layer.'] },
    quiz: [{ q: 'What is the basic drum & bass two-step pattern?', a: ['Kick on every beat', 'Kick on 1 and the "and" of 3, snare on 2 and 4', 'Snare on beat 3 only', 'No kick'], c: 1, why: 'That syncopated two-step at around 174 BPM is the DnB foundation.' }]
  });

  A.flBuild({
    id: 'g-dubstep',
    title: 'Dubstep with a wobble bass in F minor',
    bpm: 140, key: 'F minor', scale: 'F G Ab Bb C Db Eb', feel: 'half-time (snare on beat 3)',
    goal: 'A dubstep track with a **wobble bass**: a bass synth whose filter is moved by an LFO synced to the tempo, half-time drums and a dark atmosphere, in the tradition of UK dubstep (Skream, Benga) and the heavier US style.',
    sounds: [['Kick', 'Sampler: a punchy kick', ''], ['Snare', 'Sampler: a huge snare', ''], ['Hats', 'Sampler: closed hats', ''], ['Wobble bass', 'Harmor or Sytrus: saw/square bass with a low-pass filter', 'The filter cutoff is moved by an LFO.'], ['Sub', '3xOsc sine', 'Clean sub under the wobble.'], ['Pad', 'FLEX or Harmor dark pad', '']],
    chords: { lab: 'strings', plugin: 'Dark pad', roman: 'i – VI', why: 'Fm → Db for the intro and breakdown. In the drop, the bass is the star.', list: [[0, 32, 'Fm', 'F3 Ab3 C4'], [32, 32, 'Db', 'F3 Ab3 Db4']] },
    melody: { lab: 'bell', plugin: 'FLEX bell or pluck', why: 'A short, eerie motif for the intro and breakdown.', notes: '0:C5:4 4:Ab4:4 8:F4:8 32:Db5:4 36:C5:4 40:Ab4:8' },
    drums: { why: 'Half-time: kick on beat 1, snare on beat 3 (it feels like 70 BPM). Hats in 8ths or triplets.', rows: { kick: 'x.........x.....', snare: '........x.......', chh: 'x.x.x.x.x.x.x.x.' } },
    extra: [{ after: 'bass', title: 'Make the wobble', body: '1. Open **Harmor** (or Sytrus) and start from a basic saw. Set the filter to low-pass with some resonance.\n2. Assign an **LFO** to the filter cutoff, and **tempo-sync** it.\n3. Change the LFO rate during the drop: 1/4, 1/8, 1/8 triplet, 1/16. Automate the rate (right-click the knob → *Create automation clip*) so it changes every beat or bar. That rhythm is the wobble.\n4. Layer a clean sine **sub** an octave lower (3xOsc) playing the same notes, so the low end stays solid.\n5. Add **Fruity Blood Overdrive** or **Distructor** after the wobble for growl, and **Fruity Multiband Compressor** to control it.' }],
    bass: { lab: 'reese', plugin: 'Harmor / Sytrus wobble + 3xOsc sine sub', is808: false, title: 'The wobble bass notes', why: 'The notes are simple (F and Db with a few jumps); the movement comes from the LFO on the filter.', notes: '0:F1:8 8:F1:4 12:Ab1:4 16:F1:8 24:C2:4 28:Eb1:4 32:Db1:8 40:Db1:4 44:F1:4 48:C1:8 56:C1:4 60:Eb1:4' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'Fruity Reeverb 2, wet 15%. Fruity Soft Clipper.'], ['Hats', 'High-pass at 400 Hz.'], ['Wobble bass', 'High-pass at 80 Hz (the sub covers below). Distortion → Fruity Multiband Compressor.'], ['Sub', 'Low-pass at 100 Hz. Mono.'], BUS],
    arrangement: [['1–16', 'Intro', 'Pad and motif.'], ['17–32', 'Build', 'Drums enter, riser.'], ['33–48', 'Drop 1', 'Wobble bass and drums.'], ['49–64', 'Break', 'Pad and motif.'], ['65–80', 'Build', 'Riser.'], ['81–96', 'Drop 2', 'New wobble rhythms.'], ['97–112', 'Outro', 'Pad.']],
    vocals: ['Short vocal samples or MC shouts before drops.', 'Silence for half a beat before the drop.', 'Change the wobble rhythm every 4 bars.'],
    write: { progressions: [['i – VI', 'Fm – Db', 'Dark (this build)'], ['i – bII', 'Fm – Gb', 'Evil'], ['One note', 'F with wobble rhythm', 'Drop']], melody: ['Eerie motifs for intros.'], bass: ['LFO on filter, synced and automated.', 'Sine sub under it.'], drums: ['Half-time at 140 BPM.'] },
    quiz: [{ q: 'What creates the "wobble" in a dubstep bass?', a: ['A fast tempo', 'An LFO moving the filter cutoff in time with the beat', 'Reverb', 'A drum roll'], c: 1, why: 'A tempo-synced LFO on the filter cutoff makes the bass wobble rhythmically.' }]
  });

  A.flBuild({
    id: 'g-future-bass',
    title: 'Future bass with pumping supersaw chords in F major',
    bpm: 150, key: 'F major', scale: 'F G A Bb C D E', feel: 'half-time',
    goal: 'A future bass drop in the style of Flume, San Holo and Illenium: lush major-7 supersaw chords that pump with sidechain and play a rhythm, vocal chops, half-time drums.',
    sounds: [['Kick', 'Sampler: a punchy kick', ''], ['Snare', 'Sampler: a big snare/clap', ''], ['Hats', 'Sampler: closed hats', ''], ['Supersaw chords', 'Harmor, Sytrus or Toxic Biohazard supersaw', 'Wide, detuned, bright.'], ['Vocal chops', 'Slicex with your own vocal (or FLEX vocal preset)', ''], ['Sub', '3xOsc sine', '']],
    chords: { lab: 'pad', plugin: 'Supersaw', roman: 'IVmaj7 – V – iii7 – vi7', why: 'Bbmaj7 → C → Am7 → Dm7: bright, emotional major-7 harmony. Future bass chords play rhythmic patterns (not long notes) and pump with sidechain.', list: H.stabs([['Bbmaj7', 'F3 A3 Bb3 D4'], ['C', 'E3 G3 C4'], ['Am7', 'E3 G3 A3 C4'], ['Dm7', 'F3 A3 C4 D4']], [[0, 3], [3, 3], [6, 2], [8, 3], [12, 4]]) },
    melody: { lab: 'vox', plugin: 'Vocal chops', why: 'Pitched vocal chops play a catchy, high melody in the drop.', notes: '0:D5:2 3:F5:2 6:A5:2 8:G5:4 16:E5:2 19:G5:2 22:C6:2 24:A5:4 32:C5:2 35:E5:2 38:A5:2 40:G5:4 48:F5:2 51:A5:2 54:D6:2 56:C6:6' },
    drums: { why: 'Half-time: kick on 1, snare on 3, hats with triplet rolls.', rows: { kick: 'x.........x.....', snare: '........x.......', chh: 'x.x.x.x.x.xxx.x.' } },
    extra: [{ after: 'chords', title: 'The future bass chord pump and wobble', body: '- **Pump:** use the sidechain method in the Mixer table, or put **Gross Beat** on the chords and draw a volume shape that dips on every beat.\n- **Pitch wobble:** in Harmor or Sytrus, add a little vibrato (LFO on pitch) or automate the pitch bend so the chords "wobble" at the start of each hit.\n- **Width:** Fruity Stereo Shaper or Harmor unison spread for a huge, wide sound.' }],
    bass: { lab: 'sub', plugin: '3xOsc sine sub', is808: false, title: 'The sub', why: 'A clean sine sub on the roots.', notes: '0:Bb1:12 16:C2:12 32:A1:12 48:D2:12' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'Fruity Reeverb 2: hall, wet 20%.'], ['Hats', 'High-pass at 400 Hz.'], ['Supersaw chords', 'High-pass at 150 Hz. Fruity Reeverb 2, wet 20%. ' + SIDECHAIN], ['Vocal chops', 'Fruity Reeverb 2, wet 20%. Fruity Delay 3, wet 15%.'], ['Sub', 'Mono, low-pass at 120 Hz. Sidechain to the kick.'], BUS],
    arrangement: [['1–16', 'Intro', 'Chords filtered, vocal.'], ['17–32', 'Build', 'Snare roll, riser.'], ['33–48', 'Drop', 'Pumping chords, chops, drums.'], ['49–64', 'Verse', 'Calmer.'], ['65–72', 'Build', 'Snare roll and riser.'], ['73–88', 'Drop 2', 'New chord rhythm and chops.'], ['89–96', 'Outro', 'Chords filtered, fade out.']],
    vocals: ['Future bass often has an emotional sung verse and a chop-based drop.', 'Build with snare rolls and risers.'],
    write: { progressions: [['IVmaj7 – V – iii7 – vi7', 'Bbmaj7 – C – Am7 – Dm7', 'Emotional (this build)'], ['vi7 – IVmaj7 – I – V', 'Dm7 – Bbmaj7 – F – C', 'Euphoric']], melody: ['Pitched vocal chops.'], bass: ['Sine sub.'], drums: ['Half-time, triplet hats.'] },
    quiz: [{ q: 'How can you make chords "pump" in FL Studio without a sidechain?', a: ['Fruity Notebook', 'Gross Beat volume envelope', 'Edison only', 'Raise the tempo'], c: 1, why: 'Gross Beat can draw a volume dip on every beat, imitating sidechain pumping.' }]
  });

  A.flBuild({
    id: 'g-ukg',
    title: 'Two-step UK garage in F minor',
    bpm: 132, key: 'F minor', scale: 'F G Ab Bb C Db Eb', feel: 'swung, skippy 2-step', labSwing: 60, swing: 'up (around 30–50%) for the shuffle',
    goal: 'A UK garage track in the style of MJ Cole, Artful Dodger and the modern revival (Conducta, Interplanetary Criminal): a swung two-step beat, soulful organ chords, a bubbling bass and vocal chops.',
    sounds: [['Kick', 'Sampler: a punchy kick', ''], ['Snare / Clap', 'Sampler: a snappy snare', ''], ['Hats', 'Sampler: closed hats and shaker', 'Swung.'], ['Organ', 'FLEX organ', 'Soulful stabs.'], ['Vocal chops', 'Slicex or FLEX vocal', ''], ['Bass', '3xOsc sine/square or FLEX bass', 'Bubbling, with pitch movement.']],
    chords: { lab: 'organ', plugin: 'FLEX organ', roman: 'i7 – iv7 – VImaj7 – v7', why: 'Fm7 → Bbm7 → Dbmaj7 → Cm7: soulful minor-7 harmony from R&B and house, played as short stabs.', list: H.stabs([['Fm7', 'Eb3 F3 Ab3 C4'], ['Bbm7', 'Db3 F3 Ab3 Bb3'], ['Dbmaj7', 'C3 F3 Ab3 Db4'], ['Cm7', 'Bb2 Eb3 G3 C4']], [[0, 2], [6, 2], [10, 3]]) },
    melody: { lab: 'vox', plugin: 'Vocal chops', why: 'Chopped vocals in skippy rhythms.', notes: '3:C5:1 6:Eb5:2 10:F5:2 14:Eb5:1 19:Db5:1 22:F5:2 26:Ab5:2 30:F5:1 35:C5:1 38:F5:2 42:Ab5:2 46:Bb5:1 51:G5:1 54:Eb5:2 58:C5:4' },
    drums: { why: 'The **2-step**: no kick on beats 2 and 4. Kick on 1 and the "and" of 3, snare on 2 and 4, heavily swung hats. The skippy kick is what makes it garage.', rows: { kick: 'x.........x.....', snare: '....x.......x...', chh: 'x.xxx.xxx.xxx.xx', perc: '..x...x...x...x.' }, names: { perc: 'Shaker' } },
    bass: { lab: 'moog', plugin: '3xOsc / FLEX bass', is808: false, title: 'The bubbling bass', why: 'Short, bouncy bass notes that jump around the root, following the swung rhythm.', notes: '0:F1:2 3:F2:1 6:Eb2:2 10:F1:2 13:C2:2 16:Bb1:2 19:Bb2:1 22:Ab2:2 26:Bb1:2 29:F2:2 32:Db2:2 35:Db3:1 38:C3:2 42:Db2:2 45:Ab2:2 48:C2:2 51:C3:1 54:Bb2:2 58:C2:2 61:G2:2' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'Fruity Reeverb 2, wet 12%.'], ['Hats / Shaker', 'High-pass at 400 Hz.'], ['Organ', 'High-pass at 150 Hz. Fruity Reeverb 2. ' + SIDECHAIN], ['Vocal chops', 'Fruity Delay 3, wet 15%.'], ['Bass', 'High-pass at 30 Hz.'], BUS],
    arrangement: [['1–16', 'Intro', 'Drums and organ.'], ['17–32', 'Verse', 'Bass enters.'], ['33–48', 'Drop', 'Everything plus chops.'], ['49–56', 'Break', 'Kick out.'], ['57–88', 'Drop 2', 'Everything.'], ['89–104', 'Outro', 'Drums.']],
    vocals: ['Garage loves R&B vocals and pitched chops.', 'MCs often host garage tracks: leave space.'],
    write: { progressions: [['i7 – iv7 – VImaj7 – v7', 'Fm7 – Bbm7 – Dbmaj7 – Cm7', 'Soulful (this build)'], ['i7 – iv7', 'Fm7 – Bbm7', 'Classic']], melody: ['Skippy vocal chops.'], bass: ['Bubbling, syncopated.'], drums: ['2-step kick, swung hats.'] },
    quiz: [{ q: 'What makes a UK garage beat "2-step"?', a: ['A kick on every beat', 'The kick skips beats 2 and 4, giving a syncopated, skippy groove', 'Only two drums', 'A 2 BPM tempo'], c: 1, why: '2-step removes the four-on-the-floor kick for a skippy, swung pattern.' }]
  });

  A.flBuild({
    id: 'g-synthwave',
    title: '80s synthwave in A minor',
    bpm: 100, key: 'A minor', scale: 'A B C D E F G', feel: 'straight, retro',
    goal: 'A retro synthwave track in the style of The Midnight, Kavinsky and FM-84: gated-reverb snare, octave bass, 80s pads, a 16th-note arpeggio and a nostalgic lead.',
    sounds: [['Kick', 'Sampler: an 80s drum-machine kick (LinnDrum-style)', ''], ['Snare', 'Sampler: a big snare', 'With gated reverb.'], ['Hats', 'Sampler: closed hats', ''], ['Pad', 'Harmor or Sytrus: a warm 80s poly pad', ''], ['Arp', 'Sytrus or 3xOsc pluck', ''], ['Lead', 'Sytrus or FLEX: a saw lead with portamento', ''], ['Bass', '3xOsc or Sytrus saw bass', '']],
    chords: { lab: 'pad', plugin: 'Harmor / Sytrus 80s pad', roman: 'i – VI – III – VII', why: 'Am → F → C → G: nostalgic and cinematic.', list: [[0, 16, 'Am', 'A3 C4 E4'], [16, 16, 'F', 'A3 C4 F4'], [32, 16, 'C', 'G3 C4 E4'], [48, 16, 'G', 'G3 B3 D4']] },
    melody: { lab: 'lead', plugin: 'Saw lead with Porta', why: 'A soaring, nostalgic lead with long notes.', notes: '0:E5:6 6:D5:2 8:C5:4 12:E5:4 16:F5:8 24:E5:4 28:C5:4 32:G5:6 38:F5:2 40:E5:4 44:C5:4 48:D5:12 60:B4:4' },
    counter: { plugin: 'Pluck arp (16ths) with Fruity Delay 3', why: 'The arp plays the chord notes in 16ths, the signature 80s movement.', notes: H.arp(['A4 C5 E5', 'A4 C5 F5', 'G4 C5 E5', 'G4 B4 D5'], [0, 1, 2, 1], 1) },
    drums: { why: 'Simple 80s beat: kick on 1 and 3, big snare on 2 and 4, 8th hats.', rows: { kick: 'x.......x.......', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' } },
    extra: [{ after: 'drums', title: 'The gated reverb snare', body: 'The 80s snare (think Phil Collins): a big reverb that cuts off suddenly.\n1. On the snare insert, load **Fruity Reeverb 2** with a large room, wet high.\n2. After it, load **Fruity Limiter**, open its **Gate** section and raise the threshold until the reverb tail is cut off sharply after about a 1/8 note.\n3. Adjust until the snare is huge but stops before the next hit.' }],
    bass: { lab: 'moog', plugin: '3xOsc / Sytrus saw bass', is808: false, title: 'The octave bass', why: '8th-note octave bass, driving like an 80s night drive.', notes: H.perBar(['A1', 'F1', 'C2', 'G1'], OCT) },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'Fruity Reeverb 2 → Fruity Limiter (gate). See the gated reverb step.'], ['Hats', 'High-pass at 400 Hz.'], ['Pad', 'Vintage Chorus → Fruity Reeverb 2.'], ['Arp', 'Fruity Delay 3: 1/8 dotted, wet 25%.'], ['Lead', 'Vintage Chorus → Fruity Delay 3 → Fruity Reeverb 2.'], ['Bass', 'High-pass at 30 Hz. Light sidechain.'], BUS],
    arrangement: [['1–8', 'Intro', 'Pad and arp.'], ['9–24', 'Verse', 'Drums and bass.'], ['25–40', 'Chorus', 'Lead.'], ['41–48', 'Break', 'Arp and pad.'], ['49–64', 'Chorus', 'Everything.'], ['65–72', 'Outro', 'Fade.']],
    vocals: ['Synthwave vocals are dreamy, with lots of reverb and chorus.', 'Use tom fills (80s-style) into choruses.'],
    write: { progressions: [['i – VI – III – VII', 'Am – F – C – G', 'Nostalgic (this build)'], ['i – VI – VII', 'Am – F – G', 'Driving']], melody: ['Long, soaring leads.', '16th arps.'], bass: ['Octave 8ths.'], drums: ['Gated reverb snare.'] },
    quiz: [{ q: 'How do you make an 80s gated reverb snare in FL Studio?', a: ['Add Fruity Reeverb 2 then a gate (Fruity Limiter\'s gate section) to cut the tail', 'Delete the snare', 'Use only EQ', 'Lower the tempo'], c: 0, why: 'A big reverb followed by a gate gives the classic short, huge 80s snare.' }]
  });

  A.flBuild({
    id: 'g-ambient',
    title: 'Ambient soundscape in D major (Lydian colour)',
    bpm: 70, key: 'D major (Lydian colour)', scale: 'D E F# G# A B C# (Lydian: raised 4th, G#)', feel: 'free, slow',
    goal: 'An ambient piece in the tradition of Brian Eno and Stars of the Lid: slow, evolving pads, a sparse piano melody, a low drone and lots of space and reverb. No drums.',
    sounds: [['Pad', 'Harmor or Morphine: an evolving pad', 'Slow attack, long release.'], ['Piano', 'FL Keys (soft piano)', ''], ['Drone', '3xOsc sine or Harmor low pad', 'A long, low note.'], ['Texture', 'Edison recording or Fruity Granulizer', 'Field recordings (rain, wind) or granular textures.']],
    chords: { lab: 'pad', plugin: 'Harmor or Morphine pad', roman: 'Imaj9 – IIadd9 (Lydian)', why: 'Dmaj9 → E(add9): the E major chord contains G#, the raised 4th of D, which is the floating, dreamy **Lydian** sound. Chords last 2 bars each and change slowly.', list: [[0, 32, 'Dmaj9', 'D3 A3 C#4 E4 F#4'], [32, 32, 'Eadd9', 'E3 B3 F#4 G#4']] },
    melody: { lab: 'piano', plugin: 'FL Keys soft piano', why: 'A few notes, far apart. Silence is part of the music.', notes: '4:F#5:8 20:A5:6 28:E5:4 40:G#5:8 52:B5:6 60:F#5:4' },
    bass: { lab: 'sub', plugin: '3xOsc sine drone', is808: false, title: 'The drone', why: 'A low drone on D underneath everything.', notes: '0:D2:32 32:D2:32' },
    mixer: [['Pad', 'Fruity Reeverb 2 or Fruity Convolver: long hall, wet 40%. Slow automation of the filter.'], ['Piano', 'Fruity Delay 3: 1/4, feedback 50%, wet 30% → Fruity Reeverb 2, long.'], ['Drone', 'Low-pass at 200 Hz.'], ['Texture', 'High-pass at 300 Hz. Pan slowly with automation.']],
    arrangement: [['1–16', 'Opening', 'Drone and texture.'], ['17–32', 'Pad enters', 'Slowly.'], ['33–64', 'Piano', 'Sparse melody.'], ['65–80', 'Fade', 'Elements drop out one by one.']],
    vocals: ['Ambient is usually instrumental. Breathy, wordless vocals with huge reverb fit.', 'Change happens slowly through automation: filters, volume, panning.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (very gentle). Quiet and dynamic: around −16 to −18 LUFS.',
    write: { progressions: [['Imaj9 – IIadd9', 'Dmaj9 – Eadd9', 'Lydian float (this build)'], ['One chord', 'Dmaj9 drone', 'Static'], ['Imaj7 – IVmaj7', 'Dmaj7 – Gmaj7', 'Peaceful']], melody: ['Few notes, long gaps, lots of delay and reverb.'], bass: ['Low drones.'], drums: ['None, or very soft textures.'] },
    quiz: [{ q: 'What gives the Lydian mode its dreamy sound?', a: ['A flat 3rd', 'A raised 4th', 'No 5th', 'A flat 7th'], c: 1, why: 'The raised 4th (G# in D) gives Lydian its floating quality.' }]
  });
})();
