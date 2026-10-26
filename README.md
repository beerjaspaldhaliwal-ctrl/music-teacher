# Hip-Hop Academy

A full hip-hop production school that runs in your browser. It goes from your first beat to industry-ready records in every major hip-hop style, then on to recording rappers and singers, mixing and mastering to release standard, selling beats and placements, and opening your own hip-hop studio.

No install, no account and no build step. Open `index.html` and start.

## What's inside

**15 semesters plus electives: 269 lessons, 20 hip-hop style masterclasses, 48 step-by-step FL Studio builds and 248 playable beats.** Every lesson has:

- **Theory** written for producers, with tables and reference charts
- **Watch & learn**: hand-picked YouTube searches for that topic, which open recent tutorials and breakdowns
- **A step-by-step guide** you tick off as you work in your DAW
- **Pro tips and common mistakes**
- **A practical assignment** with deliverables and a notes box
- **A quiz** (70% to pass)
- **Demo beats** that open in the Beat Lab, where many lessons have one

### Built for FL Studio

Every practical step is taught in **FL Studio (All Plugins Edition)** with stock plugins only:

- **Year 1 FL Studio lessons:** setup and template, the plugin map, chords and melodies in the Piano Roll, drums and hi-hat rolls, 808s (tuning, glides, design), recording and tuning vocals, and the Mixer.
- **A "Build It in FL Studio" lesson for every genre** (all 20 hip-hop styles and all 28 electives). Each gives the project setup, which plugin to load for each sound, the exact chords, melody, drum pattern and 808/bass notes in FL note names (middle C = C5) with Bar.Beat.Step positions, how to make the glides, mixer chains, a bar-by-bar Playlist arrangement, export settings, and the genre rules for writing your own progressions, melodies and 808s.
- You can hear each build first in the Beat Lab (*Chords + melody* and *Full loop*), then make it yourself.

### Year 1: the producer's foundation (hip-hop focused)

| # | Semester | Highlights |
|---|---|---|
| 1 | Foundations & Hip-Hop Studio Setup | Hip-hop history, gear on any budget, DAWs, sound and digital audio, your first beat in 7 days |
| 2 | Music Theory, Songwriting & Rap Structure | Scales, chords, minor-key loops, melody, flow, bars and song structure for rap |
| 3 | Drums, Groove & MPC Workflow | Drum sounds, swing and ghost notes, the MPC/SP workflow, layering and fills |
| 4 | Sound Design, Sampling & 808s | Synthesis, digging for samples, chopping, sampling law, 808 design and tuning |
| 5 | Recording Rappers & Singers, Arrangement & Vocal Production | Mics and booths, running vocal sessions, punch-ins, ad-libs, tuning and stacks, arrangement |
| 6 | Mixing Hip-Hop | Workflow, EQ, compression, kick and 808 together, rap and sung vocal chains, automation, translation |
| 7 | Mastering Hip-Hop | Loudness and streaming targets, the mastering chain, deliverables |

### Year 2: every hip-hop style in depth

Each style is a masterclass of 4 parts or more: **1** sound, history and culture, **2** drums and groove, **3** melodies, samples and low end, **4** arrangement, vocals, mixing and selling, and a final **Build It in FL Studio** part. Each part comes with demo beats, a practical, a quiz and video searches.

| # | Semester | Styles |
|---|---|---|
| 8 | Hip-Hop Roots: Old School to the Golden Era | Old school & electro, boom bap, jazz rap & the Dilla feel, soul sampling & chipmunk soul |
| 9 | Regional Sounds: West Coast & the South | G-funk, Bay Area hyphy & LA ratchet, Memphis / crunk / Miami bass, Houston screw / Texas soul / New Orleans bounce |
| 10 | The Trap Era | A 9-part full trap production course (melody loop → drums → hi-hats → 808 → arrangement → mix → master → selling), then melodic trap & emo rap, plugg & pluggnb, rage, phonk |
| 11 | Drill & Global Hip-Hop | Drill (Chicago, UK, Brooklyn, sample drill), UK grime & UK rap, desi hip-hop & Punjabi drill, Latin trap, Jersey club |
| 12 | Commercial Hip-Hop: R&B, Pop-Rap & Placements | Hip-hop soul & R&B trap, pop-rap & radio hip-hop, artist sessions, landing placements, sync for film and TV, an artist EP project |

### Year 3: business, studio and graduation

| # | Semester | Highlights |
|---|---|---|
| 13 | The Hip-Hop Business | Copyright, splits and royalties, beat leasing and exclusives, client work, releasing, marketing, income streams |
| 14 | Opening & Running Your Hip-Hop Studio | Business plan, acoustics, pro gear, pricing sessions, running sessions with artists, artist development, scaling |
| 15 | Graduation: Master Hip-Hop Producer | Produce an EP, build a portfolio, launch your business, the Master Producer rubric |
| EL | Electives: Genres Beyond Hip-Hop | Optional: soul, funk, jazz, Afrobeats, amapiano, reggaeton, house, bhangra, cinematic and more, the music hip-hop samples and fuses with |

### Practice Studio

All sound is synthesised with the Web Audio API, so it works offline.

