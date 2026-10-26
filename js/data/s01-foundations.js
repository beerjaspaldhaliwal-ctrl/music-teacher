(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's1',
  no: 1,
  title: 'Foundations & Studio Setup',
  tagline: 'Set up your studio, learn how sound and digital audio work, and finish your first track.',
  weeks: 4,
  outcomes: [
    'Explain what a producer, engineer and songwriter each do',
    'Choose and set up gear for your budget',
    'Navigate a DAW confidently and export audio',
    'Describe sound with professional vocabulary (Hz, dB, frequency bands)',
    'Set up your room and speakers correctly',
    'Finish a complete 2-minute instrumental'
  ],
  lessons: [
    {
      id: 'f-welcome',
      title: 'Welcome: How This School Works',
      minutes: 30,
      summary: 'The structure of the academy, the producer mindset, and the daily habit that makes masters.',
      objectives: [
        'Understand the 11-semester path from beginner to studio owner',
        'Adopt the "finish songs" mindset used by working producers',
        'Set up a producer journal and a practice schedule you can keep'
      ],
      body: `
## How the academy is built
This school takes you from zero to running a paid music business. It has **11 semesters**. Each semester has lessons, and every lesson has the same parts:

- **Theory**: the knowledge, explained in plain language.
- **Step-by-step guide**: exactly what to do in your DAW or studio, in order. Tick each step as you go.
- **Practical assignment**: real work with deliverables. This is where you actually improve.
- **Quiz**: 3 or more questions. Score 70% to pass.

You earn **XP** for completed lessons, passed quizzes, finished assignments and logged practice. XP raises your rank from Rookie to Master Producer. Finishing every lesson in a semester unlocks its certificate.

## The three pillars of a master producer
1. **Creative**: writing chords, melodies, drums and arrangements that move people.
2. **Technical**: recording, sound design, mixing and mastering so the music sounds professional.
3. **Business**: getting paid, protecting your rights, finding clients and running a studio.

Most self-taught producers only train pillar one or two. Studio owners who earn a living train all three. This curriculum gives each pillar its own semesters.

## The producer mindset
**Finish songs.** An unfinished 8-bar loop teaches you almost nothing about arrangement, mixing or mastering. A finished song, even a bad one, teaches you all of it. In the famous ceramics-class story from the book *Art & Fear*, the group graded on the *quantity* of pots ended up making better pots than the group graded on making one perfect pot. Production works the same way.

**Use references.** Professionals constantly compare their work to released songs they admire. You will build a reference library in this lesson and use it in every semester.

**Train your ears daily.** Ear training is the difference between "something sounds off" and "the vocal has too much 3 kHz". The Practice Studio has a built-in ear trainer.

**Expect the gap.** Your taste will be ahead of your skill for the first year or two. That gap is normal and it means your taste is good. Keep finishing work and the gap closes.

## How long it takes
At 1–2 focused hours per day, a realistic timeline is:

| Stage | Time | You can... |
|---|---|---|
| Semesters 1–3 | Months 1–3 | Make full beats and loops in your DAW |
| Semesters 4–5 | Months 4–6 | Design sounds, record vocals, arrange full songs |
| Semesters 6–7 | Months 7–9 | Mix and master to a release standard |
| Semester 8 | Months 9–12 | Produce convincingly in many genres |
| Semesters 9–11 | Months 12–18 | Sell beats and services, release music, open a studio |

## Your producer journal
Keep one document (or notebook) for the whole course. Every session, write:
- Date and minutes practised
- What you worked on
- One thing you learned
- One problem you could not solve (bring it back next session)

Log your practice minutes on the **Roadmap** page too. They count towards your XP and your daily streak.
`,
      steps: [
        'Open the Profile page and enter your name. It appears on your certificates.',
        'Create a producer journal (a notes app, Google Doc or paper notebook).',
        'Decide your weekly schedule: which days, what time, how many minutes. Write it in the journal.',
        'Open the Roadmap page and read the 18-month plan and the weekly routine.',
        'Open the Practice Studio and try the Drum Machine: press play on the default beat.',
        'Log your first practice session on the Roadmap page.'
      ],
      tips: [
        'Short daily sessions beat one long weekend session. Your ears and memory improve with repetition.',
        'Keep a "finished" folder and a "sketches" folder. Watching the finished folder grow is motivating.',
        'Join one producer community (see Library) so you can get feedback from day one.'
      ],
      mistakes: [
        'Buying gear before learning the basics. Most beginners already own enough to start.',
        'Watching tutorials for hours without opening the DAW. Watch 10 minutes, then practise 50.',
        'Comparing your first month to someone else\'s tenth year.'
      ],
      assignment: {
        title: 'Build Your Taste Map',
        brief: 'Collect 10 songs you love across any genres. This becomes your reference library for the whole course.',
        deliverables: [
          'A playlist of 10 reference songs saved in your streaming app',
          'For each song: genre, approximate BPM (use the Tap Tempo tool in Practice Studio), and key if you can find it',
          'For each song: one sentence about what you love (drums, vocal, mood, bass...)',
          'A written weekly practice schedule in your journal',
          'Your first practice session logged on the Roadmap page'
        ],
        stretch: 'Add 5 songs from genres you have never listened to. Masters are curious.'
      },
      quiz: [
        { q: 'Which three pillars does this academy train?', a: ['Singing, rapping, dancing', 'Creative, technical and business skills', 'Drums, bass and vocals', 'Mixing, mastering and marketing'], c: 1, why: 'A working producer needs creative writing skills, technical engineering skills, and business skills to earn a living.' },
        { q: 'According to the "finish songs" mindset, what teaches you the most?', a: ['Perfecting one 8-bar loop for weeks', 'Watching more tutorials', 'Finishing many complete songs, even imperfect ones', 'Buying better plugins'], c: 2, why: 'Finishing forces you to practise arrangement, mixing and mastering. Quantity drives quality.' },
        { q: 'What is a reference track?', a: ['A released song you compare your work against', 'The first track in your DAW', 'A track with no effects', 'A drum loop'], c: 0, why: 'References keep your ears calibrated to professional sound and arrangement.' }
      ],
      tools: ['drums', 'metronome']
    },
    {
      id: 'f-role',
      title: 'What a Music Producer Really Does',
      minutes: 40,
      summary: 'The roles in a recording, the production pipeline from idea to release, and the types of producers.',
      objectives: [
        'Name every role involved in making a record',
        'Describe the 10 stages from idea to release',
        'Decide which type of producer you want to become first'
      ],
      body: `
## The roles in a record
On big releases these are different people. In a home studio, you will often do all of them. Knowing the roles helps you know which "hat" you are wearing at any moment.

| Role | What they do |
|---|---|
| **Producer** | The creative director. Shapes the sound, arrangement and performance, and makes final creative decisions. |
| **Beatmaker / Track producer** | Builds the instrumental: drums, bass, chords, melodies. Common in hip-hop, pop and electronic music. |
| **Songwriter / Topliner** | Writes lyrics and vocal melodies (the "topline") over a beat. |
| **Artist** | Performs and is the public face of the song. |
| **Recording engineer** | Sets up mics, captures performances, manages the session technically. |
| **Editor** | Cleans up timing, comps the best takes, tunes vocals. |
| **Mix engineer** | Balances all the parts into one stereo song using EQ, compression, effects and automation. |
| **Mastering engineer** | Final polish: tonal balance, loudness and consistency across a release; prepares files for distribution. |
| **A&R** | At a label, finds artists and songs and guides projects commercially. |

## The production pipeline
1. **Idea**: a chord loop, a hook, a sample, a lyric, a vibe.
2. **Writing**: build the song: chords, melody, lyrics, structure.
3. **Pre-production**: decide tempo, key, arrangement and sounds before recording.
4. **Recording / programming**: capture vocals and instruments, or program MIDI.
5. **Editing**: comp takes, fix timing, tune.
6. **Arrangement**: shape energy across intro, verse, chorus, bridge, outro.
7. **Mixing**: balance and process every element.
8. **Mastering**: final loudness and polish.
9. **Release**: distribution to streaming stores, registering rights.
10. **Promotion**: marketing so people hear it.

## Types of producers
- **Visionary producer**: guides artists and performances more than technical work. Rick Rubin is the famous example.
- **Beatmaker producer**: makes instrumentals and sells or places them. Typical of hip-hop and trap.
- **Engineer-producer**: strong technical skills; records and mixes as well as produces.
- **Artist-producer**: produces their own music. Finneas, Skrillex, Kanye West and Billie Eilish's projects show how far this can go.
- **Composer-producer**: writes for film, TV, games and adverts.

You will train all of these skills in this school. Most careers start with one strength and add the rest.

## How credits tell the story
Song credits on Spotify (tap the three dots, then View credits), Tidal, Genius, Discogs and AllMusic list producers, writers and engineers. Studying credits is how you learn who made the songs you love, and which producers to study.
`,
      steps: [
        'Pick 3 songs from your Taste Map.',
        'Look up the full credits for each (Spotify credits, Tidal, Genius or Discogs).',
        'For each song, write who produced, wrote, recorded, mixed and mastered it.',
        'Search one of those producers and listen to 3 more songs they made.',
        'Write which producer type you want to become first, and why.'
      ],
      tips: [
        'When you know a producer\'s name, search "[name] studio session" or "[name] making a beat" on YouTube. Watching real sessions teaches workflow.',
        'Mix and mastering engineers are often credited on Tidal and in Discogs even when Spotify omits them.'
      ],
      mistakes: [
        'Thinking "producer" only means making beats. The job is the whole song.',
        'Ignoring engineering because "someone else will mix it". Understanding mixing makes your production better.'
      ],
      assignment: {
        title: 'Credits Investigation',
        brief: 'Reverse-engineer the team behind three songs and choose your first producer path.',
        deliverables: [
          'A table of 3 songs with producer, songwriters, recording, mix and mastering engineers',
          'One producer you will study this year, with 5 of their songs added to your references',
          'A paragraph: which producer type you are starting as and your 12-month goal'
        ]
      },
      quiz: [
        { q: 'Who balances all the recorded parts into one stereo song?', a: ['Mastering engineer', 'Mix engineer', 'A&R', 'Topliner'], c: 1, why: 'Mixing is the balancing and processing of all individual tracks.' },
        { q: 'What is a "topline"?', a: ['The highest synth part', 'The master fader', 'The vocal melody and lyrics written over a beat', 'The intro of a song'], c: 2, why: 'Topliners write vocal melodies and lyrics over existing instrumentals.' },
        { q: 'Which stage comes right after mixing?', a: ['Editing', 'Mastering', 'Pre-production', 'Recording'], c: 1, why: 'Mastering is the final polish after the mix is finished.' }
      ]
    },
    {
      id: 'f-gear',
      title: 'Building Your First Studio on Any Budget',
      minutes: 50,
      summary: 'What gear you actually need, in what order, at four budget levels.',
      objectives: [
        'Know what each piece of studio gear does',
        'Prioritise purchases correctly',
        'Write a gear plan that fits your budget'
      ],
      body: `
## What each piece of gear does
- **Computer**: runs your DAW and plugins. Aim for a modern multi-core CPU, **16 GB RAM minimum (32 GB is comfortable)**, and an SSD. Mac or Windows both work; Logic Pro is Mac-only.
- **DAW** (Digital Audio Workstation): the software where you record, program, mix and master.
- **Headphones**: closed-back for recording (no bleed into the mic), open-back for more natural mixing.
- **Audio interface**: converts mic and instrument signals into digital audio and powers your monitors and headphones with low latency.
- **MIDI keyboard / pad controller**: lets you play notes and drums into the DAW instead of clicking them.
- **Studio monitors**: speakers designed to be accurate rather than flattering. They only help if your room is treated (Lesson 7).
- **Microphone**: a dynamic mic for untreated rooms and loud sources; a condenser for detail in a treated room.
- **Cables and accessories**: XLR cables for mics, balanced TRS cables for monitors, mic stand, pop filter.

## Popular, proven choices
These are well-known, widely used models. Prices change; compare local prices before buying.

| Category | Entry level | Step up |
|---|---|---|
| Closed headphones | Audio-Technica ATH-M50x, Sony MDR-7506, Beyerdynamic DT 770 Pro | Beyerdynamic DT 1770 |
| Open headphones | Sennheiser HD 560S, AKG K702 | Sennheiser HD 600 / HD 650, Beyerdynamic DT 1990 |
| Interface (2 in) | Focusrite Scarlett 2i2, Audient iD4, MOTU M2, SSL 2 | Universal Audio Apollo Twin, RME Babyface Pro |
| Monitors | Yamaha HS5, JBL 305P MkII, Kali LP-6, KRK Rokit 5 | Adam A7V, Neumann KH 120, Genelec 8030 |
| MIDI keyboard | Akai MPK Mini, Novation Launchkey Mini | Arturia KeyLab Essential 49/61, Native Instruments Komplete Kontrol |
| Microphone | Shure SM58 / SM57 (dynamic), Audio-Technica AT2020, Rode NT1 | Shure SM7B (dynamic), Neumann TLM 102/103 |

## Budget tiers
| Budget (USD, approx.) | Setup |
|---|---|
| **$0** | The computer or phone you own, a free DAW (BandLab, GarageBand, or Reaper's trial), free plugins (see Library), and the best headphones or earbuds you have. Enough to learn Semesters 1–4. |
| **~$500** | Closed-back headphones, a 2-input interface, a 25–49 key MIDI controller, a dynamic mic, an affordable DAW license. |
| **~$1,500** | Add open-back mixing headphones, entry monitors, basic acoustic panels, a condenser mic and reflection filter, a full DAW version. |
| **~$5,000** | Better monitors and room treatment, a higher-end interface, 2–3 quality mics, paid plugins and sample libraries, a dedicated desk. |

## Buy in this order
1. **Computer** that runs your DAW smoothly.
2. **Good headphones.** You will do most early work on them.
3. **Audio interface** (needed as soon as you record or use monitors).
4. **DAW license** (start with a free version or trial).
5. **MIDI controller.**
6. **Room treatment, then monitors.** Monitors in an untreated room can mislead you more than headphones.
7. **Microphone** when you start recording.

> **Pro tip:** Gear does not make the hit. Many charting songs were made on laptops with headphones. Spend money only when a specific limit is blocking you.
`,
      steps: [
        'List every piece of gear you already own that could be used for music.',
        'Choose your budget tier honestly.',
        'For each missing category, research two options and their local prices.',
        'Order your list by the "buy in this order" priority.',
        'Write down what you will buy now, in 3 months and in 6 months.',
        'If you have an interface, install its latest driver and connect your headphones.'
      ],
      tips: [
        'Buy used gear from reputable sellers. Headphones, interfaces and mics hold up well.',
        'Check the interface has enough inputs for what you will record in a year, not just today.',
        'A dynamic mic in a normal bedroom often sounds better than an expensive condenser picking up room echo.'
      ],
      mistakes: [
        'Buying big monitors for a small, untreated room.',
        'Using Bluetooth headphones for production. Bluetooth adds latency and compression.',
        'Spending the whole budget on plugins before learning the stock ones.'
      ],
      assignment: {
        title: 'Your Studio Gear Plan',
        brief: 'Plan a studio you can actually afford and a 6-month upgrade path.',
        deliverables: [
          'Inventory of gear you own now',
          'Chosen budget tier and total amount',
          'A priced shopping list in priority order with links or store names',
          'A 6-month upgrade plan (now / 3 months / 6 months)',
          'A photo or sketch of where your studio will be set up'
        ]
      },
      quiz: [
        { q: 'What type of headphones should you use while recording vocals?', a: ['Open-back', 'Closed-back', 'Bluetooth earbuds', 'Bone conduction'], c: 1, why: 'Closed-back headphones stop the backing track leaking into the microphone.' },
        { q: 'What is the minimum RAM recommended for music production?', a: ['4 GB', '8 GB', '16 GB', '128 GB'], c: 2, why: '16 GB handles typical projects; 32 GB is comfortable for big sample libraries.' },
        { q: 'Why should room treatment come before expensive monitors?', a: ['Monitors are cheap', 'An untreated room colours what you hear, so monitors cannot be accurate', 'Treatment makes music louder', 'It does not matter'], c: 1, why: 'Reflections and bass build-up in a room distort the sound reaching your ears.' }
      ]
    },
    {
      id: 'f-daw',
      title: 'Choosing and Learning Your DAW',
      minutes: 60,
      summary: 'Compare the major DAWs, then learn the concepts every DAW shares.',
      objectives: [
        'Choose a DAW that fits your goals',
        'Understand tracks, the mixer, piano roll, inserts, sends and automation',
        'Build and export a 4-bar loop'
      ],
      body: `
## Which DAW?
Every major DAW can produce any genre. The best DAW is the one you learn deeply. Choose one and commit for at least a year.

| DAW | Platform | Known for | Popular in |
|---|---|---|---|
| **FL Studio** | Win / Mac | Fast pattern workflow, great piano roll, lifetime free updates | Hip-hop, trap, EDM |
| **Ableton Live** | Win / Mac | Session view for jamming, excellent audio warping, live performance | Electronic, techno, house, live acts |
| **Logic Pro** | Mac | Huge stock instruments and loops for the price, strong for songwriting | Pop, R&B, singer-songwriters |
| **Pro Tools** | Win / Mac | Industry standard for recording and editing in commercial studios | Recording studios, post-production |
| **Cubase** | Win / Mac | Deep MIDI and scoring tools | Film, game and orchestral composers |
| **Reaper** | Win / Mac / Linux | Very affordable, light, endlessly customisable | Engineers, budget studios |
| **GarageBand** | Mac / iOS | Free and simple; projects open in Logic | Beginners |
| **BandLab** | Web / mobile | Free, online collaboration | Beginners, mobile producers |

> **Studio owners:** if you plan to run a commercial recording studio, learn Pro Tools as a second DAW later. Many engineers and clients expect it.

## Concepts every DAW shares
- **Project / session**: one song file. Set **tempo (BPM)**, **time signature** and **key**.
- **Tracks**: *audio* tracks hold recordings; *instrument / MIDI* tracks hold notes that play a virtual instrument.
- **Arrangement / playlist view**: the timeline where you lay out sections of the song.
- **Piano roll**: the grid where you draw and edit MIDI notes: pitch is vertical, time is horizontal, and velocity is how hard a note is played.
- **Browser**: where samples, presets and plugins live.
- **Mixer**: one channel strip per track with volume fader, pan, **inserts** and **sends**.
- **Inserts**: effects placed directly on a channel (EQ, compressor). 100% of the signal passes through them.
- **Sends / returns (aux)**: copies of the signal sent to a shared effect channel (usually reverb or delay), so many tracks can share one reverb.
- **Buses / groups**: channels that combine several tracks (all drums to a drum bus) so you can process and control them together.
- **Master bus**: the final stereo output of everything.
- **Plugins**: VST3 (Windows/Mac), AU (Mac/Logic), AAX (Pro Tools).
- **Automation**: recorded changes over time (volume rises, filter sweeps).
- **Export / bounce / render**: turning the project into an audio file.

## Signal flow (learn this by heart)
Source (mic, instrument or MIDI) → track → inserts (in order, top to bottom) → fader → pan → sends → bus → master bus → interface → speakers.

## Learn 20 shortcuts
Look up your DAW's shortcuts for: play/stop, record, loop, undo, redo, save, duplicate, split/cut, zoom, select tool, draw tool, quantize, mixer, piano roll, browser, new track, mute, solo, metronome and export. Shortcuts double your speed.
`,
      steps: [
        'Install your chosen DAW (or a trial) and open a new empty project.',
        'Set the tempo to 120 BPM and the time signature to 4/4.',
        'Create an instrument track with a drum kit. Program a kick on every beat and a snare on beats 2 and 4 for 4 bars.',
        'Create a second instrument track with a bass or piano and draw 4 chords (one per bar) in the piano roll.',
        'Create a third track with any synth and draw a simple 8-note melody.',
        'Open the mixer. Route the drums to their own bus channel.',
        'Create a reverb on a send/return channel and send a little of the piano to it.',
        'Automate the master volume to fade out over the last bar.',
        'Export the loop as a 24-bit WAV file and play it outside the DAW.',
        'Save the project with a clear name, e.g. "2026-10-26_First-Loop_v01".'
      ],
      tips: [
        'Watch the official "getting started" videos from your DAW maker. They are free and accurate.',
        'Turn on the metronome when recording, off when listening.',
        'Use colour-coding from day one: drums one colour, bass another, and so on.'
      ],
      mistakes: [
        'Switching DAWs every few weeks. You restart learning every time.',
        'Putting reverb as an insert on every track instead of using one shared send.',
        'Not saving often. Enable auto-save.'
      ],
      assignment: {
        title: 'DAW Tour Loop',
        brief: 'Prove you can drive your DAW from an empty project to an exported file.',
        deliverables: [
          'A 4-bar loop at 120 BPM with drums, chords and melody',
          'Drums routed to a drum bus',
          'A shared reverb on a send/return channel',
          'Volume automation on at least one track',
          'An exported 24-bit WAV file',
          'A list of 20 shortcuts for your DAW in your journal'
        ],
        stretch: 'Rebuild the same loop again from scratch without notes in under 15 minutes.'
      },
      quiz: [
        { q: 'What is the difference between an insert and a send?', a: ['There is none', 'Inserts process 100% of a channel\'s signal; sends route a copy to a shared effect channel', 'Sends are only for volume', 'Inserts only work on the master'], c: 1, why: 'Inserts sit directly in the signal path; sends feed shared effects like reverb.' },
        { q: 'In a piano roll, what does velocity control?', a: ['Pitch', 'Note length', 'How hard the note is played (usually loudness and tone)', 'Panning'], c: 2, why: 'Velocity represents how hard a key is struck.' },
        { q: 'Which plugin format is used by Pro Tools?', a: ['AU', 'AAX', 'VST2 only', 'MP3'], c: 1, why: 'Pro Tools uses AAX. Logic uses AU; most others use VST3.' }
      ],
      tools: ['metronome']
    },
    {
      id: 'f-sound',
      title: 'The Science of Sound',
      minutes: 50,
      summary: 'Frequency, amplitude, harmonics, phase and the frequency spectrum every engineer uses.',
      objectives: [
        'Explain frequency, amplitude, timbre and phase',
        'Name the frequency bands and what lives in each',
        'Describe sound with engineering vocabulary'
      ],
      body: `
## Sound is vibration
Sound is a pressure wave moving through air. A speaker cone pushes air forward and back; your eardrum moves in response.

- **Frequency** is how many times per second the wave repeats, measured in **Hertz (Hz)**. Higher frequency = higher pitch. A4 (the A above middle C) is 440 Hz. Each octave up doubles the frequency: A5 = 880 Hz, A3 = 220 Hz.
- **Amplitude** is the size of the wave, heard as loudness, measured in **decibels (dB)**. Decibels are logarithmic: +6 dB is roughly double the wave's amplitude, and about +10 dB is perceived as "twice as loud".
- **Wavelength** is the physical length of one cycle. Low frequencies have very long waves (a 50 Hz wave is nearly 7 metres long), which is why bass is hard to control in small rooms.
- **Timbre** (tone colour) is why a piano and a guitar playing the same note sound different. Every real sound contains a **fundamental** frequency plus **harmonics** (overtones) at multiples of it. The mix of harmonics is the timbre.
- **Phase** is where a wave is in its cycle. Two identical waves in phase add up (louder); 180° out of phase they cancel (silence). Phase problems appear when recording with several mics or layering kicks.

## The audible range
Humans hear roughly **20 Hz to 20 kHz**, and the top end falls with age and noise exposure. Protect your hearing: it is your most important tool.

## The frequency spectrum map
| Band | Range | What lives there | Too much sounds | Too little sounds |
|---|---|---|---|---|
| Sub-bass | 20–60 Hz | 808 sub, kick fundamental, felt more than heard | Rumbly, overwhelming | Thin, no weight |
| Bass | 60–250 Hz | Bass guitar, kick body, low piano | Boomy | Weak |
| Low mids | 250–500 Hz | Body of guitars, vocals, snare | Muddy | Hollow |
| Mids | 500 Hz–2 kHz | Core of most instruments, vocal tone | Boxy (500 Hz), honky (1 kHz) | Distant |
| Upper mids | 2–4 kHz | Attack, intelligibility, ear is most sensitive here | Harsh, tiring | Dull |
| Presence | 4–6 kHz | Clarity of vocals, guitar bite, snare crack | Edgy, sibilant | Lifeless |
| Brilliance / air | 6–20 kHz | Cymbals, breath, "air", sibilance (S sounds ~5–9 kHz) | Hissy, brittle | Dark, closed |

## Loudness and your ears
Our ears do not hear all frequencies equally. At low volumes we hear less bass and treble (described by the **equal-loudness contours**, also called Fletcher–Munson curves). That is why loud music sounds "better" and why you must mix at a **moderate, consistent level**, checking quietly and loudly.

- **dB SPL** measures sound pressure in the room (a quiet conversation is about 60 dB SPL).
- **dBFS** (decibels relative to Full Scale) measures digital level. **0 dBFS is the maximum**; anything above clips (distorts).

> **Pro tip:** Learn the spectrum by ear. Use the Frequency trainer in Practice Studio for 5 minutes a day. After a month you will hear "that is 250 Hz mud" instantly.
`,
      steps: [
        'Open Practice Studio → Ear Trainer → Frequency mode.',
        'Play the flat noise, then the boosted noise, for each frequency option until you can hear the difference.',
        'Do 10 rounds on Easy and note your score.',
        'Open Practice Studio → Synth Lab. Play a note with the sine wave, then saw, then square. Listen to how harmonics change timbre.',
        'Pick one song from your Taste Map and write which frequency bands are strongest.',
        'Find a free online "sine sweep 20Hz to 20kHz" video and listen on your headphones at low volume to find where your hearing and headphones start and stop.'
      ],
      tips: [
        'Keep listening levels moderate; long sessions at high volume cause permanent hearing loss.',
        'Write frequency descriptions in your journal ("vocal harsh around 3k"). Language trains perception.'
      ],
      mistakes: [
        'Mixing at very high volume. Bass and treble sound bigger than they really are.',
        'Thinking you can hear 20 kHz on laptop speakers. Small speakers barely reproduce below 150 Hz.'
      ],
      assignment: {
        title: 'Frequency Detective',
        brief: 'Train your ears to the frequency spectrum and describe real music with the vocabulary.',
        deliverables: [
          '10 rounds of the Frequency ear trainer with your score recorded',
          'Descriptions of 3 songs using at least 5 frequency terms (sub, mud, boxy, presence, air...)',
          'The lowest and highest frequency you can hear on your headphones, written in your journal'
        ]
      },
      quiz: [
        { q: 'If A4 is 440 Hz, what is A5?', a: ['220 Hz', '660 Hz', '880 Hz', '4400 Hz'], c: 2, why: 'Going up one octave doubles the frequency.' },
        { q: 'Which band is usually called "muddy" when there is too much of it?', a: ['20–60 Hz', '250–500 Hz', '4–6 kHz', '10–20 kHz'], c: 1, why: 'Build-up in the low mids (roughly 250–500 Hz) makes a mix sound muddy.' },
        { q: 'What does 0 dBFS represent?', a: ['Silence', 'The maximum digital level before clipping', 'Normal speaking volume', 'The bass level'], c: 1, why: 'dBFS is measured down from digital full scale; 0 is the ceiling.' },
        { q: 'Why does timbre differ between instruments playing the same note?', a: ['Different fundamentals', 'Different mixes of harmonics and envelopes', 'Different BPM', 'They do not differ'], c: 1, why: 'The harmonic content and how it changes over time define timbre.' }
      ],
      tools: ['ear', 'synth']
    },
    {
      id: 'f-digital',
      title: 'Digital Audio Essentials',
      minutes: 45,
      summary: 'Sample rate, bit depth, latency, file formats, MIDI vs audio, and gain staging basics.',
      objectives: [
        'Choose correct sample rate, bit depth and buffer settings',
        'Explain the difference between MIDI and audio',
        'Record at healthy levels with headroom'
      ],
      body: `
## Sample rate
Digital audio measures (samples) the wave thousands of times per second.
- **44.1 kHz**: CD standard, still common for music.
- **48 kHz**: video and broadcast standard; a great default for new projects today.
- **88.2 / 96 kHz**: more processing load and bigger files; useful for some sound design and editing.

The **Nyquist theorem** says a sample rate captures frequencies up to half its value, so 44.1 kHz captures up to 22.05 kHz, beyond human hearing.

## Bit depth
Bit depth sets the dynamic range: about **6 dB per bit**.
- **16-bit**: about 96 dB range. CD format.
- **24-bit**: about 144 dB range. **Record at 24-bit.** It gives you headroom so you never have to record dangerously loud.
- **32-bit float**: used inside DAWs for processing; practically impossible to clip internally, but you can still clip your interface's converters and your final export.

## Buffer size and latency
The buffer is how much audio the computer processes at once.
- **Small buffer (32–128 samples)**: low latency for recording and playing instruments, but higher CPU load.
- **Large buffer (512–2048 samples)**: more CPU headroom for mixing heavy projects, but noticeable delay.

Rule: **small buffer when recording, large buffer when mixing.** Use your interface's **direct monitoring** to hear yourself with zero latency.

## File formats
| Format | Type | Use |
|---|---|---|
| WAV / AIFF | Uncompressed, lossless | Recording, mixing, mastering, sending stems, distribution |
| FLAC / ALAC | Compressed, lossless | Archiving, hi-fi listening |
| MP3 / AAC / OGG | Compressed, lossy | Previews, sharing demos, beat store tagged previews |

Always keep your masters as WAV.

## MIDI vs audio
**MIDI** is not sound. It is performance data: which note, when, how hard (velocity, 0–127), how long, plus controller data (CC) like the mod wheel (CC1) or sustain pedal (CC64). MIDI can be edited endlessly and sent to any instrument.

**Audio** is the recorded sound wave itself. You can edit it, but you cannot change a sung note into a different instrument.

## Gain staging: introduction
Gain staging means keeping healthy levels at every stage so nothing clips and noise stays low.
- When recording at 24-bit, aim for **peaks around -10 to -6 dBFS** and an average around **-18 dBFS**.
- Never let any channel or the master hit 0 dBFS (red clip light).
- Many analog-modelled plugins are designed to work best when fed around -18 dBFS average.
- Leave headroom on the master bus while mixing (peaks around -6 dBFS) so the mastering stage has room.
`,
      steps: [
        'Open your DAW audio settings. Set the sample rate to 48 kHz and bit depth to 24-bit for new projects.',
        'Set the buffer to 128 samples. Play a software instrument and notice the response.',
        'Change the buffer to 1024 and play again. Notice the delay. Set it back.',
        'Record 10 seconds of your voice through any mic (even a laptop mic). Watch the meter and adjust gain so peaks reach about -10 dBFS.',
        'Export the same loop from the last lesson as WAV and as MP3 128 kbps. Compare file sizes.',
        'Listen to the WAV and MP3 back to back on headphones and write what you notice in the high frequencies.'
      ],
      tips: [
        'Freeze or bounce heavy synth tracks to audio when your CPU struggles.',
        'If you hear clicks and pops during playback, raise the buffer size.'
      ],
      mistakes: [
        'Recording as loud as possible "for quality". At 24-bit there is no benefit, only the risk of clipping.',
        'Mixing projects at different sample rates without checking. Keep one rate per project.'
      ],
      assignment: {
        title: 'Digital Audio Lab',
        brief: 'Get comfortable with audio settings and level management.',
        deliverables: [
          'Project template saved at 48 kHz / 24-bit',
          'A short vocal recording with peaks between -12 and -6 dBFS, no clipping',
          'A note comparing latency at 128 vs 1024 samples',
          'WAV vs MP3 file size comparison and listening notes'
        ]
      },
      quiz: [
        { q: 'What bit depth should you record at?', a: ['8-bit', '16-bit', '24-bit', 'It does not matter'], c: 2, why: '24-bit gives about 144 dB of dynamic range, so you can leave plenty of headroom.' },
        { q: 'When should you use a small buffer size?', a: ['When mixing a big project', 'When recording or playing instruments live', 'When exporting', 'Never'], c: 1, why: 'Small buffers reduce latency, which matters while performing.' },
        { q: 'What does MIDI contain?', a: ['Recorded sound waves', 'Performance data such as note, velocity and timing', 'MP3 audio', 'Only drum sounds'], c: 1, why: 'MIDI is instructions; an instrument turns it into sound.' }
      ]
    },
    {
      id: 'f-room',
      title: 'Your Room, Monitoring and Listening',
      minutes: 50,
      summary: 'Speaker placement, acoustic treatment, headphone mixing and translation.',
      objectives: [
        'Place monitors in a correct listening triangle',
        'Find and treat first reflection points',
        'Check mixes on multiple systems'
      ],
      body: `
## The listening triangle
- Your head and the two speakers form an **equilateral triangle** (equal distances, often 1–1.5 m).
- **Tweeters at ear height**, angled towards your ears.
- Set up **symmetrically**: centre the desk on the room's width, so left and right walls are equal distances.
- Face the **long wall** direction (speakers firing along the room's length) in most rectangular rooms.
- Keep speakers away from corners and at least 20–30 cm from the wall behind unless the manufacturer says otherwise. Many speakers have a "boundary" or "desk" EQ switch for close placement.
- Put speakers on stands or isolation pads so the desk does not resonate.

A widely used starting guideline is to sit about **38% of the room length** from the front wall, which avoids the worst bass build-up. Then fine-tune by measuring.

## Soundproofing vs treatment
These are different jobs.
- **Soundproofing** stops sound getting in or out: mass, airtight seals, decoupled construction (Semester 10).
- **Acoustic treatment** controls how sound behaves inside the room so you hear the speakers accurately. Foam egg-crate tiles alone do almost nothing for bass.

## Treatment priorities
1. **First reflection points**: sit in your mix position and have a friend slide a mirror along each side wall. Wherever you can see a speaker in the mirror, place an absorption panel. Do the same on the ceiling above the desk.
2. **Bass traps** in corners (especially the front corners): thick porous absorption, ideally floor-to-ceiling.
3. **Behind the listening position**: thick absorption or diffusion.
4. **Behind the speakers**: absorption on the front wall.

Effective DIY panels use **mineral wool or fibreglass, 10 cm (4 in) thick or more**, in a wooden frame wrapped in breathable fabric, mounted with an air gap behind for better low-frequency absorption.

## Measuring the room
**Room EQ Wizard (REW)** is free measurement software. With a measurement mic (such as the miniDSP UMIK-1) it shows peaks and dips in your room's bass response so you can move speakers and treatment scientifically. Speaker correction tools (for example Sonarworks SoundID Reference or monitors with built-in room correction) can help after treatment, not instead of it.

## Mixing on headphones
Headphones remove the room from the equation, which is great for beginners. Downsides: no natural crossfeed between ears, exaggerated stereo, and hard-to-judge sub-bass on some models. Fix this with **reference tracks**, a spectrum analyser, and checking on speakers, car and phone.

## Translation
A good mix "translates": it sounds right everywhere. Check on:
- Your main monitors or headphones
- Cheap earbuds
- A phone speaker (tests whether the bass is audible through harmonics)
- A car
- A Bluetooth speaker

## Listening level
Mix at a moderate level most of the time, and check at low and loud levels briefly. A phone SPL meter app helps you stay consistent. Take a 10-minute break every hour.
`,
      steps: [
        'Measure your room and mark the centre line on the floor.',
        'Place your desk so you face along the length of the room, centred.',
        'Set up monitors (or chair position for headphones) in an equilateral triangle with tweeters at ear height.',
        'Do the mirror test and mark first reflection points with tape on side walls and ceiling.',
        'Plan where panels and bass traps will go (draw a floor plan).',
        'Create a reference playlist of 5 well-mixed songs in genres you make.',
        'Play one reference on 4 different systems and write how the bass and vocal change on each.'
      ],
      tips: [
        'A bookshelf full of mixed-size books behind you acts as a decent diffuser.',
        'Heavy curtains and a rug help with high-frequency reflections but not bass.',
        'Always compare your mix to a reference at the same perceived loudness.'
      ],
      mistakes: [
        'Putting speakers in room corners, which exaggerates bass.',
        'Covering the whole room in thin foam, which kills the highs and leaves the bass problems.',
        'Placing speakers flat on a desk aimed at your chest.'
      ],
      assignment: {
        title: 'Room Setup Report',
        brief: 'Turn your space into the best listening environment you can afford.',
        deliverables: [
          'Floor plan with speaker, desk and listening positions',
          'First reflection points marked and a treatment plan (DIY or bought)',
          'Speakers or headphone position set in an equilateral triangle',
          'A 5-song reference playlist',
          'A translation test of one song on 4 systems with notes'
        ],
        stretch: 'Download REW, measure your room with a measurement mic, and adjust speaker position to reduce the biggest bass peak.'
      },
      quiz: [
        { q: 'Where should the tweeters be?', a: ['At chest height', 'At ear height, angled at your ears', 'On the floor', 'Facing the ceiling'], c: 1, why: 'Tweeters are directional; they must point at your ears.' },
        { q: 'How do you find first reflection points?', a: ['Clap and guess', 'Slide a mirror along the wall while seated; where you see a speaker is the point', 'Measure with a ruler from the door', 'Use a phone flashlight'], c: 1, why: 'The mirror shows where sound from the speaker reflects directly to your ears.' },
        { q: 'What does thin foam mostly fail to absorb?', a: ['High frequencies', 'Low frequencies (bass)', 'Vocals', 'Nothing'], c: 1, why: 'Bass wavelengths are long; you need thick porous absorbers or bass traps.' }
      ]
    },
    {
      id: 'f-workflow',
      title: 'Workflow, Organisation and Finishing Music',
      minutes: 45,
      summary: 'File management, templates, backups, escaping the 8-bar loop and finishing songs on time.',
      objectives: [
        'Organise projects, samples and versions',
        'Back up with the 3-2-1 rule',
        'Turn a loop into a full song using a time limit'
      ],
      body: `
## Folder structure
Use one folder per song, and a consistent naming system:

- Music / Projects / 2026 / Song-Name / (project file, Audio, Bounces, Stems, Notes)
- Music / Samples / Drums / Kicks, Snares, Hats... / Loops / Vocals / FX
- Music / Presets / Synth-Name /
- Music / Releases / Song-Name / (masters, artwork, metadata)

Name versions: **SongName_v01**, **SongName_v02_mix**, **SongName_v03_master**. Never "final_final_REAL.wav".

## Backups: the 3-2-1 rule
Keep **3 copies** of important work, on **2 different types of storage**, with **1 copy off-site** (cloud). A failed drive without backups can erase years of work.

## Templates
A template is a pre-built project you open instead of an empty one. It might contain: your favourite drum kit, a bass synth, a piano, buses for drums/music/vocals, reverb and delay sends ready, and colour-coding. Templates remove friction so you start creating immediately.

## Two modes of work
- **Creative mode**: write fast, do not judge, do not EQ. Capture ideas.
- **Technical mode**: edit, mix, fix problems.

Switching constantly between them kills momentum. Many producers write in the evening and mix the next morning with fresh ears.

## Escaping the loop trap
The most common beginner problem is the endless 8-bar loop. Methods to escape:
1. **Copy the loop across 3 minutes**, then delete and mute parts to create intro, verse, chorus and outro (the "subtractive" method, covered fully in Semester 5).
2. **Drag a reference song into your project**, mark its sections, and match its structure.
3. **Set a timer**: give yourself 60 minutes to turn a loop into a full structure. Done beats perfect.
4. **Write the next section first** before polishing the current one.

## Finishing
A song is finished when it is released or when you stop learning from it. Set a deadline per song (one week is a great beginner target). Keep a finished folder.

## Collaboration
- Export **stems** (each instrument group as an audio file from bar 1) so anyone can open your song in any DAW.
- Include a text file with BPM, key and notes.
- Cloud tools (Splice, Google Drive, Dropbox, BandLab) make sharing simple.
`,
      steps: [
        'Create the folder structure above on your computer.',
        'Move your existing samples into categorised folders.',
        'Set up a cloud backup for your Projects folder.',
        'Build a template: drum kit, bass, keys, synth, drum bus, music bus, vocal bus, reverb send, delay send. Save it as your default.',
        'Open your DAW Tour Loop. Set a 60-minute timer.',
        'Copy the loop to fill about 2 minutes, then mute elements to create an intro, two main sections and an outro.',
        'Export the result and put it in your Finished folder.'
      ],
      tips: [
        'Delete samples you never use. A smaller library makes faster decisions.',
        'Save a new version before big changes so you can always go back.'
      ],
      mistakes: [
        'Spending more time organising samples than making music.',
        'Keeping projects only on one laptop drive.'
      ],
      assignment: {
        title: 'Workflow Upgrade',
        brief: 'Build your organisation system and finish a loop into a structure under time pressure.',
        deliverables: [
          'Folder structure created for projects, samples, presets and releases',
          'Cloud or external backup running',
          'A saved DAW template with buses and sends',
          'A loop turned into a 2-minute arrangement in under 60 minutes, exported'
        ]
      },
      quiz: [
        { q: 'What is the 3-2-1 backup rule?', a: ['Back up 3 times a day', '3 copies, 2 storage types, 1 off-site', '3 drives, 2 computers, 1 USB', 'Save every 3 minutes'], c: 1, why: 'Three copies on two media types with one off-site protects against most disasters.' },
        { q: 'What is the subtractive method of arranging?', a: ['Removing all drums', 'Copying the full loop across the song then muting parts to create sections', 'Lowering the volume', 'Cutting the song shorter'], c: 1, why: 'Starting with everything and removing parts creates sections quickly.' },
        { q: 'What are stems?', a: ['MIDI files', 'Audio files of each instrument group, starting at bar 1', 'Presets', 'Song lyrics'], c: 1, why: 'Stems let anyone rebuild the mix in any DAW.' }
      ]
    },
    {
      id: 'f-project',
      title: 'Semester Project: Your First Track in 7 Days',
      minutes: 420,
      project: true,
      summary: 'Finish a complete 2-minute instrumental using only stock tools, one stage per day.',
      objectives: [
        'Complete a whole track from idea to export',
        'Apply everything from Semester 1',
        'Build the finishing habit'
      ],
      body: `
## The brief
Produce a complete instrumental of **at least 2 minutes** in any genre using **only your DAW's stock instruments and effects**. It does not need to be perfect. It needs to be *finished*.

## The 7-day plan
| Day | Focus | Goal |
|---|---|---|
| 1 | Idea | Pick a reference song. Set tempo and key. Make a 4–8 bar loop with drums, bass, chords. |
| 2 | Melody | Add a lead melody or hook and one counter-element (pad, arp, vocal chop). |
| 3 | Structure | Build intro, main section, contrast section, main section again, outro. |
| 4 | Variation | Add fills, drops, risers and changes every 4–8 bars so it never feels static. |
| 5 | Balance | Fader and pan balance only. Group into buses. No clipping. |
| 6 | Polish | Basic EQ on muddy parts, a shared reverb, automation on 2 things. |
| 7 | Finish | Export WAV, listen on 3 systems, make small fixes, export again, share it. |

## Grading yourself
- Does it have a clear beginning, middle and end?
- Does something change at least every 8 bars?
- Can you hear every element?
- Is the master free of clipping?
`,
      steps: [
        'Day 1: reference chosen, tempo and key set, 8-bar loop built.',
        'Day 2: hook melody and one counter-element added.',
        'Day 3: full structure laid out (at least 2 minutes).',
        'Day 4: transitions and variations added.',
        'Day 5: static balance mix done with buses.',
        'Day 6: EQ, reverb send and automation added.',
        'Day 7: exported, checked on 3 systems, shared.'
      ],
      assignment: {
        title: 'Track #1',
        brief: 'Your first finished song. Share it with one person or community for feedback.',
        deliverables: [
          'A 2+ minute instrumental exported as 24-bit WAV',
          'Notes on what you would do better next time',
          'Feedback from at least one other person',
          'The project saved in your Finished folder with stems exported'
        ]
      },
      quiz: [
        { q: 'What is the main goal of this project?', a: ['Make a hit', 'Finish a complete track', 'Use expensive plugins', 'Make it as long as possible'], c: 1, why: 'Finishing is the skill being trained.' },
        { q: 'During the balance day, which tools do you use?', a: ['Only faders and pan', 'Multiband compression', 'Mastering limiter', 'Pitch correction'], c: 0, why: 'A static mix with only faders and pan builds the most important mix skill: balance.' }
      ]
    }
  ]
});
