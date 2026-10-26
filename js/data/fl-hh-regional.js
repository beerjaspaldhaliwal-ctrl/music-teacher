/* FL Studio builds for Semester 9: Regional Sounds (West Coast & the South). */
(function () {
  const A = window.ACADEMY;
  const BUS = ['Drums bus', 'Fruity Compressor (2–3 dB of gain reduction) or Fruity Soft Clipper.'];

  A.flBuild({
    id: 'g-funk',
    title: 'Laid-back G-funk in D minor (Dorian)',
    bpm: 94, key: 'D minor (Dorian)', scale: 'D E F G A B C (Dorian: minor with a natural 6th, B)', feel: 'laid-back, light swing', labSwing: 54,
    swing: 'a little (around 15–25%)',
    goal: 'A smooth West Coast G-funk beat in the style of Dr. Dre\'s "The Chronic" era, Warren G and DJ Quik: a high, whiny portamento synth lead, a rubbery Moog-style bassline, Rhodes chords, and relaxed drums with claps and a shaker.',
    sounds: [
      ['Kick', 'Sampler: a round, warm kick', 'Not too clicky.'],
      ['Snare + Clap', 'Sampler: a snare layered with a clap', 'The West Coast backbeat.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Light 16ths.'],
      ['Shaker', 'Sampler: a shaker', 'Adds the smooth groove.'],
      ['Rhodes', 'FL Keys (Rhodes / electric piano)', 'Soft funk chords.'],
      ['Whistle lead', '3xOsc: one sine wave, Mono + Porta', 'Oscillator 1 sine, oscillators 2 and 3 off. Channel settings → Miscellaneous functions → Mono + Porta, Slide around 40%. Add vibrato with the channel\'s LFO on pitch or with Vintage Chorus. Sytrus "sine lead" presets also work.'],
      ['Funk bass', 'Transistor Bass, or 3xOsc saw + low-pass', 'A fat, rubbery analog bass. In 3xOsc: saw wave, then a low-pass filter (Fruity Love Philter or Fruity Filter) around 600–900 Hz.']
    ],
    chords: {
      lab: 'epiano', plugin: 'FL Keys Rhodes', roman: 'i9 – IV13 – i9 – v7',
      why: 'G-funk comes from 70s P-Funk, so it loves the **Dorian mode**: minor, but with a bright natural 6th. Dm9 → G13 is the classic Dorian vamp (the G13 contains B natural). Bar 4 uses Am7 to turn back around.',
      list: [[0, 16, 'Dm9', 'F3 A3 C4 E4'], [16, 16, 'G13', 'F3 A3 B3 E4'], [32, 16, 'Dm9', 'F3 A3 C4 E4'], [48, 16, 'Am7', 'E3 G3 C4']],
      tips: ['Play the chords in short, funky hits (on beat 1, the "and" of 2 and beat 4) instead of long notes for a clavinet-style feel.']
    },
    melody: {
      lab: 'whistle', plugin: '3xOsc sine lead with Porta',
      why: 'The famous G-funk "whistle": a high sine lead that slides between notes. Because Porta is on, every overlapping note glides, so the line sounds like a human whistling. Keep it simple and melodic.',
      notes: '0:A5:6 6:G5:2 8:F5:4 12:D5:4 16:F5:4 20:G5:2 22:A5:2 24:B5:8 32:A5:6 38:C6:2 40:D6:4 44:C6:2 46:A5:2 48:G5:4 52:E5:4 56:C5:4 60:D5:4',
      tips: ['Overlap each note slightly into the next so Porta makes it glide.', 'Add Fruity Reeverb 2 and Fruity Delay 3 (1/4) to put the lead "in the air".']
    },
    drums: {
      why: 'Relaxed, head-nodding drums: kick on 1 and syncopated, snare + clap on 2 and 4, 16th hats with soft in-between notes and a shaker on the off-beats.',
      rows: {
        kick: 'x......x..x.....' + 'x......x.x......',
        snare: '....x.......x...',
        chh: 'xoxoxoxoxoxoxoxo',
        perc: '..x...x...x...x.'
      },
      names: { snare: 'Snare+Clap', perc: 'Shaker' }
    },
    bass: {
      lab: 'moog', plugin: 'Transistor Bass or 3xOsc saw + low-pass filter (Mono + Porta)', is808: false, title: 'The funk bass',
      why: 'The bassline is the second melody of a G-funk beat: syncopated, with octave jumps and small slides, like a Minimoog bass from a Parliament record.',
      notes: '0:D2:3 3:D2:1 6:D3:2 8:A2:2 10:C3:2 12:D3:2 14:C3:2 16:G2:3 19:G2:1 22:G3:2 24:F3:2 26:D3:2 28:F3:2 30:E3:2g 32:D2:3 35:D2:1 38:D3:2 40:A2:2 42:C3:2 44:D3:2 46:F3:2 48:A2:3 51:A2:1 54:A3:2 56:G3:2 58:E3:2 60:C3:2 62:C#3:2g',
      tips: ['Short, bouncy notes with a few longer ones. Funk lives in the gaps.']
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 35 Hz.'],
      ['Snare + Clap', 'High-pass at 150 Hz. Fruity Reeverb 2: plate-like, wet 15%.'],
      ['Hats / Shaker', 'High-pass at 400 Hz. Pan the shaker slightly left.'],
      ['Rhodes', 'High-pass at 150 Hz. Vintage Phaser or Vintage Chorus (subtle). Fruity Reeverb 2, wet 15%.'],
      ['Whistle lead', 'Fruity Parametric EQ 2: high-pass at 400 Hz. Fruity Delay 3: 1/4, feedback 25%, wet 15%. Fruity Reeverb 2: hall, wet 25%.'],
      ['Funk bass', 'Fruity Parametric EQ 2: high-pass at 35 Hz. Fruity Compressor (4:1). A little Fruity Fast Dist for warmth.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Rhodes and whistle, bass enters on bar 3.'], ['5–20', 'Verse 1', 'Drums, bass, Rhodes. Whistle out.'], ['21–28', 'Hook', 'Everything; whistle plays the melody.'], ['29–44', 'Verse 2', 'Add a talk-box-style lead (see below) on the last 4 bars.'], ['45–52', 'Hook', 'Everything.'], ['53–60', 'Outro', 'Bass, Rhodes and whistle; drums out.']],
    vocals: ['G-funk vocals are smooth and melodic (think Snoop Dogg or Nate Dogg): keep the whistle out of the verses.', 'The talk box is a G-funk signature (Roger Troutman, DJ Quik). FL has no talk box, but **Vocodex** with a synth carrier gets close; or hire a talk box player.', 'Use a short drum fill or a funky bass run into each hook.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Smooth and warm: around −9 to −11 LUFS.',
    write: {
      progressions: [['i9 – IV13', 'Dm9 – G13', 'Dorian funk vamp'], ['i9 – IV13 – i9 – v7', 'Dm9 – G13 – Dm9 – Am7', 'This build'], ['i7 – iv7', 'Dm7 – Gm7', 'Darker West Coast'], ['IVmaj7 – iii7 – ii7', 'Fmaj7 – Em7 – Dm7 (in C)', 'Smooth, Quik-style']],
      melody: ['High sine or square lead with portamento.', 'Use the Dorian 6th (B in D minor) for the "sunny" sound.', 'Long notes with slides; leave space.'],
      bass: ['Syncopated funk bass with octave jumps.', 'Moog / analog saw tone, filtered.', 'Slides into chord changes.'],
      drums: ['Laid-back backbeat with snare + clap.', 'Soft 16th hats and a shaker.', 'Light swing.']
    },
    quiz: [{ q: 'What makes the Dorian mode sound different from natural minor?', a: ['It has a flat 2nd', 'It has a natural (major) 6th', 'It has no 3rd', 'It is a major scale'], c: 1, why: 'D Dorian has B natural instead of Bb, giving a brighter, funky minor sound.' }],
    watch: [['G-funk beat in FL Studio', 'G funk beat FL Studio tutorial'], ['G-funk whistle lead', 'G funk whistle synth lead tutorial']]
  });

  A.flBuild({
    id: 'bay-ratchet',
    title: 'Minimal LA ratchet club beat in C minor',
    bpm: 98, key: 'C minor', scale: 'C D Eb F G Ab Bb', feel: 'straight, bouncy',
    goal: 'A minimal LA "ratchet" club beat in the style DJ Mustard made famous around 2012–2015: a simple 3-note synth riff, claps and finger snaps, a "hey!" chant, sparse kicks and a short, deep sub bass. Less is more.',
    sounds: [
      ['Kick', 'Sampler: a tight kick', 'Short.'],
      ['Clap', 'Sampler: a big clap', 'On 2 and 4, plus extras.'],
      ['Snap', 'Sampler: a finger snap', 'Doubles the clap for that LA sound.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Minimal.'],
      ['Chant', 'Sampler: a short "hey!" shout (royalty-free or your own)', 'The ratchet signature. Record your friends shouting!'],
      ['Synth riff', 'FLEX or Sytrus: a plucky, bright synth', 'A short pluck or a simple saw with a short decay.'],
      ['Sub / 808', 'Sampler: a short 808 or sub', 'Short notes; Mono on.']
    ],
    chords: {
      lab: 'pad', plugin: 'FLEX soft pad (very quiet)', roman: 'i – VI',
      why: 'Ratchet beats barely use chords: a quiet pad holds C minor and Ab major underneath. The riff and drums do the work.',
      list: [[0, 32, 'Cm', 'C4 Eb4 G4'], [32, 32, 'Ab', 'C4 Eb4 Ab4']]
    },
    melody: {
      lab: 'pluck', plugin: 'FLEX or Sytrus pluck',
      why: 'The riff uses **only three notes** (C, Eb, G) in a bouncy, syncopated rhythm. Simple enough to remember after one listen: that is why these beats dominated clubs.',
      notes: '0:C5:1 3:Eb5:1 6:G5:1 8:C5:1 10:Eb5:1 14:G5:1 16:C5:1 19:Eb5:1 22:G5:1 24:Eb5:1 26:C5:1 32:C5:1 35:Eb5:1 38:Ab5:1 40:C5:1 42:Eb5:1 46:Ab5:1 48:C5:1 51:Eb5:1 54:G5:1 56:Eb5:1 58:C5:1',
      tips: ['Short notes only. If the pluck rings too long, shorten its release in the synth.', 'Add Fruity Delay 3 (1/8 dotted, wet 15%) for bounce.']
    },
    drums: {
      why: 'The ratchet groove: clap + snap on 2 and 4 with an extra clap on the "and" of 4 in bar 2, very few kicks, and a "hey!" chant on beat 1 every second bar.',
      rows: {
        kick: 'x.......x.x.....' + 'x.........x.....',
        clap: '....x.......x...' + '....x.......x.x.',
        perc: '....x.......x...',
        chh: '..x...x...x...x.',
        ohh: '.'.repeat(16) + 'x' + '.'.repeat(15)
      },
      names: { perc: 'Snap', ohh: 'Hey! chant' },
      extra: ['The "Hey!" row is your chant sample, placed on bar 2, beat 1 (use the open-hat row in the Beat Lab to hear where it goes).', 'Mustard-style beats often add a short vocal tag ("Mustard on the beat, ho!"): record your own producer tag the same way.']
    },
    bass: {
      lab: 'sub', plugin: 'Sampler with a short 808 / sub (Mono)',
      why: 'Short, punchy sub notes on the kick and a couple of pickups. No long 808 slides here: tight and bouncy.',
      notes: '0:C2:3 8:C2:2 10:C2:3 16:C2:3 26:G1:3 32:Ab1:3 40:Ab1:2 42:Ab1:3 48:G1:3 58:Bb1:3'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Clap / Snap', 'High-pass at 200 Hz. Fruity Reeverb 2: short, wet 10%. Pan the snap slightly right.'],
      ['Hats', 'High-pass at 400 Hz.'],
      ['Chant', 'High-pass at 200 Hz. Fruity Reeverb 2, wet 20%. Fruity Delay 3, 1/4, wet 15%.'],
      ['Synth riff', 'High-pass at 300 Hz. Fruity Delay 3: dotted 1/8, wet 15%.'],
      ['Sub / 808', 'High-pass at 30 Hz. Fruity Limiter.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Riff and tag.'], ['5–12', 'Hook', 'Everything, chant every 2 bars.'], ['13–28', 'Verse 1', 'Kick, clap, sub and hats; riff only every other 2 bars.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Drop the kick for bars 37–40, then everything.'], ['53–60', 'Hook', 'Everything.'], ['61–64', 'Outro', 'Riff alone.']],
    vocals: ['Ratchet is club music: leave lots of space, the rapper and crowd fill it.', 'Mute everything except the clap for one bar before the hook.', 'Chants and ad-libs ("hey!", "ayy") are part of the beat.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Loud and clean: around −8 LUFS.',
    write: {
      progressions: [['i – VI', 'Cm – Ab', 'This build'], ['i (one chord)', 'Cm only, riff moves', 'Ultra-minimal'], ['i – v', 'Cm – Gm', 'Darker'], ['i – iv', 'Cm – Fm', 'Moody']],
      melody: ['Three or four notes only.', 'Syncopated, short, bouncy.', 'Repeat exactly.'],
      bass: ['Short sub notes on the kick.', 'No long slides.'],
      drums: ['Clap + snap on 2 and 4.', 'Few kicks.', 'Chants on the downbeat.', 'Leave space.']
    },
    quiz: [{ q: 'What is the main idea behind a DJ Mustard-style ratchet beat?', a: ['As many sounds as possible', 'Minimalism: a simple riff, claps, chants and sub', 'Long jazz chords', 'Live drums'], c: 1, why: 'Ratchet beats are deliberately minimal so they bounce in clubs.' }],
    watch: [['DJ Mustard style beat in FL Studio', 'DJ Mustard type beat FL Studio tutorial'], ['Ratchet music production', 'ratchet beat tutorial']]
  });

  A.flBuild({
    id: 'memphis-crunk',
    title: 'Dark Memphis horror beat in C minor',
    bpm: 72, key: 'C minor (Phrygian colour)', scale: 'C Db Eb F G Ab Bb (Db is the Phrygian "evil" note)', feel: 'slow, with fast hats',
    goal: 'A dark, lo-fi Memphis rap beat in the style of early Three 6 Mafia, DJ Paul & Juicy J and the 90s Memphis tape scene: a creepy horror-movie piano, booming 808, cowbell, rattling 16th and 32nd hats, chanted vocal hooks and tape grit. This is the root of phonk and of crunk.',
    sounds: [
      ['Kick', 'Sampler: a TR-808 kick with a long tail', 'Booming.'],
      ['Clap', 'Sampler: an 808 clap', 'Snappy.'],
      ['Hi-hat', 'Sampler: an 808 closed hat', 'Fast 16ths and 32nds.'],
      ['Cowbell', 'Sampler: an 808 cowbell', 'A Memphis signature.'],
      ['Horror piano', 'FL Keys (grand piano)', 'Dark and simple; add reverb.'],
      ['Dark pad', 'FLEX or Harmor: a dark string/choir pad', 'Very quiet.'],
      ['808', 'Sampler: a long 808', 'Mono + Porta.']
    ],
    chords: {
      lab: 'strings', plugin: 'FLEX or Harmor dark pad', roman: 'i – bII',
      why: 'C minor → Db major. The Db (a semitone above the root) is the **Phrygian** sound: it is the "horror movie" chord that makes Memphis beats sound evil.',
      list: [[0, 32, 'Cm', 'C4 Eb4 G4'], [32, 32, 'Db', 'Db4 F4 Ab4']]
    },
    melody: {
      lab: 'piano', plugin: 'FL Keys grand piano',
      why: 'A creepy piano riff: up the minor chord, then a dark half-step (G → Ab → G). The repetition is hypnotic, like a horror-film theme.',
      notes: '0:C5:2 2:Eb5:2 4:G5:2 6:Ab5:2 8:G5:4 12:Eb5:4 16:C5:2 18:Eb5:2 20:G5:2 22:Ab5:2 24:G5:2 26:F#5:2 28:G5:4 32:Db5:2 34:F5:2 36:Ab5:2 38:Bb5:2 40:Ab5:4 44:F5:4 48:Db5:2 50:F5:2 52:Ab5:2 54:G5:2 56:Eb5:4 60:C5:4'
    },
    drums: {
      why: 'At 72 BPM, the clap on 2 and 4 feels slow and heavy, but the hats run in fast 16ths with 32nd rolls, so the beat feels dark and nervous at the same time. The cowbell plays a syncopated part.',
      rows: {
        kick: 'x......x..x.....' + 'x..x......x.x...',
        clap: '....x.......x...',
        chh: 'xxxxxxxxxxxxxxxx',
        perc: 'x..x..x...x..x..'
      },
      names: { perc: 'Cowbell' },
      extra: ['Add 32nd-note hat rolls (snap ½ step, Alt+U chop) at the end of every 2nd bar.', 'Turn every second hat down to about 60% velocity.']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'Long 808 notes on C and Db, following the kick, with one slide per 2 bars.',
      notes: '0:C2:7 7:C2:3 10:C2:6 16:C2:3 19:C2:7 26:G1:6g 32:Db2:7 39:Db2:3 42:Db2:6 48:Db2:3 51:Db2:7 58:C2:6g'
    },
    extra: [{
      after: 'mixer', title: 'Make it sound like a 90s Memphis tape',
      body: 'Memphis rap was made on cheap equipment and sold on cassette, and the grit is part of the sound.\n\n- On the **Master** (or a bus with everything except the 808): **Fruity Parametric EQ 2** low-pass around 9–11 kHz, **Fruity Squeeze** with a little bit-crushing, and **Vintage Chorus** very subtle for tape wobble.\n- Add a quiet tape-hiss or vinyl-noise sample on its own channel.\n- **Chanted hooks** are a Memphis signature: record a group chant, double it, pitch one copy down an octave with **Pitch Shifter** or **NewTone**, and add reverb.\n- Never sample a vocal from a Memphis tape for a release without clearance.'
    }],
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Clap', 'High-pass at 200 Hz. Fruity Reeverb 2: medium, wet 15%.'],
      ['Hats', 'High-pass at 400 Hz, low-pass at 10 kHz.'],
      ['Cowbell', 'High-pass at 400 Hz. Pan slightly left.'],
      ['Horror piano', 'High-pass at 150 Hz. Fruity Reeverb 2: large hall, wet 30%.'],
      ['Dark pad', 'High-pass at 250 Hz. Very quiet.'],
      ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Fruity Fast Dist, light. Fruity Limiter.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Piano alone, with reverb and tape noise.'], ['5–12', 'Hook (chant)', 'Everything, with the chant.'], ['13–28', 'Verse 1', 'Drums, 808 and piano.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Piano out for bars 37–40, then back.'], ['53–60', 'Hook', 'Everything.'], ['61–64', 'Outro', 'Piano and pad.']],
    vocals: ['Memphis vocals are fast triplet flows and chanted hooks: keep the piano quieter in the verses.', 'A cymbal reverse or a pitched-down vocal shout into each hook.', 'Crunk (Lil Jon) took this energy to the club: faster tempo (75–80 BPM), huge 808s, synth stabs and crowd shouts.'],
    master: 'Fruity Parametric EQ 2 (low-pass for tape) → Fruity Limiter (ceiling −1 dB). Around −9 LUFS.',
    write: {
      progressions: [['i – bII', 'Cm – Db', 'Horror (this build)'], ['i (one chord)', 'Cm with a moving piano riff', 'Hypnotic'], ['i – iv', 'Cm – Fm', 'Dark'], ['i – bVI – bII', 'Cm – Ab – Db', 'Cinematic evil']],
      melody: ['Horror-film piano riffs: minor arpeggios plus half-steps.', 'Use the flat 2nd (Db) and the tritone (F#) for evil colour.', 'Repeat, repeat, repeat.'],
      bass: ['Long 808s on the root.', 'Slides at the end of 2-bar phrases.'],
      drums: ['Slow clap on 2 and 4.', 'Fast 16th and 32nd hats.', 'Cowbell.', 'TR-808 kit.']
    },
    quiz: [{ q: 'Which chord gives this Memphis beat its "evil" Phrygian sound?', a: ['G major', 'Db major (a semitone above the root C)', 'C major', 'F major'], c: 1, why: 'The flat II chord (Db in C minor) is the Phrygian colour used in horror and Memphis music.' }],
    watch: [['Memphis rap beat in FL Studio', 'Memphis rap beat FL Studio tutorial'], ['Three 6 Mafia style beat', 'Three 6 Mafia type beat tutorial']]
  });

  A.flBuild({
    id: 'houston-bounce',
    title: 'Houston slab beat, then chopped & screwed (A minor)',
    bpm: 70, key: 'A minor', scale: 'A B C D E F G (G# for the E7)', feel: 'slow, smooth',
    goal: 'A smooth, slow Houston beat in the spirit of UGK, Paul Wall and the slab culture: organ and chorused guitar chords, a soulful lead, deep 808 and laid-back drums. Then you **chop and screw** it in FL Studio the way DJ Screw did: slowed down, pitched down, with repeated beats.',
    sounds: [
      ['Kick', 'Sampler: a deep 808 kick', 'Round.'],
      ['Snare', 'Sampler: a fat snare', 'Slow backbeat.'],
      ['Hi-hat', 'Sampler: a closed hat', '16ths.'],
      ['Organ', 'FLEX organ preset (or FL Keys)', 'Gospel/soul organ chords.'],
      ['Guitar lead', 'FLEX clean electric guitar, with Vintage Chorus', 'Southern soul guitar.'],
      ['808', 'Sampler: a long 808', 'Mono + Porta.']
    ],
    chords: {
      lab: 'organ', plugin: 'FLEX organ', roman: 'i7 – iv7 – VImaj7 – V7',
      why: 'A soulful minor progression: Am7 → Dm7 → Fmaj7 → E7. The E7 (with G#) pulls back to A minor. Houston beats come from soul and gospel, so the chords are warm 7ths.',
      list: [[0, 16, 'Am7', 'G3 A3 C4 E4'], [16, 16, 'Dm7', 'F3 A3 C4 D4'], [32, 16, 'Fmaj7', 'E3 F3 A3 C4'], [48, 16, 'E7', 'D3 E3 G#3 B3']]
    },
    melody: {
      lab: 'guitar', plugin: 'FLEX clean guitar + Vintage Chorus',
      why: 'A slow, bluesy guitar phrase with space between the notes, so it still works when it is slowed down.',
      notes: '0:E5:4 4:C5:2 6:D5:2 8:E5:6 14:G5:2 16:A5:6 22:G5:2 24:F5:4 28:D5:4 32:C5:4 36:E5:2 38:F5:2 40:A5:6 46:G5:2 48:G#5:6 54:F5:2 56:E5:4 60:D5:2 62:B4:2'
    },
    drums: {
      why: 'Slow, heavy drums: snare on 2 and 4 at 70 BPM, a syncopated kick and steady 16th hats.',
      rows: {
        kick: 'x......x..x.....' + 'x.......x.x.....',
        snare: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.x.xxx.x.'
      }
    },
    bass: {
      lab: '808', plugin: 'Sampler with a long 808 (Mono + Porta)',
      why: 'Long, deep 808 notes on each chord root, gliding into the next chord. Houston 808s are big and smooth.',
      notes: '0:A1:8 10:A1:6 16:D2:8 26:D2:4 30:F2:2g 32:F1:8 42:F1:6 48:E1:8 58:E1:3 61:G#1:3g'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Snare', 'High-pass at 150 Hz. Fruity Reeverb 2: hall, wet 15%.'],
      ['Hats', 'High-pass at 400 Hz.'],
      ['Organ', 'High-pass at 150 Hz. Vintage Phaser or a slow Vintage Chorus for a rotating-speaker feel. Fruity Reeverb 2, wet 15%.'],
      ['Guitar lead', 'High-pass at 200 Hz. Vintage Chorus. Fruity Reeverb 2, wet 20%.'],
      ['808', 'High-pass at 30 Hz. Fruity Fast Dist, light. Fruity Limiter.'],
      BUS
    ],
    extra: [{
      after: 'arrangement', title: 'Chop & screw it',
      body: 'DJ Screw slowed records down on turntables (so the pitch dropped too) and repeated phrases by switching between two copies of the same record. In FL Studio:\n\n' +
        '1. Export your finished beat as a WAV (Ctrl+R).\n2. Start a new project, set the tempo to about **60 BPM**, and drag the WAV into the Playlist.\n3. Open the clip\'s channel settings and set *Time stretching* mode to **Resample**. Lower **Pitch** by about **−3 to −4 semitones**. In Resample mode the beat gets slower and deeper at the same time, like a slowed-down record.\n4. **Chops:** with the Slice tool (**C**) cut out one beat or one bar, copy it and paste it right after itself, so that moment repeats ("chopped"). Do this every 4–8 bars on a strong moment.\n5. Add **Gross Beat** on the master: its time presets do stutters, repeats and tape stops. Automate it only at chop moments.\n6. Lots of reverb on the vocals; a little extra low end.\n\n' +
        '**Bonus, New Orleans bounce:** bounce is built on the "Triggerman" beat at about 100 BPM: kick on 1 and the "and" of 2, snare on 2 and 4, a busy 16th-note hat and call-and-response chants. Try making a bounce version of this beat at 100 BPM.'
    }],
    arrangement: [['1–4', 'Intro', 'Organ and guitar.'], ['5–12', 'Hook', 'Everything.'], ['13–28', 'Verse 1', 'Drums, 808, organ. Guitar on the last 4 bars.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Drums out for bars 37–40.'], ['53–60', 'Hook', 'Everything.'], ['61–64', 'Outro', 'Organ and guitar.']],
    vocals: ['Houston rap is laid-back and drawled: give the vocal room by keeping the guitar out of the verses.', 'In the screwed version, repeat (chop) the best vocal line of each verse.', 'Use a reverse cymbal into hooks.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −9 to −10 LUFS.',
    write: {
      progressions: [['i7 – iv7 – VImaj7 – V7', 'Am7 – Dm7 – Fmaj7 – E7', 'Soulful (this build)'], ['i7 – iv7', 'Am7 – Dm7', 'Laid-back two-chord'], ['VImaj7 – i7', 'Fmaj7 – Am7', 'Dreamy'], ['i – VII – VI – V', 'Am – G – F – E', 'Southern blues "Andalusian" walk-down']],
      melody: ['Soul and blues phrases with lots of space.', 'Organ, chorused guitar, synth strings.', 'Slow melodies survive being screwed.'],
      bass: ['Long, deep 808s.', 'Glides into the next root.'],
      drums: ['Slow backbeat.', 'Steady 16th hats.', 'Heavy and smooth.']
    },
    quiz: [{ q: 'How do you get the "screwed" sound in FL Studio?', a: ['Speed up the beat', 'Resample mode and lower the pitch so it gets slower and deeper', 'Add a flanger', 'Delete the drums'], c: 1, why: 'In Resample mode, lowering pitch also slows the audio, just like slowing a record.' }],
    watch: [['Chopped and screwed in FL Studio', 'chopped and screwed FL Studio tutorial'], ['Houston slab beat', 'Houston type beat UGK style tutorial']]
  });
})();
