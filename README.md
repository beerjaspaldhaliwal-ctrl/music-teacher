# Producer Academy

A complete music production school that runs in your browser. It takes you from your first beat to producing in 30+ genres, mixing and mastering to a release standard, and running a paid studio business.

No install, no account, no build step. Open `index.html` and start.

## What's inside

**11 semesters, 117 lessons.** Every lesson has:

- **Theory** written for producers, with tables and reference charts
- **A step-by-step guide** you tick off as you work in your DAW
- **Pro tips and common mistakes**
- **A practical assignment** with deliverables and a notes box
- **A quiz** (70% to pass)

| # | Semester | Highlights |
|---|---|---|
| 1 | Foundations & Studio Setup | Gear on any budget, DAWs, the science of sound, digital audio, room setup, your first track in 7 days |
| 2 | Music Theory & Songwriting | Intervals, rhythm, scales, chords, progressions, modes, Indian thaats, melody, basslines, lyrics, ear training |
| 3 | Beats, Rhythm & Drum Programming | Drum sounds, core grooves, swing and ghost notes, layering, fills, clave and tresillo |
| 4 | Sound Design, Synthesis & Sampling | Oscillators, filters, envelopes, LFOs, a sound recipe book, synthesis types, sampling law, 808s, FX |
| 5 | Recording, Arrangement & Vocal Production | Mics, vocal sessions, instruments, realistic MIDI, arrangement, build-ups and drops, tuning and stacks |
| 6 | Mixing | Workflow, EQ, compression, reverb and delay, saturation, stereo, low end, vocals, automation, translation |
| 7 | Mastering | LUFS and streaming targets, the mastering chain, ISRC/UPC and deliverables, mastering for clients |
| 8 | Genre Studios | 34 genres (trap, drill, house, techno, DnB, Afrobeats, amapiano, reggaeton, bhangra, Bollywood, K-pop, metal, jazz, film score…) each with a loadable drum pattern |
| 9 | Music Business & Career | Copyright, royalties and PROs, selling beats, client work, releasing, marketing, sync, 20+ income streams, money and taxes |
| 10 | Opening & Running Your Studio | Business plan, soundproofing and acoustics, pro gear, pricing, sessions, marketing, scaling |
| 11 | Graduation | Release an EP, build a portfolio, launch your business, the Master Producer rubric |

**Practice Studio** (all sound is synthesised with the Web Audio API):

- **Drum Machine**: 16-step sequencer with swing, ghost notes, a tuned 808 and 40+ patterns from the lessons and genre studios
- **Synth Lab**: subtractive synth (waveform, detune, filter, envelopes, LFO) playable with mouse, touch or computer keyboard
- **Theory Explorer**: scales, modes and thaats on a keyboard, diatonic chords and playable progressions
- **Ear Trainer**: frequency (EQ), interval and chord-quality training with saved scores
- **Metronome & Tap Tempo**
- **Calculators**: delay/reverb times, 808 tuning chart, earnings planner, studio rate calculator, loudness targets

**Progress and motivation:** XP and ranks (Rookie → Master Producer), semester certificates, a graduation diploma, a practice log with streaks and a 12-week heatmap, an 18-month roadmap and a daily drill.

**Reference:** a 100+ term glossary and a library of free tools, practice multitracks, rights organisations, books and communities.

## Running it

- **Locally:** open `index.html` in any modern browser. (Or serve the folder: `python3 -m http.server` and visit `http://localhost:8000`.)
- **GitHub Pages:** enable Pages for this repository (Settings → Pages → deploy from branch, root folder) and open the published URL on your phone or computer.

Progress is saved in your browser (`localStorage`). Use **Profile → Backup and restore** to copy or download a backup and restore it on another device.

## Project structure

```
index.html            App shell
css/styles.css        Design tokens (light and dark) and all styles
js/markdown.js        Small Markdown renderer for lesson content
js/store.js           Progress, XP, ranks, streaks, backups
js/tools.js           Practice Studio tools (Web Audio)
js/app.js             Router and all views
js/data/s01-*.js …    One file per semester of curriculum
js/data/library.js    Glossary, resources, roadmap, weekly routine, daily drills
```

## Adding or editing lessons

Each semester file pushes an object onto `window.ACADEMY.semesters`. A lesson looks like:

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
  tools: ['drums', 'synth', 'piano', 'ear', 'metronome', 'calc'],
  beats: [{ name: 'Groove', bpm: 90, swing: 58, kick: 'x......x..x.....', snare: '....x.......x...' }]
}
```

Drum rows are 16 characters: `x` = hit, `o` = ghost note, `.` = rest. Available rows: `kick`, `snare`, `clap`, `chh`, `ohh`, `perc`, `sub`.

## A note on accuracy

Business, legal and platform details (royalty rules, streaming normalisation levels, prices and fees) change over time and differ by country. The lessons flag these as approximate. Check current terms with each organisation, and use a qualified music lawyer and accountant for contracts and taxes.
