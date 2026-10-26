(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's10',
  no: 10,
  title: 'Opening & Running Your Studio',
  tagline: 'Plan, build, equip, price, market and grow a music studio business.',
  weeks: 6,
  outcomes: [
    'Write a studio business plan with real numbers',
    'Plan soundproofing, treatment, layout, power and ventilation',
    'Choose professional gear and design signal flow',
    'Set prices and packages that are profitable',
    'Run sessions that make clients return and refer others',
    'Market the studio locally and online, and scale it'
  ],
  lessons: [
    {
      id: 'st-plan',
      title: 'From Bedroom to Business: The Studio Plan',
      minutes: 60,
      summary: 'The four stages of studio growth, market research, startup and monthly costs, and the business plan.',
      objectives: ['Decide which studio stage fits you now', 'Research your local market', 'Write a studio business plan with break-even numbers'],
      body: `
## Four stages of a studio
| Stage | Description | Typical services |
|---|---|---|
| 1. Home producer | You make music for yourself and online buyers | Beats, mixing online |
| 2. Home studio with clients | Clients come to your treated room | Vocal recording, production, mixing |
| 3. Project studio | A dedicated rented room or small unit | Recording, production, mixing, podcasts |
| 4. Commercial studio | Multiple rooms, staff, live room | Bands, labels, film, rentals |

Many successful studio owners grow step by step, funding each stage with income from the last. Moving too fast (big rent, big loans, no clients) is the most common reason studios close.

## Market research
Answer with evidence:
- Who are your target clients? (rappers, singers, bands, podcasters, churches, schools, brands)
- What do they need and what do they pay now?
- Who are your competitors? Prices, equipment, reviews, what clients complain about.
- What makes you different? (sound, genre speciality, vibe, location, price, production skill, speed)

## Costs
**Startup costs** (one-time): treatment and construction, gear, furniture, deposits, software, branding, website.

**Monthly costs**: rent, utilities, internet, insurance, software subscriptions, marketing, maintenance, loan payments, your salary, staff.

## Break-even
**Break-even rate per hour = (monthly costs + your target salary) ÷ billable hours per month**

Example: $1,800 monthly costs + $2,500 target salary = $4,300. If you can realistically book 80 hours a month: $4,300 ÷ 80 ≈ **$54 per hour** to break even. Add a buffer (20–30%) for slow months.

Use the **Studio Rate Calculator** in Practice Studio with your own numbers.

## The business plan outline
1. Summary: what, where, for whom.
2. Services and pricing.
3. Target market and research.
4. Competition and your advantage.
5. Location and facility.
6. Equipment list and costs.
7. Marketing plan.
8. Operations (hours, booking, staff).
9. Financials: startup costs, monthly costs, break-even, 12-month forecast.
10. Risks and how you will handle them.
11. Growth milestones.

A plan with real numbers is also what banks, investors, landlords and grant programmes ask for.
`,
      steps: [
        'Decide which stage you are at and which stage you want in 12 months.',
        'List 5 local competitors with prices, services and review highlights.',
        'Interview or survey 5 potential clients about their needs and budget.',
        'List startup and monthly costs for your next stage.',
        'Calculate your break-even rate in the Studio Rate Calculator.',
        'Write a first draft of your business plan using the outline.'
      ],
      tips: ['Start with low fixed costs; flexibility keeps you alive in slow months.', 'Niche studios (e.g. "the best vocal studio for R&B singers in my city") often outperform generic ones.'],
      mistakes: ['Signing a big lease before having steady clients.', 'Pricing by guessing instead of calculating costs.'],
      assignment: {
        title: 'Studio Business Plan v1',
        brief: 'Plan the studio you will run.',
        deliverables: ['Competitor research for 5 studios', 'Client interviews or survey summary', 'Startup and monthly cost tables', 'Break-even calculation', 'Business plan draft (all 11 sections)']
      },
      quiz: [
        { q: 'How do you calculate break-even per hour?', a: ['Rent × 2', '(Monthly costs + target salary) ÷ billable hours', 'Gear cost ÷ 12', 'Competitor price minus 10%'], c: 1, why: 'This covers costs and pays you for each booked hour.' },
        { q: 'What is the most common reason studios close?', a: ['Too many clients', 'High fixed costs before steady demand', 'Good reviews', 'Too much treatment'], c: 1, why: 'Overspending ahead of demand drains cash.' }
      ],
      tools: ['calc']
    },
    {
      id: 'st-build',
      title: 'Building the Room: Soundproofing, Acoustics, Power and Air',
      minutes: 60,
      summary: 'Location, isolation principles, treatment, room-within-a-room, HVAC, electrical and layout.',
      objectives: ['Understand the four principles of sound isolation', 'Plan treatment and layout for control room and booth', 'Plan safe power and quiet ventilation'],
      body: `
> Construction, electrical and ventilation work must follow local building codes. Hire licensed professionals for electrical work and structural changes.

## Choosing a location
- Zoning and lease rules (is a studio allowed? hours?).
- Noise neighbours: who is next door, above and below?
- Access: parking, public transport, loading gear, safety at night.
- Ceiling height and room sizes (larger rooms sound better; avoid perfect cubes).
- Existing noise: traffic, trains, HVAC, plumbing.

## Sound isolation: the four principles
1. **Mass**: heavier walls block more sound (multiple layers of drywall, dense board).
2. **Decoupling**: separate structures so vibration cannot travel (staggered or double stud walls, resilient channels or isolation clips, floating floors). The **room-within-a-room** is the ultimate version.
3. **Damping**: convert vibration into heat (damping compounds between drywall layers).
4. **Airtightness**: sound leaks through gaps. Seal everything: solid-core doors with seals, acoustic sealant, sealed outlets.

Plus **absorption inside wall cavities** (mineral wool insulation) to reduce cavity resonance.

Weak points are always doors, windows, vents and the ceiling. Two solid doors with an air gap (a sound lock) are common for studios.

## Isolation vs treatment
Isolation keeps sound in and out. **Treatment** (Semester 1) controls reflections and bass inside the room: bass traps, absorbers at reflection points, diffusion at the back. A studio needs both.

## Room layout
- **Control room**: symmetrical, listening position around 38% of the room length, monitors in a triangle, treatment as covered in Semester 1.
- **Vocal booth**: at least about 1.5 × 2 m if possible; very small booths sound boxy, so treat heavily with broadband absorption.
- **Live room** (bands): bigger, a mix of absorption and diffusion, variable acoustics (movable panels).
- **Sightlines**: a window or a camera and screen between control room and booth so you can communicate visually.
- **Client area**: a comfortable couch behind the mix position (clients will sit there), not in the reflection path.

## Ventilation and climate
Sealed rooms get hot and stuffy fast. Plan **quiet ventilation**: low air velocity, large ducts, lined ducts with bends, and silencer boxes so noise does not travel through vents. Mini-split air conditioners are a common studio choice (place the compressor away from neighbours).

## Electrical
- Enough dedicated circuits for gear, lighting and climate (licensed electrician).
- Proper grounding to avoid hum; keep audio and power cables apart and cross them at right angles.
- Power conditioning / surge protection; a UPS for computers.
- Dimmable, flicker-free lighting (some dimmers cause buzz).

## Budget-friendly approach
- Rent a room with good isolation already (basements, purpose-built units, existing studios).
- Prioritise treatment and a great vocal booth over expensive construction.
- Book loud sessions at times neighbours accept.
`,
      steps: [
        'Score 3 possible locations on zoning, neighbours, access, size and existing noise.',
        'Sketch a floor plan with control room, booth, client area and sightlines.',
        'Identify the weak points (doors, windows, vents) and plan how to fix each.',
        'Plan treatment for the control room and booth (panels, traps, positions).',
        'Plan ventilation and power with a list of questions for professionals.',
        'Estimate costs for a basic and an ideal version.'
      ],
      tips: ['Test a space before signing: play loud music inside and listen outside and next door.', 'Spend on the vocal booth: in most modern studios, vocals are the main product.'],
      mistakes: ['Egg-crate foam as "soundproofing".', 'Forgetting ventilation in a sealed booth.', 'DIY electrical work.'],
      assignment: {
        title: 'Facility Plan',
        brief: 'Design the physical studio.',
        deliverables: ['Location scorecard for 3 spaces', 'Floor plan with layout and sightlines', 'Isolation plan for weak points', 'Treatment plan for each room', 'Ventilation and power questions list', 'Basic and ideal budgets']
      },
      quiz: [
        { q: 'Which are the core principles of sound isolation?', a: ['Foam, carpet, curtains', 'Mass, decoupling, damping and airtightness', 'EQ, compression, reverb', 'Colour, lighting, layout'], c: 1, why: 'These four principles block sound transmission.' },
        { q: 'What is a "room within a room"?', a: ['A vocal booth made of foam', 'A fully decoupled inner structure built inside a room', 'A closet', 'A mixing technique'], c: 1, why: 'Decoupling the inner room stops vibrations travelling.' },
        { q: 'Why plan ventilation carefully?', a: ['Studios need no air', 'Sealed rooms overheat and vents can leak noise', 'For better Wi-Fi', 'For brighter sound'], c: 1, why: 'Comfort and isolation both depend on it.' }
      ]
    },
    {
      id: 'st-gear',
      title: 'Professional Gear and Signal Flow',
      minutes: 50,
      summary: 'Interfaces, preamps, monitors, headphone systems, mic locker, patchbays, computers and maintenance.',
      objectives: ['Choose professional gear for your studio\'s services', 'Design signal flow and patching', 'Maintain gear and backups'],
      body: `
## Buy for your services
A vocal studio, a band studio and a mixing room need different gear. List the services first, then the gear.

## Core gear (examples of widely used professional choices)
| Category | What matters | Examples |
|---|---|---|
| Interface / converters | Enough inputs and outputs, quality converters, reliable drivers | Universal Audio Apollo, RME (Fireface, UFX), Antelope, Focusrite Clarett and Red, Apogee |
| Preamps | Clean or coloured character | Neve 1073-style, API 512-style, SSL, tube preamps |
| Monitors | Accuracy and translation in your room | Genelec, Neumann KH, Focal, ADAM, Amphion, Barefoot |
| Secondary monitors | Small "real-world" check speakers | Avantone MixCube-style, small consumer speakers |
| Headphone system | Separate mixes for artists | Headphone amps and personal monitor mixers |
| Mic locker | Options for many voices and instruments | Shure SM7B and SM57; Neumann U87 and TLM 103; AKG C414; Sony C-800G for some rap/R&B vocals; ribbon such as Royer R-121; small-diaphragm condenser pair |
| Outboard (optional) | Character and workflow | 1176-style and LA-2A-style compressors, EQs |
| Patchbay | Fast, flexible routing | TRS or DB25 patchbays |
| Computer | Speed and reliability | Fast CPU, 32–64 GB RAM, multiple SSDs |
| Software | Industry compatibility | Pro Tools plus your main DAW, plugin bundles, Melodyne, Auto-Tune |

## Signal flow for a vocal session
Mic → XLR cable → preamp (or interface input) → optional compressor/EQ → converter → DAW track → monitor mix → artist headphones and control room monitors.

Label every input, cable and patch point. Keep an **input list** template for sessions.

## Headphone mixes
Artists perform better with their own mix. Systems range from a simple headphone amp with one shared mix to personal mixers where each musician sets their own balance.

## Reliability
- Spare cables, spare headphones, spare mic stands.
- A backup computer or at least a clone drive.
- Session backups after every session (local + cloud).
- Maintenance: clean connectors, check cables, update drivers carefully (never right before a session).

## Buying smart
- Buy used professional gear from trusted sellers; it holds value.
- Spend more on things clients notice (vocal chain, monitors, comfort) and things that block your workflow.
- Lease or finance only when bookings justify it.
`,
      steps: [
        'List your studio\'s services and the gear each requires.',
        'Write a full gear list with priority, price and status (own/buy).',
        'Draw the signal flow for a vocal session and a 4-piece band session.',
        'Create an input list template.',
        'Design a backup routine (after-session local + cloud).',
        'Create a maintenance checklist (weekly, monthly).'
      ],
      tips: ['Comfortable chairs, good lighting and reliable Wi-Fi matter to clients too.', 'Know your gear inside out; fumbling with routing in front of clients costs trust.'],
      mistakes: ['Buying expensive outboard before a great vocal chain and monitors.', 'No backups or spares.'],
      assignment: {
        title: 'Studio Gear Blueprint',
        brief: 'Plan gear and workflow for professional sessions.',
        deliverables: ['Services-to-gear map', 'Prioritised gear list with costs', 'Signal flow diagrams (vocal and band)', 'Input list template', 'Backup and maintenance checklists']
      },
      quiz: [
        { q: 'What should you decide before buying studio gear?', a: ['The logo', 'The services you will offer', 'The wall colour', 'The studio playlist'], c: 1, why: 'Services define what gear you need.' },
        { q: 'Why have separate headphone mixes?', a: ['They are cheaper', 'Performers hear what they need and perform better', 'To save power', 'They are required by law'], c: 1, why: 'Comfortable monitoring improves performances.' }
      ]
    },
    {
      id: 'st-pricing',
      title: 'Pricing, Packages and Policies',
      minutes: 45,
      summary: 'Hourly and day rates, song packages, block discounts, memberships, deposits and cancellation policies.',
      objectives: ['Create a profitable price list', 'Design packages clients understand', 'Write booking policies that protect your time'],
      body: `
## Pricing models
| Model | How it works | Best for |
|---|---|---|
| Hourly | Pay per hour (often with engineer) | Recording sessions |
| Block / day rate | Discount for 4, 8 or 10-hour blocks | Bands, albums |
| Per song package | Fixed price: recording + mix + master | Rappers, singers, beginners (clear and attractive) |
| Production package | Beat + recording + mix + master | Artists without beats |
| Membership | Monthly fee for a set number of hours | Regular artists; predictable income |
| Room rental (dry hire) | Room without engineer | Experienced producers |

## Example price sheet (illustrative only)
| Service | Price |
|---|---|
| Recording with engineer | $50 / hour (min 2 hours) |
| 4-hour block | $180 |
| Mix (per song) | $150 |
| Master (per song) | $50 |
| Song package (2h record + mix + master) | $280 |
| Custom beat + full song package | $550 |
| Monthly membership (8 hours) | $320 |

Typical home or project studio hourly rates range widely (roughly $25–100+ per hour depending on market, gear and reputation), with high-end commercial rooms charging much more. Research your city.

## Calculating profitable prices
1. Break-even rate from your costs (Lesson 1).
2. Add a profit margin and a buffer for slow months.
3. Compare with the local market.
4. Position: budget, mid, or premium, and make sure your service matches your price.

## Policies
- **Deposit**: e.g. 50% to book, non-refundable within 48 hours of the session.
- **Cancellation and lateness**: late arrivals still pay from the booked start time.
- **Overtime**: billed in 30-minute increments.
- **File delivery**: final files after full payment.
- **Revisions**: number included in mixing packages.
- **Studio rules**: guest limits, no smoking, respect equipment.
- **File storage**: how long you keep sessions (e.g. 90 days), and fees for archives.

Put policies on your booking page and in confirmation emails so clients agree before arriving.

## Raising prices
Raise rates when you are consistently booked, when you have new credits or gear, and every year to match costs. Tell existing clients in advance; consider honouring old rates for a short period.
`,
      steps: [
        'Calculate your break-even rate with the Studio Rate Calculator.',
        'Research prices of 5 local studios and 5 online services.',
        'Create your price sheet with at least one package and one block rate.',
        'Write your deposit, cancellation, overtime, delivery and revision policies.',
        'Design a membership offer for regular clients.',
        'Ask 3 potential clients if the packages are clear and attractive.'
      ],
      tips: ['Packages sell better than hourly rates for beginners: they know the total cost.', 'Never compete only on being the cheapest.'],
      mistakes: ['No deposit policy, leading to no-shows.', 'Undercharging and burning out.'],
      assignment: {
        title: 'Rate Card',
        brief: 'Create a clear, profitable price list and policies.',
        deliverables: ['Break-even and target rates', 'Market research table', 'Final price sheet', 'Written policies', 'Feedback from 3 potential clients']
      },
      quiz: [
        { q: 'Why offer song packages?', a: ['They confuse clients', 'Clients know the total cost upfront', 'They are always cheaper for you', 'They avoid contracts'], c: 1, why: 'Clear totals make buying decisions easier.' },
        { q: 'What does a deposit policy prevent?', a: ['Good mixes', 'No-shows and last-minute cancellations', 'Taxes', 'Bookings'], c: 1, why: 'Deposits secure commitment.' }
      ],
      tools: ['calc']
    },
    {
      id: 'st-operations',
      title: 'Running Sessions and Client Experience',
      minutes: 45,
      summary: 'Booking systems, intake, session prep, session flow, hospitality, delivery, reviews and retention.',
      objectives: ['Run smooth, professional sessions', 'Create an experience clients talk about', 'Turn first-time clients into regulars'],
      body: `
## Booking
- Online booking with deposits (scheduling tools with payments, such as appointment-booking apps).
- Automatic confirmations and reminders (24 hours before).
- Intake form: artist name, song, references, beat file, number of people, goals.

## Session prep (before the client arrives)
- Session template loaded, tracks named, beat imported at correct tempo and key.
- Mic set up, levels checked, headphone mix ready.
- Room clean, comfortable temperature, lighting set, water available.
- Backup drive connected.

## Session flow
1. Welcome, short conversation about goals and references.
2. Play the beat; set headphone mix.
3. Warm-up and test take.
4. Record efficiently; keep energy high; give clear, kind direction.
5. Quick rough mix playback at the end.
6. Confirm next steps: mixing timeline, payment, delivery.
7. Back up the session before the client leaves.

## Hospitality and vibe
- Make artists feel welcome and confident.
- Respect their vision; offer ideas without forcing them.
- Keep phones away during takes, but capture content (with permission) for social media.
- Small touches: good lighting, comfortable seating, a tidy room, a reference playlist ready.

## Delivery
- Deliver on the promised date.
- Clear file names and formats (WAV + MP3), via a reliable file transfer service.
- Include instrumental and a cappella versions if part of the package.

## Reviews, testimonials and retention
- Ask happy clients for a Google review and a short video testimonial.
- Follow up a week after delivery ("How is the release going?").
- Offer returning-client perks or memberships.
- Keep a simple client database (name, contact, projects, preferences).

## Safety and professionalism
- Clear studio rules.
- Never compromise on your safety or your equipment's safety.
- Keep client files private and secure.
`,
      steps: [
        'Choose a booking tool and set up services, deposits and reminders.',
        'Write a client intake form.',
        'Create a session prep checklist and a session flow checklist.',
        'Run one practice session with a friend using all checklists.',
        'Set up a client database spreadsheet.',
        'Write a follow-up message template and a review request template.'
      ],
      tips: ['The client remembers how they felt more than which preamp you used.', 'A great rough mix at the end of the session sells the mixing package.'],
      mistakes: ['Setting up mics after the client arrives.', 'Missing delivery dates.', 'Not backing up before the client leaves.'],
      assignment: {
        title: 'Session System',
        brief: 'Operate sessions like an established studio.',
        deliverables: ['Booking page with deposits', 'Intake form', 'Prep and session checklists', 'Client database', 'Follow-up and review templates', 'One practice session completed']
      },
      quiz: [
        { q: 'When should you back up a session?', a: ['Once a year', 'Before the client leaves', 'Only after mixing', 'Never'], c: 1, why: 'Losing a session is unrecoverable and costly.' },
        { q: 'What helps turn first-time clients into regulars?', a: ['Ignoring them after delivery', 'Follow-ups, great experience and returning-client offers', 'Higher prices for returning clients', 'Late delivery'], c: 1, why: 'Relationship and experience drive retention.' }
      ]
    },
    {
      id: 'st-marketing',
      title: 'Getting Clients for Your Studio',
      minutes: 45,
      summary: 'Local SEO and Google Business Profile, social content from sessions, partnerships, events, referrals and ads.',
      objectives: ['Get found locally online', 'Turn sessions into marketing content', 'Build partnerships and referral systems'],
      body: `
## Get found
- **Google Business Profile**: correct name, address, hours, photos of the rooms, services with prices, and regular posts. Reviews strongly affect local search results.
- **Website**: services, prices or starting prices, gear list, photos, work samples, testimonials, booking link. Use the words clients search for ("recording studio in [city]", "vocal recording [city]").
- **Directories and maps**: list your studio wherever local creators search.

## Content from sessions
With permission:
- Before/after clips of vocals.
- Artists hearing their song for the first time.
- Room tours and gear features.
- Quick tips for artists ("How to prepare for your first studio session").
- Release celebrations: tag artists when songs drop.

## Partnerships
- Videographers and photographers (bundle "song + video" packages).
- Venues, promoters and open mics.
- Schools, colleges and music teachers.
- Local brands, churches and community organisations.
- Other studios (overflow bookings, specialised services).

## Events
- Beat battles, producer meetups, songwriting camps.
- Workshops (home recording, vocal prep, music business).
- Listening parties for client releases.

## Referral programme
Give clients a reward (free hour, discount) for each new client they bring. Word of mouth is the strongest marketing for studios.

## Paid ads
Small, targeted ads to local musicians (location radius, music interests) promoting a clear offer (first song package discount). Track bookings from each ad.

## Track results
Ask every new client "How did you hear about us?" and record it. Spend more on what works.
`,
      steps: [
        'Create or optimise a Google Business Profile (or plan it).',
        'Write website copy using local search phrases.',
        'Plan 12 pieces of session content for the next month.',
        'Contact 3 potential partners with a collaboration idea.',
        'Plan one event or workshop.',
        'Design a referral reward.'
      ],
      tips: ['Respond to every review, positive or negative, politely.', 'Feature your clients\' success; their wins are your marketing.'],
      mistakes: ['Posting content without client permission.', 'Running ads without tracking bookings.'],
      assignment: {
        title: '90-Day Studio Marketing Plan',
        brief: 'Create a plan to fill your calendar.',
        deliverables: ['Google profile and website plan', '12-post content calendar', '3 partnership outreach messages', 'An event plan', 'Referral programme', 'Tracking spreadsheet']
      },
      quiz: [
        { q: 'What strongly affects local search visibility for studios?', a: ['Number of plugins', 'Google Business Profile completeness and reviews', 'Monitor brand', 'Wall colour'], c: 1, why: 'Local search relies heavily on profile data and reviews.' },
        { q: 'What should you always get before posting session clips?', a: ['A new camera', 'The client\'s permission', 'A sponsor', 'Nothing'], c: 1, why: 'Respect client privacy and rights.' }
      ]
    },
    {
      id: 'st-scale',
      title: 'Scaling, Teams and a Sustainable Career',
      minutes: 45,
      summary: 'Hiring engineers, adding rooms and services, labels and publishing, passive products, and protecting your health.',
      objectives: ['Plan how the studio grows beyond your own hours', 'Diversify services', 'Build a sustainable, healthy career'],
      body: `
## The ceiling of solo work
When you are booked full, income is capped by your hours. Growth options:
- **Raise prices** (first and simplest).
- **Hire engineers** (contractors or staff) to run sessions while you take premium work.
- **Rent the room** (dry hire) during your off-hours.
- **Add rooms** (a second booth or production room).

## Hiring
- Start with contractors per session; formalise when demand is steady.
- Train them on your session system, sound standards and client experience.
- Clear agreements: pay rate (hourly or percentage), responsibilities, confidentiality, ownership of work.

## New services
- Podcast and video podcast recording.
- Rehearsal space.
- Lessons and courses (production, mixing, recording, songwriting).
- Artist development packages (production, mixing, release strategy, content).
- Audio for video, voice-overs, audiobooks.

## Bigger moves
- **Production company / label**: release music by artists you develop, owning masters by agreement.
- **Publishing company**: sign songwriters and administer songs.
- **Producer collective**: share costs, cross-refer clients, build a brand bigger than one person.
- **Products**: sample packs, presets, templates, courses as passive income.

## A sustainable career
- **Protect your hearing**: moderate monitoring levels, breaks, earplugs at gigs, regular hearing checks.
- **Ergonomics**: good chair, desk height, screen position; stretch and move.
- **Avoid burnout**: schedule days off, separate creative time from client time, keep making your own music.
- **Keep learning**: new genres, tools and business models appear constantly.
- **Community**: mentors, peers and a network of collaborators carry careers through slow periods.
`,
      steps: [
        'Calculate your maximum monthly income at your current rate and capacity.',
        'Choose one growth lever for the next 12 months.',
        'Write a hiring brief for an assistant engineer (skills, pay model, responsibilities).',
        'Design one new service and price it.',
        'Write your personal health plan (hearing, ergonomics, rest).',
        'Write a 3-year vision for your studio.'
      ],
      tips: ['Document everything (templates, checklists) so others can run sessions your way.', 'Your own music and brand remain valuable even when the studio is busy.'],
      mistakes: ['Hiring before having enough bookings.', 'Ignoring hearing health until damage is done.'],
      assignment: {
        title: 'Growth Plan',
        brief: 'Design how your studio grows and how you stay healthy doing it.',
        deliverables: ['Capacity and income ceiling calculation', 'Chosen growth lever with plan', 'Hiring brief', 'New service offer', 'Personal health plan', '3-year vision']
      },
      quiz: [
        { q: 'What is usually the simplest first growth lever?', a: ['Buying a bigger console', 'Raising prices', 'Opening a second city', 'Free sessions'], c: 1, why: 'Higher rates increase income without more hours.' },
        { q: 'Why document studio processes?', a: ['For decoration', 'So others can deliver your standard when you scale', 'It is required by law', 'To slow sessions down'], c: 1, why: 'Systems make quality repeatable.' }
      ]
    },
    {
      id: 'st-project',
      title: 'Semester Project: Studio Launch Plan',
      minutes: 900,
      project: true,
      summary: 'A complete, numbers-backed plan to open (or upgrade) your studio, with a 90-day launch.',
      objectives: ['Produce an investor-ready studio plan', 'Prepare a realistic launch'],
      body: `
## The brief
Combine everything from this semester into one **Studio Launch Plan**:
1. Final business plan (all 11 sections).
2. Facility plan (layout, isolation, treatment, power, ventilation).
3. Gear blueprint and budget.
4. Rate card and policies.
5. Session system (booking, intake, checklists).
6. 90-day marketing plan.
7. 12-month financial forecast with break-even month.
8. Launch event plan.

Present it to someone you trust (a mentor, a business owner, a local studio owner) and get feedback.
`,
      steps: ['Business plan finalised', 'Facility plan finalised', 'Gear blueprint finalised', 'Rate card and policies finalised', 'Session system ready', '90-day marketing plan ready', '12-month forecast done', 'Plan presented and feedback received'],
      assignment: {
        title: 'Studio Launch Plan',
        brief: 'Everything needed to open your doors.',
        deliverables: ['The complete launch plan document', '12-month forecast spreadsheet', 'Feedback notes from your presentation', 'Launch date chosen']
      },
      quiz: [
        { q: 'What should the 12-month forecast show?', a: ['Your favourite songs', 'Expected income, costs and the break-even month', 'Plugin list', 'Social media handles'], c: 1, why: 'It proves the business can sustain itself.' },
        { q: 'Why present the plan to someone experienced?', a: ['To get approval to make music', 'Fresh eyes catch risks and blind spots', 'It is legally required', 'To sell it'], c: 1, why: 'Feedback strengthens the plan before money is spent.' }
      ],
      tools: ['calc']
    }
  ]
});
