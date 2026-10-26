(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's5',
  no: 5,
  title: 'Recording, Arrangement & Vocal Production',
  tagline: 'Record vocals and instruments, program realistic MIDI, arrange full songs, and produce vocals like the records you love.',
  weeks: 5,
  outcomes: [
    'Choose and place microphones correctly',
    'Run a professional vocal session and comp the best take',
    'Record guitars, bass, keys and understand drum mic setups',
    'Program realistic MIDI instruments',
    'Arrange a loop into a full song with energy and contrast',
    'Tune, align, stack and creatively process vocals'
  ],
  lessons: [
    {
      id: 'rec-mics',
      title: 'Microphones and How to Use Them',
      minutes: 45,
      summary: 'Dynamic, condenser and ribbon mics, polar patterns, phantom power, proximity effect and preamps.',
      objectives: ['Choose a mic type for a source and room', 'Use polar patterns to reject unwanted sound', 'Control proximity effect and gain'],
      body: `
## Mic types
| Type | How it works | Strengths | Classic examples |
|---|---|---|---|
| **Dynamic** | Coil moving in a magnet | Durable, handles loud sources, rejects room sound, no power needed | Shure SM57, SM58, SM7B, Electro-Voice RE20 |
| **Large-diaphragm condenser (LDC)** | Charged diaphragm, needs 48V phantom power | Detailed, sensitive, airy vocals | Neumann U87 and TLM 103, AKG C414, Audio-Technica AT2020, Rode NT1 |
| **Small-diaphragm condenser (SDC)** | Small charged diaphragm | Accurate transients | Acoustic guitar, overheads, hand percussion |
| **Ribbon** | Thin metal ribbon | Smooth, vintage, natural highs roll-off | Royer R-121, Coles 4038; guitar amps, brass, room mics |

**Untreated bedroom?** A dynamic mic (like the SM7B or SM58) close to the source often beats an expensive condenser that captures every reflection.

## Polar patterns
- **Cardioid**: picks up the front, rejects the back. The default for vocals.
- **Supercardioid / hypercardioid**: tighter front pickup, a little rear sensitivity.
- **Figure-8**: front and back, rejects the sides. Duets, Blumlein stereo, mid-side recording.
- **Omni**: all directions. Natural sound in a great room; captures room sound.

## Phantom power
Condensers need **+48V phantom power** from your interface. Dynamics do not need it. Modern ribbons can be damaged by faulty cables with phantom on, so turn it off when connecting ribbon mics unless the manual says otherwise.

## Proximity effect
Directional mics boost bass as the source gets closer. Use it for a warm, intimate radio voice, or back off to reduce boominess. Keep the singer's distance consistent.

## Gain staging when recording
- Set preamp gain while the performer sings the **loudest** part.
- Aim for peaks around **-10 to -6 dBFS** at 24-bit.
- Use the interface's **pad** switch for very loud sources.

## Preamps
The preamp raises mic level to line level. Modern interfaces have clean preamps. Dedicated preamps (Neve-style, API-style, tube) add colour, but technique matters far more.

## Placement fundamentals
- Move the mic before reaching for EQ.
- Off-axis (angled) placement reduces harshness and plosives.
- Use the **3:1 rule** with multiple mics: the distance between mics should be at least three times the distance from each mic to its source, to reduce phase problems.
`,
      steps: [
        'Identify the type and polar pattern of any mic you own (check the manual).',
        'Record the same spoken sentence at 5 cm, 15 cm and 30 cm. Listen for proximity effect.',
        'Record the sentence on-axis and 30 degrees off-axis. Compare harshness.',
        'If you have a condenser, enable phantom power and record. Compare with a dynamic if available.',
        'Set gain while shouting the loudest line; check peaks stay below -6 dBFS.',
        'Write down the best distance and angle for your voice.'
      ],
      tips: ['Mark the floor where the singer stands with tape to keep distance consistent.', 'Record a test take and listen on headphones before the real takes.'],
      mistakes: ['Recording too hot and clipping on loud notes.', 'Using a condenser in a reflective, untreated room.', 'Forgetting phantom power and thinking the mic is broken.'],
      assignment: {
        title: 'Mic Shootout',
        brief: 'Find the best mic technique for your voice and room.',
        deliverables: ['Recordings at 3 distances and 2 angles', 'A comparison note (warmth, clarity, room sound)', 'Your chosen vocal setup written in your journal']
      },
      quiz: [
        { q: 'Which mic type is usually better in an untreated bedroom?', a: ['Omni condenser', 'Dynamic', 'Ribbon in figure-8', 'Any condenser'], c: 1, why: 'Dynamics are less sensitive to room reflections.' },
        { q: 'What is the proximity effect?', a: ['More treble when close', 'Bass boost when a directional mic is close to the source', 'Phase cancellation', 'Clipping'], c: 1, why: 'Directional mics gain low end as distance shrinks.' },
        { q: 'Which mics need +48V phantom power?', a: ['Dynamics', 'Condensers', 'All mics', 'None'], c: 1, why: 'Condenser capsules need power to work.' }
      ]
    },
    {
      id: 'rec-vocals',
      title: 'Recording Vocals Like a Pro',
      minutes: 60,
      summary: 'Booth setup, mic technique, headphone mixes, performance coaching, punch-ins, playlists and comping.',
      objectives: ['Set up a clean vocal recording space', 'Run a session that gets great performances', 'Comp the best take from multiple passes'],
      body: `
## The space
- Record in the **deadest** spot you have: a closet full of clothes is a classic home booth.
- A **reflection filter** behind the mic helps, but treating the wall **behind the singer** matters most (the mic hears what is behind the singer).
- Hang thick blankets or duvets around the singer.
- Turn off fans, AC and noisy computers during takes.

## Mic setup
- **Pop filter** 5–10 cm in front of the mic to stop plosives (P and B bursts).
- Singer **15–30 cm** from the mic (closer for intimate R&B and rap, further for powerful belting).
- Mic at mouth or nose height, slightly angled.
- Record **dry**: no reverb printed into the recording. Add effects later.

## Levels
Record at 24-bit with **average around -18 dBFS** and peaks up to about -6 dBFS. Some engineers record through light compression; beginners should record clean.

## The headphone mix
A comfortable artist sings better.
- Give them the beat at a comfortable level and their voice clearly on top.
- A little reverb in their **headphones only** (not recorded) makes singers more confident.
- Use **direct monitoring** or low-latency settings so there is no delay.
- Closed-back headphones prevent the beat bleeding into the mic.

## Running the session
1. Warm-up and a test take.
2. **Full takes** first: record the whole song 2–3 times for vibe.
3. **Section passes**: record each section several times in **loop / playlist mode** (takes stack in lanes).
4. **Punch-ins** for specific lines.
5. **Doubles, harmonies and ad-libs** last.

## Coaching performances
- Explain the story and emotion of the song.
- Give one specific note at a time ("more breathy on the first line").
- Praise what works; keep the energy positive.
- Know when to stop: vocal fatigue makes takes worse.

## Comping
Comping = building the best performance from several takes.
1. Listen to each take of one line.
2. Mark your favourite (rate takes with stars or colours).
3. Select the best phrase, word or even syllable from each take.
4. Crossfade every edit so there are no clicks.
5. Consolidate the comp into one clean track.

All major DAWs support take folders / comp lanes (Logic, Pro Tools, Ableton 11+, FL Studio playlist tracks, Cubase lanes).

## File management
Name tracks before recording ("LeadVox", "Dbl_L", "Harm_High", "Adlibs") so every take is named correctly. Back up after every session.
`,
      steps: [
        'Prepare your space: blankets behind the singer, pop filter, noise sources off.',
        'Create tracks named LeadVox, Dbl_L, Dbl_R, Harm, Adlibs.',
        'Build a headphone mix with a little monitoring reverb that is not recorded.',
        'Record 3 full takes of a verse and chorus (yours or a friend\'s, or a cover song).',
        'Record 4 loop-mode passes of the chorus.',
        'Comp the best lead vocal from all takes with crossfades.',
        'Record 2 doubles of the chorus and a few ad-libs.',
        'Back up the session.'
      ],
      tips: ['Room-temperature water, not ice-cold drinks, for singers.', 'Record everything, including warm-ups; magic moments happen unexpectedly.'],
      mistakes: ['Printing reverb or heavy effects into the recording.', 'Exhausting the singer with too many takes of one line.', 'No crossfades between comp edits, causing clicks.'],
      assignment: {
        title: 'Vocal Session',
        brief: 'Run a complete vocal session from setup to comp.',
        deliverables: ['A comped lead vocal of at least a verse and chorus', 'Two chorus doubles and some ad-libs', 'Photos of your recording setup', 'Session notes: what worked, what to improve']
      },
      quiz: [
        { q: 'What is comping?', a: ['Compressing vocals', 'Combining the best parts of several takes into one performance', 'Tuning', 'Adding reverb'], c: 1, why: 'Comping assembles the ideal take.' },
        { q: 'Which surface matters most to treat when recording vocals?', a: ['The ceiling far away', 'The wall behind the singer', 'The floor under the desk', 'Windows on the other side'], c: 1, why: 'A cardioid mic faces the singer and picks up reflections from behind them.' },
        { q: 'Why record vocals dry?', a: ['Reverb is illegal', 'So effects can be chosen and changed later in the mix', 'Dry sounds louder', 'It saves CPU'], c: 1, why: 'Printed reverb cannot be removed.' }
      ]
    },
    {
      id: 'rec-instruments',
      title: 'Recording Instruments',
      minutes: 50,
      summary: 'Guitar amps and DI, acoustic guitar, bass, keys, and an introduction to live drum miking.',
      objectives: ['Record electric and acoustic guitar and bass', 'Understand DI, amp sims and reamping', 'Know standard drum mic setups'],
      body: `
## Electric guitar
- **DI (direct input)**: plug into the interface's Hi-Z/instrument input. Record clean and use **amp simulators** (Neural DSP, Line 6 Helix Native, IK Amplitube, Guitar Rig, or your DAW's stock amps).
- **Mic'd amp**: a dynamic mic (SM57) close to the speaker grille.
  - Pointed at the **centre** of the cone: bright, aggressive.
  - Pointed toward the **edge** of the cone: darker, smoother.
- **Reamping**: record DI, then later send it back out to a real amp and mic it. Gives tone flexibility after the performance.
- Record a DI alongside the amp so you can always change the tone.
- **Double-track** rhythm parts (play twice, pan hard left and right) for a huge sound.

## Acoustic guitar
- A small-diaphragm or large-diaphragm condenser about 15–30 cm away, pointed where the **neck meets the body** (around the 12th–14th fret).
- Avoid pointing straight at the sound hole (boomy).
- For stereo: a second mic near the bridge or an XY pair.

## Bass guitar
- Record **DI** for clean, solid low end.
- Optionally mic the bass amp too and blend.
- Even playing dynamics matter more than any plugin; light compression while tracking can help.

## Keys and synths
- Record hardware synths and keyboards in **stereo** through line inputs.
- Always record MIDI at the same time if the instrument supports it.
- For acoustic pianos: a pair of condensers inside or above the strings, or spaced in front of an upright.

## Live drums (overview)
Typical setup in a studio:
| Mic | Position | Common mics |
|---|---|---|
| Kick in / out | Inside the port / outside the front head | AKG D112, Shure Beta 52, Audix D6 |
| Snare top (and bottom) | 2–5 cm above the rim, angled at the centre | SM57 |
| Toms | Close, angled at each head | Sennheiser MD421, e604 |
| Overheads | Spaced pair, XY or ORTF above the kit | Pair of condensers |
| Room | A few metres away | Condenser or ribbon |

The **Glyn Johns** method uses just 3–4 mics (kick, snare, and two overheads at equal distance from the snare) for a natural sound.

**Phase**: multiple drum mics hear the same drums at slightly different times. Check polarity on the snare bottom mic (usually inverted) and align overheads with close mics.

## Session musicians
Remote session players (guitar, strings, horns) can record parts for your songs online. Send stems, tempo, key, chord charts and references.
`,
      steps: [
        'If you have a guitar or bass, record a DI part and try two amp simulator settings.',
        'If you have a mic and amp, record with the mic at the centre and then the edge of the cone; compare.',
        'Record an acoustic instrument (or your voice) with the mic at two positions.',
        'Record a part twice and pan the takes hard left and right.',
        'If you have no instruments, record a household object as a percussion instrument with good technique.',
        'Write a mic plan for a 4-piece band (instruments, mics, inputs).'
      ],
      tips: ['Tune guitars before every take; tuning drifts.', 'Fresh strings and drum heads make a bigger difference than expensive mics.'],
      mistakes: ['Recording guitar only through amp sims with no DI backup in a heavy-tone situation you cannot reamp.', 'Ignoring phase when using two mics on one source.'],
      assignment: {
        title: 'Instrument Recording',
        brief: 'Capture at least one real instrument well.',
        deliverables: ['A DI recording with two different amp sim tones (or a mic\'d acoustic source at two positions)', 'A double-tracked part panned wide', 'A written band mic plan with input list']
      },
      quiz: [
        { q: 'Where do you aim a mic on an acoustic guitar for a balanced sound?', a: ['Straight into the sound hole', 'Around where the neck joins the body', 'At the headstock', 'At the floor'], c: 1, why: 'Around the 12th–14th fret gives balance without boominess.' },
        { q: 'What is reamping?', a: ['Recording twice', 'Sending a recorded DI back through an amp to re-record it', 'Turning the amp louder', 'A type of compression'], c: 1, why: 'Reamping lets you choose amp tone after the performance.' },
        { q: 'Which mic is the classic choice for snare and guitar amps?', a: ['Shure SM57', 'Neumann U87', 'Ribbon only', 'Measurement mic'], c: 0, why: 'The SM57 is durable and focused, ideal for close miking.' }
      ]
    },
    {
      id: 'rec-midi',
      title: 'Realistic MIDI and Virtual Instruments',
      minutes: 50,
      summary: 'Velocity, timing, articulations, keyswitches, CC automation and voicings that make virtual instruments believable.',
      objectives: ['Program believable piano, strings, guitar and brass', 'Use CC1, CC11 and CC64', 'Choose and use virtual instrument libraries'],
      body: `
## Why MIDI often sounds fake
- Every note at the same velocity.
- Perfect grid timing.
- Notes no human could play (impossible voicings, no breaths).
- Ignoring articulations (legato, staccato, pizzicato).

## The realism checklist
1. **Velocity**: vary it and shape phrases (crescendos, softer endings).
2. **Timing**: play parts in live, quantise partially, or nudge notes slightly.
3. **Voicing**: keep piano chords playable by two hands; guitar chords should match real guitar shapes.
4. **Note length**: real players do not hold every note to the full value.
5. **Breaths**: wind and brass players need gaps to breathe.

## MIDI CCs to know
| CC | Name | Use |
|---|---|---|
| CC1 | Mod wheel | Dynamics on orchestral libraries, vibrato on synths |
| CC7 | Volume | Track volume |
| CC10 | Pan | Panning |
| CC11 | Expression | Fine volume shaping within phrases (strings, winds) |
| CC64 | Sustain pedal | Piano sustain |

For orchestral strings, draw smooth **CC1 (dynamics)** and **CC11 (expression)** curves to make phrases swell and fade.

## Articulations and keyswitches
Sample libraries record different playing styles (legato, staccato, spiccato, pizzicato, tremolo). **Keyswitches** (notes outside the playing range) switch between them. Modern libraries may use articulation maps or MIDI channels.

## Instrument-specific tips
- **Piano**: use sustain pedal CC64; spread voicings; vary velocity between hands.
- **Strings**: legato patches for melodies, short articulations for rhythm; layer octaves (violins, violas, cellos, basses).
- **Guitar**: strum chords by offsetting each note 10–30 ms (downstrokes low-to-high, upstrokes high-to-low).
- **Brass**: keep in realistic ranges; use swells; layer horns in octaves and fifths.
- **Drums**: vary hi-hat velocity; never hit a crash and ride simultaneously in the same hand pattern humans cannot play.

## Libraries
- **Free**: Spitfire LABS, Decent Sampler instruments, your DAW's stock instruments.
- **Popular paid**: Native Instruments Kontakt libraries, Spitfire Audio, Orchestral Tools, Spectrasonics Keyscape and Omnisphere, EastWest.
- Sample libraries need fast SSD storage and enough RAM.
`,
      steps: [
        'Program an 8-bar piano part with sustain pedal (CC64) and varied velocity.',
        'Program a string melody on a legato patch and draw CC1 and CC11 swells.',
        'Program a strummed guitar chord with 15 ms offsets between notes.',
        'Program a 4-bar brass part with breath gaps.',
        'Compare a fully quantised version of one part with your humanised version.',
        'Install one free library (e.g. Spitfire LABS) and explore its articulations.'
      ],
      tips: ['Listen to real players and imitate their phrasing.', 'Record parts live, even if imperfectly, and edit afterwards.'],
      mistakes: ['Impossible voicings and ranges.', 'Static dynamics in orchestral parts.'],
      assignment: {
        title: 'Virtual Band',
        brief: 'Make a short piece where virtual instruments sound performed.',
        deliverables: ['An 8–16 bar arrangement with piano, strings, guitar or brass', 'CC automation on at least 2 instruments', 'A before (quantised) and after (humanised) export']
      },
      quiz: [
        { q: 'Which CC controls the sustain pedal?', a: ['CC1', 'CC7', 'CC11', 'CC64'], c: 3, why: 'CC64 is the standard sustain pedal controller.' },
        { q: 'What does a keyswitch do?', a: ['Changes the key of the song', 'Switches articulations in a sample library', 'Turns on the metronome', 'Transposes all MIDI'], c: 1, why: 'Keyswitches select playing styles.' },
        { q: 'How do you make a MIDI guitar strum realistic?', a: ['Play all notes at once', 'Offset each note slightly in time', 'Add reverb', 'Use only root notes'], c: 1, why: 'Real strums hit strings one after another.' }
      ]
    },
    {
      id: 'arr-structure',
      title: 'Arrangement: From Loop to Full Song',
      minutes: 60,
      summary: 'Song structures by genre, energy mapping, arrangement by reference, the subtractive method and layering roles.',
      objectives: ['Map energy across a song', 'Arrange using references and the subtractive method', 'Keep listener interest every 4–8 bars'],
      body: `
## What arrangement is
Arrangement decides **what plays when**. A great loop becomes a great song only through arrangement: contrast, build, release and surprise.

## Structures by genre
| Genre | Typical structure | Notes |
|---|---|---|
| Pop | Intro – Verse – Pre – Chorus – Verse – Pre – Chorus – Bridge – Chorus – Outro | Chorus by about 45–60 seconds |
| Hip-hop | Intro (4–8) – Hook (8) – Verse (16) – Hook – Verse – Hook – Outro | Beats often 2:30–3:30 |
| EDM / house (club) | Intro (16–32) – Build – Drop – Breakdown – Build – Drop – Outro (16–32) | DJ-friendly intros/outros in 8-bar multiples |
| Radio EDM | Intro – Verse – Build – Drop – Verse – Build – Drop – Outro | Vocals in verses, drop replaces chorus |
| Rock | Intro – Verse – Chorus – Verse – Chorus – Solo/Bridge – Chorus – Outro | Guitar solo often in bridge spot |
| Afrobeats / Amapiano | Intro – Verse – Hook – Verse – Hook – Instrumental/Bridge – Hook | Amapiano often has long, evolving sections |

## The energy map
Draw a line graph of energy over time (1 = quiet, 10 = maximum). Most songs:
- Start low to medium.
- Rise into each chorus or drop.
- Dip after the second chorus (bridge or breakdown).
- Peak at the final chorus or drop.
- End with release.

## Layer roles
Every section uses a selection of these:
- **Foundation**: kick, bass/808.
- **Rhythm**: snare, hats, percussion, rhythmic guitar or keys.
- **Harmony**: pads, chords.
- **Lead**: vocal, hook melody.
- **Fills / ear candy**: FX, counter-melodies, transitions.

Contrast comes from adding and removing roles. A verse might drop the pads and lead synth; the chorus adds everything plus a doubled vocal.

## Arranging methods
1. **Subtractive method**: copy your full 8-bar loop across 3 minutes, then delete and mute parts to create sections. Fast and effective.
2. **Arrange by reference**: drag a reference song into your project, set its tempo, place markers at each section change, and mirror the structure.
3. **Build-up method**: start from one element and add a new one every 4 or 8 bars.

## Keeping interest
- Change something every **4–8 bars**: a new layer, a drum variation, a filter, a fill, a vocal chop.
- Use **one-time events**: a breakdown or sound that appears only once.
- **Second verse** should differ from the first (add a counter-melody, new drum pattern, or strip back).
- **Final chorus** bigger than the first (extra harmonies, octave doubles, new percussion, key change).

## Length
Streaming-era songs are often 2:00–3:30. Club tracks are longer (5–7 minutes) for DJs. Beats for sale are typically 2:30–3:30 with a complete structure so artists can write a full song.
`,
      steps: [
        'Choose a reference song and drag it into your DAW. Set the tempo and add markers at each section.',
        'Draw an energy map (1–10) of the reference song in your journal.',
        'Take one of your 8-bar loops and copy it across the full length of the reference.',
        'Use the subtractive method to create intro, verses, choruses, bridge and outro.',
        'Add a change every 8 bars (fill, new layer or removal).',
        'Make the final chorus bigger than the first chorus.',
        'Draw your own track\'s energy map and compare it with the reference.'
      ],
      tips: ['Arrange before detailed mixing; arrangement solves many mix problems (fewer things fighting).', 'Mute the reference and listen to your arrangement alone with your eyes closed.'],
      mistakes: ['Every section using every layer, so nothing feels bigger.', 'Intros longer than 15 seconds on non-club songs.', 'Copy-pasting verse 1 into verse 2 with no changes.'],
      assignment: {
        title: 'Loop to Song',
        brief: 'Turn a loop into a fully arranged song that holds attention.',
        deliverables: ['A full arrangement (2:30+) built from one loop', 'Energy maps of your track and the reference', 'At least 6 arrangement changes listed with bar numbers', 'An exported WAV']
      },
      quiz: [
        { q: 'What is the subtractive arrangement method?', a: ['Removing the bass only', 'Copying the full loop across the song, then muting parts to make sections', 'Making the song shorter', 'Lowering volume over time'], c: 1, why: 'Subtracting layers creates contrasting sections quickly.' },
        { q: 'How often should something change to keep interest?', a: ['Every 64 bars', 'Every 4–8 bars', 'Never', 'Only at the end'], c: 1, why: 'Regular changes keep the listener engaged.' },
        { q: 'Why do club tracks have long intros and outros?', a: ['To fill time', 'So DJs can mix them', 'Labels require it', 'They are cheaper to make'], c: 1, why: 'DJs need beat-only sections to blend tracks.' }
      ]
    },
    {
      id: 'arr-transitions',
      title: 'Tension, Release, Build-Ups and Drops',
      minutes: 45,
      summary: 'Build-ups, drops, breakdowns, pre-chorus lifts, silence, and automation that creates excitement.',
      objectives: ['Create build-ups that pay off', 'Design powerful drops and choruses', 'Use automation to create tension'],
      body: `
## Tension and release
Music works by creating expectation and then rewarding it. Tension tools:
- Rising pitch (risers, snare rolls with pitch, melody climbing).
- Increasing rhythmic density (8ths → 16ths → 32nds).
- Filter opening (low-pass sweeping up) or closing (high-pass on the whole mix).
- Removing the kick or bass.
- Harmonic tension (holding the V chord, suspensions).
- Rising volume and reverb.

Release tools:
- The kick and bass returning.
- The full chorus or drop.
- A big impact and crash.
- Resolving to the tonic.

## Anatomy of an EDM build-up (8 bars)
| Bars | What happens |
|---|---|
| 1–2 | Remove kick and bass; chords and vocal continue |
| 3–4 | Snare in quarter notes; high-pass filter starts rising |
| 5–6 | Snare in 8ths, riser gets louder |
| 7 | Snare in 16ths, pitch rising, vocal chop stutters |
| 8 | 32nd snare roll or a full stop (silence) for one beat |
| Drop | Kick, bass, lead and impact all land together |

## The gap
A half-bar or full-bar of **silence** (or just a vocal) before the drop is one of the most powerful tools in music. The contrast makes the drop hit harder.

## Pre-chorus lift
- Change the chord rhythm (from whole notes to pushing 8ths).
- Melody rises.
- Drums simplify or build.
- Ends on a tension chord (often IV or V) that resolves into the chorus.

## Breakdowns and bridges
After the second chorus or drop, bring energy down: strip back to chords and vocal, introduce a new melody or new chords. This makes the final section feel fresh.

## Automation for movement
- **Filter sweeps** on synths or the music bus.
- **Reverb send rises** at the end of phrases ("washing out").
- **Volume rides** to push sections.
- **Panning** movement on FX.
- **Pitch** automation for risers and tape stops.
`,
      steps: [
        'Build an 8-bar EDM-style build-up following the table.',
        'Insert one beat of silence before the drop and compare with no gap.',
        'Create a pre-chorus where the melody rises and the last chord creates tension.',
        'Automate a high-pass filter on the music bus during the build.',
        'Add a reverb wash at the end of a section.',
        'Design a breakdown that strips back to chords and vocal only.'
      ],
      tips: ['A drop is only as big as the build before it.', 'Try unexpected releases: a half-time drop or a stripped-back chorus can be more powerful than a louder one.'],
      mistakes: ['Builds with no payoff.', 'Every transition using the same riser and crash.'],
      assignment: {
        title: 'Build and Drop',
        brief: 'Create a section that makes listeners lean in, then rewards them.',
        deliverables: ['An 8-bar build-up with at least 4 tension techniques', 'A drop or chorus with impact', 'A breakdown section', 'An exported 1-minute excerpt']
      },
      quiz: [
        { q: 'Which is a release tool?', a: ['Removing the kick', 'The kick and bass returning in the drop', 'A rising filter', 'A snare roll'], c: 1, why: 'Bringing back the foundation releases tension.' },
        { q: 'Why use a moment of silence before a drop?', a: ['To fix clipping', 'Contrast makes the drop hit harder', 'To save CPU', 'It is required in EDM'], c: 1, why: 'The ear resets, and the drop feels huge.' },
        { q: 'A pre-chorus usually ends on...', a: ['The tonic chord', 'A tension chord that resolves into the chorus', 'Silence always', 'A key change'], c: 1, why: 'Ending on IV or V creates pull into the chorus.' }
      ]
    },
    {
      id: 'voc-production',
      title: 'Vocal Production: Editing, Tuning, Stacks and FX',
      minutes: 60,
      summary: 'Timing alignment, pitch correction, doubles, harmonies, ad-libs and creative vocal effects.',
      objectives: ['Edit and align vocals cleanly', 'Use pitch correction naturally and as an effect', 'Arrange doubles, harmonies and ad-libs'],
      body: `
## Editing
- Remove noises between phrases (or lower them with clip gain); keep natural breaths but reduce loud ones by 6–12 dB.
- Fix plosives with a high-pass filter on just that word or a short fade.
- **Clip gain**: even out loud and quiet words before compression.
- **Timing**: nudge late or early words to the grid feel. Align doubles to the lead with tools like VocAlign or Revoice Pro, or by hand (Logic's Flex Time, Pro Tools Elastic Audio, Ableton warp).

## Pitch correction
- **Auto-Tune (Antares)** and similar plugins (Waves Tune, MetaTune, Logic Pitch Correction, Graillon, MAutoPitch free).
  - Set the **key and scale** correctly.
  - **Retune speed**: slow (20–50 ms) for natural correction; **0 ms** for the hard-tuned effect heard in trap, R&B and pop.
  - **Humanize**: keeps sustained notes natural.
- **Melodyne** (and Logic Flex Pitch): note-by-note graphical editing for transparent correction: pitch centre, drift, vibrato, timing and formant.

Natural correction tip: fix only the notes that need it. Over-tuned held notes sound robotic unless that is the goal.

## Doubles
A double is a second performance of the same part.
- **Tight doubles** panned left and right (or one centred under the lead at lower volume) make vocals thick.
- Hip-hop: doubles often emphasise only the last words of lines.
- Pop: the whole chorus is often doubled or tripled.

## Harmonies
- Common intervals above the lead: **3rd** and **5th**; also **octave** above or below.
- Stack several harmony takes and pan them across the stereo field.
- Lower harmonies (a 3rd or 6th below) add warmth.
- Keep harmonies quieter than the lead; process them darker and wider.

## Ad-libs
Short shouts, phrases and responses in the gaps between lead lines. Pan them, add delay throws, and keep them out of the way of the lead.

## Arrangement of vocal layers (typical modern pop chorus)
- Lead (centre)
- Doubles (left and right, 6–10 dB below lead)
- Harmonies high (wide)
- Octave low (centre, quiet)
- Ad-libs (various positions)
- Vocal chops / post-chorus hook

## Creative vocal effects
- **Hard tune** with fast retune speed.
- **Formant shifting**: change character without changing pitch (deeper or chipmunk timbre).
- **Telephone/radio EQ**: band-pass around 300 Hz–3 kHz.
- **Throw delays** on the last word of a line.
- **Reverse reverb** into a phrase.
- **Vocoder and talkbox**-style effects.
- **Distortion** for aggression.
- **Pitch-shifted octave layers** for a unique texture.
`,
      steps: [
        'Clean a comped lead vocal: remove noises, tame loud breaths, fix plosives.',
        'Use clip gain to even out word levels.',
        'Apply natural pitch correction (correct key, slow retune, humanize).',
        'Duplicate the vocal, apply hard tuning (fast retune) and compare.',
        'Record or create two doubles and align them to the lead.',
        'Add a harmony a 3rd above in the chorus.',
        'Add 3 ad-libs with delay throws.',
        'Try one creative effect (formant shift or telephone EQ) on a bridge line.'
      ],
      tips: ['Tune before you compress so the compressor reacts to the final performance.', 'Use the same vocal chain on doubles for consistency, then darken them slightly.'],
      mistakes: ['Wrong key in Auto-Tune, causing notes to snap to wrong pitches.', 'Doubles louder than the lead.', 'Cutting every breath, which sounds unnatural.'],
      assignment: {
        title: 'Vocal Production Pass',
        brief: 'Produce a lead vocal into a finished, layered vocal arrangement.',
        deliverables: ['Edited and tuned lead vocal', 'Doubles and at least one harmony layer in the chorus', 'Ad-libs with effects', 'One creative vocal effect', 'Before/after export']
      },
      quiz: [
        { q: 'What retune speed creates the hard-tuned effect?', a: ['Very slow (200 ms)', 'Very fast (around 0 ms)', '50% humanize', 'Retune speed has no effect'], c: 1, why: 'Instant correction snaps notes and creates the stepped effect.' },
        { q: 'What is formant shifting?', a: ['Changing pitch and speed', 'Changing vocal character without changing pitch', 'Adding reverb', 'Time-stretching'], c: 1, why: 'Formants are the resonances that shape vocal timbre.' },
        { q: 'Common harmony intervals above the lead are...', a: ['2nds and 7ths', '3rds and 5ths', 'Tritones', 'Unisons only'], c: 1, why: '3rds and 5ths blend naturally.' }
      ]
    },
    {
      id: 'rec-project',
      title: 'Semester Project: Record and Arrange a Full Song',
      minutes: 900,
      project: true,
      summary: 'Produce a complete song with recorded vocals, arranged with full structure and vocal production.',
      objectives: ['Combine recording, arrangement and vocal production into one finished song'],
      body: `
## The brief
Produce a complete song (2:30–3:30) with **recorded vocals** (yours, a friend's or a collaborator's). You can use the song you wrote in Semester 2.

Requirements:
- Full structure with at least verse, chorus and bridge or breakdown.
- At least one live-recorded element besides vocals (instrument, percussion, foley) or a realistically programmed MIDI instrument.
- Comped and tuned lead vocal, doubles, harmonies and ad-libs.
- A build-up or pre-chorus lift and a strong final chorus.
- Energy map attached.

## Working with a collaborator
Agree splits before or right after the session on a split sheet. Share a rough mix within 48 hours to keep momentum.
`,
      steps: ['Pre-production: tempo, key, structure, reference', 'Beat or instrumental arranged', 'Vocals recorded', 'Comping and editing', 'Tuning, doubles, harmonies, ad-libs', 'Arrangement polish and transitions', 'Rough mix exported'],
      assignment: {
        title: 'Song #2: Fully Produced',
        brief: 'A complete produced song ready for mixing in Semester 6.',
        deliverables: ['The arranged session with all recordings', 'A rough mix WAV', 'Energy map', 'Split sheet (if collaborating)', 'Session notes']
      },
      quiz: [
        { q: 'When should collaborator splits be agreed?', a: ['After the song earns money', 'At or right after the session', 'Never', 'After release'], c: 1, why: 'Early agreement prevents disputes.' },
        { q: 'Which is required in this project?', a: ['An orchestra', 'Comped and tuned vocals with layers', 'A music video', 'A mastered file'], c: 1, why: 'Vocal production is a key part of the brief.' }
      ]
    }
  ]
});
