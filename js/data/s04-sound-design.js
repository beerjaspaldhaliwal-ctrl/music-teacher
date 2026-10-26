(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's4',
  no: 4,
  title: 'Sound Design, Synthesis & Sampling',
  tagline: 'Design your own sounds from scratch, flip samples legally, and build 808s and FX.',
  weeks: 5,
  outcomes: [
    'Program any synth using oscillators, filters, envelopes and LFOs',
    'Recreate classic sounds: supersaw, reese, pluck, pad, acid, wobble',
    'Understand subtractive, FM, wavetable, additive and granular synthesis',
    'Chop, flip and process samples, and know the law on sampling',
    'Design 808s, bass, risers, impacts and ear candy'
  ],
  lessons: [
    {
      id: 'sd-basics',
      title: 'Synthesis Basics: Oscillators and Waveforms',
      minutes: 45,
      summary: 'Signal flow in a synth, the four classic waveforms, tuning, unison, voices and glide.',
      objectives: ['Explain synth signal flow', 'Choose waveforms by their harmonic content', 'Use tuning, unison, detune and glide'],
      body: `
## Synth signal flow
Almost every synth follows the same path:

**Oscillator (sound source) → Filter (tone) → Amplifier (volume)**, with **envelopes** and **LFOs** modulating them over time.

Learn this once and you can use any synth: Serum, Vital, Massive, Sylenth1, Pigments, or your DAW's stock synth.

## The classic waveforms
| Wave | Harmonics | Sounds like | Used for |
|---|---|---|---|
| Sine | None (pure fundamental) | Pure, round, flute-like | Sub bass, 808s, soft tones |
| Triangle | Odd harmonics, weak | Soft, hollow | Mellow leads, flutes |
| Square / pulse | Odd harmonics, strong | Hollow, woody, retro games | Chiptune, reeds, basses |
| Sawtooth | All harmonics | Bright, buzzy, rich | Leads, pads, basses, strings, brass |
| Noise | All frequencies, random | Hiss | Snares, hats, risers, breath |

Changing a square wave's **pulse width** (the ratio of high to low) changes its tone; modulating it (PWM) gives classic movement.

## Tuning
- **Octave**: jump by 12 semitones.
- **Semitone**: transpose by half steps.
- **Fine / cents**: 100 cents = 1 semitone. Small detunes thicken sounds.

## Multiple oscillators, unison and detune
- Layer two oscillators (e.g. saw + square an octave down) for richness.
- **Unison** stacks several copies of the voice; **detune** spreads their pitch slightly, creating the thick, wide "supersaw".
- More unison voices = thicker but more CPU and potential phase issues in mono.

## Voices, mono and glide
- **Polyphonic**: plays chords.
- **Monophonic**: one note at a time; essential for basses and leads.
- **Legato**: overlapping notes do not retrigger envelopes.
- **Glide / portamento**: pitch slides between notes (808 slides, acid lines, leads).

## Init patch
Every sound designer starts from an **initialised (init) patch**: one saw oscillator, filter open, simple envelope. Designing from init is how you truly learn; presets are for speed later.
`,
      steps: [
        'Open Practice Studio → Synth Lab. Play a note with Sine, Triangle, Square, then Saw.',
        'Set the waveform to Saw and set Detune to 15 cents. Play a chord and hear it thicken.',
        'Open your DAW synth and load or create an init patch.',
        'Make a sub bass: one sine oscillator, mono mode, glide on. Play notes in octave 1.',
        'Make a thick lead: two saws, one detuned +10 cents, unison 4 voices.',
        'Save both patches with clear names.'
      ],
      tips: ['Vital is a powerful free wavetable synth; Surge XT is a free open-source synth. Both are great for learning.', 'Name patches by role and character: "BASS Sub Clean", "LEAD Wide Saw".'],
      mistakes: ['Only scrolling presets without learning what the knobs do.', 'Using huge unison on bass, which ruins mono compatibility and punch.'],
      assignment: {
        title: 'Init Patch Challenge',
        brief: 'Design four basic sounds starting from init.',
        deliverables: ['A sine sub bass with glide', 'A saw lead with unison and detune', 'A square-wave retro lead', 'A noise-based hi-hat or snare', 'All 4 patches saved with descriptive names']
      },
      quiz: [
        { q: 'Which waveform contains all harmonics?', a: ['Sine', 'Square', 'Sawtooth', 'Triangle'], c: 2, why: 'Saw waves contain every harmonic, making them bright and rich.' },
        { q: 'How many cents are in a semitone?', a: ['12', '50', '100', '1200'], c: 2, why: '100 cents = 1 semitone.' },
        { q: 'What does glide (portamento) do?', a: ['Adds reverb', 'Slides pitch between notes', 'Changes the waveform', 'Adds distortion'], c: 1, why: 'Glide creates smooth pitch slides.' }
      ],
      tools: ['synth']
    },
    {
      id: 'sd-filters',
      title: 'Filters and Envelopes',
      minutes: 50,
      summary: 'Low-pass, high-pass, band-pass, resonance, ADSR envelopes, and how they shape plucks, pads and stabs.',
      objectives: ['Use filter types, cutoff, resonance and slope', 'Program ADSR envelopes for amp and filter', 'Design plucks, pads and stabs'],
      body: `
## Filters
A filter removes frequencies.
- **Low-pass (LP)**: removes highs above the cutoff. Makes sounds darker. The most common synth filter.
- **High-pass (HP)**: removes lows below the cutoff. Thins sounds out.
- **Band-pass (BP)**: keeps only a band. Telephone, radio, wah effects.
- **Notch**: removes a narrow band. Phaser-like effects.
- **Comb / formant**: special filters that create metallic or vowel-like tones.

Controls:
- **Cutoff**: where the filter starts working.
- **Resonance (Q)**: boosts frequencies right at the cutoff. High resonance = whistling, squelchy (acid basslines).
- **Slope**: 12 dB/octave is gentle; 24 dB/octave is steep and classic "Moog-style".
- **Key tracking**: cutoff follows the note, so high notes stay bright.
- **Drive**: saturates the filter for grit.

## Envelopes: ADSR
An envelope shapes a parameter over time from the moment a key is pressed.
- **Attack**: time to reach full level.
- **Decay**: time to fall to the sustain level.
- **Sustain**: the level held while the key is down (a level, not a time).
- **Release**: time to fade after the key is released.

The **amp envelope** shapes volume. The **filter envelope** moves the cutoff, controlled by **envelope amount**.

## Envelope recipes
| Sound | Attack | Decay | Sustain | Release | Filter env |
|---|---|---|---|---|---|
| Pluck | 0 ms | 150–400 ms | 0% | 100–300 ms | Strong amount, short decay |
| Pad | 300 ms–2 s | 1 s | 70–100% | 1–3 s | Slow, gentle |
| Stab | 0 ms | 100–200 ms | 0–20% | 50–150 ms | Medium amount, short |
| Lead | 0–20 ms | 300 ms | 70% | 100–300 ms | Light |
| Bass | 0 ms | 200–500 ms | 50–100% | 30–100 ms | Medium |
| Swell | 1–4 s | — | 100% | 1–2 s | Slow opening |

## The secret of a pluck
Low-pass filter mostly closed + a filter envelope with zero attack, short decay and zero sustain. Every note "opens" bright and closes quickly. This is the core of house plucks, future bass plucks, and marimba-like sounds.
`,
      steps: [
        'In Synth Lab, load the "Init Saw" preset. Sweep the Cutoff from high to low while holding a note.',
        'Raise Resonance and sweep again. Hear the squelch.',
        'Set Filter Env Amount high, Filter Decay short, Cutoff low: you have a pluck.',
        'Load "Soft Pad". Lengthen Attack and Release and play slow chords.',
        'In your DAW synth, design a pluck, a pad and a stab from init.',
        'Write a 4-bar chord progression played by each sound.'
      ],
      tips: ['Automate the cutoff over 8 bars for a classic build.', 'Short release on bass keeps the low end tight.'],
      mistakes: ['Leaving the filter fully open on every sound, so the mix becomes harsh.', 'Long releases on fast parts, which smear notes together.'],
      assignment: {
        title: 'Shape Shifter',
        brief: 'Use filters and envelopes to turn one oscillator into many sounds.',
        deliverables: ['A pluck, pad, stab, lead and bass all from one saw oscillator', 'An 8-bar filter sweep automation', 'A short audio demo of all 5 sounds']
      },
      quiz: [
        { q: 'What does a low-pass filter do?', a: ['Removes lows', 'Removes highs above the cutoff', 'Adds bass', 'Adds reverb'], c: 1, why: 'Low-pass lets low frequencies pass and cuts the highs.' },
        { q: 'In ADSR, sustain is...', a: ['A time', 'A level held while the key is down', 'The attack speed', 'A filter type'], c: 1, why: 'Attack, decay and release are times; sustain is a level.' },
        { q: 'Which envelope setting is key to a pluck?', a: ['Long attack', '100% sustain', 'Zero sustain with short decay', 'Very long release'], c: 2, why: 'The sound must die away quickly after the attack.' }
      ],
      tools: ['synth']
    },
    {
      id: 'sd-modulation',
      title: 'LFOs and Modulation',
      minutes: 45,
      summary: 'LFO rate, shape, sync and depth; the modulation matrix; wobbles, vibrato, tremolo and pumping.',
      objectives: ['Route modulation sources to targets', 'Create wobble, vibrato, tremolo and auto-pan', 'Use velocity, mod wheel and macros expressively'],
      body: `
## What modulation is
Modulation means one thing automatically controlling another. A **source** (LFO, envelope, velocity) moves a **target** (cutoff, pitch, volume, pan, wavetable position).

## LFO (Low-Frequency Oscillator)
An oscillator too slow to hear as pitch, used to move parameters rhythmically.
- **Rate**: speed in Hz, or **synced** to tempo (1/4, 1/8, 1/16, dotted, triplet).
- **Shape**: sine (smooth), triangle, saw (ramps), square (on/off), random / sample-and-hold (random steps).
- **Depth / amount**: how far it moves the target.
- **Retrigger**: restart the LFO on every note so each note behaves the same.

## Classic modulation recipes
| Effect | Source → Target | Settings |
|---|---|---|
| Vibrato | LFO → pitch | Sine, 5–6 Hz, small depth |
| Tremolo | LFO → volume | Sine or square, synced |
| Auto-pan | LFO → pan | Sine, slow or synced |
| Wobble bass | LFO → filter cutoff | Synced 1/4, 1/8, 1/8 triplet; automate the rate |
| Pumping (sidechain feel) | LFO shaped like a ramp → volume | Synced 1/4 |
| Movement pad | Slow LFO → wavetable position / cutoff | 0.1–0.5 Hz |
| Random texture | Sample & hold → cutoff | Synced 1/16 |

## Performance modulation
- **Velocity → filter cutoff or volume**: harder playing is brighter and louder, like real instruments.
- **Mod wheel (CC1) → vibrato depth or cutoff**: expressive leads.
- **Aftertouch**: pressing harder after the note adds modulation.
- **Macros**: one knob controlling several parameters at once (great for live automation and builds).

## Modulation in modern synths
Wavetable synths like Serum and Vital let you drag modulation sources onto any knob. Explore by doing: drag an LFO to everything, listen, then remove what you do not need.
`,
      steps: [
        'In Synth Lab, load "Wobble Bass" and play a low note. Change the LFO Rate and Depth.',
        'Set LFO Depth to zero, then slowly raise it to hear the effect appear.',
        'In your DAW synth, create vibrato with an LFO on pitch, controlled by the mod wheel.',
        'Create a wobble bass with a synced LFO on cutoff; automate the LFO rate between 1/4, 1/8 and 1/16 triplets.',
        'Make a pad with slow movement by modulating cutoff with a 0.2 Hz LFO.',
        'Assign velocity to filter cutoff on a keys patch and play softly and hard.'
      ],
      tips: ['Subtle modulation makes static sounds feel alive; listeners feel it more than hear it.', 'Sync LFOs to tempo for rhythmic effects, free-run them for organic movement.'],
      mistakes: ['Modulating everything heavily until the sound becomes chaotic.', 'Forgetting retrigger, so each note sounds different when it should not.'],
      assignment: {
        title: 'Moving Sounds',
        brief: 'Bring sounds to life with modulation.',
        deliverables: ['A wobble bass with rate automation over 8 bars', 'A lead with mod-wheel vibrato', 'An evolving pad with at least 2 modulation routings', 'A keys patch with velocity-to-cutoff']
      },
      quiz: [
        { q: 'What does LFO stand for?', a: ['Low-Frequency Oscillator', 'Linear Filter Output', 'Loud Frequency Overdrive', 'Loop Function Option'], c: 0, why: 'An LFO oscillates slowly to modulate other parameters.' },
        { q: 'A wobble bass is usually an LFO controlling...', a: ['Pitch', 'Filter cutoff', 'Pan', 'Reverb'], c: 1, why: 'Rhythmic cutoff movement creates the "wub".' },
        { q: 'What is a macro?', a: ['A huge kick', 'One control mapped to several parameters', 'A type of filter', 'A preset folder'], c: 1, why: 'Macros let you move many settings with one knob.' }
      ],
      tools: ['synth']
    },
    {
      id: 'sd-recipes',
      title: 'The Sound Recipe Book',
      minutes: 75,
      summary: 'Step-by-step recipes for supersaw, reese, sub, pluck, pad, brass, acid, wobble, bell and riser.',
      objectives: ['Recreate the most-used sounds in modern music', 'Adapt recipes to your genre'],
      body: `
## How to use these recipes
Start from an init patch in any synth. Settings are starting points; adjust by ear.

### 1. Supersaw lead (trance, EDM, future bass)
- Saw oscillator, **unison 7–9 voices**, detune 20–40%, stereo spread wide.
- Optional second saw an octave up.
- Low-pass at about 8–12 kHz, low resonance.
- Amp: attack 0, sustain high, release 200–400 ms.
- Add chorus, reverb (large hall) and delay. Layer with a pluck for attack.

### 2. Reese bass (drum & bass, dubstep, dark trap)
- Two saws, detuned against each other by 10–30 cents (or unison 2 voices).
- Low-pass around 1–2 kHz, slight resonance.
- Slow LFO on cutoff or detune for movement.
- Distortion and a separate clean sine sub underneath.
- Keep the low end mono.

### 3. Sub bass
- Sine (or triangle for a few more harmonics), mono, glide on.
- No unison, no stereo effects.
- Amp: attack 0–5 ms, sustain 100%, release 30–80 ms.
- Light saturation so it is audible on small speakers.

### 4. Pluck
- Saw or square; low-pass cutoff low (300–800 Hz).
- Filter envelope: amount high, attack 0, decay 200–400 ms, sustain 0.
- Amp: decay 300–600 ms, sustain 0.
- Delay (1/8 dotted) and reverb.

### 5. Warm pad
- Two saws detuned, or a soft wavetable.
- Low-pass around 2–4 kHz.
- Amp: attack 0.5–1.5 s, release 1.5–3 s.
- Slow LFO on cutoff; chorus; long reverb.

### 6. Brass stab
- Saws, slight unison.
- Filter envelope with medium attack (30–80 ms) that opens and closes: brass "blooms".
- Short release, a little vibrato.

### 7. Acid bass (TB-303 style)
- Saw or square, **mono with slide**.
- Low-pass 24 dB, cutoff low, **resonance high**.
- Filter envelope with short decay; accent notes hit harder.
- Distortion after the filter. Tweak cutoff and resonance live.

### 8. Wobble / dubstep bass
- Saw or complex wavetable + sub.
- LFO synced to 1/4, 1/8 or triplets on cutoff (and/or wavetable position).
- Heavy distortion, multiband compression (OTT-style).
- Automate LFO rate for rhythm.

### 9. FM bell / electric piano
- Two sine operators. Modulator ratio 2:1 or 3.5:1 for bells (non-integer ratios sound metallic).
- Modulation amount controlled by an envelope that decays quickly (bright attack, mellow tail).

### 10. White-noise riser
- Noise oscillator, band-pass or low-pass filter.
- Automate cutoff upward over 4–8 bars, with rising volume.
- Add reverb and a rising pitch on a layered saw for intensity.

### 11. 808
- Sine with a fast **pitch envelope** (starts a few semitones high and drops within 30–80 ms).
- Long amp decay (or sustain) for length.
- Saturation or distortion for harmonics. Glide for slides. (Full lesson coming next.)
`,
      steps: [
        'Recreate recipes 1–4 in your DAW synth.',
        'Recreate recipes 5–8.',
        'Recreate recipes 9–11.',
        'Play each patch over the same chord progression and bassline.',
        'Choose 3 recipes and change one setting dramatically to create a new variation.',
        'Save all patches into a folder called "My Sound Bank".'
      ],
      tips: ['If a sound is weak, check the oscillator first, then the filter, then effects. Effects cannot fix a bad source.', 'Layer two simple patches instead of making one complicated one.'],
      mistakes: ['Wide stereo bass that disappears in mono.', 'Over-relying on reverb to make sounds "big".'],
      assignment: {
        title: 'Sound Bank Vol. 1',
        brief: 'Build your own library of essential sounds.',
        deliverables: ['All 11 recipes recreated and saved', '3 original variations', 'A 16-bar demo using at least 5 of your patches']
      },
      quiz: [
        { q: 'What creates the "supersaw"?', a: ['A single sine', 'Many detuned unison saw voices', 'A square wave with no filter', 'Bitcrushing'], c: 1, why: 'Detuned unison stacks create the thick supersaw sound.' },
        { q: 'Acid bass needs which filter setting?', a: ['High resonance', 'No filter', 'High-pass only', 'Notch'], c: 0, why: 'Resonance creates the squelchy 303 sound.' },
        { q: 'Non-integer FM ratios typically sound...', a: ['Warm and pure', 'Metallic and bell-like', 'Like noise', 'Silent'], c: 1, why: 'Inharmonic ratios create metallic, bell tones.' }
      ],
      tools: ['synth']
    },
    {
      id: 'sd-types',
      title: 'Synthesis Types: FM, Wavetable, Additive, Granular and More',
      minutes: 45,
      summary: 'The main synthesis methods, what each is good for, and the synths that use them.',
      objectives: ['Explain each synthesis type', 'Choose the right synth for a sound', 'Know free and paid options'],
      body: `
## Synthesis types
| Type | How it works | Good for | Examples |
|---|---|---|---|
| **Subtractive** | Rich waveform, then filter away frequencies | Basses, leads, pads, classic analog sounds | Minimoog, Juno, Diva, TAL-U-NO-LX, most stock synths |
| **FM (frequency modulation)** | One oscillator modulates another's frequency | Bells, electric pianos, metallic bass, growls | Yamaha DX7, Dexed (free), FM8, Operator |
| **Wavetable** | Sweep through a table of different single-cycle waves | Evolving, modern EDM sounds, growls | Serum, Vital (free), Massive, Pigments |
| **Additive** | Build sounds by adding sine harmonics | Organs, precise tones, resynthesis | Harmor, Razor, Kawai K5000 |
| **Granular** | Split audio into tiny grains and rearrange them | Atmospheres, textures, glitchy pads | Portal, Quanta, Granulator II, Pigments |
| **Physical modelling** | Simulate real physics (strings, tubes) | Realistic plucked, struck and blown sounds | Chromaphone, Pianoteq, Ableton Collision |
| **Sample-based / ROMpler** | Play back recorded samples, often with synth controls | Realistic instruments, cinematic | Kontakt, Omnisphere, Spitfire LABS (free) |

## Wavetable in detail
A wavetable is a series of single-cycle waveforms. Moving the **wavetable position** morphs between them. Modulating the position with an LFO or envelope creates animation impossible with a static waveform. You can import any audio to make your own wavetables in Serum and Vital.

## FM in detail
An FM synth uses **operators** (sine oscillators with envelopes). The **modulator** changes the frequency of the **carrier** you hear.
- **Ratio**: integer ratios (1:1, 2:1) give harmonic tones; non-integer ratios (1.41:1, 3.5:1) give metallic, inharmonic tones.
- **Index / amount**: more modulation = brighter, more complex sound.
- An envelope on modulation amount creates evolving brightness (electric piano attack, bass "pluck").

## Free synths worth learning
- **Vital**: wavetable, excellent visual modulation.
- **Surge XT**: hybrid, open source, deep.
- **Dexed**: DX7 FM emulation; loads original DX7 patches.
- **Spitfire LABS**: free sample-based instruments.
- Your DAW's stock synths (Serum-level depth exists in FL Studio's Harmor and Sytrus, Ableton's Wavetable and Operator, Logic's Alchemy).
`,
      steps: [
        'Install one free wavetable synth (Vital or Surge XT).',
        'Load an init patch and sweep the wavetable position while a note plays.',
        'Map an LFO to wavetable position and listen to the motion.',
        'Install Dexed (or open your DAW\'s FM synth). Set a modulator at ratio 1 and raise its level, then try ratio 3.5.',
        'Try a granular instrument on a recording of your voice.',
        'Create one sound with each synthesis type you have access to.'
      ],
      tips: ['Learn one synth deeply before buying more.', 'Resample: bounce synth audio, then re-sample and process it for new sounds.'],
      mistakes: ['Thinking expensive synths are required. Free ones can make professional sounds.'],
      assignment: {
        title: 'Synthesis Tour',
        brief: 'Design one sound in each synthesis method available to you.',
        deliverables: ['A subtractive, an FM, a wavetable and a granular/sample-based sound', 'A custom wavetable made from imported audio (in Vital or Serum)', 'A short paragraph on which method fits your music best']
      },
      quiz: [
        { q: 'Which synthesis type sweeps through a series of single-cycle waves?', a: ['FM', 'Wavetable', 'Granular', 'Additive'], c: 1, why: 'Wavetable synths morph between waveforms by position.' },
        { q: 'The Yamaha DX7 is famous for which synthesis?', a: ['Subtractive', 'FM', 'Granular', 'Physical modelling'], c: 1, why: 'The DX7 popularised FM synthesis in the 1980s.' },
        { q: 'Granular synthesis works by...', a: ['Filtering a saw wave', 'Splitting audio into tiny grains and rearranging them', 'Adding sine waves', 'Simulating strings'], c: 1, why: 'Grains of audio are reorganised to create textures.' }
      ]
    },
    {
      id: 'sd-sampling',
      title: 'Sampling: Chopping, Flipping and the Law',
      minutes: 60,
      summary: 'Find, chop, flip and process samples, and understand clearance, royalty-free packs and interpolation.',
      objectives: ['Chop samples into playable slices', 'Flip samples creatively', 'Know when and how samples must be cleared'],
      body: `
## What sampling is
Sampling means taking a piece of existing audio and reusing it in a new track. It is the foundation of hip-hop and much electronic music.

## Sources
- **Royalty-free sample packs** (Splice, Loopmasters, Cymatics, your DAW's library): cleared for use, usually with simple licence terms. Read each licence.
- **Your own recordings**: voice, instruments, field recordings, foley (kitchen sounds, doors, keys). 100% yours.
- **Licensed sample platforms** like Tracklib that sell clearances for original recordings.
- **Commercial records**: require clearance if you release the result (see below).

## Chopping
1. Find a section with a great chord, melody or texture (often 1–4 bars).
2. Slice it at **transients** or into equal parts (8 or 16 slices).
3. Map slices to pads or keys (MPC-style, or your DAW's slicer: FL Studio's Fruity Slicer/Slicex, Ableton's Simpler "Slice" mode, Logic's Quick Sampler).
4. Play a new pattern with the slices.

## Flipping techniques
- **Re-pitch**: speed up or slow down (pitch and tempo change together). Pitching up vocal samples creates the "chipmunk soul" sound associated with early Kanye West.
- **Time-stretch**: change tempo without changing pitch (or pitch without tempo).
- **Reverse**: reverse chops for swells and unusual melodies.
- **Filter**: low-pass a sample to make room for drums and bass, or high-pass to remove its original bass.
- **Layer**: add your own chords, bass and drums around chops.
- **Resample**: process heavily (distortion, reverb, granular), bounce, and chop again.
- **Lo-fi treatment**: vinyl crackle, bit reduction, tape wobble.

## The law on sampling (read carefully)
A recording contains **two copyrights**: the **master** (the sound recording, usually owned by a label) and the **composition** (the notes and lyrics, owned by songwriters/publishers).

- Using an actual piece of someone else's recording requires clearance of **both** the master and the composition.
- **Interpolation** (re-playing or re-singing the melody yourself) avoids the master but still requires clearance from the **composition** owners.
- There is **no safe length**. The idea that "under 7 seconds is fine" is a myth. Courts have found infringement for very short samples.
- Uncleared samples can lead to songs being removed, lost royalties or lawsuits. Platforms use Content ID-style systems that detect samples.
- For free beats you upload to YouTube or sell as leases, use royalty-free sounds, your own recordings, or cleared samples, or clearly tell buyers the beat contains an uncleared sample (many buyers will not want it).

This is general education, not legal advice. Laws differ by country; consult a music lawyer for real clearance deals.

## Practical clearance steps
1. Identify the song, the master owner (label) and the publishers (use credits databases and PRO repertoire searches).
2. Contact them (or use a clearance service) with how you will use the sample.
3. Negotiate: an upfront fee and/or a percentage of publishing and master royalties.
4. Get it in writing before release.
`,
      steps: [
        'Choose a royalty-free loop or record your own instrument or voice for 10 seconds.',
        'Load it into your DAW slicer and chop it into 8–16 slices.',
        'Play a new 2-bar pattern from the slices with your pads or keyboard.',
        'Re-pitch the original loop up 3 semitones and compare with time-stretching it.',
        'Low-pass the chopped sample and add drums and a bassline around it.',
        'Resample: bounce the chopped section, reverse it, and use it as a transition.',
        'Write down the source and licence of every sample you used.'
      ],
      tips: ['Record foley with your phone. Unique sounds become your signature.', 'Keep a "sample log" for every project: file, source, licence. It saves trouble when releasing.'],
      mistakes: ['Releasing songs with uncleared samples.', 'Believing the "7 seconds" myth.', 'Using a loop exactly as-is with no creativity; artists can tell.'],
      assignment: {
        title: 'The Flip',
        brief: 'Take one sample and make it unrecognisable and musical.',
        deliverables: ['A chopped sample pattern from royalty-free or self-recorded audio', 'A full 1-minute beat built around the flip', 'One reversed or resampled transition', 'A sample log with source and licence']
      },
      quiz: [
        { q: 'Which two copyrights may need clearance when sampling a record?', a: ['Artwork and lyrics', 'Master (sound recording) and composition', 'Video and audio', 'None'], c: 1, why: 'Recordings and compositions are separate rights.' },
        { q: 'Is a sample under 7 seconds automatically legal?', a: ['Yes', 'No, there is no safe length', 'Only under 3 seconds', 'Only for hip-hop'], c: 1, why: 'Length does not determine legality.' },
        { q: 'What is interpolation?', a: ['Speeding up a sample', 'Re-playing or re-singing a melody instead of using the original recording', 'Reversing audio', 'Adding vinyl noise'], c: 1, why: 'Interpolation requires composition clearance but not master clearance.' }
      ]
    },
    {
      id: 'sd-808',
      title: '808s and Bass Design Deep Dive',
      minutes: 50,
      summary: 'Tuning, length, glide, distortion, kick relationship and mono low end for 808s and sub bass.',
      objectives: ['Tune and shape 808s', 'Make bass audible on small speakers', 'Manage the kick and 808 relationship'],
      body: `
## The 808 story
The Roland TR-808's kick could be tuned with a long decay. Producers began using it as a **bass instrument**, playing melodies with it. Today "808" means any long, tuned, sub-heavy bass hit.

## Tuning
- Find the 808 sample's root note (a tuner plugin or spectrum analyser).
- Map it correctly in your sampler so the keyboard plays the right pitches.
- Write the 808 line in the key of the song. Usually it follows the root notes of the chords.
- Use the **808 tuning chart** in the Calculators tab: for example, an A1 808 is 55 Hz, a C1 is about 32.7 Hz (too low for many speakers), and E1 is about 41.2 Hz.

Sweet spot for most 808s: notes from about **E1 to A1 (41–55 Hz fundamental)**. Lower notes have more weight on big systems but vanish on phones.

## Length and envelope
- Long 808s (hold until the next note) create a sustained low end; common in trap.
- Short 808s leave space for the kick and make bouncy patterns.
- Use a short release (or a fade) to avoid clicks at note ends.

## Glide
Set the sampler to **mono** with **portamento/glide** (often 50–150 ms). Overlap two notes slightly to trigger the slide. Slides up an octave at the end of a phrase are a trap signature; frequent slides in unusual intervals are a UK/NY drill signature.

## Making the 808 audible everywhere
Phones and laptops cannot reproduce 40–60 Hz. The ear hears bass through its **harmonics** (the "missing fundamental" effect).
- Add **saturation or distortion** to create upper harmonics around 100–500 Hz.
- Parallel distortion: distort a copy and blend it in, keeping the clean sub intact.
- Check on a phone speaker.

## Kick and 808
- **Option 1**: the kick and 808 hit together. Use a short, punchy kick with little sub, and let the 808 carry the low end.
- **Option 2**: sidechain the 808 to the kick so the 808 ducks for a few milliseconds.
- **Option 3**: arrange so they rarely overlap.
- Make sure the kick and 808 are in tune with each other and in phase (zoom in at their starts).

## Mono and headroom
- Keep everything below about **100–120 Hz mono**.
- Bass carries the most energy in a mix. Leave headroom; do not let it clip.
- Use a spectrum analyser (SPAN by Voxengo is free) to see sub levels when mixing on headphones.
`,
      steps: [
        'Load an 808 sample into your sampler and find its root note. Map it correctly.',
        'Load the "Trap" preset in the Drum Machine to hear a simple 808 line under the drums.',
        'Write a 4-bar 808 line following the chord roots of a minor progression.',
        'Set mono + glide and add two slides at phrase ends.',
        'Add saturation and compare on headphones and a phone speaker.',
        'Sidechain the 808 to the kick with a fast attack and a release of 50–100 ms.',
        'Check the low end in mono and with a spectrum analyser.'
      ],
      tips: ['Choose 808 samples with clear pitch and smooth decay.', 'Turn your monitors down and check whether the 808 is still felt and heard.'],
      mistakes: ['808 not in key.', 'Stereo 808s that collapse in mono.', 'Clipping the master because the 808 is too loud.'],
      assignment: {
        title: '808 Mastery',
        brief: 'Design and write an 808 bassline that works on every speaker.',
        deliverables: ['A tuned 808 sampler patch with glide', 'A 4-bar 808 line with slides in key', 'Saturated version tested on a phone speaker', 'Kick and 808 balanced with sidechain or arrangement']
      },
      quiz: [
        { q: 'Why add saturation to an 808?', a: ['To change the key', 'To create harmonics so it is audible on small speakers', 'To make it stereo', 'To add reverb'], c: 1, why: 'Small speakers rely on harmonics to convey bass.' },
        { q: 'What triggers an 808 glide in mono mode?', a: ['Short separate notes', 'Overlapping two notes', 'Velocity 127', 'Panning'], c: 1, why: 'Overlapping notes in mono with portamento cause a slide.' },
        { q: 'Below what frequency should the mix generally be mono?', a: ['1 kHz', 'About 100–120 Hz', '5 kHz', 'It should be stereo'], c: 1, why: 'Mono low end keeps punch and translates on all systems.' }
      ],
      tools: ['calc', 'drums']
    },
    {
      id: 'sd-fx',
      title: 'FX, Ear Candy and Signature Sounds',
      minutes: 45,
      summary: 'Risers, downlifters, impacts, sweeps, reverse reverb, tape stops, vocal chops, glitch, foley and producer tags.',
      objectives: ['Design transition FX from scratch', 'Add ear candy that keeps listeners engaged', 'Create a producer tag'],
      body: `
## Transition FX
- **Riser / uplifter**: rising noise or synth (filter + pitch + volume automation), 2–8 bars before a drop or chorus.
- **Downlifter**: falling noise or pitch after a big moment.
- **Impact / boom**: a big low hit on the downbeat of a new section (layer a sub drop, a crash and a distorted kick through reverb).
- **Sweep**: filtered white noise moving up or down.
- **Reverse reverb / reverse cymbal**: swells into the next hit.
- **Tape stop**: pitch and speed slowing to a stop (dramatic pause).
- **Sub drop**: a sine pitch dive at the start of a drop.

## Ear candy
Small details that reward repeated listening:
- Vocal chops and ad-lib echoes.
- Delay throws on single words.
- Stutters and glitch edits at phrase endings.
- Filtered, reversed or pitched copies of the main hook.
- Foley textures (vinyl crackle, rain, room tone).
- Panning automation on percussion.
- One-time sounds that appear only once in the song.

## Vocal chops
1. Take a vocal phrase (royalty-free acapella or your own recording).
2. Slice syllables.
3. Pitch them to the key and play a melody.
4. Add formant shift, reverb and delay.
Vocal chops are a core sound in future bass, house, pop and EDM.

## Glitch and stutter
- Slice a bar into 1/16 or 1/32 repeats near the end of a phrase.
- Use beat-repeat or glitch plugins (many DAWs include one: Ableton Beat Repeat, FL Studio Gross Beat).
- Automate pitch or filter on the stutter.

## Foley and organic textures
Record everyday sounds: pencil taps, zips, keys, kitchen pans, footsteps. Process them into drums, risers and textures. Organic textures make electronic music feel human and unique.

## The producer tag
A short (1–3 seconds) audio signature at the start of your beats ("[Name] on the beat"). It protects previews and builds brand recognition. Make it:
- Short and memorable.
- Processed to stand out (delay, reverb, pitch).
- Placed in the intro, not over the vocal.
`,
      steps: [
        'Design a 4-bar white-noise riser with filter, volume and pitch automation.',
        'Design an impact by layering a sub drop, a crash and a distorted kick into a big reverb. Bounce it.',
        'Make a reverse-reverb swell from a snare or vocal word.',
        'Create a vocal chop melody from a royalty-free acapella.',
        'Record 5 foley sounds with your phone and process them into percussion.',
        'Record or create your producer tag and process it.'
      ],
      tips: ['Bounce your FX and keep them in a personal "FX" folder for every future project.', 'Ear candy should be subtle; too much becomes clutter.'],
      mistakes: ['Using the same riser in every song.', 'A producer tag that is too long or over the vocals.'],
      assignment: {
        title: 'FX Toolkit',
        brief: 'Build a personal pack of transitions and signature sounds.',
        deliverables: ['3 risers, 2 downlifters, 2 impacts bounced as WAV', 'A vocal chop melody', '5 processed foley sounds', 'Your producer tag']
      },
      quiz: [
        { q: 'What is a downlifter?', a: ['A rising FX before a drop', 'A falling FX after a big moment', 'A kick drum', 'A type of EQ'], c: 1, why: 'Downlifters fall in pitch or filter after impacts.' },
        { q: 'Where should a producer tag go?', a: ['Over the chorus vocal', 'In the intro', 'At the very end only', 'Repeated every bar'], c: 1, why: 'The intro identifies the producer without interfering with vocals.' },
        { q: 'What is foley?', a: ['A synth type', 'Recorded everyday sounds used creatively', 'A mastering tool', 'A key signature'], c: 1, why: 'Foley adds organic, unique textures.' }
      ]
    },
    {
      id: 'sd-project',
      title: 'Semester Project: Your Own Sample Pack',
      minutes: 600,
      project: true,
      summary: 'Design 12 synth patches, 1 sample flip, 10 drum one-shots and 6 FX, and package them like a commercial pack.',
      objectives: ['Produce professional, organised sounds', 'Package and present a product'],
      body: `
## The brief
Create a mini sample pack in one genre of your choice:
- **12 synth presets** (bass, leads, pads, plucks, keys, FX).
- **10 drum one-shots** (layered kicks, snares, claps, hats, percs, 808s), tuned and labelled with key.
- **6 FX** (risers, impacts, downlifters, sweeps).
- **4 loops** (melody, drum, bass, vocal chop) labelled with BPM and key.
- **1 demo track** that uses only your pack.

## Naming conventions (industry standard)
- PackName_Kick_Punchy_01.wav
- PackName_808_Long_F.wav
- PackName_Loop_Melody_140bpm_Cmin.wav

## Quality checklist
- No clipping, consistent loudness (peaks around -1 dBFS for one-shots).
- Trimmed silence at the start, natural fade at the end.
- 24-bit WAV, 44.1 or 48 kHz.
- Only royalty-free or self-made sources.

This pack becomes a real product you can give away to build an audience, or sell (Semester 9).
`,
      steps: ['Choose genre and pack name', 'Design 12 presets', 'Create and tune 10 drum one-shots', 'Design 6 FX', 'Create 4 labelled loops', 'Produce a 1-minute demo using only the pack', 'Organise and zip the folder with a readme'],
      assignment: {
        title: 'Sample Pack Vol. 1',
        brief: 'Your first sound product, organised like a commercial release.',
        deliverables: ['Organised pack folder with all sounds named correctly', 'A demo track using only your pack', 'A one-page readme with contents and licence terms', 'Cover artwork (a simple square image)']
      },
      quiz: [
        { q: 'What should a loop filename include?', a: ['Your birthday', 'BPM and key', 'The DAW name', 'Nothing'], c: 1, why: 'BPM and key help users drop loops straight into projects.' },
        { q: 'Which sources are allowed in your pack?', a: ['Any song from the radio', 'Only royalty-free or self-made audio', 'Other people\'s packs renamed', 'YouTube rips'], c: 1, why: 'You can only sell sounds you have the rights to.' }
      ]
    }
  ]
});