- **Beat Lab**: a 1-, 2- or 4-bar step sequencer (kick, snare, clap, hats, perc, 808) with swing and ghost notes, plus three melodic layers (melody, chords/counter-melody, 808/bass) shown on a piano roll. It has 19 instrument sounds (bells, choir, flute, strings, e-piano, tumbi, harmonium and more), 6 bass sounds (gliding 808, sub, Moog, Reese and others) and 248 presets from the style masterclasses, FL builds and lessons. Note names follow FL Studio. You can save beats and copy any pattern as text to rebuild in your DAW.
- **Synth Lab**: a subtractive synth you can play with mouse, touch or computer keyboard
- **Theory Explorer**: scales, modes and thaats, diatonic chords and playable progressions
- **Ear Trainer**: frequency, interval and chord-quality training
- **Metronome & Tap Tempo**
- **Calculators**: delay/reverb times, 808 tuning chart, earnings planner, studio rates and loudness targets

**Progress and motivation:** XP and ranks (Rookie → Master Producer), semester certificates, a graduation diploma, a practice log with streaks and a heatmap, a 24-month roadmap, a weekly routine and 30 daily hip-hop drills.

**Reference:** a 130+ term glossary and a library of free tools, hip-hop research sites and video channels, rights organisations, books and communities.

## Running it

- **Locally:** open `index.html` in any modern browser. (Or serve the folder with `python3 -m http.server` and visit `http://localhost:8000`.)
- **GitHub Pages:** enable Pages for this repository (Settings → Pages → deploy from branch, root folder) and open the published URL on your phone or computer.

Progress is saved in your browser (`localStorage`). Use **Profile → Backup and restore** to download a backup and restore it on another device.

## Project structure

```
index.html                 App shell
css/styles.css             Design tokens (light and dark) and all styles
js/markdown.js             Small Markdown renderer for lesson content
js/store.js                Progress, XP, ranks, streaks, backups
js/tools.js                Practice Studio tools, including the Beat Lab (Web Audio)
js/app.js                  Router and all views
js/sync.js                 Optional cloud sync when hosted as a claude.ai artifact
js/data/s01-*.js … s11-*   Core semesters (s08 is the electives)
js/data/library.js         Glossary, resources and general reference
js/data/hh-engine.js       Builds the 4-part masterclass for each hip-hop style
js/data/hh-s08-*.js …      One file per hip-hop style semester (8–12)
js/data/hh-core.js         Hip-hop core lessons, renumbering, roadmap and drills
js/data/fl-core.js         FL Studio lessons for Year 1
js/data/fl-engine.js       Builds the "Build It in FL Studio" lesson from a spec
js/data/fl-hh-*.js         FL builds for the hip-hop styles
js/data/fl-el-*.js         FL builds for the elective genres
```

## Adding or editing lessons

Each core semester file pushes an object onto `window.ACADEMY.semesters`. A lesson looks like:

```js
{
  id: 'unique-id',
  title: 'Lesson title',
  minutes: 45,
  summary: 'One sentence.',
  objectives: ['...'],
  body: `## Markdown content`,
  steps: ['Step one', 'Step two'],
  tips: ['...'],
  mistakes: ['...'],
  assignment: { title: '...', brief: '...', deliverables: ['...'], stretch: '...' },
  quiz: [{ q: 'Question?', a: ['A', 'B', 'C'], c: 1, why: 'Explanation' }],
  watch: [['Label shown in the lesson', 'youtube search query']],
  tools: ['drums', 'synth', 'piano', 'ear', 'metronome', 'calc'],
  beats: [{ name: 'Groove', bpm: 90, swing: 58, kick: 'x......x..x.....', snare: '....x.......x...' }]
}
```

Hip-hop style semesters use `A.hhSemester({...})` with a list of style specs (history, drums, melody, bass, arrangement, mix, selling notes, quiz questions and a demo beat). `hh-engine.js` turns each spec into its 4 lessons.

FL Studio builds use `A.flBuild({ id, title, bpm, key, scale, sounds, chords, melody, drums, bass, mixer, arrangement, vocals, write, quiz })`, where `id` is a hip-hop style id or `g-<genre>` for an elective. Notes are written as `"step:note:length"` (16th steps from 0, standard note names with middle C = C4, add `g` to the length for a glide); the lesson shows them in FL names. `fl-engine.js` turns the spec into the lesson and two Beat Lab presets.

### Beat format

Drum rows are 16 characters (1 bar), 32 (2 bars) or 64 (4 bars): `x` = hit, `o` = ghost note, `.` = rest. The rows are `kick`, `snare`, `clap`, `chh`, `ohh`, `perc` and `sub`.

Melodic layers are `keys` (melody), `keys2` (chords or counter-melody) and `bass`. Each has an instrument and a list of notes as `[step, midiNote, lengthInSteps, velocity?, glide?]`:

```js
{
  name: 'Trap (full demo)', bpm: 140, swing: 50, bars: 2,
  kick: 'x.....x...x.....x.....x.x.......',
  clap: '........x...............x.......',
  keys:  { inst: 'bell',  notes: [[0, 76, 2], [2, 72, 2], [4, 69, 2]] },
  keys2: { inst: 'choir', notes: [[0, 57, 16], [0, 60, 16], [0, 64, 16]] },
  bass:  { inst: '808',   notes: [[0, 33, 6], [14, 45, 2, 0.9, 1]] }
}
```

## A note on accuracy

The videos are YouTube search links rather than embedded videos, so you always get current tutorials. Pick one made for your DAW. The demo beats use synthesised sounds to show the patterns, not to sound like finished records, and some regional patterns are simplified. Business, legal and platform details (royalty rules, loudness targets, prices and fees) change over time and differ by country. Check current terms with each organisation, and use a qualified music lawyer and accountant for contracts and taxes.
