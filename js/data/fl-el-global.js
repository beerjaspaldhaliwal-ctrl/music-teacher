/* FL Studio builds for the elective genres: global. */
(function () {
  const A = window.ACADEMY, H = A.flHelp;
  const BUS = ['Drums bus', 'Fruity Compressor, 2–3 dB of gain reduction.'];

  A.flBuild({
    id: 'g-afrobeats',
    title: 'Afrobeats groove in Ab major',
    bpm: 106, key: 'Ab major', scale: 'Ab Bb C Db Eb F G', feel: 'syncopated, bouncy', labSwing: 54, swing: 'a little (10–20%)',
    goal: 'A warm Afrobeats groove in the style of Burna Boy, Wizkid and producers like P2J and Sarz: highlife-style guitar plucks, soft keys, a syncopated drum groove with shakers, congas and rims, and a round bass.',
    sounds: [['Kick', 'Sampler: a soft, round kick', ''], ['Clap / Rim', 'Sampler: a clap and a rimshot', ''], ['Shaker', 'Sampler: a shaker', 'The heartbeat of Afrobeats.'], ['Congas', 'Sampler: conga or talking-drum hits', ''], ['Keys', 'FL Keys (electric piano) or FLEX', ''], ['Guitar', 'FLEX clean guitar', 'Highlife plucks.'], ['Bass', '3xOsc sine or soft 808', 'Round.']],
    chords: { lab: 'epiano', plugin: 'FL Keys electric piano', roman: 'I – vi – IV – V', why: 'Ab → Fm → Db → Eb: bright, joyful major harmony. Afrobeats chords are simple; the rhythm makes it move.', list: H.stabs([['Ab', 'Ab3 C4 Eb4'], ['Fm', 'Ab3 C4 F4'], ['Db', 'Ab3 Db4 F4'], ['Eb', 'G3 Bb3 Eb4']], [[0, 3], [6, 2], [10, 3]]) },
    melody: { lab: 'guitar', plugin: 'FLEX clean guitar', why: 'Highlife guitar: short, syncopated plucks from the chord, repeating every bar. This interlocking guitar comes from Ghanaian and Nigerian highlife.', notes: '0:Eb5:1 2:C5:1 3:Ab4:1 6:C5:1 8:Eb5:1 10:F5:1 11:Eb5:1 14:C5:1 16:F5:1 18:C5:1 19:Ab4:1 22:C5:1 24:F5:1 26:Ab5:1 27:F5:1 30:C5:1 32:F5:1 34:Db5:1 35:Ab4:1 38:Db5:1 40:F5:1 42:Ab5:1 43:F5:1 46:Db5:1 48:Eb5:1 50:Bb4:1 51:G4:1 54:Bb4:1 56:Eb5:1 58:G5:1 59:F5:1 62:Eb5:1' },
    drums: { why: 'A simplified Afrobeats groove: syncopated kick, clap on 2 and 4, a rim pattern that answers it, constant 16th shakers and congas. Study real records to hear the many variations.', rows: { kick: 'x..x..x...x..x..', clap: '....x.......x...', perc: '..x..x....x..x..', chh: 'xxxxxxxxxxxxxxxx' }, names: { perc: 'Conga / rim', chh: 'Shaker' }, extra: ['Shaker velocities: accent the first 16th of each beat (100%) and keep the others around 60%.'] },
    bass: { lab: 'sub', plugin: '3xOsc sine or soft 808', is808: false, title: 'The bass', why: 'A round, syncopated bass that dances with the kick.', notes: '0:Ab1:3 3:Ab1:3 6:Eb2:2 10:Ab1:4 16:F1:3 19:F1:3 22:C2:2 26:F1:4 32:Db2:3 35:Db2:3 38:Ab1:2 42:Db2:4 48:Eb2:3 51:Eb2:3 54:Bb1:2 58:Eb2:4' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Clap / Rim', 'Fruity Reeverb 2, wet 12%.'], ['Shaker / Congas', 'High-pass at 300 Hz; pan congas left and right.'], ['Keys', 'High-pass at 150 Hz. Fruity Reeverb 2.'], ['Guitar', 'High-pass at 200 Hz. Fruity Delay 3: 1/8, wet 12%.'], ['Bass', 'High-pass at 30 Hz.'], BUS],
    arrangement: [['1–8', 'Intro', 'Guitar and shaker.'], ['9–24', 'Verse', 'Drums, bass, keys.'], ['25–40', 'Chorus', 'Everything.'], ['41–56', 'Verse 2', 'Variation.'], ['57–72', 'Chorus', 'Everything.'], ['73–80', 'Outro', 'Percussion and guitar.']],
    vocals: ['Afrobeats vocals are melodic and rhythmic; call-and-response backing vocals are common.', 'Percussion breaks make great transitions.'],
    write: { progressions: [['I – vi – IV – V', 'Ab – Fm – Db – Eb', 'Joyful (this build)'], ['I – IV', 'Ab – Db', 'Simple groove'], ['vi – IV – I – V', 'Fm – Db – Ab – Eb', 'Emotional']], melody: ['Highlife guitar plucks.', 'Short, syncopated phrases.'], bass: ['Round, syncopated.'], drums: ['Shakers, congas, rims; syncopated kick.'] },
    quiz: [{ q: 'Which instrument part comes from West African highlife and often features in Afrobeats?', a: ['Distorted power chords', 'Interlocking clean guitar plucks', 'A church organ', 'A wobble bass'], c: 1, why: 'Highlife guitar plucks are a common Afrobeats ingredient.' }]
  });

  A.flBuild({
    id: 'g-amapiano',
    title: 'Amapiano with a log drum in F minor',
    bpm: 112, key: 'F minor', scale: 'F G Ab Bb C Db Eb', feel: 'laid-back, rolling', labSwing: 56, swing: 'a little (15–25%)',
    goal: 'An amapiano track in the style of Kabza De Small, DJ Maphorisa and Focalistic: jazzy piano chords, the signature **log drum** bass, shakers, and a laid-back, rolling groove.',
    sounds: [['Kick', 'Sampler: a soft kick', ''], ['Clap', 'Sampler: a clap', ''], ['Shaker', 'Sampler: a shaker', ''], ['Perc', 'Sampler: woodblock or rim', ''], ['Piano', 'FL Keys piano or electric piano', 'Jazzy.'], ['Log drum', 'Sytrus, FLEX or 3xOsc (see below)', 'The signature amapiano bass.']],
    chords: { lab: 'epiano', plugin: 'FL Keys', roman: 'i9 – iv9 – VImaj7 – VII', why: 'Fm9 → Bbm9 → Dbmaj7 → Eb: deep, jazzy harmony from deep house and kwaito.', list: [[0, 16, 'Fm9', 'Ab3 C4 Eb4 G4'], [16, 16, 'Bbm9', 'Ab3 Db4 F4 C5'], [32, 16, 'Dbmaj7', 'F3 Ab3 C4 Db4'], [48, 16, 'Eb', 'G3 Bb3 Eb4']] },
    melody: { lab: 'pluck', plugin: 'FLEX pluck or flute', why: 'A small, airy motif.', notes: '6:C5:2 8:Eb5:2 10:F5:4 22:Db5:2 24:F5:2 26:Ab5:4 38:C5:2 40:F5:2 42:Ab5:4 54:Bb5:2 56:G5:2 58:Eb5:4' },
    drums: { why: 'Amapiano drums are light and rolling: soft kick, claps on 2 and 4, 16th shakers and a woodblock/rim pattern.', rows: { kick: 'x.......x.......', clap: '....x.......x...', chh: 'xxxxxxxxxxxxxxxx', perc: '...x..x....x..x.' }, names: { chh: 'Shaker', perc: 'Woodblock' } },
    extra: [{ after: 'bass', title: 'Design the log drum', body: 'The log drum is a short, pitched, percussive bass with a quick pitch drop.\n1. In **3xOsc**, use a sine or triangle wave. Open the channel settings → *Instrument* tab (envelopes) → **Pitch** envelope: turn it on with a short decay so each note starts high and drops quickly.\n2. Volume envelope: short decay, no sustain.\n3. Add **Fruity Fast Dist** or **Fruity Blood Overdrive** for bite, and **Fruity Parametric EQ 2** to boost around 100–150 Hz.\n4. Or start from a Sytrus or FLEX bass/percussion preset and shorten it. Many producers also use log drum samples.' }],
    bass: { lab: '808', plugin: 'Log drum (3xOsc / Sytrus / FLEX)', is808: false, title: 'The log drum pattern', why: 'The log drum plays a syncopated, melodic pattern; it is both bass and percussion. It often slides between notes too.', notes: '0:F2:2 3:F2:2 6:C3:2 10:F2:2 12:Ab2:2 14:F2:2 16:Bb1:2 19:Bb1:2 22:F2:2 26:Bb1:2 28:Db2:2 30:Bb1:2 32:Db2:2 35:Db2:2 38:Ab2:2 42:Db2:2 44:F2:2 46:Db2:2 48:Eb2:2 51:Eb2:2 54:Bb2:2 58:Eb2:2 60:G2:2g' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Clap', 'Fruity Reeverb 2, wet 15%.'], ['Shaker / Woodblock', 'High-pass at 400 Hz.'], ['Piano', 'High-pass at 150 Hz. Fruity Reeverb 2, wet 20%.'], ['Log drum', 'Fruity Parametric EQ 2 → Fruity Fast Dist → Fruity Limiter.'], BUS],
    arrangement: [['1–16', 'Intro', 'Shakers and piano.'], ['17–32', 'Groove', 'Add drums and log drum.'], ['33–64', 'Main', 'Everything.'], ['65–80', 'Break', 'Piano and vocals.'], ['81–112', 'Main 2', 'Everything, new log drum pattern.'], ['113–128', 'Outro', 'Shakers and piano.']],
    vocals: ['Amapiano often uses chanted or spoken vocals and long instrumental sections.', 'Tracks are long (5–7 minutes): change slowly.'],
    write: { progressions: [['i9 – iv9 – VImaj7 – VII', 'Fm9 – Bbm9 – Dbmaj7 – Eb', 'Deep (this build)'], ['i9 – iv9', 'Fm9 – Bbm9', 'Classic vamp']], melody: ['Airy flute or pluck motifs.'], bass: ['Log drum: short, pitched, syncopated.'], drums: ['Light kick, shakers, woodblocks.'] },
    quiz: [{ q: 'What is the signature bass sound of amapiano?', a: ['Reese bass', 'The log drum', 'An upright bass', 'A tuba'], c: 1, why: 'The pitched, percussive log drum defines amapiano.' }]
  });

  A.flBuild({
    id: 'g-reggaeton',
    title: 'Reggaeton dembow in A minor',
    bpm: 94, key: 'A minor', scale: 'A B C D E F G', feel: 'dembow',
    goal: 'A modern reggaeton track in the style of J Balvin, Bad Bunny and Karol G: the dembow drum rhythm, a soft synth pad, a catchy pluck melody and a punchy bass.',
    sounds: [['Kick', 'Sampler: a punchy kick', ''], ['Snare', 'Sampler: a snappy snare or rim', 'The dembow snare.'], ['Hats', 'Sampler: closed hats', ''], ['Perc', 'Sampler: timbale or bongo', ''], ['Pad', 'FLEX soft pad', ''], ['Pluck', 'FLEX or Sytrus pluck', ''], ['Bass', '3xOsc or an 808', '']],
    chords: { lab: 'pad', plugin: 'FLEX pad', roman: 'i – VI – III – VII', why: 'Am → F → C → G: the reggaeton and Latin-pop staple.', list: [[0, 16, 'Am', 'A3 C4 E4'], [16, 16, 'F', 'A3 C4 F4'], [32, 16, 'C', 'G3 C4 E4'], [48, 16, 'G', 'G3 B3 D4']] },
    melody: { lab: 'pluck', plugin: 'Pluck', why: 'A short pluck hook that follows the dembow rhythm.', notes: '0:E5:2 3:E5:2 6:D5:2 8:C5:2 11:C5:2 14:B4:2 16:C5:2 19:C5:2 22:A4:2 24:C5:2 27:D5:2 30:E5:2 32:E5:2 35:E5:2 38:D5:2 40:C5:2 43:G4:2 46:C5:2 48:B4:2 51:B4:2 54:D5:2 56:G5:4' },
    drums: { why: 'The **dembow**: kick on every beat, snare on the 4th and 7th 16ths of each half-bar (a 3+3+2 feel: boom-ch-boom-chick).', rows: { kick: 'x...x...x...x...', snare: '...x..x....x..x.', chh: 'x.x.x.x.x.x.x.x.', perc: '.........x....x.' } },
    bass: { lab: 'sub', plugin: '3xOsc or 808', is808: false, title: 'The bass', why: 'The bass follows the kick on each beat, playing the roots.', notes: H.perBar(['A1', 'F1', 'C2', 'G1'], [[0, 0, 3], [4, 0, 2], [6, 0, 2], [8, 0, 3], [12, 0, 2], [14, 0, 2]]) },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 10%.'], ['Hats / Perc', 'High-pass at 400 Hz.'], ['Pad', 'High-pass at 200 Hz.'], ['Pluck', 'Fruity Delay 3, wet 12%.'], ['Bass', 'High-pass at 30 Hz.'], BUS],
    arrangement: [['1–8', 'Intro', 'Pad and pluck.'], ['9–16', 'Chorus', 'Everything.'], ['17–32', 'Verse', 'Drums and bass, pad quieter.'], ['33–40', 'Pre-chorus', 'Snare out, build.'], ['41–48', 'Chorus', 'Everything.'], ['49–64', 'Verse 2', ''], ['65–72', 'Chorus', ''], ['73–80', 'Outro', '']],
    vocals: ['Reggaeton vocals are melodic and often auto-tuned (Pitcher in A minor).', 'Drop the dembow for a bar before the chorus.'],
    write: { progressions: [['i – VI – III – VII', 'Am – F – C – G', 'Classic (this build)'], ['i – iv – VII – III', 'Am – Dm – G – C', 'Romantic'], ['i – VII – VI – V', 'Am – G – F – E', 'Flamenco']], melody: ['Plucks following the dembow.'], bass: ['Roots on every beat.'], drums: ['Dembow: kick every beat, snare 3+3+2.'] },
    quiz: [{ q: 'Where does the dembow snare fall?', a: ['Only on beat 3', 'On the 4th and 7th 16ths of each half-bar (3+3+2)', 'Every 16th', 'Nowhere'], c: 1, why: 'That boom-ch-boom-chick pattern is the dembow.' }]
  });

  A.flBuild({
    id: 'g-dancehall',
    title: 'Modern dancehall riddim in G minor',
    bpm: 100, key: 'G minor', scale: 'G A Bb C D Eb F', feel: 'syncopated 3-3-2',
    goal: 'A modern dancehall riddim in the style of producers behind Vybz Kartel, Popcaan and Spice: a syncopated 3-3-2 groove, sparse synth stabs, a heavy bass, and space for the deejay.',
    sounds: [['Kick', 'Sampler: a punchy kick', ''], ['Snare', 'Sampler: a sharp snare or clap', ''], ['Hats', 'Sampler: closed hats', ''], ['Perc', 'Sampler: rim or cowbell', ''], ['Stabs', 'FLEX or Sytrus: a short synth stab', ''], ['Bass', '3xOsc sine / 808', 'Heavy.']],
    chords: { lab: 'stab', plugin: 'Synth stab', roman: 'i – VI – VII', why: 'Gm → Eb → F: simple minor harmony, played as syncopated stabs.', list: H.stabs([['Gm', 'G3 Bb3 D4'], ['Gm', 'G3 Bb3 D4'], ['Eb', 'G3 Bb3 Eb4'], ['F', 'F3 A3 C4']], [[0, 2], [3, 2], [6, 2], [12, 2]]) },
    melody: { lab: 'lead', plugin: 'FLEX lead', why: 'A short riff in the gaps.', notes: '8:D5:2 10:F5:2 24:G5:2 26:F5:2 28:D5:4 40:Eb5:2 42:D5:2 56:C5:2 58:A4:2 60:G4:4' },
    drums: { why: 'Syncopated 3-3-2 kick, snare on 2 and 4, a rim pattern answering.', rows: { kick: 'x..x..x.x..x..x.', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', perc: '..x..x....x..x..' } },
    bass: { lab: 'sub', plugin: '3xOsc sine / 808', is808: false, title: 'The bass', why: 'A heavy bass following the 3-3-2 kick.', notes: H.perBar(['G1', 'G1', 'Eb1', 'F1'], [[0, 0, 3], [3, 0, 3], [6, 0, 2], [8, 0, 3], [11, 0, 3], [14, 0, 2]]) },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Snare', 'Fruity Reeverb 2, wet 10%.'], ['Hats / Perc', 'High-pass at 400 Hz.'], ['Stabs', 'Fruity Delay 3: 1/8 dotted, wet 15%.'], ['Bass', 'High-pass at 30 Hz. Fruity Limiter.'], BUS],
    arrangement: [['1–8', 'Intro', ''], ['9–24', 'Verse', 'Riddim.'], ['25–32', 'Chorus', 'Add the riff.'], ['33–48', 'Verse 2', ''], ['49–56', 'Chorus', ''], ['57–64', 'Outro', '']],
    vocals: ['A riddim is shared by many artists: keep it simple and leave space for the deejay.', 'Drop-outs (everything stops for a beat) are big in dancehall.'],
    write: { progressions: [['i – VI – VII', 'Gm – Eb – F', 'This build'], ['i – iv', 'Gm – Cm', 'Dark'], ['i (one chord)', 'Gm', 'Minimal riddim']], melody: ['Short riffs in the gaps.'], bass: ['Heavy, 3-3-2.'], drums: ['3-3-2 kick, snare 2 and 4.'] },
    quiz: [{ q: 'What is a "riddim" in dancehall?', a: ['A vocal style', 'An instrumental beat that many artists voice', 'A type of microphone', 'A dance move'], c: 1, why: 'Many artists record songs over the same riddim.' }]
  });

  A.flBuild({
    id: 'g-reggae',
    title: 'Roots reggae one drop in A minor',
    bpm: 74, key: 'A minor', scale: 'A B C D E F G', feel: 'one drop, swung', labSwing: 60, swing: 'up (around 30–45%)',
    goal: 'A roots reggae groove in the tradition of Bob Marley & the Wailers and Studio One: the **one drop** drum beat, off-beat guitar/organ "skank", a deep melodic bassline and dub echoes.',
    sounds: [['Kick', 'Sampler: a soft, round kick', ''], ['Rim / Snare', 'Sampler: a rimshot (cross-stick)', 'Plays with the kick on beat 3.'], ['Hats', 'Sampler: closed hats', 'Swung.'], ['Skank', 'FLEX clean guitar or organ', 'Short off-beat chords.'], ['Organ', 'FLEX organ', 'The "bubble".'], ['Bass', 'FLEX bass guitar or 3xOsc sine', 'Deep and round.']],
    chords: { lab: 'organ', plugin: 'FLEX guitar / organ skank', roman: 'i – VII', why: 'Am → G: a simple two-chord roots vamp. The chords are played only on the off-beats ("skank"), short and choppy.', list: H.stabs([['Am', 'A3 C4 E4'], ['Am', 'A3 C4 E4'], ['G', 'G3 B3 D4'], ['G', 'G3 B3 D4']], [[2, 1], [6, 1], [10, 1], [14, 1]]) },
    melody: { lab: 'organ', plugin: 'FLEX organ', why: 'A simple organ melody, like a horn line.', notes: '0:E5:4 4:D5:2 6:C5:2 8:A4:8 32:D5:4 36:B4:2 38:G4:2 40:B4:8' },
    drums: { why: 'The **one drop**: no kick on beat 1. The kick and rim hit together on **beat 3** only. Hats swing in 8ths. This "dropped" downbeat is the heart of roots reggae.', rows: { kick: '........x.......', snare: '........x.......', chh: 'x.x.x.x.x.x.x.x.' }, names: { snare: 'Rim' } },
    bass: { lab: 'upright', plugin: 'FLEX bass guitar / 3xOsc sine', is808: false, title: 'The bassline', why: 'Reggae bass is the lead instrument: deep, melodic, with space. It avoids beat 1 too.', notes: '2:A1:2 4:C2:2 6:E2:4 12:D2:2 14:C2:2 18:A1:2 20:C2:2 22:E2:2 26:G2:4 34:G1:2 36:B1:2 38:D2:4 44:C2:2 46:B1:2 50:G1:2 52:B1:2 54:D2:2 58:E2:4' },
    mixer: [['Kick', 'High-pass at 30 Hz.'], ['Rim', 'Fruity Reeverb 2: spring-like, wet 15%.'], ['Hats', 'High-pass at 400 Hz.'], ['Skank', 'High-pass at 300 Hz. Fruity Delay 3 for dub echoes (automate the send).'], ['Organ', 'High-pass at 200 Hz.'], ['Bass', 'High-pass at 30 Hz, boost around 80 Hz.']],
    arrangement: [['1–8', 'Intro', ''], ['9–24', 'Verse', ''], ['25–32', 'Chorus', ''], ['33–48', 'Verse 2', ''], ['49–56', 'Chorus', ''], ['57–72', 'Dub section', 'Drums and bass only, with delay and reverb throws on everything else.']],
    vocals: ['Roots vocals are melodic and message-driven.', 'Dub techniques: mute and unmute instruments live and throw delays (automate Fruity Delay 3).'],
    write: { progressions: [['i – VII', 'Am – G', 'Roots (this build)'], ['I – IV – V', 'C – F – G', 'Classic major'], ['i – iv', 'Am – Dm', 'Minor vamp']], melody: ['Simple organ or horn lines.'], bass: ['Melodic, deep, with space.'], drums: ['One drop: kick + rim on beat 3.'] },
    quiz: [{ q: 'In the reggae "one drop", where do the kick and rim hit together?', a: ['Beat 1', 'Beat 3', 'Every beat', 'Never'], c: 1, why: 'The one drop drops the downbeat; kick and rim land on beat 3.' }]
  });

  A.flBuild({
    id: 'g-bhangra',
    title: 'Bhangra with dhol and tumbi in D (Mixolydian)',
    bpm: 100, key: 'D Mixolydian', scale: 'D E F# G A B C (Mixolydian: major with a flat 7th, C)', feel: 'swung dhol chaal', labSwing: 62, swing: 'up (around 35–50%) for the chaal bounce',
    goal: 'A Punjabi bhangra track in the style of Panjabi MC, PBN and Diljit Dosanjh productions: the swung dhol **chaal** rhythm, a tumbi riff, a synth bass and a big festive energy.',
    sounds: [['Dhol', 'Sampler or FPC: dhol hits (dagga = bass, tilli = treble)', 'The engine of bhangra.'], ['Kick', 'Sampler: a kick to reinforce the dagga', ''], ['Clap', 'Sampler: a clap', ''], ['Tumbi', 'Sakura or FLEX pluck', 'Bright, high and short.'], ['Bass', '3xOsc or FLEX synth bass', ''], ['Chimta / perc', 'Sampler: a metal jingle or tambourine', '']],
    chords: { lab: 'pad', plugin: 'FLEX pad (quiet)', roman: 'I – bVII', why: 'D → C: the Mixolydian flat 7th (C) gives a folk, festive sound common in Punjabi music.', list: [[0, 32, 'D', 'D4 F#4 A4'], [32, 32, 'C', 'C4 E4 G4']] },
    melody: { lab: 'tumbi', plugin: 'Sakura or FLEX pluck (tumbi)', why: 'A classic tumbi riff: fast, repeated notes bouncing on D and A.', notes: H.arp(['D5 F#5 A5 C6', 'D5 F#5 A5 C6', 'C5 E5 G5 C6', 'D5 F#5 A5 C6'], [0, 0, 2, 0, 1, 0, 2, 3], 2) },
    drums: { why: 'The dhol **chaal** is a swung "dha-dhin, dha-dhin" pattern. Here the dagga (low) is on the kick row and the tilli (high) on the perc row; with heavy swing it bounces.', rows: { kick: 'x..x..x.x..x..x.', clap: '....x.......x...', perc: '.xx.x.xx.xx.x.xx' }, names: { kick: 'Dagga', perc: 'Tilli' }, extra: ['Real dhol players vary the chaal constantly. Listen to bhangra records and copy the fills (16th rolls) into each section.'] },
    bass: { lab: 'moog', plugin: '3xOsc / FLEX synth bass', is808: false, title: 'The bass', why: 'A bouncing bass that follows the dagga.', notes: H.perBar(['D2', 'D2', 'C2', 'D2'], [[0, 0, 3], [3, 0, 3], [6, 1, 2], [8, 0, 3], [11, 0, 3], [14, 1, 2]]) },
    mixer: [['Dhol', 'Fruity Compressor, fast. Fruity Parametric EQ 2: boost the dagga around 80–120 Hz and the tilli around 3–5 kHz.'], ['Kick', 'High-pass at 30 Hz.'], ['Clap', 'Fruity Reeverb 2, wet 10%.'], ['Tumbi', 'High-pass at 400 Hz. Fruity Delay 3, wet 10%.'], ['Bass', 'High-pass at 30 Hz.'], BUS],
    arrangement: [['1–8', 'Intro', 'Tumbi alone, then dhol enters.'], ['9–24', 'Verse', 'Dhol, bass.'], ['25–32', 'Chorus', 'Everything with chants ("hoy hoy!").'], ['33–40', 'Dhol break', 'Dhol solo.'], ['41–56', 'Verse 2', ''], ['57–72', 'Chorus', ''], ['73–80', 'Outro', 'Dhol and tumbi.']],
    vocals: ['Bhangra vocals are powerful with chants ("balle balle", "hoy").', 'A dhol solo is a highlight: let it breathe.'],
    write: { progressions: [['I – bVII', 'D – C', 'Festive (this build)'], ['I (drone)', 'D drone', 'Traditional'], ['i – bVII', 'Dm – C', 'Darker Punjabi']], melody: ['Tumbi riffs on the root and 5th.'], bass: ['Following the dagga.'], drums: ['Swung dhol chaal.'] },
    quiz: [{ q: 'What is the dhol "chaal"?', a: ['A guitar chord', 'The swung core rhythm of bhangra played on the dhol', 'A vocal style', 'A mixing technique'], c: 1, why: 'The chaal is the swung dhol groove that drives bhangra.' }]
  });

  A.flBuild({
    id: 'g-bollywood',
    title: 'Romantic Bollywood song in E minor',
    bpm: 92, key: 'E minor', scale: 'E F# G A B C D', feel: 'keherwa (8-beat) feel',
    goal: 'A romantic Bollywood film song in the style of A. R. Rahman, Pritam and Vishal–Shekhar: lush strings, a flute melody with Indian ornaments, piano, a tabla/dholak keherwa groove and a modern beat underneath.',
    sounds: [['Kick', 'Sampler: a soft kick', ''], ['Snare / Clap', 'Sampler: a soft snare', ''], ['Tabla / Dholak', 'Sampler or FPC: tabla or dholak hits (royalty-free)', 'The keherwa groove.'], ['Strings', 'FLEX strings or a string ensemble', 'Lush.'], ['Flute', 'FLEX flute (bansuri-style)', 'The melody.'], ['Piano', 'FL Keys', ''], ['Bass', 'FLEX bass or 3xOsc sine', '']],
    chords: { lab: 'strings', plugin: 'FLEX strings', roman: 'i – VI – VII – i', why: 'Em → C → D → Em: emotional, cinematic and singable.', list: [[0, 16, 'Em', 'E3 G3 B3'], [16, 16, 'C', 'E3 G3 C4'], [32, 16, 'D', 'D3 F#3 A3'], [48, 16, 'Em', 'E3 G3 B3']] },
    melody: { lab: 'flute', plugin: 'FLEX flute (bansuri)', why: 'A flowing flute melody. Add **meend** (glides between notes, using slide notes or pitch-bend automation) and quick grace notes (a very short note just before the main one) to make it sound Indian.', notes: '0:B4:4 4:D5:2 6:E5:2 8:G5:6 14:F#5:2 16:E5:6 22:D5:2 24:C5:4 28:B4:4 32:A4:4 36:B4:2 38:D5:2 40:F#5:6 46:E5:2 48:E5:12 60:D5:4' },
    drums: { why: 'A **keherwa** groove (the most common 8-beat Indian rhythm, "dha ge na ti na ka dhi na") played on tabla/dholak, with a soft modern kick and snare underneath.', rows: { kick: 'x.....x...x.....', snare: '....x.......x...', perc: 'x.xx.xx.x.xx.xx.' }, names: { perc: 'Tabla' } },
    bass: { lab: 'upright', plugin: 'FLEX bass', is808: false, title: 'The bass', why: 'Simple roots following the chords.', notes: '0:E2:6 6:E2:2 10:B1:4 14:E2:2 16:C2:6 22:C2:2 26:G1:4 30:C2:2 32:D2:6 38:D2:2 42:A1:4 46:D2:2 48:E2:6 54:E2:2 58:B1:4 62:D2:2' },
    mixer: [['Kick / Snare', 'Soft, quieter than the tabla.'], ['Tabla', 'Fruity Reeverb 2: room, wet 12%.'], ['Strings', 'High-pass at 150 Hz. Fruity Reeverb 2: hall, wet 25%.'], ['Flute', 'High-pass at 300 Hz. Fruity Reeverb 2, wet 25%.'], ['Piano', 'Fruity Reeverb 2, wet 15%.'], ['Bass', 'High-pass at 30 Hz.']],
    arrangement: [['1–8', 'Intro', 'Flute and strings.'], ['9–24', 'Mukhda (verse)', ''], ['25–32', 'Hook', 'Everything.'], ['33–40', 'Interlude', 'Instrumental: flute or strings solo.'], ['41–56', 'Antara (second verse)', ''], ['57–64', 'Hook', ''], ['65–72', 'Outro', '']],
    vocals: ['Bollywood songs are vocal-led: mukhda (main section) and antara (verses), with instrumental interludes.', 'Use string swells and tabla fills between sections.'],
    write: { progressions: [['i – VI – VII – i', 'Em – C – D – Em', 'Romantic (this build)'], ['i – iv – VII – III', 'Em – Am – D – G', 'Cinematic'], ['Drone', 'E drone, raga melody', 'Classical feel']], melody: ['Raga-flavoured melodies with meend and grace notes.', 'Flute, sarangi, sitar, strings.'], bass: ['Simple roots.'], drums: ['Keherwa (8) or dadra (6) on tabla/dholak.'] },
    quiz: [{ q: 'What is "meend" in Indian music?', a: ['A drum', 'A smooth glide between notes', 'A fast tempo', 'A chord'], c: 1, why: 'Meend is the expressive glide that makes melodies sound Indian.' }]
  });

  A.flBuild({
    id: 'g-baile-funk',
    title: 'Baile funk (funk carioca) in A minor',
    bpm: 130, key: 'A minor', scale: 'A B C D E F G', feel: 'tamborzão 3-3-2',
    goal: 'A Brazilian baile funk (funk carioca) beat in the style of the Rio favela parties and modern producers like DJ Gabriel do Borel: the tamborzão drum rhythm, a heavy 808, a short synth stab and chanted vocals. (The drum pattern here is a simplified version.)',
    sounds: [['Kick', 'Sampler: a booming 808 kick', ''], ['Snare / Clap', 'Sampler: a clap', ''], ['Perc', 'Sampler: conga / tamborim hits', 'The tamborzão.'], ['Stab', 'FLEX or Sytrus: a short synth stab', ''], ['808', 'Sampler: an 808', ''], ['Vocal chop', 'Slicex with a chant you recorded', '']],
    chords: { lab: 'stab', plugin: 'Synth stab', roman: 'i (one chord)', why: 'Baile funk barely uses chords: an A minor stab on the off-beats.', list: H.stabs([['Am', 'A3 C4 E4'], ['Am', 'A3 C4 E4'], ['Am', 'A3 C4 E4'], ['Am', 'A3 C4 E4']], [[3, 1], [10, 1]]) },
    melody: { lab: 'vox', plugin: 'Vocal chop', why: 'A chanted vocal chop is the "melody".', notes: '0:E5:2 3:E5:2 6:C5:2 8:A4:4 32:E5:2 35:E5:2 38:G5:2 40:E5:4' },
    drums: { why: 'The tamborzão: a 3-3-2 kick and percussion pattern with claps. Simplified here on a 16th grid.', rows: { kick: 'x..x..x...x..x..', clap: '....x.......x...', perc: 'x.xx.x.x.xx.x.x.' }, names: { perc: 'Tamborim' } },
    bass: { lab: '808', plugin: 'Sampler with an 808', why: 'A heavy 808 doubling the kick on A.', notes: '0:A1:3 3:A1:3 6:A1:4 10:A1:3 13:A1:3 16:A1:3 19:A1:3 22:A1:4 26:A1:3 29:C2:3 32:A1:3 35:A1:3 38:A1:4 42:A1:3 45:A1:3 48:A1:3 51:A1:3 54:A1:4 58:G1:3 61:E1:3' },
    mixer: [['Kick', 'Fruity Soft Clipper.'], ['Clap', 'Fruity Reeverb 2, wet 10%.'], ['Perc', 'High-pass at 300 Hz.'], ['Stab', 'Fruity Delay 3, wet 15%.'], ['808', 'Fruity Blood Overdrive → Fruity Limiter.'], ['Vocal chop', 'Fruity Reeverb 2, wet 15%.'], BUS],
    arrangement: [['1–8', 'Intro', 'Chant.'], ['9–24', 'Main', 'Everything.'], ['25–32', 'Break', 'Chant and perc.'], ['33–48', 'Main 2', 'Everything.'], ['49–56', 'Outro', '']],
    vocals: ['Baile funk vocals are chanted, call-and-response MC style.', 'Short, loud, party-focused tracks.'],
    write: { progressions: [['i (one chord)', 'Am', 'This build'], ['i – VI', 'Am – F', 'Melodic funk']], melody: ['Chanted vocal chops.'], bass: ['808 doubling the kick.'], drums: ['Tamborzão 3-3-2.'] },
    quiz: [{ q: 'What is the tamborzão?', a: ['A guitar', 'The core drum rhythm of baile funk', 'A mixing plugin', 'A vocal effect'], c: 1, why: 'The tamborzão rhythm drives funk carioca.' }]
  });
})();
