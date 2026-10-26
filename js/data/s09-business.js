(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's9',
  no: 9,
  title: 'Music Business & Career',
  tagline: 'Copyright, royalties, selling beats, client work, releasing, marketing, sync and money management.',
  weeks: 6,
  outcomes: [
    'Understand the two copyrights in every song and who owns them',
    'Register and collect every royalty stream you are owed',
    'Sell beats with clear licences and pricing',
    'Work with artists professionally with contracts and split sheets',
    'Release and market music independently',
    'Build multiple income streams and manage money like a business'
  ],
  lessons: [
    {
      id: 'biz-copyright',
      title: 'Copyright: The Two Rights in Every Song',
      minutes: 50,
      summary: 'Composition vs master, ownership, registration, work for hire, splits, samples and common myths.',
      objectives: ['Explain composition and master copyrights', 'Know when and how to register', 'Avoid common copyright mistakes'],
      body: `
> This lesson is general education, not legal advice. Laws differ by country. For contracts and disputes, talk to a qualified music lawyer.

## Two copyrights in every recorded song
| | Composition (the song) | Master (the sound recording) |
|---|---|---|
| What it is | Melody, harmony, lyrics, the written musical work | The specific recorded performance and production |
| Symbol | © | ℗ |
| Usually owned by | Songwriters and their publishers | Whoever paid for and owns the recording: the artist, a label, or you |
| Earns | Performance royalties, mechanical royalties, sync fees (publishing side), print | Streaming and sales income (master side), neighbouring rights, sync fees (master side) |

**A producer can own a share of both:** a share of the **composition** (if the beat/music is part of the song's writing) and sometimes a share of the **master** (by agreement, or full ownership if you funded and own it).

## When copyright exists
In most countries, copyright exists automatically once a work is **fixed** in a tangible form (recorded or written down). You do not need to register for it to exist.

## Why register anyway
- **Proof** of ownership and date.
- In the **US**, registering with the US Copyright Office is required before you can sue for infringement of a US work, and timely registration allows statutory damages and legal fees.
- **Registering with collection societies** (PROs, MLC etc.) is a separate step and is how you actually get paid (next lesson).

## Ownership situations
- **You make a beat alone**: you own the composition of the music and the master of the beat.
- **An artist writes lyrics and melody on your beat**: the song's composition is shared. Hip-hop and pop commonly treat the beat as a large share (often around 50% of the composition), but every split is negotiable and must be agreed in writing.
- **Work for hire**: if you are hired under a written work-for-hire agreement, the client owns what you create. Read carefully before signing.
- **Co-writing**: everyone who contributes to the writing negotiates a percentage, recorded on a **split sheet**.

## The split sheet
Sign it at the end of every writing session. It includes:
- Song title and date
- Every writer's legal name, role and contact
- Composition percentage for each writer (totals 100%)
- Publisher names and PRO affiliations, IPI/CAE numbers
- Signatures

Master ownership is agreed separately (in the producer agreement or licence).

## Myths
- **"Mailing it to myself is enough protection."** It is weak evidence; keep project files with dates, and register where useful.
- **"Under 7 seconds of sample is legal."** False (see Semester 4).
- **"If it's on YouTube it's free to use."** False.
- **"Changing a melody slightly makes it new."** Substantial similarity can still infringe.
- **"Chord progressions can be copyrighted."** Common progressions generally cannot; melodies, lyrics and recordings can.
`,
      steps: [
        'List every song you have made and who contributed to it.',
        'For each collaboration, write the composition splits you believe were agreed.',
        'Download or create a split sheet template and fill it for one song.',
        'Find your country\'s copyright office website and read how registration works.',
        'Create a "Rights" folder for each project containing split sheets and agreements.'
      ],
      tips: ['Get every agreement in writing, even with friends.', 'Keep dated project files and stems as evidence of creation.'],
      mistakes: ['Releasing collaborations with no split agreement.', 'Signing a work-for-hire contract without understanding you give up ownership.'],
      assignment: {
        title: 'Rights Audit',
        brief: 'Get your rights organised before you earn money.',
        deliverables: ['A table of all your songs with composition and master owners', 'A completed split sheet for one collaboration', 'A Rights folder system set up', 'Notes on how copyright registration works in your country']
      },
      quiz: [
        { q: 'What are the two copyrights in a recorded song?', a: ['Lyrics and artwork', 'Composition and master (sound recording)', 'Video and audio', 'Mix and master'], c: 1, why: 'The written song and the recording are separate rights.' },
        { q: 'When does copyright usually begin?', a: ['After registration', 'When the work is fixed in tangible form', 'After release', 'After it earns money'], c: 1, why: 'Fixation creates copyright in most countries.' },
        { q: 'What does a split sheet record?', a: ['Mixing settings', 'Each writer\'s share of the composition', 'The BPM', 'Studio hours'], c: 1, why: 'It documents agreed ownership percentages.' }
      ]
    },
    {
      id: 'biz-royalties',
      title: 'Royalties Explained: Getting Paid for Every Play',
      minutes: 60,
      summary: 'Performance, mechanical, master, neighbouring rights and sync income, and the organisations that collect them.',
      objectives: ['Map every royalty stream', 'Register with the right organisations', 'Estimate streaming income realistically'],
      body: `
> General education, not legal or financial advice. Organisations, rules and rates change; check each organisation's current terms.

## The royalty map
| Royalty | Comes from | Paid to | Collected by |
|---|---|---|---|
| **Performance** (composition) | Streams, radio, TV, live venues, public places | Songwriters and publishers | PROs: ASCAP, BMI, SESAC, GMR (US); SOCAN (Canada); PRS for Music (UK); IPRS (India); APRA AMCOS (Australia/NZ); GEMA (Germany); SACEM (France) and others |
| **Mechanical** (composition) | Streams, downloads, physical copies | Songwriters and publishers | The MLC (US streaming/downloads), MCPS (UK), CMRRA (Canada), and local societies |
| **Master income** | Streaming and sales of the recording | Master owner (artist or label) | Your distributor or label |
| **Neighbouring rights / digital performance** | Radio, non-interactive digital radio, public performance of recordings | Master owners and performers | SoundExchange (US), PPL (UK), Re:Sound (Canada) and others |
| **Sync** | Use of music in film, TV, ads, games | Both master and composition owners | Negotiated directly or via agents and libraries |
| **Producer royalties** | A share of master income | Producers | Paid by the artist/label per your agreement; in the US, producers can receive SoundExchange income via a Letter of Direction from the artist |

## Publishing: writer's share and publisher's share
Publishing income is traditionally split into the **writer's share** and the **publisher's share**. If you have no publisher, you are entitled to both, but the publisher's share often goes uncollected unless you set up publishing or use a **publishing administrator** (such as Songtrust, Sentric, or a distributor's publishing service), who registers your songs worldwide for a commission (often around 10–20%).

## How money flows from one stream
1. A listener streams your song.
2. The platform pays the **master** side to your **distributor**, who pays you (minus any fee or commission).
3. The platform pays the **composition** side: performance royalties to **PROs** and mechanicals to **mechanical societies** (like The MLC).
4. PROs and societies pay **writers** and **publishers** according to registrations and splits.

If any registration is missing, money gets stuck as "unclaimed" royalties.

## Streaming income reality
- Payouts are **pro-rata**: platforms divide revenue by total streams, so per-stream values vary by country, subscription type and month.
- Commonly cited rough figures for total master payouts are around **$0.003–0.005 per stream on Spotify**; other platforms vary.
- Spotify (since 2024) only pays recording royalties for tracks with at least **1,000 streams in the previous 12 months**.
- Example: 100,000 streams × $0.004 ≈ $400 to the master owner, before splits. Publishing royalties are paid separately.

Use the **Earnings Planner** in Practice Studio to model your own numbers.

## Registration checklist (for each song)
- Join a **PRO** as a writer (and set up publishing or an admin).
- Register the song with your PRO (title, writers, splits).
- Ensure mechanicals are covered (The MLC in the US, or your publishing admin/society elsewhere).
- Register the recording with **SoundExchange / PPL / your neighbouring rights society** if you own masters or are a featured performer.
- Release via a distributor with correct **ISRC**, writer and producer credits.
- Keep split sheets and producer agreements filed.
`,
      steps: [
        'Identify the PRO in your country and read its writer membership requirements.',
        'Identify how mechanical royalties are collected where you live.',
        'Identify your neighbouring rights society.',
        'Compare two publishing administrators (fees, territories, contract length).',
        'Open the Earnings Planner and model income for 100,000 monthly streams.',
        'Create a registration checklist template for every future release.'
      ],
      tips: ['Register songs as soon as they are released (or before).', 'Use identical names and spellings across all registrations.'],
      mistakes: ['Joining a PRO but never registering individual songs.', 'Assuming your distributor collects publishing royalties.'],
      assignment: {
        title: 'Royalty Setup Plan',
        brief: 'Plan exactly how you will collect every royalty.',
        deliverables: ['Your PRO, mechanical and neighbouring rights organisations named', 'A publishing admin comparison', 'A registration checklist template', 'An earnings model from the Earnings Planner']
      },
      quiz: [
        { q: 'Who collects performance royalties for songwriters?', a: ['Distributors', 'PROs such as ASCAP, BMI, PRS, SOCAN, IPRS', 'Streaming apps directly to producers', 'Banks'], c: 1, why: 'Performing rights organisations collect performance royalties.' },
        { q: 'In the US, who collects streaming mechanical royalties?', a: ['SoundExchange', 'The MLC', 'YouTube', 'BMI only'], c: 1, why: 'The Mechanical Licensing Collective administers the US blanket mechanical licence.' },
        { q: 'What is the publisher\'s share?', a: ['A tax', 'The half of publishing income traditionally paid to the publisher', 'Streaming income', 'A producer fee'], c: 1, why: 'Self-published writers must set up collection to receive it.' }
      ],
      tools: ['calc']
    },
    {
      id: 'biz-beats',
      title: 'Selling Beats Online',
      minutes: 60,
      summary: 'Beat stores, licence tiers and terms, pricing, YouTube type beats, previews and growing a buyer base.',
      objectives: ['Set up a beat store with clear licences', 'Price leases and exclusives', 'Market beats on YouTube and social media'],
      body: `
## Where to sell
- **Marketplaces with stores**: BeatStars and Airbit are the best-known. They host your catalogue, handle licences and payments, and provide store pages and embeddable players.
- **Your own website**: more control and no marketplace cut, but you must drive traffic.
- **Direct sales**: emailing artists, DMs and producer/artist communities.

## Licence tiers (typical structure)
Leases are **non-exclusive**: you keep the copyright and can lease the same beat to many artists until someone buys exclusive rights.

| Licence | Files | Typical limits | Typical price range (varies) |
|---|---|---|---|
| MP3 lease | Tagged-free MP3 | Limited streams, sales and videos; often 1–2 years | $20–50 |
| WAV lease | WAV | Higher limits | $30–100 |
| Trackout / stems lease | WAV + stems | Higher limits, mixing flexibility | $75–300 |
| Unlimited lease | WAV + stems | Unlimited streams, still non-exclusive | $150–500 |
| Exclusive | WAV + stems | Only buyer can use it; beat removed from store | $300–5,000+ |

Common terms in beat licences (always define them clearly):
- **Credit**: "Prod. by [Your Name]" in titles/credits.
- **Distribution limits**: number of streams, sales, music videos, radio play.
- **Publishing**: producers commonly keep a writer's share of the composition (often 50%) and require it to be registered with PROs.
- **Content ID**: usually the artist cannot register a leased (non-exclusive) beat in Content ID, because other leaseholders would get claimed.
- **Term**: how long the licence lasts.
- **Previous leases**: exclusive sales do not cancel leases already sold; state this.

## Pricing strategy
- Start with fair prices and **bulk deals** ("buy 2 get 1 free").
- Raise prices as demand and credits grow.
- Exclusives for established producers are often much higher, sometimes with a fee plus royalties.

## YouTube "type beats"
Producers title uploads like "[Artist Name] Type Beat – 'Beat Title'" so artists searching for that sound find them.
- Upload consistently (several times a week is common).
- Titles: artist type + mood + beat name. Tags and description with licence link.
- Thumbnails: clean image, readable text.
- Put a **producer tag** in the preview.
- Pin a comment with the purchase link.
- Study which artist types get views and which convert to sales.
- Note: using an artist's name in a title for search is common practice, but never imply endorsement.

## Converting listeners to buyers
- An **email list** (offer free beats or a free loop pack in exchange for emails).
- Respond quickly to messages.
- Offer custom beats and stems.
- Showcase songs artists made with your beats (social proof).

## Protecting previews
Tagged MP3 previews, watermark-style producer tags, and only sending untagged files after payment.
`,
      steps: [
        'Choose 10 of your best beats and title them consistently.',
        'Write your licence tiers with prices and terms (use the table as a guide).',
        'Create tagged previews of each beat.',
        'Set up a store on a beat marketplace or your website (free tiers exist).',
        'Make a simple thumbnail template.',
        'Upload 3 beats to YouTube with optimised titles, descriptions and a purchase link.',
        'Create a free download offer to collect emails.'
      ],
      tips: ['Consistency beats virality: steady uploads build an audience.', 'Study top beat sellers in your genre: titles, thumbnails, upload times, licence terms.'],
      mistakes: ['Selling beats with uncleared samples.', 'Vague licence terms that cause disputes.', 'Not reading marketplace fees and terms.'],
      assignment: {
        title: 'Open Your Beat Store',
        brief: 'Launch a working beat business.',
        deliverables: ['Licence terms document with 4–5 tiers', '10 beats uploaded with tagged previews', '3 YouTube uploads with optimised titles and links', 'An email capture offer', 'A 30-day upload schedule']
      },
      quiz: [
        { q: 'What does a non-exclusive lease mean?', a: ['The artist owns the beat', 'The producer can license the same beat to others', 'The beat is free', 'The beat is removed from sale'], c: 1, why: 'Leases grant limited, non-exclusive rights.' },
        { q: 'Why can\'t leaseholders usually register beats in Content ID?', a: ['YouTube forbids music', 'Other leaseholders using the same beat would be claimed', 'It costs too much', 'Content ID is only for movies'], c: 1, why: 'Multiple people legitimately use the same beat.' },
        { q: 'What does an exclusive licence typically do?', a: ['Cancels all previous leases', 'Gives one buyer exclusive future use; the beat comes off the store', 'Lets anyone use it', 'Transfers your PRO membership'], c: 1, why: 'Exclusive rights stop future leasing; existing leases usually continue.' }
      ]
    },
    {
      id: 'biz-clients',
      title: 'Working with Artists and Clients',
      minutes: 50,
      summary: 'Finding clients, briefs, communication, deposits, revisions, producer agreements and negotiation.',
      objectives: ['Run client projects professionally', 'Negotiate fees, points and splits', 'Use the right agreements'],
      body: `
## Finding clients
- Local artists (open mics, venues, colleges, social media).
- Online communities and marketplaces.
- Referrals from happy clients (ask for them).
- Collaborations with videographers, managers, studios.

## The brief
Before starting, agree:
- Goal, genre and 2–3 references.
- Deliverables (beat, production, mix, master, stems).
- Timeline and deadlines.
- Budget and payment schedule.
- Number of revisions included.
- Credits and rights (fee, points, publishing split, master ownership).

## Payment terms
- **Deposit** (commonly 50%) before work starts; balance before final files are delivered.
- Clear revision policy (e.g. 2 rounds included, then an hourly rate).
- Late payment and cancellation terms.
- Send professional invoices.

## Producer compensation (typical structures)
- **Fee**: an upfront payment for the production.
- **Points**: a percentage of master royalties (commonly 3–5 points on label deals; independent deals vary widely).
- **Publishing share**: a percentage of the composition for writing contributions.
- **Backend only**: no fee, only royalties (risky unless the artist has traction).

## Agreements you should have
| Agreement | Use |
|---|---|
| Split sheet | Composition ownership after writing sessions |
| Producer agreement | Fee, points, credit, master ownership, delivery |
| Beat licence (lease / exclusive) | Beat sales |
| Work-for-hire agreement | When the client owns everything you create |
| Mixing/mastering service agreement | Services, revisions, payment |
| Collaboration agreement | Ongoing projects between creators |

Get templates reviewed by a music lawyer once; reuse them.

## Communication
- Reply within 24 hours.
- Send work-in-progress updates.
- Use clear version names.
- Explain technical decisions in simple language.
- Be honest about timelines.

## Red flags
- "We'll pay you when it blows up."
- Refusing to sign any agreement.
- Requests to use uncleared samples.
- Endless revisions without payment.
- Pressure to sign long, exclusive deals quickly.
`,
      steps: [
        'Write a one-page client intake form (goal, references, deliverables, deadline, budget).',
        'Write your payment and revision policy.',
        'Create an invoice template.',
        'Draft a simple producer agreement outline (fee, points, credit, delivery, ownership).',
        'Reach out to 5 local or online artists with a personalised message and a portfolio link.',
        'Role-play a negotiation with a friend: fee vs points vs publishing.'
      ],
      tips: ['Underpromise and overdeliver on timelines.', 'A happy client is your best marketing.'],
      mistakes: ['Starting work without a deposit.', 'Unlimited revisions.', 'No written agreement.'],
      assignment: {
        title: 'Client Toolkit',
        brief: 'Build the documents and habits of a professional producer.',
        deliverables: ['Client intake form', 'Payment and revision policy', 'Invoice template', 'Producer agreement outline', '5 outreach messages sent']
      },
      quiz: [
        { q: 'What is a common deposit before starting client work?', a: ['0%', 'About 50%', '200%', 'Only after release'], c: 1, why: 'A deposit secures commitment and protects your time.' },
        { q: 'What are "points" in a producer deal?', a: ['Ratings', 'A percentage of master royalties', 'Studio hours', 'Social media likes'], c: 1, why: 'Points are royalty percentages.' },
        { q: 'Which is a red flag?', a: ['A signed agreement', 'A deposit', '"We\'ll pay you when it blows up"', 'Clear references'], c: 2, why: 'It shifts all risk to you with no guarantee.' }
      ]
    },
    {
      id: 'biz-release',
      title: 'Releasing Your Own Music',
      minutes: 50,
      summary: 'Distributors, release timelines, artwork, metadata, editorial pitching, pre-saves and registrations.',
      objectives: ['Choose a distributor', 'Plan a release timeline', 'Pitch to playlists and register correctly'],
      body: `
## Distributors
Distributors deliver your music to Spotify, Apple Music, YouTube Music, Amazon, TikTok, Deezer, Tidal and more, then pass your master royalties back to you. Popular options include **DistroKid, TuneCore, CD Baby, Amuse, Ditto, UnitedMasters, Symphonic** and selective services like **AWAL**.

Compare:
- Pricing model (annual subscription, per-release fee, or commission).
- Royalty split (some take a percentage).
- Extras: splits payments to collaborators, YouTube Content ID, publishing administration, pre-save links.
- Contract terms and how to leave.

## Release timeline (single)
| When | Task |
|---|---|
| 6–8 weeks before | Master finished, artwork done, metadata ready |
| 4–6 weeks before | Upload to distributor with release date |
| 3–4 weeks before | Pitch to Spotify editorial via Spotify for Artists (must be at least 7 days before release; earlier is better), plan content |
| 2–3 weeks before | Pre-save campaign, teasers on social media |
| Release week | Post daily, email list, share with playlists and press |
| After release | Register song with PRO/admin, keep posting, analyse data |

## Artwork
- Square, commonly **3000 × 3000 px**, JPG or PNG.
- No URLs, social handles, or misleading logos; text must match metadata.
- Must be original or licensed.

## Metadata
Exact artist name, title, featured artists, writers, producers, genre, language, explicit flag, ISRC, release date. Mistakes cause lost royalties and misattributed credits.

## Editorial and playlist pitching
- **Spotify for Artists** lets you pitch one unreleased song per release for editorial consideration and ensures it reaches followers' Release Radar.
- Apple Music, Amazon and others have their own artist tools.
- Independent curators: services like SubmitHub and Groover connect you with curators. **Never pay for guaranteed streams or bot playlists**: artificial streaming can get your music removed and royalties withheld.

## After release
- Register the song with your PRO and publishing admin.
- Check streams are attributed to the right artist profile.
- Use analytics: which countries, playlists and ages listen.
- Release regularly (many independent artists release a single every 4–8 weeks).

## Bandcamp and direct sales
Bandcamp lets fans buy downloads, vinyl and merch directly, with a larger share to the artist than streaming.
`,
      steps: [
        'Compare three distributors in a table (price, cut, features, terms).',
        'Pick your next single and write a full release timeline with dates.',
        'Create 3000 × 3000 px artwork (or brief a designer).',
        'Fill in a complete metadata sheet.',
        'Set up Spotify for Artists (and other artist tools) once your profile exists.',
        'Plan 10 pieces of content for the release (teasers, behind the scenes, studio clips).'
      ],
      tips: ['Release consistently; momentum compounds.', 'Build an email list from day one; you own that audience.'],
      mistakes: ['Uploading days before release, missing editorial pitching.', 'Buying fake streams.', 'Inconsistent artist names.'],
      assignment: {
        title: 'Release Plan',
        brief: 'Plan (and ideally execute) your first independent release.',
        deliverables: ['Distributor comparison table', 'Dated release timeline', 'Artwork and metadata sheet', 'Content plan with 10 posts', 'Release live (optional but recommended)']
      },
      quiz: [
        { q: 'At least how far before release must you pitch to Spotify editorial?', a: ['1 day', '7 days', '6 months', 'After release'], c: 1, why: 'Spotify requires pitching at least 7 days ahead; earlier is better.' },
        { q: 'What size is standard for cover art?', a: ['500 × 500', '3000 × 3000 px', '1920 × 1080', '100 × 100'], c: 1, why: 'Most distributors ask for 3000 × 3000 px square artwork.' },
        { q: 'Why avoid paid "guaranteed streams"?', a: ['They are too cheap', 'Artificial streaming can lead to removal and withheld royalties', 'They only work on Apple', 'They improve sound quality'], c: 1, why: 'Platforms detect and penalise fraudulent streams.' }
      ]
    },
    {
      id: 'biz-marketing',
      title: 'Branding and Marketing for Producers',
      minutes: 50,
      summary: 'Identity, niche, short-form video, YouTube, collaborations, email, portfolio and analytics.',
      objectives: ['Define a clear producer brand', 'Create content that grows an audience', 'Build a portfolio that wins clients'],
      body: `
## Brand foundations
- **Name**: memorable, searchable, available on major platforms.
- **Niche**: the sound, genre or service you want to be known for ("dark drill beats", "Afro-pop production", "mixing for R&B singers").
- **Visual identity**: consistent colours, fonts, logo and photo style.
- **Story**: why you make music and who you make it for.

## Content that works for producers
| Format | Idea |
|---|---|
| Cook-up videos | Make a beat from scratch in 60 seconds (sped up) |
| Before/after | Raw vocal vs mixed vocal; demo vs master |
| Breakdowns | "How I made this beat": layers one by one |
| Challenges | Flip a sample from a follower; beat with only stock plugins |
| Education | Quick tips; your audience may include artists and producers |
| Reactions | Artists recording on your beats (with permission) |
| Behind the scenes | Studio sessions, gear, workflow |

Short-form platforms (TikTok, Instagram Reels, YouTube Shorts) reward consistency, strong hooks in the first 2 seconds, and native editing. Long-form YouTube builds deeper trust (tutorials, beat-making streams, type beats).

## Collaborations
- Collaborate with artists and producers slightly ahead of you and at your level.
- Join producer collectives and Discord communities.
- Cross-promote releases.

## Email list
Social platforms change their algorithms; your email list is yours. Offer free loops, a sample pack, or a free beat in exchange for emails. Send updates, new beats, release news and offers.

## Portfolio website
- Short bio and photo.
- Best 5–10 works (embedded players), credits, testimonials.
- Services and starting prices.
- Contact or booking form.
- Links to stores and socials.

## Analytics
Track what works: watch time, saves, shares, click-through to store, email signups, sales. Double down on what converts.

## Long-term principle
Kevin Kelly's "1,000 True Fans" idea: an independent creator can earn a living from a relatively small group of dedicated fans who buy everything you release. Focus on depth of connection, not only follower counts.
`,
      steps: [
        'Write your brand one-pager: name, niche, story, target audience, visual style.',
        'Secure your producer name on 3 platforms.',
        'Create 5 short-form videos (cook-up, before/after, breakdown, tip, challenge).',
        'Set up a simple portfolio page with your best work and contact info.',
        'Set up an email list with a free download offer.',
        'Post consistently for 30 days and track results.'
      ],
      tips: ['Show your face or hands: people connect with people.', 'Reply to every comment early on; community grows from conversations.'],
      mistakes: ['Posting randomly with no niche.', 'Judging content after only a week.', 'Buying followers.'],
      assignment: {
        title: '30-Day Brand Launch',
        brief: 'Launch your producer brand publicly.',
        deliverables: ['Brand one-pager', 'Portfolio page live', 'Email signup with free offer', '15+ pieces of content posted in 30 days', 'Analytics summary: what worked best']
      },
      quiz: [
        { q: 'Why build an email list?', a: ['It is required by law', 'You own the audience regardless of algorithm changes', 'It increases audio quality', 'It replaces a distributor'], c: 1, why: 'Email gives direct access to fans.' },
        { q: 'What is a "cook-up" video?', a: ['A cooking show', 'A video of making a beat from scratch', 'A mastering tutorial', 'A live concert'], c: 1, why: 'Cook-ups are a core producer content format.' },
        { q: 'The "1,000 True Fans" idea suggests...', a: ['You need millions of followers', 'A small, dedicated fanbase can support a creator', 'Fans should be paid', 'Only labels can succeed'], c: 1, why: 'Depth of fandom matters more than breadth.' }
      ]
    },
    {
      id: 'biz-sync',
      title: 'Sync Licensing and Library Music',
      minutes: 50,
      summary: 'Placing music in film, TV, ads, games and online content through libraries, agents and direct deals.',
      objectives: ['Understand sync deals and fees', 'Prepare music for supervisors and libraries', 'Choose between exclusive and non-exclusive libraries'],
      body: `
## What sync is
A **synchronisation licence** allows music to be paired with picture: films, TV, adverts, trailers, games, online videos. Sync pays a **fee** for the licence (to both master and composition owners), and broadcast placements can also earn **performance royalties** through PROs via cue sheets.

## Routes into sync
- **Music libraries (production music)**: companies that represent catalogues for TV, ads and online.
  - **Exclusive libraries**: represent your track exclusively (often higher-value placements; sometimes upfront fees).
  - **Non-exclusive libraries**: you can place the same track elsewhere (more volume, lower fees).
- **Subscription/royalty-free platforms** (e.g. Musicbed, Artlist, Epidemic Sound): curated catalogues licensed to creators; deal terms vary from upfront buyouts to revenue shares. Read every contract.
- **Sync agents and publishers**: pitch your music to music supervisors for a commission.
- **Direct to music supervisors**: networking, sync conferences, and briefs.

## What supervisors need
- **One-stop clearance**: you control (or can clear) both the master and composition, so they license from one contact.
- **High-quality WAVs** and **instrumental versions**.
- **Alternate mixes and edits**: 15/30/60-second cutdowns, stems, clean versions.
- **Accurate metadata**: title, writers, publishers, PRO, splits, mood, tempo, keywords.
- Music that serves the picture: clear moods, builds and endings ("buttons").

## Writing for sync
- Strong emotional arc and clear sections.
- Lyrics: universal themes (hope, love, triumph), avoid brand names and very specific stories.
- Avoid uncleared samples completely.
- Endings that stop cleanly (sting/button) and alternatives that fade.
- Trailers: big builds, hits, risers, epic choruses, rhythmic sound design.

## Fees
Fees vary enormously: from small amounts for online content and libraries to tens of thousands for major adverts and films. Backend performance royalties (via cue sheets) can continue for years when shows rerun.

## Cue sheets
A cue sheet lists every music cue in a production (title, writers, publishers, duration, usage). It is filed by the production and used by PROs to pay performance royalties. Make sure your PRO registration matches your track metadata.
`,
      steps: [
        'Pick 3 instrumentals with clear moods and make full, instrumental, 60s and 30s versions.',
        'Export stems for each.',
        'Write complete metadata with mood keywords for each track.',
        'Research 3 libraries or platforms and compare exclusive vs non-exclusive terms.',
        'Submit to one library (or prepare a pitch package).',
        'Watch 3 TV adverts and note how the music builds and ends.'
      ],
      tips: ['Build a catalogue; sync is a numbers game over time.', 'Organise everything so you can respond to a brief within hours.'],
      mistakes: ['Pitching tracks with uncleared samples or unclear ownership.', 'Missing alternate versions and stems.'],
      assignment: {
        title: 'Sync Package',
        brief: 'Prepare a sync-ready mini catalogue.',
        deliverables: ['3 tracks with full, instrumental, 60s and 30s versions', 'Stems for each', 'Metadata sheet with mood keywords', 'Library comparison and one submission']
      },
      quiz: [
        { q: 'What does "one-stop clearance" mean?', a: ['Free music', 'One party can clear both master and composition', 'A mixing technique', 'Only instrumental music'], c: 1, why: 'Supervisors prefer licensing everything from one contact.' },
        { q: 'What is a cue sheet used for?', a: ['Mixing notes', 'Paying performance royalties for music used in productions', 'Tuning', 'Track artwork'], c: 1, why: 'PROs use cue sheets to distribute royalties.' },
        { q: 'Which versions should you prepare for sync?', a: ['Only the full mix', 'Full, instrumental, cutdowns and stems', 'MP3 only', 'A live version only'], c: 1, why: 'Editors need flexibility.' }
      ]
    },
    {
      id: 'biz-income',
      title: '20+ Income Streams for Producers',
      minutes: 45,
      summary: 'Every way producers earn, how to combine them, and how to choose your first three.',
      objectives: ['Know all major income streams', 'Choose a starting mix of income streams', 'Plan how income grows over time'],
      body: `
## Income streams
| # | Stream | How it pays |
|---|---|---|
| 1 | Beat leases | Per sale, recurring catalogue income |
| 2 | Exclusive beats | Larger one-off payments |
| 3 | Custom production | Project fees, points and publishing |
| 4 | Mixing services | Per song |
| 5 | Mastering services | Per track |
| 6 | Studio time | Hourly, day rates, packages |
| 7 | Session musician work | Per session or song |
| 8 | Songwriting / topline | Publishing splits and fees |
| 9 | Performance and mechanical royalties | From registered compositions |
| 10 | Master royalties | From releases you own |
| 11 | Neighbouring rights | Radio and public performance of recordings |
| 12 | Sync licensing | Fees and backend royalties |
| 13 | Library music | Upfront fees and royalties |
| 14 | Sample packs, presets, MIDI packs | Product sales or platform royalties |
| 15 | YouTube ad revenue and sponsorships | Views and brand deals |
| 16 | Teaching: lessons, courses, memberships | Students and subscriptions |
| 17 | Ghost production | Fees (you are not credited; agree terms) |
| 18 | Jingles, ads and podcast music | Commissions |
| 19 | Audio post-production | Podcast editing, dialogue cleanup, sound design for video |
| 20 | Game audio | Commissions and licences |
| 21 | DJing and live performance | Gigs |
| 22 | Grants and funding | Arts councils and music funds (e.g. FACTOR in Canada, PRS Foundation in the UK) |
| 23 | Merch and direct fan support | Sales, memberships |

## Active vs passive income
- **Active**: you trade time for money (mixing, studio time, custom production). Reliable early income.
- **Passive / catalogue**: earns after the work is done (beat leases, royalties, sample packs, library music, courses). Grows slowly but compounds.

The healthiest careers combine both: active income pays the bills while the catalogue grows.

## Choosing your first three
Pick based on your current strengths:
- **Strong beats** → beat leases + custom production + sample packs.
- **Strong ears** → mixing + mastering + studio time.
- **Strong songs** → songwriting + releases + sync.
- **Strong teaching or content** → YouTube + courses + beat sales.

## Growth path
1. **Months 1–6 of earning**: one active service + one catalogue stream.
2. **Months 6–18**: add a third stream; raise prices as demand grows.
3. **Year 2+**: build a team or studio, scale catalogue streams.
`,
      steps: [
        'Rate yourself 1–5 in beats, mixing, songwriting, content and teaching.',
        'Choose your first three income streams.',
        'For each, write the offer, price and where you will find customers.',
        'Model monthly income in the Earnings Planner.',
        'Set a 90-day income goal.'
      ],
      tips: ['Diversify, but launch one stream at a time.', 'Repurpose: one beat can be leased, used in a video, broken into a sample pack loop and pitched to sync.'],
      mistakes: ['Trying to launch all 23 at once.', 'Ignoring catalogue income because it starts slowly.'],
      assignment: {
        title: 'Income Strategy',
        brief: 'Design your income mix for the next 12 months.',
        deliverables: ['Skills self-rating', '3 chosen income streams with offers and prices', 'Earnings Planner model', '90-day income goal and actions']
      },
      quiz: [
        { q: 'Which is a catalogue (passive) income stream?', a: ['Studio time', 'Beat leases', 'Live mixing sessions', 'Session guitar'], c: 1, why: 'Leases keep selling after the beat is made.' },
        { q: 'Why combine active and passive income?', a: ['It is required', 'Active pays bills now while catalogue income grows', 'Passive income is illegal', 'Active income is always higher'], c: 1, why: 'Balance gives stability and long-term growth.' }
      ],
      tools: ['calc']
    },
    {
      id: 'biz-money',
      title: 'Money, Business Setup and Taxes',
      minutes: 45,
      summary: 'Business structures, bank accounts, bookkeeping, tax set-asides, pricing and protecting yourself.',
      objectives: ['Set up your music work as a business', 'Track income and expenses', 'Plan for taxes and savings'],
      body: `
> General education only, not financial, tax or legal advice. Rules differ by country and region. Speak with a local accountant.

## Business structure
Common options (names vary by country):
- **Sole proprietor / sole trader**: simplest; you and the business are the same legally.
- **LLC / limited company**: separates personal and business liability; more admin.
- Register a business name if required where you live.

## Banking and bookkeeping
- Open a **separate bank account** for music income and expenses.
- Use bookkeeping software or a spreadsheet: date, client, amount, category.
- Keep receipts for gear, software, subscriptions, studio rent, marketing and travel.
- Send invoices with numbers and due dates; track who has paid.

## Taxes
- Music income is usually taxable, including beat sales, royalties and services.
- Many self-employed people set aside a percentage of every payment for taxes (a commonly used rule of thumb is 25–30%; your real rate depends on your country and income).
- Some business expenses may be deductible (gear, software, part of home studio costs) depending on local rules.
- Sales taxes or VAT may apply to digital products and services above certain thresholds.
- Royalties from other countries may have withholding tax; tax treaties and forms can reduce it.

## Pricing yourself
- **Cost-based**: what you need to cover costs and pay yourself (Studio Rate Calculator in Practice Studio).
- **Market-based**: what similar producers charge locally and online.
- **Value-based**: what the result is worth to the client (a radio single vs a demo).
Raise prices when you are booked more than about 80% of your available time.

## Protecting your business
- Contracts for every project.
- Insurance for expensive gear.
- Backups (3-2-1 rule) because your catalogue is your asset.
- An emergency fund (several months of expenses) before going full time.
- Retirement savings once income is steady.

## Going full time
Common milestones before leaving a job:
- Music income covers essential expenses consistently for several months.
- At least 2–3 income streams.
- A client pipeline and savings buffer.
`,
      steps: [
        'Research business registration options in your country.',
        'Open (or plan) a separate account for music money.',
        'Create a bookkeeping spreadsheet with income and expense categories.',
        'Decide your tax set-aside percentage after reading your local guidance.',
        'Use the Studio Rate Calculator to find your break-even rate.',
        'Write a list of expenses that may be deductible and confirm with an accountant.'
      ],
      tips: ['Move the tax percentage into a savings account every time you are paid.', 'Review finances monthly.'],
      mistakes: ['Mixing personal and business money.', 'Spending all royalty income and being surprised by tax bills.'],
      assignment: {
        title: 'Business Setup',
        brief: 'Treat your music like a real business.',
        deliverables: ['Chosen business structure (or plan)', 'Bookkeeping spreadsheet', 'Tax set-aside plan', 'Break-even rate from the calculator', 'Emergency fund target']
      },
      quiz: [
        { q: 'Why have a separate bank account for music?', a: ['Banks require it', 'Clear tracking of business income and expenses', 'Higher interest', 'To avoid all taxes'], c: 1, why: 'Separation simplifies bookkeeping and taxes.' },
        { q: 'When is it a good sign to raise prices?', a: ['When you are rarely booked', 'When you are booked most of your available time', 'Every week', 'Never'], c: 1, why: 'High demand supports higher prices.' }
      ],
      tools: ['calc']
    },
    {
      id: 'biz-project',
      title: 'Semester Project: Producer Business Kit',
      minutes: 900,
      project: true,
      summary: 'Assemble every document, page and system you need to earn from music.',
      objectives: ['Launch a working music business'],
      body: `
## The brief
Build and launch your producer business kit:
1. **Brand one-pager** and portfolio page.
2. **Price list** for your chosen services and products.
3. **Licence terms** for beats (if selling beats).
4. **Split sheet** and **producer agreement** templates (reviewed by a professional if possible).
5. **Client intake form**, invoice template and revision policy.
6. **Royalty registrations**: PRO membership and a plan for mechanicals and neighbouring rights.
7. **Release plan** for your next single.
8. **Income model** in the Earnings Planner.
9. **First paying customer** (a beat sale, a mix, a session or a commission).

The ninth item is the real graduation test of this semester: getting paid.
`,
      steps: ['Brand and portfolio done', 'Price list done', 'Licences and agreements done', 'Client systems done', 'Royalty registrations started', 'Release plan done', 'Income model done', 'First paying customer'],
      assignment: {
        title: 'Business Kit Launch',
        brief: 'A complete business you can operate from tomorrow.',
        deliverables: ['All 9 kit components completed', 'A screenshot or receipt of your first payment', 'A reflection: what worked in getting your first customer']
      },
      quiz: [
        { q: 'What is the real test of this project?', a: ['A nice logo', 'Getting your first paying customer', 'Having many followers', 'Buying gear'], c: 1, why: 'Earning proves the business works.' },
        { q: 'Which documents protect collaborations?', a: ['Split sheets and agreements', 'Playlists', 'Presets', 'Artwork'], c: 0, why: 'Written agreements prevent disputes.' }
      ]
    }
  ]
});
