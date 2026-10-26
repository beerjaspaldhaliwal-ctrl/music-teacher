(window.ACADEMY = window.ACADEMY || { semesters: [] }).semesters.push({
  id: 's11',
  no: 11,
  title: 'Graduation: Master Producer Capstone',
  tagline: 'Release an EP, build your portfolio, launch your business, and plan your lifelong growth.',
  weeks: 8,
  outcomes: [
    'Release a professionally produced, mixed and mastered EP',
    'Present a portfolio that wins clients',
    'Earn real income from music work',
    'Assess yourself against the Master Producer rubric'
  ],
  lessons: [
    {
      id: 'cap-ep',
      title: 'Capstone 1: Produce and Release an EP',
      minutes: 2400,
      project: true,
      summary: 'Write, produce, record, mix, master and release a 4-track EP across at least two genres.',
      objectives: ['Deliver a complete body of work to a professional standard', 'Run a release campaign'],
      body: `
## The brief
Create a **4-track EP** that represents you as a producer:
- At least **two genres** (or a deliberate fusion).
- At least **one track with recorded vocals** (yours or a collaborator's).
- Everything produced, mixed and mastered by you.
- Consistent loudness and tone across tracks.
- All rights cleared: no uncleared samples, signed split sheets with collaborators.

## Release it
- Distribute to streaming platforms with correct metadata, ISRCs and credits.
- Register compositions with your PRO/admin.
- Run a 4-week campaign: pre-save, content plan, email, outreach to curators and press.
- Analyse the results after 30 days.

## Quality bar
Compare every track with commercial references at matched loudness. Ask three people (one producer, one artist, one non-musician) for honest feedback before release.
`,
      steps: ['EP concept, title and track list', 'All 4 tracks produced', 'Vocals recorded and produced', 'All tracks mixed', 'EP mastered consistently', 'Artwork and metadata ready', 'Distributed and registered', '4-week campaign run', '30-day results analysed'],
      assignment: {
        title: 'Your EP',
        brief: 'Your first professional release as a graduate.',
        deliverables: ['4 mastered tracks on streaming platforms', 'Signed split sheets for any collaborations', 'Registrations with PRO/admin completed', 'Campaign content and results report']
      },
      quiz: [
        { q: 'What must be true of all samples on the EP?', a: ['Under 7 seconds', 'Cleared or royalty-free/self-made', 'From famous songs', 'Reversed'], c: 1, why: 'Releases need clear rights.' },
        { q: 'Who should give feedback before release?', a: ['Nobody', 'A producer, an artist and a non-musician', 'Only family', 'Only bots'], c: 1, why: 'Different listeners catch different issues.' }
      ]
    },
    {
      id: 'cap-portfolio',
      title: 'Capstone 2: Portfolio and Client Work',
      minutes: 1800,
      project: true,
      summary: 'Build a portfolio site and reel, complete three client projects, and gather testimonials.',
      objectives: ['Present your skills professionally', 'Prove you can deliver for clients'],
      body: `
## The brief
1. **Portfolio website** with bio, services, prices, credits, contact and booking.
2. **Showreel**: 60–90 seconds of your best work, plus before/after mix and master examples.
3. **Three client projects** (paid preferred; real projects for real artists are required): e.g. a custom beat, a mix, a recording session, a master or a sync placement.
4. **Testimonials** from each client.
5. **Case study** for your best project: the brief, your process, the result.
`,
      steps: ['Portfolio website live', 'Showreel finished', 'Client project 1 delivered', 'Client project 2 delivered', 'Client project 3 delivered', 'Testimonials collected', 'Case study written'],
      assignment: {
        title: 'Professional Portfolio',
        brief: 'Everything a client needs to choose you.',
        deliverables: ['Live portfolio URL', 'Showreel', '3 delivered client projects', '3 testimonials', '1 case study']
      },
      quiz: [
        { q: 'What makes a strong case study?', a: ['A list of plugins', 'The brief, your process and the result', 'Only the price', 'Gear photos'], c: 1, why: 'Clients want to see how you solve problems.' },
        { q: 'How long should a showreel be?', a: ['10 minutes', 'About 60–90 seconds', '5 seconds', 'An hour'], c: 1, why: 'Short reels respect busy clients\' time.' }
      ]
    },
    {
      id: 'cap-launch',
      title: 'Capstone 3: Launch and the Master Producer Rubric',
      minutes: 1800,
      project: true,
      summary: 'Launch your studio or service business, hit a 90-day income goal, and assess yourself as a master producer.',
      objectives: ['Operate a music business with real revenue', 'Evaluate your mastery honestly'],
      body: `
## Launch
- Open your studio, online service or production company using your Semester 9 and 10 plans.
- Set a **90-day revenue goal** and track weekly progress.
- Review pricing, marketing and client feedback every month.

## The Master Producer rubric
Score yourself 1–5 in each area. A graduate aims for 4+ in most areas and a clear plan for the rest.

| Area | 1 (beginner) | 5 (master) |
|---|---|---|
| Songwriting and harmony | Loops with basic chords | Writes complete, emotional songs in any mode |
| Rhythm and groove | Grid-locked drums | Grooves that feel human in any genre |
| Sound design | Presets only | Designs any sound from scratch |
| Recording | Noisy, inconsistent takes | Clean, inspired performances, every time |
| Arrangement | Static loops | Arrangements with clear energy and surprise |
| Vocal production | Raw vocals | Polished, layered, genre-appropriate vocals |
| Mixing | Unbalanced | Mixes that translate and compete with references |
| Mastering | Loud and distorted | Consistent, competitive, clean masters |
| Genre range | One genre | Authentic work in 12+ genres |
| Business and rights | No agreements | Contracts, registrations, multiple income streams |
| Client work | Unreliable | Professional, on time, clients return |
| Brand and marketing | Invisible | Clear niche, consistent audience growth |

Retake the rubric every 6 months.
`,
      steps: ['Business launched', '90-day revenue goal set', 'Weekly revenue tracking running', 'Monthly review completed', 'Master Producer rubric scored', 'Improvement plan written for low areas'],
      assignment: {
        title: 'Open for Business',
        brief: 'The final proof: a working music business and an honest self-assessment.',
        deliverables: ['Business launched (studio, service or company)', '90-day revenue tracker', 'Rubric scores', 'Improvement plan for the next 6 months']
      },
      quiz: [
        { q: 'How often should you retake the rubric?', a: ['Never', 'Every 6 months', 'Every day', 'Once at graduation only'], c: 1, why: 'Regular assessment keeps your growth deliberate.' },
        { q: 'What score does a graduate aim for in most areas?', a: ['1', '2', '4 or higher', 'It does not matter'], c: 2, why: 'Mastery means strength across the craft and the business.' }
      ]
    },
    {
      id: 'cap-lifelong',
      title: 'Life After Graduation: Becoming a Master',
      minutes: 30,
      summary: 'Deliberate practice, mentors, staying current and building a long career.',
      objectives: ['Build a lifelong learning plan', 'Stay relevant and inspired'],
      body: `
## Mastery is a practice, not a finish line
Graduating means you have the complete toolkit. Masters keep sharpening it for decades.

## Deliberate practice
- Pick one weakness at a time and design exercises for it.
- Get feedback from people better than you.
- Recreate songs you admire to learn new techniques.
- Set measurable goals ("mix 20 songs this quarter", "finish a track every week").

## Stay current
- Follow new releases weekly in your genres and outside them.
- Learn new tools when they solve real problems; ignore hype.
- Watch how listening habits change (short-form video, spatial audio, AI tools) and adapt.

## Mentors and community
- Find mentors: engineers, producers, studio owners. Offer value (assisting, helping with tasks) in return for learning.
- Mentor others: teaching deepens your own understanding.
- Keep a network of collaborators across genres and roles.

## Protect the love of music
Keep a project that is only for you, with no clients and no deadlines. It keeps your creativity alive.

## Your next 12 months
Write down:
1. Three creative goals.
2. Three technical goals.
3. Three business goals.
4. One health goal.
5. One way you will give back to your music community.

Congratulations, producer. Now go make something great.
`,
      steps: ['Write 3 creative goals', 'Write 3 technical goals', 'Write 3 business goals', 'Write 1 health goal and 1 community goal', 'Find one mentor and one person to mentor'],
      assignment: {
        title: 'The Next 12 Months',
        brief: 'Your plan for lifelong mastery.',
        deliverables: ['12-month goals across 5 areas', 'Mentor contacted', 'A personal music project started']
      },
      quiz: [
        { q: 'What is deliberate practice?', a: ['Practising only what you are good at', 'Targeted exercises on weaknesses with feedback', 'Watching tutorials passively', 'Practising once a month'], c: 1, why: 'Focused work on weaknesses drives improvement.' },
        { q: 'Why keep a personal project with no clients?', a: ['To avoid work', 'To protect your creativity and love of music', 'It earns more', 'It is required'], c: 1, why: 'Creative freedom sustains long careers.' }
      ]
    }
  ]
});
