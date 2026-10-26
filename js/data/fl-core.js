/* FL Studio core lessons: how to do every job in FL Studio All Plugins Edition, placed in
   the Year 1 semesters next to the general lessons on the same topic. */
(function () {
  const A = window.ACADEMY;
  const sem = function (id) { return A.semesters.find(function (s) { return s.id === id; }); };
  function insertAfter(semId, afterId, lessons) {
    const s = sem(semId);
    const i = s.lessons.findIndex(function (l) { return l.id === afterId; });
    s.lessons.splice(i < 0 ? s.lessons.length : i + 1, 0, ...lessons);
  }

  insertAfter('s1', 'f-daw', [{
    id: 'fl-setup',
    title: 'FL Studio for Hip-Hop: Setup, Windows & Workflow',
    minutes: 90,
    summary: 'Set up FL Studio All Plugins Edition for beat-making: audio settings, the five main windows, the pattern → playlist workflow, the shortcuts you will use every day and your own hip-hop template.',
    objectives: ['Configure audio and MIDI settings correctly', 'Know what each FL Studio window does', 'Work fast with the essential shortcuts', 'Build and save a hip-hop template'],
    body: `
## Why FL Studio for hip-hop
FL Studio is the most-used DAW in hip-hop and trap. Metro Boomin, Southside, Pi'erre Bourne, Murda Beatz, Nick Mira and many drill producers use it. Its step sequencer and Piano Roll are fast for drums, melodies and 808 glides, and you get **lifetime free updates**. Your **All Plugins Edition** includes every Image-Line instrument and effect (Harmor, Sytrus, FLEX packs, Gross Beat, Pitcher, NewTone, Vocodex and more), so you can make professional beats with no extra plugins.

## Audio settings (do this first)
Open **Options → Audio settings** (F10).

| Setting | What to choose |
|---|---|
| Device | Your audio interface's **ASIO** driver. No interface? Choose **FL Studio ASIO**. |
| Buffer length | **256–512 samples** while making beats and mixing; **64–128** while recording vocals (less delay). |
| Sample rate | 44,100 or 48,000 Hz. Keep it the same in every project. |

If you hear crackles, raise the buffer. If there is a delay when you play keys, lower it.

**MIDI keyboard:** Options → MIDI settings, select your keyboard under *Input* and enable it. No keyboard? **Ctrl+T** turns your computer keyboard into a piano.

## The five windows

| Window | Key | What it does |
|---|---|---|
| Browser | Alt+F8 | Your sounds, presets, plugins and projects. Drag anything from here into the project. |
| Channel Rack | F6 | Every instrument and sample in the project, with the step sequencer for drums. |
| Piano Roll | F7 | Where you write notes: chords, melodies, 808s, hi-hat rolls. |
| Playlist | F5 | The timeline: you arrange patterns, audio and automation into a full song. |
| Mixer | F9 | Volume, effects and routing for every sound. |

## How FL Studio thinks: patterns → playlist
1. A **pattern** holds the notes for one or more channels (for example *Drums*, *Melody*, *808*). Switch patterns with the pattern selector in the toolbar; **F4** makes a new one; **F2** renames it.
2. In **PAT** mode, the play button plays the current pattern on loop. In **SONG** mode it plays the Playlist.
3. In the Playlist you paint patterns as clips to build intro, hook and verses.
4. Every channel is routed to a **Mixer insert**, where you add effects.
5. You export the song as WAV/MP3 and stems.

## Shortcuts you will use every day

| Shortcut | Action |
|---|---|
| Space | Play / stop |
| Ctrl+S / Ctrl+N | Save / save new version |
| F4 / F2 | New pattern / rename pattern |
| Ctrl+L (Channel Rack) | Route selected channels to free Mixer inserts |
| Ctrl+L (Piano Roll) | Quick legato (notes stretch to the next note) |
| Ctrl+B | Duplicate selection |
| Ctrl+Up / Down | Move selected notes an octave |
| Alt+Q / Ctrl+Q | Quantize / quick quantize |
| Alt+U | Chop (hi-hat rolls) |
| Alt+S / Alt+A / Alt+R | Strum / arpeggiate / randomize |
| P, B, C, D, E | Draw, paint, slice, delete, select tools |
| Ctrl+M | Metronome on/off |
| Ctrl+T | Typing keyboard to piano |
| Ctrl+R / Ctrl+Shift+R | Export WAV / MP3 |

## Your hip-hop template
A template saves 10–15 minutes every time you start a beat.
1. New empty project. Add channels: Kick, Snare, Clap, Hi-hat, Open hat, Perc, **808** (Sampler with your favourite 808, Mono + Porta turned on), and one FLEX instance.
2. Select them all → **Ctrl+L** to route to the Mixer. Name the inserts.
3. Make a **Drums bus** and route the drum inserts to it. Add Fruity Soft Clipper on it.
4. On the 808 insert: Fruity Parametric EQ 2 → Fruity Fast Dist (off by default) → Fruity Limiter.
5. Add a **Reverb send** insert (Fruity Reeverb 2, 100% wet) and a **Delay send** (Fruity Delay 3, 100% wet).
6. Master: Fruity Parametric EQ 2 → Fruity Limiter (ceiling −1 dB).
7. Save it into the **Templates** folder inside your FL Studio user data folder (usually *Documents/Image-Line/FL Studio/Projects/Templates*, in a sub-folder you name). It now appears under **File → New from template**.

## Never lose a beat
- Save new versions often (**Ctrl+N**). FL also keeps automatic backups (see Options → File settings).
- To move a project to another computer, use **File → Export → Project data files**: it zips the project with every sample.
- Keep your drum kits in one folder and add it to the Browser (Options → File settings → Browser extra search folders).
`,
    steps: [
      'Open Options → Audio settings and choose your ASIO driver (or FL Studio ASIO). Set the buffer to 256–512.',
      'Connect your MIDI keyboard in MIDI settings, or turn on Ctrl+T typing keyboard.',
      'Open each of the five windows with its shortcut until you know them without looking.',
      'Make two patterns (F4), name them (F2), and switch between PAT and SONG mode.',
      'Build the hip-hop template step by step and save it in the Templates folder.',
      'Start a new project from your template and make a 4-bar drum loop to test it.',
      'Add your drum-kit folder to the Browser.'
    ],
    tips: ['Learn one new shortcut a day.', 'Colour-code channels and patterns (drums red, melodies blue, 808 purple) so big projects stay readable.', 'Use the same template for every beat; update it when you find a better chain.'],
    mistakes: ['Leaving the audio device on the default Windows driver (high latency and crackles).', 'Building everything in one pattern, which makes arranging hard.', 'Not saving versions, then losing a good idea after a change.'],
    assignment: {
      title: 'Your FL Studio Hip-Hop Template',
      brief: 'Set up FL Studio like a professional and build the template you will use for every beat in this academy.',
      deliverables: ['Audio settings screenshot (ASIO driver and buffer)', 'Saved hip-hop template visible under File → New from template', 'A 4-bar test beat made from the template', 'A shortcut list written in your journal']
    },
    quiz: [
      { q: 'What is the difference between PAT and SONG mode?', a: ['There is none', 'PAT plays the current pattern on loop; SONG plays the Playlist arrangement', 'SONG mode records audio', 'PAT mode exports MP3'], c: 1, why: 'Build loops in PAT mode, arrange and listen in SONG mode.' },
      { q: 'Which audio driver should you use if you have no audio interface?', a: ['Primary sound driver', 'FL Studio ASIO', 'MIDI out', 'None'], c: 1, why: 'FL Studio ASIO gives low latency with built-in sound cards.' },
      { q: 'Where does a saved template appear?', a: ['In the Mixer', 'Under File → New from template', 'In the Channel Rack', 'In Edison'], c: 1, why: 'Projects saved in the Templates folder show up in the New from template menu.' }
    ],
    watch: [['FL Studio beginner tutorial', 'FL Studio 2024 beginner tutorial complete'], ['FL Studio hip-hop template', 'how to make FL Studio template hip hop'], ['FL Studio shortcuts', 'FL Studio shortcuts every producer should know']],
    tools: ['metronome']
  }, {
    id: 'fl-plugins',
    title: 'FL Studio All Plugins Edition: The Hip-Hop Plugin Map',
    minutes: 60,
    summary: 'Every important instrument and effect in your All Plugins Edition, and exactly what to use it for in hip-hop.',
    objectives: ['Choose the right stock instrument for any sound', 'Choose the right stock effect for any mixing job', 'Build your own favourites list of presets'],
    body: `
## Instruments

| Plugin | What it is | Use it in hip-hop for |
|---|---|---|
| **Sampler** (default channel) | Plays one sample | Drums, 808s, one-shots, vocal chops |
| **FPC** | 16 drum pads, MPC-style | Finger-drumming kits, quick drum programming |
| **Slicex** | Slices loops across the keyboard | Chopping samples (boom bap, soul, drill sample flips) |
| **DirectWave** | Multi-sample instrument | Playing your own sampled instruments across the keyboard |
| **FLEX** | Preset player with expansion packs | Fast bells, keys, pads, choirs, plucks, leads, guitars, flutes (browse packs inside FLEX) |
| **FL Keys** | Piano and electric piano | Pianos, Rhodes chords (boom bap, R&B, jazz rap, trap pianos) |
| **Sytrus** | FM / additive synth | Bells, plucks, basses, bright leads |
| **Harmor** | Additive / resynthesis synth | Huge pads, supersaws, evolving textures, wobble basses |
| **Harmless** | Simpler additive synth | Warm pads and leads |
| **3xOsc** | Simple 3-oscillator synth | Sine subs, square leads (grime), G-funk whistle, triangle bass (chiptune) |
| **Transistor Bass** | TB-303-style bass | Acid lines, squelchy synth bass, electro |
| **Toxic Biohazard, PoiZone, Sawer** | Subtractive synths | Supersaws (rage), leads, retro synths |
| **GMS** | Groove Machine Synth | Basses, leads, pads |
| **Sakura** | Physical-modelling strings | Plucked strings (tumbi-style), harp, koto-like sounds |
| **Ogun / Morphine** | Additive synths | Metallic bells, ambient textures |
| **BooBass** | Simple bass guitar | Soul, boom bap and funk basslines |
| **FL Slayer** | Electric guitar with amp | Rock, emo rap, metal |

## Effects

| Plugin | Job |
|---|---|
| **Fruity Parametric EQ 2** | EQ: high-pass, cuts, boosts. On almost every insert. |
| **Fruity Compressor** | Simple compression (drums, bass, vocals). |
| **Fruity Limiter** | Limiter, compressor (COMP mode, with sidechain) and noise gate. Master limiting and sidechain pumping. |
| **Fruity Soft Clipper** | Clipping for loud, punchy drums and masters. |
| **Maximus** | Multiband compressor/limiter for mastering; also useful for de-essing a band. |
| **Fruity Multiband Compressor** | Control specific frequency bands (808 growl, harsh vocals). |
| **Fruity Reeverb 2 / Fruity Convolver** | Reverb (algorithmic / real spaces). Recent versions also include **LuxeVerb**. |
| **Fruity Delay 3** | Delay with filtering and modulation: vocal throws, bell echoes, dub delays. |
| **Fruity Stereo Shaper** | Stereo width; also mono-checking. |
| **Fruity Blood Overdrive, Fruity Fast Dist, Distructor** | Saturation and distortion (808s, leads, rage, phonk). |
| **Fruity Squeeze** | Bit-crushing and lo-fi grit (SP-1200 / Memphis tape sound). |
| **Vintage Chorus, Vintage Phaser** | Movement and analog warmth (Rhodes, guitars, pads). |
| **Fruity Love Philter / Fruity Filter** | Filter sweeps and creative filtering. |
| **Gross Beat** | Half-time, stutters, tape stops, volume pumping. |
| **Pitcher** | Real-time pitch correction (auto-tune sound). |
| **NewTone** | Graphical pitch editing of vocals, note by note. |
| **Vocodex** | Vocoder (robot voices, talk-box style). |
| **Edison** | Audio recorder and editor: chop, reverse, normalise, detect regions. |
| **Patcher** | Save whole chains of plugins as one preset. |

## Free extras worth adding
- **Youlean Loudness Meter** (free): shows LUFS so you can match commercial loudness.
- Free orchestral libraries such as **Spitfire LABS** for cinematic strings and pianos.
- Your own drum kits: good drum samples matter more than any plugin.
`,
    steps: [
      'Open each instrument in the table once and play 5 presets on each.',
      'Save your favourite bell, piano, pad, pluck and choir presets (right-click a channel → Save channel state, or use the plugin\'s preset save) into a "My hip-hop sounds" folder.',
      'Open each effect once on a drum loop and hear what it does.',
      'Make a Patcher preset with your favourite vocal chain or 808 chain.',
      'Install Youlean Loudness Meter and put it last on the master.'
    ],
    tips: ['Most beats need only 5–8 plugins. Learn a few deeply.', 'FLEX packs are a quick way to get radio-ready melodic sounds.', 'Save channel and mixer states so your best settings are one click away.'],
    mistakes: ['Downloading dozens of free plugins before learning the stock ones.', 'Using presets without adjusting them to the beat.'],
    assignment: {
      title: 'Plugin Map Practice',
      brief: 'Know your tools well enough to pick the right one instantly.',
      deliverables: ['A favourites folder with at least 15 saved presets', 'One saved Patcher chain', 'A one-line note in your journal for each plugin in the tables']
    },
    quiz: [
      { q: 'Which plugin do you use to chop a sample across the keyboard?', a: ['Slicex', 'Fruity Limiter', 'Vocodex', 'Fruity Balance'], c: 0, why: 'Slicex slices audio and maps each slice to a key.' },
      { q: 'Which plugin gives the real-time "auto-tune" effect?', a: ['Pitcher', 'Edison', 'Fruity Squeeze', 'FPC'], c: 0, why: 'Pitcher corrects pitch in real time.' },
      { q: 'Which plugin does sidechain compression in FL Studio?', a: ['Fruity Limiter in COMP mode', 'FL Keys', 'Sakura', 'Ogun'], c: 0, why: 'Fruity Limiter\'s compressor mode accepts a sidechain input.' }
    ],
    watch: [['FL Studio stock plugins for hip-hop', 'best FL Studio stock plugins hip hop'], ['FLEX presets tutorial', 'FLEX FL Studio presets packs tutorial']],
    tools: []
  }]);

  insertAfter('s2', 't-progressions', [{
    id: 'fl-pianoroll',
    title: 'Chords & Melodies in the FL Studio Piano Roll',
    minutes: 120,
    summary: 'Write chords, voicings and melodies in the FL Piano Roll: note names, scale highlighting, the stamp tool, inversions, strum, arpeggiate, velocity and ghost notes.',
    objectives: ['Enter any chord and melody quickly and accurately', 'Voice chords smoothly with inversions', 'Use the Piano Roll tools that make parts sound human'],
    body: `
## The Piano Roll basics
- Select a channel and press **F7**. Notes run left to right (time) and bottom to top (pitch).
- **FL Studio calls middle C "C5"** (one octave higher than most theory books, which call it C4). All FL build lessons in this academy use FL names.
- Set the snap (magnet icon) to **Step** (one 16th) for most work, **Beat** for chords, **½ step** for hi-hat rolls, **1/3 beat** or **1/6 beat** for triplets.
- Tools: **P** draw, **B** paint (drag to draw many notes), **D** delete, **C** slice, **E** select. Right-click deletes a note.
- Select notes and use **Up/Down** (semitone) or **Ctrl+Up/Down** (octave). **Ctrl+B** duplicates to the right.

## Seeing the right notes
- In recent FL versions, turn on **scale highlighting** in the Piano Roll and choose your root and scale: the in-key rows are marked.
- **Ghost notes**: notes from other channels in the same pattern appear faded, so you can write a melody that fits the chords. Keep chords and melody in the same pattern while writing.

## Chords fast: the Stamp tool
Click the **stamp** icon, choose a chord type (major, minor, 7, maj7, m7, 9…) and click a root note: FL draws the whole chord. Then fix the voicing.

## Voicing chords like a pro
Root-position chords jump around. **Inversions** keep the notes close together, which sounds smoother and more professional.

| Progression in A minor | Root position | Smooth voicing (FL names) |
|---|---|---|
| Am | A4 C5 E5 | A4 C5 E5 |
| F | F4 A4 C5 | A4 C5 F5 (1st inversion) |
| C | C5 E5 G5 | G4 C5 E5 (2nd inversion) |
| G | G4 B4 D5 | G4 B4 D5 |

Rule: move each chord note to the **nearest** note of the next chord. Keep common notes on the same row.

Add colour: a **7th** (Am7 = A C E G) for R&B, jazz and boom bap; a **9th** for neo-soul and pluggnb; leave out the 5th if the chord sounds crowded.

## Making it human
| Tool | Shortcut | Use |
|---|---|---|
| Strum | Alt+S | Rolls the notes of a chord like a pianist or guitarist |
| Arpeggiate | Alt+A | Turns chords into arpeggios (emo rap guitars, trance, game music) |
| Randomize | Alt+R | Small random velocity/timing changes |
| Quantize | Alt+Q | Snaps notes to the grid (use a strength under 100% to keep feel) |
| Quick legato | Ctrl+L | Stretches each note to the next (pads, smooth leads) |
| Chop | Alt+U | Cuts notes into the snap size (rolls, stutters) |

**Velocity**: the lane at the bottom of the Piano Roll. Real players never hit every note equally: accent beat 1, soften notes in between.

## Writing a melody in FL Studio
1. Loop the chords and turn on ghost notes.
2. Hum or play a rhythm first (Ctrl+T lets you play with the computer keyboard; record with the record button set to notes).
3. Start phrases on **chord tones** (the notes of the chord under them).
4. Write a 1-bar motif, then repeat it on each chord, changing only the notes that clash.
5. Leave space: rests let the vocal and the 808 breathe.
6. Stuck? **Tools → Riff machine** in the Piano Roll generates melodic ideas you can edit.
`,
    steps: [
      'Turn on scale highlighting (or note the scale) and write a 4-chord progression in A minor with the stamp tool.',
      'Revoice it so every chord moves to the nearest notes (use the table).',
      'Add 7ths to every chord and compare the mood.',
      'Write a 1-bar melody motif over chord 1 using ghost notes, then repeat and adapt it for chords 2–4.',
      'Shape the velocities of the melody and the chords.',
      'Use Strum on the chords and Arpeggiate on a copy to hear both versions.',
      'Save the chords and melody as patterns in your template project.'
    ],
    tips: ['Keep chords between about C4 and C6 in FL names, melodies above, 808 below.', 'Copy chord progressions from songs you love (by ear), then change one chord.'],
    mistakes: ['Writing chords in root position all the time, so they jump and sound amateur.', 'Every note at full velocity.', 'Melodies that move constantly with no rests.'],
    assignment: {
      title: 'Piano Roll Fluency',
      brief: 'Prove you can write and voice chords and melodies quickly.',
      deliverables: ['Four 4-bar progressions (one each from the trap, R&B, boom bap and drill builds) entered and voice-led', 'An original melody over each', 'A screenshot of one progression showing smooth voicing', 'All saved as patterns']
    },
    quiz: [
      { q: 'Why use chord inversions?', a: ['To make chords louder', 'To keep chord notes close together for smooth movement', 'Because FL needs them', 'To change the key'], c: 1, why: 'Inversions let each note move to the nearest note of the next chord.' },
      { q: 'What do ghost notes show in the FL Piano Roll?', a: ['Deleted notes', 'Notes of other channels in the same pattern', 'Notes out of key', 'Muted drums'], c: 1, why: 'Ghost notes help you write parts that fit together.' },
      { q: 'Which tool rolls a chord like a guitarist?', a: ['Strum (Alt+S)', 'Chop (Alt+U)', 'Quantize (Alt+Q)', 'Paint (B)'], c: 0, why: 'Strum offsets the notes of each chord slightly.' }
    ],
    watch: [['FL Studio piano roll tutorial', 'FL Studio piano roll complete tutorial'], ['Chord voicings for beats', 'chord voicings inversions beat making FL Studio']],
    tools: ['piano']
  }]);

  insertAfter('s3', 'hh-mpc', [{
    id: 'fl-drums',
    title: 'Drums in FL Studio: Channel Rack, FPC & Hi-Hat Rolls',
    minutes: 120,
    summary: 'Program hip-hop drums in FL Studio: step sequencer, graph editor, swing, FPC, hi-hat rolls with Chop, pitched rolls, velocity ramps, choke groups and layering.',
    objectives: ['Program any hip-hop drum pattern in the Channel Rack', 'Make professional hi-hat rolls and triplets', 'Shape velocity, swing and choke for a human groove'],
    body: `
## The step sequencer
- Each Channel Rack row has 16 steps (1 bar). Click to add a hit, right-click to remove.
- Right-click a channel → **Fill each 2 steps** / **4 steps** to fill hats or kicks quickly.
- Open the **Graph editor** (the button at the left of the Channel Rack) to change **velocity**, pan or pitch per step: lower ghost notes to 30–40% and in-between hats to 60–75%.
- For patterns longer than one bar, drag out the step count or program in the Piano Roll.

## Swing
The **swing knob** at the top of the Channel Rack delays every second 16th. A little swing (10–25%) adds bounce; boom bap and lo-fi use more. Swing affects step-sequencer steps; for Piano Roll notes use Quantize with swing or move notes by hand.

## FPC: finger drumming
FPC is FL's MPC-style pad instrument. Drag your own samples onto its pads and play them with a MIDI pad controller or your keyboard. Record with the metronome on, then quantize to about 70–80% strength to keep the feel.

## Hi-hat rolls (trap, drill, R&B)
1. Open the hi-hat channel in the Piano Roll.
2. Set snap to **½ step** for 32nd rolls, **1/6 beat** for 16th triplets, **1/3 beat** for 8th triplets.
3. Draw one long note where the roll should go and press **Alt+U** (Chop): it is cut into the snap size.
4. **Velocity ramp**: select the roll and use **Alt+X** (Scale levels) or draw a rising line in the velocity lane.
5. **Pitched rolls**: move the last 3–4 notes up 1–3 semitones for the rising roll heard in many trap beats.
6. Combine speeds: a 16th, then triplets, then 32nds, inside one beat.

## Choke groups (open and closed hats)
A real open hat stops when the closed hat plays. In both hat channels' settings, set a **cut group** (*Cut* / *Cut by* fields) so the closed hat cuts the open hat.

## Layering
- **Snare + clap**: two channels with the same steps; turn the second one down until it adds body.
- **Kick layers**: a punchy top kick plus a sub layer, both short enough to leave room for the 808.
- Route layers to the same Mixer insert or to a Drums bus.

## The 3 + 1 rule
Make bars 1–3 the same and change bar 4 (a roll, a missing kick, an extra snare). Change something every 4 bars and add a fill every 8.
`,
    steps: [
      'Program a basic trap loop in the step sequencer (kick, clap on beat 3, 8th hats).',
      'Use the Graph editor to set hat velocities (accents and softer in-between notes).',
      'Make three hi-hat rolls in the Piano Roll: 32nds, 16th triplets and a pitched roll.',
      'Set a choke group between open and closed hats.',
      'Layer a clap with a snare and a kick with a sub layer.',
      'Program a boom bap loop with swing and ghost snares.',
      'Load 8 sounds into FPC and record a 4-bar finger-drummed pattern.'
    ],
    tips: ['Save your favourite drum patterns as score files or keep them in your template.', 'Study one producer\'s hat patterns at a time and copy them by ear.'],
    mistakes: ['Hats at 100% velocity on every step (machine-gun sound).', 'Rolls in every bar, which removes their impact.', 'Long open hats that clash with closed hats (no choke).'],
    assignment: {
      title: 'FL Drum Toolkit',
      brief: 'Build a set of drum patterns and techniques you will reuse in every beat.',
      deliverables: ['A trap loop with 3 types of hat roll', 'A boom bap loop with swing and ghost notes', 'A drill loop with off-beat snares', 'A choke group set up between hats', 'A finger-drummed FPC pattern']
    },
    quiz: [
      { q: 'What snap setting gives 16th-note triplets for a hat roll?', a: ['1/6 beat', '1 bar', 'Beat', '2 steps'], c: 0, why: 'Six notes per beat = 16th triplets.' },
      { q: 'What does a choke (cut) group do for hats?', a: ['Makes them louder', 'Lets the closed hat cut off the open hat', 'Adds reverb', 'Changes tempo'], c: 1, why: 'Cut groups imitate a real hi-hat.' },
      { q: 'Where can you edit the velocity of each step in the Channel Rack?', a: ['Graph editor', 'Mixer', 'Edison', 'Browser'], c: 0, why: 'The Graph editor shows velocity, pan and pitch per step.' }
    ],
    watch: [['FL Studio hi-hat rolls', 'hi hat rolls FL Studio tutorial'], ['FPC finger drumming', 'FPC FL Studio finger drumming tutorial']],
    tools: ['drums']
  }]);

  insertAfter('s4', 'sd-808', [{
    id: 'fl-808',
    title: '808s in FL Studio: Tuning, Glides, Design & Distortion',
    minutes: 120,
    summary: 'Everything about 808s in FL Studio: picking and tuning samples, Mono and Porta, slide notes, designing your own 808 in 3xOsc, distortion chains and making the kick and 808 work together.',
    objectives: ['Tune any 808 sample to the right key', 'Program glides with Porta and slide notes', 'Design an 808 from scratch', 'Make the 808 heard on every speaker'],
    body: `
## 1. Choose the 808
A good 808 has a clear pitch, a clean start (no click) and a long tail you can shorten. Clean 808s for R&B and melodic trap; distorted ones for drill, rage and phonk.

## 2. Tune it
Every note you draw must play at the right pitch.
1. Open the 808 channel settings. Play **C5** on its keyboard and compare with a C on FL Keys.
2. If the 808 is really an F (for example), right-click the key **F5** on the channel keyboard → **Set root note**. Now C5 plays a real C.
3. A free tuner plugin on the 808's Mixer insert helps you check.

## 3. Mono, Porta and glides
- **Channel settings → Miscellaneous functions (wrench) → Polyphony**: turn on **Mono** (only one 808 note at a time) and **Porta** (overlapping notes glide). The **Slide** knob sets the glide time.
- **Slide notes**: click the slide toggle (triangle icon) in the Piano Roll and draw a note: it bends the previous note to its pitch. The slide note's length sets the glide time. Use this for exact control.
- Common moves: slide up an octave at the end of a 4-bar loop (trap), slide on almost every note (drill), slide down a 5th for a heavy drop.

## 4. Length and envelope
In the Sampler's **Instrument** tab (volume envelope) or by note length in the Piano Roll, make 808s shorter in fast patterns and longer on beat 1. Add a 2–5 ms release to remove clicks.

## 5. Design your own 808 in 3xOsc
1. New 3xOsc: oscillator 1 **sine**, oscillators 2 and 3 volume to 0.
2. Channel settings → Instrument tab → **Pitch** envelope on: a short drop from higher to the note (gives the punch).
3. Volume envelope: no attack, long decay (1–3 s), sustain low.
4. Add **Fruity Fast Dist** or **Fruity Blood Overdrive** for harmonics, then Fruity Limiter.
5. Save the channel state as your own 808.

## 6. Make it heard on phones
A pure sine 808 vanishes on small speakers. Add **saturation** (Fruity Blood Overdrive, Fast Dist, Distructor): the harmonics let you "hear" the bass on phones. For heavy styles, use parallel distortion (a send with distortion blended under the clean 808).

## 7. Kick and 808 together
- Kick and 808 on the same beat: shorten the kick, or nudge the 808 a few ms later (Miscellaneous functions → Time → Shift).
- **Sidechain**: route the kick to the 808 insert (right-click arrow → *Sidechain to this track*), then on the 808 use **Fruity Limiter** in COMP mode with the kick as the sidechain input so the 808 ducks under the kick.
- Keep everything below about 100 Hz **mono**.

## 808 note range (FL names)

| Range | Feel |
|---|---|
| C2–E2 | Very deep (club systems) |
| F2–C3 | The sweet spot for most hip-hop |
| C#3–G3 | High 808s and drill slides |
`,
    steps: [
      'Load three different 808s and tune each with Set root note.',
      'Turn on Mono and Porta and program an 808 line with two overlapping glides.',
      'Recreate the same line using slide notes instead.',
      'Design your own 808 in 3xOsc and save the channel state.',
      'Build the distortion chain and A/B it on phone speakers.',
      'Set up kick-to-808 sidechain with Fruity Limiter.'
    ],
    tips: ['Name your 808 samples with their real note (e.g. "808_Boom_F.wav") once tuned.', 'If the key of the beat changes, re-check the 808 tuning.'],
    mistakes: ['Untuned 808s that clash with the melody.', 'Polyphonic 808s stacking into mud.', 'Too much distortion so the low end disappears.'],
    assignment: {
      title: '808 Lab',
      brief: 'Master the most important sound in modern hip-hop.',
      deliverables: ['Three tuned 808s saved as channel states', 'A trap 808 line with octave glides', 'A drill 808 line with slides on most notes', 'Your own 3xOsc 808', 'A before/after export showing distortion and sidechain']
    },
    quiz: [
      { q: 'How do you tell FL Studio the real pitch of an 808 sample?', a: ['Rename the file', 'Right-click the matching key in channel settings → Set root note', 'Use the Playlist', 'Raise the volume'], c: 1, why: 'Setting the root note makes every Piano Roll note play at the right pitch.' },
      { q: 'Why add saturation to an 808?', a: ['To make it quieter', 'To add harmonics so it is heard on small speakers', 'To tune it', 'To shorten it'], c: 1, why: 'Harmonics carry the bass on phones and laptops.' },
      { q: 'What does the Mono setting do for an 808?', a: ['Plays only one note at a time so notes do not stack', 'Removes stereo reverb', 'Exports in mono', 'Mutes it'], c: 0, why: 'Mono stops overlapping 808 notes from building up mud.' }
    ],
    watch: [['808 glides in FL Studio', '808 glide slide FL Studio tutorial'], ['Tuning 808s in FL Studio', 'how to tune 808 FL Studio root note'], ['Make an 808 in 3xOsc', 'make 808 from scratch 3xOsc FL Studio']],
    tools: ['drums', 'calc']
  }]);

  insertAfter('s5', 'hh-record-singers', [{
    id: 'fl-vocals',
    title: 'Recording & Tuning Vocals in FL Studio',
    minutes: 120,
    summary: 'Record rappers and singers in FL Studio: input routing, arming, loop recording and takes, punch-ins, editing in Edison, tuning with Pitcher and NewTone, and a stock-plugin vocal chain.',
    objectives: ['Set up FL Studio to record vocals with low latency', 'Run a smooth session with takes and punch-ins', 'Tune and process vocals with stock plugins'],
    body: `
## Setup
1. Options → Audio settings: your interface's **ASIO** driver, buffer **64–128** while recording.
2. Mixer (F9): choose an empty insert, name it *Vocal*. In the top-right of the Mixer, set its **input** to your microphone channel (for example *Input 1*).
3. Click the insert's **record arm** button. You should see the meter move when you speak. Aim for peaks around −10 to −6 dB on the meter: set the gain on your interface, not in FL.
4. Use **direct monitoring** on your interface or a low buffer so the artist hears themselves without delay.

## Recording
- Press the **record** button in the toolbar and choose to record **audio into the Playlist**. Each take appears as an audio clip.
- **Loop recording**: set a loop around the verse (select bars in the Playlist timeline). With loop recording on, each pass becomes a new take you can choose from.
- **Punch-ins**: loop just the line that needs fixing, give the artist one bar of pre-roll, record until it is right.
- Record the lead, then **doubles** (same lines again, tight), then **ad-libs** on separate tracks.

## Editing
- Comp the best parts of each take with the Slice tool (**C**) and mute the rest.
- Open a clip in **Edison** to remove breaths or noise, fade edges and normalise.
- Tighten doubles by dragging clips or slicing words to line up with the lead.

## Tuning
| Plugin | Use |
|---|---|
| **Pitcher** | Real-time correction. Set the key/scale; **Speed** fast (towards maximum) for the hard "auto-tune" sound, slower for natural correction. |
| **NewTone** | Edit note by note: drag notes to the right pitch, flatten vibrato, fix timing. Best for singers and careful work. |

## Stock vocal chain (lead rap vocal)
1. **Fruity Parametric EQ 2**: high-pass at 80–100 Hz, cut mud around 200–400 Hz if needed, gentle boost around 3–5 kHz for presence.
2. **Pitcher** (if the style uses tuning).
3. **Fruity Compressor**: ratio 3–4:1, 4–6 dB of gain reduction on loud words.
4. **De-essing**: Maximus or Fruity Multiband Compressor working only on the 5–9 kHz band to tame harsh "s" sounds.
5. **Sends**: a Reverb send (Fruity Reeverb 2 or LuxeVerb, 100% wet) and a Delay send (Fruity Delay 3, 1/4 or 1/8, 100% wet). Send small amounts.
6. Save the chain as a **mixer track state** or in **Patcher** for next time.

Doubles: same chain, panned slightly left and right and 6–10 dB quieter. Ad-libs: more delay and reverb, panned wider.
`,
    steps: [
      'Set up a Vocal insert with the correct input and arm it.',
      'Record 3 takes of a 16-bar verse using loop recording.',
      'Comp the best take and record one punch-in.',
      'Record doubles and ad-libs on separate tracks.',
      'Clean one take in Edison.',
      'Tune a sung line with Pitcher, then again with NewTone, and compare.',
      'Build the vocal chain and save it as a mixer track state.'
    ],
    tips: ['Name each track (Lead, Double L, Double R, Ad-libs) before the session.', 'Keep the session moving: fix small things later, keep the artist\'s energy now.'],
    mistakes: ['Recording too hot so the vocal clips (distorts) permanently.', 'High buffer while recording, so the artist hears a delay.', 'Over-tuning a singer who does not want the effect.'],
    assignment: {
      title: 'FL Vocal Session',
      brief: 'Record and finish a vocal on one of your beats entirely in FL Studio.',
      deliverables: ['A comped lead vocal', 'Doubles and ad-libs', 'Tuning with Pitcher or NewTone', 'Your saved vocal chain', 'An exported rough mix']
    },
    quiz: [
      { q: 'Where do you choose the microphone input in FL Studio?', a: ['On the Mixer insert\'s input selector', 'In the Browser', 'In the Piano Roll', 'In FPC'], c: 0, why: 'Each Mixer insert has an input selector at the top right of the Mixer.' },
      { q: 'Which plugin edits vocal pitch note by note?', a: ['NewTone', 'Fruity Delay 3', 'Gross Beat', 'Sakura'], c: 0, why: 'NewTone is FL\'s graphical pitch editor.' },
      { q: 'What buffer size is best while recording?', a: ['Very low (64–128)', 'Maximum', 'It does not matter', 'Exactly 2048'], c: 0, why: 'Low buffers reduce the delay the artist hears.' }
    ],
    watch: [['Recording vocals in FL Studio', 'how to record vocals FL Studio'], ['Pitcher vs NewTone', 'Pitcher NewTone FL Studio vocal tuning'], ['FL Studio stock vocal chain', 'FL Studio stock plugins vocal chain rap']],
    tools: []
  }]);

  insertAfter('s6', 'mix-intro', [{
    id: 'fl-mixer',
    title: 'Mixing a Beat in the FL Studio Mixer',
    minutes: 120,
    summary: 'Use the FL Studio Mixer like an engineer: routing, buses, sends, sidechain, gain staging, automation clips, mono checks, saved states and a master chain.',
    objectives: ['Route and organise a full beat in the Mixer', 'Use buses, sends and sidechain', 'Automate and check a mix with stock tools'],
    body: `
## Organise
- Route every channel (**Ctrl+L** in the Channel Rack). Name and colour every insert.
- **Buses**: Drums bus, Melody bus, Vocals bus. Route inserts with right-click on the arrow at the bottom of the bus → **Route to this track only**.
- **Sends**: make one Reverb insert and one Delay insert and set their effects to **100% wet**. Select a source insert (for example the snare), then left-click the small arrow at the bottom of the Reverb insert: a send knob appears on that arrow. Turn it up a little.

## Gain staging
Before effects, balance faders so the master peaks around **−6 dB** with no limiter. Mixing into a limiter hides problems.

## Balance first, then EQ, then compression
1. Volume and panning get you 80% of the way.
2. **Fruity Parametric EQ 2**: high-pass everything that does not need low end; cut before you boost.
3. **Fruity Compressor / Limiter** for control; **Fruity Soft Clipper** on the drums bus for punch.

## Sidechain
Select the kick insert, then right-click the small arrow at the bottom of the target insert (808, bass or pads) → **Sidechain to this track**. On the target (808, bass or pads), load **Fruity Limiter**, switch to **COMP**, select the sidechain input, lower the threshold. The target ducks on each kick.

## Automation
Right-click any knob → **Create automation clip**. Draw the curve in the Playlist: filter sweeps in intros, reverb throws on the last word of a line, volume rides.

## Checks
- **Mono**: put Fruity Stereo Shaper (or the insert's stereo separation knob) on the master and collapse to mono for a moment: nothing important should disappear.
- **Small speakers**: listen on phone and laptop speakers.
- **Reference**: import a commercial song into the Playlist, route it to its own insert with no effects, turn it down to match your loudness, and compare.

## Save your work
Insert menu (the arrow at the top of the insert's effect slots) → **File → Save mixer track state**. Save your best 808, drum bus and vocal chains to reuse them in every beat.

## A master chain for beats
Fruity Parametric EQ 2 (small moves) → Fruity Soft Clipper (optional) → Fruity Limiter or Maximus (ceiling −1 dB) → Youlean Loudness Meter. Typical hook loudness: trap −7 to −9 LUFS, boom bap −9 to −11, R&B −9 to −11.
`,
    steps: [
      'Route a beat to the Mixer, name and colour every insert.',
      'Create Drums, Melody and Vocals buses.',
      'Create Reverb and Delay sends and use them on at least three sounds.',
      'Gain-stage the mix so the master peaks around −6 dB with no limiter.',
      'Set up kick-to-808 sidechain.',
      'Automate a filter sweep in the intro and a reverb throw.',
      'Do mono, small-speaker and reference checks; save your best mixer track states.'
    ],
    tips: ['Mix at a low, comfortable volume.', 'Take breaks: your ears get used to problems after 30–45 minutes.'],
    mistakes: ['Inserting a separate reverb on every channel instead of using sends.', 'Boosting everything instead of cutting.', 'Judging loudness by ear without matching the reference.'],
    assignment: {
      title: 'Engineer\'s Mix in FL',
      brief: 'Mix one of your beats with a professional routing and check process.',
      deliverables: ['A routed project with buses and sends', 'Sidechain and two automation clips', 'Mono, small-speaker and reference notes', 'Saved mixer track states for drums bus, 808 and vocals', 'The exported mix']
    },
    quiz: [
      { q: 'Why use reverb on a send instead of on each insert?', a: ['It is louder', 'Sounds share one space and the mix stays cleaner and lighter on CPU', 'FL requires it', 'It removes the bass'], c: 1, why: 'Sends glue sounds into one space and are easier to control.' },
      { q: 'How do you automate a knob in FL Studio?', a: ['Right-click it → Create automation clip', 'Double-click the Browser', 'Press F4', 'Use Edison'], c: 0, why: 'Automation clips appear in the Playlist for drawing curves.' },
      { q: 'Before adding a master limiter, the master should peak around...', a: ['+3 dB', '−6 dB', '−40 dB', '0 dB exactly'], c: 1, why: 'Headroom keeps the mix clean and lets mastering work properly.' }
    ],
    watch: [['FL Studio mixer tutorial', 'FL Studio mixer routing tutorial'], ['Sidechain in FL Studio', 'sidechain Fruity Limiter FL Studio'], ['Mixing a beat in FL Studio', 'how to mix a beat FL Studio stock plugins']],
    tools: ['calc']
  }]);

  // Tell students up front that every genre is taught as a practical FL Studio build.
  const welcome = sem('s1').lessons.find(function (l) { return l.id === 'f-welcome'; });
  if (welcome) {
    welcome.body = welcome.body.replace('## How every lesson works', '## Built for FL Studio\nThe academy teaches every practical step in **FL Studio** (All Plugins Edition), using only its stock plugins:\n- **Year 1** has FL Studio lessons for setup, the plugin map, the Piano Roll, drums, 808s, recording vocals and the Mixer.\n- **Every hip-hop style** and **every elective genre** ends with a **Build It in FL Studio** lesson: the exact chords, melody, drum pattern and 808 notes (in FL note names), which plugin to load, mixer chains, the full arrangement and export. You hear the loop in the Beat Lab first, then build it yourself.\n- After each build, the genre rules show you how to write your own progressions and melodies.\n\n## How every lesson works');
  }
})();
