(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's2',
  no: 2,
  title: 'Music Theory & Songwriting',
  tagline: 'Notes, rhythm, scales, chords, progressions, melody, bass and lyrics, taught for producers.',
  weeks: 6,
  outcomes: [
    'Find any note, interval, scale and chord on a keyboard',
    'Write chord progressions on purpose, not by accident',
    'Use modes and world scales to create specific moods',
    'Write memorable melodies, hooks and basslines',
    'Structure songs and write lyrics with strong prosody',
    'Hear intervals and chord qualities by ear'
  ],
  lessons: [
    {
      id: 't-notes',
      title: 'Notes, the Keyboard and Intervals',
      minutes: 45,
      summary: 'The 12 notes, octaves, sharps and flats, and the intervals that define every melody and chord.',
      objectives: ['Name all 12 notes on a keyboard', 'Count intervals in semitones', 'Recognise how each interval feels'],
      body: `
## The 12 notes
Western music uses 12 notes that repeat in every octave:

**C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, B**, then C again an octave higher.

On a keyboard, the white keys are the natural notes (C D E F G A B). The black keys are sharps (#) and flats (b). C# and Db are the same key with two names (**enharmonic** notes). There is no black key between E–F and B–C.

**Find C**: it is the white key just to the left of every group of **two** black keys. In a DAW piano roll, notes are labelled like C3 or C4 (the octave number). Middle C is C4 in most DAWs, but some (like FL Studio and Ableton) label it C5 or C3. Check yours.

## Semitones and tones
- A **semitone** (half step) is the distance from one key to the very next key, black or white.
- A **tone** (whole step) is two semitones.

## Intervals
An interval is the distance between two notes. Learn them by semitone count:

| Semitones | Interval | Example from C | Feeling |
|---|---|---|---|
| 0 | Unison | C–C | Same note |
| 1 | Minor 2nd | C–Db | Tense, horror |
| 2 | Major 2nd | C–D | Neutral step |
| 3 | Minor 3rd | C–Eb | Sad, dark (the "minor" sound) |
| 4 | Major 3rd | C–E | Happy, bright (the "major" sound) |
| 5 | Perfect 4th | C–F | Open, hymn-like |
| 6 | Tritone | C–F# | Unstable, spooky |
| 7 | Perfect 5th | C–G | Powerful, stable (power chords) |
| 8 | Minor 6th | C–Ab | Bittersweet, cinematic |
| 9 | Major 6th | C–A | Warm, sweet |
| 10 | Minor 7th | C–Bb | Bluesy, soulful |
| 11 | Major 7th | C–B | Dreamy, jazzy tension |
| 12 | Octave | C–C | Same note, higher |

Intervals are the DNA of music. Chords are stacked intervals; melodies are moving intervals.

## Octaves in production
- Doubling a melody an octave up adds brightness and width.
- Doubling a bassline an octave down adds weight.
- 808s and sub-bass usually live in octaves 0–2 (about 30–100 Hz).
`,
      steps: [
        'Open Practice Studio → Theory Explorer. Click every key and say its name out loud.',
        'Find all the Cs, then all the Fs, without counting from C.',
        'From C, play each interval in the table and listen to its feeling.',
        'Repeat the intervals from a different starting note (e.g. F) by counting semitones.',
        'In your DAW piano roll, draw a melody using only a minor 3rd and a perfect 5th above a root note.',
        'Do 10 rounds of Ear Trainer → Intervals on Easy.'
      ],
      tips: ['Learn the keyboard even if you are not a pianist; the piano roll is a keyboard on its side.', 'Say interval names while you play them. Linking sound and name speeds up learning.'],
      mistakes: ['Thinking E# or B# do not exist. They do (E# = F), but you will rarely need them.', 'Relying only on scale-highlight features without learning the notes.'],
      assignment: {
        title: 'Interval Fluency',
        brief: 'Build instant recognition of notes and intervals.',
        deliverables: ['Name any key on the keyboard within 2 seconds (test yourself 20 times)', 'Play all 12 intervals from 3 different starting notes', '10 interval ear-training rounds with your score', 'A 4-bar melody in your DAW built from only 3rds and 5ths']
      },
      quiz: [
        { q: 'How many semitones are in a perfect 5th?', a: ['5', '7', '4', '12'], c: 1, why: 'C to G is 7 semitones.' },
        { q: 'Which interval gives the "sad" minor sound?', a: ['Major 3rd', 'Perfect 4th', 'Minor 3rd', 'Octave'], c: 2, why: 'The minor 3rd (3 semitones) defines minor chords and scales.' },
        { q: 'C# and Db are...', a: ['Different keys', 'The same key with two names (enharmonic)', 'Both white keys', 'An octave apart'], c: 1, why: 'Enharmonic notes sound the same but are spelled differently.' }
      ],
      tools: ['piano', 'ear']
    },
    {
      id: 't-rhythm',
      title: 'Rhythm, Tempo and Time Signatures',
      minutes: 45,
      summary: 'BPM, bars and beats, note values, triplets, swing, syncopation and quantisation.',
      objectives: ['Count bars, beats and subdivisions', 'Use triplets, swing and syncopation deliberately', 'Know the tempo range of major genres'],
      body: `
## Tempo
**BPM** (beats per minute) is the speed of the beat. 120 BPM means two beats per second.

## Bars and time signatures
A **bar** (measure) groups beats. The **time signature** says how many beats are in a bar and which note value counts as one beat.
- **4/4**: four quarter-note beats per bar. Most popular music.
- **3/4**: three beats, a waltz feel.
- **6/8**: two big beats each split into three (a rolling feel, common in ballads, Afro and Irish music).
- **5/4, 7/8**: odd meters, used in progressive music, some film scores and traditional styles.

## Note values (in 4/4)
| Note | Beats | In a 16-step sequencer |
|---|---|---|
| Whole | 4 | 16 steps |
| Half | 2 | 8 steps |
| Quarter | 1 | 4 steps |
| Eighth | 1/2 | 2 steps |
| Sixteenth | 1/4 | 1 step |
| Thirty-second | 1/8 | half a step (hi-hat rolls) |

Counting sixteenths: **"1 e & a, 2 e & a, 3 e & a, 4 e & a"**.

A **dotted** note lasts 1.5 times its normal value. A dotted eighth delay (3/16 of a bar) is a classic rhythmic delay.

**Triplets** fit three notes in the space of two. Triplet hi-hats are essential in trap; triplet flows are common in rap.

## Swing and shuffle
**Swing** delays every second subdivision so the rhythm "lopes" (long-short instead of even). MPC-style swing is measured as a percentage: 50% is straight, about 66% is full triplet swing. Boom bap, lo-fi, house and R&B often use 54–62% swing on 16ths.

## Syncopation
Syncopation places accents **off the beat**, on the "e", "&" or "a". It is the difference between a stiff rhythm and a groove. Reggaeton's dembow, funk basslines and Afrobeats percussion are all syncopated.

## Half-time and double-time
- **Half-time** feel: the snare lands on beat 3 instead of 2 and 4, so a 140 BPM track feels like 70. Trap, dubstep and drill use this.
- **Double-time**: hi-hats or drums move twice as fast, adding energy without changing BPM.

## Quantisation
Quantising snaps notes to the grid. **100% quantise** sounds robotic; **50–80% strength** or groove templates keep human feel. Some genres (techno, EDM) want tight grids; others (neo-soul, lo-fi) want looseness.

## Typical tempos
| Genre | BPM |
|---|---|
| Lo-fi hip-hop | 70–90 |
| Boom bap | 85–95 |
| R&B | 60–90 |
| Reggaeton | 88–100 |
| Afrobeats | 95–115 |
| Pop | 95–125 |
| House | 120–128 |
| Techno | 125–140 |
| Trap / drill | 130–150 (half-time feel) |
| Dubstep | 140 (half-time) |
| Drum & bass | 170–176 |
`,
      steps: [
        'Open the Metronome in Practice Studio at 90 BPM and clap on every beat, then on every "&".',
        'Count "1 e & a" out loud for 4 bars while the metronome plays.',
        'Open the Drum Machine. Load "Boom Bap" and change swing from 50% to 62%. Listen to the difference.',
        'Program a hi-hat line in your DAW with 8ths, then switch it to 16ths, then triplets.',
        'Use Tap Tempo to find the BPM of 3 songs from your Taste Map.',
        'Program a kick pattern with one syncopated kick on the "a" of beat 2.'
      ],
      tips: ['Practise with a metronome daily; internal timing is a skill.', 'Nudge snares a few milliseconds late for a laid-back feel, early for urgency.'],
      mistakes: ['Quantising everything to 100% in genres that need groove.', 'Confusing half-time feel with a slower BPM. The BPM stays the same; the snare placement changes.'],
      assignment: {
        title: 'Rhythm Lab',
        brief: 'Feel and program different rhythmic ideas.',
        deliverables: ['BPMs of 5 reference songs found with Tap Tempo', 'A 2-bar drum loop in straight time and the same loop with 60% swing', 'A hi-hat pattern using triplets', 'A half-time version of a beat (snare on 3) at the same BPM']
      },
      quiz: [
        { q: 'In 4/4, how many 16th notes are in one bar?', a: ['4', '8', '16', '32'], c: 2, why: '4 beats × 4 sixteenths = 16.' },
        { q: 'What does 66% swing approximate?', a: ['Straight timing', 'Full triplet swing', 'Double-time', 'Half-time'], c: 1, why: 'At about 66% the off-beat lands where the third triplet would.' },
        { q: 'In a half-time beat at 140 BPM, where does the snare usually land?', a: ['Beats 2 and 4', 'Beat 3', 'Every beat', 'Beat 1'], c: 1, why: 'Half-time moves the backbeat to beat 3, so it feels like 70 BPM.' }
      ],
      tools: ['metronome', 'drums'],
      beats: [
        { name: 'Straight 8ths rock', bpm: 100, swing: 50, kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' },
        { name: 'Syncopated groove', bpm: 96, swing: 58, kick: 'x......x..x.....', snare: '....x.......x...', chh: 'xxxxxxxxxxxxxxxx' }
      ]
    },
    {
      id: 't-scales',
      title: 'Major and Minor Scales, Keys and the Circle of Fifths',
      minutes: 50,
      summary: 'Scale formulas, keys, relative major and minor, and how to find a song\'s key.',
      objectives: ['Build any major or minor scale from its formula', 'Understand keys and key signatures', 'Find the key of a song by ear'],
      body: `
## What a scale is
A scale is a set of notes that sound good together. A **key** is a scale with a home note (the **tonic**) that the music gravitates towards.

## The major scale
Formula in steps: **W – W – H – W – W – W – H** (W = whole step / 2 semitones, H = half step / 1 semitone).

C major: **C D E F G A B C** (all white keys).
G major: G A B C D E **F#** G.

Sound: bright, happy, confident.

## The natural minor scale
Formula: **W – H – W – W – H – W – W**.

A minor: **A B C D E F G A** (all white keys).
C minor: C D **Eb** F G **Ab Bb** C.

Sound: dark, emotional, serious. Most trap, drill, EDM and a lot of pop uses minor keys.

## Relative major and minor
Every major key shares its notes with a minor key that starts on its **6th degree**. C major and A minor share the same notes. The difference is which note feels like home. To find the relative minor of a major key, go down 3 semitones (C → A).

## Scale degrees
Each note in a scale has a number. In C major: C = 1, D = 2, E = 3, F = 4, G = 5, A = 6, B = 7. Thinking in numbers lets you transpose any idea to any key.

## The circle of fifths
Arrange the 12 keys so each is a perfect 5th above the last: **C → G → D → A → E → B → F# → C# ...** Each step clockwise adds one sharp. Counter-clockwise: **C → F → Bb → Eb → Ab → Db → Gb**, each step adds one flat.

Uses for producers:
- Neighbouring keys on the circle share 6 of 7 notes, so they make smooth key changes.
- Chords next to each other on the circle sound natural together.
- Relative minors sit on the inner ring (Am with C, Em with G, Dm with F...).

## Finding a song's key
1. Hum the note the song wants to resolve to at the end of the chorus. That is probably the tonic.
2. Find that note on the keyboard.
3. Play the major scale and the minor scale from that note over the song. The one with no clashing notes is the key.
4. Check by playing the bassline: bass notes usually land on the tonic at section endings.
Key-detection tools exist (in many DAWs, sample managers and websites), but they can be wrong. Trust your ears and verify.

## Why key matters in production
- Samples, 808s and loops must be in the same key (or transposed).
- Singers have comfortable ranges. Transposing the beat up or down 1–3 semitones can make a vocal shine.
- DJ-friendly music is labelled by key so DJs can mix harmonically.
`,
      steps: [
        'In the Theory Explorer, pick root C and scale Major. Play the scale up and down.',
        'Switch to Natural Minor with root A. Notice it uses the same notes.',
        'Build D major by hand using W W H W W W H, then check it in the explorer.',
        'Build E minor by hand using W H W W H W W, then check it.',
        'Find the key of 3 songs from your Taste Map using the hum-and-test method.',
        'Write an 8-bar melody in C minor in your DAW, then transpose it to E minor.'
      ],
      tips: ['Most DAWs have a scale highlight or "fold to scale" view in the piano roll. Use it while you learn, then challenge yourself without it.', 'Label every project and sample with BPM and key.'],
      mistakes: ['Mixing a sample in F minor with an 808 tuned to F# without noticing.', 'Thinking minor means "sad" only. Minor can be aggressive, mysterious or sexy depending on rhythm and sound.'],
      assignment: {
        title: 'Key Finder',
        brief: 'Make scales and keys second nature.',
        deliverables: ['All 12 major scales written out (use the formula, verify with the explorer)', 'Keys of 5 reference songs found by ear', 'A melody in a minor key transposed to two other keys', 'A drawn circle of fifths with relative minors']
      },
      quiz: [
        { q: 'What is the major scale formula?', a: ['W H W W H W W', 'W W H W W W H', 'H W W H W W W', 'W W W H W W H'], c: 1, why: 'Major = W W H W W W H.' },
        { q: 'What is the relative minor of C major?', a: ['C minor', 'E minor', 'A minor', 'G minor'], c: 2, why: 'Go to the 6th degree (or down 3 semitones): A minor.' },
        { q: 'Moving clockwise on the circle of fifths adds...', a: ['A flat', 'A sharp', 'Two notes', 'Nothing'], c: 1, why: 'Each step clockwise adds one sharp to the key signature.' }
      ],
      tools: ['piano']
    },
    {
      id: 't-chords',
      title: 'Chords: Triads, 7ths, Extensions and Voicings',
      minutes: 60,
      summary: 'Build every common chord, understand diatonic chords, and voice chords so they sound professional.',
      objectives: ['Build triads and 7th chords from intervals', 'Know the diatonic chords in major and minor keys', 'Use inversions and voicings for smooth, rich chords'],
      body: `
## Triads (3-note chords)
Built by stacking thirds from a root.

| Chord | Formula (semitones from root) | In C | Sound |
|---|---|---|---|
| Major | 0 – 4 – 7 | C E G | Bright, stable |
| Minor | 0 – 3 – 7 | C Eb G | Dark, emotional |
| Diminished | 0 – 3 – 6 | C Eb Gb | Tense, unstable |
| Augmented | 0 – 4 – 8 | C E G# | Dreamy, suspenseful |
| Sus2 | 0 – 2 – 7 | C D G | Open, unresolved |
| Sus4 | 0 – 5 – 7 | C F G | Wants to resolve to major |

## 7th chords (4 notes)
| Chord | Formula | In C | Typical use |
|---|---|---|---|
| Major 7 (maj7) | 0 – 4 – 7 – 11 | C E G B | Lush, R&B, lo-fi, neo-soul |
| Minor 7 (m7) | 0 – 3 – 7 – 10 | C Eb G Bb | Smooth, soulful |
| Dominant 7 (7) | 0 – 4 – 7 – 10 | C E G Bb | Bluesy, wants to resolve |
| Half-diminished (m7b5) | 0 – 3 – 6 – 10 | C Eb Gb Bb | Jazz, dark tension |
| Diminished 7 (dim7) | 0 – 3 – 6 – 9 | C Eb Gb A | Dramatic, cinematic |

## Extensions
Add notes beyond the octave: **9th** (= 2nd), **11th** (= 4th), **13th** (= 6th). Cmaj9 = C E G B D. Extensions are the sound of neo-soul, jazz, lo-fi and modern R&B. **add9** adds the 9th without the 7th (C E G D), a common pop colour.

## Diatonic chords
Build a triad on each note of a scale using only that scale's notes.

**Major key** (C major): I (C), ii (Dm), iii (Em), IV (F), V (G), vi (Am), vii° (Bdim)
Pattern: **Major, minor, minor, Major, Major, minor, diminished**.

**Minor key** (A minor): i (Am), ii° (Bdim), III (C), iv (Dm), v (Em), VI (F), VII (G)
Pattern: **minor, diminished, Major, minor, minor, Major, Major**.

Roman numerals let you describe progressions in any key. Upper case = major, lower case = minor, ° = diminished.

## Inversions
An inversion puts a note other than the root at the bottom.
- **Root position**: C E G
- **1st inversion**: E G C
- **2nd inversion**: G C E

Inversions let chords move smoothly (**voice leading**): each note moves as little as possible to the next chord. C (C E G) → F in 2nd inversion (C F A) only moves two notes by small steps. This sounds far more professional than jumping all notes in parallel.

## Voicing tips for producers
- Keep chords around **C3–C5**; low chords get muddy, so let the bass handle the low end.
- **Open voicings**: spread notes over more than an octave (root low, 3rd and 7th higher) for a big, cinematic sound.
- **Drop the root**: if the bass plays the root, the chord can skip it.
- **Slash chords**: C/E means C chord with E in the bass. Great for walking bass lines.
- **Top note melody**: make the highest note of each chord form a pleasing melody.
`,
      steps: [
        'In Theory Explorer, choose C Major. Click each diatonic chord and say its Roman numeral.',
        'Switch to A Natural Minor and compare: same notes, different home chord.',
        'In your DAW, write C major, A minor, F major and G major in root position.',
        'Rewrite them using inversions so no note jumps more than 4 semitones.',
        'Turn each chord into a 7th chord (Cmaj7, Am7, Fmaj7, G7). Listen to the change in mood.',
        'Add a 9th to two of the chords. Compare with the triad version.',
        'Delete the root notes from the chords and add a separate bass track playing the roots.'
      ],
      tips: ['Practise building chords on an actual keyboard controller, not just with a mouse.', 'Stack chord notes across two instruments (pad plays 3rd and 7th, piano plays 5th and 9th) for rich textures.'],
      mistakes: ['Playing every chord in root position, which creates jumpy, amateur progressions.', 'Putting thick chords in the bass register (below C2), which makes mud.'],
      assignment: {
        title: 'Chord Builder',
        brief: 'Build, voice and colour chords like a keyboard player.',
        deliverables: ['All 7 diatonic triads in C major and A minor written in your DAW', 'A 4-chord progression in root position and a voice-led version', 'The same progression with 7ths and one with 9ths', 'A short note on which version you prefer and why']
      },
      quiz: [
        { q: 'What is the formula for a minor triad?', a: ['0-4-7', '0-3-7', '0-3-6', '0-4-8'], c: 1, why: 'Root, minor 3rd (3), perfect 5th (7).' },
        { q: 'In a major key, which chord is diminished?', a: ['ii', 'IV', 'vii°', 'vi'], c: 2, why: 'The 7th degree triad is diminished.' },
        { q: 'What does voice leading aim for?', a: ['All notes jump together', 'Each note moves as little as possible between chords', 'Only root position chords', 'Louder chords'], c: 1, why: 'Small movements make progressions smooth and professional.' },
        { q: 'Which chord type is most associated with lush R&B and lo-fi?', a: ['Power chords', 'Major 7 / minor 7 and extensions', 'Diminished only', 'Augmented'], c: 1, why: '7ths and extensions give that smooth, jazzy colour.' }
      ],
      tools: ['piano']
    },
    {
      id: 't-progressions',
      title: 'Chord Progressions That Work',
      minutes: 60,
      summary: 'Harmonic function, famous progressions by genre, borrowed chords, secondary dominants and key changes.',
      objectives: ['Explain tonic, predominant and dominant function', 'Write progressions for specific moods and genres', 'Use borrowed chords and secondary dominants for colour'],
      body: `
## Harmonic function
Chords have jobs:
- **Tonic (I, vi, iii)**: home, rest.
- **Predominant / subdominant (IV, ii)**: moving away.
- **Dominant (V, vii°)**: tension that wants to resolve home.

The classic journey is **home → away → tension → home** (I – IV – V – I). Modern pop often loops progressions without a strong resolution so they can repeat forever.

## Famous progressions
| Progression | In C major / A minor | Mood | Where you hear it |
|---|---|---|---|
| I – V – vi – IV | C – G – Am – F | Uplifting, anthemic | Countless pop hits |
| vi – IV – I – V | Am – F – C – G | Emotional, hopeful | Pop, EDM, pop-punk |
| I – vi – IV – V | C – Am – F – G | Nostalgic | 1950s doo-wop, retro pop |
| ii – V – I | Dm7 – G7 – Cmaj7 | Smooth, resolved | Jazz, neo-soul, lo-fi |
| i – VI – III – VII | Am – F – C – G | Epic, dark-hopeful | EDM, pop, film |
| i – VII – VI – V | Am – G – F – E | Dramatic, Spanish (Andalusian cadence) | Flamenco, rock, trap melodies |
| i – iv – v | Am – Dm – Em | Dark, simple | Trap, drill, minor pop |
| i – iv – VI – V | Am – Dm – F – E | Cinematic tension | Film, drill, dramatic pop |
| I – IV (vamp) | C – F | Groovy, gospel | Funk, gospel, house |
| 12-bar blues | I-I-I-I / IV-IV-I-I / V-IV-I-V | Bluesy | Blues, rock and roll, jazz |

Notice **i – VI – III – VII** uses the same chords as **vi – IV – I – V**, starting on a different chord. Where you start changes the emotional centre.

## Borrowed chords (modal interchange)
Borrow chords from the parallel minor while in a major key (or vice versa):
- **iv** in major (Fm in C major): bittersweet, cinematic.
- **bVI** (Ab in C) and **bVII** (Bb in C): epic, rock, film trailer.
- **Major IV** in a minor key (D major in A minor): Dorian colour.
- **V major in minor** (E major in A minor, from harmonic minor): strong resolution, classic in drill, Latin and classical.

## Secondary dominants
Make any chord feel like a temporary home by playing *its* V chord first. **V/V** in C is D major (D → G → C). **V/vi** is E major (E → Am). They add forward motion and sophistication.

## Key changes (modulation)
- **Truck-driver change**: jump the final chorus up 1 or 2 semitones for a lift.
- **Pivot chord**: use a chord that exists in both keys to slide smoothly.
- **Relative key switch**: verse in A minor, chorus in C major.

## Harmonic rhythm
How often chords change. One chord per bar is common in pop. Two per bar adds motion. A single chord for 8 bars (common in house and techno) puts focus on rhythm and sound design. Changing harmonic rhythm between sections creates contrast.

## Writing method
1. Choose a mood and key.
2. Pick a starting progression from the table.
3. Swap one chord for a borrowed chord or a 7th.
4. Voice-lead it.
5. Change the rhythm of the chords (stabs, syncopated, arpeggiated) to match the genre.
`,
      steps: [
        'In Theory Explorer, choose C Major and play each preset progression button. Then switch to A Natural Minor.',
        'In your DAW, write I–V–vi–IV in C major with voice leading.',
        'Replace the IV with iv (F minor). Listen to the emotional change.',
        'Write a ii–V–I with 7th chords and add 9ths.',
        'Write i–VI–III–VII in A minor and arpeggiate it with a synth.',
        'Take any progression and add a secondary dominant before one chord.',
        'Create the same progression with three different rhythms: whole notes, offbeat stabs, and a syncopated pattern.'
      ],
      tips: ['Great songs often use simple progressions with great rhythm and sound choice.', 'Collect progressions from songs you love in your journal (as Roman numerals).'],
      mistakes: ['Using too many chords in a short loop, which confuses the ear.', 'Ignoring the bass note. The bass defines how a chord is heard.'],
      assignment: {
        title: 'Progression Library',
        brief: 'Build your personal library of progressions for different moods.',
        deliverables: ['8 progressions saved as MIDI clips, each labelled with mood and genre', 'At least 2 that use borrowed chords', 'At least 1 with a secondary dominant', '2 progressions transcribed from songs you love (as Roman numerals)']
      },
      quiz: [
        { q: 'Which function creates tension that wants to resolve home?', a: ['Tonic', 'Dominant', 'Predominant', 'Inversion'], c: 1, why: 'The V (dominant) chord pulls back to I.' },
        { q: 'In C major, what is the borrowed iv chord?', a: ['F major', 'F minor', 'D minor', 'G minor'], c: 1, why: 'iv comes from C minor: F minor.' },
        { q: 'What is the V/V chord in C major?', a: ['G major', 'D major', 'A minor', 'E minor'], c: 1, why: 'The V of G is D major.' }
      ],
      tools: ['piano']
    },
    {
      id: 't-modes',
      title: 'Modes, World Scales and Ragas',
      minutes: 55,
      summary: 'The seven modes, pentatonic and blues scales, harmonic minor, Phrygian dominant, and Indian thaats.',
      objectives: ['Hear and use each of the seven modes', 'Use exotic and world scales tastefully', 'Connect Western modes to Indian thaats'],
      body: `
## The seven modes
Modes are scales built by starting the major scale on different degrees. Ordered from brightest to darkest:

| Mode | Formula vs major | From C | Character | Used in |
|---|---|---|---|---|
| Lydian | #4 | C D E F# G A B | Dreamy, magical | Film scores, dream pop |
| Ionian (major) | — | C D E F G A B | Happy, resolved | Pop, everything |
| Mixolydian | b7 | C D E F G A Bb | Bluesy major, laid-back | Rock, funk, Afro, Punjabi folk |
| Dorian | b3, b7 | C D Eb F G A Bb | Soulful minor, hopeful | Funk, house, lo-fi, neo-soul |
| Aeolian (minor) | b3, b6, b7 | C D Eb F G Ab Bb | Sad, dark | Pop, trap, EDM |
| Phrygian | b2, b3, b6, b7 | C Db Eb F G Ab Bb | Dark, exotic, menacing | Drill, metal, Spanish flavours |
| Locrian | b2, b3, b5, b6, b7 | C Db Eb F Gb Ab Bb | Unstable | Rare; metal, experimental |

The **characteristic note** gives each mode its flavour: Lydian's #4, Dorian's natural 6, Phrygian's b2, Mixolydian's b7. Emphasise it in melodies and chords.

## Pentatonic and blues scales
- **Major pentatonic** (1 2 3 5 6): no half steps, so it is almost impossible to sound wrong. Country, pop, gospel, Afro, East Asian music.
- **Minor pentatonic** (1 b3 4 5 b7): rock riffs, hip-hop melodies, R&B runs.
- **Blues scale** (minor pentatonic + b5): the "blue note".

## Harmonic and melodic minor
- **Harmonic minor**: natural minor with a raised 7th (A B C D E F G#). Creates a dramatic, classical or Middle Eastern sound and a strong V chord. Very common in dark trap and drill melodies.
- **Melodic minor**: natural minor with raised 6th and 7th. Jazz and sophisticated film music.

## Phrygian dominant and double harmonic
- **Phrygian dominant** (1 b2 3 4 5 b6 b7): the 5th mode of harmonic minor. Spanish flamenco, Middle Eastern, and many dark melodies.
- **Double harmonic major** (1 b2 3 4 5 b6 7): intense, Arabic and Indian flavour. It matches the notes of **Bhairav** thaat.

## Indian thaats and ragas
In Hindustani classical music, a **raga** is much more than a scale: it has characteristic phrases, ascending and descending rules, important notes, ornaments (meend, gamak), time of day and mood. Using only the notes does not make it a raga, but the note sets are a great source of melodic colour. The ten **thaats** (parent scales) map to familiar scales:

| Thaat | Notes match | Example ragas | Mood |
|---|---|---|---|
| Bilawal | Major (Ionian) | Bilawal, Durga (pentatonic subset) | Bright |
| Khamaj | Mixolydian | Khamaj, Desh | Romantic, light |
| Kafi | Dorian | Kafi, Bageshri | Folk, playful |
| Asavari | Aeolian (natural minor) | Asavari, Jaunpuri | Serious |
| Bhairavi | Phrygian | Bhairavi | Devotional, longing |
| Kalyan | Lydian | Yaman | Serene, evening |
| Bhairav | Double harmonic major | Bhairav, Ahir Bhairav (related) | Morning, devotional |
| Purvi | 1 b2 3 #4 5 b6 7 | Purvi, Puriya Dhanashree | Dusk, intense |
| Marwa | 1 b2 3 #4 5 6 7 | Marwa | Sunset, restless |
| Todi | 1 b2 b3 #4 5 b6 7 | Miyan ki Todi | Morning, complex |

Bollywood, Punjabi and South Asian pop use these colours constantly, usually with a **drone** (tonic and 5th held underneath).

## Other colours
- **Hirajoshi** (1 2 b3 5 b6): Japanese flavour.
- **Whole tone** (all whole steps): dreamy, unresolved, "flashback" sound.
- **Hijaz** (an Arabic maqam) shares its lower notes with Phrygian dominant. Arabic maqamat also use quarter-tones that a standard keyboard cannot play exactly.

## How to use modes in a track
1. Hold a drone or a one-chord vamp on the root.
2. Write the melody emphasising the characteristic note.
3. Build chords from the mode (Dorian: i – IV is the classic vamp; Mixolydian: I – bVII – IV; Phrygian: i – bII).
`,
      steps: [
        'In Theory Explorer, set root D and play each mode from the menu over the same root. Note the mood of each.',
        'In your DAW, hold a D drone (a long D note an octave below) and improvise a melody in D Dorian, emphasising the B natural.',
        'Do the same in D Phrygian emphasising Eb.',
        'Write the Dorian vamp i – IV (Dm7 – G7) and loop it for 8 bars.',
        'Write a dark trap melody in C harmonic minor, using the B natural leading into C.',
        'Choose the Double Harmonic scale and write a 4-bar melody with slides between notes.'
      ],
      tips: ['A mode only sounds like itself if the root feels like home. Use a drone or bass to anchor it.', 'Mixing modes between sections (Aeolian verse, Dorian chorus) is a subtle way to lift energy.'],
      mistakes: ['Thinking a raga is only a scale. Study the phrases if you want an authentic sound.', 'Using exotic scales as a gimmick without rhythm and sound design that fit.'],
      assignment: {
        title: 'Mode Mood Board',
        brief: 'Create short sketches that prove you can control mood with scale choice.',
        deliverables: ['Five 4-bar sketches: Lydian, Dorian, Mixolydian, Phrygian, Harmonic minor', 'One sketch using a raga or world scale over a drone', 'A note on the characteristic note you emphasised in each']
      },
      quiz: [
        { q: 'Which mode is natural minor with a raised (natural) 6th?', a: ['Phrygian', 'Dorian', 'Lydian', 'Locrian'], c: 1, why: 'Dorian = b3, natural 6, b7.' },
        { q: 'Which note gives Lydian its dreamy colour?', a: ['b2', '#4', 'b7', 'b6'], c: 1, why: 'The raised 4th is Lydian\'s characteristic note.' },
        { q: 'Kafi thaat has the same notes as which mode?', a: ['Ionian', 'Dorian', 'Phrygian', 'Lydian'], c: 1, why: 'Kafi corresponds to Dorian.' },
        { q: 'What makes harmonic minor different from natural minor?', a: ['Raised 7th', 'Lowered 2nd', 'Raised 4th', 'No 5th'], c: 0, why: 'The raised 7th creates the leading tone and dramatic sound.' }
      ],
      tools: ['piano']
    },
    {
      id: 't-melody',
      title: 'Writing Melodies and Hooks',
      minutes: 55,
      summary: 'Motifs, contour, rhythm, repetition, tension notes and the hook types that make songs stick.',
      objectives: ['Write melodies from a motif', 'Shape contour and rhythm deliberately', 'Write strong hooks for beats and songs'],
      body: `
## A melody is rhythm plus pitch
Most memorable melodies are **rhythmically strong first**. Try clapping a hook from a hit song: you can usually recognise it from rhythm alone.

## Building from a motif
A **motif** is a short idea of 2–5 notes. Develop it with:
- **Repetition**: say it again (people remember what repeats).
- **Sequence**: repeat it starting on a different note.
- **Variation**: change one or two notes or the rhythm.
- **Inversion**: flip the direction (up becomes down).
- **Call and response**: phrase A asks, phrase B answers.

A classic 4-bar shape: **A – A – A' – B** (idea, repeat, variation, answer).

## Contour
The shape of the melody over time.
- **Arch**: rises to a peak and falls (very common, satisfying).
- **Steps** (moving by adjacent notes) feel smooth and singable.
- **Leaps** (jumping 4+ semitones) feel emotional and attention-grabbing. Follow a big leap with a step in the opposite direction.
- Put the **highest note of the song in the chorus** for maximum impact.

## Chord tones and tension
- Land on **chord tones** (root, 3rd, 5th of the current chord) on strong beats for stability.
- Use **passing tones** and **neighbour tones** between them on weak beats.
- Holding a non-chord tone on a strong beat (a **suspension** or **appoggiatura**) creates emotional tension that resolves.

## Space
Silence is part of the melody. Leave gaps for the listener (and the singer) to breathe. Hooks that leave space are easier to remember.

## Range
- Vocal melodies: usually stay within about an octave to an octave and a half.
- Keep the verse lower and the chorus higher.

## Hook types
| Hook | Example of what it is |
|---|---|
| Melodic hook | A sung or played phrase you hum afterwards |
| Lyrical hook | The title phrase repeated in the chorus |
| Rhythmic hook | A distinctive drum or vocal rhythm |
| Sound hook | A unique sound: a vocal chop, a whistle, a weird synth |
| Producer tag | A short signature audio at the start of a beat |

## Practical methods
1. **Hum first**: record yourself humming over the chords into your phone, then transcribe the best bits.
2. **Rhythm first**: program a rhythm on one note, then move notes to pitches.
3. **Chord-tone skeleton**: write one long note per chord using chord tones, then decorate it.
4. **Limit yourself**: use only 3 or 5 notes (pentatonic) for a strong, simple hook.
5. **Counter-melody**: add a second melody that moves when the main one rests.
`,
      steps: [
        'Loop a 4-chord progression from your Progression Library.',
        'Record yourself humming 5 different melodic ideas over it on your phone.',
        'Transcribe the best idea into the piano roll.',
        'Turn it into an A – A – A\' – B phrase.',
        'Check that strong beats land on chord tones; fix any that clash unintentionally.',
        'Write a counter-melody that plays in the gaps.',
        'Create a sound hook: pitch a vocal sample or design a distinctive synth to play the hook.'
      ],
      tips: ['If you cannot sing a melody back after one listen, it is probably too complicated.', 'Try writing the hook before the chords: a strong melody can suggest its own harmony.'],
      mistakes: ['Notes on every 16th with no space.', 'Melodies that never repeat. Repetition is what makes music catchy.', 'Writing every melody in the same register.'],
      assignment: {
        title: 'Hook Factory',
        brief: 'Write hooks until it becomes easy.',
        deliverables: ['10 different 4-bar melodic hooks over the same progression', 'Your 3 favourites developed with A-A-A\'-B structure', 'One hook played by a "sound hook" (vocal chop or unique synth)', 'A counter-melody for your best hook']
      },
      quiz: [
        { q: 'What is a motif?', a: ['A full song', 'A short musical idea of a few notes', 'A drum pattern only', 'A mixing technique'], c: 1, why: 'Motifs are the building blocks that melodies develop.' },
        { q: 'Where should the highest notes of a song usually be?', a: ['The intro', 'The verse', 'The chorus', 'The outro'], c: 2, why: 'Peak pitch in the chorus gives the biggest emotional lift.' },
        { q: 'After a big melodic leap, what usually sounds natural?', a: ['Another leap the same way', 'A step in the opposite direction', 'Silence for 8 bars', 'A key change'], c: 1, why: 'Recovering with stepwise motion in the other direction balances the line.' }
      ],
      tools: ['piano']
    },
    {
      id: 't-bass',
      title: 'Basslines and Low-End Writing',
      minutes: 45,
      summary: 'Root movement, rhythmic locking with the kick, walking bass, octaves, glides and 808 lines.',
      objectives: ['Write basslines that support harmony and groove', 'Lock bass rhythm with the kick', 'Write 808 patterns with slides'],
      body: `
## The bass has two jobs
1. **Harmony**: the bass note tells the ear what chord it is hearing.
2. **Groove**: the bass locks with the kick drum to create the rhythm section.

## Bassline types
- **Root notes**: play the root of each chord. Simple and powerful (rock, EDM).
- **Root-fifth**: alternate root and 5th (country, Latin, reggae).
- **Octave bass**: jump between root and octave (disco, funk, Italo).
- **Walking bass**: a note on every beat moving stepwise towards the next chord's root (jazz, swing, some lo-fi).
- **Syncopated / riff bass**: a melodic, rhythmic hook (funk, house, Afrobeats).
- **Pedal bass**: one note held while chords change above (tension, film, trance).
- **Offbeat bass**: notes between kicks (trance, psytrance, some house).
- **808 lines**: long, tuned sub notes with slides (trap, drill).

## Locking with the kick
- In many genres the bass plays **with** the kick (same rhythm) for punch.
- In others it plays **between** kicks (offbeat) so they never fight.
- If the kick and bass overlap and both have strong low end, they mask each other. Solve this in the writing first, then with sidechain and EQ in mixing.

## Passing and approach notes
Lead into the next chord's root with a note a semitone or tone away (chromatic approach). It creates forward motion: e.g. bass plays G, then G# just before A.

## 808 writing
- Tune the 808 to the key. Its pitch is audible, so wrong notes are obvious.
- Use **glide / portamento** (slides) between notes, usually up or down an octave or to the next note, on the last 16th before a new note.
- Long notes give a big, sustained low end; short notes leave room for a punchy kick.
- Classic trap: 808 follows the kick rhythm, with slides at phrase endings.
- UK drill: 808s slide frequently and in unusual intervals, creating a melodic, gliding bassline.

## Register
Keep bass mostly **between E1 (41 Hz) and E3 (165 Hz)**. Very low notes (below about 40 Hz) are inaudible on most systems; very high bass notes compete with chords. Keep the bass **mono** (one channel, centred).
`,
      steps: [
        'Loop a progression. Write a root-note bassline in whole notes.',
        'Change it to match the rhythm of your kick drum.',
        'Write an octave bassline (root low, octave high on offbeats) for a disco feel.',
        'Write a walking bassline with chromatic approach notes into each new chord.',
        'Load the "Trap" pattern in the Drum Machine and listen to how the 808 row follows the kick.',
        'In your DAW, write an 808 line with 2 glides, tuned to the key of your chords.'
      ],
      tips: ['Mute the chords and listen to bass and drums alone. They should groove by themselves.', 'Low notes need more space; leave gaps in fast basslines.'],
      mistakes: ['808 in the wrong key.', 'Bass notes too low to hear on phone speakers with no upper harmonics.', 'Bass and kick both hitting long, loud low notes at the same time.'],
      assignment: {
        title: 'Low End Lab',
        brief: 'Write four bassline styles over the same chords.',
        deliverables: ['Root-note, octave, walking and syncopated basslines over one progression', 'One tuned 808 pattern with slides', 'A short note on which bassline best fits which genre']
      },
      quiz: [
        { q: 'What are the two main jobs of the bass?', a: ['Melody and lyrics', 'Harmony and groove', 'Reverb and delay', 'Stereo width and air'], c: 1, why: 'Bass defines the chord and locks rhythm with the kick.' },
        { q: 'What is a chromatic approach note?', a: ['A note a semitone away leading into a target note', 'A random note', 'A drum fill', 'A chord inversion'], c: 0, why: 'It creates pull into the next chord root.' },
        { q: 'Why must an 808 be tuned to the key?', a: ['It is a drum, so it does not matter', 'Its pitch is clearly audible and wrong notes clash', 'For louder volume', 'For stereo width'], c: 1, why: 'An 808 is a pitched bass instrument.' }
      ],
      tools: ['drums', 'piano']
    },
    {
      id: 't-songwriting',
      title: 'Songwriting and Lyrics',
      minutes: 60,
      summary: 'Song forms, concepts, rhyme schemes, prosody, hooks and writing with artists.',
      objectives: ['Structure a song with clear sections', 'Write lyrics with strong imagery, rhyme and prosody', 'Run a co-writing session professionally'],
      body: `
## Song sections
| Section | Job |
|---|---|
| Intro | Set the mood, often 4–8 bars |
| Verse | Tell the story; lyrics change each time |
| Pre-chorus | Build tension into the chorus |
| Chorus / Hook | The main message and the most memorable part; repeats |
| Post-chorus | An extra hook after the chorus (often a vocal chop or chant) |
| Bridge | Contrast: new chords, new perspective, before the final chorus |
| Drop | In EDM, the instrumental payoff (replaces the chorus) |
| Outro | Close the song |

Common pop form: **Intro – Verse – Pre – Chorus – Verse – Pre – Chorus – Bridge – Chorus – Outro**.
Common hip-hop form: **Intro – Hook (8 bars) – Verse (16 bars) – Hook – Verse – Hook – Outro**.

## Start with a concept and a title
Write the **title** first: a short phrase that sums up the song. Then make the chorus deliver the title. Strong titles are specific and emotional.

## Show, don't tell
"I'm sad" is telling. "Your hoodie's still on the chair" is showing. Concrete images make listeners feel instead of being informed.

## Rhyme
- **Perfect rhyme**: love / glove.
- **Slant (near) rhyme**: home / alone. Modern lyrics use these constantly; they sound natural.
- **Internal rhyme**: rhymes inside a line.
- **Multisyllabic rhyme**: matching several syllables (core to rap).
- **Schemes**: AABB (couplets), ABAB (alternating), ABCB (only lines 2 and 4 rhyme).

## Prosody
Prosody is how well the words fit the music:
- Stressed syllables land on strong beats ("to-MOR-row", not "TO-mor-row").
- Happy words on bright melodies, sad words on falling melodies.
- Long notes on open vowels (ah, oh, ay) are easier to sing.
- Unstable melodies (ending away from the tonic) suit unresolved lyrics.

## Point of view and tense
Pick one per section and stay consistent: first person (I), second person (you), third person (they). Changing perspective in the bridge is a powerful device.

## Rap writing basics
- Count bars: a standard verse is 16 bars; a hook is often 8.
- Vary flow: switch rhythmic patterns (straight 16ths, triplets, pauses).
- Punchlines often land at the end of 4-bar phrases.

## Writing with artists
- Prepare beats or chord loops in advance.
- Ask about the story they want to tell.
- Record every idea (voice memos).
- Agree the **songwriting splits** on a **split sheet** at the end of the session, before anyone leaves (Semester 9 covers this).
`,
      steps: [
        'Choose a title phrase of 2–5 words.',
        'Write 10 concrete images related to the title.',
        'Write a 4-line chorus that includes the title at the start or end.',
        'Write verse 1 (8 lines) using at least 3 of your images.',
        'Speak the lyrics out loud and mark stressed syllables. Fit them to a melody so stresses fall on strong beats.',
        'Write a pre-chorus that rises in pitch toward the chorus.',
        'Record a rough demo with your voice (it is fine to just speak or hum).'
      ],
      tips: ['Write every day, even 4 lines. Keep a notes file of phrases you overhear.', 'Read lyrics of songs you love without the music to study their structure.'],
      mistakes: ['Generic clichés with no specific detail.', 'Forcing perfect rhymes that make lines awkward.', 'Forgetting to record the idea while it is fresh.'],
      assignment: {
        title: 'First Song Lyric',
        brief: 'Write a complete lyric with structure, rhyme and prosody.',
        deliverables: ['A full lyric: 2 verses, pre-chorus, chorus, bridge', 'Stressed syllables marked in the chorus', 'A rough vocal or hummed demo over chords', 'A blank split sheet template saved (find one in Semester 9 or online)']
      },
      quiz: [
        { q: 'What is prosody?', a: ['The number of verses', 'How well lyrics fit the music: stress, emotion and vowels', 'A type of rhyme', 'A recording technique'], c: 1, why: 'Good prosody makes words and music feel inseparable.' },
        { q: 'How long is a standard rap verse?', a: ['4 bars', '8 bars', '16 bars', '64 bars'], c: 2, why: '16 bars is the traditional verse length; hooks are often 8.' },
        { q: 'When should split sheets be signed?', a: ['After release', 'At the end of the writing session', 'Never', 'When the song earns money'], c: 1, why: 'Agreeing splits immediately avoids disputes later.' }
      ]
    },
    {
      id: 't-ear',
      title: 'Ear Training and Transcription',
      minutes: 45,
      summary: 'Recognise intervals and chord qualities, and transcribe songs: key, bass, chords, melody and drums.',
      objectives: ['Identify intervals using reference songs', 'Identify chord qualities by ear', 'Transcribe a song into your DAW'],
      body: `
## Why ear training matters
A producer with a trained ear works faster: you hear a melody and play it, hear a chord and name it, hear a mix problem and fix it. Ear training is a daily 10-minute habit, like a musician's scales.

## Interval reference songs
Link each interval to the opening of a song you know. Commonly used references:

| Interval | Ascending reference |
|---|---|
| Minor 2nd | "Jaws" theme |
| Major 2nd | "Happy Birthday" (on "birth-") |
| Minor 3rd | "Greensleeves" opening |
| Major 3rd | "When the Saints Go Marching In" |
| Perfect 4th | "Here Comes the Bride" |
| Tritone | "The Simpsons" theme |
| Perfect 5th | "Star Wars" main theme |
| Minor 6th | "Where Do I Begin" (Love Story theme) |
| Major 6th | "My Bonnie Lies Over the Ocean" |
| Minor 7th | "Somewhere" from West Side Story |
| Octave | "Somewhere Over the Rainbow" |

Pick references you actually know. Songs from your own culture work just as well.

## Chord qualities
- **Major**: bright, stable.
- **Minor**: dark, soft.
- **Diminished**: tense, squeezed.
- **Augmented**: floating, unresolved.
- **Major 7**: dreamy, soft.
- **Minor 7**: smooth, mellow.
- **Dominant 7**: bluesy, wants to move.
- **Sus4**: open, waiting to resolve.

## The transcription method
1. **Tempo**: tap the BPM. Set your DAW to it and line up the song on bar 1.
2. **Key**: find the tonic (Lesson 3).
3. **Bassline**: loop 2 bars and find each bass note on the keyboard. Low notes are easier an octave up.
4. **Chords**: for each bass note, try the diatonic chord built on it. Listen for major or minor colour.
5. **Melody**: sing a phrase slowly, find the first note, then each interval.
6. **Drums**: program kick, snare, hats separately while looping one bar. Copy accent and swing.
7. **Compare**: play your version against the original, switching quickly.

Slow-down tools (most DAWs can time-stretch audio, and many players have 0.5× speed) help with fast passages.
`,
      steps: [
        'Do 10 rounds of Ear Trainer → Intervals.',
        'Do 10 rounds of Ear Trainer → Chords.',
        'Write your personal interval reference song list in your journal.',
        'Pick a simple song. Tap its tempo and set your DAW to match.',
        'Transcribe the bassline for one section.',
        'Transcribe the chords for that section.',
        'Transcribe the main vocal melody or hook.',
        'Program the drum pattern and compare.'
      ],
      tips: ['Sing intervals as well as hearing them; singing builds internal pitch.', 'Start transcribing songs with simple harmony (pop, folk, house), then move to jazz and neo-soul.'],
      mistakes: ['Giving up after one session. Ear training improves over weeks.', 'Transcribing everything at once instead of layer by layer.'],
      assignment: {
        title: 'Transcription Challenge',
        brief: 'Recreate a section of a real song from your ears alone.',
        deliverables: ['Interval score of 80%+ on Easy (Ear Trainer)', 'Chord quality score of 70%+ on Easy', 'A full transcription of one song section: drums, bass, chords and melody in your DAW', 'Your personal interval reference list']
      },
      quiz: [
        { q: 'What is the first step of transcribing a song?', a: ['Mix it', 'Find the tempo and align the grid', 'Write lyrics', 'Find the drums'], c: 1, why: 'A matching grid makes every other layer easier.' },
        { q: 'Which chord quality sounds "bluesy and wants to move"?', a: ['Major 7', 'Dominant 7', 'Minor', 'Sus2'], c: 1, why: 'The dominant 7 contains a tritone that pulls toward resolution.' },
        { q: 'Low bass notes are easier to identify by...', a: ['Turning the volume up', 'Transposing your test note or the audio an octave up', 'Adding reverb', 'Ignoring them'], c: 1, why: 'Our ears resolve pitch more easily in the mid-range.' }
      ],
      tools: ['ear']
    },
    {
      id: 't-project',
      title: 'Semester Project: Write a Complete Song',
      minutes: 480,
      project: true,
      summary: 'Write a full song sketch: progression, melody, bassline, lyrics and structure, in two contrasting moods.',
      objectives: ['Combine all theory skills in one piece', 'Control mood with key, mode and progression', 'Produce a demo ready for production'],
      body: `
## The brief
Write a song from scratch with:
- A **chord progression** using at least one 7th chord and one borrowed chord or secondary dominant.
- A **chorus melody** with a clear hook and a **verse melody** in a lower range.
- A **bassline** that locks with a simple drum beat.
- **Lyrics** with a title, two verses, chorus and bridge.
- A **key change or mode change** for the bridge or final chorus.

Then make a **second version** of the chorus in a contrasting mood (e.g. major → Phrygian, or a ballad → uptempo).

## Checklist
- Stressed syllables fall on strong beats.
- Highest melody notes are in the chorus.
- Something changes every 8 bars.
- The song works with just piano (or guitar) and voice.
`,
      steps: [
        'Choose concept, title, key and tempo.',
        'Write the chorus progression and melody.',
        'Write verse chords and melody.',
        'Write lyrics for chorus, verse 1, verse 2 and bridge.',
        'Write the bassline and a simple drum beat.',
        'Add the key or mode change.',
        'Record a demo (voice + keys).',
        'Write the contrasting-mood version of the chorus.'
      ],
      assignment: {
        title: 'Song #1 Demo',
        brief: 'A demo you could hand to a producer or take into Semester 5 to fully produce.',
        deliverables: ['MIDI project with chords, melody, bass and drums', 'Full lyric sheet', 'A recorded demo', 'Contrasting-mood chorus version', 'Roman numeral chart of the song']
      },
      quiz: [
        { q: 'Which is required in this project?', a: ['A borrowed chord or secondary dominant', 'An orchestra', 'Vocal tuning', 'A mastered file'], c: 0, why: 'The project tests advanced harmony skills.' },
        { q: 'A good test of songwriting is whether the song works with...', a: ['Only drums', 'Just one instrument and voice', 'Heavy reverb', 'A loud master'], c: 1, why: 'A strong song stands without production.' }
      ]
    }
  ]
});
