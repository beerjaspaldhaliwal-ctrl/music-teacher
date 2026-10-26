/* FL Studio builds for Semester 11: Drill & Global Hip-Hop. */
(function () {
  const A = window.ACADEMY;
  const BUS = ['Drums bus', 'Fruity Soft Clipper or Fruity Limiter, 1–3 dB of gain reduction.'];
  const B808 = ['808', 'Sampler: a long 808 with a clean tail', 'Tune it, then channel settings → Miscellaneous functions → Polyphony: Mono + Porta, Slide around 30%.'];
  const MIX808 = ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Fast Dist or Fruity Blood Overdrive for grit. Fruity Limiter last.'];

  A.flBuild({
    id: 'drill',
    title: 'UK drill with sliding 808s in F minor',
    bpm: 142, key: 'F minor', scale: 'F G Ab Bb C Db Eb (E natural for the C chord)', feel: 'half-time, syncopated snares',
    goal: 'A dark UK / Brooklyn drill beat in the style of producers like M1OnTheBeat, AXL Beats and 808Melo: an eerie piano and string melody, the drill drum pattern with off-beat snares and skippy hats, and a **sliding 808** that moves like a second melody. This is the most important drill skill to learn.',
    sounds: [
      ['Kick', 'Sampler: a short kick', 'In drill the 808 does most of the low end, so the kick is only used on a few hits.'],
      ['Snare', 'Sampler: a sharp, bright drill snare', 'Layer a rim or clap for extra snap.'],
      ['Hi-hat', 'Sampler: a short, tight hat', 'Drill hats are short and ticky.'],
      ['Perc', 'Sampler: a rim, woodblock or "tick" perc', 'Fills the gaps in the groove.'],
      B808,
      ['Piano', 'FL Keys (grand piano)', 'Dark and simple.'],
      ['Strings', 'FLEX strings or a dark string pad (Harmor)', 'Eerie, sustained or pizzicato.']
    ],
    chords: {
      lab: 'strings', plugin: 'FLEX strings', roman: 'i – VI – iv – V',
      why: 'Drill harmony is dark and cinematic: F minor → Db major → Bb minor → C major. The C major chord (with E natural, from F harmonic minor) adds the menacing tension you hear in so many drill beats.',
      list: [[0, 16, 'Fm', 'F3 Ab3 C4'], [16, 16, 'Db', 'F3 Ab3 Db4'], [32, 16, 'Bbm', 'F3 Bb3 Db4'], [48, 16, 'C', 'E3 G3 C4']]
    },
    melody: {
      lab: 'piano', plugin: 'FL Keys piano',
      why: 'An eerie piano ostinato (a repeating pattern) in 8th notes. The E natural in bar 4 is the harmonic minor "horror" note. Drill melodies are dark, repetitive and leave room for the 808 to move.',
      notes: '0:C5:2 2:F5:2 4:Ab5:2 6:G5:2 8:F5:2 10:C5:2 12:Ab4:2 14:C5:2 16:Db5:2 18:F5:2 20:Ab5:2 22:G5:2 24:F5:2 26:Db5:2 28:Ab4:2 30:Db5:2 32:Db5:2 34:F5:2 36:Bb5:2 38:Ab5:2 40:F5:2 42:Db5:2 44:Bb4:2 46:Db5:2 48:C5:2 50:E5:2 52:G5:2 54:F5:2 56:E5:2 58:C5:2 60:G4:2 62:Bb4:2'
    },
    drums: {
      why: 'The drill pattern: the main snare on **beat 3** (step 9 of each bar), plus an extra snare **one 16th before beat 4** in bar 1 and two late snares in bar 2. The hats play a skippy 3-3-2 pattern. Kicks are rare: just the first beat of each 2 bars, because the 808 is the real bass drum.',
      rows: {
        kick: 'x...............' + 'x.............x.',
        snare: '........x.....x.' + '........x..x....',
        chh: 'x..x..x.x..x..x.' + 'x..x..x.x..x.xx.',
        perc: '..x.......x.....'
      },
      extra: [
        'Drill hats often have **triplet rolls** (snap 1/6 beat, Alt+U) and pitched-up final notes. Put one on the last beat of every 2nd bar.',
        'Change the snare position slightly every 4 bars (move one snare a 16th earlier or later) to keep the pattern unpredictable.',
        'Keep the **Channel Rack swing at 0**: drill is straight; the syncopation does the bouncing.'
      ]
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'The drill 808 is a **melody**, not just a bass note. It slides between notes almost every time: up a 4th or 5th, down to the root, octave jumps. Notice how it plays its own rhythm instead of following the kick.',
      notes: '0:F1:6 6:C2:4g 10:F1:6 16:Db2:6 22:Ab1:4g 26:Db2:4 30:F2:2g 32:Bb1:6 38:F2:4g 42:Bb1:6 48:C2:4 52:C2:2 54:G2:4g 58:E2:3g 61:C2:3g',
      tips: ['If every note glides (Porta), shorten notes that should not glide so they do not overlap, or use slide notes only where the table says.', 'Drill 808s are often tuned up high (FL: C3–G3) on slides; let them scream on the last slide of the loop.', 'Keep the slide time short (Slide knob 20–35%) for the punchy UK sound; longer for Chicago.']
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Snare', 'Fruity Parametric EQ 2: high-pass at 200 Hz, boost around 3–5 kHz for snap. Fruity Reeverb 2: small, wet 10%.'],
      ['Hats / Perc', 'High-pass at 400 Hz. Pan the perc slightly left.'],
      MIX808,
      ['Piano', 'High-pass at 200 Hz. Fruity Reeverb 2: hall, wet 20%. Fruity Delay 3, 1/8, wet 10%.'],
      ['Strings', 'High-pass at 200 Hz, low-pass at 8 kHz. Fruity Stereo Shaper for width.'],
      BUS
    ],
    arrangement: [['1–8', 'Intro', 'Piano and strings, filtered. Tag.'], ['9–24', 'Hook', 'Everything.'], ['25–40', 'Verse 1', 'Strings out; 808, drums and piano. Change the snare pattern every 4 bars.'], ['41–56', 'Hook', 'Everything.'], ['57–72', 'Verse 2', 'Drop the drums and keep the 808 slides alone for 4 bars, then slam back in.'], ['73–88', 'Hook', 'Everything.'], ['89–96', 'Outro', 'Piano and strings.']],
    vocals: ['Drill vocals are aggressive and rhythmic and ride the 808 slides. Keep the piano out of the 2–5 kHz area (EQ dip) or turn it down in verses.', 'Mute the 808 for a half-beat before a big slide so the slide hits harder.', 'A reverse piano or a short riser into each hook.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −7 to −9 LUFS in the hook.',
    write: {
      progressions: [['i – VI – iv – V', 'Fm – Db – Bbm – C', 'Dark and cinematic (this build)'], ['i – VI', 'Fm – Db', 'Classic two-chord drill'], ['i – bII', 'Fm – Gb', 'Evil Phrygian'], ['i – iv – v', 'Fm – Bbm – Cm', 'Moody, natural minor'], ['i – VI – VII', 'Fm – Db – Eb', 'Epic']],
      melody: ['Repeating 8th-note piano or string ostinatos.', 'Use harmonic minor (E natural in F minor) for menace.', 'Pizzicato strings, dark piano, choirs, bells.', 'Leave space for the 808 melody.'],
      bass: ['Slide on almost every note change.', 'Jump 4ths, 5ths and octaves.', 'The 808 has its own rhythm, independent of the kick.', 'End the loop with a high slide.'],
      drums: ['Main snare on beat 3, extra snares off-grid in bar 1 and bar 2.', 'Skippy 3-3-2 hats with triplet rolls.', 'Very few kicks.', 'Change something every 4 bars.']
    },
    quiz: [{ q: 'What is special about the 808 in drill compared with classic trap?', a: ['It is not used', 'It slides between notes constantly and acts like a melody', 'It only plays one note', 'It is played by a real bassist'], c: 1, why: 'Drill 808s glide on almost every note and move independently of the kick.' }],
    watch: [['UK drill beat in FL Studio', 'UK drill beat FL Studio tutorial'], ['Drill 808 slides in FL Studio', 'drill 808 glide FL Studio tutorial']]
  });

  A.flBuild({
    id: 'grime',
    title: 'Eski-style grime in D minor',
    bpm: 140, key: 'D minor (Phrygian)', scale: 'D Eb F G A Bb C (Phrygian: minor with a flat 2nd, Eb)', feel: 'half-time and 2-step switch',
    goal: 'A raw East London grime beat in the tradition of Wiley\'s "Eskibeat", Dizzee Rascal and Skepta: icy square-wave stabs, a gritty sub bass, sparse half-time drums with metallic percussion, and lots of space for MCs to spit.',
    sounds: [
      ['Kick', 'Sampler: a hard, dry kick', 'Short.'],
      ['Snare', 'Sampler: a sharp, cold snare', 'Or a gunshot-style snare (a classic grime sound).'],
      ['Hi-hat', 'Sampler: a closed hat', 'Straight 8ths.'],
      ['Perc', 'Sampler: a metallic perc (anvil, glass, rim)', 'Grime loves metallic sounds.'],
      ['Square stabs', '3xOsc: square wave, short release', 'Oscillator 1 square, others off, release very short. The icy "eski" sound.'],
      ['Sub bass', '3xOsc: sine (with a little square layered)', 'A clean sub with a bit of grit. Mono on.']
    ],
    chords: {
      lab: 'square', plugin: '3xOsc square stabs', roman: 'i – bII',
      why: 'Grime uses very little harmony: short square-wave stabs on D minor and Eb major (the Phrygian flat II). The cold, video-game tone comes from the square wave.',
      list: [[0, 1, 'Dm', 'D4 F4 A4'], [3, 1, 'Dm', 'D4 F4 A4'], [6, 2, 'Dm', 'D4 F4 A4'], [16, 1, 'Dm', 'D4 F4 A4'], [19, 1, 'Dm', 'D4 F4 A4'], [22, 2, 'Dm', 'D4 F4 A4'], [32, 1, 'Eb', 'Eb4 G4 Bb4'], [35, 1, 'Eb', 'Eb4 G4 Bb4'], [38, 2, 'Eb', 'Eb4 G4 Bb4'], [48, 1, 'Dm', 'D4 F4 A4'], [51, 1, 'Dm', 'D4 F4 A4'], [54, 2, 'Dm', 'D4 F4 A4']]
    },
    melody: {
      lab: 'square', plugin: '3xOsc square lead (higher octave)',
      why: 'A short, icy riff answering the stabs in the second half of each bar. It uses D minor with the Eb for the Phrygian, "cold" feel.',
      notes: '0:F5:1 3:Eb5:1 6:D5:2 8:F5:2 10:A5:2 12:G5:2 14:F5:2 40:D6:2 42:C6:2 44:A5:2 46:G5:2 56:F5:2 58:Eb5:2 60:D5:4'
    },
    drums: {
      why: 'Grime drums at 140 BPM: half-time snare on beat 3, few kicks, straight 8th hats and metallic percussion in odd places. The space is for the MC.',
      rows: {
        kick: 'x.........x.....' + 'x.......x.......',
        snare: '........x.......',
        chh: 'x.x.x.x.x.x.x.x.',
        perc: '...x......x..x..'
      },
      extra: ['For variation, switch to a 2-step garage pattern for 8 bars (kick on 1 and the "and" of 2, snare on 2 and 4, skippy hats).']
    },
    bass: {
      lab: 'square', plugin: '3xOsc sine + a little square (Mono)', is808: false, title: 'The sub bass',
      why: 'A gritty sub that plays short, syncopated notes on D, with a jump to Eb in bar 3. The square layer lets it cut through on small speakers.',
      notes: '0:D2:4 6:D2:2 10:D2:4 16:D2:4 22:F2:2 26:D2:4 32:Eb2:4 38:Eb2:2 42:Eb2:4 48:D2:4 54:C2:2 58:A1:4'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Snare', 'High-pass at 200 Hz. Fruity Reeverb 2: short, wet 10%.'],
      ['Hats / Perc', 'High-pass at 400 Hz. Pan the perc.'],
      ['Square stabs / lead', 'High-pass at 250 Hz. Fruity Delay 3: 1/8, wet 10%. No big reverb: grime is dry and cold.'],
      ['Sub bass', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Fast Dist, light. Fruity Limiter.'],
      BUS
    ],
    arrangement: [['1–8', 'Intro', 'Stabs alone, then drums.'], ['9–24', 'Verse 1 (16 bars)', 'Drums, sub, stabs.'], ['25–32', 'Hook', 'Add the lead riff.'], ['33–48', 'Verse 2', 'Switch to the 2-step pattern.'], ['49–56', 'Hook', 'Everything.'], ['57–64', 'Outro / reload', 'Drop to stabs only (MCs and DJs love a "reload" moment).']],
    vocals: ['Grime MCs spit fast, often in 16-bar sections: keep verses sparse.', 'Leave clean 8-bar blocks so DJs can mix and MCs can clash.', 'Dry mix: very little reverb.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −8 to −9 LUFS.',
    write: {
      progressions: [['i – bII', 'Dm – Eb', 'Cold Phrygian (this build)'], ['i (one chord)', 'Dm stabs', 'Eski minimal'], ['i – iv', 'Dm – Gm', 'Darker'], ['i – VI – bII', 'Dm – Bb – Eb', 'Cinematic']],
      melody: ['Square waves and video-game tones.', 'Short riffs answering stabs.', 'Phrygian flat 2 for the cold sound.'],
      bass: ['Gritty sub with syncopated notes.', 'Sine plus square.'],
      drums: ['Half-time snare on 3 at 140 BPM.', 'Metallic percussion.', '2-step switch-ups.', 'Space for MCs.']
    },
    quiz: [{ q: 'Which 3xOsc waveform gives the icy "eskibeat" grime stab sound?', a: ['Sine', 'Square', 'Noise', 'Triangle only'], c: 1, why: 'Square waves give grime its cold, video-game character.' }],
    watch: [['Grime beat in FL Studio', 'grime beat FL Studio tutorial'], ['Eskibeat square waves', 'eskibeat grime square wave tutorial']]
  });

  A.flBuild({
    id: 'desi',
    title: 'Punjabi drill with tumbi and flute in D minor (Kafi feel)',
    bpm: 142, key: 'D minor (Kafi thaat feel)', scale: 'D E F G A B C (Kafi = Dorian: minor with a natural 6th)', feel: 'drill half-time with dhol accents',
    goal: 'A Punjabi drill beat in the style that blew up with Sidhu Moose Wala and producers in the UK-Punjabi scene: UK drill drums and sliding 808s, a tumbi riff, a bansuri-style flute melody and dhol accents.',
    sounds: [
      ['Kick', 'Sampler: a short kick', 'Few hits.'],
      ['Snare', 'Sampler: a sharp drill snare', 'Off-beat placement.'],
      ['Hi-hat', 'Sampler: a short hat', 'Skippy 3-3-2.'],
      ['Dhol', 'Sampler: dhol hits (royalty-free) or FPC with a dhol kit', 'Bass "dagga" and treble "tilli" hits. If you have none, use a low tom and a high slap.'],
      B808,
      ['Tumbi', 'Sakura (plucked string), or FLEX pluck', 'Sakura is a physical-modelling string instrument; a short, bright pluck with high tone sounds close to a tumbi. A real tumbi sample is best.'],
      ['Flute', 'FLEX flute (bansuri-style)', 'Breathy and expressive. Add pitch bends.']
    ],
    chords: {
      lab: 'pad', plugin: 'FLEX dark pad or strings (quiet)', roman: 'i – IV (Kafi) – i – bVII',
      why: 'Punjabi music is melodic rather than chord-based, so the pad stays simple: D minor → G major (the Kafi / Dorian natural 6th, B) → D minor → C major. Keep it quiet; the tumbi and flute are the stars.',
      list: [[0, 16, 'Dm', 'D4 F4 A4'], [16, 16, 'G', 'D4 G4 B4'], [32, 16, 'Dm', 'D4 F4 A4'], [48, 16, 'C', 'C4 E4 G4']]
    },
    melody: {
      lab: 'tumbi', plugin: 'Sakura or FLEX pluck (tumbi)',
      why: 'The tumbi plays a fast, bouncing riff that repeats on the root (D), like the classic bhangra tumbi hooks. Short notes, high register.',
      notes: '0:D5:1 2:D5:1 3:F5:1 4:D5:1 6:A4:1 8:D5:1 10:C5:1 11:D5:1 12:A4:2 16:D5:1 18:D5:1 19:F5:1 20:G5:1 22:F5:1 24:D5:1 26:C5:1 27:A4:1 28:B4:2 32:D5:1 34:D5:1 35:F5:1 36:D5:1 38:A4:1 40:D5:1 42:C5:1 43:D5:1 44:A4:2 48:C5:1 50:C5:1 51:E5:1 52:G5:1 54:E5:1 56:C5:1 58:A4:1 59:G4:1 60:A4:2'
    },
    counter: {
      plugin: 'FLEX flute (bansuri-style)',
      why: 'The flute plays long, emotional notes in the hook, in the gaps of the tumbi. Use pitch bends (draw them in the Piano Roll\'s pitch lane, or slide notes) between notes for an Indian "meend" glide.',
      notes: '0:A5:8 8:F5:4 12:G5:4 16:A5:6 22:B5:2 24:A5:8 32:F5:6 38:E5:2 40:D5:8 48:E5:4 52:G5:4 56:F5:4 60:E5:4'
    },
    drums: {
      why: 'UK drill drums (snare on beat 3 plus off-beat snares, skippy hats, few kicks) with a dhol pattern on top. The dhol gives it the Punjabi bounce.',
      rows: {
        kick: 'x...............' + 'x.............x.',
        snare: '........x.....x.' + '........x..x....',
        chh: 'x..x..x.x..x..x.',
        perc: 'x.....x.x.....x.'
      },
      names: { perc: 'Dhol' },
      extra: ['Play the dhol pattern with two sounds: the low "dagga" on the first and fourth hit of each bar and the high "tilli" on the others.', 'Add a dhol roll (fast 16ths) on the last beat before each hook.']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'A drill-style sliding 808 on the roots D, G and C with jumps to the 5th.',
      notes: '0:D2:6 6:A1:4g 10:D2:6 16:G1:6 22:D2:4g 26:G1:4 30:B1:2g 32:D2:6 38:A2:4g 42:D2:6 48:C2:6 54:G1:4g 58:C2:3 61:D2:3g'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Snare', 'High-pass at 200 Hz, boost 3–5 kHz.'],
      ['Hats', 'High-pass at 400 Hz.'],
      ['Dhol', 'High-pass at 60 Hz (keep the dagga\'s body). Fruity Compressor, fast. Pan the tilli slightly.'],
      MIX808,
      ['Tumbi', 'High-pass at 400 Hz. Fruity Delay 3: 1/8, wet 10%. Fruity Reeverb 2, small.'],
      ['Flute', 'High-pass at 300 Hz. Fruity Reeverb 2: hall, wet 25%.'],
      ['Pad', 'High-pass at 250 Hz, quiet.'],
      BUS
    ],
    arrangement: [['1–8', 'Intro', 'Flute alone, then tumbi. Tag.'], ['9–24', 'Hook', 'Everything; flute plays.'], ['25–40', 'Verse 1', 'Tumbi, drums, 808. Flute out.'], ['41–56', 'Hook', 'Everything.'], ['57–72', 'Verse 2', 'Dhol solo for bars 57–60, then everything.'], ['73–88', 'Hook', 'Everything.'], ['89–96', 'Outro', 'Flute and pad.']],
    vocals: ['Punjabi vocals are melodic and powerful: keep the tumbi quieter under the vocal (2–3 dB).', 'A dhol roll and a short silence before the hook.', 'Use ad-libs like "balle balle" or chants (record your own) as percussion.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −7 to −9 LUFS.',
    write: {
      progressions: [['i – IV – i – bVII', 'Dm – G – Dm – C', 'Kafi / Dorian (this build)'], ['i – bVII', 'Dm – C', 'Folk drone'], ['i – VI – VII', 'Dm – Bb – C', 'Epic Punjabi drill'], ['i (drone)', 'D drone with melody', 'Traditional']],
      melody: ['Tumbi riffs: fast, repeated notes around the root.', 'Flute: long notes with glides (meend).', 'Use Kafi (Dorian) or Bhairavi (Phrygian) colours.', 'Learn a few raag phrases from your favourite songs.'],
      bass: ['Drill sliding 808 on the roots.', 'Glides to the 5th and back.'],
      drums: ['UK drill drums.', 'Dhol pattern on top (dagga + tilli).', 'Dhol roll into hooks.']
    },
    quiz: [{ q: 'Which FL Studio instrument can imitate a plucked tumbi when you have no sample?', a: ['Sakura (plucked string modelling) or a FLEX pluck', 'Fruity Limiter', 'Edison', 'Gross Beat'], c: 0, why: 'Sakura models plucked strings, which gets close to a tumbi\'s bright, short tone.' }],
    watch: [['Punjabi drill beat in FL Studio', 'Punjabi drill beat FL Studio tutorial'], ['Tumbi and dhol programming', 'how to make bhangra tumbi dhol FL Studio']]
  });

  A.flBuild({
    id: 'latin-trap',
    title: 'Latin trap with a dembow switch in A minor',
    bpm: 140, key: 'A minor', scale: 'A B C D E F G (G# for the E chord)', feel: 'trap half-time with Latin percussion',
    goal: 'A Latin trap beat in the style of Bad Bunny, Anuel AA and producers like Tainy: a nylon guitar melody over a minor progression, trap drums with Latin percussion, a heavy 808 and a reggaeton dembow section for the hook.',
    sounds: [
      ['Kick', 'Sampler: a punchy kick', 'Short and tight.'],
      ['Clap', 'Sampler: a snappy clap', 'Bright.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Crisp.'],
      ['Perc', 'Sampler: congas, bongos or a timbale rim', 'Latin percussion.'],
      ['808', 'Sampler: a long 808', 'Mono + Porta.'],
      ['Nylon guitar', 'FLEX nylon / Spanish guitar preset', 'The Latin colour. Sakura can also do plucked guitar.'],
      ['Pad', 'FLEX or Harmor: a soft pad', 'Quiet.']
    ],
    chords: {
      lab: 'pad', plugin: 'FLEX pad', roman: 'i – VI – III – V',
      why: 'A minor → F → C → E major: dark and romantic. The E major (G#) gives it a Spanish, flamenco flavour.',
      list: [[0, 16, 'Am', 'A3 C4 E4'], [16, 16, 'F', 'A3 C4 F4'], [32, 16, 'C', 'G3 C4 E4'], [48, 16, 'E', 'G#3 B3 E4']]
    },
    melody: {
      lab: 'guitar', plugin: 'FLEX nylon guitar',
      why: 'A Spanish-style guitar line with 16th-note pickups and the G# leading tone in bar 4, which is the flamenco sound.',
      notes: '0:E5:3 3:D5:1 4:C5:2 6:B4:2 8:C5:2 10:A4:4 14:B4:2 16:C5:3 19:D5:1 20:C5:2 22:A4:2 24:F5:4 28:E5:4 32:E5:3 35:F5:1 36:E5:2 38:D5:2 40:C5:2 42:G4:4 46:C5:2 48:B4:3 51:C5:1 52:B4:2 54:G#4:2 56:E5:4 60:D5:2 62:B4:2'
    },
    drums: {
      why: 'Trap drums (clap on beat 3) with a conga/bongo pattern on top that gives the Latin swing.',
      rows: {
        kick: 'x......x..x.....' + 'x......x..x..x..',
        clap: '........x.......',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.x.xxx.x.',
        perc: '..x..x....x..x..'
      },
      names: { perc: 'Conga' }
    },
    extra: [{
      after: 'drums', title: 'The dembow switch',
      body: 'Many Latin trap songs switch to a **reggaeton dembow** for the hook. Make a new drum pattern at the same tempo, but think of it in double time (it feels like 70 BPM dembow… or set a section to around 94 BPM if you make a separate reggaeton beat).\n\n```\n          1   2   3   4\nKick      x... x... x... x...\nSnare     ...x ..x. ...x ..x.\nHi-hat    x.x. x.x. x.x. x.x.\n```\n\nThe snare rhythm (3 + 3 + 2) is the dembow "boom-ch-boom-chick". Try using it in the hook while the verses stay trap.'
    }],
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'The 808 plays the chord roots with the kick and slides up to the 5th at the end of bars 2 and 4.',
      notes: '0:A1:7 7:A1:3 10:A1:6 16:F1:7 23:F1:3 26:F1:4 30:C2:2g 32:C2:7 39:C2:3 42:C2:6 48:E1:7 55:E1:3 58:E1:3 61:B1:3g'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Clap', 'High-pass at 200 Hz. Fruity Reeverb 2: small, wet 10%.'],
      ['Hats / Perc', 'High-pass at 300 Hz. Pan the congas left and right (two different hits).'],
      MIX808,
      ['Nylon guitar', 'High-pass at 150 Hz. Fruity Reeverb 2: room, wet 15%. A gentle cut around 300 Hz.'],
      ['Pad', 'High-pass at 250 Hz, low-pass at 7 kHz.'],
      BUS
    ],
    arrangement: [['1–8', 'Intro', 'Guitar alone. Tag.'], ['9–24', 'Hook', 'Dembow switch with everything.'], ['25–40', 'Verse 1', 'Trap drums, 808, guitar.'], ['41–56', 'Hook', 'Dembow switch.'], ['57–72', 'Verse 2', 'Guitar filtered for 4 bars.'], ['73–88', 'Hook', 'Dembow.'], ['89–96', 'Outro', 'Guitar alone.']],
    vocals: ['Latin trap vocals are often sung and auto-tuned (try Pitcher set to A minor).', 'A riser or a percussion fill into the dembow hook.', 'Keep the guitar quieter under the vocal.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −7 to −9 LUFS.',
    write: {
      progressions: [['i – VI – III – V', 'Am – F – C – E', 'Romantic and dark (this build)'], ['i – VII – VI – V', 'Am – G – F – E', 'Flamenco (Andalusian cadence)'], ['i – VI – III – VII', 'Am – F – C – G', 'Pop reggaeton'], ['i – iv', 'Am – Dm', 'Dark trap']],
      melody: ['Nylon guitar, piano or a soft synth lead.', 'Use the harmonic minor G# for the Spanish sound.', '16th-note pickups into long notes.'],
      bass: ['808 on roots, slides to the 5th.', 'In dembow sections, the 808 follows the kick on every beat.'],
      drums: ['Trap verses, dembow hooks.', 'Congas, bongos, timbales.', 'Clap on beat 3 in trap sections.']
    },
    quiz: [{ q: 'What snare rhythm defines the reggaeton dembow?', a: ['Snare on every 16th', 'A 3+3+2 "boom-ch-boom-chick" pattern', 'Snare on beat 3 only', 'No snare'], c: 1, why: 'The dembow snare falls on the 4th and 7th 16ths of each half bar: a 3+3+2 feel.' }],
    watch: [['Latin trap beat in FL Studio', 'Latin trap beat FL Studio tutorial'], ['Reggaeton dembow in FL Studio', 'reggaeton dembow FL Studio tutorial']]
  });

  A.flBuild({
    id: 'jersey-club',
    title: 'Jersey club with a vocal chop and bed squeak in G minor',
    bpm: 140, key: 'G minor', scale: 'G A Bb C D Eb F', feel: 'driving, kick runs',
    goal: 'A Jersey club beat in the style that crossed into rap with Lil Uzi Vert and Ice Spice remixes: the signature five-kick run, a chopped vocal, the famous "bed squeak" sound, claps and a bouncy sub, built on a simple minor loop.',
    sounds: [
      ['Kick', 'Sampler: a punchy kick', 'The kick pattern is the genre.'],
      ['Clap', 'Sampler: a clap', 'On 2 and 4.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Off-beats.'],
      ['Squeak', 'Sampler: a bed-squeak or toy-squeak sample (royalty-free)', 'A Jersey club signature. Any short, funny squeak works.'],
      ['Vocal chop', 'Slicex with a short vocal phrase you recorded', 'Chopped into syllables and played rhythmically.'],
      ['Keys', 'FLEX: a soft synth or piano preset', 'The loop.'],
      ['Sub', '3xOsc sine or a short 808', 'Mono.']
    ],
    chords: {
      lab: 'pad', plugin: 'FLEX soft synth', roman: 'i – VI – III – VII',
      why: 'A simple, catchy minor loop: G minor → Eb → Bb → F. Jersey club often flips R&B or pop melodies, so a familiar-sounding loop is perfect.',
      list: [[0, 16, 'Gm', 'G3 Bb3 D4'], [16, 16, 'Eb', 'G3 Bb3 Eb4'], [32, 16, 'Bb', 'F3 Bb3 D4'], [48, 16, 'F', 'F3 A3 C4']]
    },
    melody: {
      lab: 'vox', plugin: 'Vocal chop in Slicex (or FLEX vocal preset to practise)',
      why: 'A chopped vocal playing a rhythmic, stuttering pattern. Here the "chops" are written as notes so you can practise with a FLEX vocal preset; later replace them with slices of your own recorded vocal.',
      notes: '0:D5:1 2:D5:1 3:Bb4:1 6:G4:2 8:D5:1 10:D5:1 11:C5:1 14:Bb4:2 16:Eb5:1 18:Eb5:1 19:D5:1 22:Bb4:2 24:G4:1 26:Bb4:1 27:C5:1 30:D5:2 32:D5:1 34:D5:1 35:Bb4:1 38:F4:2 40:D5:1 42:D5:1 43:C5:1 46:Bb4:2 48:C5:1 50:C5:1 51:A4:1 54:F4:2 56:A4:1 58:C5:1 59:D5:1 62:C5:2'
    },
    drums: {
      why: 'The **Jersey club kick**: a run of kicks with the famous 1–2–3, 1–2 feel at the end of each bar (written here on the 16th grid; the real thing often uses triplet timing). Claps on 2 and 4 and off-beat hats. The squeak answers the claps.',
      rows: {
        kick: 'x...x...x..x.x.x',
        clap: '....x.......x...',
        chh: '..x...x...x...x.',
        perc: '......x.......x.'
      },
      names: { perc: 'Squeak' },
      extra: ['For the authentic swing, put the last three kicks of the bar on **triplet** positions: set snap to **1/3 beat** in the Piano Roll and place kicks on the 2nd and 3rd triplet of beat 3 and on beat 4.', 'Every 4 bars, roll the kicks or chop the vocal faster (32nds) as a build.']
    },
    bass: {
      lab: 'sub', plugin: '3xOsc sine or short 808 (Mono)',
      why: 'A bouncy sub on the roots that follows the kick run.',
      notes: '0:G1:3 4:G1:3 8:G1:2 11:G1:2 13:D2:2 16:Eb2:3 20:Eb2:3 24:Eb2:2 27:Eb2:2 29:Bb1:2 32:Bb1:3 36:Bb1:3 40:Bb1:2 43:Bb1:2 45:F1:2 48:F1:3 52:F1:3 56:F1:2 59:F1:2 61:A1:2'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Soft Clipper.'],
      ['Clap', 'High-pass at 200 Hz. Fruity Reeverb 2: short, wet 10%.'],
      ['Hats', 'High-pass at 400 Hz.'],
      ['Squeak', 'High-pass at 400 Hz. Pan slightly.'],
      ['Vocal chop', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 15%. Fruity Delay 3, 1/8, wet 10%.'],
      ['Keys', 'High-pass at 200 Hz.'],
      ['Sub', 'High-pass at 30 Hz. Fruity Limiter.'],
      BUS
    ],
    arrangement: [['1–8', 'Intro', 'Keys and vocal chop.'], ['9–24', 'Drop', 'Everything.'], ['25–32', 'Break', 'Kicks out, chop and keys; build with a kick roll.'], ['33–48', 'Drop 2', 'Everything, vocal chops faster.'], ['49–56', 'Outro', 'Keys and squeak.']],
    vocals: ['For club rap, keep the vocal chop quieter in verses or remove it.', 'Kick rolls (16ths, then 32nds) build into each drop.', 'Jersey club tracks are short: 2–2:30 is normal.'],
    master: 'Fruity Soft Clipper → Fruity Limiter (ceiling −1 dB). Loud: around −7 LUFS.',
    write: {
      progressions: [['i – VI – III – VII', 'Gm – Eb – Bb – F', 'Catchy (this build)'], ['i – VI', 'Gm – Eb', 'Simple'], ['Flip an R&B loop', 'Re-play a well-known progression', 'Remix style']],
      melody: ['Chopped vocals in stuttering rhythms.', 'Flip familiar pop or R&B melodies (cleared, or re-recorded).', 'Keep it bouncy and short.'],
      bass: ['Sub follows the kick run.', 'Short notes.'],
      drums: ['The five-kick run.', 'Claps on 2 and 4.', 'Squeaks and chants.', 'Triplet-timed kicks for swing.']
    },
    quiz: [{ q: 'Which part defines a Jersey club beat?', a: ['A slow boom bap snare', 'The rapid kick run (often in triplet timing)', 'A jazz walking bass', 'No drums'], c: 1, why: 'The signature kick pattern is what makes Jersey club instantly recognisable.' }],
    watch: [['Jersey club beat in FL Studio', 'Jersey club beat FL Studio tutorial'], ['Jersey club kick pattern', 'Jersey club kick pattern triplet']]
  });
})();
