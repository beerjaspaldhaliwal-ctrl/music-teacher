/* FL Studio builds for the elective genres: band & live, score & media. */
(function () {
  const A = window.ACADEMY, H = A.flHelp;
  const OCT = [[0, 0, 2], [2, 1, 2], [4, 0, 2], [6, 1, 2], [8, 0, 2], [10, 1, 2], [12, 0, 2], [14, 1, 2]];
  const EIGHTHS = [[0, 0, 2], [2, 0, 2], [4, 0, 2], [6, 0, 2], [8, 0, 2], [10, 0, 2], [12, 0, 2], [14, 0, 2]];
  const BUS = ['Drums bus', 'Fruity Compressor, 2–4 dB of gain reduction.'];

  // A metal riff: palm-muted 16th chugs on the open low string with accented notes.
  function riff(accents) {
    return accents.map(function (acc, b) {
      const o = b * 16;
      return [o + ':E2:1', (o + 1) + ':E2:1', (o + 2) + ':E2:1', (o + 3) + ':E2:1', (o + 4) + ':' + acc[0] + ':2', (o + 6) + ':E2:1', (o + 7) + ':E2:1', (o + 8) + ':E2:1', (o + 9) + ':E2:1', (o + 10) + ':' + acc[1] + ':2', (o + 12) + ':E2:1', (o + 13) + ':E2:1', (o + 14) + ':' + acc[2] + ':2'].join(' ');
    }).join(' ');
  }

  A.flBuild({
    id: 'g-rock',
    title: 'Indie-rock anthem with power chords in A (Mixolydian)',
    bpm: 120, key: 'A Mixolydian', scale: 'A B C# D E F# G (major with a flat 7th, G)', feel: 'straight backbeat',
    goal: 'A driving rock track with power chords, a straight backbeat, an 8th-note bass and a lead guitar hook, in the tradition of classic rock and modern indie (think Arctic Monkeys or The Killers).',
    sounds: [['Kick', 'Sampler or FPC: an acoustic rock kick', ''], ['Snare', 'Sampler or FPC: a big acoustic snare', ''], ['Hats / Crash', 'Sampler: hi-hats and a crash', ''], ['Rhythm guitar', 'FL Slayer (electric guitar with amp)', 'FL Slayer is FL\'s electric guitar instrument. Pick a crunchy or distorted preset. Recording a real guitar is even better.'], ['Lead guitar', 'FL Slayer (cleaner preset) or FLEX guitar', ''], ['Bass', 'FLEX bass guitar or BooBass', 'Picked bass sound.']],
    chords: { lab: 'guitar', plugin: 'FL Slayer power chords', roman: 'I – bVII – IV – I', why: 'A5 → G5 → D5 → A5. **Power chords** are just the root, the 5th and the octave (no 3rd), so they sound huge with distortion. The G (flat 7th) is the Mixolydian rock sound.', list: H.stabs([['A5', 'A2 E3 A3'], ['G5', 'G2 D3 G3'], ['D5', 'D3 A3 D4'], ['A5', 'A2 E3 A3']], [[0, 6], [6, 2], [8, 6], [14, 2]]) },
    melody: { lab: 'lead', plugin: 'FL Slayer lead', why: 'A simple, singable guitar hook using the A major pentatonic (A B C# E F#) plus G.', notes: '0:E4:2 2:A4:2 4:C#5:4 8:B4:2 10:A4:2 12:E4:4 16:D4:2 18:G4:2 20:B4:4 24:A4:2 26:G4:2 28:D4:4 32:F#4:2 34:A4:2 36:D5:4 40:C#5:2 42:B4:2 44:A4:4 48:E4:2 50:A4:2 52:C#5:4 56:B4:4 60:A4:4' },
    drums: { why: 'The rock backbeat: kick on 1 and 3 (with an extra kick on the "and" of 3), snare on 2 and 4, 8th-note hats, and a crash on bar 1.', rows: { kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', ohh: 'x' + '.'.repeat(63) }, names: { ohh: 'Crash' }, extra: ['Add a tom fill (16ths across the toms) on the last beat of bar 4 into each new section.', 'Humanise: Randomize (Alt+R) the hat velocities slightly so it sounds like a drummer.'] },
    bass: { lab: 'moog', plugin: 'FLEX bass guitar or BooBass', is808: false, title: 'The bass', why: 'Driving 8th notes on the root, locked with the kick: the backbone of rock.', notes: H.perBar(['A1', 'G1', 'D2', 'A1'], EIGHTHS) },
    mixer: [['Kick', 'High-pass at 40 Hz, boost at 60 Hz and at 3 kHz (click).'], ['Snare', 'Fruity Reeverb 2: room, wet 15%.'], ['Hats / Crash', 'High-pass at 400 Hz.'], ['Rhythm guitar', 'Duplicate the channel, pan one copy hard left and one hard right (double tracking). High-pass at 100 Hz.'], ['Lead guitar', 'Fruity Delay 3, wet 12%. Fruity Reeverb 2, wet 15%.'], ['Bass', 'High-pass at 35 Hz. Fruity Compressor (4:1).'], BUS],
    arrangement: [['1–8', 'Intro', 'Guitar riff alone, then the band.'], ['9–24', 'Verse', 'Bass and drums, guitars quieter or palm-muted.'], ['25–32', 'Chorus', 'Everything, open chords, crash cymbals.'], ['33–48', 'Verse 2', ''], ['49–56', 'Chorus', ''], ['57–64', 'Solo', 'Lead guitar solo over the chorus chords.'], ['65–72', 'Final chorus', 'Everything.'], ['73–76', 'Outro', 'Big ending on the A5 chord.']],
    vocals: ['Rock vocals sit on top of loud guitars: cut guitars a little around 2–4 kHz.', 'Drum fills and crashes mark every new section.'],
    write: { progressions: [['I – bVII – IV – I', 'A5 – G5 – D5 – A5', 'Classic rock (this build)'], ['I – IV – V', 'A – D – E', 'Rock & roll'], ['vi – IV – I – V', 'F#m – D – A – E', 'Indie anthem'], ['i – bVI – bVII', 'Am – F – G', 'Minor rock']], melody: ['Pentatonic guitar hooks.', 'Singable, simple rhythm.'], bass: ['8th notes on the root.'], drums: ['Backbeat, crashes, tom fills.'] },
    quiz: [{ q: 'What notes make a power chord?', a: ['Root, 3rd and 5th', 'Root, 5th and octave (no 3rd)', 'Only the 3rd', 'All 7 notes'], c: 1, why: 'Power chords leave out the 3rd, which sounds huge with distortion.' }]
  });

  A.flBuild({
    id: 'g-metal',
    title: 'Metal riff with double kick in E Phrygian',
    bpm: 140, key: 'E Phrygian', scale: 'E F G A B C D (minor with a flat 2nd, F)', feel: 'double-kick drive',
    goal: 'A heavy metal riff in the style of Metallica, Pantera and modern metalcore: palm-muted 16th chugs on low E, Phrygian accents (F, the flat 2nd), double-kick drums and a huge, tight low end.',
    sounds: [['Kick', 'Sampler or FPC: a tight metal kick (clicky)', 'Double kick needs a short kick.'], ['Snare', 'Sampler: a cracking snare', ''], ['Cymbals', 'Sampler: china, crash, ride', ''], ['Guitar', 'FL Slayer (high-gain preset)', 'Palm-muted chugs. Real guitar + an amp sim is best.'], ['Bass', 'FLEX bass guitar or BooBass with distortion', '']],
    chords: { lab: 'guitar', plugin: 'FL Slayer power chords (accents)', roman: 'i – bII – i – bIII', why: 'E5 → F5 → E5 → G5: the flat 2nd (F) is the dark, aggressive **Phrygian** sound used everywhere in metal. The power chords ring on the accents; the chugs come from the riff.', list: [[0, 4, 'E5', 'E2 B2 E3'], [20, 4, 'F5', 'F2 C3 F3'], [32, 4, 'E5', 'E2 B2 E3'], [52, 4, 'G5', 'G2 D3 G3']] },
    melody: { lab: 'guitar', plugin: 'FL Slayer palm-muted riff', why: 'The riff: 16th-note chugs on the open low E, with accented notes on F, G and Bb (the tritone). Program it, then make the chug notes short and slightly lower in velocity than the accents.', notes: riff([['F2', 'G2', 'F2'], ['F2', 'G2', 'Bb2'], ['F2', 'G2', 'F2'], ['G2', 'Bb2', 'A2']]) },
    drums: { why: 'Double kick in 16ths under the chugs, snare on 2 and 4, a china or crash on accents.', rows: { kick: 'xxxxxxxxxxxxxxxx', snare: '....x.......x...', ohh: 'x.......x.......' }, names: { ohh: 'Crash' }, extra: ['Lower the velocity of every other kick slightly so the double kick sounds like two feet, not a machine.'] },
    bass: { lab: 'reese', plugin: 'FLEX bass + Fruity Blood Overdrive', is808: false, title: 'The bass', why: 'The bass doubles the riff\'s chug rhythm in 8ths, an octave lower, for weight.', notes: H.perBar(['E1', 'E1', 'E1', 'G1'], EIGHTHS) },
    mixer: [['Kick', 'High-pass at 40 Hz, big boost around 3–5 kHz for click.'], ['Snare', 'Fruity Reeverb 2: room, wet 15%.'], ['Cymbals', 'High-pass at 500 Hz.'], ['Guitar', 'Double-track (two copies panned hard left/right). Fruity Parametric EQ 2: high-pass at 80 Hz, cut around 300–500 Hz (mud).'], ['Bass', 'High-pass at 35 Hz. Fruity Blood Overdrive (blend). Fruity Compressor.'], BUS],
    arrangement: [['1–8', 'Intro', 'Guitar riff alone.'], ['9–24', 'Verse', 'Full band chugs.'], ['25–32', 'Chorus', 'Open, ringing power chords, half-time drums.'], ['33–40', 'Breakdown', 'Half-time, slow chugs, huge.'], ['41–56', 'Verse 2', ''], ['57–64', 'Solo', ''], ['65–72', 'Final chorus', '']],
    vocals: ['Metal vocals (screams or clean) need space around 1–4 kHz; cut the guitars there slightly.', 'Breakdowns are the heaviest moment: drop to half-time.'],
    write: { progressions: [['i – bII', 'E5 – F5', 'Phrygian (this build)'], ['i – bVI – bVII', 'E5 – C5 – D5', 'Epic metal'], ['i – bV', 'E5 – Bb5', 'Tritone evil']], melody: ['16th chugs on the low string with accents.', 'Phrygian flat 2 and the tritone.'], bass: ['Doubles the guitar rhythm.'], drums: ['Double kick, snare 2 and 4.'] },
    quiz: [{ q: 'Which note gives the E Phrygian metal sound its darkness?', a: ['F (the flat 2nd)', 'G# (a major 3rd)', 'C# (major 6th)', 'D# (major 7th)'], c: 0, why: 'The flat 2nd (F over E) is the Phrygian colour behind many metal riffs.' }]
  });

  A.flBuild({
    id: 'g-funk-disco',
    title: 'Disco-funk groove in D minor (Dorian)',
    bpm: 116, key: 'D minor (Dorian)', scale: 'D E F G A B C', feel: 'four-on-the-floor with funk syncopation',
    goal: 'A disco-funk groove in the style of Chic (Nile Rodgers), Earth, Wind & Fire and modern nu-disco: a funky 16th guitar, octave bass, four-on-the-floor drums, strings and Dorian chords.',
    sounds: [['Kick', 'Sampler: a punchy acoustic-style kick', ''], ['Snare / Clap', 'Sampler: a snare with a clap', ''], ['Hats', 'Sampler: open and closed hats', ''], ['Funk guitar', 'FLEX clean guitar or FL Slayer clean', 'Short, muted 16ths.'], ['Strings', 'FLEX strings', 'Disco strings swells.'], ['Bass', 'FLEX bass guitar or BooBass', '']],
    chords: { lab: 'guitar', plugin: 'FLEX clean guitar (chops)', roman: 'i9 – IV13', why: 'Dm9 → G13: the Dorian funk vamp (B natural in G13). The guitar plays short "chicken-scratch" chops in 16ths.', list: H.stabs([['Dm9', 'F3 A3 C4 E4'], ['Dm9', 'F3 A3 C4 E4'], ['G13', 'F3 B3 E4'], ['G13', 'F3 B3 E4']], [[0, 1], [2, 1], [3, 1], [6, 1], [8, 1], [10, 1], [11, 1], [14, 1]]) },
    melody: { lab: 'strings', plugin: 'FLEX strings', why: 'Disco string line: long notes with rising runs.', notes: '0:A5:8 8:C6:4 12:D6:4 16:E6:12 28:D6:4 32:F6:8 40:E6:4 44:D6:4 48:B5:8 56:C6:4 60:D6:4' },
    drums: { why: 'Disco four-on-the-floor with off-beat open hats and a funky 16th closed hat.', rows: { kick: 'x...x...x...x...', snare: '....x.......x...', ohh: '..x...x...x...x.', chh: 'x.xxx.xxx.xxx.xx' } },
    bass: { lab: 'moog', plugin: 'FLEX bass guitar', is808: false, title: 'The octave bass', why: 'Disco octave bass in 8ths, with funk pickups.', notes: H.perBar(['D2', 'D2', 'G1', 'G1'], OCT) },
    mixer: [['Kick', 'High-pass at 35 Hz.'], ['Snare', 'Fruity Reeverb 2: plate, wet 15%.'], ['Hats', 'High-pass at 400 Hz.'], ['Funk guitar', 'High-pass at 200 Hz. Fruity Compressor (snappy). Pan slightly left.'], ['Strings', 'Fruity Reeverb 2: hall, wet 25%.'], ['Bass', 'High-pass at 35 Hz. Fruity Compressor.'], BUS],
    arrangement: [['1–8', 'Intro', 'Drums and guitar.'], ['9–24', 'Verse', 'Bass enters.'], ['25–32', 'Chorus', 'Strings.'], ['33–40', 'Break', 'Bass and drums only (disco break).'], ['41–56', 'Verse 2', ''], ['57–72', 'Chorus', ''], ['73–80', 'Outro', '']],
    vocals: ['Disco vocals are soulful with backing harmonies.', 'The disco break (just bass and drums) is a classic DJ moment.'],
    write: { progressions: [['i9 – IV13', 'Dm9 – G13', 'Dorian funk (this build)'], ['i7 – iv7', 'Dm7 – Gm7', 'Darker funk'], ['ii7 – V7', 'Em7 – A7 (in D)', 'Smooth']], melody: ['String runs and stabs.', 'Horn hits.'], bass: ['Octave bass and funk syncopation.'], drums: ['Four-on-the-floor plus 16th hats.'] },
    quiz: [{ q: 'What is a "chicken scratch" guitar?', a: ['A distorted solo', 'Short, muted, rhythmic 16th-note strums', 'A slide guitar', 'A bass guitar'], c: 1, why: 'Nile Rodgers-style chops are short muted strums that drive disco and funk.' }]
  });

  A.flBuild({
    id: 'g-jazz',
    title: 'Swinging jazz ii–V–I in Bb major',
    bpm: 140, key: 'Bb major', scale: 'Bb C D Eb F G A', feel: 'swing (triplet)', labSwing: 66, swing: 'high (start around 50–66%) for triplet swing',
    goal: 'A small-combo jazz groove: a **ii–V–I–VI** turnaround in Bb, piano comping, a walking bass, a swinging ride cymbal and a horn melody. Learning this in FL Studio will help every jazzy hip-hop, lo-fi and neo-soul beat you make.',
    sounds: [['Ride', 'Sampler: a jazz ride cymbal', ''], ['Hi-hat (pedal)', 'Sampler: a closed hat (foot)', 'On 2 and 4.'], ['Kick', 'Sampler: a soft kick', 'Very quiet ("feathering").'], ['Snare (brush)', 'Sampler: a brush snare', 'Soft comping hits.'], ['Piano', 'FL Keys (grand piano)', ''], ['Horn', 'FLEX trumpet or saxophone', ''], ['Bass', 'FLEX upright bass', '']],
    chords: { lab: 'piano', plugin: 'FL Keys piano (comping)', roman: 'ii7 – V7 – Imaj7 – VI7', why: 'Cm7 → F7 → Bbmaj7 → G7: the jazz turnaround. Piano "comps" (accompanies) with short chords on off-beats instead of holding them.', list: H.stabs([['Cm7', 'Bb3 Eb4 G4'], ['F7', 'A3 Eb4 G4'], ['Bbmaj7', 'A3 D4 F4'], ['G7', 'F3 B3 E4']], [[0, 3], [6, 2], [11, 3]]) },
    melody: { lab: 'brass', plugin: 'FLEX trumpet / saxophone', why: 'A bebop-flavoured line: chord tones on the beats, passing notes between, and a rest at the end of each phrase.', notes: '0:G4:2 2:Bb4:2 4:D5:2 6:Eb5:2 8:D5:2 10:C5:2 12:Bb4:4 16:A4:2 18:C5:2 20:Eb5:2 22:G5:2 24:F5:4 28:Eb5:4 32:D5:4 36:F5:2 38:A5:2 40:G5:4 44:F5:4 48:F5:2 50:E5:2 52:D5:2 54:B4:2 56:G4:8' },
    drums: { why: 'The swing ride pattern ("ding, ding-a ding, ding-a") with heavy swing, the hi-hat pedal on 2 and 4, and very soft kick and brush snare.', rows: { chh: 'x...x.xxx...x.xx', perc: '....x.......x...', kick: 'o...o...o...o...', snare: '......o.......o.' }, names: { chh: 'Ride', perc: 'Hat pedal', snare: 'Brush' }, extra: ['With swing up high, the "a" of "ding-a" lands on the triplet. You can also draw the ride on a triplet grid (snap 1/3 beat) for exact swing.'] },
    bass: { lab: 'upright', plugin: 'FLEX upright bass', is808: false, title: 'The walking bass', why: 'One note per beat: chord tones and approach notes that walk to the next chord.', notes: '0:C2:4 4:Eb2:4 8:G2:4 12:E2:4 16:F2:4 20:A2:4 24:C3:4 28:B2:4 32:Bb2:4 36:F2:4 40:D2:4 44:Ab2:4 48:G2:4 52:B2:4 56:D3:4 60:Db3:4' },
    mixer: [['Ride / Hat', 'High-pass at 300 Hz. Pan the ride slightly right.'], ['Kick / Brush', 'Very quiet.'], ['Piano', 'Fruity Reeverb 2: room, wet 15%.'], ['Horn', 'Fruity Reeverb 2: room, wet 15%.'], ['Bass', 'High-pass at 35 Hz, gentle compression.']],
    arrangement: [['1–8', 'Head (A)', 'Horn plays the melody.'], ['9–16', 'Head (A)', 'Repeat.'], ['17–32', 'Solo', 'Horn improvises over the changes.'], ['33–48', 'Piano solo', ''], ['49–56', 'Head out', 'Melody again.'], ['57–60', 'Ending', 'Hold the last Bbmaj7.']],
    vocals: ['Jazz is about interaction: the drums and piano answer the soloist.', 'Use dynamics: quiet verses, louder solos.'],
    master: 'Very gentle: Fruity Parametric EQ 2 → Fruity Limiter with little gain reduction. Around −14 to −16 LUFS; jazz keeps its dynamics.',
    write: { progressions: [['ii7 – V7 – Imaj7 – VI7', 'Cm7 – F7 – Bbmaj7 – G7', 'Turnaround (this build)'], ['ii7 – V7 – Imaj7', 'Cm7 – F7 – Bbmaj7', 'The ii–V–I'], ['iii7 – VI7 – ii7 – V7', 'Dm7 – G7 – Cm7 – F7', 'Circle of fifths'], ['12-bar blues', 'Bb7 – Eb7 – Bb7 – F7…', 'Jazz blues']], melody: ['Chord tones on the beats, passing notes between.', 'Swing 8ths.'], bass: ['Walking quarter notes with approach notes.'], drums: ['Swing ride, hat on 2 and 4, brushes.'] },
    quiz: [{ q: 'What does a jazz pianist do when "comping"?', a: ['Plays the bass line', 'Accompanies with short, rhythmic chords', 'Plays only the melody', 'Stops playing'], c: 1, why: 'Comping = accompanying with rhythmic chord hits that support the soloist.' }]
  });

  A.flBuild({
    id: 'g-soul-gospel',
    title: 'Gospel-soul groove in Ab major',
    bpm: 76, key: 'Ab major', scale: 'Ab Bb C Db Eb F G', feel: 'shuffle backbeat', labSwing: 62, swing: 'up (around 35–50%)',
    goal: 'A soul and gospel groove in the tradition of Aretha Franklin, Stevie Wonder and modern gospel: Hammond organ, rich piano chords with passing chords, a strong backbeat with shuffle, and a soulful bass.',
    sounds: [['Kick', 'Sampler: a warm kick', ''], ['Snare', 'Sampler: a fat snare', ''], ['Hats', 'Sampler: closed hats', ''], ['Organ', 'FLEX organ (Hammond style)', 'Add Vintage Chorus or Vintage Phaser for the rotating-speaker sound.'], ['Piano', 'FL Keys', ''], ['Bass', 'FLEX bass guitar', '']],
    chords: { lab: 'organ', plugin: 'FLEX organ / FL Keys', roman: 'Imaj7 – iii7 VI7 – ii7 V7 – Imaj7', why: 'Abmaj7 → Cm7 F7 → Bbm7 Eb7 → Abmaj7: gospel loves **passing chords**, two per bar, moving through the circle of fifths back home.', list: [[0, 16, 'Abmaj7', 'Ab3 C4 Eb4 G4'], [16, 8, 'Cm7', 'Bb3 Eb4 G4'], [24, 8, 'F7', 'A3 Eb4 F4'], [32, 8, 'Bbm7', 'Ab3 Db4 F4'], [40, 8, 'Eb7', 'G3 Db4 Eb4'], [48, 16, 'Abmaj7', 'Ab3 C4 Eb4 G4']] },
    melody: { lab: 'piano', plugin: 'FL Keys piano', why: 'A soulful piano fill line with a gospel run at the end.', notes: '4:Eb5:2 6:F5:2 8:Ab5:6 20:G5:2 22:F5:2 24:Eb5:4 28:C5:4 36:Db5:2 38:F5:2 40:G5:4 44:Bb5:4 48:Ab5:2 50:G5:2 52:F5:2 54:Eb5:2 56:C5:2 58:Bb4:2 60:Ab4:4' },
    drums: { why: 'A slow shuffle backbeat: snare on 2 and 4, kick on 1 and pickups, swung hats.', rows: { kick: 'x.....x.x.......', snare: '....x.......x...', chh: 'x.xxx.xxx.xxx.xx' } },
    bass: { lab: 'upright', plugin: 'FLEX bass guitar', is808: false, title: 'The bass', why: 'Roots with soul pickups, following the passing chords.', notes: '0:Ab1:6 6:Ab1:2 10:Eb2:4 14:G1:2 16:C2:6 22:C2:2 24:F1:6 30:F1:2 32:Bb1:6 38:Bb1:2 40:Eb2:6 46:Eb2:2 48:Ab1:6 54:Ab1:2 58:Eb2:4 62:G1:2' },
    mixer: [['Kick', 'High-pass at 35 Hz.'], ['Snare', 'Fruity Reeverb 2: plate, wet 18%.'], ['Hats', 'High-pass at 400 Hz.'], ['Organ', 'Vintage Phaser or Vintage Chorus → Fruity Blood Overdrive (subtle) → Fruity Reeverb 2.'], ['Piano', 'Fruity Reeverb 2, wet 15%.'], ['Bass', 'High-pass at 35 Hz. Fruity Compressor.'], BUS],
    arrangement: [['1–4', 'Intro', 'Organ alone.'], ['5–20', 'Verse', ''], ['21–28', 'Chorus', 'Choir / backing vocals.'], ['29–44', 'Verse 2', ''], ['45–52', 'Chorus', ''], ['53–60', 'Vamp', 'Repeat the chorus with a key change (all notes up 1 semitone) and ad-libs.']],
    vocals: ['Gospel is built for big voices and choirs: leave the mids open.', 'The "vamp" at the end repeats and builds; a key change lifts it.'],
    write: { progressions: [['Imaj7 – iii7 VI7 – ii7 V7 – Imaj7', 'Abmaj7 – Cm7 F7 – Bbm7 Eb7 – Abmaj7', 'Gospel turnaround (this build)'], ['IV – iii – ii – I', 'Db – Cm – Bbm – Ab', 'Gospel walk-down'], ['I – IV/I', 'Ab – Db/Ab', 'Church vamp']], melody: ['Runs and fills between vocal lines.'], bass: ['Roots and pickups.'], drums: ['Shuffle backbeat.'] },
    quiz: [{ q: 'What is a passing chord in gospel?', a: ['A drum fill', 'A chord that briefly connects two main chords', 'A wrong chord', 'A single note'], c: 1, why: 'Passing chords move smoothly between main chords, giving gospel its rich motion.' }]
  });

  A.flBuild({
    id: 'g-country',
    title: 'Modern country in G major',
    bpm: 100, key: 'G major', scale: 'G A B C D E F#', feel: 'straight, train-beat optional',
    goal: 'A modern country track in the style of Nashville hits (think Chris Stapleton or Luke Combs): acoustic guitar strumming, a pedal-steel-style lead with slides, a root-fifth "boom-chick" bass and a simple backbeat.',
    sounds: [['Kick', 'Sampler: an acoustic kick', ''], ['Snare', 'Sampler: a snare or brush', ''], ['Hats', 'Sampler: closed hats', ''], ['Acoustic guitar', 'FLEX acoustic guitar', 'Strummed chords.'], ['Steel lead', 'FLEX guitar or Sakura with Porta (slides)', 'Imitates a pedal steel.'], ['Bass', 'FLEX bass guitar', '']],
    chords: { lab: 'guitar', plugin: 'FLEX acoustic guitar', roman: 'I – IV – V – I', why: 'G → C → D → G: the three-chord heart of country (and of folk, blues and rock & roll).', list: H.stabs([['G', 'G3 B3 D4'], ['C', 'G3 C4 E4'], ['D', 'F#3 A3 D4'], ['G', 'G3 B3 D4']], [[0, 4], [4, 2], [6, 2], [8, 4], [12, 2], [14, 2]]) },
    melody: { lab: 'whistle', plugin: 'FLEX guitar / Sakura with Porta', why: 'A pedal-steel-style lead: long notes that slide into each other. Turn on Mono + Porta so overlapping notes glide.', notes: '0:D5:6 6:E5:2 8:G5:8 16:E5:6 22:G5:2 24:C5:8 32:F#5:6 38:E5:2 40:D5:8 48:B4:4 52:D5:4 56:G5:8' },
    drums: { why: 'Kick on 1 and 3, snare on 2 and 4, 8th hats. For a "train beat", play 16th snare/brush notes with accents on 2 and 4.', rows: { kick: 'x.......x.......', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' } },
    bass: { lab: 'upright', plugin: 'FLEX bass guitar', is808: false, title: 'The boom-chick bass', why: 'Root on beat 1, the 5th on beat 3: the classic country "boom-chick". The guitar strums fill the "chick".', notes: '0:G1:4 8:D2:4 16:C2:4 24:G1:4 32:D2:4 40:A1:4 48:G1:4 56:D2:4' },
    mixer: [['Kick / Snare', 'Natural: light compression, room reverb.'], ['Hats', 'High-pass at 400 Hz.'], ['Acoustic guitar', 'High-pass at 100 Hz. Double-track and pan left/right.'], ['Steel lead', 'Fruity Reeverb 2, wet 20%. Fruity Delay 3, wet 10%.'], ['Bass', 'High-pass at 35 Hz.']],
    arrangement: [['1–4', 'Intro', 'Guitar and steel.'], ['5–20', 'Verse', ''], ['21–28', 'Chorus', 'Full band.'], ['29–44', 'Verse 2', ''], ['45–52', 'Chorus', ''], ['53–60', 'Bridge / solo', 'Steel solo.'], ['61–68', 'Final chorus', ''], ['69–72', 'Outro', '']],
    vocals: ['Country is storytelling: the lyric and vocal are everything.', 'Keep arrangements clear and organic.'],
    write: { progressions: [['I – IV – V – I', 'G – C – D – G', 'Classic (this build)'], ['I – V – vi – IV', 'G – D – Em – C', 'Modern country-pop'], ['I – IV – I – V', 'G – C – G – D', 'Honky-tonk']], melody: ['Major pentatonic (G A B D E).', 'Slides and bends.'], bass: ['Root-fifth boom-chick.'], drums: ['Backbeat or train beat.'] },
    quiz: [{ q: 'What is the country "boom-chick" bass?', a: ['A drum roll', 'Alternating root and 5th on beats 1 and 3', 'A synth wobble', 'A slap bass solo'], c: 1, why: 'Root on 1, 5th on 3, with the guitar strum in between.' }]
  });

  A.flBuild({
    id: 'g-cinematic',
    title: 'Epic film-trailer cue in D minor',
    bpm: 90, key: 'D minor', scale: 'D E F G A Bb C', feel: 'driving ostinato',
    goal: 'An epic cinematic cue in the style of Hans Zimmer and trailer music: driving string ostinatos, a heroic brass melody, huge taiko drums, a low drone and a big build.',
    sounds: [['Taiko / big drums', 'Sampler or FPC: taiko and big orchestral drums', 'Royalty-free samples or free orchestral libraries.'], ['Toms / perc', 'Sampler: toms, hits, cymbal swells', ''], ['Strings', 'FLEX strings (staccato/spiccato for ostinato)', 'Free libraries such as Spitfire LABS also work in FL.'], ['Brass', 'FLEX brass (horns, trombones)', ''], ['Choir', 'FLEX choir', ''], ['Low drone', 'Harmor or 3xOsc low pad', '']],
    chords: { lab: 'choir', plugin: 'FLEX choir / low strings', roman: 'i – VI – III – VII', why: 'Dm → Bb → F → C: dark-to-heroic. The major chords (Bb, F, C) after D minor create the "hope" feeling in trailers.', list: [[0, 16, 'Dm', 'D3 A3 D4 F4'], [16, 16, 'Bb', 'Bb2 F3 Bb3 D4'], [32, 16, 'F', 'F3 A3 C4 F4'], [48, 16, 'C', 'C3 G3 C4 E4']] },
    melody: { lab: 'strings', plugin: 'FLEX staccato strings (ostinato)', why: 'A string **ostinato**: a repeating 16th-note pattern on each chord. It creates drive and tension even before the drums come in.', notes: H.arp(['D4 F4 A4 D5', 'D4 F4 Bb4 D5', 'C4 F4 A4 C5', 'C4 E4 G4 C5'], [0, 0, 2, 0, 1, 0, 3, 2, 0, 0, 2, 0, 1, 0, 3, 1], 1) },
    counter: { plugin: 'FLEX brass (horns)', why: 'The heroic brass theme: long, strong notes moving up by step and leap.', notes: '0:D4:8 8:F4:4 12:A4:4 16:Bb4:12 28:A4:4 32:A4:8 40:C5:4 44:F4:4 48:G4:8 56:E4:8' },
    drums: { why: 'Taiko and big drums hit on strong beats with tom rolls. Cinematic drums are about weight, not groove.', rows: { kick: 'x.....x.x.......', snare: '....x.......x...', perc: '..........xxxx.x' }, names: { kick: 'Taiko low', snare: 'Taiko high', perc: 'Toms' } },
    bass: { lab: 'sub', plugin: 'Harmor / 3xOsc low drone + low strings', is808: false, title: 'The low end', why: 'Long low notes on the roots (double basses and a synth drone).', notes: '0:D2:16 16:Bb1:16 32:F1:16 48:C2:16' },
    mixer: [['Taiko / drums', 'Fruity Reeverb 2 or Fruity Convolver: big hall, wet 25%.'], ['Strings', 'Fruity Reeverb 2: hall, wet 20%.'], ['Brass', 'Fruity Reeverb 2: hall, wet 25%.'], ['Choir', 'Fruity Reeverb 2: hall, wet 30%.'], ['Low drone', 'Low-pass at 200 Hz.']],
    arrangement: [['1–8', 'Opening', 'Drone and a single low hit.'], ['9–16', 'Ostinato', 'Strings enter.'], ['17–24', 'Build', 'Drums enter, choir.'], ['25–32', 'Climax', 'Brass theme, everything.'], ['33–36', 'Rise', 'Riser, silence.'], ['37–40', 'Final hit', 'Huge hit and tail.']],
    vocals: ['Trailer music is mostly instrumental; choirs singing "ah" or Latin-style words add epic weight.', 'Silence before the final hit makes it much bigger.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (moderate). Trailer cues are loud (around −9 LUFS); film score is quieter (−16 to −20 LUFS).',
    write: { progressions: [['i – VI – III – VII', 'Dm – Bb – F – C', 'Epic (this build)'], ['i – VI', 'Dm – Bb', 'Tension'], ['i – bVI – bII', 'Dm – Bb – Eb', 'Dark']], melody: ['Ostinatos for drive.', 'Brass themes with strong leaps.', 'Leitmotifs: a short theme for each character.'], bass: ['Long low drones.'], drums: ['Taiko hits, tom rolls.'] },
    quiz: [{ q: 'What is an ostinato?', a: ['A long silence', 'A short musical pattern repeated over and over', 'A cymbal', 'A key change'], c: 1, why: 'Ostinatos (often in strings) create drive and tension in film music.' }]
  });

  A.flBuild({
    id: 'g-game',
    title: 'Chiptune video-game theme in A minor',
    bpm: 150, key: 'A minor', scale: 'A B C D E F G', feel: 'fast, loop-based',
    goal: 'An 8-bit style video-game level theme in the style of classic NES music: square-wave lead and harmony, a triangle-wave bass, noise drums, fast arpeggios and a seamless loop.',
    sounds: [['Noise snare', '3xOsc: noise waveform, short decay', 'Chip drums are made from noise.'], ['Kick', '3xOsc: sine with a fast pitch drop', 'Or a short low noise burst.'], ['Hat', '3xOsc: noise, very short', ''], ['Square lead', '3xOsc: square (pulse) wave', 'Short release. Add Fruity Squeeze for 8-bit grit.'], ['Square harmony', '3xOsc: square wave, quieter', ''], ['Triangle bass', '3xOsc: triangle wave', 'NES bass sound.']],
    chords: { lab: 'square', plugin: '3xOsc square (arpeggiated chords)', roman: 'i – VI – III – VII', why: 'Am → F → C → G. Old consoles had only a few channels, so chords were played as **fast arpeggios** instead of real chords. In FL, use the Piano Roll **Arpeggiate** tool (Alt+A) on held chords, or the channel Arpeggiator.', list: [[0, 16, 'Am', 'A4 C5 E5'], [16, 16, 'F', 'A4 C5 F5'], [32, 16, 'C', 'G4 C5 E5'], [48, 16, 'G', 'G4 B4 D5']] },
    melody: { lab: 'square', plugin: '3xOsc square lead', why: 'A heroic, fast, catchy level theme with 8th notes and leaps.', notes: '0:A5:2 2:E5:2 4:A5:2 6:B5:2 8:C6:4 12:B5:2 14:A5:2 16:F5:2 18:A5:2 20:C6:2 22:A5:2 24:G5:4 28:F5:2 30:E5:2 32:E5:2 34:G5:2 36:C6:2 38:E6:2 40:D6:4 44:C6:2 46:B5:2 48:B5:2 50:D6:2 52:G5:2 54:B5:2 56:A5:4 60:G5:4' },
    drums: { why: 'Chip drums: a low "kick" on 1 and 3, noise snare on 2 and 4, short noise hats in 8ths.', rows: { kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' } },
    bass: { lab: 'square', plugin: '3xOsc triangle wave', is808: false, title: 'The triangle bass', why: 'An octave-jumping 8th-note bass on the roots, NES style.', notes: H.perBar(['A2', 'F2', 'C3', 'G2'], OCT) },
    mixer: [['Drums', 'Fruity Squeeze for 8-bit crunch.'], ['Square lead', 'Fruity Squeeze. Small Fruity Delay 3 echo (optional, modern chiptune).'], ['Square harmony', 'Quieter, pan slightly.'], ['Triangle bass', 'High-pass at 40 Hz.']],
    arrangement: [['1–8', 'A section', 'Main theme.'], ['9–16', 'A section', 'Theme with harmony.'], ['17–24', 'B section', 'New melody on the same chords or a key change.'], ['25–32', 'A section', 'Theme again; the end connects seamlessly to bar 1 so it loops.']],
    vocals: ['Game music must loop: make the last bar lead perfectly back to the first.', 'Adaptive music: make extra layers (intense drums, extra melody) the game can add when the action rises.'],
    write: { progressions: [['i – VI – III – VII', 'Am – F – C – G', 'Heroic (this build)'], ['i – VII – VI – VII', 'Am – G – F – G', 'Adventure'], ['I – V – vi – IV', 'C – G – Am – F', 'Happy level']], melody: ['Fast, catchy, wide leaps.', 'Arpeggios instead of chords.'], bass: ['Triangle-wave octave bass.'], drums: ['Noise-based drums.'] },
    quiz: [{ q: 'Why did classic game music use fast arpeggios instead of chords?', a: ['It sounded worse', 'Old consoles had very few sound channels', 'Chords were not invented', 'To save time'], c: 1, why: 'With only a few channels, arpeggios imitated full chords.' }]
  });
})();
