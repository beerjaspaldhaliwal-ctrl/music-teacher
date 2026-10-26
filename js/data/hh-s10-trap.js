(function () {
  // Shared trap demo: A minor, Am → F → E, bells + choir pad + gliding 808.
  const TRAP_DEMO = {
    name: 'Trap (full demo)', bpm: 140, swing: 50, bars: 2,
    kick: 'x.....x...x.....x.....x.x.......',
    clap: '........x...............x.......',
    chh: 'x.x.x.x.x.xxx.x.x.x.x.x.xxxxxxxx',
    ohh: '..............................x.',
    keys: { inst: 'bell', notes: [[0, 76, 2], [2, 72, 2], [4, 69, 2], [6, 72, 1], [7, 74, 1], [8, 76, 3], [12, 74, 2], [14, 72, 2], [16, 77, 2], [18, 72, 2], [20, 69, 2], [22, 72, 1], [23, 74, 1], [24, 71, 3], [28, 68, 2], [30, 71, 2]] },
    keys2: { inst: 'choir', notes: [[0, 57, 16], [0, 60, 16], [0, 64, 16], [16, 53, 8], [16, 57, 8], [16, 60, 8], [24, 52, 8], [24, 56, 8], [24, 59, 8]] },
    bass: { inst: '808', notes: [[0, 33, 6], [6, 33, 4], [10, 33, 4], [14, 45, 2, 0.9, 1], [16, 29, 6], [22, 29, 2], [24, 28, 4], [28, 40, 4, 0.9, 1]] }
  };
  const MELODY_ONLY = { name: 'Trap melody loop (no drums)', bpm: 140, swing: 50, bars: 2, keys: TRAP_DEMO.keys, keys2: TRAP_DEMO.keys2 };
  const DARK_DEMO = {
    name: 'Dark trap (demo)', bpm: 132, swing: 50, bars: 2,
    kick: 'x.........x..x..x......x..x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.x.x.x.x.x.xxx.x.',
    keys: { inst: 'piano', notes: [[0, 64, 2], [2, 65, 2], [4, 64, 2], [8, 60, 4], [12, 59, 4], [16, 64, 2], [18, 65, 2], [20, 64, 2], [24, 68, 4], [28, 69, 4]] },
    keys2: { inst: 'strings', notes: [[0, 45, 16], [0, 52, 16], [16, 44, 16], [16, 52, 16]] },
    bass: { inst: '808', notes: [[0, 33, 10], [10, 33, 3], [13, 33, 3], [16, 32, 7], [23, 32, 3], [26, 44, 6, 0.9, 1]] }
  };

  const trapLessons = [
    {
      id: 'trap-1', title: 'Trap · Part 1: History, Anatomy & Your Session',
      minutes: 75,
      summary: 'Where trap comes from, what every trap beat contains, and the session template and kit you will use for the whole masterclass.',
      objectives: ['Explain how trap developed in Atlanta and spread worldwide', 'Name every element of a trap beat and its job', 'Build a trap session template and a curated kit'],
      body: '## Where trap comes from\n"Trap" is Atlanta slang for a place where drugs are sold. T.I.\'s *Trap Muzik* (2003), **Gucci Mane** and **Young Jeezy** gave the music its name and attitude, with producers like **Shawty Redd**, **DJ Toomp** and **Zaytoven** (whose church-trained piano and organ became a signature). Around 2010, **Lex Luger** made trap huge and aggressive with orchestral brass, rapid hi-hats and booming 808s on Waka Flocka Flame\'s "Hard in da Paint". Lex Luger and **Southside** founded **808 Mafia**; **Mike WiLL Made-It**, **Metro Boomin**, **Sonny Digital**, **TM88**, **Wheezy**, **Murda Beatz** and **Pi\'erre Bourne** pushed the sound into the global mainstream. Today trap is the foundation of drill, melodic trap, rage, Latin trap and much of pop.\n\n## Anatomy of a trap beat\n| Element | Job |\n|---|---|\n| Melody loop | The emotional identity: bells, piano, flute, choir, strings, guitar, synths |\n| 808 | Bass and low-end groove, tuned to the key, with glides |\n| Kick | Punch on top of the 808 (short, little sub) |\n| Clap / snare | The backbeat on beat 3 of each bar (half-time) |\n| Hi-hats | Speed and movement: 8ths, 16ths, rolls, triplets |\n| Open hats and percussion | Lift, bounce and variation |\n| FX | Risers, reverse cymbals, downlifters, impacts, tag |\n\n## Tempo and the half-time feel\nTrap is usually written at **130–160 BPM** (140–150 is common) with the snare on **beat 3**, so it feels like 65–80 BPM. The hats move at the fast tempo, the drums and vocals feel at half speed. That contrast is the core of trap.\n\n## The session template\nCreate these tracks (colour-coded) and save as your trap template:\n\n| Track | Notes |\n|---|---|\n| Melody 1 / Melody 2 / Counter | Instruments or audio loops |\n| 808 | Sampler in mono with glide |\n| Kick | Short, punchy |\n| Clap / Snare (2 layers) | Layer in one bus |\n| Hats / Open hat / Perc | Separate channels |\n| FX / Tag | Risers, crashes, your producer tag |\n| Buses | Drums, Melody, 808, FX |\n| Returns | Reverb (plate or hall), delay (1/4 or 1/8 dotted) |\n\n## Choosing your kit\n- **Kick**: short and clicky with little sub; the 808 carries the low end.\n- **808**: clean pitch, smooth decay, enough mid harmonics to be heard on phones.\n- **Clap / snare**: a crisp clap layered with a snare (or two claps) for snap and body.\n- **Hats**: tight, crisp, not harsh. Have 3–4 options.\n- **Open hat**: short and bright.\n- **Percussion**: rims, shakers, snaps, toms for fills.\n- **FX**: reverse crash, riser, impact, downlifter.\n\nCurate 10 favourites per category. Fewer, better sounds make faster decisions.\n\n## Gain staging from the start\nSet each sound so it peaks around **-10 to -6 dBFS** on its channel, with the master peaking around **-6 dBFS** while you write. Loud writing sessions lead to clipped, harsh mixes later.',
      steps: [
        'Listen to one landmark record from each era: early Atlanta trap, the Lex Luger era, the Metro Boomin era and a current hit. Note what changed.',
        'Play the full trap demo in the Beat Lab and mute each layer to hear its job.',
        'Create the session template above in your DAW, with buses and returns, and save it.',
        'Set the tempo to 140 BPM and the key to A minor for this masterclass.',
        'Curate your kit: 10 kicks, 10 808s, 10 claps/snares, 10 hats, 5 open hats, 10 percussion, 10 FX.',
        'Make your producer tag (Semester 4) and place it on the Tag track.'
      ],
      tips: ['Name your kit folders "TRAP_Kick", "TRAP_808" and so on so they sort together.', 'Study credits of current trap hits weekly; the sound evolves fast.', 'Template first: the faster you start, the more beats you finish.'],
      mistakes: ['Kicks with long sub tails that fight the 808.', 'Hundreds of random drum kits and no favourites.', 'Writing with the master clipping.'],
      assignment: {
        title: 'Trap Session & Kit',
        brief: 'Build the foundation you will use for every trap beat.',
        deliverables: ['A saved trap session template with buses and returns', 'A curated trap kit folder with favourites in every category', 'Your producer tag', 'Notes on how trap changed across four eras']
      },
      quiz: [
        { q: 'Which album gave trap its name in 2003?', a: ['T.I. – Trap Muzik', 'Nas – Illmatic', 'Dr. Dre – The Chronic', 'Kanye West – The College Dropout'], c: 0, why: 'T.I.\'s Trap Muzik (2003) named the genre.' },
        { q: 'In trap, the clap or snare usually lands on...', a: ['Beats 2 and 4', 'Beat 3 of each bar (half-time)', 'Every beat', 'Only bar 1'], c: 1, why: 'Half-time placement makes 140 BPM feel like 70.' },
        { q: 'Why choose a kick with little sub in trap?', a: ['Kicks are not needed', 'So the 808 carries the low end without clashing', 'For stereo width', 'To change the key'], c: 1, why: 'Kick gives punch; 808 gives the low end.' }
      ],
      watch: [['Trap music history', 'history of trap music Atlanta documentary'], ['Lex Luger production', 'Lex Luger production breakdown'], ['Metro Boomin making a beat', 'Metro Boomin making a beat'], ['Zaytoven making a beat', 'Zaytoven making a beat piano']],
      tools: ['drums'],
      beats: [TRAP_DEMO]
    },
    {
      id: 'trap-2', title: 'Trap · Part 2: The Melody Loop',
      minutes: 120,
      summary: 'Write the loop that defines the beat: scales, chord loops, instruments, layering, counter-melodies and making it sound like a record.',
      objectives: ['Write dark and emotional trap melodies on purpose', 'Layer instruments and counter-melodies', 'Process melodies so they sit like a sample'],
      body: '## The melody is the identity\nIn trap, the melody loop is usually written first. It sets the mood an artist reacts to in the first five seconds. Many major trap records start from a melody made by a **loop maker**, with the producer adding drums and 808s, and both sharing credit.\n\n## Scales that sound like trap\n| Scale | Mood | Use |\n|---|---|---|\n| Natural minor | Dark, serious | The default |\n| Harmonic minor | Dramatic, sinister (raised 7th) | Dark trap, drill-adjacent melodies |\n| Phrygian | Menacing (flat 2nd) | Evil, horror-style loops |\n| Minor pentatonic | Simple, catchy | Bells and flutes |\n| Dorian | Hopeful minor | Melodic trap |\n\n## Chord loops\n- **i – VI – VII** or **i – VI – iv – V** (with a major V from harmonic minor): classic dark trap.\n- **i – VI** (two chords): simple, hypnotic.\n- **i – iv**: moody.\n- One chord (or none): just a melodic riff over the 808.\n\nKeep the loop to **2, 4 or 8 bars** and change bar 4 or 8 slightly so it breathes.\n\n## Instruments\nBells, celesta and music boxes; piano; flute; choir; strings and pizzicato; brass (Lex Luger era); guitar; dark synth pads; plucks. Pick **one lead** and **one supporting texture**.\n\n## The demo melody, note by note (A minor)\n| Bar | Chord | Melody (bells) |\n|---|---|---|\n| 1 | Am | E5 – C5 – A4 – C5 – D5 – E5 (held) – D5 – C5 |\n| 2 (first half) | F | F5 – C5 – A4 – C5 – D5 |\n| 2 (second half) | E (major, from harmonic minor) | B4 (held) – G#4 – B4 |\n\nThe **G#** over the E chord is the harmonic-minor leading tone that makes the loop sound dark and dramatic. Load "Trap melody loop" above to hear it without drums.\n\n## Layering\n- Double the lead an **octave higher** at low volume for shine, or lower for weight.\n- Add a **pad or choir** holding the chords underneath.\n- Write a **counter-melody** that plays in the gaps (a flute answering bells).\n- Do not stack 6 melodies: two or three parts are enough.\n\n## Make it sound like a record\n1. EQ: high-pass at 150–250 Hz so the 808 owns the low end.\n2. Low-pass around 8–12 kHz for warmth, or leave it bright for bells.\n3. Saturation or tape for glue.\n4. Reverb (plate or hall) and a 1/4 or 1/8 dotted delay.\n5. **Bounce to audio**, then re-sample: pitch down 1–3 semitones, add vinyl or tape wobble, reverse a bar, chop.\n6. Light sidechain to the kick if the melody feels static.\n\n## Loop makers and splits\nIf you use another producer\'s loop or a loop pack with a licence that requires credit, agree **production credit and publishing splits in writing** before release. Common practice varies (50/50 on the production is frequent), but the only correct split is the one you both agreed.',
      steps: [
        'Load "Trap melody loop (no drums)" in the Beat Lab and listen to how the G# changes the mood.',
        'Rebuild the demo melody in your DAW using a bell or piano instrument.',
        'Write three new 4-bar loops: one in natural minor, one in harmonic minor, one in Phrygian.',
        'For your favourite, add a pad or choir layer and a counter-melody.',
        'Process it: EQ, saturation, reverb and delay.',
        'Bounce it, then re-sample it: pitch down 2 semitones, reverse bar 4, add tape wobble.',
        'Save all loops as MIDI and audio with BPM and key in the filenames.'
      ],
      tips: ['Hum melodies over the 808 note before writing them: if you cannot hum it, simplify it.', 'Use velocity on bells and pianos so they do not sound robotic.', 'Write 10 short loops instead of perfecting one.'],
      mistakes: ['Too many melodic layers fighting each other.', 'Melodies in the 808\'s low range (mud).', 'Unagreed loop splits.'],
      assignment: {
        title: 'Melody Loop Library',
        brief: 'Build a set of loops you can turn into beats.',
        deliverables: ['The demo melody rebuilt in your DAW', '10 original trap loops (at least 3 different scales)', 'One loop fully layered with a counter-melody and pad', 'One re-sampled loop (pitched, reversed or chopped)', 'All loops labelled with BPM and key']
      },
      quiz: [
        { q: 'What does the G# do in an A minor trap melody?', a: ['Nothing', 'It is the harmonic-minor leading tone that adds drama over the E chord', 'It makes the loop major', 'It changes the tempo'], c: 1, why: 'The raised 7th creates a dark, dramatic pull.' },
        { q: 'Why high-pass the melody at 150–250 Hz?', a: ['To make it louder', 'So the 808 owns the low end', 'To make it stereo', 'To change key'], c: 1, why: 'Low melody content muddies the 808.' },
        { q: 'If you use another producer\'s loop, you should...', a: ['Use it freely', 'Agree credit and splits in writing before release', 'Pitch it so they cannot tell', 'Remove their tag'], c: 1, why: 'Written agreements protect everyone.' }
      ],
      watch: [['Making trap melodies', 'how to make dark trap melodies'], ['Loop making for trap', 'how to make melody loops for producers'], ['Harmonic minor for trap', 'harmonic minor trap melody tutorial']],
      tools: ['drums', 'piano'],
      beats: [MELODY_ONLY, TRAP_DEMO]
    },
    {
      id: 'trap-3', title: 'Trap · Part 3: Kick, Clap & the Bounce',
      minutes: 90,
      summary: 'Program trap drums that bounce: clap placement, kick patterns, percussion and variation.',
      objectives: ['Place claps and kicks for the half-time trap feel', 'Write kick patterns that bounce with the melody', 'Add percussion and variation without clutter'],
      body: '## The backbeat\nIn a 16-step bar, the clap or snare goes on **step 9** (beat 3). Many producers layer a **clap and a snare** (or two claps) and add a short reverb. Some styles add a second, quieter snare at the end of a 2-bar phrase.\n\n## Kick patterns\nThe kick (and the 808 that usually follows it) creates the bounce. Start from these, then adapt to your melody\'s rhythm:\n\n| Pattern | Steps (1–16) | Feel |\n|---|---|---|\n| Foundation | 1, 11 | Simple, heavy |\n| Bounce | 1, 8, 11 | Classic Atlanta bounce |\n| Syncopated | 1, 4, 11, 14 | Busy, rolling |\n| Double | 1, 2, 11, 14 | Punchy start |\n\nRules:\n- **Do not put a kick on step 9** under the clap unless you want a heavy stomp.\n- Program the kick to **lock with the melody\'s rhythm** where possible.\n- Change the kick pattern in bar 4 and bar 8 of each phrase.\n\n## Percussion\nRims, snaps, shakers and toms add bounce. Place them on syncopated steps (3, 7, 12, 15) at low volume, panned slightly. One or two percussion parts are enough.\n\n## Variation and fills\n- Remove the clap for the last beat of bar 8.\n- Add a snare roll (16ths into 32nds) in the last half-bar before the hook.\n- Drop all drums for one beat before a new section.\n- Add an extra kick or clap in bar 4.\n\n## Processing\n- Kick: high-pass around 30 Hz, small boost at the click (3–5 kHz) if needed.\n- Clap/snare bus: high-pass around 150–200 Hz, boost presence around 2–5 kHz, short plate reverb.\n- Drum bus: a **soft clipper** shaving 1–3 dB is a trap staple for loud, punchy drums.',
      steps: [
        'Load each kick pattern in the Beat Lab and play it under the trap demo melody (load the demo, then click "Clear drums" and program the pattern).',
        'In your DAW, program the four kick patterns over your favourite loop from Part 2.',
        'Layer a clap and a snare on step 9 and group them on a bus.',
        'Add one rim or snap percussion part on syncopated steps.',
        'Build an 8-bar loop: change the kick in bar 4 and bar 8, add a roll before bar 9.',
        'Add a soft clipper to the drum bus and compare at matched volume.'
      ],
      tips: ['Mute the melody: drums and 808 alone should already make you nod.', 'Nudge percussion slightly off the grid for human bounce.', 'Save your best 8-bar drum loops as templates.'],
      mistakes: ['A kick under every clap.', 'Identical bars for the whole beat.', 'Five percussion layers cluttering the groove.'],
      assignment: {
        title: 'Trap Drum Patterns',
        brief: 'Build the drums that make trap bounce.',
        deliverables: ['All four kick patterns programmed over your loop', 'A layered clap/snare bus with processing', 'One percussion part', 'An 8-bar drum loop with variations and a roll', 'A clipped drum bus compared at matched loudness']
      },
      quiz: [
        { q: 'On which 16th step does the trap clap usually land?', a: ['Step 5', 'Step 9', 'Step 13', 'Step 1'], c: 1, why: 'Step 9 is beat 3, the half-time backbeat.' },
        { q: 'What usually follows the kick rhythm in trap?', a: ['The hi-hats', 'The 808', 'The reverb', 'The melody'], c: 1, why: 'Kick and 808 move together to create bounce.' },
        { q: 'A soft clipper on the trap drum bus is used to...', a: ['Add reverb', 'Shave peaks for loud, punchy drums', 'Change the key', 'Widen the stereo image'], c: 1, why: 'Clipping is a standard trap loudness tool.' }
      ],
      watch: [['Trap drum programming', 'trap drum programming tutorial'], ['Trap kick patterns', 'trap kick pattern bounce tutorial'], ['Soft clipping trap drums', 'soft clipper trap drums tutorial']],
      tools: ['drums'],
      beats: [
        { name: 'Trap kick: foundation', bpm: 140, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Trap kick: bounce', bpm: 140, swing: 50, kick: 'x......x..x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Trap kick: syncopated', bpm: 140, swing: 50, kick: 'x..x......x..x..', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', perc: '..x.......x...x.' },
        { name: 'Trap kick: double', bpm: 140, swing: 50, kick: 'xx........x..x..', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.' }
      ]
    },
    {
      id: 'trap-4', title: 'Trap · Part 4: Hi-Hats, Rolls & Triplets',
      minutes: 90,
      summary: 'The trap signature: hat grids, rolls, triplets, pitch movement, velocity and where to place them.',
      objectives: ['Set your DAW grid for every roll type', 'Program rolls, triplets and pitch rolls tastefully', 'Use open hats and gaps to create movement'],
      body: '## Set the grid\n| Roll | FL Studio snap | Ableton | Logic |\n|---|---|---|---|\n| 16ths | 1/4 beat (step) | 1/16 | 1/16 |\n| 16th triplets | 1/6 beat | 1/16 with triplet grid (Ctrl/Cmd+3) | 1/24 |\n| 32nds | 1/2 step | 1/32 | 1/32 |\n| 32nd triplets | 1/3 step | 1/32 with triplet grid | 1/48 |\n| 64ths | 1/4 step | 1/64 | 1/64 |\n\n## Base patterns\n- **8ths**: steady, laid-back.\n- **16ths with accents**: loud-soft velocity alternation.\n- **Gap pattern**: leave holes (skip a hit or two) for groove.\n- **Triplet sections**: switch to 16th triplets for a beat to create bounce.\n\n## Rolls\n- **1/32 roll**: the classic. Usually half a beat to one beat long.\n- **1/16 triplet roll**: bouncy, swung-sounding.\n- **1/48 (32nd triplets) or 1/64**: very fast stutters; use briefly.\n\n## Pitch and velocity\n- Pitch rolls up or down **2–12 semitones** (draw notes at different pitches, or automate pitch).\n- **Velocity ramps**: a roll that rises from soft to loud builds tension; loud to soft feels like a fade.\n\n## Where to place rolls\n- At the end of 2-bar or 4-bar phrases.\n- Just before the clap (leading into step 9).\n- Into a new section.\n- **Not every bar.** If everything rolls, nothing stands out.\n\n## Open hats and movement\nPlace a short open hat on an offbeat (step 15 or 7) for lift. Keep open hats short so they do not wash over the clap. Pan a second hat layer slightly for width, or automate panning.\n\n## The 16-step Beat Lab limitation\nThe Beat Lab shows 16th notes, so its "rolls" are 16th bursts. In your DAW, program real 32nd and triplet rolls using the grid table above.',
      steps: [
        'Set your DAW grid to each roll type in the table and program one roll of each.',
        'Program three base hat patterns: 8ths, accented 16ths and a gap pattern.',
        'Write an 8-bar hat line with a 1/32 roll at the end of bar 2, a triplet beat in bar 4 and a pitch roll into bar 9.',
        'Add velocity ramps to every roll.',
        'Add a short open hat on offbeats in bars 3–4 only.',
        'Play the hats with your drums and loop; remove any roll that does not add excitement.'
      ],
      tips: ['Program hats last, after kick, clap and 808 are locked.', 'Copy your best hat lines into a "hat library" project.', 'Listen to current hits and count how few rolls they actually use.'],
      mistakes: ['Rolls in every bar.', 'Harsh hats with no velocity variation.', 'Long open hats washing over the clap.'],
      assignment: {
        title: 'Hi-Hat Library',
        brief: 'Master the most recognisable part of trap.',
        deliverables: ['One roll of each type from the grid table', 'Three base hat patterns', 'An 8-bar hat line with rolls, triplets and a pitch roll', 'Velocity ramps on all rolls', 'A saved hat library project']
      },
      quiz: [
        { q: 'In Logic, which grid gives 16th-note triplets?', a: ['1/16', '1/24', '1/32', '1/64'], c: 1, why: '1/24 equals 16th-note triplets.' },
        { q: 'Where are hi-hat rolls most effective?', a: ['In every bar', 'At phrase endings and leading into new sections', 'Only in the intro', 'Never'], c: 1, why: 'Rolls create tension at key moments.' },
        { q: 'A roll rising from soft to loud velocity...', a: ['Sounds like a fade-out', 'Builds tension', 'Changes the key', 'Removes swing'], c: 1, why: 'Rising velocity adds energy.' }
      ],
      watch: [['Trap hi-hat rolls', 'trap hi hat rolls tutorial'], ['Triplet hi-hats', 'triplet hi hats trap tutorial'], ['Hi-hat pitch rolls', 'hi hat pitch roll tutorial']],
      tools: ['drums'],
      beats: [
        { name: 'Hats: 8ths', bpm: 140, swing: 50, kick: 'x......x..x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Hats: accented 16ths', bpm: 140, swing: 50, kick: 'x......x..x.....', clap: '........x.......', chh: 'xoxoxoxoxoxoxoxo' },
        { name: 'Hats: gap groove', bpm: 140, swing: 50, kick: 'x......x..x.....', clap: '........x.......', chh: 'x.x...x.x.x...x.', ohh: '....x...........' },
        { name: 'Hats: 2-bar roll phrase', bpm: 140, swing: 50, bars: 2, kick: 'x......x..x.....x......x..x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.x.x.x.x.xxxxxxxx', ohh: '..............x...............x.' }
      ]
    },
    {
      id: 'trap-5', title: 'Trap · Part 5: The 808 (Tuning, Patterns & Glides)',
      minutes: 120,
      summary: 'Choose, tune and program 808s with glides, make them audible everywhere, and lock them with the kick.',
      objectives: ['Tune and map an 808 correctly', 'Write 808 patterns with glides that follow the harmony', 'Process the 808 so it translates to every speaker'],
      body: '## Choose and tune\n1. Pick an 808 with a clear pitch and smooth decay.\n2. Find its root note with a tuner plugin (or the 808 tuning chart in Calculators).\n3. Map it in your sampler so the key you press is the pitch you hear.\n4. Most 808 notes should sit between **E1 and A1 (41–55 Hz fundamental)**. Lower notes vanish on phones; higher notes lose weight.\n\n## Sampler setup for glides\n| DAW | Setting |\n|---|---|\n| FL Studio | Channel settings → Misc: Mono on, Porta on, set slide time; or use slide notes in the piano roll |\n| Ableton | Simpler: voices to 1, Glide on, set glide time |\n| Logic | Quick Sampler: Mono or Legato mode, set Glide |\n\nA glide time of **50–150 ms** is typical. **Overlap two notes** to trigger the slide.\n\n## Writing the pattern\n- Follow the **kick rhythm** most of the time.\n- Play the **root of each chord**. In the demo: A (Am), F (F), E (E).\n- Use **one or two long notes** per chord, then add a short note before the change.\n- **Glides**: an octave-up slide at the end of a phrase (A1 → A2 in the demo, bar 1), a slide into the next chord\'s root, or a slide down from an octave.\n\nThe demo 808, bar by bar:\n| Bar | Notes |\n|---|---|\n| 1 (Am) | A1 long, A1, A1, glide up to A2 at the end |\n| 2 (F → E) | F1 long, F1 short, E1, glide up to E2 |\n\n## Length and the kick\n- Long 808s (held to the next note) give a sustained low end; short 808s leave room for a punchy kick.\n- Choose: kick and 808 hit together (kick short, little sub), or **sidechain** the 808 to duck under the kick, or arrange them so they rarely overlap.\n- Check **phase** where they hit together: zoom in; the waves should reinforce, not cancel.\n\n## Making the 808 audible everywhere\n- **Saturation or distortion** creates harmonics around 100–500 Hz that phones can play.\n- Typical chain: saturator → EQ (high-pass around 25–30 Hz, gentle boost around 100–200 Hz if thin) → compressor or limiter for consistent level.\n- **Parallel distortion**: distort a copy and blend it in, keeping the clean sub intact.\n- Keep the 808 **mono**.\n- Check on a phone speaker and in a car.',
      steps: [
        'Load the 808 demo in the Beat Lab and listen to the glides (blue notes in the 808 lane; glide notes are labelled on hover).',
        'Load your 808 in your DAW sampler, find its root and map it correctly.',
        'Set mono and glide as described for your DAW.',
        'Write the demo 808 pattern over your Part 2 loop, then write two original patterns.',
        'Add two glides per 8 bars: one octave slide and one slide into a chord change.',
        'Build the processing chain and compare clean vs saturated on a phone speaker.',
        'Decide the kick–808 relationship (together, sidechain or apart) and check phase.'
      ],
      tips: ['Tune your kick to the 808 (or the key) so they agree.', 'If the 808 sounds weak on headphones, it usually needs harmonics, not more sub.', 'Keep a few 808s you know perfectly instead of dozens you do not.'],
      mistakes: ['808 out of key.', 'Stereo 808s that collapse in mono.', 'Notes below E1 everywhere, which disappear on phones.'],
      assignment: {
        title: '808 Programming',
        brief: 'Write 808s that carry the beat on every system.',
        deliverables: ['A correctly tuned and mapped 808 with glide', 'The demo 808 rebuilt plus two original patterns', 'At least two glides per 8 bars', 'A processing chain with saturation, tested on a phone', 'A solved kick–808 relationship']
      },
      quiz: [
        { q: 'What triggers an 808 glide in mono mode?', a: ['Two separate short notes', 'Overlapping two notes', 'Velocity 127', 'Panning'], c: 1, why: 'Overlap plus portamento creates the slide.' },
        { q: 'Which range suits most 808 notes?', a: ['C0–C1', 'About E1–A1 (41–55 Hz)', 'C4–C5', 'Above 1 kHz'], c: 1, why: 'Low enough for weight, high enough to translate.' },
        { q: 'Why distort or saturate an 808?', a: ['To change its key', 'To add harmonics so it is heard on small speakers', 'To make it stereo', 'To add swing'], c: 1, why: 'Harmonics make bass audible on phones.' }
      ],
      watch: [['Tuning 808s', 'how to tune 808 to key'], ['808 glides and slides', '808 glide slide tutorial FL Studio Ableton'], ['808 distortion chain', '808 distortion mixing tutorial']],
      tools: ['drums', 'calc'],
      beats: [
        { name: 'Trap 808 + kick (demo)', bpm: 140, swing: 50, bars: 2, kick: TRAP_DEMO.kick, clap: TRAP_DEMO.clap, bass: TRAP_DEMO.bass },
        TRAP_DEMO
      ]
    },
    {
      id: 'trap-6', title: 'Trap · Part 6: Arrangement, Bar by Bar',
      minutes: 120,
      summary: 'Turn the loop into a full beat artists can write to: a bar-by-bar template, transitions and the first five seconds.',
      objectives: ['Arrange a complete trap beat with a proven structure', 'Create transitions and variations every 4–8 bars', 'Hook buyers in the first five seconds'],
      body: '## The bar-by-bar template (140 BPM)\n| Bars | Section | What happens |\n|---|---|---|\n| 1–8 | Intro | Melody filtered (low-pass opening), producer tag on bar 1, hats only from bar 5, riser into bar 9 |\n| 9–24 | Hook (16) | Everything: drums, 808, melody, counter-melody; hat roll every 4 bars |\n| 25–40 | Verse 1 (16) | Counter-melody out, simpler hats, 808 variation; drum dropout on the last beat of bar 40 |\n| 41–56 | Hook (16) | Full, plus an extra percussion layer |\n| 57–72 | Verse 2 (16) | Something new: switch the melody instrument, filter it, or half-time the hats; full dropout in bars 63–64 |\n| 73–88 | Hook (16) | Full, plus a new counter-melody or choir |\n| 89–96 | Outro (8) | Melody alone, filtering out; tag |\n\nAt 140 BPM, 96 bars is about **2:45**, a strong length for beats.\n\n## Transitions\n- **808 dropout** for the last beat before a section.\n- **Reverse crash** into the downbeat.\n- **Riser** across the last 2–4 bars of the intro.\n- **Snare or hat roll** into the hook.\n- **Filter sweep** on the melody bus.\n- **Tape stop** or a beat of silence before the final hook.\n\n## The first five seconds\nArtists and buyers skip fast. Start with the melody at its most attractive, add the tag immediately, and reach the drums within 8 bars (about 14 seconds), or start straight on the hook.\n\n## Variation rule\nSomething changes every **4 bars** (a roll, a missing clap, an extra kick) and something bigger every **8 bars** (a layer in or out, a filter, a dropout).\n\n## Leave room for the artist\nThe verses should be simpler than the hooks. The artist fills the space.',
      steps: [
        'Place markers in your DAW for each section of the template.',
        'Build the hook first (bars 9–24) with everything.',
        'Copy the hook across the whole beat, then subtract to create the intro, verses and outro.',
        'Add every transition from the list at least once.',
        'Make verse 2 different from verse 1 with a new element.',
        'Check the first 5 seconds: would a buyer keep listening?',
        'Export and listen start to finish without stopping; note anything that feels repetitive.'
      ],
      tips: ['Arrange by subtracting from the full hook; it is faster than building up.', 'Use automation clips for filters so changes are smooth.', 'Arrange with your eyes closed: listen for boredom.'],
      mistakes: ['A 30-second intro before anything happens.', 'Identical verses and hooks.', 'No transitions between sections.'],
      assignment: {
        title: 'Full Trap Arrangement',
        brief: 'Arrange a complete beat ready for an artist.',
        deliverables: ['A 96-bar (about 2:45) arrangement following the template', 'All six transition types used', 'Verse 2 with a new element', 'A first-5-seconds check written in your journal', 'An exported rough WAV']
      },
      quiz: [
        { q: 'At 140 BPM, roughly how long is 96 bars?', a: ['1:00', '2:45', '5:30', '8:00'], c: 1, why: 'Each bar is about 1.71 s; 96 bars ≈ 165 s.' },
        { q: 'Why should verses be simpler than hooks?', a: ['To save CPU', 'To leave room for the artist and make hooks hit harder', 'Because DAWs require it', 'No reason'], c: 1, why: 'Contrast and space serve the vocal.' },
        { q: 'How often should something small change?', a: ['Every 32 bars', 'About every 4 bars', 'Never', 'Only at the end'], c: 1, why: 'Small changes every 4 bars keep it moving.' }
      ],
      watch: [['Arranging a trap beat', 'how to arrange a trap beat'], ['Trap transitions', 'trap beat transitions tutorial']],
      tools: ['drums'],
      beats: [TRAP_DEMO]
    },
    {
      id: 'trap-7', title: 'Trap · Part 7: Mixing the Beat',
      minutes: 150,
      summary: 'Gain staging, element-by-element EQ and compression, clipping, space, and leaving a pocket for vocals.',
      objectives: ['Mix a trap beat to a professional standard', 'Control the kick and 808 low end', 'Leave room for vocals and translate to every system'],
      body: '## Levels first\nStart with the **kick and 808**: set them so together they peak around **-10 to -8 dBFS** on the master. Bring in the clap, then hats, then melodies. Most beats are 80% balanced at this stage.\n\n## Element by element\n| Element | EQ | Dynamics and colour |\n|---|---|---|\n| Kick | High-pass ~30 Hz; click 3–5 kHz if needed | Light clip or transient shaping |\n| 808 | High-pass ~25–30 Hz; boost 100–200 Hz if thin | Saturation; compression or limiting for even notes; mono |\n| Clap / snare | High-pass 150–200 Hz; presence 2–5 kHz | Short plate reverb; layered bus |\n| Hats | High-pass 300–500 Hz; tame 6–9 kHz harshness | Velocity variation; slight width |\n| Melody | High-pass 150–300 Hz; cut harsh 2–4 kHz if it fights vocals | Saturation, reverb, delay; light sidechain |\n| Pads / choir | High-pass 200–300 Hz | Wide, quieter, more reverb |\n| FX | High-pass; automate volume | Keep under the main elements |\n\n## Buses\n- **Drum bus**: glue compression (2–3 dB) and/or a **soft clipper** shaving 1–3 dB.\n- **Melody bus**: gentle EQ to make room for vocals (a 1–2 dB dip around 2–4 kHz).\n- **808**: own bus or channel, mono.\n\n## Space and width\nKick, 808, clap and the main melody centre. Hats slightly wide, pads and counter-melodies wide. Reverb and delay on sends with high-pass filters on the returns.\n\n## The vocal pocket\nIf you sell beats, the artist\'s vocal will sit on top. Keep the **1–5 kHz** range from being crowded by melodies, and do not make the beat so loud and dense that no vocal fits.\n\n## Checks\n- Compare with 2 reference beats at matched loudness.\n- Mono check: 808 and kick solid.\n- Phone and car: 808 audible, hats not harsh.\n- Low volume: balance still right.',
      steps: [
        'Reset all faders and gain stage each channel.',
        'Balance kick and 808 first, then clap, hats and melodies.',
        'Apply the EQ and dynamics table to every element.',
        'Set up the drum bus (clipper or compressor) and the melody bus dip.',
        'Set panning and send reverb and delay; high-pass the returns.',
        'Compare with two references at matched loudness and adjust.',
        'Check mono, phone, car and low volume; fix what you find.'
      ],
      tips: ['Mix the 808 on headphones you know, then confirm on speakers and a phone.', 'Small moves: 1–3 dB of EQ is usually enough.', 'Take a 10-minute break before final decisions.'],
      mistakes: ['Pushing everything loud and clipping the master.', 'Melodies crowding the vocal range.', 'Stereo-widened 808s.'],
      assignment: {
        title: 'Trap Mix',
        brief: 'Mix your arranged beat to release quality.',
        deliverables: ['Gain-staged session with balanced kick and 808', 'EQ and dynamics on every element', 'Drum bus and melody bus processing', 'Reference comparison notes', 'Mono, phone and car checks completed', 'Exported mix WAV with headroom (peaks around -6 dBFS)']
      },
      quiz: [
        { q: 'Which elements should you balance first in a trap mix?', a: ['Hats and FX', 'Kick and 808', 'Reverb returns', 'The tag'], c: 1, why: 'The low end is the foundation.' },
        { q: 'Why dip the melody bus slightly around 2–4 kHz?', a: ['To add bass', 'To leave room for the vocal', 'To widen it', 'To change key'], c: 1, why: 'Vocal intelligibility lives there.' },
        { q: 'Where should the 808 sit in the stereo field?', a: ['Hard left', 'Mono, centre', 'Wide stereo', 'Side channel only'], c: 1, why: 'Mono low end is solid on every system.' }
      ],
      watch: [['Mixing a trap beat', 'how to mix a trap beat'], ['Mixing 808 and kick', 'mixing 808 and kick together'], ['Clipping in trap', 'clipping trap mix tutorial']],
      tools: ['drums'],
      beats: [TRAP_DEMO]
    },
    {
      id: 'trap-8', title: 'Trap · Part 8: Mastering, Exporting & Selling',
      minutes: 120,
      summary: 'Master to a competitive level, export the full beat package, and sell trap beats on YouTube and beat stores.',
      objectives: ['Master a trap beat for previews and leases', 'Export a professional beat package', 'Market and sell trap beats online'],
      body: '## Mastering the beat\nChain: gentle EQ → glue compression (1–2 dB) → soft clipper → limiter with a **-1 dBTP** ceiling. Trap previews are commonly **-7 to -9 LUFS** integrated. Listen for distortion on the 808 and pumping; if the limiter works more than 4–6 dB, fix it in the mix or use clipping earlier in the chain.\n\n## The beat package\n| File | Details |\n|---|---|\n| Tagged MP3 | 320 kbps, tag in the intro (and optionally once more mid-beat) |\n| Untagged WAV | 24-bit, mastered |\n| Trackouts | Kick, 808, Clap/Snare, Hats, Open hat, Perc, Melody, Counter, Pad, FX: each a 24-bit WAV from bar 1, same length, no master processing |\n| Licence | Your lease or exclusive terms |\n\nName files clearly: **"Nightfall_140bpm_Amin_808.wav"**.\n\n## Selling on YouTube\n- Title formula: **[Artist] Type Beat – "Beat Name"** (some add mood words or "(FREE)" when the beat is free for non-profit use, with paid licences for releases).\n- Description: licence link, BPM, key, contact, short licence summary.\n- Thumbnail: clean image, readable text, consistent style.\n- Tags: artist types, mood, "trap beat", BPM.\n- Upload consistently (several times per week is common) and study analytics: which artist types and moods convert.\n- Pin a comment with your store link.\n\n## Beat stores and leases\nList the beat on your store with lease tiers (MP3, WAV, trackouts, unlimited, exclusive). Offer bulk deals. Respond to messages fast. When an artist buys, deliver the files and licence immediately.\n\n## Content ID\nDo not register leased beats in Content ID yourself without understanding the consequences: your own buyers can get claimed. Many producers only use it for exclusives or their own releases.\n\n## After the sale\nAsk for the song link, share it, and offer the next beat. Repeat customers are the core of a beat business.',
      steps: [
        'Master your mixed beat to about -8 LUFS with -1 dBTP and check for distortion.',
        'Export the tagged MP3, the untagged WAV and all trackouts from bar 1.',
        'Name every file with title, BPM and key.',
        'Write a YouTube title, description and tags; make a thumbnail.',
        'List the beat on your beat store with lease tiers.',
        'Upload, pin your store link, and share the beat with five artists directly.',
        'Track views, clicks and sales for two weeks.'
      ],
      tips: ['Make a thumbnail template so uploads take minutes.', 'Upload at consistent days and times.', 'Keep a spreadsheet of every beat, licence and buyer.'],
      mistakes: ['Over-limiting until the 808 distorts.', 'Trackouts with master processing baked in.', 'Unclear licence terms.'],
      assignment: {
        title: 'Release-Ready Trap Beat',
        brief: 'Master, package and publish your masterclass beat.',
        deliverables: ['A mastered beat at about -7 to -9 LUFS, -1 dBTP', 'Tagged MP3, untagged WAV and trackouts', 'Correctly named files', 'YouTube title, description, tags and thumbnail', 'Beat store listing with lease tiers', 'Two-week analytics notes']
      },
      quiz: [
        { q: 'What true-peak ceiling should the limiter use?', a: ['+1 dBTP', 'About -1 dBTP', '-10 dBTP', 'No ceiling'], c: 1, why: '-1 dBTP avoids encoding distortion.' },
        { q: 'Trackouts should be exported...', a: ['With the master limiter on', 'From bar 1, same length, without master processing', 'As MP3s', 'Only the melody'], c: 1, why: 'Engineers need clean, aligned stems.' },
        { q: 'A common YouTube title format for beats is...', a: ['"Untitled 4"', '[Artist] Type Beat – "Beat Name"', 'Your name only', 'The BPM only'], c: 1, why: 'Artists search by artist type.' }
      ],
      watch: [['Mastering trap beats', 'how to master a trap beat loud'], ['Exporting trackouts', 'how to export stems trackouts FL Studio'], ['Selling beats on YouTube', 'how to sell beats on YouTube type beats']],
      tools: ['calc'],
      beats: [TRAP_DEMO]
    },
    {
      id: 'trap-9', title: 'Trap · Part 9: Modern Trap Styles & Capstone',
      minutes: 240,
      summary: 'Dark trap, Atlanta bounce and how trap keeps evolving, then three capstone beats.',
      objectives: ['Distinguish modern trap sub-styles', 'Keep your sound current without copying', 'Deliver three finished trap beats'],
      body: '## Modern trap styles\n| Style | Signature | Tempo |\n|---|---|---|\n| Dark trap | Eerie piano, strings, choirs, harmonic minor, sparse heavy drums | 125–145 |\n| Lex Luger-style | Orchestral brass and strings, aggressive rolls, huge 808s | 140–150 |\n| Atlanta bounce | Bouncy kicks and 808s, playful bells or pianos, syncopated hats | 140–160 |\n| Melodic trap | Guitar and piano loops, sung vocals (next masterclass) | 140–170 |\n| Plugg / pluggnb | Airy synths, sparse drums (masterclass in this semester) | 140–160 |\n| Rage | Distorted supersaws (masterclass in this semester) | 150–170 |\n\nLoad the **Dark trap** demo above: piano in A minor with a G# leading tone, low strings and heavy 808s at 132 BPM.\n\n## Staying current\n- Every month, analyse three new trap hits: tempo, key, melody instrument, drum pattern, 808 style, arrangement, vocal style.\n- Notice what is **new** (a sound, a rhythm) and what is **constant** (half-time, 808s, hats).\n- Take one new idea per month into your own beats; combine it with your signature.\n\n## Your signature\nGreat trap producers are recognisable in seconds: a tag, a melody style, a drum bounce, an 808 sound. Decide three things that will be "yours" and use them consistently.\n\n## Capstone\nProduce three complete trap beats in different sub-styles (for example: dark trap, Atlanta bounce, and Lex Luger-style), each mixed, mastered and packaged, and pitch them to artists.',
      steps: [
        'Load the Dark trap demo in the Beat Lab and rebuild it in your DAW.',
        'Analyse three current trap hits with the monthly checklist.',
        'Write down three elements that will be your signature.',
        'Produce capstone beat 1 (dark trap).',
        'Produce capstone beat 2 (Atlanta bounce or Lex Luger-style).',
        'Produce capstone beat 3 (your choice, using one new idea from your analysis).',
        'Package all three and send them to at least five artists.'
      ],
      tips: ['Schedule the monthly analysis in your calendar.', 'Collaborate with a loop maker or another producer on one beat.', 'Keep your signature, change your ideas.'],
      mistakes: ['Copying the latest hit note for note.', 'Losing your identity chasing trends.', 'Never finishing because you keep tweaking.'],
      assignment: {
        title: 'Trap Capstone: Three Beats',
        brief: 'Finish the trap masterclass with three beats an artist could release.',
        deliverables: ['Three finished trap beats in different sub-styles', 'Full export packages for each', 'Monthly analysis notes for three current hits', 'Your three signature elements written down', 'Sent to at least five artists, with responses logged'],
        stretch: 'Record an artist on one beat and mix the full song.'
      },
      quiz: [
        { q: 'Dark trap typically uses...', a: ['Bright major ukulele', 'Eerie piano, strings and harmonic minor', 'Four-on-the-floor kicks', 'Jazz swing'], c: 1, why: 'Dark trap leans on eerie, minor textures.' },
        { q: 'A healthy way to stay current is to...', a: ['Copy hits note for note', 'Analyse new hits monthly and adopt one new idea at a time', 'Ignore new music', 'Change your tag every week'], c: 1, why: 'Learn the trend, keep your identity.' },
        { q: 'A producer "signature" is...', a: ['A legal document', 'Recognisable elements like a tag, melody style, bounce or 808 sound', 'Your DAW brand', 'Your BPM'], c: 1, why: 'Signatures make you recognisable.' }
      ],
      watch: [['Dark trap beat from scratch', 'how to make dark trap beat'], ['Atlanta bounce beat', 'atlanta bouncy trap beat tutorial'], ['Lex Luger style beat', 'Lex Luger type beat tutorial brass']],
      tools: ['drums'],
      beats: [DARK_DEMO, TRAP_DEMO]
    }
  ];

  window.ACADEMY.hhSemester({
    id: 'hh10',
    no: 10,
    title: 'The Trap Era',
    tagline: 'A full 9-part trap masterclass, then melodic trap, plugg and pluggnb, rage and phonk.',
    weeks: 12,
    outcomes: [
      'Produce complete, sellable trap beats from an empty session',
      'Program pro-level hats, rolls and gliding 808s',
      'Write melodic trap, plugg, rage and phonk authentically',
      'Mix, master, package and sell beats online'
    ],
    styles: [
      {
        id: 'trap', name: 'Trap (Atlanta)', origin: 'Atlanta', era: '2003–present', bpm: [130, 160], feel: 'Half-time (snare on beat 3)',
        sig: 'Rapid hi-hat rolls over long, sliding 808s in half-time',
        lessons: trapLessons
      },
      {
        id: 'melodic-trap', name: 'Melodic Trap & Emo Rap', origin: 'Atlanta, Los Angeles and the SoundCloud scene', era: '2016–present', bpm: [140, 170],
        feel: 'Half-time with softer, sparser hats', keys: 'Minor with emotional progressions; guitar-friendly keys like E minor and A minor', swing: '50% (straight)',
        sig: 'Emotional guitar and piano loops with sung, Auto-Tuned melodies over trap drums',
        history: 'Melodic trap blends trap drums and 808s with emotional chords and sung, Auto-Tuned vocals. Future, Young Thug and Lil Uzi Vert pushed rap toward melody, while SoundCloud emo rap artists such as **Lil Peep** and **XXXTentacion** mixed rap with emo and rock. **Juice WRLD**\'s "Lucid Dreams" (2018), produced by **Nick Mira** and built on a cleared guitar sample from Sting\'s "Shape of My Heart", became a defining hit. Collectives like **Internet Money** (Taz Taylor, Nick Mira and others) popularised a collaborative culture where melody makers and drum producers split credits.',
        signature: ['Acoustic or electric guitar loops (arpeggios, fingerpicking)', 'Piano and string progressions with emotional minor chords', 'Sung, Auto-Tuned melodic vocals', 'Trap drums with smoother, less aggressive hats', '808s that follow the chords with gentle glides', 'Reverb-rich, spacious mixes'],
        study: [['Nick Mira', 'Guitar loops and emotional melodies (Juice WRLD)'], ['Taz Taylor / Internet Money', 'Loop-making collectives and melodic trap at scale'], ['Wheezy', 'Melodic trap for Future, Young Thug and others'], ['Cubeatz', 'Melody loops used on major trap records'], ['Pi\'erre Bourne', 'Playful, melodic synth work']],
        palette: [['Guitar', 'Your own recorded guitar, guitar libraries, or the Beat Lab guitar for sketches'], ['Piano and strings', 'Soft or felt pianos, string pads'], ['Ambient textures', 'Reversed guitars, vinyl, rain, pads'], ['808', 'A smooth, tuned 808 with moderate saturation'], ['Soft trap drums', 'Softer claps and snaps; crisp, not harsh, hats']],
        gear: 'Melodic trap is mostly made in DAWs (FL Studio is popular with many melodic trap producers) with guitar libraries, recorded guitars and piano instruments. A basic guitar and an audio interface let you record your own loops, which sound unique and avoid sample problems.',
        drums: 'Half-time with the clap on beat 3, like trap, but **simpler and softer**: fewer rolls, more 8th-note hats, kicks that follow the guitar rhythm, snaps and reverse cymbals. Drop the drums out for emotional moments and bring them back hard.',
        patterns: [
          { name: 'Melodic trap', bpm: 150, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', ohh: '......x.......x.', note: 'Clean and simple' },
          { name: 'Emo bounce', bpm: 160, swing: 50, kick: 'x......x..x.....', clap: '........x.......', chh: 'x...x.x.x...x.xx', note: 'Bouncier with gaps' },
          { name: 'Half-time ballad', bpm: 140, swing: 50, kick: 'x...............', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', note: 'Space for the vocal' }
        ],
        drumProcessing: 'Clean and slightly softer than aggressive trap: reverb on the clap, gentle saturation, light clipping at most.',
        melody: '- Play or program **guitar arpeggios in 8ths** over emotional progressions: **i – VI – III – VII** (Em – C – G – D) or **vi – IV – I – V**.\n- Use open-string voicings for a real-guitar sound.\n- Double the guitar with a quiet piano or pad an octave up.\n- Reverse reverb into chord changes; stack octaves for the hook.\n- The singer\'s melody is the hook: keep the beat\'s top end open.\n- Vary bars 7–8 of each 8-bar loop.',
        bass: 'The 808 follows the **chord roots** with sustained notes and **gentle glides at chord changes**, smoother and less distorted than in aggressive trap.',
        demo: { name: 'Melodic Trap (demo)', bpm: 150, swing: 50, bars: 2, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', ohh: '..............x.',
          keys: { inst: 'guitar', notes: [[0, 52, 2], [2, 59, 2], [4, 64, 2], [6, 67, 2], [8, 48, 2], [10, 55, 2], [12, 60, 2], [14, 64, 2], [16, 55, 2], [18, 59, 2], [20, 62, 2], [22, 67, 2], [24, 50, 2], [26, 57, 2], [28, 62, 2], [30, 66, 2]] },
          keys2: { inst: 'piano', notes: [[0, 79, 4], [8, 76, 4], [16, 74, 4], [24, 78, 4]] },
          bass: { inst: '808', notes: [[0, 28, 8], [8, 36, 8, 0.9, 1], [16, 31, 8, 0.9, 1], [24, 38, 8, 0.9, 1]] } },
        demoNote: 'An Em – C – G – D (i–VI–III–VII) guitar arpeggio, a sparse high piano line, and a smooth 808 gliding between chord roots.',
        method: ['Pick an emotional progression (i–VI–III–VII or vi–IV–I–V).', 'Play or program a guitar arpeggio in 8ths.', 'Double it quietly with piano or a pad an octave up.', 'Write a smooth 808 on the chord roots with glides at changes.', 'Program half-time drums with fewer hats and more space.', 'Leave the top end open for the singer.'],
        arrangement: [['1–4', 'Intro', 'Guitar alone (filtered), tag'], ['5–20', 'Hook (16)', 'Drums and 808 in; the singer\'s hook'], ['21–36', 'Verse 1 (16)', 'Simpler drums; piano out'], ['37–52', 'Hook', 'Full, plus strings or a counter-melody'], ['53–68', 'Verse 2', 'A drum dropout halfway for emotion'], ['69–84', 'Hook', 'Full'], ['85–88', 'Outro', 'Guitar alone with a reverb tail']],
        vocals: 'Melodic trap is sung-rap: melodies, harmonies and Auto-Tune set to the key with a fast retune for the classic sound. Record many takes and comp; stack doubles and harmonies in the hook. In the beat, keep the guitar in the low mids and avoid busy top melodies that compete with the voice.',
        mix: 'Guitar warm (tame 2–4 kHz harshness), spacious with reverb and delay, wide. 808 smooth and mono. Drums softer than aggressive trap. Leave a vocal pocket around 1–5 kHz; sidechain pads lightly.',
        master: 'About -8 to -10 LUFS with -1 dBTP; keep it smooth rather than crushed.',
        sell: 'Melodic trap sells strongly on YouTube to singers and melodic rappers. Use "melodic", "guitar" and "emotional" with relevant artist types in titles. Record your own guitar loops; if you use a loop maker\'s melody, agree credit and splits in writing.',
        tips: ['Learn five guitar chords or work with a guitarist: real guitar lifts these beats instantly.', 'Simplify the drums when the melody is emotional.', 'Build a library of your own 8-bar melody loops.'],
        mistakes: ['Busy hats fighting the emotion.', 'Harsh, bright guitar loops.', 'Using loops without agreed splits.'],
        quiz: [
          { q: 'Who produced Juice WRLD\'s "Lucid Dreams"?', a: ['Nick Mira', 'DJ Premier', 'Dr. Dre', 'Kanye West'], c: 0, why: 'Nick Mira produced "Lucid Dreams" (2018).' },
          { q: 'Compared with aggressive trap, melodic trap drums are usually...', a: ['Busier with constant rolls', 'Simpler and softer, with more space', 'Four-on-the-floor', 'Absent'], c: 1, why: 'Space supports the emotional melody.' },
          { q: 'Which instrument is most associated with melodic trap loops?', a: ['Cowbell', 'Guitar', 'Sitar', 'Accordion'], c: 1, why: 'Guitar loops define the sound.' },
          { q: 'If you use a loop maker\'s melody, you should...', a: ['Credit no one', 'Agree credits and splits in writing', 'Pitch it to hide it', 'Only use it on YouTube'], c: 1, why: 'Loop splits must be agreed.' }
        ],
        watch: { 1: [['"Lucid Dreams" production story', 'Nick Mira Lucid Dreams breakdown'], ['Internet Money making beats', 'Internet Money making beats']], 3: [['Guitar loops for trap', 'how to make guitar loop trap beat'], ['Emotional chord progressions', 'emotional chord progressions trap']] },
        capstone: 'Record (or program) your own guitar loop, turn it into a full melodic trap beat, and send it to a singer.'
      },
      {
        id: 'plugg', name: 'Plugg & Pluggnb', origin: 'Atlanta and the online underground', era: 'Mid-2010s–present', bpm: [140, 160],
        feel: 'Half-time, airy and bouncy', keys: 'Bright or dreamy; major 7 and minor 9 chords in pluggnb', swing: '50% (straight)',
        sig: 'Bright, airy synth melodies over sparse, snappy drums and bouncing 808s, with R&B chords in pluggnb',
        history: 'Plugg grew in the mid-2010s from Atlanta producers such as **MexikoDro** and **StoopidXool**, associated with the BeatPluggz collective: bright, airy synth melodies, sparse drums with snappy claps, and distinctive bouncing 808s. **Pi\'erre Bourne**\'s playful, synth-driven production for Playboi Carti brought a related sound to the mainstream. Around 2019, **pluggnb** fused plugg drums and 808s with R&B chords and sung vocals, led by artists such as **Summrs** and **Autumn!** and a wave of online producers.',
        signature: ['Bright, airy synth leads and bells: simple, catchy, repetitive', 'Sparse drums: a snappy clap, minimal hats, little percussion', 'Bouncing 808 patterns', 'Pluggnb: R&B chords (maj7, m9), dreamy pads, sung vocals', 'Soft, wide, reverb-rich mixes'],
        study: [['MexikoDro', 'Plugg pioneer: airy synths and bounce'], ['StoopidXool', 'Early plugg production'], ['Pi\'erre Bourne', 'Playful synth melodies and drums'], ['Summrs', 'Pluggnb vocals and style'], ['Autumn!', 'Pluggnb melodies and production']],
        palette: [['Plugg synths', 'Soft square or sine leads, bells, flutes, gentle detune'], ['Snappy claps', 'Short claps or snaps'], ['Bouncy 808', 'An 808 with a short-to-medium tail and punchy attack'], ['Pluggnb chords', 'Electric piano and pads playing maj7 and m9 chords'], ['Atmosphere', 'Reverb, chorus, soft noise']],
        gear: 'Plugg is a laptop genre: a DAW and soft synths. The sound comes from simple sounds used with taste.',
        drums: 'Sparse and bouncy. **Clap on beat 3**, kicks often doubled or replaced by 808 hits, hats in simple 8ths or sparse patterns with the occasional roll, very little percussion. **The 808 rhythm is the main groove.**',
        patterns: [
          { name: 'Plugg bounce', bpm: 150, swing: 50, kick: 'x..x......x.....', clap: '........x.......', chh: 'x...x...x...x...', sub: 'x..x......x..x..', note: 'Bouncing 808 hits drive the groove' },
          { name: 'Pluggnb', bpm: 146, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', ohh: '..............x.', note: 'Smoother R&B-leaning groove' },
          { name: 'Sparse plugg', bpm: 155, swing: 50, kick: 'x...............', clap: '........x.......', chh: 'x.....x.....x...', sub: 'x.....x...x.....', note: 'Minimal drums, 808 does the work' }
        ],
        drumProcessing: 'Light and clean: snappy claps with short reverb, hats soft, no heavy clipping.',
        melody: '- **Plugg**: bright, simple lead melodies in major or minor pentatonic; 2-bar repeating motifs; a bell layered with a soft lead.\n- **Pluggnb**: R&B chord loops with maj7 and m9 chords, like **Fmaj7 – Em7 – Dm7 – Cmaj7** (IV – iii – ii – I in C), dreamy pads and electric piano.\n- Add a counter-melody an octave apart, quietly.',
        bass: '808 patterns **bounce**: repeated roots with syncopation and octave jumps, shorter tails than dark trap. In pluggnb, the 808 follows chord roots with smooth glides.',
        demo: { name: 'Pluggnb (demo)', bpm: 148, swing: 50, bars: 2, kick: 'x..x......x.....', clap: '........x.......', chh: 'x...x...x...x...',
          keys: { inst: 'bell', notes: [[0, 72, 2], [2, 76, 2], [4, 79, 2], [6, 76, 2], [8, 74, 2], [10, 79, 4], [16, 72, 2], [18, 77, 2], [20, 81, 2], [22, 77, 2], [24, 76, 4], [28, 74, 2]] },
          keys2: { inst: 'epiano', notes: [[0, 53, 8], [0, 57, 8], [0, 60, 8], [0, 64, 8], [8, 52, 8], [8, 55, 8], [8, 59, 8], [8, 62, 8], [16, 50, 8], [16, 53, 8], [16, 57, 8], [16, 60, 8], [24, 48, 8], [24, 52, 8], [24, 55, 8], [24, 59, 8]] },
          bass: { inst: '808', notes: [[0, 29, 3], [3, 29, 3], [6, 41, 2], [8, 28, 6], [14, 40, 2], [16, 26, 3], [19, 26, 3], [22, 38, 2], [24, 36, 8, 0.9, 1]] } },
        demoNote: 'A pluggnb loop: Fmaj7 – Em7 – Dm7 – Cmaj7 on electric piano, a bright bell lead, and a bouncing 808 with octave jumps.',
        method: ['Choose a bright lead sound and a soft chord sound.', 'Write a 2-bar catchy motif (plugg) or a maj7/m9 loop (pluggnb).', 'Program a bouncing 808 pattern with octave jumps.', 'Add a sparse drum pattern: clap on 3, minimal hats.', 'Add reverb and chorus for air; keep it soft.'],
        arrangement: [['1–4', 'Intro', 'Lead alone with reverb, tag'], ['5–20', 'Hook', '808 and clap in; melody full'], ['21–36', 'Verse', 'Simpler hats; counter-melody out'], ['37–52', 'Hook', 'Full, plus an extra bell layer'], ['53–68', 'Verse 2', '808 pattern variation'], ['69–76', 'Outro', 'Melody alone']],
        vocals: 'Plugg vocals are melodic and playful, often heavily processed; pluggnb is sung with R&B phrasing and harmonies. Keep the lead simple when the vocal is busy, and leave space.',
        mix: 'Soft and wide: leads with chorus and reverb, snappy claps without harshness, a bouncy mono 808. Less aggression than trap; no heavy clipping.',
        master: 'About -8 to -10 LUFS with -1 dBTP.',
        sell: 'Online underground and pluggnb artists on YouTube and SoundCloud. Tag "plugg" and "pluggnb" with relevant artist types. Many producers also sell plugg melody kits and presets.',
        tips: ['Simple sounds, used tastefully, beat complex sound design here.', 'Write motifs you can hum after one listen.', 'Let the 808 carry the rhythm; keep drums sparse.'],
        mistakes: ['Overly busy drums.', 'Harsh, aggressive mixes that lose the airy feel.', 'Melodies that are too complex to remember.'],
        quiz: [
          { q: 'Which producers are early plugg pioneers?', a: ['MexikoDro and StoopidXool', 'DJ Premier and Pete Rock', 'Dr. Dre and DJ Quik', 'Lil Jon and Mannie Fresh'], c: 0, why: 'They shaped plugg in the mid-2010s.' },
          { q: 'Plugg drums are typically...', a: ['Dense with constant percussion', 'Sparse, with a snappy clap and a bouncing 808 groove', 'Swung boom bap', 'Four-on-the-floor'], c: 1, why: 'Sparse drums let the melody and 808 bounce.' },
          { q: 'Pluggnb adds which element to plugg?', a: ['R&B chords and sung vocals', 'Heavy metal guitars', 'Dembow drums', 'Talk box only'], c: 0, why: 'Pluggnb fuses plugg with R&B.' },
          { q: 'A plugg mix is usually...', a: ['Harsh and heavily clipped', 'Soft, wide and airy', 'Mono and dry', 'Muffled and lo-fi'], c: 1, why: 'Airy space is part of the sound.' }
        ],
        watch: { 1: [['What is plugg?', 'what is plugg music explained'], ['Pluggnb explained', 'pluggnb beat tutorial']], 3: [['Plugg melodies', 'how to make plugg melody'], ['Plugg 808 bounce', 'plugg 808 pattern tutorial']] },
        capstone: 'Make one plugg beat and one pluggnb beat that share the same 808 bounce.'
      },
      {
        id: 'rage', name: 'Rage', origin: 'The US internet underground', era: '2020–present', bpm: [150, 170],
        feel: 'Half-time with aggressive energy', keys: 'Minor; simple arpeggiated synth riffs', swing: '50% (straight)',
        sig: 'Distorted, detuned supersaw synth riffs over hard 808s at fast tempos',
        history: 'Rage emerged around 2020 when trap producers borrowed the detuned supersaw leads of trance and EDM, distorted them, and played simple, aggressive riffs over hard 808s. **Playboi Carti**\'s *Whole Lotta Red* (December 2020) and **Trippie Redd**\'s "Miss the Rage" (2021, featuring Playboi Carti, produced by **Loesoe**) defined the moment. Artists such as **Ken Carson** and **Destroy Lonely** carried the sound forward, with producers like **F1LTHY** and **Outtatown** central to it.',
        signature: ['Distorted, detuned supersaw leads (trance-inspired)', 'Simple, repetitive arpeggios or stabs', 'Hard, distorted 808s', 'Fast tempos (around 150–170 BPM, half-time)', 'Loud, aggressive, wide mixes'],
        study: [['F1LTHY', 'Rage synths and production for the Opium camp'], ['Loesoe', '"Miss the Rage"'], ['Outtatown', 'Aggressive synth production'], ['Pi\'erre Bourne', 'Synth-driven trap that preceded rage']],
        palette: [['Supersaw lead', 'Serum, Vital or stock wavetable synths: 7–9 unison saws, detune, distortion (or the Beat Lab\'s "Distorted lead")'], ['Distorted 808', 'An 808 through saturation and a clipper'], ['Hard drums', 'Punchy kicks and claps, crisp hats'], ['FX', 'Risers, impacts, reverse crashes'], ['Voice tags', 'Your own processed tag']],
        gear: 'A wavetable synth (Serum, Vital, or your DAW\'s), distortion, multiband compression (OTT-style), and a clipper.',
        drums: 'Hard and simple: **clap on beat 3**, kicks locked with a distorted 808, hats in 8ths or sparse patterns with short rolls. Often the drums stay minimal so the synth carries the energy; switch-ups and drum dropouts add drama.',
        patterns: [
          { name: 'Rage stomp', bpm: 160, swing: 50, kick: 'x.....x...x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.....x...x.....', note: 'Hard and locked with the 808' },
          { name: 'Rage sparse', bpm: 155, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x...x...x...x...', note: 'Let the synth drive' },
          { name: 'Rage roll', bpm: 165, swing: 50, kick: 'x..x......x.....', clap: '........x.......', chh: 'x.x.x.x.x.xxxxxx', note: 'A roll into the next bar' }
        ],
        drumProcessing: 'Clip the drum bus hard (2–4 dB), saturate claps, keep the kick short and clicky so it cuts through the synth and 808.',
        melody: '- **The rage synth**: several detuned saws plus an octave layer, distortion and short release.\n- Write **simple 2–4 note arpeggios or stabs** in minor, often over one chord or i – VI.\n- Automate filter sweeps and use pitch bends for drama.\n- Layer a second synth an octave up for the hook.\n- Keep chords simple; the timbre is the hook.',
        bass: 'A loud, distorted 808 with punch, following the kick, with occasional glides. Saturate and clip it for presence; keep the sub mono.',
        demo: { name: 'Rage (demo)', bpm: 160, swing: 50, bars: 2, kick: 'x.....x...x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.',
          keys: { inst: 'lead', notes: [[0, 65, 2], [2, 68, 2], [4, 72, 2], [6, 77, 2], [8, 72, 2], [10, 68, 2], [12, 65, 2], [14, 68, 2], [16, 61, 2], [18, 65, 2], [20, 68, 2], [22, 73, 2], [24, 68, 2], [26, 65, 2], [28, 61, 2], [30, 65, 2]] },
          bass: { inst: '808', notes: [[0, 29, 6], [6, 29, 4], [10, 29, 6], [16, 25, 6], [22, 25, 4], [26, 37, 6, 0.9, 1]] } },
        demoNote: 'A distorted supersaw arpeggio on F minor and D flat with hard, gliding 808s.',
        method: ['Design the supersaw: detuned saws, octave layer, distortion.', 'Write a 2-bar arpeggio over one or two minor chords.', 'Add a hard 808 following the kick.', 'Program minimal hard drums.', 'Automate a filter sweep into the hook and a pitch bend on the last bar.'],
        arrangement: [['1–4', 'Intro', 'Synth alone, filtered, tag'], ['5–20', 'Hook', 'Everything, synth full'], ['21–36', 'Verse', 'Synth filtered or a second, simpler riff'], ['37–52', 'Hook', 'Full, plus an octave layer'], ['53–56', 'Switch-up', 'Drums out, synth pitch bend or tape stop'], ['57–72', 'Verse 2 / hook', 'Full energy'], ['73–76', 'Outro', 'Synth alone, filter out']],
        vocals: 'Rage vocals are energetic: punchy, often distorted or heavily processed, with ad-libs. The synth is loud, so carve space for the vocal (dip the synth bus around 2–4 kHz) and keep the vocal bright and compressed.',
        mix: 'Loud and aggressive: synth wide and distorted, 808 and kick clipped together, claps cutting. Use multiband compression on the synth to control harshness. Mono-check the synth: heavy unison can thin out in mono.',
        master: 'Loud: about -5 to -8 LUFS, -1 dBTP; watch for distortion that is not intentional.',
        sell: 'Young, energetic artists and underground scenes on YouTube and SoundCloud. Tag "rage" with relevant artist types. Sell synth presets and rage melody kits.',
        tips: ['Spend time on the synth sound: in rage, the timbre is the hook.', 'Check the beat in mono; supersaws can collapse.', 'Use switch-ups to keep energy high.'],
        mistakes: ['Complex chords that weaken the riff.', 'Muddy low end from synth and 808 overlap.', 'Harsh highs from distortion without multiband control.'],
        quiz: [
          { q: 'Which album helped define rage in 2020?', a: ['Playboi Carti – Whole Lotta Red', 'Nas – Illmatic', 'Dr. Dre – 2001', 'A Tribe Called Quest – Midnight Marauders'], c: 0, why: 'Whole Lotta Red set the rage template.' },
          { q: 'Rage drums usually...', a: ['Swing heavily', 'Hit hard and let the synth drive the energy', 'Use four-on-the-floor', 'Are absent'], c: 1, why: 'The synth carries the energy over hard drums.' },
          { q: 'The rage lead is typically...', a: ['A clean sine flute', 'A distorted, detuned supersaw', 'A nylon guitar', 'A harpsichord'], c: 1, why: 'Distorted supersaws define rage.' },
          { q: 'A rage mix is usually...', a: ['Quiet and dynamic', 'Loud, aggressive and wide', 'Mono and lo-fi', 'Acoustic'], c: 1, why: 'Aggression and loudness are part of the style.' }
        ],
        watch: { 1: [['What is rage beat?', 'rage beat explained history'], ['Whole Lotta Red production', 'Whole Lotta Red production breakdown']], 3: [['Rage synth sound design', 'rage synth serum vital tutorial'], ['Rage beat from scratch', 'how to make rage beat']] },
        capstone: 'Design your own rage synth preset and use it in two beats with different riffs.'
      },
      {
        id: 'phonk', name: 'Phonk', origin: 'Memphis roots, grown on SoundCloud and global social media', era: 'SoundCloud phonk in the 2010s; drift and Brazilian phonk in the 2020s', bpm: [120, 145],
        feel: 'Drift phonk drives with claps on 2 and 4; classic phonk is half-time', keys: 'Minor and Phrygian cowbell riffs', swing: '50% (straight)',
        sig: 'Cowbell melodies and heavily distorted 808s with Memphis-style vocal chops',
        history: 'Phonk takes its name and DNA from 1990s Memphis rap. In the 2010s, SoundCloud producers and artists such as **SpaceGhostPurrp**, **DJ Smokey** and **Soudiere** revived Memphis cowbells, lo-fi tape grit and dark vocal chops. In the early 2020s, **drift phonk** exploded on social media and car-culture videos: hard, distorted 808s, aggressive cowbell melodies and driving tempos, with hits like **Kordhell**\'s "Murder in My Mind" (2022) and **DVRST**\'s "Close Eyes" (2021). Brazilian funk then blended into phonk, creating new hybrids.',
        signature: ['808 cowbell melodies as the main hook', 'Heavily distorted, clipped 808s', 'Memphis-style vocal chops (record your own)', 'Hard kicks and snappy claps on 2 and 4 in drift phonk', 'Lo-fi tape texture in classic phonk'],
        study: [['DJ Smokey', 'SoundCloud phonk and the Memphis revival'], ['SpaceGhostPurrp', 'Raw, dark phonk aesthetics'], ['Kordhell', 'Drift phonk ("Murder in My Mind")'], ['DVRST', 'Drift phonk ("Close Eyes")'], ['Ghostface Playa', 'Drift phonk cowbell riffs']],
        palette: [['Cowbell', '808 cowbell samples, or the Beat Lab\'s pitched cowbell'], ['Distorted 808', 'An 808 through heavy saturation and clipping'], ['Vocal chops', 'Your own recorded phrases, pitched and lo-fi\'d'], ['Hard drums', 'Punchy kicks, snappy claps, crisp hats'], ['Tape and lo-fi', 'Tape saturation and noise for classic phonk']],
        gear: 'Any DAW with an 808 cowbell, a saturator or clipper, and vocal processing. Drift phonk uses aggressive distortion chains on the 808 and cowbell.',
        drums: '**Drift phonk**: steady and hard, with kick patterns that drive and claps on **2 and 4** at 120–140 BPM, 8th or 16th hats. **Classic phonk**: a half-time Memphis groove with the clap on beat 3. The cowbell riff plays on top of both.',
        patterns: [
          { name: 'Drift phonk', bpm: 130, swing: 50, kick: 'x.....x...x.....', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', perc: 'x..x..x...x.x.x.', sub: 'x.....x...x.....', note: 'Hard, driving, cowbell on top' },
          { name: 'Classic phonk', bpm: 140, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.x.x.x.', perc: 'x..x..x.x..x..x.', note: 'Half-time Memphis groove' },
          { name: 'Brazilian phonk', bpm: 128, swing: 50, kick: 'x..x..x...x.x...', clap: '....x.......x...', perc: '..x..x....x..x..', sub: 'x..x..x...x.x...', note: 'Funk-influenced syncopation' }
        ],
        drumProcessing: 'Clip and saturate everything: drums, 808 and cowbell. Classic phonk adds tape grit and slight muffling.',
        melody: '- **Cowbell riffs** in minor or Phrygian, in 16th-note patterns, repeated.\n- Layer the cowbell with a distorted synth for extra aggression.\n- A dark pad underneath for atmosphere (optional).\n- Vocal chops as rhythmic hooks (your own recordings).',
        bass: 'A heavily distorted 808 following the kick, long or short; clip it; keep the sub mono.',
        demo: { name: 'Drift Phonk (demo)', bpm: 130, swing: 50, bars: 2, kick: 'x.....x...x.....', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.',
          keys: { inst: 'cowbell', notes: [[0, 74, 1], [2, 74, 1], [3, 77, 1], [5, 74, 1], [6, 72, 1], [8, 74, 1], [10, 74, 1], [11, 77, 1], [13, 75, 1], [14, 74, 1], [16, 74, 1], [18, 74, 1], [19, 77, 1], [21, 74, 1], [22, 72, 1], [24, 70, 1], [26, 70, 1], [27, 72, 1], [29, 74, 1], [30, 72, 1]] },
          bass: { inst: '808', notes: [[0, 38, 6], [6, 38, 4], [10, 38, 6], [16, 38, 6], [22, 38, 4], [26, 34, 6]] } },
        demoNote: 'A D Phrygian cowbell riff (listen for the E flat), distorted 808s and a hard drift-phonk groove with claps on 2 and 4.',
        method: ['Write a 2-bar cowbell riff in minor or Phrygian.', 'Program a driving kick and claps on 2 and 4 (drift) or a half-time groove (classic).', 'Add a distorted 808 following the kick.', 'Record a vocal phrase, pitch it down and lo-fi it for a chop.', 'Clip and saturate for aggression.'],
        arrangement: [['1–4', 'Intro', 'Cowbell alone or with a vocal chop'], ['5–20', 'Drop', 'Everything, full aggression'], ['21–24', 'Break', 'Cowbell and chops only'], ['25–40', 'Drop 2', 'Full, with a cowbell variation'], ['41–44', 'Outro', 'Cowbell alone, fade or hard stop']],
        vocals: 'Phonk often uses chopped vocal phrases rather than full verses, though rappers ride it too. Record your own phrases, pitch them down or up, and add tape and distortion. Keep vocal chops rhythmic and repeated.',
        mix: 'Loud and saturated: 808 and cowbell dominant, claps cutting, drums clipped. Watch harshness in the cowbell (tame 3–5 kHz if needed). Keep the low end mono.',
        master: 'Loud: about -5 to -8 LUFS with -1 dBTP.',
        sell: 'Phonk thrives on social media, car and gaming content, workout playlists and streaming. Release instrumentals directly, and sell cowbell and phonk drum kits. Never use vocals from old Memphis tapes without clearance; record your own.',
        tips: ['The cowbell riff is the hook: write ten and keep the best.', 'Short tracks (2–2:30) suit how phonk is consumed.', 'Record your own vocal phrases with heavy processing for a unique sound.'],
        mistakes: ['Uncleared Memphis vocal samples.', 'Harsh cowbells with no EQ control.', 'Weak, clean 808s that lack aggression.'],
        quiz: [
          { q: 'Phonk takes its roots from which scene?', a: ['1990s Memphis rap', 'UK garage', 'Detroit techno', 'K-pop'], c: 0, why: 'Phonk revives Memphis aesthetics.' },
          { q: 'Drift phonk drums usually put claps...', a: ['On beat 3 only', 'On 2 and 4 with a hard driving kick', 'Nowhere', 'On every 16th'], c: 1, why: 'Drift phonk drives with claps on 2 and 4.' },
          { q: 'What usually plays the main hook in phonk?', a: ['A cowbell melody', 'A string quartet', 'A banjo', 'A choir'], c: 0, why: 'Cowbell riffs are the phonk hook.' },
          { q: 'Vocal chops in your phonk beats should be...', a: ['Lifted from old Memphis tapes', 'Your own recordings, processed to sound lo-fi', 'Avoided', 'Only in English'], c: 1, why: 'Old tape vocals are copyrighted.' }
        ],
        watch: { 1: [['Phonk history', 'phonk music history Memphis drift'], ['Drift phonk explained', 'drift phonk explained']], 3: [['Phonk cowbell melodies', 'how to make phonk cowbell melody'], ['Distorted phonk 808', 'phonk 808 distortion tutorial']] },
        capstone: 'Make a drift phonk track and a classic half-time phonk track with the same cowbell riff.'
      }
    ],
    project: {
      id: 'hh10-project',
      title: 'Semester Project: The Trap Era Pack',
      minutes: 1500,
      summary: 'Five beats across trap, melodic trap, plugg, rage and phonk, published and tracked.',
      objectives: ['Prove range across modern trap styles', 'Run a real publishing and sales test'],
      body: '## The brief\nProduce five beats: **trap** (dark or bounce), **melodic trap**, **plugg or pluggnb**, **rage** and **phonk**. Each must follow its arrangement template, be mixed and mastered, and have a full export package.\n\nThen publish all five to your beat store and YouTube (or SoundCloud) with proper titles, thumbnails and licence links, and track results for 14 days: views, clicks, plays, emails and sales.\n\n## Review\nWhich style got the most response? Which converted? Plan your next month of uploads from the data.',
      steps: ['Trap beat finished', 'Melodic trap beat finished', 'Plugg or pluggnb beat finished', 'Rage beat finished', 'Phonk beat finished', 'All five published with titles, thumbnails and licences', '14-day results analysed'],
      assignment: { title: 'Trap Era Pack', brief: 'Five finished modern beats and a real market test.', deliverables: ['5 mastered beats with export packages', 'All five published online', 'A 14-day analytics report', 'A one-month upload plan based on the data'] },
      quiz: [
        { q: 'Why track 14 days of results after publishing?', a: ['To waste time', 'To learn which styles and titles actually convert, and plan from data', 'Platforms require it', 'To raise loudness'], c: 1, why: 'Data shows what your audience wants.' },
        { q: 'What should every published beat link to?', a: ['Nothing', 'Your store or licence terms', 'Another producer', 'A random playlist'], c: 1, why: 'Make buying easy.' }
      ],
      watch: [['Beat store analytics', 'beat selling analytics youtube beatstars']]
    }
  });
})();
