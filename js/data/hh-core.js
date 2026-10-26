/* Turns the general school into the Hip-Hop Academy: adds hip-hop core lessons to the
   foundation semesters, renumbers the business and studio semesters, moves non-hip-hop
   genres to electives, and updates the welcome lesson, roadmap, drills and glossary. */
(function () {
  const A = window.ACADEMY;
  const sem = function (id) { return A.semesters.find(function (s) { return s.id === id; }); };
  const lesson = function (s, id) { return s.lessons.find(function (l) { return l.id === id; }); };
  function insertAfter(semId, afterId, newLessons) {
    const s = sem(semId);
    const i = s.lessons.findIndex(function (l) { return l.id === afterId; });
    s.lessons.splice(i + 1, 0, ...newLessons);
  }
  function insertBefore(semId, beforeId, newLessons) {
    const s = sem(semId);
    const i = s.lessons.findIndex(function (l) { return l.id === beforeId; });
    s.lessons.splice(i, 0, ...newLessons);
  }

  // ---------- Welcome ----------
  const welcome = lesson(sem('s1'), 'f-welcome');
  welcome.title = 'Welcome to the Hip-Hop Academy';
  welcome.summary = 'How the academy works, the three years from first beat to studio owner, and the habits that make master producers.';
  welcome.objectives = ['Understand the 15-semester path from beginner to hip-hop studio owner', 'Adopt the "finish beats" mindset of working producers', 'Set up a producer journal and a schedule you can keep'];
  welcome.body = `
## What this academy is for
This school trains you to produce **every major style of hip-hop** at a professional level, record and develop artists, and run your own hip-hop studio business. It is organised like a real school, in three years and **15 semesters**, plus optional electives.

| Year | Semesters | You learn |
|---|---|---|
| 1. Producer foundations | 1–7 | Studio setup, hip-hop history, theory, rap structure and flow, drums and MPC workflow, sampling and loop making, sound design and 808s, recording rappers and singers, mixing rap vocals, mastering |
| 2. Hip-hop styles | 8–12 | Old school, boom bap, jazz rap, soul sampling, G-funk, Bay Area and ratchet, Memphis and crunk, Houston and bounce, a full trap masterclass, melodic trap, plugg, rage, phonk, drill (Chicago, UK, Brooklyn), grime, desi and Punjabi drill, Latin trap, Jersey club, hip-hop R&B and pop-rap, placements and sync |
| 3. Your hip-hop business | 13–15 | Copyright, royalties, selling beats, releasing music, opening and running a studio, artist development, graduation capstone |

## How every lesson works
- **Theory** in plain language, with tables and examples.
- **Step-by-step guide**: tick each step as you work in your DAW.
- **Watch and learn**: hand-picked YouTube searches for videos on the exact topic.
- **Practical assignment** with deliverables and a notes box.
- **Quiz**: score 70% to pass.

Each hip-hop style is a **masterclass** in four parts (the trap course has nine): sound and history, drums, melody and 808s, then arrangement, vocals, mixing and selling. Every style includes **demo beats you can play in the Beat Lab**, with drums, melody, chords and gliding 808s you can study note by note.

## Ranks and certificates
You earn XP for lessons, quizzes, assignments and logged practice, rising from **Rookie** to **Master Producer**. Each semester has a certificate, and finishing all 15 earns the **Master Hip-Hop Producer** diploma.

## The producer mindset
- **Finish beats.** A finished beat teaches arrangement, mixing and mastering; an endless loop teaches nothing.
- **Quantity builds quality.** Aim for at least three finished beats a week.
- **Study the greats.** Every style has producers who defined it; learn from them.
- **Train your ears daily** with the Ear Trainer.
- **Respect the culture and the rights.** Credit collaborators, sign split sheets, and clear samples.

## Your producer journal
Every session, write the date and minutes, what you made, one thing you learned and one problem to solve next time. Log practice on the Roadmap page for XP and your streak.
`;
  welcome.steps = [
    'Open Profile and enter your name for your certificates.',
    'Create a producer journal (notes app, document or notebook).',
    'Write your weekly schedule: days, times and minutes.',
    'Read the Roadmap page (the 24-month plan and weekly routine).',
    'Open the Beat Lab and play the trap demo; mute each layer to hear what it does.',
    'Log your first practice session on the Roadmap page.'
  ];
  welcome.assignment = {
    title: 'Your Hip-Hop Taste Map',
    brief: 'Collect the songs that will guide your training.',
    deliverables: [
      'A playlist of 15 hip-hop songs you love across at least 5 styles',
      'For each: style, BPM (Tap Tempo in the Metronome), key if you can find it, and the producer',
      'One sentence per song about what you love (drums, 808, sample, vocal, mood)',
      'A written weekly practice schedule',
      'Your first practice session logged on the Roadmap'
    ],
    stretch: 'Add 5 songs from hip-hop scenes outside your country.'
  };
  welcome.quiz = [
    { q: 'How is the Hip-Hop Academy organised?', a: ['One long video', 'Three years and 15 semesters plus electives', 'Only quizzes', 'A single beat tutorial'], c: 1, why: 'Foundations, hip-hop styles, then business and studio ownership.' },
    { q: 'What teaches you the most as a producer?', a: ['Perfecting one loop for months', 'Finishing many beats, even imperfect ones', 'Buying plugins', 'Watching tutorials without practising'], c: 1, why: 'Finishing trains every skill.' },
    { q: 'What should you always do when you collaborate?', a: ['Nothing', 'Credit collaborators and sign split sheets', 'Hide your files', 'Use uncleared samples'], c: 1, why: 'Rights and credits are part of the job.' }
  ];
  welcome.watch = [['Hip-hop producer documentaries', 'hip hop producer documentary'], ['A day in a producer\'s studio', 'hip hop producer day in the studio']];

  // ---------- New core lessons ----------
  insertAfter('s1', 'f-welcome', [{
    id: 'hh-history',
    title: 'Hip-Hop History & Culture: From the Bronx to the World',
    minutes: 60,
    summary: 'Fifty years of hip-hop in one lesson: the culture, the eras, the producers and the gear that shaped each sound.',
    objectives: ['Explain where hip-hop came from and its core elements', 'Name the production eras and their defining gear', 'Place any hip-hop style on the timeline'],
    body: `
## The birth of a culture
Hip-hop is usually dated to **11 August 1973**, when DJ Kool Herc played a back-to-school party at 1520 Sedgwick Avenue in the Bronx, extending the drum breaks of funk records with two turntables. Afrika Bambaataa, Grandmaster Flash and many others built the culture around four core elements: **DJing, MCing, breaking and graffiti**, with knowledge often called the fifth.

## Production eras
| Era | Years | Sound | Defining tools |
|---|---|---|---|
| Breaks and old school | 1973–1985 | Live breaks, disco and funk replays, early electro | Turntables, drum machines like the TR-808 |
| Drum machine era | 1984–1988 | Hard, minimal drum-machine beats (Run-DMC, early Def Jam) | Oberheim DMX, TR-808, early samplers |
| Golden age | 1987–1996 | Sample collages (Public Enemy\'s Bomb Squad), boom bap, jazz rap, G-funk | E-mu SP-1200, Akai MPC60/3000, Akai S950 |
| Mainstream and regional | 1996–2005 | Bad Boy and Roc-A-Fella soul, Timbaland and The Neptunes, the South rises (OutKast, UGK, Three 6 Mafia, Cash Money, No Limit), crunk | MPC2000XL, workstation keyboards, Pro Tools |
| Laptop and blog era | 2005–2012 | Snap, early trap, mixtape culture, Chicago drill begins | FL Studio, Logic, Ableton |
| Trap and streaming era | 2012–present | Trap dominates; SoundCloud rap, melodic trap, UK drill, rage, phonk; global scenes | DAWs, 808 samples, online beat stores and collaboration |

## How hip-hop became the biggest sound in the world
- **Run-DMC** and **Def Jam** took rap into the mainstream in the mid-80s.
- **N.W.A** and **Dr. Dre** built West Coast gangsta rap; **The Chronic** (1992) defined G-funk.
- New York\'s golden age: Public Enemy, Eric B. & Rakim, Wu-Tang Clan, Nas, The Notorious B.I.G.
- The South: OutKast with Organized Noize, UGK, Three 6 Mafia, Cash Money and No Limit, then crunk and trap from Atlanta.
- The 2000s: Timbaland, The Neptunes, Kanye West, Lil Wayne, 50 Cent and Dr. Dre.
- The 2010s: trap and streaming; in 2017, R&B/hip-hop became the most consumed genre in the US.
- Today hip-hop is global: UK rap and drill, Afro-rap, Latin trap, Indian and Punjabi hip-hop, Korean hip-hop and more.

## Producers became stars
From Marley Marl, DJ Premier and Dr. Dre to Timbaland, Kanye West, Metro Boomin and beyond, hip-hop made the producer a recognised artist with a signature sound. That is your opportunity.

## Respect the culture
Learn the history, credit your influences, and treat artists, DJs, engineers and fellow producers as a community. Authenticity is noticed.
`,
    steps: [
      'Make a playlist with one landmark record from each era in the table.',
      'Listen in order and write how the drums, bass and samples changed.',
      'Pick one producer from each era and read about their gear and process.',
      'Watch at least one documentary from the videos list.',
      'Draw a timeline of hip-hop styles you will study in Year 2.'
    ],
    tips: ['Learn the regional story of your own city or country too.', 'Credits (Spotify, Genius, Discogs) reveal who made the records you love.'],
    mistakes: ['Thinking hip-hop history started with your favourite artist.', 'Ignoring the culture while borrowing the sound.'],
    assignment: {
      title: 'Hip-Hop Timeline',
      brief: 'Know where every sound comes from.',
      deliverables: ['A 20-song history playlist covering every era', 'A written timeline of eras, styles and gear', 'A one-page profile of a producer who inspires you']
    },
    quiz: [
      { q: 'Where and when is hip-hop usually said to have started?', a: ['Los Angeles, 1990', 'The Bronx, 1973', 'Atlanta, 2003', 'London, 1985'], c: 1, why: 'DJ Kool Herc\'s 1973 Bronx party is the usual starting point.' },
      { q: 'Which sampler is most associated with the golden age?', a: ['E-mu SP-1200', 'A smartphone', 'A theremin', 'A mellotron'], c: 0, why: 'The SP-1200 and MPCs shaped golden-age production.' },
      { q: 'What are the four core elements of hip-hop culture?', a: ['DJing, MCing, breaking and graffiti', 'Singing, dancing, acting and painting', 'Mixing, mastering, recording and selling', 'Bass, drums, keys and vocals'], c: 0, why: 'These elements built the culture.' }
    ],
    watch: [['Hip-Hop Evolution (documentary series)', 'Hip Hop Evolution documentary'], ['Kool Herc and the birth of hip-hop', 'Kool Herc 1973 Sedgwick Avenue history'], ['History of hip-hop production', 'history of hip hop production samplers drum machines']],
    tools: []
  }]);

  insertAfter('s2', 't-songwriting', [{
    id: 'hh-flow',
    title: 'Rap Song Structure, Bars, Flow & the Pocket',
    minutes: 60,
    summary: 'Count bars, understand flows and pockets, write hooks, and arrange beats that make rappers sound their best.',
    objectives: ['Count bars and structure rap songs', 'Hear and describe flows and pockets', 'Arrange beats around the vocal'],
    body: `
## Bars
A **bar** is 4 beats. Rap is counted in bars:
- **Verse**: usually 16 bars (sometimes 8, 12 or 24).
- **Hook**: usually 8 bars (often 4 bars repeated).
- **Intro / outro**: 4–8 bars.

Common structure: **Intro (4) – Hook (8) – Verse (16) – Hook (8) – Verse (16) – Hook (8) – Outro (4)**. Many streaming-era songs start on the hook and run 2–3 minutes.

## Flow
Flow is the rhythm of the words over the beat.
| Flow | Rhythm | Common in |
|---|---|---|
| 8th-note flow | Steady, conversational | Boom bap, laid-back rap |
| 16th-note flow | Fast, dense | Lyrical rap, grime, drill |
| Triplet flow | Three syllables per beat, rolling | Trap (popularised widely in the 2010s), Memphis |
| Syncopated / off-beat flow | Words land between beats | Drill, Detroit-style flows, modern trap |
| Melodic flow | Sung-rap with Auto-Tune | Melodic trap, R&B trap |

## The pocket
The pocket is where the rapper sits against the drums:
- **On the beat**: punchy, precise.
- **Behind the beat**: lazy, relaxed (common over swung boom bap).
- **Ahead of the beat**: urgent, aggressive.

Rhymes often land on the **snare** (beat 2 or 4 in boom bap, beat 3 in half-time trap and drill), which is why drum placement and flow are linked.

## Writing hooks for rap
- Short (2–4 lines), repeated, chantable.
- Contains the title or a catchphrase.
- Melodic or rhythmic contrast with the verse.
- Leave space for ad-libs.

## What the producer does for the vocal
- Keeps verses sparser than hooks.
- Leaves space in the 1–4 kHz range.
- Uses **drops** (remove the drums for a beat or a bar) to highlight punchlines.
- Places **switch-ups** or beat changes at verse boundaries.
- Counts bars so changes land at 4, 8 and 16.
`,
    steps: [
      'Count the bars of the intro, hooks and verses in three rap songs.',
      'Transcribe the rhythm of one 4-bar flow onto a 16-step grid (mark where syllables land).',
      'Identify the pocket (on, behind or ahead) in three different rappers.',
      'Write a 16-bar verse to one of your beats using at least two flow types.',
      'Write a 4-line hook with the title in it.',
      'Record yourself (or a friend) and add two drops for punchlines in the beat.'
    ],
    tips: ['Even if you never rap, writing a verse teaches you what rappers need from a beat.', 'Count bars out loud while listening until it becomes automatic.'],
    mistakes: ['Changing the beat at random points instead of on 4, 8 or 16-bar boundaries.', 'Dense melodies that clash with fast flows.'],
    assignment: {
      title: 'Flow Lab',
      brief: 'Understand rap from the vocal side.',
      deliverables: ['Bar counts for three songs', 'A 4-bar flow transcription on a 16-step grid', 'Your own 16-bar verse and 4-line hook', 'A rough recording over your beat with two drops']
    },
    quiz: [
      { q: 'How long is a standard rap verse?', a: ['4 bars', '16 bars', '64 bars', '3 bars'], c: 1, why: '16 bars is the classic verse.' },
      { q: 'What is a triplet flow?', a: ['Three songs in a row', 'Three syllables per beat in a rolling rhythm', 'Rapping three times louder', 'A three-bar hook'], c: 1, why: 'Triplet flows roll three syllables per beat.' },
      { q: 'Why do producers drop the drums for a moment in a verse?', a: ['To save CPU', 'To highlight a punchline', 'To change the key', 'By accident'], c: 1, why: 'Drops spotlight the lyric.' }
    ],
    watch: [['Rap flow explained', 'rap flow explained triplet flow pocket'], ['Counting bars in rap', 'how to count bars in rap'], ['Writing a rap hook', 'how to write a rap hook']],
    tools: ['metronome', 'drums']
  }]);

  insertBefore('s3', 'r-project', [{
    id: 'hh-mpc',
    title: 'MPC Workflow, Finger Drumming & Chopping on Pads',
    minutes: 60,
    summary: 'The pad-based workflow behind decades of hip-hop: finger drumming, note repeat, 16 levels and chopping samples across pads.',
    objectives: ['Finger drum patterns live on pads', 'Use note repeat, swing and 16 levels', 'Chop a sample across pads and play it'],
    body: `
## Why pads matter
The **Akai MPC60** (1988, designed with Roger Linn) and later the **MPC3000**, **MPC2000XL** and today\'s standalone MPCs shaped hip-hop\'s feel: 16 velocity-sensitive pads, swing, and a sample-chop-sequence workflow. Playing drums by hand gives grooves that clicking cannot.

## The pad workflow
1. **Load a kit** onto 16 pads (kick bottom-left, snare next to it, hats above).
2. **Play** patterns live with a metronome, recording into a loop.
3. **Quantise lightly** (50–75%) or not at all; add swing (54–62%).
4. **Chop a sample** into slices and assign one slice per pad.
5. **Play the chops** to create a new melody or loop.
6. **Sequence and arrange** patterns into a song.
7. **Resample**: bounce, re-chop, re-process.

## Tools to know
- **Note repeat**: hold a pad to repeat it at 1/16, 1/32 or triplets. Perfect for trap hat rolls; vary pressure for velocity.
- **16 levels**: spread one sound across all pads by velocity, pitch or filter. Play an 808 melody or a pitched snare roll.
- **Full level**: every hit at maximum velocity (useful for hard drums).
- **Swing**: MPC-style swing on 16ths.

## No MPC? No problem
Any MIDI pad controller (Akai MPD, Novation Launchpad or Launchkey, Native Instruments Maschine) or your DAW\'s drum rack does the same job. Many DAWs have note repeat and pitch modes.

## Finger drumming practice
- Two hands: kick and snare on one hand, hats on the other, then mix.
- Practise slowly with a metronome, then speed up.
- Record a 2-bar groove every day for a week.
`,
    steps: [
      'Map your favourite kit to 16 pads (or keys) in a consistent layout.',
      'Play a 2-bar boom bap groove live with the metronome; quantise 50%.',
      'Use note repeat (or your DAW\'s equivalent) to perform a hat roll.',
      'Spread an 808 across 16 pitches and play a bassline on the pads.',
      'Chop a royalty-free sample into 16 slices and play a new 4-bar pattern.',
      'Bounce your pattern and re-chop it once.'
    ],
    tips: ['Ten minutes of finger drumming a day transforms your groove.', 'Keep the same pad layout in every kit so your hands remember it.'],
    mistakes: ['Quantising every live take to 100%.', 'Changing pad layouts constantly.'],
    assignment: {
      title: 'Pad Session',
      brief: 'Make a beat entirely from pad performances.',
      deliverables: ['A live-played 2-bar drum groove', 'A note-repeat hat performance', 'An 808 line played across 16 pitches', 'A new loop played from 16 chops', 'A 1-minute beat built from these parts']
    },
    quiz: [
      { q: 'What does note repeat do?', a: ['Repeats the whole song', 'Re-triggers a held pad at a set rate (1/16, 1/32, triplets)', 'Changes the key', 'Deletes notes'], c: 1, why: 'Note repeat is ideal for rolls.' },
      { q: 'What does "16 levels" let you do?', a: ['Use 16 DAWs', 'Spread one sound across 16 pads by velocity, pitch or filter', 'Record 16 vocals', 'Mix 16 songs'], c: 1, why: 'It turns one sample into a playable instrument.' },
      { q: 'Which MPC was designed with Roger Linn?', a: ['MPC60', 'MPC One', 'MPD218', 'Maschine'], c: 0, why: 'The 1988 MPC60 was co-designed by Roger Linn.' }
    ],
    watch: [['Finger drumming basics', 'finger drumming hip hop tutorial'], ['MPC workflow', 'MPC beat making workflow chopping samples'], ['Note repeat hi-hats', 'note repeat hi hat roll MPC Maschine']],
    tools: ['drums']
  }]);

  insertAfter('s4', 'sd-sampling', [{
    id: 'hh-crate',
    title: 'Crate Digging, Loop Making & Loop Collaborations',
    minutes: 60,
    summary: 'Find great source material legally, make melody loops other producers want, and collaborate with fair credit and splits.',
    objectives: ['Dig for samples and inspiration responsibly', 'Make and package professional melody loops', 'Collaborate with loop makers and producers fairly'],
    body: `
## Crate digging
Digging means searching for music to sample or learn from.
- **Records**: vinyl shops, thrift stores, family collections.
- **Library music**: production music made for film and TV (often from the 60s–80s); some libraries license it for sampling.
- **World music**: rhythms and melodies from every culture (learn, then replay or clear).
- **Research tools**: WhoSampled (see what famous songs sampled), Discogs (credits and pressings), Tracklib (licensable original recordings).

**Legal sources for releases**: royalty-free sample packs (read the licence), Tracklib clearances, your own recordings, replays with live musicians, and loops you commission.

## The loop economy
Many trap, drill and melodic records start from a **melody loop** made by one producer (a "loop maker") and finished with drums and 808s by another. Producers swap loops daily.

## Making loops people use
- 8 bars, clear BPM and key, starting exactly on bar 1.
- Export a **wet** (processed) and a **dry** version, plus stems of each layer and MIDI if possible.
- Name files: "LoopName_142bpm_Cmin_YourName.wav".
- Variation in bars 7–8 so the loop does not feel stiff.
- Leave space: no drums, little low end (producers add their own 808s).

## Loop kits and licences
Loop kits can be **royalty-free** (free to use in beats and songs) or **require contact for clearance** if a song is released commercially (some loop makers ask for a share of publishing or a co-production credit). State the terms clearly in a readme.

## Collaborating fairly
- Agree credit before release: "prod. by A & B".
- Agree splits for the composition and any producer fee or points (50/50 between loop maker and drum producer is common, but agree it for each song).
- Keep a spreadsheet of every collaboration.
`,
    steps: [
      'Use WhoSampled to trace the samples in five songs you love.',
      'Make ten 8-bar melody loops with BPM and key in the names.',
      'Export wet, dry and stem versions of your three best loops.',
      'Package a loop kit with a readme stating your licence terms.',
      'Send loops to three producers and ask to collaborate.',
      'Create a collaboration log spreadsheet.'
    ],
    tips: ['Loops are a great way to meet producers who are already placing songs.', 'Make loops in many moods: dark, emotional, bouncy, eerie.'],
    mistakes: ['Loops with drums and heavy bass already baked in.', 'No clear licence terms in loop kits.', 'Releasing collaborations without agreed splits.'],
    assignment: {
      title: 'Loop Kit Vol. 1',
      brief: 'Build a loop kit and start collaborating.',
      deliverables: ['Sample research notes for five songs', 'Ten original loops', 'A packaged loop kit with stems and a licence readme', 'Loops sent to three producers', 'A collaboration log']
    },
    quiz: [
      { q: 'What should a loop for other producers usually avoid?', a: ['A clear key', 'Drums and heavy low end baked in', 'A BPM in the filename', 'Starting on bar 1'], c: 1, why: 'Producers add their own drums and 808s.' },
      { q: 'What does WhoSampled help you do?', a: ['Master songs', 'See which songs sampled which records', 'Register copyrights', 'Sell beats'], c: 1, why: 'It is a research tool for sample history.' },
      { q: 'When should credit and splits with a loop maker be agreed?', a: ['After the song earns money', 'Before release', 'Never', 'Only if asked'], c: 1, why: 'Agree early to avoid disputes.' }
    ],
    watch: [['Crate digging for producers', 'crate digging for samples producers'], ['How to make loops for producers', 'how to make melody loops for producers'], ['Loop kits explained', 'how to make and sell loop kits']],
    tools: []
  }]);

  insertAfter('s5', 'rec-vocals', [{
    id: 'hh-record-rappers',
    title: 'Recording Rappers: Punch-ins, Doubles & Ad-libs',
    minutes: 60,
    summary: 'Engineer rap sessions fast and well: mic setup, headphone mix, punch-ins, doubles, ad-libs and real-time Auto-Tune.',
    objectives: ['Set up and track rap vocals professionally', 'Run fast punch-in sessions', 'Record doubles, stacks and ad-libs that sound like records'],
    body: `
## Setup
- Mic: a dynamic (Shure SM7B is a studio favourite) or a condenser in a treated booth.
- Distance: 10–20 cm, pop filter, slightly off-axis to reduce harshness.
- Gain: set on the **loudest** line (rappers get louder as they get excited). Peaks around -10 to -6 dBFS.
- Headphone mix: the beat loud enough to feel, the vocal clear on top, a little reverb or delay only in the headphones.

## Tracking styles
- **Full takes**: record whole verses for energy.
- **Punch-ins** (punch and roll): pre-roll a bar, punch the next line in, keep going. Most modern rap is tracked this way.
- Keep **mic distance and energy consistent** between punches so they join seamlessly.
- Name and colour tracks: Lead, Dbl, Stack, Adlibs, Chants.

## Doubles, stacks and ad-libs
- **Doubles**: a second performance of the whole line (or just the key words) panned or tucked under the lead.
- **Stacks**: several takes of hook lines for width and power.
- **Ad-libs**: separate track(s) with shouts, responses and signature sounds.
- **Chants and gang vocals**: several people or many takes of one person.

## Melodic rap and real-time Auto-Tune
Many melodic rappers record **through Auto-Tune in real time**: set the key and scale correctly, use a low-latency mode, keep the buffer small. Always record a **dry copy** on a second track so you can re-tune later.

## Coaching
- Mark breath points; plan where punches go.
- Ask for specific changes ("more energy on the last word").
- Work fast: rap sessions run on momentum. Learn your DAW\'s punch and loop-record shortcuts.
`,
    steps: [
      'Set up the mic, pop filter and headphone mix; test gain on the loudest line.',
      'Record a 16-bar verse using punch-ins with one bar of pre-roll.',
      'Comp the best takes with crossfades.',
      'Record doubles on key words and stacks on the hook.',
      'Record an ad-lib track and a gang-vocal chant.',
      'Track a melodic hook through real-time Auto-Tune with a dry copy recorded.'
    ],
    tips: ['Create a vocal template with tracks, routing and real-time tuning ready.', 'Save after every take; sessions move fast.'],
    mistakes: ['Gain set on a quiet line, then clipping on the loud one.', 'Punches at different mic distances that do not match.', 'No dry copy of tuned vocals.'],
    assignment: {
      title: 'Rap Session',
      brief: 'Engineer a complete rap vocal session.',
      deliverables: ['A comped 16-bar verse recorded with punch-ins', 'Doubles, hook stacks and ad-libs', 'A melodic hook tracked with real-time Auto-Tune plus a dry copy', 'A saved vocal recording template']
    },
    quiz: [
      { q: 'What is a punch-in?', a: ['A mixing effect', 'Recording a new take over a specific part while the song plays', 'A drum fill', 'A type of mic'], c: 1, why: 'Punching in replaces lines precisely.' },
      { q: 'When tracking through real-time Auto-Tune you should also...', a: ['Delete the beat', 'Record a dry copy on another track', 'Turn off the mic', 'Use a huge buffer'], c: 1, why: 'A dry copy allows re-tuning later.' },
      { q: 'Where should input gain be set for rappers?', a: ['On the quietest line', 'On the loudest line', 'At maximum', 'It does not matter'], c: 1, why: 'Prevents clipping when energy peaks.' }
    ],
    watch: [['Recording rap vocals', 'how to record rap vocals at home'], ['Punch-in recording', 'punch in recording rap vocals Pro Tools FL Studio'], ['Real-time Auto-Tune setup', 'real time autotune setup low latency']],
    tools: []
  }, {
    id: 'hh-record-singers',
    title: 'Recording Singers in Hip-Hop & R&B Sessions',
    minutes: 60,
    summary: 'Capture great sung vocals: mic choice, keys, dynamics, harmonies, runs and comping for hooks and R&B songs.',
    objectives: ['Record singers with control over dynamics and tone', 'Plan and record harmonies and stacks', 'Comp and tune sung vocals transparently'],
    body: `
## How singers differ from rappers
Singers have a wider dynamic range, sustained notes, breath and vibrato. They need a comfortable key, a warm headphone mix and more time.

## Setup
- A large-diaphragm condenser in a treated space; a dynamic if the room is untreated.
- Distance 15–25 cm; singers can back off on loud notes.
- Gain set on the loudest note; some engineers use gentle compression on the way in.
- Headphone mix with more reverb than for rappers; let the singer choose.

## Key and range
If a melody strains the singer, **transpose the beat** 1–3 semitones. A comfortable key is the biggest quality upgrade in any vocal.

## Tracking
1. Warm-up and run-throughs.
2. Full takes for emotion.
3. Section passes in loop or playlist mode.
4. Punches for specific phrases, especially held notes and runs.
5. Doubles for hooks.
6. **Harmonies**: 3rds and 5ths above, an octave below; record each part 2–3 times.
7. **Background vocals and ad-libs** last.

## Comping and tuning
Comp phrase by phrase for the best emotion first, pitch second. Tune transparently with Melodyne or similar (correct only what needs it), or use Auto-Tune as an effect when that is the style.

## Vocal health and vibe
Water at room temperature, breaks every 30–45 minutes, positive coaching, and stop before the voice tires.
`,
    steps: [
      'Find the singer\'s comfortable range and transpose a beat to suit it.',
      'Record full takes, then loop passes of the hook.',
      'Punch any weak held notes or runs.',
      'Record doubles and two harmony parts (a 3rd above and a 5th or octave).',
      'Comp the lead for emotion, then tune transparently.',
      'Record background vocals and ad-libs.'
    ],
    tips: ['Record harmonies after the lead is comped, so singers follow the final melody.', 'Give singers time; rushing kills emotion.'],
    mistakes: ['Forcing a singer into the wrong key.', 'Over-tuning every note into robotic perfection when the style wants natural.', 'Too few harmony takes.'],
    assignment: {
      title: 'Singer Session',
      brief: 'Record a polished sung hook or R&B song.',
      deliverables: ['A comped and tuned lead vocal', 'Doubles and two harmony parts', 'Background vocals and ad-libs', 'Notes on key choice and session flow']
    },
    quiz: [
      { q: 'What is the biggest quality upgrade for a struggling singer?', a: ['A pricier mic', 'A comfortable key (transpose the beat)', 'More reverb', 'Louder headphones'], c: 1, why: 'The right key transforms a vocal.' },
      { q: 'Which harmony intervals are most common?', a: ['2nds and 7ths', '3rds, 5ths and octaves', 'Tritones', 'Unisons only'], c: 1, why: 'They blend naturally.' },
      { q: 'When should harmonies be recorded?', a: ['Before the lead', 'After the lead is comped', 'Never', 'During mastering'], c: 1, why: 'Harmonies should follow the final melody.' }
    ],
    watch: [['Recording R&B vocals', 'how to record r&b vocals'], ['Recording vocal harmonies', 'how to record vocal harmonies stacks'], ['Melodyne basics', 'Melodyne tutorial beginners']],
    tools: []
  }]);

  insertAfter('s6', 'mix-vocals', [{
    id: 'hh-mix-rap',
    title: 'Mixing Rap Vocals & 808s: The Modern Hip-Hop Mix',
    minutes: 75,
    summary: 'The rap vocal chain, doubles and ad-libs, getting vocals over loud 808s, 2-track beats vs trackouts, and style-by-style vocal sounds.',
    objectives: ['Build a modern rap vocal chain', 'Make vocals sit on top of loud 808 beats', 'Adapt the vocal sound to each hip-hop style'],
    body: `
## Priorities
In hip-hop the **vocal, 808 and kick** are the mix. Get those three right and everything else follows.

## A modern rap vocal chain
1. Clean-up: noise, breaths, plosives, clip gain to even words.
2. High-pass around 80–100 Hz; cut mud (200–400 Hz) and harsh resonances.
3. Compressor 1, fast (1176-style): 4–8 dB on peaks.
4. Compressor 2, smooth (LA-2A-style): 2–3 dB.
5. De-esser around 5–9 kHz.
6. Tone EQ: presence (3–5 kHz), air shelf (10 kHz+).
7. Saturation for density.
8. **Parallel compression** for a thick, upfront sound.
9. Sends: a short plate, a slapback (80–120 ms), a 1/4 or 1/8 delay for throws.

## Doubles, stacks and ad-libs
- **Doubles**: high-pass higher, compress more, 6–10 dB under the lead, panned or centred.
- **Hook stacks**: wide, de-essed hard (sibilance builds up).
- **Ad-libs**: band-passed or filtered, panned, with delay throws.

## Vocals over loud 808 beats
- **Volume automation** (vocal rides) first.
- **Dynamic EQ on the beat**, keyed from the vocal, dipping 2–5 kHz only when the vocal plays.
- Check the 808\'s harmonics (100–500 Hz) are not masking the vocal\'s body; carve a little from one of them.
- Keep the vocal bright and present enough to cut through clipped drums.

## 2-track beats vs trackouts
With a stereo 2-track beat you can only EQ, compress and duck the whole beat. Ask for **trackouts** whenever possible: they let you balance the 808, kick and melodies around the vocal.

## Style-by-style vocal sounds
| Style | Vocal sound |
|---|---|
| Boom bap | Dry, upfront, slapback, minimal tuning |
| Trap | Bright, compressed, tuned (often hard), delay throws, stacked ad-libs |
| Drill | Aggressive, upfront, fairly dry, punchy ad-libs |
| Melodic trap | Tuned, lush reverbs and delays, wide harmonies |
| R&B | Smooth, airy, long reverbs, stacked harmonies |
| Pop-rap | Polished, wide hook stacks, clean diction |

## Finishing
Compare with references at matched loudness, check mono and phone speakers, and print clean and explicit versions.
`,
    steps: [
      'Build the 9-step rap vocal chain and save it as a preset.',
      'Process doubles, stacks and ad-libs on separate buses.',
      'Automate vocal rides through a full verse.',
      'Set up a dynamic EQ on the beat keyed from the vocal.',
      'Mix the same vocal in two styles (trap and boom bap) and compare.',
      'Check against references, mono and a phone speaker.'
    ],
    tips: ['Mix the vocal with the beat playing, never soloed for long.', 'If the vocal is buried, automate before reaching for more compression.'],
    mistakes: ['Over-compression that removes emotion.', 'Harsh, sibilant stacks.', 'Fighting a 2-track beat when you could ask for trackouts.'],
    assignment: {
      title: 'Rap Vocal Mix',
      brief: 'Mix a rap song so the vocal sounds like a record.',
      deliverables: ['A saved rap vocal chain preset', 'Processed doubles, stacks and ad-libs', 'Vocal ride automation', 'A dynamic EQ duck on the beat', 'The same vocal mixed in two styles', 'Reference and translation notes']
    },
    quiz: [
      { q: 'What are the three most important elements in a hip-hop mix?', a: ['Hats, pads and FX', 'Vocal, 808 and kick', 'Reverb, delay and chorus', 'Intro, outro and tag'], c: 1, why: 'They define the record.' },
      { q: 'Why ask for trackouts instead of a 2-track beat?', a: ['They are smaller files', 'You can balance the 808, kick and melodies around the vocal', 'They are louder', 'They avoid copyright'], c: 1, why: 'Separate stems allow proper mixing.' },
      { q: 'How should hook stacks be treated?', a: ['Bright with no de-essing', 'Wide and de-essed firmly because sibilance builds up', 'Mono and dark only', 'Muted'], c: 1, why: 'Stacked S sounds add up quickly.' }
    ],
    watch: [['Mixing rap vocals', 'how to mix rap vocals'], ['Rap vocals over 808s', 'mix vocals over loud 808 beat'], ['Ad-lib processing', 'how to mix adlibs']],
    tools: []
  }]);

  insertAfter('s10', 'st-operations', [{
    id: 'hh-studio-sessions',
    title: 'Running a Hip-Hop Recording Studio',
    minutes: 60,
    summary: 'Session types, packages, templates and rules for a studio that records rappers and singers every day.',
    objectives: ['Design hip-hop session types and packages', 'Run fast, professional sessions for rappers and singers', 'Build a loyal roster of artists'],
    body: `
## Session types
| Type | What it includes |
|---|---|
| Hourly with engineer | Recording time; mixing separate |
| Block (4–10 hours) | Discounted time for projects |
| Song package | Recording + mix + master for one song |
| Beat + studio package | Your beat (lease or exclusive) + recording + mix + master |
| Monthly membership | A set number of hours each month for regular artists |
| Artist development | Multi-song projects with guidance (next lesson) |

## Be ready before they arrive
- Vocal template loaded: tracks, real-time tuning, chains, headphone mix.
- Beat imported at the right tempo and key; trackouts organised if provided.
- Mic checked, cables tidy, booth comfortable.
- A file naming system for every artist and session.

## Studio rules that keep sessions productive
Guest limits, start times and lateness policy, deposits, no-smoking rules, respect for gear, payment before files, file storage time. Publish them on your booking page.

## Speed is your reputation
Rappers judge engineers by speed: fast punches, quick tuning, rough mixes at the end of the session. Practise shortcuts until they are automatic.

## Content and community
- Record session clips (with permission) for social media.
- Host cyphers, beat battles and open sessions.
- Partner with videographers for music video packages.
- Celebrate your artists\' releases publicly.

## Building a roster
Track every client, follow up a week after delivery, offer returning-client perks, and develop the artists who show commitment.
`,
    steps: [
      'Design your session types and prices.',
      'Build and save a vocal session template.',
      'Write your studio rules and booking policy.',
      'Time yourself punching in a 16-bar verse; aim to get faster each week.',
      'Plan one community event (cypher or beat battle).',
      'Create a client roster spreadsheet with follow-up dates.'
    ],
    tips: ['A rough mix at the end of every session sells the mixing package.', 'The best marketing is artists bringing friends.'],
    mistakes: ['Setting up after the client arrives.', 'No deposit or lateness policy.', 'Slow, uncertain engineering.'],
    assignment: {
      title: 'Hip-Hop Studio Operations',
      brief: 'Set up the systems of a working hip-hop studio.',
      deliverables: ['Session types and price list', 'A saved vocal session template', 'Studio rules and booking policy', 'A community event plan', 'A client roster spreadsheet']
    },
    quiz: [
      { q: 'What do rappers value most in an engineer?', a: ['Expensive furniture', 'Speed, accuracy and a good vibe', 'Long breaks', 'Silence'], c: 1, why: 'Momentum keeps sessions creative.' },
      { q: 'What should be ready before an artist arrives?', a: ['Nothing', 'The vocal template, beat, mic check and headphone mix', 'Only the invoice', 'The mastered song'], c: 1, why: 'Preparation saves session time.' }
    ],
    watch: [['Running a home studio business', 'how to run a recording studio business hip hop'], ['Engineering a rap session', 'engineer rap recording session tips']],
    tools: ['calc']
  }, {
    id: 'hh-artist-dev',
    title: 'Artist Development Packages: Demo to Release',
    minutes: 60,
    summary: 'Design ethical, profitable artist development packages that take rappers and singers from demo to released music.',
    objectives: ['Design tiered artist development packages', 'Choose the right agreement for each relationship', 'Guide artists through a release plan'],
    body: `
## What artist development means
Helping an artist find their sound, write better songs, record better performances and release music strategically. For a studio, it turns one-off clients into long-term partners.

## Package tiers (example structure)
| Tier | Includes |
|---|---|
| Single launch | Beat or production, recording, vocal production, mix, master, artwork guidance, distribution setup, release plan |
| EP development | 4–6 songs, pre-production, writing guidance, branding, content plan, 3-month roadmap |
| Long-term development | Monthly sessions, performance coaching, release cadence, analytics reviews |

## Agreements
- **Service agreement**: the artist pays for services; they own their masters. Simplest and clearest.
- **Production deal**: you invest time and money in exchange for a share of income or rights. Needs a lawyer and clear terms (term, rights, recoupment, exit).
- Never take ownership of an artist\'s work without clear, fair, written terms.

## The development process
1. Assessment: voice, writing, performance, audience, goals.
2. Sound and identity: references, signature sounds, visuals.
3. Writing and recording: many songs, choose the best.
4. Release strategy: singles every 4–8 weeks, content plan, pre-saves.
5. Review: streams, saves, audience growth, live shows; adjust.

## Ethics
Be honest. Never promise fame, playlist placements or label deals. Promise quality, process and effort.
`,
    steps: [
      'Design three artist development tiers with prices.',
      'Write an artist assessment form.',
      'Draft a simple service agreement outline (have a lawyer review it).',
      'Create a 3-month release roadmap template.',
      'Pitch a package to one artist and record their feedback.'
    ],
    tips: ['Choose artists who work hard; talent without effort rarely develops.', 'Celebrate small wins with artists: first 1,000 streams, first show.'],
    mistakes: ['Vague deals with no written terms.', 'Promising results you cannot control.', 'Developing too many artists at once.'],
    assignment: {
      title: 'Artist Development Offer',
      brief: 'Create an artist development offer you could sell tomorrow.',
      deliverables: ['Three package tiers with prices', 'An artist assessment form', 'A service agreement outline', 'A 3-month release roadmap template', 'Feedback from one artist']
    },
    quiz: [
      { q: 'In a service agreement, who usually owns the masters?', a: ['The studio', 'The artist (who paid for the services)', 'The distributor', 'Nobody'], c: 1, why: 'Paid services do not transfer ownership.' },
      { q: 'Which promise is ethical?', a: ['"I\'ll make you famous"', '"Guaranteed playlist placements"', 'Quality, a clear process and effort', '"A label deal in 3 months"'], c: 2, why: 'Promise what you control.' }
    ],
    watch: [['Artist development explained', 'artist development explained music industry'], ['Release strategy for independent artists', 'independent artist release strategy']],
    tools: []
  }]);

  // ---------- Semester renumbering and titles ----------
  const titles = {
    s1: ['Foundations & Hip-Hop Studio Setup', 'Set up a hip-hop studio, learn the culture and how sound works, and finish your first beat.'],
    s2: ['Music Theory, Songwriting & Rap Structure', 'Notes, scales, chords, melodies, 808 basslines, lyrics, bars and flow, taught for hip-hop producers.'],
    s3: ['Drums, Groove & MPC Workflow', 'Hip-hop drum sounds, grooves, swing, layering, fills and finger drumming on pads.'],
    s4: ['Sound Design, Sampling & 808s', 'Synthesis, sampling and the law, crate digging, loop making, 808 design and FX.'],
    s5: ['Recording Rappers & Singers, Arrangement & Vocal Production', 'Mics, rap and singing sessions, punch-ins, MIDI, arrangement and vocal production.'],
    s6: ['Mixing Hip-Hop', 'Balance, EQ, compression, space, low end, rap vocals over 808s, automation and translation.'],
    s7: ['Mastering Hip-Hop', 'Loudness, clipping and limiting, the mastering chain, deliverables and mastering for clients.']
  };
  Object.keys(titles).forEach(function (id) { const s = sem(id); s.title = titles[id][0]; s.tagline = titles[id][1]; });
  sem('s9').no = 13;
  sem('s9').title = 'The Hip-Hop Business';
  sem('s9').tagline = 'Copyright, royalties, selling beats, clients, releasing, marketing, sync and money.';
  sem('s10').no = 14;
  sem('s10').title = 'Opening & Running Your Hip-Hop Studio';
  sem('s10').tagline = 'Plan, build, equip, price and market a studio that records rappers and singers, and develops artists.';
  const grad = sem('s11');
  grad.no = 15;
  grad.title = 'Graduation: Master Hip-Hop Producer';
  const capEp = lesson(grad, 'cap-ep');
  capEp.body = capEp.body.replace('At least **two genres** (or a deliberate fusion).', 'At least **two hip-hop styles** from Year 2 (or a deliberate fusion).');
  capEp.summary = 'Write, produce, record, mix, master and release a 4-track EP across at least two hip-hop styles.';
  const capLaunch = lesson(grad, 'cap-launch');
  capLaunch.body = capLaunch.body.replace('| Genre range | One genre | Authentic work in 12+ genres |', '| Style range | One style | Authentic work across 12+ hip-hop styles |');

  // ---------- Electives: genres beyond hip-hop ----------
  const el = sem('s8');
  const hipHopGenres = ['boom-bap', 'trap', 'drill', 'lofi', 'rnb', 'phonk'];
  el.genres = el.genres.filter(function (g) { return hipHopGenres.indexOf(g.id) === -1; });
  el.lessons = el.lessons.filter(function (l) { return !(l.genre && hipHopGenres.indexOf(l.genre.id) > -1); });
  el.no = 16;
  el.elective = true;
  el.title = 'Electives: Genres Beyond Hip-Hop';
  el.tagline = 'Optional studios for the genres hip-hop samples and fuses with: soul, funk, jazz, Afrobeats, amapiano, reggaeton, house, cinematic and more.';
  el.required = [];
  el.minLessons = 6;
  el.lessons.forEach(function (l) {
    l.body = l.body.replace(/the 34 genre studios/gi, 'the elective genre studios').replace(/34 genre studios/gi, 'elective genre studios');
  });

  // ---------- Roadmap, routine, drills ----------
  A.roadmap = [
    { when: 'Months 1–2', title: 'Foundations and culture', sems: ['s1'], goals: ['Studio set up, DAW learned', 'Hip-hop history timeline', 'First beat finished'] },
    { when: 'Months 3–5', title: 'Theory, flow and drums', sems: ['s2', 's3'], goals: ['Chords, melodies and 808 lines on purpose', 'Count bars and understand flows', 'Finger drum and program every core groove'] },
    { when: 'Months 6–8', title: 'Sound, sampling and sessions', sems: ['s4', 's5'], goals: ['Your own sounds, loops and 808s', 'Record rappers and singers', 'First fully produced song with an artist'] },
    { when: 'Months 9–11', title: 'Mixing and mastering', sems: ['s6', 's7'], goals: ['Rap vocals that sit over 808s', 'Master beats competitively', 'Start mixing for local artists'] },
    { when: 'Months 12–14', title: 'Roots and regions', sems: ['hh8', 'hh9'], goals: ['Boom bap, jazz rap and soul flips', 'G-funk, ratchet, Memphis, Texas and bounce', 'Two beat packs finished'] },
    { when: 'Months 15–17', title: 'Trap era', sems: ['hh10'], goals: ['The full trap masterclass', 'Melodic trap, plugg, rage and phonk', 'Beats published and tracked'] },
    { when: 'Months 18–20', title: 'Drill, global and commercial', sems: ['hh11', 'hh12'], goals: ['Drill, grime, desi, Latin trap and Jersey club', 'R&B and pop-rap songs', 'Placements pitched and an artist EP'] },
    { when: 'Months 21–24', title: 'Business, studio and graduation', sems: ['s9', 's10', 's11'], goals: ['Royalties registered and beat store running', 'Studio open with packages', 'EP released and the Master Producer diploma'] }
  ];
  A.week = [
    { d: 'Mon', f: 'Lesson day', t: '45 min lesson + 15 min ear training' },
    { d: 'Tue', f: 'Beat day', t: '60 min: one beat, start to finish' },
    { d: 'Wed', f: 'Assignment', t: '60 min practical assignment' },
    { d: 'Thu', f: 'Style study', t: '45 min analysing a reference + 15 min finger drumming' },
    { d: 'Fri', f: 'Beat day', t: '60 min: one beat in a different style' },
    { d: 'Sat', f: 'Session day', t: '2 h with an artist (or record yourself) and mix' },
    { d: 'Sun', f: 'Business and review', t: '30 min uploads, outreach and journal review' }
  ];
  A.drills = [
    'Make a full trap beat in 30 minutes. No tweaking.',
    'Program a UK drill snare and hat pattern with a different bar 2.',
    'Write an 808 line with three glides in a new key.',
    'Chop a royalty-free sample into 8 slices and play a new loop on pads.',
    'Finger drum a boom bap groove for 10 minutes with the metronome.',
    'Do 20 rounds of frequency ear training.',
    'Recreate the drums of a hip-hop song you love in 15 minutes.',
    'Write a G-funk whistle melody with portamento.',
    'Make a Memphis cowbell riff in Phrygian.',
    'Write a 4-line hook and record a rough demo on your phone.',
    'Make three 8-bar melody loops and send one to a producer.',
    'Count the bars and map the structure of a new rap hit.',
    'Mix a rap vocal with only EQ, compression and one delay.',
    'Make a beat in a hip-hop style you have never tried.',
    'Program a 4-bar trap hat line with one 1/32 roll and one triplet beat.',
    'Write extended R&B chords (maj7, m9) and voice-lead them.',
    'Make a drumless loop for a lyricist.',
    'Load a Beat Lab demo, clear the drums and program your own.',
    'Write a 16-bar verse to your latest beat.',
    'Upload one beat with a proper title, tags and thumbnail.',
    'Measure the LUFS of three current hip-hop songs.',
    'Practise 10 punch-in recordings to get faster at engineering.',
    'Build a tumbi or flute motif in Kafi or Bhairavi over drill drums.',
    'Make a chopped-and-screwed version of an old beat.',
    'Program a Jersey club kick run on a 16th-triplet grid.',
    'Write a Latin trap guitar arpeggio with the Andalusian cadence.',
    'Do 15 rounds of interval ear training.',
    'Send a 5-beat pack to an artist you would love to work with.',
    'Design a rage supersaw preset from scratch.',
    'Spend 15 minutes organising your kits, then make a beat with your favourites.'
  ];

  // ---------- Glossary additions ----------
  A.glossary = A.glossary.concat([
    ['Ad-lib', 'Short vocal shouts and responses around the main lines.'],
    ['Bar (in rap)', 'Four beats; verses are counted in bars (16-bar verse, 8-bar hook).'],
    ['Beat pack', 'A short, curated set of beats sent to an artist, A&R or engineer.'],
    ['Boom bap', 'Golden-age hip-hop built on hard, swung, sampled drums and chopped loops.'],
    ['Chipmunk soul', 'Sped-up, high-pitched soul vocal samples, popular in the 2000s.'],
    ['Chopped and screwed', 'Houston technique of slowing a song and repeating (chopping) phrases.'],
    ['Cook-up', 'Making a beat from scratch, often live or on camera.'],
    ['Crate digging', 'Searching records and archives for samples and inspiration.'],
    ['Drill', 'A dark hip-hop style with syncopated snares, skippy hats and gliding 808s.'],
    ['Drumless', 'A loop-based beat with no (or almost no) drums, popular with lyricists.'],
    ['Flow', 'The rhythm and delivery of rap lyrics over a beat.'],
    ['G-funk', 'West Coast "gangsta funk": synth bass, whining leads and P-Funk grooves.'],
    ['Grime', 'UK genre at 140 BPM with square-wave bass and aggressive MC culture.'],
    ['Hook', 'The chorus of a rap song; usually 8 bars.'],
    ['Letter of Direction (LOD)', 'An artist\'s instruction to SoundExchange to pay a producer a share of royalties (US).'],
    ['Loop maker', 'A producer who creates melody loops for other producers to finish.'],
    ['MPC', 'Akai\'s pad-based sampler and sequencer line, central to hip-hop.'],
    ['Note repeat', 'A pad feature that re-triggers a held note at a set rate, used for rolls.'],
    ['Phonk', 'Memphis-inspired style with cowbell melodies and distorted 808s.'],
    ['Placement', 'Getting your beat or production onto an artist\'s released song.'],
    ['Plugg', 'Airy, synth-driven trap sub-style with sparse drums and bouncing 808s.'],
    ['Pocket', 'Where a rapper sits against the beat: on, behind or ahead.'],
    ['Producer tag', 'A short audio signature at the start of a producer\'s beats.'],
    ['Punch-in', 'Recording a new take over a specific section while the song plays.'],
    ['Rage', 'Trap sub-style with distorted, detuned supersaw synth riffs.'],
    ['Sample drill', 'Drill that flips recognisable R&B or pop melodies; needs clearance.'],
    ['SP-1200', 'E-mu\'s 12-bit sampling drum machine that defined golden-age grit.'],
    ['Trackouts', 'Separate stems of a beat (kick, 808, melody...) delivered to artists and engineers.'],
    ['Trap', 'Atlanta-born style with half-time drums, rapid hi-hats and tuned 808s.'],
    ['Triggerman beat', 'The breakbeat behind New Orleans bounce, from "Drag Rap".'],
    ['Type beat', 'A beat titled after an artist whose style it resembles, for search.']
  ]).sort(function (a, b) { return a[0].localeCompare(b[0]); });

  // ---------- Hip-hop resources ----------
  A.resources.unshift({
    cat: 'Hip-hop research and learning',
    items: [
      { n: 'WhoSampled', t: 'Research', d: 'See which songs sampled which records.', u: 'https://www.whosampled.com' },
      { n: 'Genius', t: 'Credits and lyrics', d: 'Producer and writer credits, lyrics and annotations.', u: 'https://genius.com' },
      { n: 'Discogs', t: 'Credits database', d: 'Release credits, pressings and sample sources.', u: 'https://www.discogs.com' },
      { n: 'Genius "Deconstructed"', t: 'Video series', d: 'Producers break down how famous beats were made.', u: 'https://www.youtube.com/results?search_query=Genius+Deconstructed' },
      { n: 'Kenny Beats – "The Cave"', t: 'Video series', d: 'Live sessions with artists: production and workflow.', u: 'https://www.youtube.com/results?search_query=Kenny+Beats+The+Cave' },
      { n: 'Busy Works Beats', t: 'YouTube', d: 'Beat-making tutorials and beat-selling advice.', u: 'https://www.youtube.com/results?search_query=Busy+Works+Beats' },
      { n: 'Internet Money', t: 'YouTube', d: 'Producers making beats and talking about placements.', u: 'https://www.youtube.com/results?search_query=Internet+Money+making+beats' },
      { n: 'Pensado\'s Place', t: 'YouTube', d: 'Mixing and engineering interviews and tutorials.', u: 'https://www.youtube.com/results?search_query=Pensado%27s+Place' },
      { n: 'Hip-Hop Evolution', t: 'Documentary', d: 'Documentary series on hip-hop history.', u: 'https://www.youtube.com/results?search_query=Hip+Hop+Evolution+documentary' }
    ]
  });
})();
