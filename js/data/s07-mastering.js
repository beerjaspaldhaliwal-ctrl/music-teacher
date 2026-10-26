(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's7',
  no: 7,
  title: 'Mastering',
  tagline: 'Loudness, the mastering chain, release deliverables, and mastering for clients.',
  weeks: 3,
  outcomes: [
    'Explain LUFS, true peak and streaming normalisation',
    'Build and use a transparent mastering chain',
    'Master an EP with consistent loudness and tone',
    'Prepare release-ready files, codes and metadata',
    'Offer mastering as a paid service'
  ],
  lessons: [
    {
      id: 'mas-loudness',
      title: 'What Mastering Is and How Loudness Works',
      minutes: 50,
      summary: 'The job of mastering, LUFS and true peak, streaming normalisation and the loudness war.',
      objectives: ['Explain what mastering does and does not do', 'Measure loudness in LUFS and true peak', 'Choose a sensible loudness target'],
      body: `
## The job of mastering
Mastering is the final creative and technical stage before release:
- **Tonal balance**: make the song sound balanced on all systems.
- **Loudness and dynamics**: appropriate level for the genre and platforms.
- **Consistency**: songs on an EP or album feel like one body of work.
- **Translation**: final check on many systems.
- **Delivery**: correct formats, codes and metadata.

Mastering **cannot fix a bad mix**. If the vocal is too quiet or the kick is lost, fix the mix. Mastering moves are small: typically 0.5–2 dB of EQ and a few dB of compression and limiting.

## Measuring loudness
- **Peak level (dBFS)**: the highest sample value.
- **True peak (dBTP)**: estimates peaks *between* samples that can clip after conversion or encoding to MP3/AAC. Keep true peak at or below **-1 dBTP** for streaming.
- **LUFS** (Loudness Units relative to Full Scale): perceived loudness, weighted to human hearing.
  - **Integrated LUFS**: average over the whole song (the number platforms use).
  - **Short-term LUFS**: over 3 seconds (useful for comparing choruses).
  - **Momentary LUFS**: 400 ms.
- **LRA (loudness range)**: how much loudness varies across the song.
- **PLR / dynamics**: difference between peak and loudness. Very low PLR means heavily limited.

Free meter: **Youlean Loudness Meter** (free version). Most DAWs now include loudness meters.

## Streaming normalisation
Platforms turn loud songs down (and sometimes quiet songs up) to a reference level so listeners do not need to adjust volume. Approximate reference levels (they change over time; check each platform's current guidance):

| Platform | Approx. reference |
|---|---|
| Spotify | -14 LUFS (Loud setting -11, Quiet -19) |
| YouTube | -14 LUFS (turns down only) |
| Apple Music (Sound Check) | -16 LUFS |
| Amazon Music | about -14 LUFS |
| Tidal | -14 LUFS |
| Deezer | -15 LUFS |

Spotify recommends true peaks of **-1 dBTP**, or **-2 dBTP** for masters louder than -14 LUFS, to avoid encoding distortion.

## What this means
- A master at -8 LUFS will be turned down about 6 dB on Spotify. It will not be louder than a -14 LUFS master; it will just have **less dynamic punch**.
- You do **not** have to master to -14 LUFS. Many genres are mastered louder because the **sound** of dense limiting is part of the style.

## Typical genre loudness (integrated, approximate)
| Genre | Common range |
|---|---|
| EDM, dubstep, hard trap | -5 to -8 LUFS |
| Pop, hip-hop, trap | -7 to -10 LUFS |
| Rock, Afrobeats, R&B | -8 to -11 LUFS |
| Lo-fi, indie, acoustic | -10 to -14 LUFS |
| Jazz, classical, ambient | -14 to -20 LUFS |

## The loudness war
From the 1990s to the 2010s, masters got louder and more squashed to stand out on radio and CD. Normalisation has reduced the advantage of extreme loudness. Aim for the loudest level that still sounds **punchy and clean** for your genre.
`,
      steps: [
        'Install a loudness meter (Youlean free version or your DAW\'s meter).',
        'Measure 3 commercial songs from your references: integrated LUFS, true peak and LRA.',
        'Measure one of your own mixes.',
        'Turn the references down to match your mix loudness and compare tone and punch.',
        'Write the target loudness range for your main genre.'
      ],
      tips: ['Measure the loudest chorus with short-term LUFS for genre comparisons.', 'Trust your ears over numbers, but use numbers to check.'],
      mistakes: ['Squashing a master to -5 LUFS for a quiet acoustic song.', 'Ignoring true peak and getting distortion after encoding.'],
      assignment: {
        title: 'Loudness Lab',
        brief: 'Understand loudness with real measurements.',
        deliverables: ['LUFS, true peak and LRA of 5 commercial songs', 'Measurements of your own mix', 'Your genre target range with reasoning']
      },
      quiz: [
        { q: 'What does integrated LUFS measure?', a: ['The highest peak', 'Average perceived loudness over the whole song', 'Bass level', 'Stereo width'], c: 1, why: 'Integrated loudness is the long-term average.' },
        { q: 'What is the approximate Spotify normalisation reference?', a: ['-6 LUFS', '-14 LUFS', '-23 LUFS', '0 LUFS'], c: 1, why: 'Spotify\'s default normalisation targets around -14 LUFS.' },
        { q: 'Why keep true peak at or below -1 dBTP?', a: ['To make it quieter', 'To avoid inter-sample clipping after encoding', 'It adds bass', 'It is a legal requirement'], c: 1, why: 'Lossy encoding can create peaks above 0 dBFS.' }
      ]
    },
    {
      id: 'mas-chain',
      title: 'The Mastering Chain',
      minutes: 60,
      summary: 'Analysis, corrective and tonal EQ, compression, multiband, saturation, stereo, limiting and dither.',
      objectives: ['Build a mastering chain in a sensible order', 'Make small, effective moves', 'Limit to a target without distortion'],
      body: `
## Before processing: listen and analyse
1. Listen to the whole mix at a moderate level. Write first impressions.
2. Compare with a level-matched reference.
3. Check the spectrum and the stereo image.
4. Decide the target loudness and character.

## A typical chain
1. **Corrective EQ**: remove problems (resonances, sub rumble below 25–30 Hz, harsh build-ups). Often linear-phase.
2. **Tonal EQ**: broad, gentle shelves and bells (±0.5–2 dB) to balance warmth and brightness.
3. **Compression (glue)**: low ratio (1.5:1–2:1), slow attack (10–30 ms or more), auto or medium release, 1–2 dB GR.
4. **Multiband compression** (if needed): control boomy low end, harsh upper mids or sibilance only when they get loud.
5. **Saturation / colour** (optional): tape or tube for density.
6. **Stereo processing** (careful): mono the lows below ~100 Hz; slight side boost in the highs if the mix is narrow.
7. **Limiter**: raise gain until you reach the target loudness. Set the **ceiling at -1 dBTP** (true-peak mode).
8. **Dither**: only when reducing bit depth (e.g. to 16-bit for CD).

## Limiting well
- Push gain gradually and listen for distortion, pumping and lost transients.
- If limiting more than about 4–6 dB causes problems, use **two stages** (a clipper or gentle limiter before the final limiter) or go back to the mix (control peaks on drums).
- Different limiters have different characters (transparent, punchy, aggressive). Try several.

## Mastering tools
- All-in-one suites: **iZotope Ozone** (with AI assistant), Logic's **Mastering Assistant**, and stock mastering chains in most DAWs.
- Popular limiters: **FabFilter Pro-L 2**, Ozone Maximizer, Waves L2, stock limiters.
- Free: **LoudMax** (limiter), **TDR Nova** (dynamic EQ), **TDR Kotelnikov** (compressor), Youlean (meter).
- Online/AI mastering (LANDR, eMastered, BandLab Mastering and others) is quick; compare it with your own master as a learning reference.

## Mid/side in mastering
Treat the centre (vocal, kick, bass) and sides (width, reverbs) separately: e.g. de-ess only the mid, add air only to the sides, tighten the low end in the side channel.

## Gain matching
Every time you compare processed and bypassed, match loudness. Many mastering plugins have auto gain-match. Otherwise "louder" will always win.

## Common problems and fixes
| Problem | Fix |
|---|---|
| Muddy | Gentle cut 200–400 Hz, or multiband on low mids |
| Harsh | Dynamic EQ 2–5 kHz, soften limiter |
| Boomy low end | Multiband compression on lows, EQ cut, mono lows |
| Dull | High shelf +1 dB above 8–10 kHz, exciter |
| Distorting when loud | Lower target, two-stage limiting, fix drum peaks in mix |
| Narrow | Gentle side boost in highs |
| Sibilant | De-esser on mid channel |
`,
      steps: [
        'Import your best mix into a new session with a reference track on a separate track.',
        'Write first impressions after listening to the full mix.',
        'Add corrective EQ: high-pass below 25–30 Hz and fix one problem.',
        'Add tonal EQ with moves no bigger than 2 dB.',
        'Add glue compression with 1–2 dB GR.',
        'Add a limiter with a -1 dBTP ceiling and raise gain to your genre target.',
        'Compare with the reference at matched loudness. Adjust.',
        'Export a 24-bit WAV master.'
      ],
      tips: ['Master on a different day from mixing for fresh ears.', 'If you need a big EQ move, the mix needs fixing instead.'],
      mistakes: ['Big EQ moves on the master.', 'Comparing louder vs quieter.', 'Limiting into obvious distortion.'],
      assignment: {
        title: 'First Master',
        brief: 'Master a song with a transparent chain.',
        deliverables: ['A mastering chain with EQ, compression and limiting', 'Master at your genre target with ≤ -1 dBTP', 'Before/after notes and LUFS readings', 'Comparison with an AI or assistant master (optional)']
      },
      quiz: [
        { q: 'What ceiling should a streaming master limiter use?', a: ['+1 dBTP', '0 dBFS sample peak', 'About -1 dBTP', '-10 dBTP'], c: 2, why: 'A -1 dBTP ceiling avoids inter-sample clipping.' },
        { q: 'When is dither needed?', a: ['Always', 'When reducing bit depth, e.g. 24 to 16-bit', 'Never', 'When adding reverb'], c: 1, why: 'Dither masks quantisation distortion when lowering bit depth.' },
        { q: 'Typical mastering EQ moves are...', a: ['±10 dB', '±0.5–2 dB', 'Only cuts of 20 dB', 'None'], c: 1, why: 'Mastering uses small, broad moves.' }
      ]
    },
    {
      id: 'mas-delivery',
      title: 'Release Deliverables, Codes and Metadata',
      minutes: 45,
      summary: 'File formats, album sequencing, ISRC and UPC, metadata, DDP, vinyl considerations and alternate versions.',
      objectives: ['Deliver correct files to distributors and clients', 'Understand ISRC, UPC and metadata', 'Sequence and balance an EP or album'],
      body: `
## Formats to deliver
| Destination | Format |
|---|---|
| Streaming distributors | WAV, 16 or 24-bit, 44.1 kHz or higher (24-bit preferred where accepted) |
| Apple Digital Masters (formerly Mastered for iTunes) | 24-bit high-resolution WAV from approved mastering workflow |
| CD | 16-bit / 44.1 kHz WAV, or a DDP image for the pressing plant |
| Vinyl | 24-bit WAV, separate master with vinyl considerations |
| Clients and previews | High-quality MP3 (320 kbps) for listening |

## Codes
- **ISRC** (International Standard Recording Code): a unique ID for each **recording** (each version: main, instrumental, remix each get their own). Royalties are tracked by ISRC. Distributors usually issue them for free, or you can register as an ISRC manager through your national agency.
- **UPC/EAN**: barcode for each **release** (single, EP, album). Distributors usually provide it.
- **ISWC**: identifies the **composition**; assigned when the song is registered with a PRO/publisher.

## Metadata
Accurate metadata decides whether you get paid and credited:
- Track title, artist name (spelled identically everywhere), featured artists.
- Songwriters and publishers, producers.
- ISRC, UPC, release date, genre, explicit flag, language.
- Embedded metadata in files where possible.

## Album or EP sequencing
- Open with a strong, representative track.
- Vary tempo, key and energy for flow.
- Make songs feel consistent in loudness and tone; the loudest song sets the ceiling, quieter songs (ballads) can sit 1–3 LU lower and still feel right.
- Decide gaps between songs (or crossfades for continuous albums).

## Vinyl considerations
- Mono the low end; excessive stereo bass can cause the cutting stylus problems.
- Control sibilance and harsh highs.
- Less limiting; vinyl does not benefit from extreme loudness.
- Side length affects level and bass (shorter sides allow louder cuts).

## Versions to master
Main, clean (radio edit), instrumental, a cappella, TV mix, and short edits (30/60 seconds) for sync and social media.

## File naming
Artist_Title_Master_24-48.wav, Artist_Title_Instrumental_Master_24-48.wav.
`,
      steps: [
        'Choose 3 of your songs and decide a sequence for a mini EP.',
        'Master each song and balance loudness across them.',
        'Export streaming masters (24-bit WAV) and a 16-bit dithered CD version of one song.',
        'Export instrumental and clean versions where relevant.',
        'Fill in a metadata sheet for each track (title, writers, producers, ISRC placeholder).',
        'Name all files with the naming convention.'
      ],
      tips: ['Keep a spreadsheet of every release with ISRCs, UPCs, splits and dates.', 'Listen to the whole EP in sequence on headphones and in a car.'],
      mistakes: ['Using the same ISRC for different versions.', 'Spelling the artist name differently across releases.'],
      assignment: {
        title: 'Release Package',
        brief: 'Prepare a release exactly as a distributor needs it.',
        deliverables: ['3 sequenced and loudness-balanced masters', 'Alternate versions where relevant', 'A metadata sheet with all fields', 'Correctly named files in a release folder']
      },
      quiz: [
        { q: 'What does an ISRC identify?', a: ['A release', 'A specific recording', 'A songwriter', 'A label'], c: 1, why: 'ISRCs identify recordings (each version separately).' },
        { q: 'What does a UPC identify?', a: ['A release (product)', 'A composition', 'A producer', 'A mic'], c: 0, why: 'UPCs are barcodes for products like singles and albums.' },
        { q: 'Which is a vinyl mastering consideration?', a: ['Wide stereo bass', 'Mono low end and controlled sibilance', 'Maximum loudness', '8-bit audio'], c: 1, why: 'Vinyl cutting has physical limits for stereo bass and harsh highs.' }
      ]
    },
    {
      id: 'mas-service',
      title: 'Mastering for Clients',
      minutes: 40,
      summary: 'What to ask clients, an efficient mastering session, revisions, pricing and building trust.',
      objectives: ['Run a client mastering job end to end', 'Communicate clearly about loudness and changes', 'Price mastering services'],
      body: `
## Before you start: intake questions
- Genre and 2–3 reference songs.
- Release platforms (streaming only, CD, vinyl).
- Any loudness preference.
- Is it a single or part of an EP/album?
- Are there alternate versions to master?
- Deadline.

## Check the mix first
Listen right away and report problems the mastering stage cannot fix (clipping in the mix file, vocal too quiet, distorted bass). Asking for a mix fix is professional.

## The session
1. Import with references, set up metering.
2. Listen, write notes, choose a target.
3. Process (Lesson 2).
4. Check loudness, true peak and translation.
5. Export the master and alternate versions.
6. Send previews with clear names.

## Revisions
- Include 1–2 revisions in your price.
- Ask for specific notes ("more low end", "less loud").
- Use your saved session to recall settings.

## Pricing (approximate, varies widely by market and experience)
| Level | Per track |
|---|---|
| Beginner building a portfolio | $15–40 |
| Experienced independent | $50–150 |
| Top professional | $150–300+ |

EP and album discounts are common. Stem mastering (mastering from 4–8 stems) is priced higher.

## Trust
- Offer a free test master of one song for first-time clients.
- Show before/after examples on your website.
- Deliver on time.
- Keep loudness choices explained in plain language.
`,
      steps: [
        'Write a client intake form with the questions above.',
        'Ask a friend or community member for a mix to master.',
        'Run the session with the intake form, notes and references.',
        'Deliver the master with a short report on what you changed.',
        'Handle one revision.',
        'Decide your starting mastering price.'
      ],
      tips: ['A short before/after clip on social media is strong marketing for mastering services.', 'Keep records of every client project for future recalls.'],
      mistakes: ['Silently mastering a broken mix instead of reporting the issue.', 'Over-promising loudness on a dynamic mix.'],
      assignment: {
        title: 'Client Master',
        brief: 'Complete a mastering job for someone else.',
        deliverables: ['A client intake form', 'A delivered master for another person\'s song', 'A short mastering report', 'One revision handled', 'Your price list draft']
      },
      quiz: [
        { q: 'If a mix has a clear problem mastering cannot fix, you should...', a: ['Ignore it', 'Tell the client and request a mix fix', 'Add more limiting', 'Refuse the job silently'], c: 1, why: 'Honest communication leads to better results and trust.' },
        { q: 'Which is a useful intake question?', a: ['What is your favourite colour?', 'Which reference songs and platforms?', 'What DAW is installed?', 'How old are your speakers?'], c: 1, why: 'References and platforms define the target.' }
      ]
    },
    {
      id: 'mas-project',
      title: 'Semester Project: Master an EP',
      minutes: 600,
      project: true,
      summary: 'Master three songs as one consistent EP with streaming and CD deliverables.',
      objectives: ['Achieve consistency across a release', 'Deliver professional files and documentation'],
      body: `
## The brief
Take three mixed songs (your Semester 6 mixes are ideal) and master them as an EP.
- Consistent tone and perceived loudness across all three.
- Streaming masters (24-bit WAV, ≤ -1 dBTP).
- A 16-bit/44.1 kHz dithered CD version.
- Instrumental versions.
- Metadata sheet and correct file names.
- A short mastering report per song.

## Final listening test
Play the EP from start to finish on headphones, speakers, phone and car. Nothing should jump out in level or tone between songs.
`,
      steps: ['Sequence the EP', 'Master song 1', 'Master song 2', 'Master song 3', 'Balance loudness and tone across all', 'Export all deliverables', 'Final listening test on 4 systems'],
      assignment: {
        title: 'EP Master',
        brief: 'A complete, release-ready EP master package.',
        deliverables: ['3 streaming masters', '3 CD versions (16-bit dithered)', 'Instrumental masters', 'Metadata sheet', 'Mastering reports', 'Loudness readings for each track']
      },
      quiz: [
        { q: 'What is most important in an EP master?', a: ['Each song as loud as possible', 'Consistency of tone and perceived loudness', 'Different styles per song', 'Heavy stereo widening'], c: 1, why: 'A release should feel like one body of work.' },
        { q: 'CD masters must be...', a: ['24-bit / 96 kHz', '16-bit / 44.1 kHz', 'MP3', '8-bit'], c: 1, why: 'Red Book CD audio is 16-bit / 44.1 kHz.' }
      ]
    }
  ]
});
