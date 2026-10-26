(function () {
  // Each genre becomes a full lesson: facts, production guide, step-by-step build,
  // assignment and an auto-generated quiz. `pattern` loads into the Drum Machine.
  const GENRES = [
    {
      id: 'boom-bap', name: 'Boom Bap', family: 'Hip-Hop & Urban', bpm: [85, 95], feel: 'Swung 16ths (56–62%)', key: 'Minor; jazz and soul sample keys',
      origins: 'New York, late 1980s–1990s. The golden age of hip-hop, built on samplers like the E-mu SP-1200 and Akai MPC.',
      sig: 'Swung, hard-hitting sampled drums with chopped soul and jazz samples',
      drums: 'Punchy kick and a hard, cracking snare on 2 and 4 (the "boom" and the "bap"). Kicks fall in syncopated spots. Hats in swung 8ths or 16ths. Drums often come from vinyl breaks, layered and saturated.',
      bass: 'A deep sine or sampled upright/electric bass that follows the kick pattern and the sample\'s root notes.',
      harmony: 'Chopped loops of soul, jazz and funk records; minor 7th and 9th chords; short 1–2 bar loops that repeat hypnotically.',
      sounds: ['Vinyl drum breaks', 'Chopped soul or jazz samples', 'Horn stabs', 'DJ scratches', 'Upright or sine bass', 'Vinyl crackle'],
      structure: 'Intro (4–8) | Hook (8) | Verse (16) | Hook (8) | Verse (16) | Hook (8) | Outro',
      mix: 'Drums loud, upfront and saturated. High-pass the sample around 100–150 Hz so the bass and kick own the low end. Vocals dry, centred and loud.',
      artists: ['DJ Premier', 'Pete Rock', 'J Dilla', 'Large Professor', 'The Alchemist', '9th Wonder', 'Madlib'],
      challenge: 'Chop a sample (royalty-free or self-recorded) into at least 6 slices and replay them in a new order.',
      pattern: { bpm: 90, swing: 58, kick: 'x......x..x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.xo' }
    },
    {
      id: 'trap', name: 'Trap', family: 'Hip-Hop & Urban', bpm: [130, 170], feel: 'Half-time (snare on beat 3)', key: 'Minor, harmonic minor, Phrygian',
      origins: 'Atlanta, early 2000s (T.I., Gucci Mane, Zaytoven, Lex Luger), then global through Metro Boomin, Southside and 808 Mafia.',
      sig: 'Rapid hi-hat rolls over long, sliding 808s in half-time',
      drums: 'Short punchy kick, clap or snare on beat 3 of each bar (half-time), hi-hats in 8ths or 16ths with 32nd rolls and triplets at phrase ends, occasional open hats, sparse percussion.',
      bass: 'Long tuned 808s following the kick rhythm, with glides up or down an octave at phrase endings. Saturated for small speakers.',
      harmony: 'Dark minor loops of 2–4 chords; harmonic minor melodies; bells, plucks, piano, flutes, choirs and strings playing simple, memorable motifs.',
      sounds: ['Tuned 808 with glide', 'Bells and plucks', 'Dark piano', 'Choir pads', 'Flute melodies', 'Producer tag'],
      structure: 'Intro (4–8, often melody only) | Hook (16) | Verse (16) | Hook (16) | Verse (16) | Hook (16) | Outro',
      mix: 'Loud kick and 808 with clipping on the drum bus. Crisp, slightly quieter hats. Melodies filtered or low-passed to leave room for vocals. Vocals bright and often hard-tuned.',
      artists: ['Metro Boomin', 'Southside', 'Lex Luger', 'Zaytoven', 'Wheezy', 'Pi\'erre Bourne', 'TM88'],
      challenge: 'Include a hat roll or triplet every 4 bars and at least two 808 glides per 8 bars.',
      pattern: { bpm: 140, swing: 50, kick: 'x.........x..x..', clap: '........x.......', chh: 'x.x.x.x.x.xxx.x.', ohh: '..............x.', sub: 'x.........x..x..' }
    },
    {
      id: 'drill', name: 'Drill', family: 'Hip-Hop & Urban', bpm: [138, 145], feel: 'Half-time with syncopated snares', key: 'Dark minor, harmonic minor, Phrygian',
      origins: 'Chicago drill in the early 2010s (Chief Keef, Young Chop). UK drill grew in South London in the mid-2010s and inspired Brooklyn drill (Pop Smoke).',
      sig: 'Sliding 808s and syncopated, off-kilter snares',
      drums: 'Snare on beat 3 plus extra syncopated snare hits that land just before or after the expected beat. Hi-hats in skippy, triplet-feel patterns with gaps. Kicks sparse; the 808 does most of the low-end work.',
      bass: 'Gliding 808s are the signature: frequent slides between notes, often in unusual intervals, creating a melodic bassline.',
      harmony: 'Eerie minor melodies with harmonic minor or Phrygian colour: dark strings, piano, choirs, bells and flutes.',
      sounds: ['Gliding 808', 'Dark string ostinatos', 'Haunting piano', 'Choir pads', 'Syncopated snares', 'Skippy hats'],
      structure: 'Intro (4–8) | Hook (16) | Verse (16) | Hook (16) | Verse (16) | Hook (16) | Outro',
      mix: 'Prominent, gritty 808 with saturation. Snares sharp and present. Melodies dark and wide. Vocals aggressive and upfront.',
      artists: ['Chief Keef', 'Young Chop', 'M1OnTheBeat', 'AXL Beats', '808Melo', 'Pop Smoke', 'Headie One'],
      challenge: 'Write an 808 line with a glide on at least every second note and a snare pattern that varies between bar 1 and bar 2.',
      pattern: { bpm: 142, swing: 50, kick: 'x.........x.....', snare: '........x.....x.', chh: 'x..x..x.x..x..x.', sub: 'x.....x...x...x.' }
    },
    {
      id: 'lofi', name: 'Lo-fi Hip-Hop', family: 'Hip-Hop & Urban', bpm: [70, 90], feel: 'Heavy swing, drunk drums', key: 'Major 7 and minor 7 harmony; often relaxed keys',
      origins: 'Inspired by J Dilla and Nujabes; popularised by 24/7 YouTube study streams in the mid-2010s.',
      sig: 'Dusty, swung drums with jazzy 7th chords and vinyl/tape texture',
      drums: 'Soft, dusty kicks and snares, rimshots, heavily swung or unquantised hats. Snares slightly behind the beat for a lazy feel.',
      bass: 'Warm sine, upright or soft electric bass with simple root movement.',
      harmony: 'Jazzy 7th and 9th chords, ii–V–I movement, neo-soul voicings on Rhodes, piano or jazz guitar.',
      sounds: ['Rhodes / electric piano', 'Jazz guitar', 'Vinyl crackle', 'Tape wobble', 'Rain or room foley', 'Filtered samples'],
      structure: 'Loop-based, 2–3 minutes: Intro | A (8–16) | B (8–16) | A | Outro, usually instrumental',
      mix: 'Rolled-off highs (low-pass around 8–12 kHz), saturation and tape wobble, gentle sidechain, low loudness (around -12 to -14 LUFS).',
      artists: ['Nujabes', 'J Dilla', 'Jinsang', 'Tomppabeats', 'idealism', 'Kupla', 'potsu'],
      challenge: 'Leave the drums unquantised (or apply heavy swing) and add vinyl and tape texture.',
      pattern: { bpm: 82, swing: 62, kick: 'x......x..x.....', snare: '....x.......x..o', chh: 'x.xox.xox.xox.xo', perc: '..........x.....' }
    },
    {
      id: 'rnb', name: 'R&B / Neo-Soul', family: 'Hip-Hop & Urban', bpm: [60, 100], feel: 'Laid-back, often with double-time hats', key: 'Extended chords; major and minor',
      origins: 'From 1940s rhythm and blues to 1990s contemporary R&B (Timbaland, The Neptunes), neo-soul (D\'Angelo, Erykah Badu, the Soulquarians) and modern alt-R&B (Frank Ocean, SZA, The Weeknd).',
      sig: 'Lush extended chords and layered vocal harmonies over a smooth, laid-back groove',
      drums: 'Crisp kicks, snaps, rimshots and claps; neo-soul uses loose, behind-the-beat live-feel drums; modern R&B borrows trap hats and 808s.',
      bass: 'Warm synth bass (Moog-style), 808, or electric bass playing melodic lines with chromatic passing notes.',
      harmony: 'Major 7, minor 9, 11th and 13th chords; chromatic and gospel-influenced movement; ii–V progressions.',
      sounds: ['Rhodes and Wurlitzer', 'Warm pads', 'Clean electric guitar', 'Vocal harmony stacks', 'Snaps and rimshots', 'Smooth synth bass'],
      structure: 'Intro | Verse | Pre-chorus | Chorus | Verse | Pre-chorus | Chorus | Bridge | Chorus | Outro',
      mix: 'Vocals lush, airy and wide with long reverbs; warm low end; smooth top end without harshness.',
      artists: ['Timbaland', 'The Neptunes', 'Jam & Lewis', 'J Dilla', 'Frank Ocean', 'SZA', 'Daniel Caesar'],
      challenge: 'Use at least three chord types beyond basic triads (maj7, m9, 11th or 13th) and stack a 3-part vocal harmony.',
      pattern: { bpm: 76, swing: 56, kick: 'x......x.x......', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', perc: '...........x....', sub: 'x......x.x......' }
    },
    {
      id: 'phonk', name: 'Phonk', family: 'Hip-Hop & Urban', bpm: [120, 145], feel: 'Driving, aggressive', key: 'Minor and Phrygian cowbell riffs',
      origins: 'Rooted in 1990s Memphis rap and Houston chopped-and-screwed tapes; revived on SoundCloud in the 2010s; drift phonk exploded on social media in the early 2020s.',
      sig: 'Distorted 808s with a melodic 808 cowbell riff',
      drums: 'TR-808 kits: hard distorted kicks, snappy claps on 2 and 4, rolling hats. The 808 cowbell plays the main melody.',
      bass: 'Heavily distorted 808s that follow the kick.',
      harmony: 'Short minor or Phrygian riffs played on cowbell; dark, simple, repetitive.',
      sounds: ['808 cowbell melody', 'Distorted 808', 'Memphis-style vocal chops (clear any samples)', 'Tape saturation', 'Rolling hats'],
      structure: 'Intro (8) | Drop (16) | Break (8) | Drop (16) | Outro; short tracks of 2–2:30',
      mix: 'Aggressive, saturated and very loud. Cowbell bright and present. Low end distorted but controlled.',
      artists: ['Three 6 Mafia', 'DJ Smokey', 'Kordhell', 'Ghostface Playa', 'DVRST', 'INTERWORLD'],
      challenge: 'Write a cowbell riff that is the main hook, and distort the 808 without losing the sub.',
      pattern: { bpm: 130, swing: 50, kick: 'x.....x...x.....', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', perc: 'x..x..x...x.x.x.', sub: 'x.....x...x.....' }
    },
    {
      id: 'pop', name: 'Pop', family: 'Pop & Mainstream', bpm: [95, 125], feel: 'Straight, tight', key: 'Major or minor; singable diatonic progressions',
      origins: 'Always evolving; modern pop is shaped by songwriter-producer teams like Max Martin, Jack Antonoff and Finneas.',
      sig: 'Vocal-first production with an early, repeated chorus hook',
      drums: 'Tight, punchy programmed drums with claps or snaps; often a mix of electronic and acoustic sounds.',
      bass: 'Synth bass or bass guitar locking with the kick; simple and supportive.',
      harmony: 'Diatonic progressions (I–V–vi–IV, vi–IV–I–V), clear chord changes, strong melodic hooks.',
      sounds: ['Piano', 'Modern synths and plucks', 'Guitar', 'Vocal chops', 'Big layered vocals', 'Claps and snaps'],
      structure: 'Intro (≤10 s) | Verse | Pre | Chorus (by about 0:45–1:00) | Post-chorus | Verse | Pre | Chorus | Bridge | Chorus',
      mix: 'Vocal-forward, bright, polished, compressed, wide; loud masters (around -7 to -9 LUFS).',
      artists: ['Max Martin', 'Jack Antonoff', 'Finneas', 'Ryan Tedder', 'Ian Kirkpatrick', 'Louis Bell'],
      challenge: 'Get to the chorus within 60 seconds and add a post-chorus hook.',
      pattern: { bpm: 116, swing: 50, kick: 'x.......x.x.....', clap: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.......x.x.....' }
    },
    {
      id: 'kpop', name: 'K-Pop', family: 'Pop & Mainstream', bpm: [90, 140], feel: 'Switches between sections', key: 'Often changes between sections',
      origins: 'South Korea, 1990s onward; global since the 2010s. Built by in-house and international production teams writing for idol groups.',
      sig: 'Genre switch-ups within one song, with dance breaks and chant hooks',
      drums: 'Changes by section: trap in verses, four-on-the-floor or EDM in choruses, half-time in bridges, a dedicated dance break.',
      bass: 'Varies per section: 808s, synth bass, EDM bass drops.',
      harmony: 'Pop progressions with dramatic changes, key changes and pre-chorus lifts.',
      sounds: ['EDM drops', 'Trap verses', 'Group vocal stacks', 'Chant hooks', 'Rap sections', 'Big risers and impacts'],
      structure: 'Intro | Verse (rap) | Pre | Chorus | Post-chorus/drop | Verse 2 | Pre | Chorus | Bridge (half-time or key change) | Dance break | Final chorus',
      mix: 'Very bright, dense and loud with many vocal layers; each member\'s part clearly audible.',
      artists: ['Teddy Park', 'Pdogg', 'Yoo Young-jin', 'Ryan S. Jhun', 'BLACKPINK', 'BTS', 'NewJeans'],
      challenge: 'Include at least three different drum feels in one song and a dedicated dance break.',
      pattern: { bpm: 124, swing: 50, kick: 'x...x...x...x...', clap: '....x.......x...', chh: 'xxxxxxxxxxxxxxxx', perc: '......x.......x.' }
    },
    {
      id: 'hyperpop', name: 'Hyperpop', family: 'Pop & Mainstream', bpm: [140, 170], feel: 'Fast, maximal', key: 'Bright major or chaotic',
      origins: 'Grew from the PC Music label (A. G. Cook, SOPHIE) in the 2010s and artists like 100 gecs and Charli XCX.',
      sig: 'Pitched, hard-tuned vocals with maximal, distorted, glitchy production',
      drums: 'Trap and EDM drums pushed to extremes, distorted kicks, glitchy edits.',
      bass: 'Blown-out 808s and distorted synth basses.',
      harmony: 'Sugary pop progressions colliding with noise and abrupt changes.',
      sounds: ['Pitched-up vocals', 'Hard Auto-Tune', 'Bitcrushing', 'Supersaws', 'Glitch edits', 'Distorted 808'],
      structure: 'Short songs (2–2:30) with sudden switches and drops',
      mix: 'Deliberately loud, bright and clippy; distortion is part of the sound.',
      artists: ['A. G. Cook', 'SOPHIE', '100 gecs', 'Charli XCX', 'Dylan Brady'],
      challenge: 'Pitch a vocal up 3–7 semitones with formant shift and use at least one abrupt switch-up.',
      pattern: { bpm: 160, swing: 50, kick: 'x.....x...x.....', clap: '....x.......x...', chh: 'x.xxx.x.x.xxx.x.', sub: 'x.....x...x.....' }
    },
    {
      id: 'house', name: 'House', family: 'Electronic', bpm: [118, 128], feel: 'Four-on-the-floor, light swing', key: 'Minor 7 chords, Dorian vamps',
      origins: 'Chicago, mid-1980s (Frankie Knuckles, Larry Heard, Marshall Jefferson), from disco. Branches: deep, tech, progressive, Afro, French and piano house.',
      sig: 'Four-on-the-floor kick with offbeat open hats and soulful chords',
      drums: 'Kick on every beat, clap on 2 and 4, open hats on the offbeats, shuffled 16th shakers or hats, rimshots.',
      bass: 'Groovy, syncopated basslines that sit between the kicks; organ bass in classic 90s house.',
      harmony: 'Minor 7 and 9th chord stabs, organ and piano stabs, one or two chord vamps.',
      sounds: ['909 and 808 drums', 'Rhodes and organ', 'Piano stabs', 'Vocal samples', 'Filtered disco loops'],
      structure: 'DJ intro (16–32 bars of drums) | Groove | Breakdown | Build | Main groove | DJ outro (16–32 bars)',
      mix: 'Clean kick and bass relationship, sidechain pumping on music, bright but smooth hats.',
      artists: ['Frankie Knuckles', 'Larry Heard', 'Kerri Chandler', 'Masters at Work', 'Daft Punk', 'Fisher', 'Black Coffee'],
      challenge: 'Make DJ-friendly 16-bar drum-only intro and outro sections.',
      pattern: { bpm: 124, swing: 54, kick: 'x...x...x...x...', clap: '....x.......x...', chh: 'xx.xxx.xxx.xxx.x', ohh: '..x...x...x...x.', perc: '.......x......x.', sub: '..x...x...x..x.x' }
    },
    {
      id: 'techno', name: 'Techno', family: 'Electronic', bpm: [125, 140], feel: 'Driving, hypnotic', key: 'Minimal harmony; one chord or none',
      origins: 'Detroit, mid-1980s (Juan Atkins, Derrick May, Kevin Saunderson). Later Berlin clubs made it a global institution.',
      sig: 'Hypnotic, repetitive four-on-the-floor grooves with rumble bass and gradual change',
      drums: 'Relentless kick on every beat, offbeat hats, ride cymbals, sparse claps, percussion loops; "rumble" made from a reverbed, filtered kick.',
      bass: 'Rumble bass or minimal sub lines, often rhythmic rather than melodic.',
      harmony: 'Minimal: a single stab, drone or acid line; dub techno uses echoing chord stabs.',
      sounds: ['909 kick and hats', 'Rumble', 'Acid 303 lines', 'Industrial textures', 'Modular synths', 'Dub chord stabs'],
      structure: '6–8 minutes of gradual evolution: elements enter and leave every 8–32 bars; long DJ intros and outros',
      mix: 'Mono, powerful kick; controlled rumble; space and dynamics for big systems.',
      artists: ['Jeff Mills', 'Robert Hood', 'Richie Hawtin', 'Adam Beyer', 'Amelie Lens', 'Charlotte de Witte', 'Ben Klock'],
      challenge: 'Create a rumble bass from a reverbed kick and evolve one parameter slowly over 32 bars.',
      pattern: { bpm: 132, swing: 50, kick: 'x...x...x...x...', clap: '....x.......x...', ohh: '..x...x...x...x.', chh: 'xx.xxx.xxx.xxx.x', perc: '...x......x...x.' }
    },
    {
      id: 'trance', name: 'Trance', family: 'Electronic', bpm: [130, 140], feel: 'Four-on-the-floor, rolling', key: 'Emotional minor progressions',
      origins: 'Germany, early 1990s; uplifting, progressive and psytrance (Goa) branches.',
      sig: 'Supersaw leads, rolling offbeat bass and long emotional breakdowns',
      drums: 'Four-on-the-floor kick, offbeat open hats, claps on 2 and 4, snare rolls in builds.',
      bass: 'Rolling offbeat bass (or galloping 16ths in psytrance), sidechained to the kick.',
      harmony: 'Minor progressions such as i–VI–III–VII; arpeggios; big melodic leads.',
      sounds: ['Supersaw leads', 'Arpeggiated plucks', 'Gated pads', 'Big reverbs', 'Ethereal vocals'],
      structure: 'Intro (32) | Build | Main section | Breakdown (long, emotional) | Build-up | Climax | Outro',
      mix: 'Huge reverbs and delays, heavy sidechain, bright and wide leads, tight sub.',
      artists: ['Armin van Buuren', 'Paul van Dyk', 'Above & Beyond', 'Ferry Corsten', 'ATB'],
      challenge: 'Write a breakdown of at least 16 bars that introduces the main melody before the climax.',
      pattern: { bpm: 138, swing: 50, kick: 'x...x...x...x...', clap: '....x.......x...', ohh: '..x...x...x...x.', chh: 'xx.xxx.xxx.xxx.x', sub: '..x...x...x...x.' }
    },
    {
      id: 'dnb', name: 'Drum & Bass', family: 'Electronic', bpm: [170, 176], feel: 'Fast two-step breakbeat', key: 'Minor; jazzy chords in liquid',
      origins: 'UK, early 1990s, from jungle and breakbeat hardcore. Branches: liquid, neurofunk, jump-up, jungle.',
      sig: 'Fast two-step breakbeats around 174 BPM with heavy sub and reese bass',
      drums: 'Two-step: kick on 1 and the "and" of 3, snare on 2 and 4, plus ghost notes; chopped breakbeats layered on top.',
      bass: 'Reese bass, deep sub, rolling or growling neuro basses.',
      harmony: 'Liquid DnB uses lush jazzy chords; neurofunk is minimal and dark.',
      sounds: ['Chopped breaks', 'Reese bass', 'Sub bass', 'Pads', 'Vocal samples', 'Risers'],
      structure: 'Intro (32 bars) | Build | Drop (32) | Breakdown | Build | Drop 2 (32) | Outro',
      mix: 'Punchy, cracking snare; mono sub; controlled mid-bass; loud masters.',
      artists: ['Goldie', 'LTJ Bukem', 'Andy C', 'Noisia', 'Netsky', 'Sub Focus', 'Wilkinson'],
      challenge: 'Layer a chopped break with programmed two-step drums and design a reese bass.',
      pattern: { bpm: 174, swing: 50, kick: 'x.........x.....', snare: '....x..o....x...', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.......x.x.....' }
    },
    {
      id: 'dubstep', name: 'Dubstep', family: 'Electronic', bpm: [140, 140], feel: 'Half-time (snare on beat 3)', key: 'Dark minor',
      origins: 'South London, early 2000s (Skream, Benga, Digital Mystikz). US "brostep" (Skrillex, Excision) added aggressive mid-range growls.',
      sig: 'Half-time beat at 140 BPM with sub-heavy wobble and growl basses',
      drums: 'Kick on 1, snare on 3, sparse percussion; fills and stutters before drops.',
      bass: 'Deep sub plus wobbles and growls made with wavetable, FM and resampling.',
      harmony: 'Minimal and dark, focused on bass sound design.',
      sounds: ['Wobble bass', 'Growls', 'Sub bass', 'Vocal samples', 'Risers and impacts'],
      structure: 'Intro (16–32) | Build | Drop 1 (16–32) | Breakdown | Build | Drop 2 (variation) | Outro',
      mix: 'Huge, clean sub; aggressive mid-bass processed with multiband compression; very loud masters.',
      artists: ['Skream', 'Benga', 'Mala', 'Skrillex', 'Excision', 'Virtual Riot', 'Subtronics'],
      challenge: 'Design two different bass sounds and alternate them in the drop.',
      pattern: { bpm: 140, swing: 50, kick: 'x.........x.....', snare: '........x.......', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.....x.x.....x.' }
    },
    {
      id: 'future-bass', name: 'Future Bass', family: 'Electronic', bpm: [130, 160], feel: 'Half-time', key: 'Lush major 7 and 9 chords',
      origins: 'Early-to-mid 2010s (Flume, Cashmere Cat, San Holo, Illenium, Louis The Child).',
      sig: 'Pumping supersaw chords with vocal chops in a half-time beat',
      drums: 'Snappy snare or clap on beat 3, trap-style hats, punchy kick.',
      bass: 'Sub bass under the chords, sometimes with pitch bends.',
      harmony: 'Emotional major 7 and 9 chords played by detuned supersaws with volume or filter modulation (1/8 or triplets) and pitch bends.',
      sounds: ['Supersaw chord stacks', 'Vocal chops', 'Plucks', 'Kawaii bells', 'White-noise sweeps'],
      structure: 'Intro | Verse | Build | Drop (chords) | Verse 2 | Build | Drop 2 | Outro',
      mix: 'Wide and bright, heavy sidechain, OTT-style multiband compression on chords.',
      artists: ['Flume', 'Cashmere Cat', 'San Holo', 'Illenium', 'Louis The Child'],
      challenge: 'Automate chord volume with a triplet or 1/8 rhythm and pitch-bend one chord into the drop.',
      pattern: { bpm: 150, swing: 50, kick: 'x.........x.....', clap: '........x.......', chh: 'x.x.x.x.x.xxx.x.', sub: 'x.........x.....' }
    },
    {
      id: 'ukg', name: 'UK Garage', family: 'Electronic', bpm: [130, 138], feel: 'Swung, skippy 2-step', key: 'Soulful minor 7 chords',
      origins: 'London, late 1990s, from US garage house; 2-step became the signature sound. A new wave of producers revived it in the 2020s.',
      sig: 'Swung, skippy 2-step drums with chopped, pitched R&B vocals',
      drums: 'Not four-on-the-floor: kicks skip and syncopate, snares on 2 and 4, heavily swung hats and rimshots.',
      bass: 'Sub and wobbling basslines, organ bass.',
      harmony: 'Soulful 7th chords, organ stabs.',
      sounds: ['Chopped, pitched R&B vocals', 'Organ stabs', 'Sub bass', 'Swung rimshots', 'Shakers'],
      structure: 'Intro (16) | Verse | Hook | Verse | Hook | Breakdown | Hook | Outro',
      mix: 'Bouncy drums, warm sub, vocals chopped and crisp.',
      artists: ['MJ Cole', 'Artful Dodger', 'Todd Edwards', 'El-B', 'Sammy Virji', 'Interplanetary Criminal'],
      challenge: 'Chop and pitch a vocal into a rhythmic hook and keep swing around 60%.',
      pattern: { bpm: 132, swing: 62, kick: 'x.........x.x...', snare: '....x.......x...', chh: 'x.xxx.xxx.xxx.xx', perc: '.x....x.......x.' }
    },
    {
      id: 'synthwave', name: 'Synthwave', family: 'Electronic', bpm: [80, 118], feel: 'Straight, retro', key: 'Minor; i–VI–III–VII',
      origins: '1980s nostalgia revival from the 2000s onward (Kavinsky, College, The Midnight, Gunship), boosted by the film Drive (2011).',
      sig: '1980s analog synth arps and gated-reverb snares',
      drums: 'LinnDrum and 808-style kits, big gated-reverb snares, steady 8th hats.',
      bass: 'Sequenced 8th or 16th-note arpeggiated basslines.',
      harmony: 'Minor progressions, lush pads, saxophone solos.',
      sounds: ['Juno/Jupiter-style pads', 'Arpeggiated bass', 'Brass synths', 'DX7 bells', 'Gated reverb', 'Chorus'],
      structure: 'Intro | Verse | Chorus | Verse | Chorus | Solo (sax or synth) | Chorus | Outro',
      mix: 'Wide, chorused, tape-saturated, reverb-heavy; nostalgic rather than modern-loud.',
      artists: ['Kavinsky', 'College', 'Mitch Murder', 'The Midnight', 'Gunship', 'FM-84', 'Timecop1983'],
      challenge: 'Create a gated-reverb snare and an arpeggiated bassline.',
      pattern: { bpm: 100, swing: 50, kick: 'x.......x.......', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.x.x.x.x.x.x.x.' }
    },
    {
      id: 'ambient', name: 'Ambient', family: 'Electronic', bpm: [60, 90], feel: 'Free time or very slow', key: 'Modal, static harmony',
      origins: 'Named by Brian Eno (Music for Airports, 1978); includes ambient techno, drone and modern neoclassical.',
      sig: 'Slowly evolving textures and drones with little or no beat',
      drums: 'Often none; sometimes soft pulses or textures.',
      bass: 'Drones and slow-moving low tones.',
      harmony: 'Static or slowly changing modal harmony; long chords; suspended colours.',
      sounds: ['Evolving pads', 'Granular textures', 'Field recordings', 'Tape loops', 'Long reverbs', 'Piano with heavy reverb'],
      structure: 'Long-form evolution without verses or choruses',
      mix: 'Wide, dynamic and quiet (often -16 to -20 LUFS); space matters more than punch.',
      artists: ['Brian Eno', 'Aphex Twin', 'Stars of the Lid', 'Hiroshi Yoshimura', 'Grouper', 'Tim Hecker'],
      challenge: 'Create a 3-minute piece with no drums where at least 4 elements slowly evolve via automation.',
      pattern: null
    },
    {
      id: 'afrobeats', name: 'Afrobeats', family: 'Global', bpm: [95, 115], feel: 'Syncopated, bouncy', key: 'Often major; simple loops',
      origins: 'Nigeria and Ghana, 2000s to today, blending highlife, hip-hop, dancehall and R&B. (Different from 1970s Afrobeat pioneered by Fela Kuti.)',
      sig: 'Syncopated, percussion-rich grooves with shakers and conga or log-drum patterns',
      drums: 'Syncopated kick patterns, shakers on 16ths, rim and snare on tresillo-like positions, congas and talking drum.',
      bass: 'Melodic, groovy bass with slides, often sub-heavy.',
      harmony: 'Simple 2–4 chord loops (I–IV–V, vi–IV), highlife guitar lines, piano and marimba.',
      sounds: ['Shakers', 'Congas and talking drum', 'Highlife guitar', 'Marimba or kalimba', 'Flutes', 'Call-and-response vocals'],
      structure: 'Intro | Verse | Hook | Verse | Hook | Bridge | Hook | Outro',
      mix: 'Warm and groove-focused; bright, detailed percussion; smooth vocals.',
      artists: ['Sarz', 'P2J', 'Kel-P', 'Pheelz', 'Burna Boy', 'Wizkid', 'Tems'],
      challenge: 'Program at least 3 percussion layers (shaker, conga, rim) that interlock.',
      pattern: { bpm: 104, swing: 52, kick: 'x.....x.x.....x.', clap: '....x.......x...', chh: 'xoxxxoxxxoxxxoxx', perc: '...x..x....x..x.', sub: 'x.....x.x.....x.' }
    },
    {
      id: 'amapiano', name: 'Amapiano', family: 'Global', bpm: [108, 118], feel: 'Laid-back, rolling', key: 'Jazzy 7th and 9th chords',
      origins: 'South Africa (Gauteng townships), mid-2010s, blending deep house, kwaito and jazz.',
      sig: 'The log drum: a punchy, pitched percussive bass, over jazzy piano and shakers',
      drums: 'Shakers on 16ths, soft kicks (often four-on-the-floor), syncopated rims, claps and wood percussion.',
      bass: 'The log drum: a short, pitched, percussive bass with glides, playing syncopated patterns.',
      harmony: 'Jazzy piano and Rhodes chords (7ths, 9ths), soulful and spacious.',
      sounds: ['Log drum bass', 'Shakers', 'Wood percussion', 'Jazzy piano', 'Airy pads', 'Vocal chants and whistles'],
      structure: 'Long, evolving tracks (5–7 minutes) with gradual builds and multiple sections',
      mix: 'Warm, with a big log drum, wide percussion and airy pads; groove over loudness.',
      artists: ['Kabza De Small', 'DJ Maphorisa', 'Kelvin Momo', 'MFR Souls', 'Focalistic', 'Uncle Waffles'],
      challenge: 'Design a log drum (short, pitched, percussive bass with glide) and write a syncopated pattern.',
      pattern: { bpm: 113, swing: 54, kick: 'x...x...x...x...', clap: '.......x.......x', chh: 'xoxoxoxoxoxoxoxo', perc: '...x..x...x..x..', sub: 'x..x..x...x.x...' }
    },
    {
      id: 'reggaeton', name: 'Reggaeton', family: 'Global', bpm: [88, 100], feel: 'Dembow', key: 'Minor; i–VI–III–VII',
      origins: 'Puerto Rico and Panama, 1990s, from Panamanian reggae en español and the Jamaican "Dem Bow" riddim.',
      sig: 'The dembow rhythm: kick on every beat with snares on the "a" of 1 and the "&" of 2',
      drums: 'Dembow: kick on every beat; snare/rim on the "a" of 1 and the "&" of 2 (and again in beats 3–4); hats and percussion.',
      bass: 'Deep sub following the kick or root notes.',
      harmony: 'Minor progressions (i–VI–III–VII, i–iv–v), plucks, piano and Latin guitar.',
      sounds: ['Dembow drums', 'Synth plucks', 'Latin guitar', 'Reggaeton sub', 'Vocal ad-libs', 'Risers'],
      structure: 'Intro | Verse | Pre | Chorus (coro) | Verse | Chorus | Bridge | Chorus | Outro',
      mix: 'Punchy dembow, bright Auto-Tuned vocals, loud masters.',
      artists: ['Tainy', 'Luny Tunes', 'DJ Nelson', 'Sky Rompiendo', 'Bad Bunny', 'Daddy Yankee', 'Karol G'],
      challenge: 'Program the dembow from memory and vary it every 8 bars with fills or drops.',
      pattern: { bpm: 94, swing: 50, kick: 'x...x...x...x...', snare: '...x..x....x..x.', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.......x.......' }
    },
    {
      id: 'dancehall', name: 'Dancehall', family: 'Global', bpm: [90, 110], feel: 'Syncopated 3-3-2', key: 'Minor; simple',
      origins: 'Jamaica, late 1970s–1980s; the digital era began with the "Sleng Teng" riddim (1985). Riddim culture means many artists voice the same instrumental.',
      sig: 'Riddim-based, syncopated 3-3-2 grooves with chanted vocals',
      drums: 'Syncopated digital drums built around 3-3-2 groupings; rim and snare accents.',
      bass: 'Heavy, syncopated bass.',
      harmony: 'Simple minor loops, digital synth chords.',
      sounds: ['Digital drums', 'Riddim synths', 'Airhorns', 'Chanted vocals', 'Heavy bass'],
      structure: 'Riddim-based: Intro | Chorus | Verse | Chorus | Verse | Chorus',
      mix: 'Bass-heavy, punchy drums, vocals upfront.',
      artists: ['Steely & Clevie', 'King Jammy', 'Dave Kelly', 'Rvssian', 'Vybz Kartel', 'Sean Paul', 'Popcaan'],
      challenge: 'Create a riddim (instrumental) designed for many artists to voice.',
      pattern: { bpm: 100, swing: 50, kick: 'x..x...x..x.....', snare: '....x.......x...', chh: 'x.xxx.xxx.xxx.xx', perc: '..x..x..x..x..x.' }
    },
    {
      id: 'reggae', name: 'Reggae', family: 'Global', bpm: [60, 90], feel: 'One drop, swung', key: 'Simple major or minor',
      origins: 'Jamaica, late 1960s, from ska and rocksteady. Dub (King Tubby, Lee "Scratch" Perry) pioneered remixing with delay and reverb.',
      sig: 'The one drop: kick and snare together on beat 3, with offbeat guitar skanks',
      drums: 'One drop (kick and rim together on beat 3, nothing on beat 1), rockers, and steppers (four-on-the-floor kick).',
      bass: 'Deep, melodic and prominent; the bass is the lead instrument in many reggae songs.',
      harmony: 'Simple progressions (I–IV–V, i–iv), organ "bubble" and guitar skanks on the offbeats.',
      sounds: ['Offbeat guitar skank', 'Organ bubble', 'Deep bass', 'Rimshot', 'Dub delays and spring reverb'],
      structure: 'Intro | Verse | Chorus | Verse | Chorus | Dub section | Chorus',
      mix: 'Bass loud and warm, drums dry and punchy, dub-style delays on snare and vocals.',
      artists: ['Bob Marley & the Wailers', 'Sly & Robbie', 'King Tubby', 'Lee "Scratch" Perry', 'Burning Spear', 'Chronixx', 'Koffee'],
      challenge: 'Program a one drop and create a dub section with delay and reverb throws.',
      pattern: { bpm: 76, swing: 60, kick: '........x.......', snare: '........x.......', chh: 'x.x.x.x.x.x.x.x.', perc: '....x.......x...' }
    },
    {
      id: 'bhangra', name: 'Bhangra & Punjabi', family: 'Global', bpm: [90, 110], feel: 'Swung dhol chaal', key: 'Mixolydian, major or minor over drones',
      origins: 'Folk dance music of Punjab; British Bhangra in the 1980s (Alaap, Heera, Malkit Singh); modern Punjabi pop and hip-hop crossovers today.',
      sig: 'The dhol\'s swung chaal rhythm with tumbi riffs and folk vocal hooks',
      drums: 'The dhol (bass side "dagga", treble side "tilli") plays the swung chaal rhythm; chimta, dholak and modern 808s and trap hats in crossovers.',
      bass: 'Dhol bass hits plus synth bass or 808s in modern productions.',
      harmony: 'Folk melodies over drones, often Mixolydian or major; Kafi and Bhairavi colours in emotional songs.',
      sounds: ['Dhol', 'Tumbi (one-string lute)', 'Algoze (double flute)', 'Chimta', 'Sarangi', 'Folk vocal shouts ("hoi", "balle balle")'],
      structure: 'Intro (tumbi riff) | Mukhda (hook) | Antra (verse) | Mukhda | Antra | Mukhda | Outro',
      mix: 'Dhol upfront and punchy, tumbi bright and panned, vocals forward with reverb; modern tracks add 808s.',
      artists: ['Malkit Singh', 'Panjabi MC', 'Tigerstyle', 'Diljit Dosanjh', 'Sidhu Moose Wala', 'AP Dhillon', 'Karan Aujla'],
      challenge: 'The pattern here is a simplified chaal: study real dhol players and refine it, then write a tumbi-style riff in Mixolydian.',
      pattern: { bpm: 100, swing: 62, kick: 'x.....x.x.....x.', clap: '....x.......x...', perc: '..x.x..x..x.x..x' }
    },
    {
      id: 'bollywood', name: 'Bollywood & Indian Film', family: 'Global', bpm: [70, 130], feel: 'Keherwa (8) or dadra (6) feels', key: 'Raga-based melodies with Western chords',
      origins: 'Hindi film music from the 1950s golden era (S. D. Burman, R. D. Burman) to A. R. Rahman\'s digital revolution in the 1990s and today\'s composers.',
      sig: 'Raga-flavoured melodies with tabla or dholak rhythms, strings and a vocal-first mix',
      drums: 'Tabla and dholak playing taals like keherwa (8 beats) and dadra (6 beats); modern songs layer programmed drums.',
      bass: 'Bass guitar or synth bass supporting simple harmony.',
      harmony: 'Raga-inspired melodies with ornaments (meend, gamak) over Western chord progressions.',
      sounds: ['Tabla and dholak', 'Sitar and santoor', 'Bansuri flute', 'Shehnai', 'String sections', 'Harmonium'],
      structure: 'Intro music | Mukhda (hook) | Interlude | Antara (verse) | Mukhda | Interlude | Antara | Mukhda',
      mix: 'Lead vocal dominant, lush strings and reverb, detailed percussion.',
      artists: ['R. D. Burman', 'A. R. Rahman', 'Pritam', 'Vishal–Shekhar', 'Amit Trivedi', 'Shankar–Ehsaan–Loy', 'Sachin–Jigar'],
      challenge: 'Write a melody using a thaat from Semester 2 with at least two slides (meend) and orchestral interlude music.',
      pattern: { bpm: 96, swing: 58, kick: 'x.....x...x.....', snare: '....x.......x...', perc: 'x.xxx.x.x.xxx.x.' }
    },
    {
      id: 'baile-funk', name: 'Baile Funk', family: 'Global', bpm: [125, 135], feel: 'Tamborzão 3-3-2', key: 'Minimal, chant-driven',
      origins: 'Rio de Janeiro, late 1980s–1990s, from Miami bass; the tamborzão beat arrived in the 2000s. Brazilian funk now crosses into global pop and phonk.',
      sig: 'The tamborzão: a syncopated 3-3-2 drum pattern with heavy 808s and vocal chants',
      drums: 'Tamborzão: syncopated toms, kicks and claps in 3-3-2 groupings; heavy 808 kicks.',
      bass: '808 kicks double as bass; distorted subs.',
      harmony: 'Minimal; hooks come from vocal chants and chopped samples.',
      sounds: ['Tamborzão percussion', '808 kick-bass', 'Vocal chants (MC)', 'Chopped vocal samples', 'Synth stabs'],
      structure: 'Short and punchy: Intro | Chant hook | Verse | Hook | Break | Hook',
      mix: 'Loud, raw and distorted; percussion and vocals upfront.',
      artists: ['DJ Marlboro', 'Anitta', 'Ludmilla', 'Kevin o Chris', 'MC Kevinho'],
      challenge: 'Program the tamborzão-style groove and build the hook from a chopped vocal chant.',
      pattern: { bpm: 130, swing: 50, kick: 'x..x..x...x.x...', clap: '....x.......x...', perc: '..x..x....x..x..', sub: 'x..x..x...x.x...' }
    },
    {
      id: 'rock', name: 'Rock & Indie', family: 'Band & Live', bpm: [100, 160], feel: 'Straight backbeat', key: 'Power chords, Mixolydian I–bVII–IV',
      origins: 'From 1950s rock and roll through classic rock, punk, grunge and indie; recorded with live bands.',
      sig: 'Live drums, double-tracked guitars and power chords',
      drums: 'Live kit with a strong backbeat, crash accents and fills; room mics for size.',
      bass: 'Bass guitar locking with the kick, often playing roots in 8ths.',
      harmony: 'Power chords (root + 5th), I–IV–V, I–bVII–IV, minor riffs.',
      sounds: ['Distorted guitars (double-tracked)', 'Clean arpeggiated guitars', 'Bass guitar', 'Live drums', 'Vocals with grit'],
      structure: 'Intro | Verse | Chorus | Verse | Chorus | Solo/Bridge | Chorus | Outro',
      mix: 'Guitars wide (hard left and right), big drums with room sound, vocals present in the midrange.',
      artists: ['Butch Vig', 'Rick Rubin', 'Steve Albini', 'Nigel Godrich', 'Dave Grohl'],
      challenge: 'Double-track a rhythm part (guitar or synth) and pan it hard left and right.',
      pattern: { bpm: 120, swing: 50, kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' }
    },
    {
      id: 'metal', name: 'Metal', family: 'Band & Live', bpm: [90, 220], feel: 'Double-kick drive', key: 'Phrygian, harmonic minor, chromatic',
      origins: 'From late 1960s heavy rock to thrash, death, djent and metalcore; precise, high-gain production.',
      sig: 'Down-tuned, palm-muted high-gain guitars with double-kick drums',
      drums: 'Double-kick 16ths, blast beats, snare on 2 and 4 or every beat; often sample-reinforced for consistency.',
      bass: 'Tight, often distorted bass following the guitar riffs.',
      harmony: 'Drop tunings, palm-muted chugs, tremolo picking, Phrygian and chromatic riffs, tritones.',
      sounds: ['High-gain guitars (quad-tracked)', 'Drop-tuned riffs', 'Triggered drums', 'Screams and clean vocals', 'Distorted bass'],
      structure: 'Intro riff | Verse | Chorus | Verse | Chorus | Breakdown | Solo | Chorus',
      mix: 'Tight low end, controlled guitar mids, punchy clicky kicks, precise editing.',
      artists: ['Metallica', 'Pantera', 'Meshuggah', 'Gojira', 'Architects', 'Spiritbox'],
      challenge: 'Write a palm-muted riff synced with the kick drum (amp sims are fine) and a breakdown section.',
      pattern: { bpm: 160, swing: 50, kick: 'xxxxxxxxxxxxxxxx', snare: '....x.......x...', chh: 'x...x...x...x...' }
    },
    {
      id: 'funk-disco', name: 'Funk & Disco', family: 'Band & Live', bpm: [95, 128], feel: 'Funk syncopation or disco four-on-the-floor', key: 'Dominant 9ths, minor 7 vamps',
      origins: 'Funk from James Brown, Parliament-Funkadelic and Sly & the Family Stone (1960s–70s); disco from Chic and Giorgio Moroder; revived by nu-disco and modern pop.',
      sig: 'Syncopated bass and scratchy rhythm guitar locking on "the one"',
      drums: 'Funk: syncopated kicks and ghost notes with emphasis on beat one. Disco: four-on-the-floor kick, open hats on offbeats.',
      bass: 'Slap and syncopated funk lines; octave-jumping disco basslines.',
      harmony: 'Dominant 9th and minor 7th vamps, one-chord grooves, I–IV movements.',
      sounds: ['Clavinet', 'Rhythm guitar ("chicken scratch")', 'Horn sections', 'String sections', 'Rhodes', 'Talk box'],
      structure: 'Groove-based: Intro | Verse | Chorus | Verse | Chorus | Breakdown | Chorus | Outro',
      mix: 'Groove first: punchy bass, crisp guitars, tight drums, lively horns and strings.',
      artists: ['James Brown', 'Nile Rodgers', 'Giorgio Moroder', 'Parliament-Funkadelic', 'Daft Punk'],
      challenge: 'Write an octave disco bassline and a syncopated funk guitar or clavinet part.',
      pattern: { bpm: 118, swing: 50, kick: 'x...x...x...x...', snare: '....x.......x...', chh: 'xx.xxx.xxx.xxx.x', ohh: '..x...x...x...x.' }
    },
    {
      id: 'jazz', name: 'Jazz', family: 'Band & Live', bpm: [60, 300], feel: 'Swing (triplet)', key: 'ii–V–I, extended harmony',
      origins: 'New Orleans, early 1900s; then swing, bebop, hard bop, modal jazz, fusion and today\'s nu-jazz.',
      sig: 'Swing feel with walking bass, extended harmony and improvisation',
      drums: 'Ride cymbal in a swing pattern, hi-hat foot on 2 and 4, feathered kick, snare comping.',
      bass: 'Walking bass on every beat with chromatic approach notes.',
      harmony: 'ii–V–I, extended chords (9, 11, 13), tritone substitutions, modal vamps.',
      sounds: ['Upright bass', 'Piano', 'Ride cymbal', 'Saxophone and trumpet', 'Brushes', 'Hammond organ'],
      structure: 'Head (melody) | Solos over the form | Head | Ending',
      mix: 'Natural and dynamic, minimal compression, room sound; balance like a live band.',
      artists: ['Miles Davis', 'John Coltrane', 'Herbie Hancock', 'Robert Glasper', 'Kamasi Washington', 'BADBADNOTGOOD'],
      challenge: 'Write a ii–V–I progression in two keys with a walking bassline and a swung ride pattern.',
      pattern: { bpm: 140, swing: 66, kick: 'o.......o.......', snare: '.......o.....o..', chh: 'x...x.x.x...x.x.', perc: '....x.......x...' }
    },
    {
      id: 'soul-gospel', name: 'Soul & Gospel', family: 'Band & Live', bpm: [60, 130], feel: 'Shuffle or backbeat', key: 'Rich chromatic chords',
      origins: 'Soul from 1960s Motown and Stax; gospel from the Black church, from traditional choirs to contemporary gospel. Both shape modern R&B and hip-hop.',
      sig: 'Rich, chromatic chord movement with organ, choir and call-and-response vocals',
      drums: 'Live drums with shuffle or backbeat feels and fills; gospel drummers are known for intricate fills ("gospel chops").',
      bass: 'Melodic electric bass with walk-ups and passing notes.',
      harmony: 'Gospel passing chords, ii–V–I, suspended chords, chromatic walk-ups, 7th and 9th chords.',
      sounds: ['Hammond organ with Leslie', 'Piano', 'Choir stacks', 'Tambourine and claps', 'Horns'],
      structure: 'Verse | Chorus | Verse | Chorus | Vamp (repeated, building) | Ending',
      mix: 'Warm and vocal-forward; choir wide; organ and piano full.',
      artists: ['Aretha Franklin', 'Marvin Gaye', 'Otis Redding', 'Kirk Franklin', 'Fred Hammond'],
      challenge: 'Write a chord progression with a chromatic walk-up and a vamp section that builds.',
      pattern: { bpm: 88, swing: 62, kick: 'x......x..x.....', snare: '....x.......x...', chh: 'x.xxx.xxx.xxx.xx', perc: '....x.......x...' }
    },
    {
      id: 'country', name: 'Country', family: 'Band & Live', bpm: [70, 130], feel: 'Straight or train beat', key: 'Major; I–IV–V, pentatonic melodies',
      origins: 'Southern US, 1920s; Nashville became the centre. Modern country-pop blends in pop and hip-hop production.',
      sig: 'Storytelling lyrics with acoustic guitar, pedal steel and fiddle',
      drums: 'Live drums with straightforward backbeats, train beats and brushes; modern songs add programmed hats and 808s.',
      bass: 'Root-fifth bass lines and walk-ups.',
      harmony: 'Major keys, I–IV–V, I–V–vi–IV, major pentatonic melodies.',
      sounds: ['Acoustic guitar', 'Pedal steel', 'Fiddle', 'Banjo and mandolin', 'Telecaster electric guitar', 'Dobro'],
      structure: 'Verse | Chorus | Verse | Chorus | Bridge | Chorus (story-driven)',
      mix: 'Vocal and lyrics forward, bright acoustic guitars, natural drums.',
      artists: ['Joey Moi', 'Dann Huff', 'Jay Joyce', 'Dave Cobb', 'Chris Stapleton', 'Kacey Musgraves'],
      challenge: 'Write a story lyric with a twist in the final chorus and a root-fifth bassline.',
      pattern: { bpm: 110, swing: 50, kick: 'x.......x.......', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.' }
    },
    {
      id: 'cinematic', name: 'Cinematic & Film Score', family: 'Score & Media', bpm: [60, 140], feel: 'Follows the picture', key: 'Modal; pedal tones; leitmotifs',
      origins: 'From orchestral film scores (John Williams) to hybrid orchestral-electronic scoring (Hans Zimmer, Ludwig Göransson, Hildur Guðnadóttir).',
      sig: 'Orchestral and hybrid sounds written to picture with leitmotifs, ostinatos and hit points',
      drums: 'Epic percussion (taiko, toms, hybrid hits), or none; percussion follows dramatic moments.',
      bass: 'Low strings, brass and synth drones; pedal tones.',
      harmony: 'Modal choices for emotion (Lydian wonder, Dorian heroism, minor dread), chord planing, leitmotifs.',
      sounds: ['String ostinatos', 'Brass swells and "braams"', 'Taiko and hybrid percussion', 'Risers and hits', 'Choir', 'Piano'],
      structure: 'Cues follow scenes: spotting session, hit points, transitions synced to timecode',
      mix: 'Wide and dynamic with large hall reverbs; deliver stems; film mixes are often surround or Dolby Atmos.',
      artists: ['Hans Zimmer', 'John Williams', 'Ludwig Göransson', 'Hildur Guðnadóttir', 'Ramin Djawadi', 'A. R. Rahman'],
      challenge: 'Score a 60-second video clip (with permission or your own footage), hitting at least 3 visual moments.',
      pattern: { bpm: 90, swing: 50, kick: 'x.....x.x.......', snare: '........x.......', perc: 'x..x..x.x..x..x.' }
    },
    {
      id: 'game', name: 'Video Game Music', family: 'Score & Media', bpm: [80, 180], feel: 'Loop-based, adaptive', key: 'Varies by mood',
      origins: 'From 8-bit chiptune (NES, Game Boy) to orchestral and adaptive scores for modern games.',
      sig: 'Seamless loops and adaptive layers that react to gameplay',
      drums: 'Anything from chiptune noise channels to orchestral or electronic drums.',
      bass: 'Square or triangle-wave basses in chiptune; anything in modern scores.',
      harmony: 'Memorable melodic themes, loopable progressions.',
      sounds: ['Square and triangle waves', 'Noise drums', 'Orchestral and hybrid', 'Ambient layers', 'Stingers'],
      structure: 'Seamless loops; vertical layers (add or remove instruments by intensity) and horizontal sections (switch sections by game state); stingers',
      mix: 'Clean, leaves room for dialogue and sound effects; delivered as stems for game audio middleware (Wwise, FMOD).',
      artists: ['Koji Kondo', 'Nobuo Uematsu', 'Yoko Shimomura', 'Toby Fox', 'Lena Raine', 'Mick Gordon'],
      challenge: 'Create a 30-second seamless loop with three intensity layers that can play together or separately.',
      pattern: { bpm: 150, swing: 50, kick: 'x.......x.x.....', snare: '....x.......x...', chh: 'x.x.x.x.x.x.x.x.', sub: 'x.x.x.x.x.x.x.x.' }
    }
  ];

  function range(b) { return b[0] === b[1] ? b[0] + ' BPM' : b[0] + '–' + b[1] + ' BPM'; }

  function bodyFor(g) {
    return `
## About ${g.name}
${g.origins}

**Signature:** ${g.sig}.

| Element | What to know |
|---|---|
| Tempo | ${range(g.bpm)} |
| Feel | ${g.feel} |
| Harmony & key | ${g.key} |
| Family | ${g.family} |

## Drums
${g.drums}

## Bass
${g.bass}

## Harmony and melody
${g.harmony}

## Sound palette
${g.sounds.map(function (s) { return '- ' + s; }).join('\n')}

## Arrangement template
${g.structure}

## Mixing notes
${g.mix}

## Study these names
${g.artists.join(', ')}. Search their names with "making a beat", "studio session" or "breakdown" on YouTube, and study the credits of their songs.

> **Authenticity tip:** Every genre belongs to a culture and a community. Learn its history, listen deeply, and credit your influences. The best genre producers are fans first.
`;
  }

  function stepsFor(g) {
    const b = range(g.bpm);
    const steps = [
      'Listen to at least 3 songs connected to the names in this lesson. For each, tap the BPM, find the key and write the structure with timestamps.',
      g.pattern ? 'Load the ' + g.name + ' pattern in the Drum Machine (button above). Mute rows one at a time to hear what each part contributes.' : 'Listen to one ambient piece with your eyes closed and write down every texture you hear and when it changes.',
      'Create a new project at a tempo inside ' + b + ' and choose a key (' + g.key + ').',
      g.pattern ? 'Program the drums in your DAW from the pattern, then change at least two things to make it yours.' : 'Build a drone or pad bed that lasts the whole piece.',
      'Write the bass: ' + g.bass.charAt(0).toLowerCase() + g.bass.slice(1),
      'Write the harmony and melody: ' + g.harmony.charAt(0).toLowerCase() + g.harmony.slice(1),
      'Pick or design at least 3 sounds from the sound palette.',
      'Arrange using the template: ' + g.structure,
      'Mix following the mixing notes and compare with a reference at matched loudness.',
      'Export, then write 3 things that make your track sound authentic and 1 thing to improve.'
    ];
    return steps;
  }

  const lessons = GENRES.map(function (g) {
    return {
      id: 'g-' + g.id,
      genre: g,
      title: g.name,
      minutes: 240,
      summary: g.sig + '.',
      objectives: [
        'Hear and describe the defining traits of ' + g.name,
        'Program its drums, bass and harmony from scratch',
        'Arrange and mix a track that sounds authentic to the genre'
      ],
      body: bodyFor(g),
      steps: stepsFor(g),
      tips: [
        'Make a ' + g.name + ' reference playlist of 10 songs and keep adding to it.',
        'Recreate one existing ' + g.name + ' song note-for-note before writing your own (for study, not release).',
        'Save your best drum pattern, bass patch and chord progression as a ' + g.name + ' template.'
      ],
      mistakes: [
        'Copying only the drums and missing the arrangement, sound palette and mix style.',
        'Mixing tempos and feels from other genres without intent.',
        'Never studying the culture and history behind the music.'
      ],
      assignment: {
        title: g.name + ' Production',
        brief: 'Produce a track of at least 1:30 that a fan of ' + g.name + ' would recognise as the real thing.',
        deliverables: [
          'Reference analysis of 3 songs (BPM, key, structure)',
          'Your drum pattern and bass line built for the genre',
          g.challenge,
          'A complete arrangement following the genre template',
          'A mix compared with a reference at matched loudness',
          'Exported WAV and a self-review (authenticity score out of 10)'
        ]
      },
      quiz: [],
      tools: g.pattern ? ['drums'] : ['synth'],
      beats: g.pattern ? [Object.assign({ name: g.name }, g.pattern)] : []
    };
  });

  // Auto-generate quizzes so each genre is tested on tempo and signature.
  lessons.forEach(function (l, i) {
    const g = l.genre;
    const others = GENRES.filter(function (o) { return o.id !== g.id && range(o.bpm) !== range(g.bpm); });
    // Picks n distinct option strings so no answer appears twice.
    function pick(n, seed, key) {
      const out = [];
      for (let k = 0; out.length < n && k < others.length * 3; k++) {
        const v = key(others[(seed + k * 7) % others.length]);
        if (out.indexOf(v) === -1) out.push(v);
      }
      return out;
    }
    function shuffleIn(correct, wrong, seed) {
      const arr = wrong.slice();
      const pos = seed % (arr.length + 1);
      arr.splice(pos, 0, correct);
      return { a: arr, c: pos };
    }
    const tq = shuffleIn(range(g.bpm), pick(3, i * 3 + 1, function (o) { return range(o.bpm); }), i);
    const sq = shuffleIn(g.sig, pick(3, i * 5 + 2, function (o) { return o.sig; }), i + 1);
    const fams = ['Hip-Hop & Urban', 'Pop & Mainstream', 'Electronic', 'Global', 'Band & Live', 'Score & Media'];
    const fq = shuffleIn(g.family, fams.filter(function (f) { return f !== g.family; }).slice(0, 3), i + 2);
    l.quiz = [
      { q: 'What tempo range is typical for ' + g.name + '?', a: tq.a, c: tq.c, why: g.name + ' usually sits around ' + range(g.bpm) + ' (' + g.feel + ').' },
      { q: 'Which description best matches ' + g.name + '?', a: sq.a, c: sq.c, why: g.sig + '.' },
      { q: 'Which family does this academy group ' + g.name + ' under?', a: fq.a, c: fq.c, why: g.name + ' belongs to ' + g.family + '.' }
    ];
  });

  const intro = {
    id: 'g-method',
    title: 'How to Master Any Genre',
    minutes: 45,
    summary: 'The genre analysis method: a repeatable way to learn any style, including ones not listed here.',
    objectives: ['Deconstruct any genre into learnable parts', 'Build genre templates', 'Fuse genres intentionally'],
    body: `
## The genre analysis method
Every genre can be broken into the same ten parts. Fill this sheet for any style you want to learn:

| Part | Questions to answer |
|---|---|
| 1. Tempo and feel | BPM range? Straight or swung? Half-time? |
| 2. Drums | Where do kick and snare land? Hat pattern? Signature percussion? |
| 3. Bass | Sub, 808, bass guitar, synth? Rhythm relative to kick? |
| 4. Harmony | Major or minor? Typical progressions? Chord types? |
| 5. Melody | Instruments, scales, typical motifs? |
| 6. Sound palette | Signature instruments and textures? |
| 7. Arrangement | Section lengths, intro style, drop or chorus? |
| 8. Vocals | Rap, singing, chant? Processing style? |
| 9. Mix and master | Loudness, brightness, width, low end? |
| 10. Culture | Origins, scenes, key artists, what the community values? |

## The process
1. **Immerse**: listen to 20+ songs in the genre for a week.
2. **Analyse**: fill the sheet for 3 representative songs.
3. **Recreate**: rebuild one song as closely as possible (for study only).
4. **Template**: save a DAW template with drums, bass, sounds and buses.
5. **Create**: produce an original track.
6. **Feedback**: share it with fans of the genre and ask what feels authentic.

## Genre fusion
Many hits are hybrids: Afro-house, country-trap, drill-pop, jersey club remixes, Punjabi drill. Fuse genres intentionally:
- Take the **drums** of one genre and the **harmony** of another.
- Keep one genre's **vocal style** with another's **sound palette**.
- Change one element at a time and keep what sounds fresh.

## Studying the 34 genre studios
Each studio in this semester has the facts, a drum pattern you can load into the Drum Machine, a step-by-step build, an assignment and a quiz. You do not need to complete all of them to graduate, but working producers who can switch genres earn more: more clients, more placements, more sync opportunities. Aim for **at least 12 genres** across at least four families.
`,
    steps: [
      'Choose a genre you love and fill the 10-part analysis sheet for 3 songs.',
      'Choose a genre you know nothing about and fill the sheet for 1 song.',
      'Open the Genre Studios page and browse all families.',
      'Pick 12 genres you will study this year and list them in your journal.',
      'Pick two genres to fuse and write how (drums from one, harmony from the other).'
    ],
    tips: ['A genre template saves an hour on every new project.', 'Study the original classics, not only the current hits.'],
    mistakes: ['Assuming one listen is enough to understand a genre.', 'Ignoring the culture behind the music.'],
    assignment: {
      title: 'Genre Analysis Sheets',
      brief: 'Practise the method that lets you learn any genre fast.',
      deliverables: ['3 completed analysis sheets for a favourite genre', '1 sheet for an unfamiliar genre', 'Your 12-genre study list', 'A genre fusion plan']
    },
    quiz: [
      { q: 'What is the first step of the genre analysis process?', a: ['Buy a sample pack', 'Immerse yourself by listening to many songs', 'Master the track', 'Copy a song and release it'], c: 1, why: 'Deep listening comes before analysis and creation.' },
      { q: 'Recreating an existing song is for...', a: ['Release', 'Study only', 'Selling as a beat', 'Content ID claims'], c: 1, why: 'Recreations teach technique; releasing them would infringe copyright.' },
      { q: 'One way to fuse genres is...', a: ['Mixing two songs on top of each other', 'Using the drums of one genre with the harmony of another', 'Changing the BPM randomly', 'Using only presets'], c: 1, why: 'Intentional element swaps create fresh hybrids.' }
    ],
    tools: ['drums']
  };

  const project = {
    id: 'g-project',
    title: 'Semester Project: Genre Triathlon',
    minutes: 1200,
    project: true,
    summary: 'Three finished tracks in three different genre families, plus one fusion track.',
    objectives: ['Prove versatility across genre families', 'Create an intentional genre fusion'],
    body: `
## The brief
Produce four finished, mixed and mastered tracks:
1. A track in a **Hip-Hop & Urban** genre.
2. A track in an **Electronic** genre.
3. A track in a **Global** or **Band & Live** genre.
4. A **fusion** track combining two genres from different families.

Each must be at least 2 minutes, follow the genre template, and be compared with references. Add all four to your portfolio.

## Assessment
For each track, ask a fan of that genre: "Does this sound like the real thing? What gives it away?" Use the answers to improve.
`,
    steps: ['Track 1 (Hip-Hop & Urban) finished', 'Track 2 (Electronic) finished', 'Track 3 (Global or Band & Live) finished', 'Fusion track finished', 'Genre-fan feedback collected for each'],
    assignment: {
      title: 'Genre Triathlon',
      brief: 'A versatile portfolio that shows you can produce for any client.',
      deliverables: ['4 mastered tracks', 'Analysis sheets for each genre', 'Feedback notes from genre fans', 'All tracks added to your portfolio']
    },
    quiz: [
      { q: 'How many genre families must the triathlon cover?', a: ['1', '2', 'At least 3, plus a fusion', 'All 6'], c: 2, why: 'Three families plus a fusion track prove versatility.' },
      { q: 'Who should you ask for feedback on authenticity?', a: ['Only yourself', 'Fans of that genre', 'Nobody', 'Only your family'], c: 1, why: 'Genre fans hear what makes a track authentic.' }
    ]
  };

  (window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
    id: 's8',
    no: 8,
    title: 'Genre Studios',
    tagline: '34 genres across hip-hop, pop, electronic, global, band and score music, each with a loadable beat.',
    weeks: 12,
    outcomes: [
      'Learn any genre with a repeatable analysis method',
      'Produce authentic tracks in at least 12 genres',
      'Fuse genres intentionally',
      'Build genre templates that speed up client work'
    ],
    genres: GENRES,
    // The certificate needs the method lesson, the project and at least 12 genre studios.
    required: ['g-method', 'g-project'],
    minLessons: 14,
    lessons: [intro].concat(lessons, [project])
  });
})();
