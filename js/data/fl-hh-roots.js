/* FL Studio builds for Semester 8: Hip-Hop Roots. */
(function () {
  const A = window.ACADEMY;
  const BUS = ['Drums bus', 'Fruity Compressor (ratio 4:1, 2–3 dB of gain reduction) or Fruity Soft Clipper: glues the kit.'];

  // Turning your own loop into a "record" and chopping it, used by the sample-based builds.
  const CHOP = {
    after: 'melody', title: 'Turn the loop into a sample and chop it',
    body: 'Classic hip-hop is built from **samples**: a loop from a record, chopped into pieces and replayed in a new order. Here you sample **your own loop**, so you learn the exact workflow with no copyright problems.\n\n' +
      '1. Put the chords and the melody in **one pattern** called *Sample* (two channels in the same pattern is fine).\n' +
      '2. Make it sound old: send both channels to one Mixer insert called *Sample bus* and add **Vintage Chorus** (subtle), **Fruity Love Philter** or **Fruity Parametric EQ 2** (cut below 100 Hz and above 9 kHz, like vinyl) and **Fruity Squeeze** (a touch of bit reduction for that 12-bit sampler grit). Add a vinyl crackle sample on a quiet extra channel.\n' +
      '3. Export only this pattern: **Ctrl+R** → Mode **Pattern** → WAV. Name it like *MySample_' + '{bpm}' + 'bpm.wav*.\n' +
      '4. Add **Slicex** to the Channel Rack and drag the WAV into it. Slicex cuts the audio at every hit and maps each slice to its own piano key. (Fruity Slicer works the same way; in **Edison** you can also mark regions yourself and drag them out.)\n' +
      '5. If Slicex makes too many slices, open its menu and choose a coarser auto-slice, or delete markers until you have about 8 slices (one per half bar).\n' +
      '6. Open Slicex in the Piano Roll and replay the slices in a new order. Try this as a starting point:\n\n' +
      '| Bar | Slices to play (each ½ bar long) |\n|---|---|\n| 1 | 1, 1 |\n| 2 | 3, 2 |\n| 3 | 5, 5 |\n| 4 | 7, 8 |\n\n' +
      '7. Mute your original chords and melody. Now the beat runs on the chopped sample, exactly like an MPC producer would do it.\n\n' +
      '> **Using real records:** you can practise chopping any record, but before you release or sell a beat with someone else\'s recording you must clear the sample (licence the recording and the composition) or use royalty-free / self-made material.'
  };

  A.flBuild({
    id: 'old-school',
    title: 'Electro-funk in E minor',
    bpm: 112, key: 'E minor', scale: 'E F# G A B C D', feel: 'straight 16ths',
    goal: 'An early-80s electro hip-hop beat in the spirit of Afrika Bambaataa\'s "Planet Rock" and the Roland TR-808 era: booming 808 drums, a clap on 2 and 4, a cowbell groove, synth chord stabs, a funky synth bassline and a robot voice from Vocodex.',
    sounds: [
      ['Kick', 'Sampler: a TR-808 kick with a long tail', 'Electro uses the classic 808 boom. Browser → Packs → Drums has 808-style kits.'],
      ['Clap', 'Sampler: a TR-808 clap', 'The famous handclap.'],
      ['Hi-hat', 'Sampler: an 808 closed hat', 'Ticky and short.'],
      ['Cowbell', 'Sampler: an 808 cowbell', 'Part of the groove.'],
      ['Synth stabs', 'Sytrus or FLEX: a brass or poly-synth stab preset', 'Short attack, short release. Old analog brass sounds are perfect.'],
      ['Lead', 'FLEX or 3xOsc: a square-wave lead', 'In 3xOsc: oscillator 1 square, oscillators 2 and 3 off (volume 0), short release.'],
      ['Synth bass', 'Transistor Bass or 3xOsc (saw wave + filter)', 'A funky analog bass; in 3xOsc use a saw wave and add Fruity Love Philter or a low-pass filter.']
    ],
    chords: {
      lab: 'stab', plugin: 'Sytrus or FLEX brass/poly stab', roman: 'i – VII – VI – VII',
      why: 'Electro chords are **stabs**: short, punchy chords that are part of the rhythm. E minor → D → C → D, three stabs per bar in a syncopated pattern.',
      list: [[0, 2, 'Em', 'E4 G4 B4'], [6, 2, 'Em', 'E4 G4 B4'], [10, 2, 'Em', 'E4 G4 B4'], [16, 2, 'D', 'D4 F#4 A4'], [22, 2, 'D', 'D4 F#4 A4'], [26, 2, 'D', 'D4 F#4 A4'], [32, 2, 'C', 'C4 E4 G4'], [38, 2, 'C', 'C4 E4 G4'], [42, 2, 'C', 'C4 E4 G4'], [48, 2, 'D', 'D4 F#4 A4'], [54, 2, 'D', 'D4 F#4 A4'], [58, 2, 'D', 'D4 F#4 A4']]
    },
    melody: {
      lab: 'square', plugin: 'FLEX or 3xOsc square lead',
      why: 'A simple, catchy synth riff in E minor that answers the stabs. Electro melodies are short and robotic: they repeat exactly.',
      notes: '0:B4:2 2:E5:2 4:G5:2 6:F#5:2 8:E5:4 12:D5:2 14:E5:2 16:A5:2 18:F#5:2 20:D5:2 22:E5:2 24:F#5:4 28:A5:2 30:F#5:2 32:G5:2 34:E5:2 36:C5:2 38:D5:2 40:E5:4 44:G5:2 46:E5:2 48:A5:2 50:F#5:2 52:D5:2 54:E5:2 56:F#5:6 62:D5:2'
    },
    drums: {
      why: 'The electro groove: the 808 kick plays a syncopated pattern, the clap hits on beats 2 and 4, hats run in 8ths and the cowbell adds a funky counter-rhythm.',
      rows: {
        kick: 'x.....x...x.....' + 'x.....x...x...x.' + 'x.....x...x.....' + 'x.....x.x.x.....',
        clap: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.',
        perc: '..x...x....x..x.'
      },
      names: { perc: 'Cowbell' },
      extra: ['Add a short drum-machine fill (toms or claps in 16ths) on the last beat of bar 4.']
    },
    bass: {
      lab: 'moog', plugin: 'Transistor Bass or 3xOsc saw bass', is808: false, title: 'The synth bassline',
      why: 'A funky, bouncing synth bass playing the chord roots with octave jumps. It locks to the kick on beat 1 and fills the gaps.',
      notes: '0:E2:2 3:E2:1 4:E3:2 6:E2:2 10:E2:2 12:G2:2 14:A2:2 16:D2:2 19:D2:1 20:D3:2 22:D2:2 26:D2:2 28:F#2:2 30:A2:2 32:C2:2 35:C2:1 36:C3:2 38:C2:2 42:C2:2 44:E2:2 46:G2:2 48:D2:2 51:D2:1 52:D3:2 54:D2:2 58:D2:2 60:F#2:2 62:D3:2',
      tips: ['In Transistor Bass you can mark notes as slides for that squelchy 303-style movement.']
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz. The 808 kick tail is the bass of the beat in places, so keep it long.'],
      ['Clap', 'Fruity Reeverb 2: medium room, wet 15%. Electro claps sit in a little space.'],
      ['Hats / Cowbell', 'High-pass at 300 Hz. Pan the cowbell slightly left.'],
      ['Synth stabs', 'Fruity Parametric EQ 2: high-pass at 200 Hz. Fruity Delay 3: 1/8, low feedback.'],
      ['Lead', 'High-pass at 300 Hz. Fruity Reeverb 2, wet 15%.'],
      ['Synth bass', 'Fruity Parametric EQ 2: high-pass at 35 Hz. Fruity Compressor, gentle.'],
      BUS
    ],
    extra: [{
      after: 'mixer', title: 'The robot voice (Vocodex)',
      body: 'Electro is famous for vocoder vocals. **Vocodex** makes your voice "sing" the notes of a synth.\n\n1. Record a short phrase into an audio track (or use a royalty-free vocal).\n2. Load Vocodex on an empty Mixer insert.\n3. Send the synth that will be the robot\'s notes (the *carrier*, for example the stab synth playing long chords) to that insert.\n4. Send your vocal (the *modulator*) to the same insert as a sidechain (right-click the arrow at the bottom → *Sidechain to this track*) and select it as the modulator input in Vocodex.\n5. Start from a Vocodex preset and adjust the number of bands. The FL Studio manual\'s Vocodex page shows the routing with pictures if you get stuck.'
    }],
    arrangement: [['1–8', 'Intro', 'Drums alone, then stabs enter at bar 5.'], ['9–24', 'Verse 1', 'Drums, stabs, bass.'], ['25–32', 'Hook', 'Add the lead and the vocoder phrase.'], ['33–48', 'Verse 2', 'Drums and bass only for 4 bars, then stabs return.'], ['49–56', 'Hook', 'Everything.'], ['57–64', 'Break', 'Drum-machine breakdown: kick, clap and cowbell only (great for breakdancers and DJ scratching).'], ['65–72', 'Outro', 'Everything, then fade.']],
    vocals: ['Early hip-hop vocals were rhythmic and party-style: leave the stabs out under the rap, bring them back in the hook.', 'A drum-machine break is part of the culture: it is where DJs scratch and dancers battle.', 'Use a reverse cymbal or a tom fill into each new section.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Electro is less crushed than modern rap: around −10 LUFS.',
    write: {
      progressions: [['i – VII – VI – VII', 'Em – D – C – D', 'Funky and driving (this build)'], ['i – iv', 'Em – Am', 'Dark groove'], ['i7 (one chord)', 'Em7', 'Hypnotic, Kraftwerk-style'], ['i – VI – VII', 'Em – C – D', 'Uplifting']],
      melody: ['Short, repeating synth riffs.', 'Square or saw waves, robotic and exact.', 'Answer the chord stabs: play when the stabs rest.'],
      bass: ['Funky 8th and 16th notes with octave jumps.', 'Analog-style saw or square bass.', 'Always hit beat 1 with the kick.'],
      drums: ['TR-808 sounds.', 'Clap on 2 and 4.', 'Syncopated kick and cowbell.', 'Leave a break for DJs and dancers.']
    },
    quiz: [{ q: 'Which drum machine defines the electro and early hip-hop sound?', a: ['Roland TR-808', 'Akai MPC 2000', 'Linn 9000', 'Roland TR-909'], c: 0, why: 'The TR-808 boom kick, clap and cowbell are the heart of electro.' }],
    swing: null,
    watch: [['Electro hip-hop beat in FL Studio', 'electro funk beat FL Studio 808'], ['Vocodex tutorial', 'Vocodex FL Studio tutorial']]
  });

  A.flBuild({
    id: 'boom-bap',
    title: 'Golden-era boom bap with a chopped soul loop in F minor',
    bpm: 90, key: 'F minor', scale: 'F G Ab Bb C Db Eb (E natural over the C7)', feel: 'swung 16ths', labSwing: 58,
    swing: 'until the hats shuffle (start around 25–40% and adjust by ear; MPC-style 54–58% swing is the target feel)',
    goal: 'A 90s New York boom bap beat in the tradition of DJ Premier, Pete Rock and the Alchemist: a jazzy Rhodes and flute loop that you turn into your own "record" and chop, hard swung drums with a cracking snare, and a warm upright-style bass.',
    sounds: [
      ['Kick', 'Sampler: a dusty, punchy kick', 'Boom bap kicks sound like vinyl: thick, with less sub than trap.'],
      ['Snare', 'Sampler: a hard, cracking snare', 'The "bap". Layer a second snare for crack if needed.'],
      ['Hi-hat', 'Sampler: a dusty closed hat', 'Or a shaker.'],
      ['Rhodes', 'FL Keys (electric piano / Rhodes)', 'Warm jazz chords.'],
      ['Flute', 'FLEX: a flute or soft horn preset', 'The melody on top of the chords.'],
      ['Bass', 'FLEX upright bass, BooBass, or 3xOsc sine', 'A round, warm bass. BooBass is simple and sounds great here.'],
      ['Vinyl', 'Sampler: a vinyl crackle loop', 'Very quiet, for texture.']
    ],
    chords: {
      lab: 'epiano', plugin: 'FL Keys Rhodes', roman: 'i9 – iv9 – VImaj7 – V7',
      why: 'Boom bap loops usually come from soul and jazz records, so the chords are **rich 7th and 9th chords**: Fm9 → Bbm9 → Dbmaj7 → C7. The C7 (with E natural) pulls back to F minor. Bar 2 leaves out its root (Bb) because the bass plays it; jazz pianists call that a rootless voicing.',
      list: [[0, 16, 'Fm9', 'F3 Ab3 C4 Eb4 G4'], [16, 16, 'Bbm9', 'Ab3 C4 Db4 F4'], [32, 16, 'Dbmaj7', 'Db3 F3 Ab3 C4'], [48, 16, 'C7', 'E3 G3 Bb3 C4']]
    },
    melody: {
      lab: 'flute', plugin: 'FLEX flute',
      why: 'A lazy, singing flute line that sits on top of the chords, the kind of phrase producers loop from a jazz record. It uses long notes and a few pickups.',
      notes: '0:C5:4 4:Eb5:2 6:F5:2 8:Ab5:6 14:G5:2 16:F5:6 22:Eb5:2 24:Db5:4 28:C5:4 32:C5:4 36:Db5:2 38:F5:2 40:Ab5:4 44:G5:2 46:F5:2 48:E5:6 54:G5:2 56:Bb5:4 60:G5:4'
    },
    extra: [CHOP, {
      after: 'drums', title: 'Make the drums knock',
      body: '- **Swing is everything.** Program the drums in the Channel Rack and raise the swing knob until the hats shuffle. Compare with a DJ Premier or Pete Rock beat.\n- **Ghost snares** (the "o" steps) are soft hits that make the groove roll. Set their velocity to about 30–40%.\n- **Layer the kick** with a short sub thump on a second channel if it needs more weight.\n- On the Drums bus try **Fruity Compressor** (4:1, fast attack off, medium release) for the classic punchy SP-1200/MPC sound, and a touch of **Fruity Squeeze** for 12-bit grit.'
    }],
    drums: {
      why: 'The boom (kick) and the bap (snare). The snare hits hard on 2 and 4, the kick plays a syncopated pattern around it, and the hats swing.',
      rows: {
        kick: 'x......x..x.....' + 'x......x..x..x..' + 'x......x..x.....' + 'x......x.xx.....',
        snare: '....x.......x...' + '....x..o....x...' + '....x.......x...' + '....x.......x.o.',
        chh: 'x.x.x.x.x.x.x.xo'
      }
    },
    bass: {
      lab: 'upright', plugin: 'FLEX upright bass, BooBass or 3xOsc sine', is808: false, title: 'The bassline',
      why: 'The bass plays the chord roots (F, Bb, Db, C) with the kick and adds a small walking note at the end of each bar to lead to the next chord. Round and warm, not distorted.',
      notes: '0:F2:6 7:F2:1 10:C2:4 14:Eb2:2 16:Bb1:6 23:Bb1:1 26:F2:4 30:C2:2 32:Db2:6 39:Db2:1 42:Ab1:4 46:Db2:2 48:C2:6 55:C2:1 58:G1:4 62:E2:2'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 35 Hz, boost around 80–100 Hz.'],
      ['Snare', 'Fruity Parametric EQ 2: high-pass at 120 Hz, boost around 200 Hz (body) and 5 kHz (crack). Fruity Reeverb 2: short room, wet 10%.'],
      ['Hats', 'High-pass at 400 Hz, low-pass at 10 kHz for dust.'],
      ['Sample bus', 'Vintage Chorus → Fruity Parametric EQ 2 (high-pass 100–150 Hz, low-pass 9 kHz) → Fruity Squeeze (subtle). The sample must leave the low end to kick and bass.'],
      ['Bass', 'Fruity Parametric EQ 2: high-pass at 35 Hz. Fruity Compressor, gentle.'],
      ['Vinyl', 'Very quiet, high-pass at 500 Hz.'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Chopped sample alone, filtered. Tag.'], ['5–12', 'Hook', 'Everything. DJ scratches in the hook are classic (record a scratch or use a royalty-free one).'], ['13–28', 'Verse 1', 'Drums, bass and the chop; drop the flute part for 4 bars in the middle.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Use a different chop order (or filter the sample to bass only) for variation.'], ['53–60', 'Hook', 'Everything.'], ['61–64', 'Outro', 'Sample alone, then the drums play out.']],
    vocals: ['Boom bap is a rapper\'s genre: the drums and the vocal are the loudest things in the mix.', 'Filter the sample to low frequencies only (bass-only "filtered" loop) for the first 4 bars of a verse: a classic Pete Rock move.', 'Drop the drums for 1 bar before each hook, leaving only the sample.'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −9 to −11 LUFS: punchy, not squashed.',
    write: {
      progressions: [['i9 – iv9 – VImaj7 – V7', 'Fm9 – Bbm9 – Dbmaj7 – C7', 'Jazzy and moody (this build)'], ['i7 – iv7', 'Fm7 – Bbm7', 'Classic two-chord loop'], ['ii7 – V7 – Imaj7', 'Gm7 – C7 – Fmaj7 (in F major)', 'Jazz ii–V–I'], ['VImaj7 – V7', 'Dbmaj7 – C7', 'Dark soul tension'], ['i7 (one chord)', 'Fm7 with a moving melody', 'Hypnotic, Premier-style']],
      melody: ['Write melodies the way soul and jazz records sound: long notes, pickups, and space.', 'Use horn, flute, Rhodes or strings.', 'Then render the loop and chop it: the chop is your real melody.'],
      bass: ['Roots on the kick, a walking note to the next chord.', 'Round sine, upright or electric bass.', 'No glides, no distortion.'],
      drums: ['Snare on 2 and 4, hard.', 'Syncopated kicks.', 'Swing on the hats and ghost snares.', 'Dusty, saturated drum sounds.']
    },
    quiz: [{ q: 'In this build, how do you turn your loop into a chop-able sample?', a: ['Rename the pattern', 'Export the pattern as WAV and load it into Slicex', 'Turn up the swing', 'Use Gross Beat only'], c: 1, why: 'Exporting the pattern and slicing it in Slicex is the FL Studio version of the MPC sampling workflow.' }],
    watch: [['Boom bap beat in FL Studio', 'boom bap beat FL Studio tutorial'], ['Chopping samples with Slicex', 'Slicex chopping samples FL Studio']]
  });

  A.flBuild({
    id: 'jazz-rap',
    title: 'Dilla-style jazz rap in F major',
    bpm: 88, key: 'F major', scale: 'F G A Bb C D E', feel: 'loose, "drunk" swing', labSwing: 62,
    swing: 'high (start around 40–55%), then go further with the "Dilla feel" step below',
    goal: 'A warm jazz rap beat in the tradition of A Tribe Called Quest, J Dilla and Madlib: lush Rhodes chords playing a jazz ii–V–I, a walking upright bass, a muted-trumpet style melody, and loose, "drunk" drums that sit behind the beat.',
    sounds: [
      ['Kick', 'Sampler: a soft, round kick', 'Not too much click.'],
      ['Snare', 'Sampler: a dusty snare or rimshot', 'Soft and warm.'],
      ['Hi-hat', 'Sampler: a closed hat or shaker', 'Gentle.'],
      ['Rhodes', 'FL Keys (Rhodes / electric piano)', 'The heart of jazz rap.'],
      ['Trumpet / flute', 'FLEX: muted trumpet, horn or flute preset', 'A soft, jazzy lead.'],
      ['Upright bass', 'FLEX upright bass or BooBass', 'Walking jazz bass.']
    ],
    chords: {
      lab: 'epiano', plugin: 'FL Keys Rhodes', roman: 'ii9 – V13 – Imaj9 – vi9',
      why: 'This is the **ii–V–I**, the most important progression in jazz: Gm9 → C13 → Fmaj9 → Dm9. The chords are rootless voicings (the bass plays the roots). Each bar has two hits, on beat 1 and on the "and" of 2, the way a jazz pianist "comps".',
      list: [[0, 6, 'Gm9', 'Bb3 D4 F4 A4'], [6, 10, 'Gm9', 'Bb3 D4 F4 A4'], [16, 6, 'C13', 'Bb3 D4 E4 A4'], [22, 10, 'C13', 'Bb3 D4 E4 A4'], [32, 6, 'Fmaj9', 'A3 C4 E4 G4'], [38, 10, 'Fmaj9', 'A3 C4 E4 G4'], [48, 6, 'Dm9', 'F3 A3 C4 E4'], [54, 10, 'Dm9', 'F3 A3 C4 E4']],
      tips: ['Lower the velocity of the second hit in each bar (about 70%) so it sounds like a pianist.', 'Use the Strum tool (Alt+S) a tiny amount so the notes of each chord do not start at exactly the same time.']
    },
    melody: {
      lab: 'flute', plugin: 'FLEX muted trumpet or flute',
      why: 'A short, bluesy jazz phrase that answers itself. It mostly uses chord tones with a few passing notes, and leaves a breath at the end of every bar.',
      notes: '0:D5:3 3:F5:1 4:A5:4 10:G5:2 12:F5:2 14:D5:2 16:E5:6 22:G5:2 24:Bb5:4 28:A5:4 32:G5:3 35:A5:1 36:C6:4 42:A5:2 44:G5:2 46:E5:2 48:F5:6 54:E5:2 56:D5:4 60:C5:4'
    },
    drums: {
      why: 'Simple drums: kick, snare on 2 and 4, hats in 8ths. The magic is not the pattern but the **timing** (see the Dilla feel step).',
      rows: {
        kick: 'x......x.x......' + 'x.......x.x.....',
        snare: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.' + 'x.x.x.x.x.x.xox.'
      }
    },
    extra: [{
      after: 'drums', title: 'The Dilla feel (loose, behind-the-beat drums)',
      body: 'J Dilla turned off quantise on his MPC and played drums by hand, so the hits fall slightly early or late. This "drunk" feel is the sound of jazz rap and neo-soul.\n\n' +
        '1. **Push the snare late:** open the snare\'s channel settings → *Miscellaneous functions* → *Time* → turn the **Shift** knob a little to the right (about 10–25 ms late).\n' +
        '2. **Pull the kick early or keep it on time:** leave the kick on the grid, or move a couple of kick notes slightly earlier in the Piano Roll with snap **off** (hold **Alt** while dragging to move freely).\n' +
        '3. **Humanise the hats:** select the hat notes in the Piano Roll and use **Randomize (Alt+R)** for velocity, then move a few notes off the grid by hand.\n' +
        '4. Or record drums live: press record, choose *Notes and automation*, and tap the drums on your keyboard or pads with the metronome on. Keep the take even if it is not perfect.\n\n' +
        'Listen to Slum Village "Fall in Love" or D\'Angelo "Voodoo" for the feel. If it sounds sloppy instead of groovy, pull the snare back closer to the grid.'
    }],
    bass: {
      lab: 'upright', plugin: 'FLEX upright bass or BooBass', is808: false, title: 'The walking bass',
      why: 'A **walking bass** plays one note per beat: root, 3rd, 5th, then an approach note a semitone away from the next chord\'s root. It makes the loop feel like a live jazz band.',
      notes: '0:G2:4 4:Bb2:4 8:D3:4 12:B2:4 16:C3:4 20:E3:4 24:G3:4 28:E3:4 32:F2:4 36:A2:4 40:C3:4 44:C#3:4 48:D3:4 52:F3:4 56:A2:4 60:F#2:4'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 35 Hz, low-pass at 8 kHz (soft).'],
      ['Snare', 'High-pass at 150 Hz, low-pass at 9 kHz. Fruity Reeverb 2: small room, wet 15%.'],
      ['Hats', 'High-pass at 400 Hz, low-pass at 9 kHz.'],
      ['Rhodes', 'Fruity Parametric EQ 2: high-pass at 120 Hz. Vintage Chorus (subtle) or Vintage Phaser for movement. Fruity Reeverb 2, wet 15%.'],
      ['Trumpet / flute', 'High-pass at 250 Hz. Fruity Reeverb 2, wet 20%.'],
      ['Upright bass', 'Fruity Parametric EQ 2: high-pass at 35 Hz. Fruity Compressor, gentle.'],
      ['Drums bus', 'Fruity Compressor, gentle. Optional: Fruity Squeeze, very subtle, for SP-1200 grit.']
    ],
    arrangement: [['1–4', 'Intro', 'Rhodes alone.'], ['5–12', 'Hook', 'Everything.'], ['13–28', 'Verse 1', 'Drums, bass, Rhodes. Trumpet only every other 4 bars.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Drop the drums for bars 37–40 (Rhodes and bass only), then bring them back.'], ['53–60', 'Hook', 'Everything.'], ['61–64', 'Outro', 'Rhodes and trumpet, fade.']],
    vocals: ['Jazz rap vocals are relaxed and conversational. Keep the trumpet out of the verses.', 'Turn the Rhodes down 2 dB under the vocal, or carve a small cut at 2–4 kHz.', 'Use short silences (all instruments stop for one beat) as transitions instead of big risers.'],
    master: 'Fruity Parametric EQ 2 (gentle) → Fruity Limiter. Warm and dynamic: around −11 to −13 LUFS.',
    write: {
      progressions: [['ii9 – V13 – Imaj9 – vi9', 'Gm9 – C13 – Fmaj9 – Dm9', 'Jazz standard (this build)'], ['ii7 – V7', 'Gm7 – C7', 'Two-chord jazz vamp'], ['Imaj7 – vi7 – ii7 – V7', 'Fmaj7 – Dm7 – Gm7 – C7', 'Rhythm changes, classic'], ['iii7 – vi7 – ii7 – V7', 'Am7 – Dm7 – Gm7 – C7', 'Smooth, circle of fifths'], ['IVmaj7 – iii7', 'Bbmaj7 – Am7', 'Neo-soul float']],
      melody: ['Chord tones on strong beats, passing notes between.', 'Bluesy notes (the flat 3rd, Ab in F) add soul.', 'Breathe: leave space at the end of every phrase.', 'Horns, flute, vibraphone or Rhodes.'],
      bass: ['Walk: one note per beat.', 'Root, 3rd, 5th, then an approach note a semitone from the next root.', 'Warm upright or electric bass.'],
      drums: ['Simple patterns, loose timing.', 'Snare a little late.', 'Soft, dusty sounds.']
    },
    quiz: [{ q: 'How do you push the snare slightly late in FL Studio?', a: ['Raise the snare volume', 'Channel settings → Miscellaneous functions → Time → Shift', 'Use Fruity Reeverb 2', 'Change the tempo'], c: 1, why: 'The Shift knob delays every note on that channel by a few milliseconds.' }],
    watch: [['J Dilla drums in FL Studio', 'J Dilla drums FL Studio unquantized'], ['Jazz chords for hip-hop', 'jazz chords hip hop beat FL Studio Rhodes']]
  });

  A.flBuild({
    id: 'soul-sample',
    title: 'Soulful chipmunk-soul beat in Eb major',
    bpm: 92, key: 'Eb major', scale: 'Eb F G Ab Bb C D', feel: 'straight with a light swing', labSwing: 54,
    swing: 'a little (start around 15–25%)',
    goal: 'A soulful, uplifting beat in the style of early Kanye West and Just Blaze: warm piano chords, a soul-vocal line, big drums with tambourine, a bassline that moves like a 70s session player, and a sped-up "chipmunk" vocal chop.',
    sounds: [
      ['Kick', 'Sampler: a big, punchy kick', 'Fuller than boom bap.'],
      ['Snare', 'Sampler: a fat snare with a clap layer', 'Hard on 2 and 4.'],
      ['Hi-hat', 'Sampler: a closed hat', 'Steady 8ths.'],
      ['Tambourine', 'Sampler: a tambourine', 'Soul-record feel.'],
      ['Piano', 'FL Keys (grand piano)', 'Warm soul chords.'],
      ['Soul vocal', 'FLEX: a choir / "ooh" vocal preset', 'Plays the melody like a backing singer.'],
      ['Bass', 'FLEX electric bass, BooBass, or 3xOsc sine', 'A fingered electric bass sound.']
    ],
    chords: {
      lab: 'piano', plugin: 'FL Keys grand piano', roman: 'Imaj7 – vi7 – ii7 – V7',
      why: 'The classic soul turnaround: Ebmaj7 → Cm7 → Fm7 → Bb7. It feels warm and hopeful and keeps cycling back home. One chord per bar.',
      list: [[0, 16, 'Ebmaj7', 'Eb3 G3 Bb3 D4'], [16, 16, 'Cm7', 'C3 Eb3 G3 Bb3'], [32, 16, 'Fm7', 'F3 Ab3 C4 Eb4'], [48, 16, 'Bb7', 'F3 Ab3 Bb3 D4']],
      tips: ['Play the chords with a rhythm instead of one long note: hit on beat 1, the "and" of 2 and beat 4 for a gospel-piano feel.']
    },
    melody: {
      lab: 'vox', plugin: 'FLEX choir / vocal "ooh"',
      why: 'A singing soul line, the kind of phrase that would be a backing vocal on a 70s record. Long notes and a gentle fall at the end of each phrase.',
      notes: '0:Bb4:4 4:G4:2 6:Bb4:2 8:C5:4 12:Bb4:4 16:G4:6 22:Eb4:2 24:G4:4 28:Bb4:4 32:Ab4:4 36:C5:2 38:Eb5:2 40:D5:4 44:C5:4 48:Bb4:6 54:Ab4:2 56:F4:4 60:D4:4'
    },
    extra: [{
      after: 'melody', title: 'The chipmunk vocal chop',
      body: 'Kanye West and Just Blaze made "chipmunk soul" by speeding up soul records so the vocals got higher. You can do this with a vocal you record yourself or a royalty-free vocal phrase.\n\n' +
        '1. Drag the vocal audio into the Playlist. Click the clip\'s name → open its channel settings.\n' +
        '2. In the *Time stretching* section, set the mode to **Resample**. In this mode, pitch and speed change together, exactly like speeding up a record.\n' +
        '3. Turn the **Pitch** up by **3 or 4 semitones** (300–400 cents). The vocal gets faster and higher: the chipmunk sound.\n' +
        '4. Choose a pitch that keeps it in key with Eb major (check by ear against the piano), then load the result in **Slicex** and chop single words or syllables.\n' +
        '5. Play the chops in the Piano Roll on the off-beats or at the end of every 2nd bar as a hook. Add Fruity Reeverb 2 and a little Fruity Delay 3.\n\n' +
        '> Sampling a real soul record is the classic way, but every sample must be cleared before release. Royalty-free vocal packs or a singer you record are the safe options.'
    }],
    drums: {
      why: 'Big, head-nodding drums: kick and snare on a straight backbeat, steady hats and a tambourine that doubles the snare for that soul-record shine.',
      rows: {
        kick: 'x.....x...x.....' + 'x.....x.x.x.....',
        snare: '....x.......x...',
        chh: 'x.x.x.x.x.x.x.x.',
        perc: '....x.......x.x.'
      },
      names: { perc: 'Tambourine' }
    },
    bass: {
      lab: 'upright', plugin: 'FLEX electric bass, BooBass or 3xOsc sine', is808: false, title: 'The bassline',
      why: 'A soul bassline: roots on beat 1, the 5th below in the middle of the bar, and a passing note that leads into the next chord.',
      notes: '0:Eb2:6 6:Eb2:2 10:Bb1:4 14:D2:2 16:C2:6 22:C2:2 26:G1:4 30:Bb1:2 32:F2:6 38:F2:2 42:C2:4 46:A1:2 48:Bb1:6 54:Bb1:2 58:F1:4 62:D2:2'
    },
    mixer: [
      ['Kick', 'Fruity Parametric EQ 2: high-pass at 30 Hz, boost 70–90 Hz.'],
      ['Snare', 'High-pass at 120 Hz. Fruity Reeverb 2: plate-like setting, wet 15%.'],
      ['Hats / Tambourine', 'High-pass at 400 Hz. Pan the tambourine slightly right.'],
      ['Piano', 'Fruity Parametric EQ 2: high-pass at 120 Hz, low-pass at 10 kHz (warm). Fruity Reeverb 2, wet 15%.'],
      ['Soul vocal / Chops', 'High-pass at 250 Hz. Fruity Reeverb 2, wet 20%. Fruity Delay 3, 1/4, wet 10%.'],
      ['Bass', 'Fruity Parametric EQ 2: high-pass at 35 Hz. Fruity Compressor (4:1, 3 dB reduction).'],
      BUS
    ],
    arrangement: [['1–4', 'Intro', 'Piano and chipmunk chop. Tag.'], ['5–12', 'Hook', 'Everything, chop on every 2nd bar.'], ['13–28', 'Verse 1', 'Drums, bass, piano. Soul vocal out.'], ['29–36', 'Hook', 'Everything.'], ['37–52', 'Verse 2', 'Add strings (FLEX strings) for a lift halfway through.'], ['53–60', 'Hook', 'Everything.'], ['61–68', 'Outro', 'Piano, soul vocal and chops; drums out.']],
    vocals: ['Keep the chipmunk chop out from under the rap verses, or only on the last beat of every 4th bar.', 'A drum fill or a snare roll (16ths) into each hook.', 'Lift the last hook with an extra layer (strings or a second vocal).'],
    master: 'Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB). Around −9 to −10 LUFS.',
    write: {
      progressions: [['Imaj7 – vi7 – ii7 – V7', 'Ebmaj7 – Cm7 – Fm7 – Bb7', 'Warm soul (this build)'], ['IVmaj7 – iii7 – vi7', 'Abmaj7 – Gm7 – Cm7', 'Gospel, emotional'], ['I – iii – IV – iv', 'Eb – Gm – Ab – Abm', 'Bittersweet soul (borrowed iv)'], ['vi7 – ii7 – V7 – Imaj7', 'Cm7 – Fm7 – Bb7 – Ebmaj7', 'Classic turnaround']],
      melody: ['Write like a soul singer: long notes, falling phrases.', 'Use choir, strings, or a real vocal.', 'Make one short phrase the "hook" chop.'],
      bass: ['Roots, 5ths and passing notes like a 70s session bassist.', 'Fingered electric bass tone.'],
      drums: ['Big kick and snare on a straight backbeat.', 'Tambourine with the snare.', 'Hard fills into hooks.']
    },
    quiz: [{ q: 'Which FL Studio stretch mode changes pitch and speed together, like speeding up a record?', a: ['Resample', 'E3 mono', 'Auto', 'Stretch'], c: 0, why: 'Resample mode makes higher pitch play faster, which creates the chipmunk-soul sound.' }],
    watch: [['Chipmunk soul in FL Studio', 'chipmunk soul beat FL Studio tutorial'], ['Old Kanye style beat', 'old Kanye type beat FL Studio soul sample']]
  });

  // The CHOP text uses {bpm}; fill it in for each build that includes it.
  ['boom-bap'].forEach(function (id) {
    const s = A.flSpecs[id];
    s.extra = s.extra.map(function (e) { return e === CHOP ? Object.assign({}, e, { body: e.body.replace('{bpm}', s.bpm) }) : e; });
  });
  A.flChop = CHOP;
})();
