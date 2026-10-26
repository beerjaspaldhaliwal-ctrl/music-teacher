(function () {
  const A = (window.ACADEMY = window.ACADEMY || { semesters: [] });

  A.glossary = [
    ['808', 'A long, tuned, sub-heavy bass hit named after the Roland TR-808 drum machine; used as bass in trap, drill and more.'],
    ['A&R', 'Artists and Repertoire: the label role that finds artists and guides projects.'],
    ['ADSR', 'Attack, Decay, Sustain, Release: the four stages of an envelope.'],
    ['Arrangement', 'What plays when across a song: sections, layers and transitions.'],
    ['Attack (compressor)', 'How quickly a compressor reacts after the signal crosses the threshold.'],
    ['Automation', 'Recorded changes of a parameter over time, such as volume or filter cutoff.'],
    ['Aux / send / return', 'A channel that receives copies of signals from other tracks, usually for shared reverb or delay.'],
    ['Backbeat', 'Emphasis on beats 2 and 4, usually by the snare.'],
    ['Bit depth', 'The resolution of each digital audio sample; sets dynamic range (about 6 dB per bit).'],
    ['Bounce / render / export', 'Turning a project or track into an audio file.'],
    ['Buffer size', 'How much audio the computer processes at once; small for recording, large for mixing.'],
    ['Bus', 'A channel that combines several tracks so they can be processed and controlled together.'],
    ['Chaal', 'The swung driving rhythm played on the dhol in bhangra.'],
    ['Chord progression', 'A sequence of chords; often described with Roman numerals.'],
    ['Clipping', 'Distortion when a signal exceeds the maximum level; also used deliberately by clipper plugins.'],
    ['Comping', 'Building one best performance from the best parts of several takes.'],
    ['Compression', 'Reducing the dynamic range of a signal by lowering its loud parts.'],
    ['Content ID', 'YouTube\'s system that identifies copyrighted audio and video.'],
    ['Cue sheet', 'A document listing music used in a film or TV production, used to pay performance royalties.'],
    ['DAW', 'Digital Audio Workstation: the software for recording, producing, mixing and mastering.'],
    ['dB / dBFS / dB SPL', 'Decibels. dBFS is digital level (0 is maximum); dB SPL is acoustic sound pressure.'],
    ['De-esser', 'A processor that reduces harsh S and T sounds (sibilance).'],
    ['Dembow', 'The core reggaeton rhythm: kick on every beat with syncopated snares.'],
    ['DI', 'Direct input: recording an instrument straight into the interface without a mic.'],
    ['Distributor', 'A service that delivers your music to streaming platforms and collects master income.'],
    ['Dither', 'Low-level noise added when reducing bit depth to mask distortion.'],
    ['Drop', 'The high-energy payoff section of electronic music, usually after a build-up.'],
    ['Dry / wet', 'Unprocessed signal versus effected signal.'],
    ['Dynamic range', 'The difference between the quietest and loudest parts of audio.'],
    ['EQ', 'Equalisation: boosting or cutting specific frequencies.'],
    ['Exclusive licence', 'A beat licence giving one buyer sole future rights to use the beat.'],
    ['Filter', 'A processor that removes frequencies: low-pass, high-pass, band-pass, notch.'],
    ['FM synthesis', 'Synthesis where one oscillator modulates another\'s frequency.'],
    ['Foley', 'Everyday sounds recorded and used creatively.'],
    ['Formant', 'Resonant frequencies that shape the character of a voice or instrument.'],
    ['Four-on-the-floor', 'A kick drum on every beat of the bar.'],
    ['Gain staging', 'Managing levels at every stage to avoid clipping and noise.'],
    ['Ghost note', 'A very quiet drum hit between main hits.'],
    ['Glide / portamento', 'A smooth pitch slide between notes.'],
    ['Granular synthesis', 'Synthesis by splitting audio into tiny grains and rearranging them.'],
    ['Haas effect', 'Creating width by delaying one stereo side by about 5–35 ms.'],
    ['Half-time', 'A feel where the snare lands on beat 3, so the music feels half as fast.'],
    ['Harmonics', 'Frequencies above the fundamental that define timbre.'],
    ['Headroom', 'The space between the loudest peak and 0 dBFS.'],
    ['High-pass filter', 'A filter that removes low frequencies below its cutoff.'],
    ['Hook', 'The most memorable part of a song: melodic, lyrical, rhythmic or a sound.'],
    ['Insert', 'An effect placed directly in a channel\'s signal path.'],
    ['Interpolation', 'Re-recording or re-singing an existing melody rather than sampling the recording.'],
    ['ISRC', 'International Standard Recording Code: a unique ID for each recording.'],
    ['Key', 'The scale and tonic (home note) a piece is centred on.'],
    ['Latency', 'Delay between an input and hearing it through the computer.'],
    ['Lease', 'A non-exclusive beat licence with limits on use.'],
    ['LFO', 'Low-Frequency Oscillator: a slow oscillator used to modulate parameters.'],
    ['Limiter', 'A fast, high-ratio compressor that stops peaks from exceeding a ceiling.'],
    ['Log drum', 'The punchy, pitched percussive bass sound at the heart of amapiano.'],
    ['LUFS', 'Loudness Units relative to Full Scale: a measure of perceived loudness.'],
    ['Masking', 'When one sound hides another occupying similar frequencies.'],
    ['Master (recording)', 'The final sound recording; also the copyright in that recording.'],
    ['Mastering', 'The final stage that polishes, balances loudness and prepares files for release.'],
    ['Mechanical royalty', 'Royalty paid to songwriters and publishers for reproductions, including streams and downloads.'],
    ['Mid/side', 'Processing the centre (mid) and stereo difference (side) separately.'],
    ['MIDI', 'Musical Instrument Digital Interface: performance data such as note, velocity and controllers.'],
    ['Mixing', 'Balancing and processing all tracks into one stereo song.'],
    ['Mode', 'A scale built by starting the major scale on a different degree (Dorian, Lydian...).'],
    ['Mono compatibility', 'How well a stereo mix holds up when summed to mono.'],
    ['Neighbouring rights', 'Royalties for public performance and broadcast of sound recordings.'],
    ['Nyquist', 'A sample rate captures frequencies up to half its value.'],
    ['One drop', 'A reggae rhythm with kick and snare together on beat 3 only.'],
    ['Panning', 'Placing a sound between the left and right speakers.'],
    ['Parallel compression', 'Blending a heavily compressed copy of a signal with the dry original.'],
    ['Phantom power', '+48V power that condenser microphones need.'],
    ['Phase', 'The position of a wave in its cycle; out-of-phase signals cancel.'],
    ['Piano roll', 'The grid editor for MIDI notes.'],
    ['Points', 'Percentage points of master royalties paid to producers.'],
    ['Polar pattern', 'The directions a microphone picks up sound from.'],
    ['Pre-delay', 'The gap before a reverb starts, keeping the dry sound clear.'],
    ['PRO', 'Performing Rights Organisation: collects performance royalties for songwriters and publishers.'],
    ['Prosody', 'How well lyrics fit the music in stress, emotion and sound.'],
    ['Proximity effect', 'Bass boost when a directional mic is close to the source.'],
    ['Publishing', 'The business of songs (compositions): registering, licensing and collecting royalties.'],
    ['Quantise', 'Snapping notes to a rhythmic grid.'],
    ['Ratio', 'How strongly a compressor reduces signal above the threshold.'],
    ['Reese bass', 'A bass made from detuned saw waves, famous in drum & bass.'],
    ['Reference track', 'A released song you compare your work against.'],
    ['Release (compressor)', 'How quickly a compressor stops reducing gain.'],
    ['Resonance', 'A boost at a filter\'s cutoff frequency.'],
    ['Riddim', 'An instrumental used by many artists, central to dancehall culture.'],
    ['Sample rate', 'How many times per second audio is measured (44.1 kHz, 48 kHz...).'],
    ['Sidechain', 'Using one signal to control a processor on another, such as kick ducking bass.'],
    ['Split sheet', 'A signed document recording each writer\'s share of a song.'],
    ['Stems', 'Grouped audio files (drums, bass, music, vocals) of a song.'],
    ['Swing', 'Delaying every second subdivision for a bouncy, long-short feel.'],
    ['Sync licence', 'Permission to pair music with picture.'],
    ['Syncopation', 'Accents placed off the main beats.'],
    ['Tempo / BPM', 'The speed of music in beats per minute.'],
    ['Thaat', 'One of the ten parent scales of Hindustani classical music.'],
    ['Threshold', 'The level above which a compressor starts working.'],
    ['Topline', 'The vocal melody and lyrics written over an instrumental.'],
    ['Transient', 'The short, loud attack at the start of a sound.'],
    ['Tresillo', 'A 3-3-2 rhythmic grouping used across Latin, African and Caribbean music.'],
    ['True peak', 'Estimated peak level between digital samples, measured in dBTP.'],
    ['Unison', 'Stacking several detuned copies of a synth voice for thickness.'],
    ['UPC', 'Barcode identifying a release (single, EP, album).'],
    ['Velocity', 'How hard a MIDI note is played (0–127).'],
    ['Voice leading', 'Moving chord notes as little as possible between chords.'],
    ['Wavetable', 'A set of single-cycle waveforms a synth can sweep through.'],
    ['Work for hire', 'An agreement where the client owns the work you create.']
  ];

  A.resources = [
    {
      cat: 'Free DAWs and recorders',
      items: [
        { n: 'BandLab', t: 'Free', d: 'Browser and mobile DAW with online collaboration.', u: 'https://www.bandlab.com' },
        { n: 'GarageBand', t: 'Free (Apple)', d: 'Beginner DAW for Mac and iOS; projects open in Logic Pro.', u: 'https://www.apple.com/mac/garageband/' },
        { n: 'Reaper', t: 'Paid, generous trial', d: 'Affordable, lightweight, very customisable DAW.', u: 'https://www.reaper.fm' },
        { n: 'Audacity', t: 'Free', d: 'Simple audio recorder and editor.', u: 'https://www.audacityteam.org' }
      ]
    },
    {
      cat: 'Free instruments and synths',
      items: [
        { n: 'Vital', t: 'Free tier', d: 'Powerful wavetable synth with visual modulation.', u: 'https://vital.audio' },
        { n: 'Surge XT', t: 'Free, open source', d: 'Deep hybrid synth.', u: 'https://surge-synthesizer.github.io' },
        { n: 'Dexed', t: 'Free', d: 'DX7-style FM synth that loads original DX7 patches.', u: 'https://asb2m10.github.io/dexed/' },
        { n: 'Spitfire LABS', t: 'Free', d: 'Free sample-based instruments: pianos, strings, textures.', u: 'https://labs.spitfireaudio.com' },
        { n: 'Decent Sampler', t: 'Free', d: 'Free sampler with many free instrument libraries.', u: 'https://www.decentsamples.com' }
      ]
    },
    {
      cat: 'Free effects and tools',
      items: [
        { n: 'TDR Nova', t: 'Free', d: 'Dynamic EQ, great for vocals and mastering.', u: 'https://www.tokyodawn.net/tdr-nova/' },
        { n: 'Valhalla Supermassive', t: 'Free', d: 'Huge reverbs and delays.', u: 'https://valhalladsp.com/shop/reverb/valhalla-supermassive/' },
        { n: 'OTT (Xfer Records)', t: 'Free', d: 'Famous multiband compressor for EDM sound design.', u: 'https://xferrecords.com/freeware' },
        { n: 'Voxengo SPAN', t: 'Free', d: 'Spectrum analyser for checking low end and balance.', u: 'https://www.voxengo.com/product/span/' },
        { n: 'Youlean Loudness Meter', t: 'Free version', d: 'LUFS and true peak metering.', u: 'https://youlean.co/youlean-loudness-meter/' },
        { n: 'MeldaProduction free bundle', t: 'Free', d: 'Dozens of free effects and utilities.', u: 'https://www.meldaproduction.com/MFreeFXBundle' },
        { n: 'Kilohearts Essentials', t: 'Free', d: 'Free bundle of simple, high-quality effects.', u: 'https://kilohearts.com/products/kilohearts_essentials' },
        { n: 'Room EQ Wizard (REW)', t: 'Free', d: 'Room acoustic measurement software.', u: 'https://www.roomeqwizard.com' }
      ]
    },
    {
      cat: 'Samples and practice material',
      items: [
        { n: 'Cambridge-MT Mixing Secrets multitracks', t: 'Free for education', d: 'Hundreds of professional multitracks to practise mixing.', u: 'https://cambridge-mt.com/ms/mtk/' },
        { n: 'Looperman', t: 'Free', d: 'Community loops and acapellas; check each licence.', u: 'https://www.looperman.com' },
        { n: 'Freesound', t: 'Free', d: 'Creative Commons sound library; check each licence.', u: 'https://freesound.org' },
        { n: 'Splice', t: 'Subscription', d: 'Royalty-free samples, presets and plugin rent-to-own.', u: 'https://splice.com' },
        { n: 'Tracklib', t: 'Paid clearances', d: 'Sample original recordings with clearance options.', u: 'https://www.tracklib.com' }
      ]
    },
    {
      cat: 'Selling, releasing and rights',
      items: [
        { n: 'BeatStars', t: 'Marketplace', d: 'Beat store, licensing and payments.', u: 'https://www.beatstars.com' },
        { n: 'Airbit', t: 'Marketplace', d: 'Beat store and licensing.', u: 'https://airbit.com' },
        { n: 'DistroKid', t: 'Distributor', d: 'Subscription distribution with split payments.', u: 'https://distrokid.com' },
        { n: 'TuneCore', t: 'Distributor', d: 'Distribution and publishing administration.', u: 'https://www.tunecore.com' },
        { n: 'CD Baby', t: 'Distributor', d: 'Per-release distribution.', u: 'https://cdbaby.com' },
        { n: 'The MLC', t: 'US mechanicals', d: 'Collects US streaming and download mechanical royalties.', u: 'https://www.themlc.com' },
        { n: 'SoundExchange', t: 'US digital performance', d: 'Royalties for non-interactive digital radio plays of recordings.', u: 'https://www.soundexchange.com' },
        { n: 'Songtrust', t: 'Publishing admin', d: 'Registers songs worldwide and collects publishing royalties.', u: 'https://www.songtrust.com' },
        { n: 'US Copyright Office', t: 'Registration', d: 'Copyright registration in the United States.', u: 'https://www.copyright.gov' }
      ]
    },
    {
      cat: 'Performing rights organisations',
      items: [
        { n: 'ASCAP / BMI (US)', t: 'PRO', d: 'The largest US performing rights organisations.', u: 'https://www.ascap.com' },
        { n: 'SOCAN (Canada)', t: 'PRO', d: 'Performance and reproduction rights in Canada.', u: 'https://www.socan.com' },
        { n: 'PRS for Music (UK)', t: 'PRO', d: 'Performance and mechanical rights in the UK.', u: 'https://www.prsformusic.com' },
        { n: 'IPRS (India)', t: 'PRO', d: 'The Indian Performing Right Society.', u: 'https://iprs.org' },
        { n: 'APRA AMCOS (Australia/NZ)', t: 'PRO', d: 'Performance and mechanical rights in Australia and New Zealand.', u: 'https://www.apraamcos.com.au' }
      ]
    },
    {
      cat: 'Books',
      items: [
        { n: 'Mixing Secrets for the Small Studio — Mike Senior', t: 'Book', d: 'The best practical mixing book for home studios.' },
        { n: 'The Mixing Engineer\'s Handbook — Bobby Owsinski', t: 'Book', d: 'Techniques and interviews with top engineers.' },
        { n: 'Mastering Audio — Bob Katz', t: 'Book', d: 'The deep reference on mastering and loudness.' },
        { n: 'Dance Music Manual — Rick Snoman', t: 'Book', d: 'Electronic music production from synthesis to arrangement.' },
        { n: 'Music Theory for Computer Musicians — Michael Hewitt', t: 'Book', d: 'Theory taught through the DAW.' },
        { n: 'All You Need to Know About the Music Business — Donald Passman', t: 'Book', d: 'The classic guide to deals, royalties and contracts.' },
        { n: 'Art & Fear — David Bayles and Ted Orland', t: 'Book', d: 'On the creative habits that lead to finished work.' }
      ]
    },
    {
      cat: 'YouTube channels worth studying',
      items: [
        { n: 'Produce Like A Pro', t: 'Recording', d: 'Recording and studio techniques.', u: 'https://www.youtube.com/results?search_query=Produce+Like+A+Pro' },
        { n: 'In The Mix', t: 'Mixing', d: 'Clear mixing and production tutorials.', u: 'https://www.youtube.com/results?search_query=In+The+Mix+mixing' },
        { n: 'Dan Worrall', t: 'Mixing and mastering', d: 'Deep, thoughtful explanations of processing.', u: 'https://www.youtube.com/results?search_query=Dan+Worrall' },
        { n: 'Andrew Huang', t: 'Creativity', d: 'Creative production and sound design.', u: 'https://www.youtube.com/results?search_query=Andrew+Huang+music' },
        { n: 'Rick Beato', t: 'Theory and ears', d: 'Music theory, ear training and song analysis.', u: 'https://www.youtube.com/results?search_query=Rick+Beato' },
        { n: 'Venus Theory', t: 'Sound design', d: 'Sound design and creative workflows.', u: 'https://www.youtube.com/results?search_query=Venus+Theory' }
      ]
    },
    {
      cat: 'Communities for feedback',
      items: [
        { n: 'r/WeAreTheMusicMakers', t: 'Community', d: 'Large general music production community.', u: 'https://www.reddit.com/r/WeAreTheMusicMakers/' },
        { n: 'r/makinghiphop', t: 'Community', d: 'Hip-hop producers and artists.', u: 'https://www.reddit.com/r/makinghiphop/' },
        { n: 'r/edmproduction', t: 'Community', d: 'Electronic music production.', u: 'https://www.reddit.com/r/edmproduction/' },
        { n: 'Gearspace', t: 'Forum', d: 'Professional recording and gear discussion.', u: 'https://gearspace.com' },
        { n: 'KVR Audio', t: 'Forum and database', d: 'Plugin news, database and forums.', u: 'https://www.kvraudio.com' }
      ]
    }
  ];

  A.roadmap = [
    { when: 'Month 1', title: 'Foundations', sems: ['s1'], goals: ['Studio set up and DAW learned', 'First 2-minute track finished', 'Daily ear training started'] },
    { when: 'Months 2–3', title: 'Theory and beats', sems: ['s2', 's3'], goals: ['Write chords, melodies and basslines on purpose', 'Program grooves in 5+ styles', '7 beats in 7 days'] },
    { when: 'Months 4–5', title: 'Sound and songs', sems: ['s4', 's5'], goals: ['Design your own sounds and sample pack', 'Record and produce vocals', 'First fully produced song'] },
    { when: 'Months 6–8', title: 'Engineering', sems: ['s6', 's7'], goals: ['Mix 3+ songs to a release standard', 'Master an EP', 'Start offering mixes to friends'] },
    { when: 'Months 9–12', title: 'Genre range', sems: ['s8'], goals: ['12+ genre studios completed', 'Genre triathlon portfolio', 'Weekly releases or uploads'] },
    { when: 'Months 12–15', title: 'Business', sems: ['s9'], goals: ['Beat store or services launched', 'Royalty registrations done', 'First paying customers'] },
    { when: 'Months 15–18', title: 'Studio and graduation', sems: ['s10', 's11'], goals: ['Studio plan and launch', 'EP released', 'Portfolio and steady income'] }
  ];

  A.week = [
    { d: 'Mon', f: 'Lesson day', t: '45 min lesson + 15 min ear training' },
    { d: 'Tue', f: 'Assignment', t: '60 min practical assignment' },
    { d: 'Wed', f: 'Beat a day', t: '45 min speed beat + 15 min drill' },
    { d: 'Thu', f: 'Lesson day', t: '45 min lesson + 15 min sound design' },
    { d: 'Fri', f: 'Assignment', t: '60 min practical assignment' },
    { d: 'Sat', f: 'Song day', t: '2 h on a full song (finish it!)' },
    { d: 'Sun', f: 'Listen and review', t: '30 min reference listening + review journal' }
  ];

  A.drills = [
    'Recreate the drum pattern of a song you love in 15 minutes.',
    'Do 20 rounds of frequency ear training.',
    'Write 4 chord progressions in a key you never use.',
    'Design one sound from an init patch without presets.',
    'Flip a royalty-free sample into a new 4-bar loop.',
    'Balance a loop using only faders and pan for 15 minutes.',
    'Make a complete beat in 20 minutes. No tweaking allowed.',
    'Map the arrangement of a hit song with timestamps.',
    'Write a 4-line hook about something you saw today.',
    'Program 8 bars of hi-hats with velocity, swing and one roll.',
    'Tune an 808 to a new key and write a line with two glides.',
    'Do 20 rounds of interval ear training.',
    'Transcribe a bassline from a song you love.',
    'Make a riser, an impact and a downlifter from scratch.',
    'Record 5 foley sounds with your phone and turn them into drums.',
    'Mix a vocal with only EQ and compression, no reverb.',
    'Create a build-up and drop in 8 bars.',
    'Load a Genre Studio pattern and turn it into a 1-minute track.',
    'Write a melody using only 3 notes.',
    'Compare your last mix to a reference on 3 systems and write notes.',
    'Practise 10 DAW shortcuts until you can do them without looking.',
    'Write a chord progression using a borrowed chord.',
    'Make a beat in a genre you have never tried.',
    'Do 15 rounds of chord-quality ear training.',
    'Build a new vocal chain preset and test it on two voices.',
    'Write a 16-bar verse or a full chorus lyric.',
    'Post one piece of producer content and reply to every comment.',
    'Measure the LUFS of 3 songs in your genre.',
    'Program a groove in 6/8 or 7/8.',
    'Spend 15 minutes organising samples, then make a quick loop with your favourites.'
  ];
})();
