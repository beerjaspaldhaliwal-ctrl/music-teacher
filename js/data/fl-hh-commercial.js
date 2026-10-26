/* FL Studio builds for Semester 12: Commercial Hip-Hop. */
(function () {
  const A = window.ACADEMY;
  const BUS = ['Drums bus', 'Fruity Compressor or Fruity Soft Clipper, 1–3 dB of gain reduction.'];

  A.flBuild({
    id: 'rnb-hiphop',
    title: 'Late-night R&B trap ("trapsoul") in C minor',
    bpm: 70, key: 'C minor', scale: 'C D Eb F G Ab Bb', feel: 'slow, with double-time hats',
    goal: 'A smooth, late-night R&B trap beat in the style of Bryson Tiller\'s "Trapsoul", PARTYNEXTDOOR and OVO-era Drake: lush major-7 and minor-9 chords on an electric piano, a soft melody, slow drums with fast trap hats, and a warm 808. Made for singers.',
    sounds: [
      ['Kick', 'Sampler: a soft, deep kick', 'Not too punchy.'],
      ['Snare', 'Sampler: a soft snare or snap', 'On 2 and 4 at 70 BPM.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Fast 16ths and 32nd rolls (the trap part).'],
      ['Rim', 'Sampler: a rimshot', 'Ghost notes.'],
      ['808', 'Sampler: a smooth 808', 'Mono + Porta.'],
      ['E-piano', 'FL Keys (Rhodes / electric piano)', 'Warm, with chorus.'],
      ['Pad', 'Harmor or FLEX: a dark, filtered pad', 'Atmosphere. Try a reversed pad for the OVO feel.']
    ],
    chords: {
      lab: 'epiano', plugin: 'FL Keys electric piano', roman: 'VImaj7 – v7 – iv9 – i9',
      why: 'R&B harmony uses **4- and 5-note chords**: Abmaj7 → Gm7 → Fm9 → Cm9. Moving down step by step (Ab → G → F) and landing on C minor sounds smooth, sad and sexy at the same time.',
      list: [[0, 16, 'Abmaj7', 'Ab3 C4 Eb4 G4'], [16, 16, 'Gm7', 'G3 Bb3 D4 F4'], [32, 16, 'Fm9', 'F3 Ab3 Eb4 G4'], [48, 16, 'Cm9', 'Eb3 G3 Bb3 D4']],
      tips: ['Use the **Strum** tool (Alt+S) lightly so each chord rolls in like a real keyboard player.', 'Put the 9th (G in Fm9, D in Cm9) on top: that is the R&B colour.']
    },
    melody: {
      lab: 'bell', plugin: 'FLEX soft bell or a filtered synth',
      why: 'A sparse, singing melody that leaves a lot of room. It is a guide for the singer as much as a hook: long notes, falling phrases, chord tones.',
      notes: '0:G5:4 4:Eb5:2 6:F5:2 8:G5:6 14:Bb5:2 16:F5:6 22:D5:2 24:Bb4:8 32:C5:4 36:Eb5:2 38:F5:2 40:G5:4 44:F5:2 46:Eb5:2 48:D5:6 54:Eb5:2 56:C5:8'
    },
    drums: {
      why: 'At 70 BPM the snare sits on 2 and 4 (it feels like trap at 140 with the snare on 3). Hats run in 16ths with 32nd rolls, rims add ghost notes, and the kick is sparse.',
      rows: {
        kick: 'x......x..x.....' + 'x.........x..x..',
        snare: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.xxx.x.x.xxxx',
        perc: '......o.......o.'
      },
      names: { perc: 'Rim' },
      extra: ['Add 32nd and triplet hat rolls (snap ½ step or 1/6 beat, Alt+U) every 2 bars.', 'Velocity: keep the rims at about 30–40%. They should be felt more than heard.']
    },
    bass: {
      lab: '808', plugin: 'Sampler with a smooth 808 (Mono + Porta)',
      why: 'A long, warm 808 on the chord roots (Ab, G, F, C), with smooth slides into the next chord.',
      notes: '0:Ab1:8 10:Ab1:6 16:G1:8 26:G1:4 30:Bb1:2g 32:F1:8 42:F1:6 48:C2:8 58:C2:3 61:Eb2:3g'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz.'],
      ['Snare', 'High-pass at 200 Hz. Fruity Reeverb 2: plate-like, wet 15%.'],
      ['Hats / Rim', 'High-pass at 400 Hz. Quieter than in trap.'],
      ['808', 'Fruity Parametric EQ 2: high-pass at 30 Hz. Very light saturation. Fruity Limiter.'],
      ['E-piano', 'High-pass at 150 Hz. Vintage Chorus. Fruity Reeverb 2, wet 20%. Fruity Love Philter low-pass for the "underwater" OVO sound in verses.'],
      ['Melody', 'High-pass at 300 Hz. Fruity Delay 3: 1/4, wet 15%. Fruity Reeverb 2: hall, wet 25%.'],
      ['Pad', 'High-pass at 250 Hz, low-pass at 5 kHz. Quiet.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'E-piano and pad, filtered. Tag.'], ['5–12', 'Verse 1', 'E-piano, 808, soft drums.'], ['13–16', 'Pre-chorus', 'Drums thin out; build with a riser or reverse pad.'], ['17–24', 'Chorus', 'Everything, melody plays.'], ['25–32', 'Verse 2', 'Like verse 1 with an extra hat roll pattern.'], ['33–36', 'Pre-chorus', 'Build.'], ['37–44', 'Chorus', 'Everything.'], ['45–48', 'Bridge', 'Drums out; e-piano and vocal only.'], ['49–56', 'Final chorus', 'Everything.'], ['57–60', 'Outro', 'E-piano and pad.']],
    vocals: ['R&B is built around the singer: everything leaves space in 1–5 kHz.', 'Filter the e-piano (low-pass) in the verses and open it in the chorus.', 'A reverse reverb or reversed pad into each chorus is the classic R&B transition.', 'Vocal stacks and harmonies fill the chorus: leave room for them.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −9 to −11 LUFS: smooth, not crushed.',
    write: {
      progressions: [['VImaj7 – v7 – iv9 – i9', 'Abmaj7 – Gm7 – Fm9 – Cm9', 'Late-night (this build)'], ['i9 – iv9', 'Cm9 – Fm9', 'Two-chord R&B vamp'], ['VImaj7 – VII – i', 'Abmaj7 – Bb – Cm', 'Emotional lift'], ['ii7 – V7 – Imaj7', 'Dm7 – G7 – Cmaj7 (in C major)', 'Classic R&B resolution'], ['IVmaj7 – iii7 – vi7', 'Fmaj7 – Em7 – Am7 (in C major)', 'Neo-soul']],
      melody: ['Long notes and falling phrases.', 'Use chord tones, especially 7ths and 9ths.', 'Write for the singer: leave space.', 'Soft bells, e-piano, filtered synths, vocal chops.'],
      bass: ['Long, warm 808s on the roots.', 'Smooth slides into chord changes.'],
      drums: ['Slow tempo, snare on 2 and 4.', 'Fast trap hats and rolls.', 'Soft rims as ghost notes.']
    },
    quiz: [{ q: 'Why do R&B producers use chords like Abmaj7 and Cm9?', a: ['They are easier to play', 'The extra 7ths and 9ths give the rich, emotional R&B colour', 'They are louder', 'They avoid the 808'], c: 1, why: 'Extended chords are the harmonic signature of R&B and neo-soul.' }],
    watch: [['R&B trap beat in FL Studio', 'R&B trap beat FL Studio tutorial'], ['Bryson Tiller style beat', 'Bryson Tiller type beat FL Studio']]
  });

  A.flBuild({
    id: 'pop-rap',
    title: 'Radio pop-rap with a sung hook in G major',
    bpm: 95, key: 'G major', scale: 'G A B C D E F#', feel: 'straight, bouncy',
    goal: 'A bright, radio-ready pop-rap beat in the style of Post Malone, Jack Harlow and Drake\'s pop records: the four-chord pop progression on piano and guitar, a catchy piano hook, a guide melody for the sung chorus, punchy drums and a melodic 808.',
    sounds: [
      ['Kick', 'Sampler: a punchy, clean kick', 'Short and tight.'],
      ['Clap', 'Sampler: a bright clap layered with a snare', 'On 2 and 4.'],
      ['Hi-hat', 'Sampler: a closed hat', '8ths.'],
      ['Open hat', 'Sampler: an open hat', 'Lift at the end of bars.'],
      ['808', 'Sampler: a clean 808', 'Mono + Porta.'],
      ['Piano', 'FL Keys (grand piano)', 'Bright.'],
      ['Guitar', 'FLEX acoustic guitar (strummed) preset', 'Plays the chords in the chorus.'],
      ['Hook guide', 'FLEX: a soft lead or vocal preset', 'A guide melody for the singer; you will mute it when the real vocal is recorded.']
    ],
    chords: {
      lab: 'guitar', plugin: 'FLEX acoustic guitar', roman: 'I – V – vi – IV',
      why: 'The most famous progression in pop: G → D → Em → C. Hundreds of hits use it because it feels happy, a little emotional, and always wants to loop. Pop-rap borrows it to make hooks that radio and playlists love.',
      list: [[0, 16, 'G', 'G3 B3 D4'], [16, 16, 'D', 'F#3 A3 D4'], [32, 16, 'Em', 'G3 B3 E4'], [48, 16, 'C', 'G3 C4 E4']]
    },
    melody: {
      lab: 'piano', plugin: 'FL Keys piano',
      why: 'A simple piano hook: the same 1-bar rhythm on each chord (up the chord, then a step down), easy to hum after one listen.',
      notes: '0:D5:2 2:G5:2 4:B5:2 6:A5:2 8:G5:4 12:D5:4 16:D5:2 18:F#5:2 20:A5:2 22:G5:2 24:F#5:4 28:D5:4 32:E5:2 34:G5:2 36:B5:2 38:A5:2 40:G5:4 44:E5:4 48:E5:2 50:G5:2 52:C6:2 54:B5:2 56:A5:4 60:G5:4'
    },
    counter: {
      plugin: 'FLEX soft lead (hook guide)',
      why: 'The **topline**: a guide for the sung chorus. It sits lower than the piano (where a voice sings), uses long notes, and moves mostly by step. Writing a guide hook makes your beat much easier to sell to artists and labels.',
      notes: '0:B4:6 6:A4:2 8:G4:8 16:A4:6 22:B4:2 24:A4:8 32:G4:4 36:B4:4 40:D5:8 48:E5:6 54:D5:2 56:C5:4 60:B4:4'
    },
    drums: {
      why: 'Clean, punchy drums: clap on 2 and 4, a bouncy kick, 8th-note hats and an open hat lift at the end of bar 4.',
      rows: {
        kick: 'x.....x...x.....' + 'x.....x.x.x.....',
        clap: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.',
        ohh: '.'.repeat(48) + '..............x.'
      }
    },
    bass: {
      lab: '808', plugin: 'Sampler with a clean 808 (Mono + Porta)',
      why: 'The 808 plays the chord roots (G, D, E, C) with the kick and a slide at the end of the loop. Clean, not distorted: pop-rap is about clarity.',
      notes: '0:G1:8 10:G1:6 16:D2:8 26:D2:6 32:E2:8 42:E2:4 46:B1:2 48:C2:8 58:C2:3 61:D2:3g'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz, small boost at 60 Hz.'],
      ['Clap', 'High-pass at 150 Hz. Fruity Reeverb 2: plate-like, wet 12%.'],
      ['Hats', 'High-pass at 400 Hz.'],
      ['808', 'High-pass at 30 Hz. Fruity Limiter. Sidechain it to the kick with Fruity Limiter (COMP mode) if they clash.'],
      ['Piano', 'High-pass at 150 Hz. Fruity Reeverb 2, wet 15%.'],
      ['Guitar', 'High-pass at 150 Hz. Pan slightly. Low in the verse, up in the chorus.'],
      ['Hook guide', 'Muted when the real vocal arrives.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Piano alone. Tag.'], ['5–12', 'Chorus', 'Everything; guitar strums.'], ['13–28', 'Verse 1', 'Piano, drums, 808. Guitar out.'], ['29–32', 'Pre-chorus', 'Drums thin out; riser.'], ['33–40', 'Chorus', 'Everything.'], ['41–56', 'Verse 2', 'New drum variation; piano filtered.'], ['57–64', 'Chorus', 'Everything, plus a higher piano octave.'], ['65–68', 'Outro', 'Piano and guitar.']],
    vocals: ['Pop-rap is song-shaped: verse, pre-chorus, chorus. Make the chorus clearly bigger than the verse.', 'Write the hook guide before you send the beat out; it shows artists the song is there.', 'A drum fill or a drop (everything out for one beat) into each chorus.', 'Radio edits are short: aim for 2:30–3:00.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −8 to −9 LUFS; bright and clear.',
    write: {
      progressions: [['I – V – vi – IV', 'G – D – Em – C', 'The pop progression (this build)'], ['vi – IV – I – V', 'Em – C – G – D', 'Emotional pop'], ['I – vi – IV – V', 'G – Em – C – D', '50s / doo-wop pop'], ['IV – I – V – vi', 'C – G – D – Em', 'Uplifting'], ['I – iii – IV', 'G – Bm – C', 'Feel-good']],
      melody: ['Piano or guitar hooks built from chord tones.', 'Write a topline for the sung hook: long notes, stepwise, in the vocal range (FL: G4–D6).', 'Repeat the hook rhythm on every chord.'],
      bass: ['Clean 808 on the roots.', 'One slide at the end of the loop.'],
      drums: ['Clap on 2 and 4.', 'Simple, bouncy kick.', 'Open hat lifts.', 'Bigger drums in the chorus.']
    },
    quiz: [{ q: 'Why write a hook guide melody before sending a pop-rap beat?', a: ['It is required by law', 'It shows the artist the song idea and makes the beat easier to place', 'It makes the file bigger', 'It replaces the drums'], c: 1, why: 'A guide topline turns a beat into a song idea, which A&Rs and artists respond to.' }],
    watch: [['Pop-rap beat in FL Studio', 'pop rap beat FL Studio tutorial'], ['Writing a hook / topline', 'how to write a hook topline melody']]
  });
})();
