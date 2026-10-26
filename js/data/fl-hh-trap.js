/* FL Studio builds for Semester 10: The Trap Era. */
(function () {
  const A = window.ACADEMY;

  A.flBuild({
    id: 'trap',
    title: 'Dark Atlanta trap in A minor',
    bpm: 140, key: 'A minor', scale: 'A B C D E F G, with G# for the V chord (harmonic minor)', feel: 'half-time: snare on beat 3',
    goal: 'A dark, cinematic Atlanta trap beat in the style made famous by Metro Boomin, Southside and 808 Mafia: a choir pad playing a 4-chord minor progression, a bell melody on top, bouncing hi-hats with rolls and a long 808 that slides up an octave at the end of the loop.',
    sounds: [
      ['Kick', 'Sampler: a short, punchy trap kick', 'Drag a kick from your kit (or Browser → Packs → Drums) onto the Channel Rack. Short kicks leave room for the 808.'],
      ['Clap', 'Sampler: a clap layered with a snare', 'Load a clap, then a snare on a second channel. Both play the same steps; turn the snare down until it adds body without being heard on its own.'],
      ['Hi-hat', 'Sampler: a crisp closed hat', 'Pick a short, bright hat. Long hats smear the rolls.'],
      ['Open hat', 'Sampler: an open hat', 'Used once per 4 bars as a lift.'],
      ['808', 'Sampler: a long 808 (2+ seconds)', 'Tune it (see Step 7), then channel settings → Miscellaneous functions → Polyphony: Mono + Porta.'],
      ['Bells', 'FLEX: a bell, music box or mallet preset', 'Click the preset name at the top of FLEX to browse. Ogun or Sytrus bell presets also work.'],
      ['Choir', 'FLEX: a choir or dark pad preset', 'A soft choir "ahh" or a dark string pad. Harmor pads are a good alternative.']
    ],
    chords: {
      lab: 'choir', plugin: 'FLEX choir (or a dark pad)', roman: 'i – VI – iv – V',
      why: 'This is the classic dark trap progression: A minor → F major → D minor → E major. The last chord uses **G#** instead of G (the harmonic minor scale), which creates tension that pulls you back to A minor every 4 bars. Each chord lasts one full bar.',
      list: [[0, 16, 'Am', 'A3 C4 E4'], [16, 16, 'F', 'F3 A3 C4'], [32, 16, 'Dm', 'A3 D4 F4'], [48, 16, 'E', 'G#3 B3 E4']],
      tips: ['Voice the chords close together (all within one octave) so they move smoothly; notice the A4 that stays in three of the four chords.', 'Add the root an octave below (A3, F3, D3, E3) only if your choir sounds thin; the 808 already covers the low end.']
    },
    melody: {
      lab: 'bell', plugin: 'FLEX bells',
      why: 'The melody uses the same rhythm in every bar (call and response with itself) and only changes the notes to fit each chord. Bar 4 uses G# so the melody and the E chord agree. Simple rhythm + chord tones = a melody people remember.',
      notes: '0:E5:2 2:C5:2 4:A4:2 6:C5:1 7:D5:1 8:E5:3 12:D5:2 14:C5:2 16:F5:2 18:C5:2 20:A4:2 22:C5:1 23:D5:1 24:E5:3 28:D5:2 30:C5:2 32:D5:2 34:A4:2 36:F4:2 38:A4:1 39:C5:1 40:D5:3 44:C5:2 46:A4:2 48:B4:2 50:G#4:2 52:E4:2 54:G#4:1 55:A4:1 56:B4:3 60:G#4:2 62:B4:2',
      tips: ['Add Fruity Delay 3 on the bell insert (see the Mixer table) so the gaps fill with echoes.', 'Try the same notes on a piano (FL Keys) or a flute; the melody should still work.']
    },
    drums: {
      why: 'Trap drums are half-time: the clap lands on **beat 3** of every bar, which makes 140 BPM feel like 70. The kick is syncopated and sparse because the 808 does most of the low-end work. The hats carry the energy: steady 8ths with 16th bursts, and a big roll at the end of bar 4.',
      rows: {
        kick: 'x.....x...x.....' + 'x.....x...x.....' + 'x.....x...x.....' + 'x.....x...x..x..',
        clap: '........x.......',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.x.xxx.x.' + 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.xxxxxxxx',
        ohh: '.'.repeat(48) + '..............x.'
      },
      extra: [
        '**Hi-hat rolls:** open the hi-hat in the Piano Roll. For a 32nd-note roll, set snap to **½ step**, draw a note across the last beat of bar 4 and press **Alt+U** (Chop) to cut it into 32nds. For triplet rolls set snap to **1/6 beat** (16th triplets) before chopping.',
        'Make rolls ramp: draw the velocities rising from about 50% to 100% across the roll, and pitch the last few hat notes up 1–2 semitones for a classic "rising" roll.',
        'Turn every second 8th-note hat down to about 75% velocity so the hats bounce instead of sounding robotic.'
      ]
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'The 808 plays the root of each chord (A, F, D, E) and follows the kick rhythm, so kick and 808 hit together as one huge sound. At the end of bar 2 and bar 4 it slides **up an octave**, which is the signature trap move.',
      notes: '0:A1:6 6:A1:4 10:A1:6 16:F1:6 22:F1:4 26:F1:4 30:F2:2g 32:D2:6 38:D2:4 42:D2:6 48:E1:6 54:E1:4 58:E1:3 61:E2:3g',
      tips: ['The kick and 808 start together. If they fight, shorten the kick or move the 808 a few milliseconds later (channel settings → Miscellaneous functions → Time → Shift).', 'Check the 808 on phone speakers: if you cannot hear it, add a little distortion (see Mixer) so its harmonics come through.']
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz, small boost around 60–80 Hz for punch.'],
      ['Clap + Snare', 'Fruity Parametric EQ 2: high-pass at 150 Hz. Fruity Reeverb 2: small room, wet about 10%.'],
      ['Hi-hat / Open hat', 'Fruity Parametric EQ 2: high-pass at 300 Hz. Volume about 6 dB below the clap; pan the open hat slightly right.'],
      ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Fast Dist or Fruity Blood Overdrive, gently, so it is audible on small speakers. Fruity Limiter at the end to keep peaks under control.'],
      ['Bells', 'Fruity Parametric EQ 2: high-pass at 250 Hz. Fruity Delay 3: 1/8 or dotted 1/8 time, feedback about 25%, wet about 15%. Fruity Reeverb 2: large hall, wet 20%.'],
      ['Choir', 'Fruity Parametric EQ 2: high-pass at 200 Hz and a gentle cut around 300–500 Hz to remove mud. Fruity Stereo Shaper for width. Keep it under the bells.'],
      ['Drums bus', 'Fruity Soft Clipper or Fruity Limiter with 1–3 dB of gain reduction: makes the drums hit harder and feel like one kit.']
    ],
    arrangement: [
      ['1–8', 'Intro', 'Bells and choir only, low-passed (automate Fruity Parametric EQ 2 or use Fruity Filter). Producer tag here.'],
      ['9–24', 'Hook', 'Everything. Filter opens fully on bar 9 with the first 808 hit.'],
      ['25–40', 'Verse 1', 'Remove the choir or turn the bells down 3 dB; simpler hats (no rolls for the first 8 bars).'],
      ['41–56', 'Hook', 'Everything again; add an extra hat roll every 4 bars.'],
      ['57–72', 'Verse 2', 'New variation: change the kick pattern, add a counter-melody or drop the melody for 4 bars.'],
      ['73–88', 'Hook', 'Full energy.'],
      ['89–96', 'Outro', 'Drums and 808 out; bells and choir fade out with the filter closing.']
    ],
    vocals: [
      'Before each hook, mute everything except the melody for the last beat (or the last bar) so the hook hits harder. A reverse cymbal or a riser helps.',
      'Every 8 bars, mute the 808 for one beat right before a glide; the silence makes the slide stand out.',
      'Keep the bells and choir quieter in the verses: the vocal sits around 2–5 kHz, so a small cut there on the bells (EQ) makes room.',
      'Leave the first 2 bars of each verse lighter so the rapper can start without fighting the beat.'
    ],
    master: 'Fruity Parametric EQ 2 (only small moves) → Fruity Limiter (ceiling −1 dB, raise gain until the beat is loud but the kick still punches). Trap beats are loud, around −7 to −9 LUFS short-term in the hook; check with Youlean Loudness Meter.',
    write: {
      progressions: [
        ['i – VI – iv – V', 'Am – F – Dm – E', 'Dark and cinematic (this build)'],
        ['i – VI – III – VII', 'Am – F – C – G', 'Emotional, melodic trap'],
        ['i – iv', 'Am – Dm', 'Minimal and menacing'],
        ['i – bII', 'Am – Bb', 'Evil, horror-movie (Phrygian)'],
        ['i – VI – VII', 'Am – F – G', 'Triumphant, anthem trap']
      ],
      melody: ['Use only the notes of the scale (turn on scale highlighting), plus the raised 7th (G# in A minor) over the V chord.', 'Write a 1-bar rhythm and repeat it on every chord; change only the notes.', 'Start phrases on chord tones (the notes of the chord under it).', 'Leave gaps of at least half a beat; the delay fills them.', 'Keep the melody between about A5 and A6 (above the choir, below piercing).'],
      bass: ['The 808 plays the root of each chord, usually on the kick hits.', 'Glide up an octave at the end of every 2 or 4 bars; glide down for a heavier, darker feel.', 'Long notes on beat 1, shorter notes in between: rhythm comes from note lengths.', 'Keep 808 notes between about E2 and E3. Higher than that and it stops feeling like an 808.'],
      drums: ['Clap on beat 3 every bar (half-time).', 'Kick on beat 1, then 1–3 syncopated kicks; never on beat 3 with the clap.', 'Hats in 8ths with 16th bursts; a roll or triplet every 2–4 bars.', 'One open hat per 2–4 bars, on an off-beat.']
    },
    quiz: [
      { q: 'Why is the 4th chord E major (with G#) in this A minor beat?', a: ['It is a mistake', 'It comes from the harmonic minor scale and pulls strongly back to A minor', 'E major is in every key', 'To make the 808 louder'], c: 1, why: 'Raising G to G# makes the V chord major, creating tension that resolves to the i chord.' }
    ],
    tips: ['Metro Boomin-style beats often use only 2–4 sounds playing at once. If it sounds busy, remove something.'],
    mistakes: ['Putting the kick on beat 3 with the clap, which kills the half-time feel.'],
    watch: [['Metro Boomin style beat in FL Studio', 'Metro Boomin type beat FL Studio tutorial'], ['Trap hi-hat rolls in FL Studio', 'trap hi hat rolls FL Studio piano roll']]
  });
  // ---------- Shared rows for the trap-era builds ----------
  const KICK = ['Kick', 'Sampler: a short trap kick', 'From your kit or Browser → Packs → Drums.'];
  const HAT = ['Hi-hat', 'Sampler: a closed hat', 'Short and crisp.'];
  const OHAT = ['Open hat', 'Sampler: an open hat', 'Used sparingly as a lift.'];
  const B808 = ['808', 'Sampler: a long 808', 'Tune it (see the 808 step), then channel settings → Miscellaneous functions → Polyphony: Mono + Porta.'];
  const MIX_DRUMS = [
    ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz, small boost at 60–80 Hz.'],
    ['Snare / Clap', 'Fruity Parametric EQ 2: high-pass at 150 Hz. Fruity Reeverb 2: small room, wet 10%.'],
    ['Hats', 'Fruity Parametric EQ 2: high-pass at 300 Hz. About 6 dB quieter than the clap.']
  ];
  const MIX_808 = ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Fast Dist or Fruity Blood Overdrive (gentle) for harmonics. Fruity Limiter last to control peaks.'];
  const MIX_BUS = ['Drums bus', 'Fruity Soft Clipper or Fruity Limiter, 1–3 dB of gain reduction.'];
  const ROLLS = 'Hi-hat rolls: open the hat in the Piano Roll, set snap to **½ step** (32nds) or **1/6 beat** (16th triplets), draw a long note where the roll goes and press **Alt+U** (Chop). Ramp the velocities up across the roll.';

  A.flBuild({
    id: 'melodic-trap',
    title: 'Emotional guitar trap in E minor',
    bpm: 150, key: 'E minor', scale: 'E F# G A B C D', feel: 'half-time',
    goal: 'A melodic, emotional trap beat in the style of Juice WRLD, Lil Peep-era emo rap and Nick Mira / Internet Money productions: a sad guitar arpeggio over a soft pad, bouncy trap drums and a smooth 808 that slides at the end of the loop.',
    sounds: [KICK, ['Clap', 'Sampler: a soft clap or snare', 'Softer than in dark trap; it should not cut through the guitar too much.'], HAT, OHAT, B808,
      ['Guitar', 'FLEX: an acoustic or clean electric guitar preset (or a guitar loop you record)', 'If you play guitar, record it through an audio interface instead. FL Slayer can add an electric amp sound.'],
      ['Pad', 'FLEX or Harmor: a soft, warm pad', 'Very quiet, it only fills the space behind the guitar.']],
    chords: {
      lab: 'pad', plugin: 'FLEX or Harmor soft pad', roman: 'i – VI – III – VII',
      why: 'The most-used emotional progression in melodic trap: E minor → C major → G major → D major. It moves from sad (minor) to hopeful (major), which is why so many emo rap hooks feel bittersweet. One chord per bar.',
      list: [[0, 16, 'Em', 'E3 G3 B3'], [16, 16, 'C', 'E3 G3 C4'], [32, 16, 'G', 'D3 G3 B3'], [48, 16, 'D', 'D3 F#3 A3']],
      tips: ['The pad is the background. The guitar arpeggio is the star.']
    },
    melody: {
      lab: 'guitar', plugin: 'FLEX guitar',
      why: 'An **arpeggio** plays the notes of each chord one at a time instead of together. The pattern here is root → 5th → 3rd → 5th → octave → 5th → 3rd → 5th in 8th notes, repeated on every chord. This one pattern is behind hundreds of emo rap beats.',
      notes: '0:E4:2 2:B4:2 4:G4:2 6:B4:2 8:E5:2 10:B4:2 12:G4:2 14:B4:2 16:C4:2 18:G4:2 20:E4:2 22:G4:2 24:C5:2 26:G4:2 28:E4:2 30:G4:2 32:B3:2 34:G4:2 36:D4:2 38:G4:2 40:B4:2 42:G4:2 44:D4:2 46:G4:2 48:A3:2 50:F#4:2 52:D4:2 54:F#4:2 56:A4:2 58:F#4:2 60:D4:2 62:F#4:2',
      tips: ['Make each note a bit longer than ½ beat so they ring into each other like a real guitar.', 'Use the Piano Roll **Strum** tool (Alt+S) on the pad chords for a slightly human start.', 'Add a little Fruity Reeverb 2 and Vintage Chorus on the guitar for the dreamy, lo-fi emo sound.']
    },
    drums: {
      why: 'Same half-time trap skeleton (snare on beat 3), but softer and bouncier. Hats use triplet bursts, and the kick leaves space so the guitar can breathe.',
      rows: {
        kick: 'x......x..x.....' + 'x.........x.....' + 'x......x..x.....' + 'x.........x..x..',
        clap: '........x.......',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.x.xxx.x.x.x.' + 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.x.x.xxxx',
        ohh: '.'.repeat(30) + 'x.' + '.'.repeat(32)
      },
      extra: [ROLLS, 'Melodic trap loves **triplet hats**: in bar 2 and bar 4, replace beat 4 with 16th triplets (snap 1/6 beat).']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long, clean 808 (Mono + Porta)',
      why: 'The 808 follows the chord roots (E, C, G, D) with long, smooth notes. Less distortion than dark trap: here it should feel warm, not aggressive. At the end of bar 4 it slides up to F# to lead back into E.',
      notes: '0:E2:7 7:E2:3 10:E2:6 16:C2:10 26:C2:6 32:G1:7 39:G1:3 42:G1:6 48:D2:10 58:D2:3 61:F#2:3g'
    },
    mixer: MIX_DRUMS.concat([MIX_808,
      ['Guitar', 'Fruity Parametric EQ 2: high-pass at 150 Hz. Vintage Chorus (subtle). Fruity Reeverb 2: medium room, wet 15–20%. Optional: Fruity Love Philter or Gross Beat for lo-fi wobble.'],
      ['Pad', 'Fruity Parametric EQ 2: high-pass at 250 Hz, low-pass at 6 kHz. Volume low.'],
      MIX_BUS]),
    arrangement: [
      ['1–8', 'Intro', 'Guitar alone, filtered, maybe with vinyl crackle. Tag.'],
      ['9–24', 'Hook', 'Everything.'],
      ['25–40', 'Verse 1', 'Pad out, hats simpler.'],
      ['41–56', 'Hook', 'Everything, add a second guitar an octave higher.'],
      ['57–72', 'Verse 2', 'Drop the drums for bars 57–60, then bring them back.'],
      ['73–88', 'Hook', 'Everything.'],
      ['89–96', 'Outro', 'Guitar alone, reverb up.']
    ],
    vocals: ['Melodic rappers sing in the same range as the guitar (FL: E5–E6). In verses, low-pass the guitar slightly or turn it down 2–3 dB.', 'Use a reverse cymbal or a guitar reverse (Edison: Reverse) into each hook.', 'Drop the 808 for the last beat before the hook.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −8 to −10 LUFS in the hook; melodic trap is a little less crushed than dark trap.',
    write: {
      progressions: [['i – VI – III – VII', 'Em – C – G – D', 'Bittersweet (this build)'], ['VI – VII – i', 'C – D – Em', 'Rising, hopeful'], ['i – v – VI – VII', 'Em – Bm – C – D', 'Sad, flowing'], ['i – III – VII – VI', 'Em – G – D – C', 'Nostalgic'], ['VImaj7 – i7', 'Cmaj7 – Em7', 'Dreamy, two-chord']],
      melody: ['Arpeggiate the chords: root, 5th, 3rd, 5th, octave.', 'Use guitar, piano or a soft pluck: real-instrument tones feel emotional.', 'Keep the rhythm simple (straight 8ths) so the singer can float on top.', 'Leave the top range (FL: above E6) for the vocal.'],
      bass: ['808 on the roots, long and smooth.', 'Slide only into the next chord or at the end of the loop.', 'Less distortion than dark trap.'],
      drums: ['Half-time snare on beat 3.', 'Triplet hat bursts every 2 bars.', 'Fewer kicks; let the guitar breathe.']
    },
    quiz: [{ q: 'What is an arpeggio?', a: ['A drum roll', 'The notes of a chord played one after another', 'A type of 808', 'An FL Studio plugin'], c: 1, why: 'Arpeggios break chords into single notes and are the heart of emo-rap guitar loops.' }],
    watch: [['Guitar loops for melodic trap in FL Studio', 'how to make guitar trap beat FL Studio Nick Mira'], ['Juice WRLD type beat in FL Studio', 'Juice WRLD type beat FL Studio tutorial']]
  });

  A.flBuild({
    id: 'plugg',
    title: 'Dreamy pluggnb in C major',
    bpm: 150, key: 'C major', scale: 'C D E F G A B', feel: 'half-time, floaty',
    goal: 'A soft, dreamy pluggnb beat: jazzy major-7 chords on an electric piano, a simple bright synth melody, airy drums with the classic plugg bounce and a smooth 808 that plays a little bassline instead of just roots.',
    sounds: [KICK, ['Snare', 'Sampler: a soft, snappy snare', 'Plugg snares are thin and bright, not huge.'], HAT, ['Perc (rim)', 'Sampler: a rimshot or woodblock', 'Adds the plugg bounce.'], B808,
      ['E-piano', 'FL Keys (electric piano / Rhodes mode)', 'Warm and soft. FLEX keys presets also work.'],
      ['Synth lead', 'FLEX or Sytrus: a soft square, flute or "plugg" bell lead', 'A simple, slightly glassy tone. 3xOsc with a square wave and short release works too.']],
    chords: {
      lab: 'epiano', plugin: 'FL Keys electric piano', roman: 'IVmaj7 – iii7 – ii7 – Imaj7',
      why: 'Pluggnb borrows R&B harmony: **major-7 and minor-7 chords** (four notes each) that move step by step down the scale. Fmaj7 → Em7 → Dm7 → Cmaj7 sounds soft, romantic and floaty: the opposite of dark trap.',
      list: [[0, 16, 'Fmaj7', 'F3 A3 C4 E4'], [16, 16, 'Em7', 'E3 G3 B3 D4'], [32, 16, 'Dm7', 'D3 F3 A3 C4'], [48, 16, 'Cmaj7', 'C3 E3 G3 B3']],
      tips: ['Every chord has 4 notes: root, 3rd, 5th and 7th. The 7th is what makes it sound "R&B".', 'Try stamping these with the Piano Roll **Stamp** tool: choose the root and pick maj7 or min7.']
    },
    melody: {
      lab: 'pluck', plugin: 'FLEX or Sytrus soft synth lead',
      why: 'Plugg melodies are **simple and catchy**, built from the C major pentatonic scale (C D E G A). Short notes, lots of space and a repeated motif. It should sound almost like a video-game melody.',
      notes: '0:E5:2 2:G5:2 4:A5:3 8:G5:2 10:E5:2 12:D5:4 16:E5:2 18:G5:2 20:A5:3 24:C6:2 26:A5:2 28:G5:4 32:E5:2 34:G5:2 36:A5:3 40:G5:2 42:E5:2 44:D5:4 48:C5:2 50:D5:2 52:E5:4 56:G5:2 58:E5:2 60:D5:4',
      tips: ['Put Fruity Delay 3 (1/4 time, low feedback) and a big reverb on the lead for the dreamy plugg space.']
    },
    drums: {
      why: 'Plugg drums are light and bouncy. The snare stays on beat 3, the hats are sparse 8ths, and a rimshot on off-beats creates the swing. Kicks are few.',
      rows: {
        kick: 'x.........x.....' + 'x.....x.........' + 'x.........x.....' + 'x.....x...x.....',
        snare: '........x.......',
        chh: 'x...x...x...x.x.' + 'x...x...x...x...' + 'x...x...x...x.x.' + 'x...x...x.x.xxx.',
        perc: '......x.......x.'
      },
      names: { perc: 'Rim' },
      extra: ['Pan the rim slightly left and the hats slightly right for a wide, airy kit.', 'Plugg often uses a high-pitched "squeak" or vocal chop as an extra percussion sound: try a short FLEX sound on the off-beats.']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a soft 808 (Mono + Porta)',
      why: 'In pluggnb the 808 plays a **melodic bassline**: roots plus passing notes that walk to the next chord. Notes are shorter and softer than in trap.',
      notes: '0:F2:6 6:F2:2 10:A2:4 14:G2:2 16:E2:6 22:E2:2 26:G2:4 30:E2:2 32:D2:6 38:D2:2 42:F2:4 46:D2:2 48:C2:6 54:C2:2 58:E2:3 61:G2:3g',
      tips: ['If the bassline sounds muddy, shorten the notes. Space makes plugg feel light.']
    },
    mixer: [['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'], ['Snare', 'Fruity Parametric EQ 2: high-pass at 200 Hz. Fruity Reeverb 2: small, wet 15%.'], ['Hats / Rim', 'High-pass at 300 Hz. Pan apart slightly.'],
      ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Very light saturation (Fruity Fast Dist, low). Fruity Limiter.'],
      ['E-piano', 'Fruity Parametric EQ 2: high-pass at 150 Hz, low-pass at 8 kHz. Vintage Chorus (subtle). Fruity Reeverb 2, wet 15%.'],
      ['Synth lead', 'Fruity Parametric EQ 2: high-pass at 300 Hz. Fruity Delay 3: 1/4, feedback 20%, wet 15%. Fruity Reeverb 2: large, wet 25%.'], MIX_BUS],
    arrangement: [['1–8', 'Intro', 'E-piano and lead only. Tag.'], ['9–24', 'Hook', 'Everything.'], ['25–40', 'Verse 1', 'Lead out; e-piano, drums and 808.'], ['41–56', 'Hook', 'Everything.'], ['57–72', 'Verse 2', 'Swap the lead for a different sound or an octave lower.'], ['73–88', 'Hook', 'Everything.'], ['89–96', 'Outro', 'E-piano alone.']],
    vocals: ['Pluggnb vocals are sung and melodic: keep the lead out of the verses so the singer has the space.', 'Use a short "rewind" or tape-stop (Gross Beat presets) into a hook as a transition.', 'Drop the drums for 1 bar before the last hook.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter. Softer than trap: around −9 to −11 LUFS in the hook.',
    write: {
      progressions: [['IVmaj7 – iii7 – ii7 – Imaj7', 'Fmaj7 – Em7 – Dm7 – Cmaj7', 'Soft, floating (this build)'], ['Imaj7 – vi7 – ii7 – V7', 'Cmaj7 – Am7 – Dm7 – G7', 'Classic R&B'], ['ii7 – V7 – Imaj7', 'Dm7 – G7 – Cmaj7', 'Jazzy resolution'], ['vi7 – IVmaj7', 'Am7 – Fmaj7', 'Sad but warm'], ['Imaj7 – IVmaj7', 'Cmaj7 – Fmaj7', 'Bright, two-chord']],
      melody: ['Use the major pentatonic (C D E G A in C).', 'Short phrases with a rest at the end of every bar.', 'Repeat the motif; change only the last note.', 'Bright, glassy sounds: flute, square, music box.'],
      bass: ['Play roots on beat 1, then walk to the next chord with a passing note.', 'Shorter, softer 808 notes.', 'Small slides into the next root.'],
      drums: ['Snare on beat 3.', 'Sparse 8th hats; very few rolls.', 'Off-beat rim or perc for bounce.']
    },
    quiz: [{ q: 'What makes a chord a "major 7" like Fmaj7?', a: ['It has 2 notes', 'It adds the 7th note of the scale above the root to a major triad', 'It is played very loud', 'It uses only black keys'], c: 1, why: 'Fmaj7 = F A C E: a major triad plus the major 7th (E).' }],
    watch: [['Pluggnb beat in FL Studio', 'pluggnb beat FL Studio tutorial'], ['Plugg drums and melodies', 'how to make plugg beats FL Studio']]
  });

  A.flBuild({
    id: 'rage',
    title: 'Distorted rage anthem in F# minor',
    bpm: 160, key: 'F# minor', scale: 'F# G# A B C# D E', feel: 'half-time, aggressive',
    goal: 'A loud, distorted rage beat in the style of Playboi Carti\'s "Whole Lotta Red" era and Trippie Redd\'s "Miss the Rage": a huge supersaw synth riff, a crushing distorted 808, and hard, fast drums.',
    sounds: [['Kick', 'Sampler: a hard, distorted kick', 'Rage kicks are clipped and loud.'], ['Snare', 'Sampler: a hard, bright snare', 'Layer two snares for a bigger crack.'], HAT, OHAT, B808,
      ['Supersaw lead', 'Harmor, Toxic Biohazard, PoiZone or Sawer: a supersaw', 'Use a saw wave with **unison** around 7–9 voices and wide detune. In Harmor or Sytrus start from a supersaw or "trance lead" preset.'],
      ['Pad / stabs', 'Harmor or FLEX: a bright synth pad', 'Plays the chords behind the lead.']],
    chords: {
      lab: 'stab', plugin: 'Harmor or FLEX bright pad', roman: 'i – VI – VII – v',
      why: 'Rage harmony is simple and epic: F#m → D → E → C#m. The power comes from the sound (distorted supersaws), not complex chords. One chord per bar.',
      list: [[0, 16, 'F#m', 'F#3 A3 C#4'], [16, 16, 'D', 'F#3 A3 D4'], [32, 16, 'E', 'E3 G#3 B3'], [48, 16, 'C#m', 'E3 G#3 C#4']]
    },
    melody: {
      lab: 'lead', plugin: 'Supersaw lead (Harmor / Toxic Biohazard / PoiZone)',
      why: 'The rage riff is a short, repeating phrase that jumps between octaves. The rhythm is mostly 8ths with a couple of 16ths, like a video-game boss theme. It repeats every bar with the last note changing to fit the chord.',
      notes: '0:F#5:2 2:C#6:2 4:A5:2 6:F#5:1 7:A5:1 8:C#6:2 10:F#6:2 12:E6:2 14:C#6:2 16:F#5:2 18:D6:2 20:A5:2 22:F#5:1 23:A5:1 24:D6:2 26:F#6:2 28:E6:2 30:D6:2 32:E5:2 34:B5:2 36:G#5:2 38:E5:1 39:G#5:1 40:B5:2 42:E6:2 44:D6:2 46:B5:2 48:C#5:2 50:G#5:2 52:E5:2 54:C#5:1 55:E5:1 56:G#5:2 58:C#6:2 60:B5:2 62:G#5:2',
      tips: ['Put **Fruity Blood Overdrive** or **Distructor** on the lead, then Fruity Reeverb 2. Rage leads are distorted and huge.', 'Layer the lead an octave lower on a second channel for weight.']
    },
    drums: {
      why: 'Rage drums are hard and fast: half-time snare on beat 3, rapid 16th hats, and kicks that often double up. Everything is clipped loud.',
      rows: {
        kick: 'x.....x.x.......' + 'x.....x...x.x...' + 'x.....x.x.......' + 'x.....x...x.xx..',
        snare: '........x.......',
        chh: 'xxxxxxxxxxxxxxxx' + 'x.xxx.xxx.xxx.xx' + 'xxxxxxxxxxxxxxxx' + 'x.xxx.xxxxxxxxxx',
        ohh: '..............x.' + '.'.repeat(48)
      },
      extra: [ROLLS, 'Make every second 16th hat quieter (about 60%) or the hats become a wall of noise.']
    },
    bass: {
      lab: 'reese', plugin: 'Sampler with a distorted 808 (Mono + Porta)',
      why: 'The rage 808 is **distorted hard** so it growls on every speaker. It mostly plays long roots and follows the kick, with fast slides.',
      notes: '0:F#2:6 6:F#2:2 8:F#2:6 16:D2:6 22:D2:4 26:D2:4 30:F#2:2g 32:E2:6 38:E2:2 40:E2:6 48:C#2:6 54:C#2:4 58:C#2:2 60:C#3:4g',
      tips: ['Distortion chain on the 808: Fruity Parametric EQ 2 (high-pass 30 Hz) → Distructor or Fruity Blood Overdrive → Fruity Limiter. Use parallel distortion if the low end disappears.']
    },
    mixer: [['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Soft Clipper.'], ['Snare', 'High-pass at 150 Hz. Fruity Soft Clipper.'], ['Hats', 'High-pass at 400 Hz. Keep them 6–8 dB below the snare.'],
      ['808', 'Fruity Parametric EQ 2 → Distructor or Fruity Blood Overdrive → Fruity Limiter.'],
      ['Supersaw lead', 'Fruity Parametric EQ 2: high-pass at 200 Hz. Fruity Blood Overdrive. Fruity Reeverb 2: large, wet 20%. Fruity Stereo Shaper for width.'],
      ['Pad', 'High-pass at 300 Hz, quieter than the lead.'], MIX_BUS],
    arrangement: [['1–8', 'Intro', 'Lead alone, filtered with a riser.'], ['9–24', 'Hook', 'Everything, full volume.'], ['25–40', 'Verse 1', 'Lead an octave lower or filtered; drums and 808 stay.'], ['41–56', 'Hook', 'Everything.'], ['57–72', 'Verse 2', 'Drop the drums for 4 bars, slam back in.'], ['73–88', 'Hook', 'Everything.'], ['89–96', 'Outro', 'Lead and pad, reverb tail.']],
    vocals: ['Rage vocals are shouted and energetic. Keep 2–5 kHz a little clearer on the lead (EQ dip) so the voice cuts through.', 'Use a reverse crash or white-noise riser (Harmor or a sample) into every hook.', 'A full stop of all sounds for half a beat before the drop is very effective.'],
    master: 'Fruity Soft Clipper → Fruity Limiter (ceiling −1 dB). Rage is very loud: −6 to −8 LUFS in the hook. Listen for harsh distortion and back off if it hurts.',
    write: {
      progressions: [['i – VI – VII – v', 'F#m – D – E – C#m', 'Epic (this build)'], ['i – VI – III – VII', 'F#m – D – A – E', 'Anthemic'], ['i – VII', 'F#m – E', 'Driving, two-chord'], ['i – iv – VI', 'F#m – Bm – D', 'Dark and big']],
      melody: ['Short riffs that jump an octave.', 'Supersaw sound with unison and distortion.', 'Repeat a 1-bar idea over each chord.', 'High register (FL: F#5–F#6).'],
      bass: ['Distorted 808 on roots.', 'Quick slides, often up an octave.', 'Long notes; the distortion fills the sound.'],
      drums: ['Snare on beat 3.', 'Rapid 16th hats with velocity accents.', 'Double kicks.', 'Clip the drum bus.']
    },
    quiz: [{ q: 'What gives a supersaw lead its huge, wide sound?', a: ['A single sine wave', 'Many detuned saw-wave voices (unison)', 'Reverb only', 'A low tempo'], c: 1, why: 'Unison stacks slightly detuned copies of the saw wave, spreading it wide.' }],
    watch: [['Rage beat in FL Studio', 'rage beat FL Studio tutorial'], ['Supersaw lead in Harmor or Sytrus', 'supersaw lead FL Studio stock plugins']]
  });

  A.flBuild({
    id: 'phonk',
    title: 'Drift phonk with cowbell melody in G minor',
    bpm: 130, key: 'G minor', scale: 'G A Bb C D Eb F', feel: 'driving',
    goal: 'An aggressive drift phonk beat: the famous distorted **cowbell melody**, a crushing 808, fast drums and a dark pad. Influenced by Memphis rap tapes and the modern drift phonk of producers like Kordhell and DVRST.',
    sounds: [['Kick', 'Sampler: a punchy, distorted kick', 'Hard and short.'], ['Clap', 'Sampler: a clap', 'Snappy.'], HAT, ['Cowbell', 'Sampler: an 808 cowbell sample', 'The classic TR-808 cowbell. Pitch it in Sampler so its root note is set (right-click a key → Set root note) and you can play melodies with it.'], B808,
      ['Dark pad', 'FLEX or Harmor: a dark pad', 'Quiet background.'],
      ['Vocal chop', 'Sampler or Slicex: a short vocal shout (royalty-free or your own)', 'Phonk uses Memphis-style chants. Never use an uncleared vocal in a release.']],
    chords: {
      lab: 'pad', plugin: 'FLEX or Harmor dark pad', roman: 'i – VI – iv – V',
      why: 'The pad quietly plays G minor → Eb → C minor → D major. The cowbell melody is the lead; the pad just makes it feel darker.',
      list: [[0, 16, 'Gm', 'G3 Bb3 D4'], [16, 16, 'Eb', 'G3 Bb3 Eb4'], [32, 16, 'Cm', 'G3 C4 Eb4'], [48, 16, 'D', 'F#3 A3 D4']]
    },
    melody: {
      lab: 'cowbell', plugin: 'Sampler with an 808 cowbell, pitched',
      why: 'The drift phonk cowbell plays a fast, catchy 16th-note riff. It uses a **3+3+2** rhythm feel (notes grouped in threes) and repeats every bar, with the notes following the chords.',
      notes: '0:G5:2 3:G5:2 6:Bb5:2 8:D6:2 11:C6:2 14:Bb5:2 16:G5:2 19:G5:2 22:Bb5:2 24:Eb6:2 27:D6:2 30:Bb5:2 32:G5:2 35:G5:2 38:Bb5:2 40:C6:2 43:Eb6:2 46:C6:2 48:F#5:2 51:A5:2 54:C6:2 56:D6:2 59:C6:2 62:A5:2',
      tips: ['Distort the cowbell: Fruity Blood Overdrive or Distructor, then Fruity Parametric EQ 2 to cut harsh highs around 4–6 kHz.', 'Add Fruity Reeverb 2 with a short room so it sounds like it is in a garage.']
    },
    drums: {
      why: 'Phonk drums drive forward: claps on 2 and 4 (not half-time here), kicks syncopated around them, and constant 16th hats. This energy is what makes it perfect for drift and gym videos.',
      rows: {
        kick: 'x.....x.x.....x.' + 'x.....x...x...x.' + 'x.....x.x.....x.' + 'x.....x...x.x.x.',
        clap: '....x.......x...',
        chh: 'x.xxx.xxx.xxx.xx'
      },
      extra: ['The 808 often plays on every kick in phonk; together they make one heavy, distorted hit.', 'Add the vocal chop on beat 1 of every 4th bar, and a crash at the start of each section.']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a distorted 808 (Mono + Porta)',
      why: 'The phonk 808 follows the kick and the chord roots with short, punchy notes, heavily distorted.',
      notes: '0:G1:6 6:G1:2 8:G1:6 14:G1:2 16:Eb1:6 22:Eb1:4 26:Eb1:4 30:Eb1:2 32:C2:6 38:C2:2 40:C2:6 46:C2:2 48:D2:6 54:D2:4 58:D2:2 60:D2:4g'
    },
    mixer: [['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Soft Clipper.'], ['Clap', 'High-pass at 200 Hz. Short Fruity Reeverb 2.'], ['Hats', 'High-pass at 400 Hz.'],
      ['Cowbell', 'Fruity Blood Overdrive or Distructor → Fruity Parametric EQ 2 (high-pass at 300 Hz, cut harsh 4–6 kHz) → Fruity Reeverb 2 (small room).'],
      ['808', 'Fruity Parametric EQ 2 → Distructor or Fruity Blood Overdrive (heavy) → Fruity Limiter.'],
      ['Dark pad', 'High-pass at 300 Hz, very quiet.'], ['Vocal chop', 'High-pass at 200 Hz, Fruity Delay 3 (1/4, wet 20%).'], MIX_BUS],
    arrangement: [['1–8', 'Intro', 'Cowbell alone with the pad, filtered.'], ['9–24', 'Drop', 'Everything.'], ['25–32', 'Break', 'Drums out, cowbell and pad only, low-passed.'], ['33–48', 'Drop 2', 'Everything, with the vocal chop every 4 bars.'], ['49–56', 'Outro', 'Fade out.']],
    vocals: ['Most drift phonk is instrumental or uses short chants. If a rapper is on it, keep the cowbell quieter in the verses.', 'Use a tape-stop (Gross Beat) before the second drop.', 'A riser or reverse crash into each drop.'],
    master: 'Fruity Soft Clipper → Fruity Limiter (ceiling −1 dB). Loud: around −6 to −8 LUFS.',
    write: {
      progressions: [['i – VI – iv – V', 'Gm – Eb – Cm – D', 'Dark (this build)'], ['i – bII', 'Gm – Ab', 'Evil (Phrygian)'], ['i – iv', 'Gm – Cm', 'Minimal'], ['i – VI – VII', 'Gm – Eb – F', 'Driving']],
      melody: ['Cowbell riff in 16ths with a 3+3+2 feel.', 'Notes follow the chord roots and 3rds.', 'Distortion and a little room reverb.'],
      bass: ['Distorted 808 on every kick.', 'Short notes, punchy.'],
      drums: ['Claps on 2 and 4.', 'Syncopated kicks.', 'Constant 16th hats.']
    },
    quiz: [{ q: 'What instrument usually plays the lead melody in drift phonk?', a: ['A flute', 'A distorted 808 cowbell', 'A grand piano', 'A choir'], c: 1, why: 'The pitched, distorted TR-808 cowbell is the signature sound of drift phonk.' }],
    watch: [['Drift phonk in FL Studio', 'drift phonk FL Studio tutorial cowbell'], ['Phonk cowbell melody', 'how to make phonk cowbell melody']]
  });
})();
