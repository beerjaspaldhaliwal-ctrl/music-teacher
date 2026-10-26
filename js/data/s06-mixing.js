(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's6',
  no: 6,
  title: 'Mixing',
  tagline: 'Balance, EQ, compression, space, saturation, stereo, low end, vocals, automation and translation.',
  weeks: 7,
  outcomes: [
    'Run a professional mix workflow from prep to export',
    'Use EQ and compression with purpose, not presets',
    'Create depth and width with reverb, delay and stereo tools',
    'Control the low end: kick, bass and 808',
    'Mix vocals that sit on top and sound expensive',
    'Deliver mixes that translate to every system'
  ],
  lessons: [
    {
      id: 'mix-intro',
      title: 'The Mixing Workflow and Gain Staging',
      minutes: 55,
      summary: 'Session prep, gain staging, the static mix, references and a repeatable order of operations.',
      objectives: ['Prepare a mix session professionally', 'Gain stage every channel', 'Build a strong static mix with faders and pan only'],
      body: `
## What mixing is
Mixing turns many tracks into one stereo song where every element has its place, the emotion of the song is clear, and it sounds good everywhere. **Balance is 80% of a mix.** Plugins do the rest.

## Order of operations
1. **Prep**: organise, label, colour, group.
2. **Gain staging**: consistent healthy levels.
3. **Static mix**: faders and panning only.
4. **Corrective processing**: fix problems (EQ cuts, resonances, de-essing).
5. **Tonal and dynamic shaping**: EQ for character, compression, saturation.
6. **Space**: reverb and delay.
7. **Automation**: movement and emphasis.
8. **Mix bus**: glue.
9. **Checks and revisions**: references, mono, systems, fresh ears.
10. **Export**.

## Session prep
- Import all stems at the same sample rate, starting at bar 1.
- Name and colour tracks consistently (drums, bass, music, vocals, FX).
- Delete silence and noise between parts; check edits have crossfades.
- Create buses: **Drums, Bass, Music, Vocals, FX**, all feeding the mix bus.
- Create shared effects returns: short reverb, long reverb, delay.
- Mark song sections with markers.
- Import 2–3 reference tracks onto a separate track that bypasses your mix bus processing.

## Gain staging
- Use **clip gain** or a trim/utility plugin at the start of each chain so tracks average around **-18 dBFS** (peaks around -10 to -6).
- Keep faders near unity (0 dB) at first so you have fine control.
- The mix bus should peak around **-6 dBFS** before any mix bus processing or limiting.
- If everything is too loud, lower **all tracks** (select all and trim), not the master fader.

## The static mix
1. Start with the most important element (usually the vocal or the kick and bass).
2. Bring in each element until it sits right. Ask: "Can I hear it? Is it too loud?"
3. Pan elements to create space (Lesson 6).
4. Check the balance at **low volume**: important parts should still be heard.
5. Spend real time here. A great static mix is often 80% of the final result.

## Using references
- Level-match the reference to your mix (references are mastered and louder; turn them down so you compare tone and balance, not loudness).
- Compare: vocal level, kick and bass level, brightness, width, reverb amount.
- Switch frequently and briefly. Your ears adapt within seconds.

## Ear fatigue
Take 10 minutes off every hour. Your perception of highs and loudness changes after long sessions. Make major decisions early in a session, and finish mixes on a fresh day.
`,
      steps: [
        'Open your Semester 5 song (or download a free multitrack from the Cambridge-MT library, see Library).',
        'Label, colour and group tracks into Drums, Bass, Music, Vocals, FX buses.',
        'Add a trim/utility plugin first on each track and gain stage to around -18 dBFS average.',
        'Set up reverb and delay return channels.',
        'Import 2 reference tracks and level-match them by ear.',
        'Build a static mix with only faders and pan for 30 minutes.',
        'Bounce the static mix and listen on another system.'
      ],
      tips: ['Mix in mono for the first balance pass; if it works in mono, it will be great in stereo.', 'Save mix versions (Mix_v01, v02) so you can compare progress.'],
      mistakes: ['Reaching for plugins before balancing.', 'Mixing for hours without breaks.', 'Comparing with a louder reference and chasing loudness.'],
      assignment: {
        title: 'Static Mix',
        brief: 'Create a balanced mix using only faders and pan.',
        deliverables: ['An organised session with buses and returns', 'All tracks gain staged', 'A static mix export (faders and pan only)', 'Notes comparing your balance to a reference']
      },
      quiz: [
        { q: 'What is said to be most of a mix?', a: ['Plugins', 'Balance', 'Reverb', 'Loudness'], c: 1, why: 'Getting levels right is the foundation of every good mix.' },
        { q: 'Why level-match references?', a: ['To make them louder', 'So you compare tone and balance, not loudness', 'To save CPU', 'It is not needed'], c: 1, why: 'Louder sounds better to our ears, which misleads comparisons.' },
        { q: 'Roughly where should the mix bus peak before mastering processing?', a: ['+3 dBFS', '0 dBFS', 'Around -6 dBFS', '-40 dBFS'], c: 2, why: 'Headroom leaves room for mastering.' }
      ]
    },
    {
      id: 'mix-eq',
      title: 'EQ in Depth',
      minutes: 60,
      summary: 'EQ types, Q, cut vs boost, sweeping for problems, carving space, and frequency guides per instrument.',
      objectives: ['Use every EQ filter type', 'Find and remove problem frequencies', 'Carve space so instruments do not mask each other'],
      body: `
## EQ filter types
- **High-pass (low-cut)**: removes lows below a frequency. Clean rumble and mud from non-bass parts.
- **Low-pass (high-cut)**: removes highs. Tame harshness, push sounds back.
- **Shelf**: boosts or cuts everything above (high shelf) or below (low shelf) a point. Broad tone changes ("air", "warmth").
- **Bell / peak**: boosts or cuts around a centre frequency. **Q** sets the width (high Q = narrow, low Q = wide).
- **Notch**: very narrow cut for resonances and hum (50/60 Hz mains hum).
- **Dynamic EQ**: an EQ band that only acts when the frequency gets too loud (perfect for harshness that comes and goes, or de-essing).
- **Linear phase vs minimum phase**: minimum phase is normal and efficient; linear phase avoids phase shift (useful in mastering and parallel processing) but can cause pre-ringing and uses more CPU.

## Principles
1. **Cut narrow, boost wide.** Narrow boosts sound unnatural; wide gentle boosts sound musical.
2. **Subtractive first.** Remove what is wrong before adding what you want.
3. **EQ in context.** Soloed EQ decisions often make things worse in the mix.
4. **Small moves.** 1–3 dB is often enough.
5. **Match volume** when comparing bypassed and EQ'd versions.

## Finding problems: the sweep technique
1. Create a narrow bell boost (+8 to +10 dB, high Q).
2. Sweep slowly across the spectrum while the track plays.
3. When a frequency jumps out as ugly, ringy or harsh, stop.
4. Turn the boost into a cut of 2–6 dB.
Use it sparingly: not every peak is a problem.

## High-pass wisely
High-pass filters clean up mud on vocals, guitars, pads and hats. But do not high-pass everything automatically; some instruments need their low end for warmth. Listen for when it starts to thin out, then back off.

## Carving space (complementary EQ)
When two instruments fight (masking):
- Decide which is more important in that range.
- Cut a little from the less important one where the important one lives. Example: dip guitars at 2–3 kHz to make space for vocal presence.
- Kick vs bass: if the kick's punch is at 60 Hz, dip the bass slightly there and let the bass live at 100 Hz (or the reverse).

## Frequency guide by instrument
| Instrument | Cut / clean | Shape / boost |
|---|---|---|
| Kick | Mud 250–400 Hz | Sub 50–60 Hz, punch 80–100 Hz, click 3–5 kHz |
| 808 / sub | Nothing below 30 Hz | Harmonics via saturation 100–300 Hz |
| Bass guitar | Mud 200–300 Hz | Weight 60–100 Hz, growl 700 Hz–1 kHz, string 2–3 kHz |
| Snare | Boxy 400–800 Hz, ring | Body 150–250 Hz, crack 2–5 kHz |
| Hi-hats | Low end below 300–500 Hz | Shimmer 8–12 kHz (careful) |
| Vocals | Rumble below 80–100 Hz, mud 200–400 Hz, harsh 2.5–4 kHz | Presence 3–5 kHz, air 10–12 kHz shelf |
| Acoustic guitar | Boom 100–200 Hz | Sparkle 5–10 kHz |
| Electric guitar | Mud 200–400 Hz, fizz above 8 kHz | Bite 2–4 kHz |
| Piano | Mud 200–400 Hz | Presence 2–5 kHz |
| Pads | Lows (high-pass 150–300 Hz) | Gentle air shelf |

These are starting points. Every recording is different.
`,
      steps: [
        'On a vocal track, high-pass until it thins, then back off a little.',
        'Use the sweep technique to find one harsh or boxy frequency and cut it 3 dB.',
        'Add a gentle high shelf for air (+1.5 to +3 dB above 10 kHz) and compare at matched volume.',
        'Find the frequency where the kick and bass fight. Carve space with complementary EQ.',
        'Dip the music bus or guitars slightly at 2–4 kHz and listen to the vocal clarity improve.',
        'Use a dynamic EQ on a harsh resonance that only appears on loud notes.',
        'Use the Ear Trainer → Frequency mode for 10 rounds on Hard.'
      ],
      tips: ['Use an EQ with a built-in analyser (TDR Nova is a free dynamic EQ; FabFilter Pro-Q is a popular paid one).', 'Close your eyes when judging EQ; the graph can trick you.'],
      mistakes: ['Big narrow boosts.', 'EQ decisions made only on solo.', 'Cutting all low end from everything so the mix becomes thin.'],
      assignment: {
        title: 'EQ Surgery',
        brief: 'Clean and shape a full mix with EQ only.',
        deliverables: ['Corrective EQ on every track that needs it', 'One complementary EQ carve for kick and bass', 'One for vocals vs music', 'Before/after export of the mix', 'Frequency ear trainer score on Hard']
      },
      quiz: [
        { q: 'What does "cut narrow, boost wide" mean?', a: ['Always boost', 'Use narrow Q for cuts and wide Q for boosts', 'Only use shelves', 'Never EQ'], c: 1, why: 'Narrow cuts remove problems; wide boosts sound musical.' },
        { q: 'What is masking?', a: ['A plugin type', 'One sound hiding another in the same frequency range', 'Panning hard left', 'A mastering step'], c: 1, why: 'Overlapping frequencies compete for attention.' },
        { q: 'When is a dynamic EQ most useful?', a: ['For static tone changes', 'For problems that appear only on some notes or moments', 'For panning', 'For reverb'], c: 1, why: 'Dynamic EQ only acts when the frequency exceeds a threshold.' }
      ],
      tools: ['ear']
    },
    {
      id: 'mix-compression',
      title: 'Compression in Depth',
      minutes: 60,
      summary: 'Threshold, ratio, attack, release, knee and makeup; compressor types; parallel, sidechain and serial compression.',
      objectives: ['Explain every compressor control', 'Choose compressor types by character', 'Use parallel, sidechain and serial compression'],
      body: `
## What compression does
A compressor turns down the loud parts of a signal, reducing **dynamic range** (the difference between loud and quiet). Then you turn the whole thing up (makeup gain), so quiet details become louder and the sound feels more controlled and present.

## The controls
- **Threshold**: the level above which compression starts.
- **Ratio**: how much it compresses. At 4:1, a signal 4 dB over the threshold comes out 1 dB over.
- **Attack**: how fast it clamps down after the signal crosses the threshold. **Fast** attack (0.1–5 ms) catches transients (smoother, less punch). **Slow** attack (10–50 ms) lets transients through (punchier).
- **Release**: how fast it lets go. Too fast = distortion and pumping; too slow = the compressor never recovers, squashing everything. Set it so gain reduction returns to zero in time with the groove.
- **Knee**: soft knee eases into compression (transparent); hard knee is abrupt (aggressive).
- **Makeup gain**: restores level after compression.
- **Gain reduction (GR) meter**: shows how much it is working. Watch it.
- **Mix / dry-wet**: built-in parallel compression.

## Compressor types and character
| Type | Classic model | Character | Common use |
|---|---|---|---|
| VCA | SSL bus compressor, dbx 160 | Clean, punchy, precise | Drum bus, mix bus, snare |
| FET | Urei/UA 1176 | Fast, aggressive, colourful | Vocals, drums, bass, parallel crush |
| Opto | Teletronix LA-2A | Smooth, slow, musical | Vocals, bass |
| Vari-mu (tube) | Fairchild 660/670, Manley Vari-Mu | Warm, gentle glue | Mix bus, mastering |
| Digital / transparent | Most stock compressors | Clean, flexible | Anything |

## Starting points
| Source | Ratio | Attack | Release | Gain reduction |
|---|---|---|---|---|
| Lead vocal | 3:1–4:1 | 5–15 ms | 50–100 ms or auto | 3–6 dB |
| Rap vocal | 4:1–8:1 | 1–10 ms | Fast | 5–10 dB (often in two stages) |
| Kick | 4:1 | 10–30 ms | 50–100 ms | 2–4 dB |
| Snare | 4:1–6:1 | 5–20 ms | 50–150 ms | 3–6 dB |
| Bass | 4:1 | 10–30 ms | 100–200 ms | 3–6 dB |
| Drum bus | 2:1–4:1 | 10–30 ms | Auto / timed to tempo | 2–4 dB |
| Mix bus | 1.5:1–2:1 | 10–30 ms | Auto | 1–2 dB |

## Techniques
- **Serial compression**: two compressors each doing a little (e.g. a fast FET catching peaks, then an opto smoothing). More natural than one compressor working hard.
- **Parallel compression (New York)**: send to a bus, compress very hard (10–20 dB GR), blend under the dry signal. Adds power and density while keeping transients.
- **Sidechain compression**: a compressor on one track triggered by another. The classic: bass or pads ducking every time the kick hits (dance-music pumping) or music ducking slightly under the vocal.
- **De-esser**: a compressor that reacts only to sibilance (5–9 kHz).
- **Multiband compression**: compress different frequency bands separately (control boomy low end only when it gets loud). OTT (a free plugin from Xfer Records) is a famous extreme multiband compressor for EDM sound design.
- **Limiter**: compressor with a very high ratio and fast attack used to stop peaks; mostly for mastering and protection.
- **Upward compression**: raises quiet parts instead of lowering loud parts.

## Listen for
- **Pumping**: unwanted level breathing (unless desired).
- **Dull transients**: attack too fast.
- **Distortion on bass**: release too fast.
- **Lifeless, flat sound**: too much compression overall.
`,
      steps: [
        'Put a compressor on a vocal. Set ratio 4:1, attack 10 ms, release 80 ms. Lower the threshold until you see 3–6 dB GR.',
        'Toggle bypass at matched volume (adjust makeup) and listen to what changed.',
        'Change attack from 1 ms to 30 ms on a snare and listen to punch change.',
        'Set up serial compression on the vocal: fast compressor first, smooth one second.',
        'Create a parallel compression bus for drums and blend it in.',
        'Sidechain a bass or pad to the kick.',
        'Add a de-esser to the vocal and tame harsh S sounds.'
      ],
      tips: ['If you cannot hear what the compressor is doing, exaggerate settings, learn the sound, then pull back.', 'Compression before EQ shapes the dynamics of the raw sound; EQ before compression stops the compressor reacting to unwanted frequencies. Both orders are valid.'],
      mistakes: ['Compressing everything heavily "because pros do".', 'Judging compression louder vs quieter instead of at matched volume.', 'Ignoring the gain reduction meter.'],
      assignment: {
        title: 'Dynamics Control',
        brief: 'Control dynamics across the mix with purpose.',
        deliverables: ['Vocal serial compression and de-essing', 'Drum parallel compression bus', 'One sidechain compression setup', 'Settings written for each, with the reason', 'Before/after export']
      },
      quiz: [
        { q: 'At a 4:1 ratio, a signal 8 dB over the threshold comes out how far over?', a: ['8 dB', '4 dB', '2 dB', '0 dB'], c: 2, why: '8 ÷ 4 = 2 dB over the threshold.' },
        { q: 'Which compressor type is famous for smooth vocals and bass?', a: ['FET (1176)', 'Opto (LA-2A)', 'Clipper', 'Gate'], c: 1, why: 'Optical compressors respond smoothly and musically.' },
        { q: 'Sidechain compression from the kick to the bass makes the bass...', a: ['Louder when the kick hits', 'Duck briefly when the kick hits', 'Change pitch', 'Pan left'], c: 1, why: 'The kick triggers gain reduction on the bass.' },
        { q: 'A slow attack on drums usually results in...', a: ['Less punch', 'More punch because transients pass', 'More reverb', 'Distortion'], c: 1, why: 'Transients pass before the compressor clamps down.' }
      ]
    },
    {
      id: 'mix-space',
      title: 'Reverb, Delay and Depth',
      minutes: 55,
      summary: 'Reverb types and parameters, delay types, send-based effects, and building a 3D front-to-back mix.',
      objectives: ['Choose reverb types and settings', 'Use delay for depth, width and rhythm', 'Place elements front to back'],
      body: `
## Reverb types
| Type | Sound | Use |
|---|---|---|
| Room | Short, natural | Drums, glue, realism |
| Hall | Long, lush | Strings, pads, ballads |
| Plate | Bright, dense, smooth | Vocals, snares (classic) |
| Chamber | Warm, rich | Vocals, strings |
| Spring | Boingy, vintage | Guitars, dub, retro |
| Convolution | Real spaces captured by impulse responses | Realism, film, unique spaces |
| Shimmer | Pitch-shifted reverb tails | Ambient, cinematic |

## Reverb parameters
- **Pre-delay**: the gap before the reverb starts (10–60 ms). Keeps the dry sound clear and upfront while still adding space. Try matching it to tempo (e.g. a 1/64 or 1/32 note).
- **Decay / RT60**: how long the tail lasts.
- **Size**: the virtual space.
- **Damping / high cut**: darker reverbs sit further back and are less distracting.
- **Early reflections**: the first echoes; they tell the ear about room size.
- **Diffusion**: how smooth the tail is.
- **Mix**: on a send return, set 100% wet.

## Use sends, not inserts
Put reverbs and delays on **return/aux tracks** at 100% wet and send tracks to them. Benefits: one reverb glues many sounds into one space, saves CPU, and you can EQ the reverb.

**EQ your reverb return**: high-pass at 200–500 Hz (removes mud) and low-pass around 5–10 kHz (removes harshness). This "Abbey Road reverb" style approach keeps reverbs clean.

## A typical reverb setup
- **Short room/plate**: drums and percussion.
- **Medium plate**: vocals.
- **Long hall**: pads, strings, special moments.

## Delay types
- **Slapback**: single repeat at 80–120 ms. 1950s vocals, rockabilly, rap thickness.
- **Tempo-synced**: 1/4, 1/8, **1/8 dotted** (classic rhythmic delay), triplets.
- **Ping-pong**: repeats bounce left and right; adds width.
- **Tape / analog delay**: repeats get darker and warmer with wobble.
- **Throw delay**: automate a send so only certain words (the last word of a line) echo.

Use the Delay Calculator in Practice Studio to convert BPM into milliseconds.

## Depth: front to back
Things feel closer when they are:
- Louder
- Brighter (more high frequencies)
- Drier (less reverb, more pre-delay)
- More transient-rich

Things feel further away when they are:
- Quieter
- Darker (low-passed)
- Wetter (more reverb, less pre-delay)
- Softer transients

Plan your mix in 3D: lead vocal and kick at the front, pads and backing vocals behind, ambient FX at the back.

## Ducking reverbs and delays
Sidechain compress the reverb or delay return from the dry vocal so effects get quieter while the singer sings and bloom in the gaps. Clear and big at the same time.
`,
      steps: [
        'Create 3 return tracks: room, plate and hall reverbs, all 100% wet.',
        'EQ each return: high-pass 300 Hz, low-pass 8 kHz.',
        'Send drums to the room, vocals to the plate, pads to the hall.',
        'Set vocal plate pre-delay to 30–50 ms and compare with 0 ms.',
        'Create a 1/8 dotted delay return and send the vocal subtly to it.',
        'Automate a delay throw on the last word of two vocal lines.',
        'Sidechain the vocal delay return to the dry vocal.',
        'Use the Delay Calculator to match delay and pre-delay times to your BPM.'
      ],
      tips: ['If you notice the reverb, it might be too much. If you mute it and miss it, it is right.', 'Mono reverbs panned with the source keep the stereo image tidy in busy mixes.'],
      mistakes: ['Reverb inserted on every track.', 'Bassy reverb tails muddying the low mids.', 'Long reverb on fast rhythmic parts causing smear.'],
      assignment: {
        title: 'Building Depth',
        brief: 'Create a mix with clear front, middle and back layers.',
        deliverables: ['3 EQ\'d reverb returns and 1 delay return', 'Throw delays on vocal words', 'A ducked vocal delay or reverb', 'A depth plan diagram (front / middle / back)', 'Export']
      },
      quiz: [
        { q: 'What does pre-delay do?', a: ['Shortens the tail', 'Delays the reverb start so the dry sound stays clear', 'Adds distortion', 'Pans the reverb'], c: 1, why: 'Pre-delay separates the source from its reflections.' },
        { q: 'Why high-pass a reverb return?', a: ['To make it louder', 'To remove low-end mud', 'To add bass', 'To change the key'], c: 1, why: 'Low frequencies in reverb clutter the mix.' },
        { q: 'Which makes a sound feel further away?', a: ['Brighter and drier', 'Darker and wetter', 'Louder', 'More transients'], c: 1, why: 'Distance reduces highs and increases reflections.' }
      ],
      tools: ['calc']
    },
    {
      id: 'mix-saturation',
      title: 'Saturation, Distortion and Harmonics',
      minutes: 40,
      summary: 'Tape, tube and transistor saturation, parallel distortion and harmonic excitement for presence.',
      objectives: ['Use saturation to add warmth, presence and loudness', 'Choose saturation types', 'Use parallel distortion safely'],
      body: `
## What saturation does
Saturation adds **harmonics**: new frequencies related to the original. It makes sounds:
- Warmer and fuller
- More present without EQ boosts
- Audible on small speakers (especially bass)
- Slightly compressed (peaks are rounded)

## Types
| Type | Character |
|---|---|
| Tape | Warm, soft compression, slight high-end roll-off, glue |
| Tube / valve | Rich even harmonics, warm and musical |
| Transistor / console | Gritty, punchy, odd harmonics |
| Distortion / overdrive | Aggressive, obvious |
| Fuzz | Extreme square-wave grit |
| Bitcrushing / downsampling | Digital, lo-fi, aliasing textures |
| Clipping (soft / hard) | Loudness, aggression on drums and masters |

## Where to use it
- **Vocals**: subtle tape or tube for presence and warmth.
- **Drums**: tape on the drum bus; clipper on snares and the bus for punch and loudness.
- **Bass / 808**: harmonics for small speakers (parallel distortion keeps sub clean).
- **Synths**: grit and character.
- **Mix bus**: very subtle tape or console emulation for glue.

## Parallel saturation
Send to a bus, distort heavily, high-pass the distorted signal (so it adds only upper harmonics) and blend it in. Great for 808s and drums.

## Gain matters
Saturation plugins react to input level. Drive harder for more effect, then lower the output to match the original volume. Always compare at matched volume.

## Exciters
Harmonic exciters add high harmonics for brightness and "air" that sounds more natural than a big EQ boost.

## Free options
Many DAWs include saturation (Ableton Saturator and Roar, FL Studio Fruity Blood Overdrive and Soundgoodizer, Logic ChromaGlow, Phat FX and Overdrive). Free plugins worth searching: Softube Saturation Knob, Klanghelm IVGI, Airwindows plugins.
`,
      steps: [
        'Add tape saturation to the drum bus and compare at matched volume.',
        'Set up parallel distortion on the 808 or bass, high-pass the distorted return at 200 Hz, and blend.',
        'Check the bass on a phone speaker with and without the parallel distortion.',
        'Add subtle tube saturation to the lead vocal.',
        'Try a soft clipper on the snare and the drum bus.',
        'Write which type gave the result you liked most on each element.'
      ],
      tips: ['Several subtle stages of saturation (track, bus, master) often beat one heavy stage.', 'Saturation can replace EQ boosts: brightness without harshness.'],
      mistakes: ['Saturating everything until the mix becomes harsh and flat.', 'Louder-is-better bias: always gain match.'],
      assignment: {
        title: 'Harmonic Colour',
        brief: 'Use saturation to add life and translation.',
        deliverables: ['Saturation on drums, bass, vocals and one synth', 'Parallel distortion on bass with phone test notes', 'Before/after export']
      },
      quiz: [
        { q: 'What does saturation add?', a: ['Reverb', 'Harmonics', 'Silence', 'Stereo width only'], c: 1, why: 'Saturation generates harmonic overtones.' },
        { q: 'Why high-pass a parallel distortion return on bass?', a: ['To add sub', 'So it adds only upper harmonics and keeps the sub clean', 'To make it stereo', 'To change pitch'], c: 1, why: 'The clean signal keeps the sub; the distortion adds audible harmonics.' },
        { q: 'Which saturation type is known for warm glue with soft compression?', a: ['Bitcrusher', 'Tape', 'Fuzz', 'Hard clipper'], c: 1, why: 'Tape gently compresses and warms.' }
      ]
    },
    {
      id: 'mix-stereo',
      title: 'Stereo Image, Panning and Mono Compatibility',
      minutes: 45,
      summary: 'Panning strategies, LCR, the Haas effect, mid/side processing, width tools and phase correlation.',
      objectives: ['Build a wide, balanced stereo image', 'Use mid/side processing', 'Keep the mix mono-compatible'],
      body: `
## Panning basics
- **Centre**: kick, snare, bass/808, lead vocal (the core of the song).
- **Slightly off-centre**: hi-hats, keys, some percussion.
- **Wide**: doubled guitars, backing vocals, pads, stereo synths, FX.
- Balance the two sides: if a shaker sits left, put another element (tambourine, guitar) right.

## LCR panning
Some engineers pan most elements only **Left, Centre or Right** (hard). This creates a very wide, clear mix with an obvious centre. Combine with partial panning as needed.

## Pan from the drummer's or audience perspective
Decide once and stay consistent (e.g. hi-hat slightly right for drummer perspective).

## Width techniques
- **Double tracking**: two real performances panned left and right; the widest, most natural option.
- **Haas effect**: duplicate a mono sound, pan hard left and right, delay one side by **5–35 ms**. Sounds wide, but can cancel in mono, so check.
- **Chorus and detune**: subtle modulation for width.
- **Stereo wideners**: increase side signal. Use carefully.
- **Different processing per side**: slightly different EQ or pitch on left and right copies.

## Mid/side (M/S)
Instead of left and right, process:
- **Mid**: what is common to both sides (centre: kick, bass, vocal).
- **Side**: the difference (width: stereo pads, reverbs, wide guitars).

Uses:
- High-pass the **side** channel below 100–150 Hz to keep the low end mono.
- Boost air on the side for width without brightening the vocal.
- Cut a little 2–4 kHz in the side to make space for the vocal in the middle.

## Mono compatibility
Many listeners hear mono: phone speakers, club systems, Bluetooth speakers, some smart speakers.
- Check your mix in **mono** regularly (a utility plugin on the master).
- Elements that disappear or thin out in mono have phase issues.
- A **correlation meter** shows +1 (fully mono-compatible) to -1 (out of phase, cancels). Mostly positive is safe; frequent negative readings are a problem.

## Low end stays mono
Keep everything below about 100–120 Hz centred. Use a mono-maker / bass-mono utility on the master or bass bus if needed.
`,
      steps: [
        'Create a panning map for your mix: list each element and its pan position.',
        'Pan core elements centre and spread supporting elements wide; balance left and right.',
        'Try LCR panning on a busy section and compare.',
        'Create a Haas width effect on a mono synth, then check it in mono.',
        'Use mid/side EQ to high-pass the side channel below 120 Hz on the music bus.',
        'Put a mono utility and correlation meter on the master and check the whole song.'
      ],
      tips: ['Width is relative: a mix feels wider when the centre is strong and focused.', 'Use a free stereo analyser (many DAWs include one) to see width.'],
      mistakes: ['Everything panned centre: a narrow, cluttered mix.', 'Wideners on bass.', 'Never checking mono.'],
      assignment: {
        title: 'Wide and Solid',
        brief: 'Create a wide mix that still works in mono.',
        deliverables: ['A written panning map', 'One natural double-tracked or Haas width effect', 'Mid/side processing on a bus', 'Mono and correlation check notes', 'Export']
      },
      quiz: [
        { q: 'Which elements usually stay centred?', a: ['Pads and reverbs', 'Kick, snare, bass and lead vocal', 'Backing vocals', 'Hi-hats only'], c: 1, why: 'The core elements anchor the centre of the mix.' },
        { q: 'What is the Haas effect?', a: ['A pitch effect', 'Delaying one side by 5–35 ms to create width', 'A compressor', 'A reverb type'], c: 1, why: 'Short inter-channel delays are heard as width, not echo.' },
        { q: 'What does the side channel contain in M/S?', a: ['What is common to left and right', 'The difference between left and right (width)', 'Only bass', 'Only vocals'], c: 1, why: 'Side carries the stereo information.' }
      ]
    },
    {
      id: 'mix-lowend',
      title: 'Mixing Drums and the Low End',
      minutes: 55,
      summary: 'Kick and bass relationship, 808 control, drum bus processing and monitoring low end on headphones.',
      objectives: ['Make kick and bass work together', 'Process drums for punch and consistency', 'Judge low end accurately on any setup'],
      body: `
## The low-end hierarchy
Decide which element owns which frequencies:
- **Sub (30–60 Hz)**: usually the 808 or bass, *or* the kick, rarely both at full strength at the same time.
- **Punch (60–120 Hz)**: the kick's body.
- **Bass definition (100–300 Hz and harmonics)**: the bass's upper content so it is heard on small speakers.

## Kick and bass techniques
1. **Arrangement**: notes that do not overlap.
2. **Tuning**: kick and bass in key with each other.
3. **Sidechain**: duck the bass 2–6 dB when the kick hits (fast attack, release timed to the groove). Volume-shaper plugins (LFO Tool, Kickstart, Duck) do this with precise curves.
4. **EQ carving**: dip the bass where the kick's punch is.
5. **Dynamic EQ sidechain**: dip only the bass's conflicting band when the kick hits.
6. **Phase alignment**: make sure kick and bass waves reinforce each other at their start.

## 808 control
- Compress or limit the 808 so every note has consistent level (different notes have different perceived loudness).
- Saturation for harmonics, mono below 100–120 Hz.
- Watch out for very low notes (below about 40 Hz) eating headroom without being heard.

## Drum processing recap
- **Kick**: EQ (remove mud, shape punch/click), compression for consistency, occasional clipper.
- **Snare**: EQ (body, crack), compression, plate or room reverb, saturation.
- **Hats**: high-pass, tame harshness, sometimes a transient shaper to soften.
- **Drum bus**: glue compression, saturation, parallel compression, optional clipper.

## Judging low end on headphones or small rooms
- Use a **spectrum analyser** (Voxengo SPAN is free) on the master and compare the low end to a reference.
- Check the kick and bass level against a reference at matched loudness.
- Listen in a car and on a phone.
- Headphone-specific tools (correction software, crossfeed plugins) help.
- Look at the **meters**: kick and bass should not cause the mix bus to clip or dominate the level.

## Low-end checklist
- Low end is mono.
- Kick is audible on phone speakers (click/punch).
- Bass is audible on phone speakers (harmonics).
- Sub is controlled (no single note boom).
- Kick and bass do not mask each other.
- Reverbs and pads are high-passed.
`,
      steps: [
        'Solo kick and bass together and decide which owns the sub.',
        'Apply sidechain ducking (compressor or volume shaper) from kick to bass.',
        'Use EQ to carve the bass slightly at the kick\'s punch frequency.',
        'Compress or limit the 808 so all notes are even.',
        'Set up the drum bus with glue compression and saturation.',
        'Compare your low end to a reference using a spectrum analyser.',
        'Test on a phone and in a car; note what changes.'
      ],
      tips: ['Turn the volume down: if the kick and bass still punch at low volume, the balance is right.', 'High-pass everything that does not need low end (pads, guitars, reverbs, hats) to clear space.'],
      mistakes: ['Boosting sub until the master clips.', 'Mixing bass only on small speakers or only on headphones with no reference.'],
      assignment: {
        title: 'Low End Lock',
        brief: 'Get a tight, powerful and translating low end.',
        deliverables: ['Kick and bass relationship solved with at least 2 techniques', 'An even, saturated 808 or bass', 'A processed drum bus', 'Analyser comparison screenshot with a reference', 'Phone and car notes']
      },
      quiz: [
        { q: 'What is a common way to stop kick and bass masking?', a: ['Pan them apart', 'Sidechain the bass to the kick', 'Add reverb to both', 'Raise both'], c: 1, why: 'Ducking the bass on kick hits gives the kick space.' },
        { q: 'Why compress an 808?', a: ['To make it stereo', 'To keep note levels consistent', 'To change key', 'To add reverb'], c: 1, why: 'Different notes sound louder or quieter; compression evens them.' },
        { q: 'A free tool to see low-end balance is...', a: ['A metronome', 'A spectrum analyser such as SPAN', 'A tuner only', 'A reverb'], c: 1, why: 'Analysers show frequency content to compare with references.' }
      ]
    },
    {
      id: 'mix-vocals',
      title: 'Mixing Vocals',
      minutes: 60,
      summary: 'A complete vocal chain, backing vocal processing, effects and genre-specific vocal sounds.',
      objectives: ['Build a professional vocal chain', 'Make the vocal sit on top of the beat', 'Treat backing vocals and ad-libs'],
      body: `
## The typical lead vocal chain
Order varies, but a reliable starting chain:
1. **Clip gain / editing**: even out levels, remove noises.
2. **Pitch correction** (if used).
3. **Subtractive EQ**: high-pass around 80–100 Hz (lower for deep voices), cut mud (200–400 Hz) and harsh resonances.
4. **Compressor 1 (fast, FET-style)**: catch peaks, 3–5 dB GR.
5. **Compressor 2 (smooth, opto-style)**: even out, 2–4 dB GR.
6. **De-esser**: 5–9 kHz.
7. **Tone EQ**: presence (3–5 kHz) and air (high shelf above 10 kHz) if needed.
8. **Saturation**: subtle warmth and presence.
9. **Sends**: plate reverb, delay (1/4 or 1/8 dotted), slapback.
10. **Automation**: volume rides so every word is clear.

## Making the vocal sit on top
- **Level first**: most vocals simply need to be louder or more consistent.
- **Automation (vocal riding)**: raise quiet words and lower loud ones. This makes the vocal feel compressed without over-compressing.
- **Carve space**: dip 2–4 kHz in the music bus (or use dynamic EQ sidechained from the vocal).
- **Pre-delay on reverb** keeps the vocal upfront.
- **Sidechain** reverb and delay returns to the dry vocal.

## Backing vocals and doubles
- High-pass higher than the lead (150–250 Hz).
- More compression and de-essing (stacked sibilance builds up fast).
- Slightly darker (low-pass or high-shelf cut) to sit behind.
- Wider panning and more reverb.
- Group them on a backing vocal bus.

## Ad-libs
- High-pass more, pan off-centre, add delay throws and character (filter, distortion, telephone EQ).
- Lower level than the lead; they decorate, never compete.

## Genre styles
| Genre | Vocal sound |
|---|---|
| Rap / trap | Upfront, loud, bright, fairly dry; doubles on key words; delay throws; hard-tuned melodic rap |
| Pop | Polished, bright, compressed, wide stacks, lush reverb and delays |
| R&B | Smooth, airy, warm; lush harmony stacks; long reverbs |
| Rock | Present midrange, some grit, plate reverb |
| EDM | Bright, compressed, big reverbs and delays; vocal chops |
| Afrobeats / Amapiano | Warm, smooth, often with call-and-response backing; atmospheric reverb |
| Indie / lo-fi | Softer, more natural or deliberately filtered and saturated |

## Common problems and fixes
| Problem | Fix |
|---|---|
| Vocal buried | Raise level, automate rides, carve music bus at 2–4 kHz |
| Harsh | Dynamic EQ on 2.5–4 kHz, de-esser, gentler compression |
| Muddy | Cut 200–400 Hz, high-pass |
| Sibilant | De-esser, manual S clip gain reduction |
| Thin | Less high-pass, boost 150–250 Hz gently, saturation |
| Disconnected from beat | Shared reverb with the music, subtle saturation |
`,
      steps: [
        'Build the 10-step vocal chain on your lead vocal.',
        'Automate vocal volume rides for a full verse.',
        'Carve space in the music bus at 2–4 kHz (static or dynamic EQ sidechained from the vocal).',
        'Create a backing vocal bus with darker EQ, more compression and wider panning.',
        'Process ad-libs with filtering and delay throws.',
        'Compare your vocal level and brightness to a reference in the same genre.',
        'Save the chain as a preset or template.'
      ],
      tips: ['Mix the vocal with the beat playing, not soloed.', 'Read the lyrics while listening: every word should be understandable.'],
      mistakes: ['Vocal too quiet "to blend". Listeners focus on vocals; be bold.', 'Over-compression that removes emotion.', 'Too much reverb and no pre-delay.'],
      assignment: {
        title: 'Vocal Mix',
        brief: 'Make the vocal sound like a record.',
        deliverables: ['Complete lead vocal chain', 'Volume automation for the whole song', 'Backing vocal bus and ad-lib treatment', 'A saved vocal chain preset', 'Export compared with a genre reference']
      },
      quiz: [
        { q: 'What is vocal riding?', a: ['Recording while moving', 'Automating vocal volume so every word is clear', 'Pitch correction', 'Panning vocals'], c: 1, why: 'Manual level automation keeps the vocal consistent and natural.' },
        { q: 'Backing vocals are usually processed...', a: ['Brighter and drier than the lead', 'Darker, wider and more compressed than the lead', 'Identically to the lead', 'With no EQ'], c: 1, why: 'This keeps them behind the lead.' },
        { q: 'Where is sibilance usually found?', a: ['50–100 Hz', '200–400 Hz', '5–9 kHz', '15–20 kHz only'], c: 2, why: 'S and T sounds sit roughly between 5 and 9 kHz.' }
      ]
    },
    {
      id: 'mix-automation',
      title: 'Automation, Buses and the Mix Bus',
      minutes: 45,
      summary: 'Automation for movement and emphasis, bus processing, VCAs and mix bus glue.',
      objectives: ['Automate to make the mix move', 'Process groups on buses', 'Apply mix bus compression and colour'],
      body: `
## Why automate
A static mix sounds flat. Automation makes the mix react to the song.
- **Volume**: lift the chorus slightly, push important fills, ride vocals.
- **Effects sends**: reverb swells, delay throws.
- **Filters**: open up a synth in the chorus.
- **Mutes**: remove parts for impact.
- **Panning**: movement in FX.
- **Plugin parameters**: saturation drive, distortion in drops.

## Automation modes
- **Read**: plays automation.
- **Write**: records everything you move, overwriting.
- **Touch**: writes only while you hold a control, then returns.
- **Latch**: writes while you hold and keeps the last value after release.
You can also draw automation with the mouse.

## Buses
Grouping tracks gives you control and cohesion.
- **Drum bus**: glue compression, saturation.
- **Music bus**: gentle EQ to make space for vocals.
- **Vocal bus**: shared compression or saturation for all vocals.
- **FX bus**: control all transitions with one fader.

**VCA faders** control the level of several tracks without summing audio, keeping each track's sends proportional.

## Mix bus processing
Applied on the main stereo output while mixing ("mixing into" it):
- **Glue compressor**: 1.5:1–2:1 ratio, slow attack (10–30 ms), auto release, 1–2 dB GR.
- **Subtle EQ**: gentle tilt or air.
- **Subtle saturation**: tape or console colour.
- **No limiter while mixing** for the mastering engineer (or one on a separate version for client previews only).

Add mix bus processing early (after the static mix) so your mix decisions account for it.

## Stems
For mastering or collaboration, export stems: Drums, Bass, Music, Vocals, FX, each as a stereo WAV from bar 1. With mix bus processing, render stems with the processing bypassed or tell the receiver.
`,
      steps: [
        'Add volume automation raising the chorus music bus by 1 dB.',
        'Automate a filter opening on a synth across a build.',
        'Automate a reverb swell at the end of the bridge.',
        'Use mute automation to drop the kick for one bar before the final chorus.',
        'Add glue compression on the mix bus (2:1, slow attack, auto release, 1–2 dB GR).',
        'Add subtle tape saturation on the mix bus and compare at matched level.',
        'Export stems (Drums, Bass, Music, Vocals, FX).'
      ],
      tips: ['Automate at the end of the mix when balance is solid.', 'Small automation moves (0.5–1 dB) add life without being obvious.'],
      mistakes: ['Limiting the mix you send to a mastering engineer.', 'Automation overwriting by accident in write mode.'],
      assignment: {
        title: 'Moving Mix',
        brief: 'Bring the mix to life with automation and bus processing.',
        deliverables: ['At least 6 automation moves across the song', 'Drum, music and vocal bus processing', 'Mix bus glue chain', 'Exported stems']
      },
      quiz: [
        { q: 'Which automation mode writes only while you hold a control and then returns?', a: ['Read', 'Write', 'Touch', 'Latch'], c: 2, why: 'Touch mode returns to existing automation on release.' },
        { q: 'Typical mix bus compression gain reduction is...', a: ['10–15 dB', '1–2 dB', '0.01 dB', '20 dB'], c: 1, why: 'Gentle glue is the goal.' },
        { q: 'What does a VCA fader do?', a: ['Adds distortion', 'Controls several tracks\' levels without summing audio', 'Records vocals', 'Pans the mix'], c: 1, why: 'VCAs move the faders of a group proportionally.' }
      ]
    },
    {
      id: 'mix-translation',
      title: 'Final Checks, Translation and Revisions',
      minutes: 45,
      summary: 'Reference checks, mono and small speakers, the car test, fresh ears, client revisions and export settings.',
      objectives: ['Run a full translation checklist', 'Manage revisions with clients', 'Export mixes correctly for mastering'],
      body: `
## The final checklist
1. **Reference A/B** at matched loudness: vocal level, kick/bass, brightness, width, reverb.
2. **Mono check**: nothing important disappears.
3. **Small speaker** (phone or cheap speaker): vocal clear, bass audible.
4. **Car test**: low end not boomy, vocal clear at driving volume.
5. **Earbuds**: harshness, sibilance and stereo balance.
6. **Low volume**: balance still right.
7. **Loud volume (briefly)**: nothing painful.
8. **Fresh ears**: listen the next morning before changing anything.
9. **Full song from start to end** without stopping: does the energy flow?
10. **Technical**: no clipping, no clicks, no unwanted noises, correct start and end.

## Taking notes
Listen like a fan, write notes with timestamps ("1:32 snare too loud"), then fix them all in one session. Avoid tweaking while listening for enjoyment.

## Revisions with clients
- Send mixes as **high-quality MP3 or WAV with a clear version name** (Song_Mix_v2).
- Ask for timestamped notes.
- Agree the number of included revisions up front (often 2–3).
- Keep every version and your session saved per version.
- Recall: save your session so you can recall the mix exactly.

## Export settings for mastering
- **WAV, 24-bit (or 32-bit float), the session's sample rate.**
- **No limiter or clipping on the master** (unless it is part of the sound; then tell the mastering engineer).
- Peaks around **-6 to -3 dBFS** (headroom).
- Include a little silence at the start and let the tail finish at the end.
- Also export: instrumental, a cappella, clean version (if explicit), TV mix (instrumental plus backing vocals), and stems if needed.

## Mix versions for artists
| Version | Contents |
|---|---|
| Main mix | Everything |
| Instrumental | No vocals |
| A cappella | Vocals only |
| Clean | Explicit words muted/replaced |
| TV / performance | Instrumental + backing vocals (artist sings lead live) |
| Stems | Grouped audio files for remixes, live, sync |
`,
      steps: [
        'Run all 10 checklist items on your current mix and write timestamped notes.',
        'Fix all notes in one session.',
        'Rest overnight and listen again with fresh ears before final changes.',
        'Export the main mix at 24-bit WAV without a limiter, peaks around -6 dBFS.',
        'Export instrumental, a cappella and TV versions.',
        'Send the mix to someone and ask for timestamped feedback.'
      ],
      tips: ['A mix is done when changes stop making it better, not when it is perfect.', 'Keep a personal checklist file and refine it with every mix.'],
      mistakes: ['Endless tweaking without a fresh-ear break.', 'Exporting with a limiter for mastering.', 'Losing track of versions.'],
      assignment: {
        title: 'Mix Delivery',
        brief: 'Deliver a mix like a professional mix engineer.',
        deliverables: ['Completed 10-point checklist with notes', 'Main mix exported for mastering', 'Instrumental, a cappella and TV versions', 'Feedback received and one revision completed']
      },
      quiz: [
        { q: 'Why check in mono?', a: ['Mono is louder', 'Many systems play mono and phase problems can make parts disappear', 'It adds bass', 'It is required by law'], c: 1, why: 'Phones, clubs and smart speakers are often mono.' },
        { q: 'What should be on the master when exporting for mastering?', a: ['A loud limiter', 'No limiter, with headroom', 'Heavy reverb', 'Nothing should be exported'], c: 1, why: 'The mastering engineer needs dynamics and headroom.' },
        { q: 'What is a TV mix?', a: ['A mix for television only', 'Instrumental plus backing vocals for live performance', 'A mono mix', 'A louder mix'], c: 1, why: 'Artists sing the lead live over it.' }
      ]
    },
    {
      id: 'mix-project',
      title: 'Semester Project: Mix Three Songs',
      minutes: 1200,
      project: true,
      summary: 'Mix three songs in different genres, including one professional multitrack, to a release standard.',
      objectives: ['Mix consistently across genres', 'Compare your work against professional references'],
      body: `
## The brief
Mix three songs:
1. **Your Semester 5 song.**
2. **A free professional multitrack** from the Cambridge-MT "Mixing Secrets" multitrack library (free for education; see Library), in a genre you know.
3. **A multitrack in a genre you do not know.**

For each song:
- Choose 2 references.
- Follow the full workflow: prep, gain staging, static mix, processing, space, automation, mix bus, checks.
- Deliver main mix and alternate versions.
- Write a short mix report: problems found, how you solved them, what you would do differently.

## Self-assessment
Rate each mix 1–5 on: balance, low end, vocal clarity, depth, width, translation, emotion. Compare with references at matched loudness.

## Get feedback
Post one mix in a feedback community and ask specific questions.
`,
      steps: ['Song 1 mixed and checked', 'Song 2 (Cambridge-MT multitrack) mixed and checked', 'Song 3 (new genre) mixed and checked', 'Alternate versions exported', 'Mix reports written', 'Feedback received'],
      assignment: {
        title: 'Mixing Portfolio',
        brief: 'Three mixes that become the start of your mixing portfolio.',
        deliverables: ['3 final mixes (24-bit WAV)', 'Alternate versions for each', 'A mix report per song', 'Self-assessment scores', 'Feedback from at least one other person']
      },
      quiz: [
        { q: 'Where can you get free professional multitracks for practice?', a: ['Ripping YouTube videos', 'The Cambridge-MT Mixing Secrets library', 'Streaming apps', 'Radio recordings'], c: 1, why: 'Cambridge-MT offers multitracks for education.' },
        { q: 'Why mix a genre you do not know?', a: ['It is easier', 'It broadens your skills and taste', 'Clients demand it', 'No reason'], c: 1, why: 'New genres reveal new techniques and challenge your ears.' }
      ]
    }
  ]
});
