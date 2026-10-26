(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's3',
  no: 3,
  title: 'Beats, Rhythm & Drum Programming',
  tagline: 'Choose drum sounds, program grooves, humanise, layer and process drums like a pro.',
  weeks: 4,
  outcomes: [
    'Pick and tune drum samples that fit together',
    'Program the core grooves of every major genre',
    'Make programmed drums feel human with velocity, swing and timing',
    'Layer and process kicks and snares for punch',
    'Write fills, transitions and percussion layers'
  ],
  lessons: [
    {
      id: 'r-kit',
      title: 'Anatomy of Drum Sounds',
      minutes: 40,
      summary: 'Kick, snare, clap, hats, cymbals, toms, percussion and 808, plus the classic drum machines.',
      objectives: ['Describe the parts of each drum sound', 'Know the famous drum machines and their sound', 'Choose samples that fit a track'],
      body: `
## The parts of a drum hit
Every drum sound has:
- **Transient**: the first few milliseconds, the attack or "click". It gives punch and position.
- **Body**: the tone and pitch that follows.
- **Tail / decay**: how long it rings out.

## The kit
| Drum | Key frequencies | Role |
|---|---|---|
| Kick | Sub 40–60 Hz, body 60–120 Hz, click 2–5 kHz | The heartbeat; usually on strong beats |
| Snare | Body 150–250 Hz, crack 1–3 kHz, wires/sizzle 5–10 kHz | The backbeat (beats 2 and 4) |
| Clap | 1–3 kHz, multiple quick transients | Layered with or replacing the snare |
| Closed hi-hat | 6–12 kHz | Subdivision, energy, groove |
| Open hi-hat | 5–12 kHz, longer tail | Lift and offbeat drive |
| Ride / crash | 3–15 kHz | Sections, accents |
| Toms | 80–300 Hz | Fills |
| Percussion (shakers, congas, rims, cowbell, tambourine) | Varies | Groove, culture, movement |
| 808 | Tuned sub, 30–100 Hz fundamental | Bass and kick in one (trap, drill) |

## Legendary drum machines
- **Roland TR-808** (1980): booming tuned kick, snappy snare, cowbell, claps. The foundation of hip-hop, electro, Miami bass, trap.
- **Roland TR-909** (1983): punchy kick, sampled hats and cymbals. The sound of house and techno.
- **LinnDrum / LM-1**: sampled real drums; 1980s pop and Prince.
- **E-mu SP-1200 and Akai MPC series**: samplers with gritty character and swing that defined boom bap and golden-age hip-hop.
- **Roland CR-78** and others: vintage rhythm machine flavours.

Most DAWs and sample packs include sounds modelled on these.

## Choosing samples
1. **Choose for the genre**: a 909 kick in a lo-fi beat feels wrong; a dusty vinyl kick in hard techno feels weak.
2. **Choose in context**: audition samples with the whole loop playing, not soloed.
3. **Tune them**: kicks, snares and toms have pitch. Tune them to the key (often the root or 5th).
4. **Check the tail**: long tails can clutter a fast pattern.
5. **Phase and overlap**: kicks with lots of sub can clash with the bass.
6. **Less is more**: one great kick beats five layered average ones.

## Organising your drum library
Folders: Kicks / Snares / Claps / Hats Closed / Hats Open / Cymbals / Percussion / 808s / Fills / Loops. Make a "Favourites" folder of your top 10 per category. Rename samples with key where tuned ("Kick_Punchy_F.wav").
`,
      steps: [
        'Open the Drum Machine in Practice Studio. Solo each row by muting the others (click the row name) and listen to each sound.',
        'Open your DAW drum sampler and audition 20 kicks in context with a simple loop.',
        'Choose the 3 kicks that fit best. Find each kick\'s pitch with a tuner or spectrum analyser.',
        'Repeat for snares, claps and hats.',
        'Create your Favourites folders with your top 10 of each category.',
        'Build a 2-bar beat using only your favourites.'
      ],
      tips: ['Free legal drum samples: Looperman, Freesound (check licences), and the sample packs bundled with your DAW. Splice and similar services offer royalty-free subscriptions.', 'Name your favourite kits by genre ("Trap Kit 01").'],
      mistakes: ['Auditioning samples soloed and loud; everything sounds good that way.', 'Using untagged, unknown-source samples in commercial work.'],
      assignment: {
        title: 'Curate Your Drum Kit',
        brief: 'Build a personal drum library you can trust.',
        deliverables: ['Organised drum folders with a Favourites folder per category', '3 genre kits (e.g. Trap, House, Boom Bap) saved as sampler presets or folders', 'A 2-bar beat using one of your kits', 'Key/pitch noted for your top kicks and 808s']
      },
      quiz: [
        { q: 'Which drum machine is most associated with house and techno?', a: ['TR-808', 'TR-909', 'LinnDrum', 'SP-1200'], c: 1, why: 'The 909 kick and hats define classic house and techno.' },
        { q: 'What is the transient of a drum?', a: ['Its tail', 'The first few milliseconds of attack', 'Its reverb', 'Its pitch'], c: 1, why: 'The transient gives punch and definition.' },
        { q: 'Why audition drum samples in context?', a: ['It is faster', 'Sounds that are great alone may not fit the mix and key', 'Soloing breaks samples', 'For louder playback'], c: 1, why: 'Fit with the other elements matters more than solo sound.' }
      ],
      tools: ['drums']
    },
    {
      id: 'r-programming',
      title: 'Drum Programming Fundamentals',
      minutes: 55,
      summary: 'The grid, four-on-the-floor, backbeat, half-time, and the core patterns of major genres.',
      objectives: ['Program the essential grooves by heart', 'Understand how kick and snare placement defines a genre', 'Build hi-hat patterns for energy'],
      body: `
## Reading a 16-step pattern
One bar of 4/4 split into 16 sixteenth-note steps. Beats fall on steps 1, 5, 9 and 13.

Count: **1 e & a | 2 e & a | 3 e & a | 4 e & a**.

In the patterns below, **x** is a hit and **.** is a rest.

## Four-on-the-floor (house, techno, disco, EDM)
- Kick: x . . . x . . . x . . . x . . .
- Clap: . . . . x . . . . . . . x . . .
- Open hat: . . x . . . x . . . x . . . x .

The kick on every beat drives dance music. The open hat on every offbeat gives the classic "pump".

## Rock / pop backbeat
- Kick: x . . . . . . . x . x . . . . .
- Snare: . . . . x . . . . . . . x . . .
- Hat: x . x . x . x . x . x . x . x .

Snare on **2 and 4** is the backbeat at the heart of most popular music.

## Boom bap (hip-hop)
- Kick: x . . . . . . x . . x . . . . .
- Snare: . . . . x . . . . . . . x . . .
- Hat: 8ths, with swing.
Kicks fall in syncopated places; the snare is hard on 2 and 4.

## Trap (half-time)
- Kick: x . . . . . . . . . x . . . . . (plus variations)
- Snare/clap: . . . . . . . . x . . . . . . . (beat 3)
- Hats: 16ths with rolls (32nds and triplets).

## Breakbeat / drum & bass (two-step)
- Kick: x . . . . . . . . . x . . . . .
- Snare: . . . . x . . . . . . . x . . .
At 170+ BPM this becomes the DnB two-step.

## Hi-hat patterns and energy
- **Quarter notes**: calm.
- **8ths**: steady, classic.
- **16ths**: busy, driving.
- **Offbeat open hats**: dance pump.
- **Rolls and triplets**: trap tension.

Changing hi-hat density between sections is one of the easiest ways to control energy.

## Pattern variation
Repeat a 1-bar pattern 3 times and change bar 4 (an extra kick, a missing snare, a fill). The **"3 + 1"** structure keeps loops from feeling static.
`,
      steps: [
        'Open the Drum Machine and load each preset in the lesson: Four-on-the-floor, Rock, Boom Bap, Trap, Two-step.',
        'For each one, mute every row except kick and snare. Notice how they define the genre.',
        'Recreate each pattern in your DAW from memory.',
        'Program a 4-bar loop using the 3 + 1 variation structure.',
        'Change only the hi-hat density across 4 versions (quarters, 8ths, 16ths, rolls) and listen to the energy change.',
        'Program the drums of one song from your Taste Map.'
      ],
      tips: ['Learn patterns by step number; it makes programming in any DAW instant.', 'Program with a pad controller or keyboard in real time, then quantise lightly.'],
      mistakes: ['Every bar identical for the whole song.', 'Too many elements hitting on the same step, which clutters the transient.'],
      assignment: {
        title: 'Groove Library',
        brief: 'Program the essential grooves until they are automatic.',
        deliverables: ['5 core grooves (four-on-the-floor, rock, boom bap, trap, two-step) saved as MIDI patterns', 'A 4-bar loop using 3 + 1 variation', 'The drum pattern of one reference song recreated', 'Your favourite pattern saved in the Drum Machine (Save beat)']
      },
      quiz: [
        { q: 'Which step numbers are the beats in a 16-step bar?', a: ['1, 2, 3, 4', '1, 5, 9, 13', '2, 4, 6, 8', '4, 8, 12, 16'], c: 1, why: 'Each beat has four 16ths: 1, 5, 9, 13.' },
        { q: 'What defines four-on-the-floor?', a: ['Snare on every beat', 'Kick on every beat', 'Hats on every 16th', 'No kick'], c: 1, why: 'The kick hits all four beats.' },
        { q: 'What is the 3 + 1 variation structure?', a: ['3 drums and 1 bass', 'Repeat a bar three times and vary the fourth', 'Three songs and one remix', '3/4 time'], c: 1, why: 'It keeps loops moving while staying familiar.' }
      ],
      tools: ['drums'],
      beats: [
        { name: 'Four-on-the-floor', bpm: 124, swing: 50, kick: 'x...x...x...x...', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', ohh: '..x...x...x...x.' },
        { name: 'Rock backbeat', bpm: 110, swing: 50, kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Boom bap', bpm: 90, swing: 58, kick: 'x......x..x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Trap half-time', bpm: 140, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.xxx.x.', sub: 'x.........x.....' },
        { name: 'Two-step (DnB)', bpm: 172, swing: 50, kick: 'x.........x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' }
      ]
    },
    {
      id: 'r-groove',
      title: 'Groove: Velocity, Swing and Human Feel',
      minutes: 50,
      summary: 'Make programmed drums breathe with velocity, ghost notes, swing, micro-timing and groove templates.',
      objectives: ['Use velocity and ghost notes for dynamics', 'Apply swing and micro-timing with intent', 'Program trap hi-hat rolls and triplets'],
      body: `
## Velocity
Real drummers never hit the same way twice. Vary velocity:
- **Accents** on main beats (velocity 100–127).
- **Softer** off-beats (70–95).
- **Ghost notes**: very quiet snare hits (20–50) between main hits. Essential in funk, R&B, neo-soul and breakbeats.

For hi-hats, a simple **loud-soft-medium-soft** velocity pattern on 16ths instantly sounds more human.

## Swing
Swing delays every second 16th (or 8th). In the Drum Machine, 50% is straight and about 66% is triplet feel.
- **52–56%**: subtle bounce (house, pop).
- **56–62%**: classic hip-hop / MPC feel.
- **62–70%**: heavy shuffle (jazz-influenced, some garage and lo-fi).

You can swing some elements and leave others straight. Swinging only the hats over a straight kick creates tension and groove.

## Micro-timing
Shift notes a few milliseconds off the grid:
- **Snare late (10–30 ms)**: laid-back, "behind the beat" (neo-soul, lo-fi, Dilla-style).
- **Hats early**: urgency.
- **Unquantised kicks**: the "drunk" feel made famous by J Dilla, where kicks wander slightly around the grid.

Many DAWs let you set a negative or positive track delay in milliseconds for a whole channel.

## Groove templates
Extract the timing and velocity from a real drum loop (or MPC groove) and apply it to your MIDI. Ableton (Groove Pool), Logic (Groove Track / quantise templates), FL Studio (Riff machine and groove options), and others support this.

## Trap hi-hats
- Base pattern: 8ths or 16ths.
- **Rolls**: switch to 32nds or 64ths for a beat or half-beat.
- **Triplets**: 1/16 triplets or 1/8 triplets for bounce.
- **Pitch rolls**: pitch the roll up or down a few semitones for movement.
- **Velocity ramps**: rolls that crescendo or fade.
Do not roll every bar; place rolls at the ends of phrases.

## Layering rhythm
Rhythmic interest comes from the **interplay** of parts. If the kick is busy, keep the hats simple. If the percussion is complex, keep the kick steady.
`,
      steps: [
        'Load "Boom Bap" in the Drum Machine. Click hat pads to toggle some into ghost notes (darker pads) and listen.',
        'In your DAW, program 16th hats and apply a loud-soft-medium-soft velocity pattern.',
        'Add 3 ghost snare notes around the main snares.',
        'Try swing at 50%, 56%, 62% and 68%. Write which suits which genre.',
        'Shift the snare channel 20 ms late. Compare with the original.',
        'Program a trap hat line with one 32nd roll and one triplet pattern every 2 bars.',
        'Extract a groove from a drum loop (if your DAW supports it) and apply it to your MIDI pattern.'
      ],
      tips: ['Record drums live on pads and keep the best takes; human timing is hard to fake.', 'Use randomise velocity tools subtly (5–10%) rather than heavily.'],
      mistakes: ['Every note at velocity 127.', 'Applying heavy swing to every element including the kick in a dance track.', 'Constant hi-hat rolls that become noise.'],
      assignment: {
        title: 'Make It Groove',
        brief: 'Take a stiff beat and make it feel human.',
        deliverables: ['A before/after pair: stiff quantised beat and humanised version', 'Ghost notes and velocity patterns on snare and hats', 'A swing comparison note (4 settings)', 'A 4-bar trap hat line with rolls and triplets']
      },
      quiz: [
        { q: 'What are ghost notes?', a: ['Deleted notes', 'Very quiet hits between main hits', 'Notes with reverb', 'Out-of-key notes'], c: 1, why: 'Ghost notes add subtle rhythmic texture.' },
        { q: 'Moving the snare slightly late creates...', a: ['A rushed feel', 'A laid-back, behind-the-beat feel', 'A key change', 'More bass'], c: 1, why: 'Late snares make the groove relaxed.' },
        { q: 'Where are trap hat rolls usually placed?', a: ['On every beat', 'At phrase endings and transitions', 'Only in the intro', 'Never'], c: 1, why: 'Rolls create tension and movement at key moments.' }
      ],
      tools: ['drums'],
      beats: [
        { name: 'Ghost-note funk', bpm: 98, swing: 54, kick: 'x.....x...x.....', snare: '....x..o.o..x..o', chh: 'xoxoxoxoxoxoxoxo' },
        { name: 'Laid-back neo-soul', bpm: 82, swing: 62, kick: 'x......x.x......', snare: '....x.......x...', chh: 'x.xox.xox.xox.xo', perc: '...........x....' }
      ]
    },
    {
      id: 'r-layering',
      title: 'Layering and Processing Drums',
      minutes: 55,
      summary: 'Build huge kicks and snares from layers, align phase, then shape them with EQ, compression, transient tools and saturation.',
      objectives: ['Layer kicks and snares by frequency role', 'Avoid phase cancellation between layers', 'Process drums for punch and glue'],
      body: `
## Layering by role
Each layer should do one job:
- **Kick** = sub layer (40–60 Hz) + punch/body layer (80–150 Hz) + click layer (2–5 kHz).
- **Snare** = body (150–250 Hz) + crack (1–3 kHz) + a clap or noise layer for width and snap.

High-pass or low-pass each layer so they do not overlap in the same frequencies.

## Phase alignment
Two kicks with strong lows can cancel each other if their waves are out of phase, making the combined kick *weaker*.
- Zoom in and line up the start of the waveforms.
- Try the phase-invert (Ø) button on one layer and keep whichever sounds fuller.
- Shorten or high-pass one layer so only one carries the sub.

## Processing chain for drums
1. **EQ**: remove mud (often 250–400 Hz on kicks and snares), boost punch (60–100 Hz on kick) or crack (2–5 kHz) gently.
2. **Transient shaper**: increase attack for punch or reduce sustain for tightness. Free option: many DAWs include one.
3. **Compression**: fast attack tames peaks; **slower attack (10–30 ms)** lets the transient through for punch. Medium-fast release.
4. **Saturation**: adds harmonics so drums cut through on small speakers.
5. **Drum bus**: group all drums and apply gentle compression (2–4 dB of gain reduction) for glue.
6. **Parallel compression (New York style)**: send drums to a bus, crush it hard, and blend it under the dry drums for power without losing dynamics.
7. **Reverb**: short room on snare for depth; **gated reverb** for the 1980s sound; keep kick mostly dry.
8. **Clipping**: a clipper on the drum bus shaves peaks for loudness and aggression (common in trap and EDM).

## Kick and bass relationship
- Choose who owns the sub: the kick or the bass/808.
- **Sidechain compression**: the bass ducks briefly when the kick hits.
- **EQ carving**: dip the bass slightly where the kick's punch lives.
- Tune the kick to the key so it agrees with the bass.
`,
      steps: [
        'Pick a kick with good sub and a second kick with a strong click.',
        'High-pass the click kick around 150 Hz and low-pass the sub kick around 200 Hz. Blend them.',
        'Zoom in and align their starts. Try phase invert on one and listen for fullness.',
        'Layer a snare with a clap, offsetting the clap by 5–10 ms for width.',
        'Route all drums to a drum bus. Add a compressor with slow attack (20 ms), fast release, 2–4 dB gain reduction.',
        'Create a parallel compression bus, compress hard, and blend it in at a low level.',
        'Add a short room reverb send to the snare only.'
      ],
      tips: ['Commit layers into a single sample once you like them; it saves CPU and decisions.', 'Use a spectrum analyser to see each layer\'s frequency role.'],
      mistakes: ['Stacking 4 kicks that all have sub and cancel each other.', 'Reverb on the kick that muddies the low end.', 'Over-compressing so drums lose their punch.'],
      assignment: {
        title: 'Punchy Drums',
        brief: 'Create a signature kick and snare and a processed drum bus.',
        deliverables: ['A layered kick (sub + punch + click) bounced as one sample', 'A layered snare/clap bounced as one sample', 'A drum bus chain with EQ, compression and saturation', 'A before/after export showing the processing difference']
      },
      quiz: [
        { q: 'Why high-pass a click layer when layering kicks?', a: ['To make it louder', 'So only one layer carries the sub and they do not clash', 'To add reverb', 'It is not needed'], c: 1, why: 'Overlapping low layers can cancel out and muddy the kick.' },
        { q: 'What does a slow compressor attack (10–30 ms) do on drums?', a: ['Kills the transient', 'Lets the transient through for punch', 'Adds reverb', 'Changes the pitch'], c: 1, why: 'The initial hit passes before compression clamps down.' },
        { q: 'What is parallel compression?', a: ['Two compressors in series', 'Blending a heavily compressed copy under the dry signal', 'Compressing left and right separately', 'Compression only on the master'], c: 1, why: 'It adds power while keeping natural dynamics.' }
      ]
    },
    {
      id: 'r-fills',
      title: 'Fills, Transitions and Percussion',
      minutes: 45,
      summary: 'Drum fills, build-ups, dropouts, clave and tresillo, and layered percussion for movement.',
      objectives: ['Write fills that signal new sections', 'Use clave and tresillo patterns', 'Layer percussion for groove and movement'],
      body: `
## Fills
A fill tells the listener "something new is coming". Place them at the end of 4, 8 or 16-bar phrases.
- **Snare fill**: 16ths on the last beat.
- **Tom fill**: descending toms across the last bar.
- **Kick drop**: remove the kick for the last bar.
- **Hat roll / triplet run** (trap).
- **Stutter fill**: repeat a slice of the beat faster and faster.

## Transitions
- **Snare build**: quarter notes → 8ths → 16ths → 32nds over 4–8 bars, often with rising pitch (EDM build-ups).
- **Dropout**: cut everything except one element before the chorus or drop.
- **Reverse cymbal / reverse crash** leading into the downbeat.
- **Crash on bar 1** of a new section.
- **Filter sweep** on the drum bus.

## Clave and tresillo: world rhythms producers use
These patterns underpin Latin, Afro-Cuban, reggaeton, Afrobeats, dancehall and much pop.

- **Tresillo (3-3-2)**: x . . x . . x . (repeat). The rhythmic cell behind reggaeton, dancehall, Afrobeats and much pop.
- **Son clave 3-2** (one bar of 16ths): x . . x . . x . . . x . x . . .
- **Rumba clave 3-2**: x . . x . . . x . . x . x . . .

## Percussion layers
- **Shakers** on 16ths add constant motion (Afrobeats, house, amapiano).
- **Congas / bongos** add syncopated warmth.
- **Rim shots and woodblocks** create call-and-response with the snare.
- **Tambourine** on 2 and 4 or 8ths adds lift in choruses.
- **Cowbell** (808 cowbell is iconic in phonk and Miami bass).

Pan percussion left and right to build width while keeping kick and snare central. Vary one percussion element every 8 bars.

## Polyrhythm
Play a 3-step pattern against a 4-beat bar (for example a perc hit every 3 sixteenths). The pattern drifts against the bar and resolves every 3 bars, creating hypnotic motion (common in techno and Afro house).
`,
      steps: [
        'Load "Son clave + house" in the Drum Machine and listen to the perc row.',
        'Load "Tresillo groove" and notice how the 3-3-2 pattern drives the beat.',
        'In your DAW, write a 4-bar loop with a fill in bar 4.',
        'Create an 8-bar snare build-up (quarters → 8ths → 16ths → 32nds) with a pitch rise.',
        'Add a reverse crash leading into bar 9.',
        'Layer 3 percussion parts panned left, right and centre.',
        'Program a 3-against-4 polyrhythmic perc line over a four-on-the-floor kick.'
      ],
      tips: ['Fills can be subtle: one extra kick or an open hat is often enough.', 'Record yourself tapping percussion on a table into a mic for unique organic layers.'],
      mistakes: ['A big fill every 2 bars.', 'Percussion that clutters the same frequency range as the hats.'],
      assignment: {
        title: 'Transitions Pack',
        brief: 'Build a toolkit of fills and transitions you can reuse.',
        deliverables: ['4 different fills saved as MIDI clips', 'An 8-bar build-up with a dropout before the drop', 'A percussion loop using clave or tresillo', 'A polyrhythmic percussion idea']
      },
      quiz: [
        { q: 'What is the tresillo pattern?', a: ['4-4', '3-3-2', '2-2-2-2', '5-3'], c: 1, why: 'Tresillo groups 8 pulses as 3 + 3 + 2.' },
        { q: 'Where do fills usually go?', a: ['At the start of every bar', 'At the end of 4, 8 or 16-bar phrases', 'Only in outros', 'Randomly'], c: 1, why: 'Fills signal phrase endings and new sections.' },
        { q: 'A dropout before a chorus...', a: ['Adds every instrument', 'Removes elements so the next section hits harder', 'Changes the tempo', 'Adds reverb only'], c: 1, why: 'Contrast makes the return of the full beat more powerful.' }
      ],
      tools: ['drums'],
      beats: [
        { name: 'Son clave + house', bpm: 122, swing: 52, kick: 'x...x...x...x...', clap: '....x.......x...', chh: '..x...x...x...x.', perc: 'x..x..x...x.x...' },
        { name: 'Tresillo groove', bpm: 100, swing: 50, kick: 'x..x..x.x..x..x.', snare: '....x.......x...', chh: 'xxxxxxxxxxxxxxxx' }
      ]
    },
    {
      id: 'r-project',
      title: 'Semester Project: Beat-a-Day Challenge',
      minutes: 420,
      project: true,
      summary: 'Seven beats in seven days, each in a different groove style.',
      objectives: ['Build speed and confidence in drum programming', 'Apply groove, layering and transitions under time limits'],
      body: `
## The brief
Make one beat per day for 7 days. Each beat must be at least **1 minute 30 seconds** with an intro, two contrasting sections and an ending. Spend a **maximum of 90 minutes** per beat.

| Day | Style |
|---|---|
| 1 | Boom bap with swing and ghost notes |
| 2 | Trap with hat rolls and a tuned 808 |
| 3 | House with offbeat open hats and percussion |
| 4 | Afrobeats or reggaeton with tresillo/dembow |
| 5 | Drum & bass two-step at 172 BPM |
| 6 | Lo-fi with drunk, unquantised drums |
| 7 | Your own hybrid of any two styles |

## Rules
- Use drum layering on at least 3 beats.
- Include a fill or transition every 8 bars.
- Bounce every beat to WAV and keep them all, even the weak ones.
`,
      steps: ['Day 1: boom bap beat finished', 'Day 2: trap beat finished', 'Day 3: house beat finished', 'Day 4: Afrobeats/reggaeton beat finished', 'Day 5: drum & bass beat finished', 'Day 6: lo-fi beat finished', 'Day 7: hybrid beat finished'],
      assignment: {
        title: 'Seven Beats',
        brief: 'A week of daily beats. Pick your best one and get feedback.',
        deliverables: ['7 exported beats (WAV)', 'Your best beat shared for feedback in a community', 'A journal entry: which style felt most natural, which was hardest']
      },
      quiz: [
        { q: 'What is the maximum time per beat in this challenge?', a: ['30 minutes', '90 minutes', '5 hours', 'No limit'], c: 1, why: 'The limit trains speed and decisiveness.' },
        { q: 'Why keep the weak beats?', a: ['To sell them', 'They show progress and lessons learned', 'For backups only', 'You should delete them'], c: 1, why: 'Reviewing old work reveals how much you have improved.' }
      ],
      tools: ['drums']
    }
  ]
});
