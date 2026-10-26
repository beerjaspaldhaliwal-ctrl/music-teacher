(function () {
  const A = window.ACADEMY;
  const esc = window.MD.esc;
  const md = window.MD.render;

  if (A.hhFinalize) A.hhFinalize();
  A.semesters.sort(function (a, b) { return a.no - b.no; });
  const LESSONS = [];
  const BY_ID = {};
  A.semesters.forEach(function (s) {
    s.lessons.forEach(function (l, i) {
      l.semester = s; l.index = i;
      LESSONS.push(l); BY_ID[l.id] = l;
    });
  });
  const SEM_BY_ID = {};
  A.semesters.forEach(function (s) { SEM_BY_ID[s.id] = s; });

  const framed = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  const main = document.getElementById('main');
  let current = null;
  let genreFilter = 'All';
  let studioTab = 'drums';

  // ---------- Helpers ----------
  function semProgress(s) {
    const req = s.required || [];
    const min = s.minLessons || s.lessons.length;
    const done = s.lessons.filter(function (l) { return Store.isDone(l.id); }).length;
    const reqDone = req.every(function (id) { return Store.isDone(id); });
    const complete = done >= min && reqDone;
    const pct = complete ? 100 : Math.min(99, Math.round(Math.min(done, min) / min * 100));
    return { done: done, min: min, total: s.lessons.length, complete: complete, pct: pct };
  }

  function semCompletedAt(s) {
    let t = 0;
    s.lessons.forEach(function (l) { const v = Store.state.completed[l.id]; if (v && v > t) t = v; });
    return t;
  }

  function nextLesson() {
    for (let i = 0; i < A.semesters.length; i++) {
      const s = A.semesters[i];
      const p = semProgress(s);
      if (p.complete || s.elective) continue;
      const req = s.required || [];
      if (s.minLessons) {
        const optionalDone = s.lessons.filter(function (l) { return req.indexOf(l.id) === -1 && Store.isDone(l.id); }).length;
        const first = req.find(function (id) { return !Store.isDone(id); });
        if (first && (optionalDone >= s.minLessons - req.length || first === s.lessons[0].id)) return BY_ID[first];
      }
      const l = s.lessons.find(function (x) { return !Store.isDone(x.id); });
      if (l) return l;
    }
    return null;
  }

  function xpInfo() {
    const xp = Store.totalXP(LESSONS);
    const r = Store.rankFor(xp);
    return { xp: xp, rank: r };
  }

  function counts() {
    let lessons = 0, assignments = 0, quizzes = 0;
    LESSONS.forEach(function (l) {
      if (Store.isDone(l.id)) lessons++;
      const q = Store.quizState(l.id); if (q && q.passed) quizzes++;
      const dl = (l.assignment && l.assignment.deliverables) || [];
      if (dl.length && Object.keys(Store.delivState(l.id)).length >= dl.length) assignments++;
    });
    return { lessons: lessons, assignments: assignments, quizzes: quizzes };
  }

  function fmtDate(t) {
    try { return new Date(t).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { return ''; }
  }

  function meter(pct, cls) { return '<div class="meter' + (cls ? ' ' + cls : '') + '" style="--pct:' + Math.max(0, Math.min(100, pct)) + '" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"></div>'; }

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.hidden = true; }, 2600);
  }

  function copy(text) {
    function fallback() {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      toast(ok ? 'Copied to clipboard' : 'Select the text and copy it manually');
    }
    try {
      navigator.clipboard.writeText(text).then(function () { toast('Copied to clipboard'); }, fallback);
    } catch (e) { fallback(); }
  }

  function toolName(id) { const t = Tools.list.find(function (x) { return x.id === id; }); return t ? t.name : id; }

  // ---------- Router ----------
  function parse(h) {
    h = (h || '').replace(/^#/, '');
    const i = h.indexOf('.');
    return i < 0 ? { view: h || 'home', arg: null } : { view: h.slice(0, i), arg: h.slice(i + 1) };
  }

  function go(token) {
    if (location.hash === '#' + token) { render(token); return; }
    try { location.hash = token; } catch (e) { render(token); }
    // Some sandboxed frames ignore hash changes; render anyway if nothing fired.
    setTimeout(function () { if (current !== token) render(token); }, 30);
  }

  function render(token) {
    Tools.stopAll();
    current = token;
    const r = parse(token);
    const views = { home: viewHome, school: viewSchool, semester: viewSemester, lesson: viewLesson, genres: viewGenres, electives: viewElectives, studio: viewStudio, roadmap: viewRoadmap, glossary: viewGlossary, library: viewLibrary, profile: viewProfile };
    (views[r.view] || viewHome)(r.arg);
    renderRail(r.view);
    closeMenu();
    window.scrollTo(0, 0);
    try { main.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const token = a.getAttribute('href').slice(1);
    if (!token) return;
    e.preventDefault();
    go(token);
  });
  window.addEventListener('hashchange', function () {
    const t = location.hash.slice(1) || 'home';
    if (t !== current) render(t);
  });

  // ---------- Rail ----------
  function renderRail(view) {
    const c = counts();
    const items = [
      ['home', 'Dashboard', ''],
      ['school', 'School', c.lessons + '/' + LESSONS.length],
      ['genres', 'Hip-Hop Styles', (A.hhStyles || []).length || ''],
      ['studio', 'Practice Studio', ''],
      ['roadmap', 'Roadmap & Log', ''],
      ['glossary', 'Glossary', ''],
      ['library', 'Library', ''],
      ['profile', 'Profile & Certificates', '']
    ];
    const activeMap = { semester: 'school', lesson: 'school', electives: 'genres' };
    let active = activeMap[view] || view;
    if (view === 'lesson') {
      const l = BY_ID[parse(current).arg];
      if (l && (l.genre || l.styleId)) active = 'genres';
    }
    let html = '<span class="nav-label">Learn</span>';
    items.forEach(function (it, i) {
      if (i === 3) html += '<span class="nav-label">Practise</span>';
      if (i === 5) html += '<span class="nav-label">Reference</span>';
      html += '<a href="#' + it[0] + '" class="' + (active === it[0] ? 'active' : '') + '"><span class="led"></span>' + it[1] + (it[2] !== '' ? '<span class="count">' + it[2] + '</span>' : '') + '</a>';
    });
    document.getElementById('railNav').innerHTML = html;
    const x = xpInfo();
    document.getElementById('railFoot').innerHTML =
      '<span class="who">' + esc(Store.state.name || 'Student') + '</span>' +
      '<span class="rank">' + esc(x.rank.current.name) + '</span>' +
      meter(x.rank.pct) +
      '<span class="xp">' + x.xp.toLocaleString() + ' XP' + (x.rank.next ? ' · ' + (x.rank.next.xp - x.xp).toLocaleString() + ' to ' + esc(x.rank.next.name) : '') + '</span>';
    document.getElementById('topRank').textContent = x.rank.current.name;
  }

  Store.onChange(function () { renderRail(parse(current).view); });

  // ---------- Mobile menu ----------
  const rail = document.getElementById('rail'), scrim = document.getElementById('scrim'), menuBtn = document.getElementById('menuBtn');
  function closeMenu() { rail.classList.remove('open'); scrim.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.onclick = function () {
    const open = !rail.classList.contains('open');
    rail.classList.toggle('open', open); scrim.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open));
  };
  scrim.onclick = closeMenu;

  // ---------- Dashboard ----------
  function viewHome() {
    const x = xpInfo(), c = counts(), nx = nextLesson();
    const name = Store.state.name;
    const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const drill = A.drills[day % A.drills.length];
    const hours = (Store.practiceMinutes() / 60);
    let semRows = A.semesters.map(function (s) {
      const p = semProgress(s);
      return '<a class="sem-row' + (p.complete ? ' complete' : '') + '" href="#semester.' + s.id + '">' +
        '<span class="sem-no">' + (s.elective ? 'EL' : String(s.no).padStart(2, '0')) + '</span>' +
        '<span><h3>' + esc(s.title) + '</h3><p>' + esc(s.tagline) + '</p></span>' +
        '<span class="sem-meter">' + meter(p.pct, p.complete ? 'good' : '') + '<span>' + (p.complete ? 'Certified' : Math.min(p.done, p.min) + ' / ' + p.min + ' lessons') + '</span></span>' +
      '</a>';
    }).join('');

    main.innerHTML =
      '<div class="page">' +
        '<section class="hero">' +
          '<div class="stack">' +
            '<span class="eyebrow">' + esc(fmtDate(Date.now())) + '</span>' +
            '<h1 class="display">' + (name ? 'Welcome back,<br>' + esc(name) : 'Your hip-hop<br>production school') + '</h1>' +
            '<p class="lede">Fifteen semesters from your first beat to running your own hip-hop studio: every style from boom bap and G-funk to trap, drill and Punjabi drill, plus recording artists, mixing, mastering, placements and the business.</p>' +
            (name ? '' : '<form class="btn-row" id="nameForm"><input type="text" id="nameInput" placeholder="Your name (for certificates)" style="max-width:280px" aria-label="Your name"><button class="btn primary" type="submit">Start school</button></form>') +
          '</div>' +
          '<div class="rank-card">' +
            '<span class="eyebrow muted">Current rank</span>' +
            '<span class="rank-name">' + esc(x.rank.current.name) + '</span>' +
            meter(x.rank.pct) +
            '<span class="muted small mono">' + x.xp.toLocaleString() + ' XP' + (x.rank.next ? ' · next: ' + esc(x.rank.next.name) + ' at ' + x.rank.next.xp.toLocaleString() : ' · top rank reached') + '</span>' +
          '</div>' +
        '</section>' +
        (nx ? '<section class="card raised continue">' +
          '<div class="stack" style="gap:6px"><span class="eyebrow">Continue · Semester ' + nx.semester.no + ' · ' + esc(nx.semester.title) + '</span><h3>' + esc(nx.title) + '</h3><p class="muted" style="margin:0">' + esc(nx.summary) + '</p></div>' +
          '<a class="btn primary" href="#lesson.' + nx.id + '">' + (Store.isDone(LESSONS[0].id) ? 'Continue lesson' : 'Begin first lesson') + '</a>' +
        '</section>' : '<section class="card raised continue"><div class="stack"><span class="eyebrow">All semesters complete</span><h3>You graduated. Keep practising daily.</h3></div><a class="btn primary" href="#profile">See diploma</a></section>') +
        '<section class="stat-row">' +
          '<div class="stat"><span class="v">' + c.lessons + '<small class="muted" style="font-size:1rem">/' + LESSONS.length + '</small></span><span class="k">Lessons completed</span></div>' +
          '<div class="stat"><span class="v">' + c.assignments + '</span><span class="k">Assignments finished</span></div>' +
          '<div class="stat"><span class="v">' + c.quizzes + '</span><span class="k">Quizzes passed</span></div>' +
          '<div class="stat"><span class="v">' + Store.streak() + '</span><span class="k">Day streak · ' + hours.toFixed(1) + ' h logged</span></div>' +
        '</section>' +
        '<section class="card drill">' +
          '<span class="clock">15 MIN</span>' +
          '<div class="stack" style="gap:8px"><span class="eyebrow">Today\'s drill</span><p style="margin:0;font-size:1.0625rem">' + esc(drill) + '</p><div class="btn-row"><button class="btn small" type="button" id="logDrill">Done: log 15 minutes</button><a class="btn small ghost" href="#studio">Open Practice Studio</a></div></div>' +
        '</section>' +
        '<section class="stack"><div class="split"><h2 class="section-title">Hip-hop styles</h2><a href="#genres" class="small">All ' + A.hhStyles.length + ' styles</a></div><div class="genre-grid">' +
          A.hhStyles.slice(0, 8).map(styleCard).join('') +
        '</div></section>' +
        '<section class="stack"><div class="split"><h2 class="section-title">Semesters</h2><a href="#school" class="small">Full curriculum</a></div><div class="sem-list">' + semRows + '</div></section>' +
        '<section class="stack"><h2 class="section-title">Practice Studio</h2><div class="grid cols-3">' +
          Tools.list.map(function (t) { return '<a class="card" href="#studio.' + t.id + '" style="text-decoration:none;color:inherit;display:grid;gap:6px"><strong>' + esc(t.name) + '</strong><span class="muted small">' + esc(t.desc) + '</span></a>'; }).join('') +
        '</div></section>' +
      '</div>';

    const f = document.getElementById('nameForm');
    if (f) f.onsubmit = function (e) {
      e.preventDefault();
      const v = document.getElementById('nameInput').value.trim();
      if (v) Store.setName(v);
      go('lesson.' + LESSONS[0].id);
    };
    document.getElementById('logDrill').onclick = function () {
      Store.logPractice(15, 'Daily drill: ' + drill);
      toast('Logged 15 minutes. +15 XP');
      this.disabled = true; this.textContent = 'Logged';
    };
  }

  // ---------- School (curriculum) ----------
  function viewSchool() {
    let html = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Curriculum</span><h1 class="display">The School</h1>' +
      '<p class="lede">' + LESSONS.length + ' lessons across ' + A.semesters.filter(function (s) { return !s.elective; }).length + ' semesters plus electives. Work in order, or jump to what you need. Every lesson has a step-by-step guide, videos to watch, a practical assignment and a quiz.</p></header>' +
      '<div class="field"><label for="schoolSearch">Search every lesson</label><input type="search" id="schoolSearch" placeholder="Try: sidechain, 808, royalties, Dorian, vocal booth…"></div>' +
      '<div id="searchOut" class="search-results" hidden></div>' +
      '<div id="semOut" class="stack" style="gap:28px">';
    A.semesters.forEach(function (s) {
      const p = semProgress(s);
      const ls = s.genres ? s.lessons.filter(function (l) { return !l.genre; }) : s.lessons;
      html += '<section class="stack">' +
        '<div class="split"><div><span class="eyebrow">' + (s.elective ? 'Optional electives' : 'Semester ' + s.no + ' · ' + s.weeks + ' weeks') + '</span><h2 class="section-title">' + esc(s.title) + '</h2></div>' +
        '<div style="min-width:160px;display:grid;gap:4px">' + meter(p.pct, p.complete ? 'good' : '') + '<span class="small muted mono">' + (p.complete ? 'Certificate earned' : Math.min(p.done, p.min) + ' / ' + p.min + ' to certify') + '</span></div></div>' +
        lessonList(ls) +
        (s.genres ? '<a class="btn" href="#electives">Browse all ' + s.genres.length + ' elective genre studios</a>' : '') +
      '</section>';
    });
    html += '</div></div>';
    main.innerHTML = html;
    const input = document.getElementById('schoolSearch');
    input.oninput = function () {
      const q = input.value.trim().toLowerCase();
      const out = document.getElementById('searchOut'), sem = document.getElementById('semOut');
      if (q.length < 2) { out.hidden = true; sem.hidden = false; return; }
      const hits = LESSONS.filter(function (l) {
        return (l.title + ' ' + l.summary + ' ' + l.body + ' ' + (l.steps || []).join(' ')).toLowerCase().indexOf(q) > -1;
      });
      out.innerHTML = hits.length ? '<p class="muted small" style="margin:0">' + hits.length + ' lessons mention "' + esc(input.value.trim()) + '"</p>' + lessonList(hits, true) : '<div class="empty">No lessons match "' + esc(input.value.trim()) + '". Try a broader word.</div>';
      out.hidden = false; sem.hidden = true;
    };
  }

  function lessonList(ls, showSem) {
    let group = null;
    return '<div class="lesson-list">' + ls.map(function (l) {
      const done = Store.isDone(l.id);
      const q = Store.quizState(l.id);
      let head = '';
      if (!showSem && l.group && l.group !== group) head = '<div class="lesson-group">' + esc(l.group) + '</div>';
      group = l.group || null;
      return head + '<a class="lesson-item' + (done ? ' done' : '') + '" href="#lesson.' + l.id + '">' +
        '<span class="no">' + (done ? '<span class="check-dot on" aria-label="Completed"></span>' : (l.semester.no + '.' + String(l.index + 1).padStart(2, '0'))) + '</span>' +
        '<span><span class="t">' + esc(l.title) + '</span><div class="s">' + (showSem ? 'Semester ' + l.semester.no + ' · ' : '') + esc(l.summary) + '</div></span>' +
        '<span class="badges">' +
          (l.project ? '<span class="chip accent">Project</span>' : '') +
          (q && q.passed ? '<span class="chip done">Quiz ' + q.best + '/' + q.total + '</span>' : '') +
          '<span class="chip">' + (l.minutes >= 120 ? Math.round(l.minutes / 60) + ' h' : l.minutes + ' min') + '</span>' +
        '</span>' +
      '</a>';
    }).join('') + '</div>';
  }

  // ---------- Semester ----------
  function viewSemester(id) {
    const s = SEM_BY_ID[id] || A.semesters[0];
    const p = semProgress(s);
    const ls = s.genres ? s.lessons.filter(function (l) { return !l.genre; }) : s.lessons;
    main.innerHTML = '<div class="page">' +
      '<nav class="crumbs"><a href="#school">School</a><span>/</span><span>Semester ' + s.no + '</span></nav>' +
      '<header class="stack"><span class="eyebrow">' + (s.elective ? 'Optional electives' : 'Semester ' + s.no) + ' · ' + s.weeks + ' weeks · ' + s.lessons.length + ' lessons</span><h1 class="display">' + esc(s.title) + '</h1><p class="lede">' + esc(s.tagline) + '</p>' +
      '<div style="max-width:420px;display:grid;gap:6px">' + meter(p.pct, p.complete ? 'good' : '') + '<span class="small muted mono">' + (p.complete ? 'Complete' : Math.min(p.done, p.min) + ' of ' + p.min + ' lessons needed for the certificate' + (s.required ? ' (including ' + s.required.map(function (r) { return BY_ID[r].title; }).join(' and ') + ')' : '')) + '</span></div></header>' +
      '<section class="objectives"><strong>By the end of this semester you will be able to:</strong><ul>' + s.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></section>' +
      '<section class="stack"><h2 class="section-title">Lessons</h2>' + lessonList(ls) + (s.genres ? '<a class="btn primary" href="#electives">Open the ' + s.genres.length + ' elective genre studios</a>' : '') + (s.hiphop ? '<a class="btn" href="#genres">See all hip-hop styles</a>' : '') + '</section>' +
      '<section class="stack"><h2 class="section-title">Certificate</h2>' + certificate(s, p) + '</section>' +
    '</div>';
    bindPrint();
  }

  function certificate(s, p) {
    const who = Store.state.name || 'Your Name';
    return '<div class="cert' + (p.complete ? '' : ' locked') + '">' +
      '<span class="seal">' + (p.complete ? 'Cert<br>ified' : 'Lock<br>ed') + '</span>' +
      '<span class="eyebrow">Hip-Hop Academy certifies that</span>' +
      '<span class="who">' + esc(who) + '</span>' +
      '<span>has completed <strong>' + (s.elective ? 'the electives' : 'Semester ' + s.no) + ': ' + esc(s.title) + '</strong></span>' +
      '<span class="muted small">' + (p.complete ? 'Awarded ' + esc(fmtDate(semCompletedAt(s))) : 'Complete ' + p.min + ' lessons to earn this certificate (' + Math.min(p.done, p.min) + ' done)') + '</span>' +
      (p.complete && !framed ? '<button class="btn small no-print" type="button" data-print>Print certificate</button>' : '') +
    '</div>';
  }

  function bindPrint() {
    document.querySelectorAll('[data-print]').forEach(function (b) { b.onclick = function () { window.print(); }; });
  }

  // ---------- Lesson ----------
  function viewLesson(id) {
    const l = BY_ID[id];
    if (!l) { viewSchool(); return; }
    const s = l.semester;
    const prev = LESSONS[LESSONS.indexOf(l) - 1], next = LESSONS[LESSONS.indexOf(l) + 1];
    const steps = l.steps || [], st = Store.stepState(l.id);
    const dl = (l.assignment && l.assignment.deliverables) || [], ds = Store.delivState(l.id);
    const g = l.genre;

    const parts = l.styleId ? LESSONS.filter(function (x) { return x.styleId === l.styleId; }) : [];
    const semLabel = s.elective ? 'Electives' : 'Semester ' + s.no;
    const eyebrow = l.styleId ? esc(l.styleName) + ' · Part ' + (parts.indexOf(l) + 1) + ' of ' + parts.length
      : g ? esc(g.family) + ' · Elective genre studio'
      : semLabel + ' · Lesson ' + (l.index + 1) + ' of ' + s.lessons.length;
    let head = '<nav class="crumbs"><a href="#school">School</a><span>/</span><a href="#semester.' + s.id + '">' + semLabel + '</a>' +
      (g ? '<span>/</span><a href="#electives">Elective genres</a>' : '') +
      (l.styleId ? '<span>/</span><a href="#genres">Hip-Hop Styles</a><span>/</span><a href="#lesson.' + parts[0].id + '">' + esc(l.styleName) + '</a>' : '') +
      '<span>/</span><span>' + esc(l.title) + '</span></nav>' +
      (parts.length > 1 ? '<nav class="part-nav" aria-label="Masterclass parts">' + parts.map(function (x, i) {
        return '<a class="chip' + (x === l ? ' cur' : Store.isDone(x.id) ? ' done' : '') + '" href="#lesson.' + x.id + '">' + (Store.isDone(x.id) && x !== l ? '✓ ' : '') + 'Part ' + (i + 1) + '</a>';
      }).join('') + '</nav>' : '') +
      '<header class="lesson-head">' +
        '<span class="eyebrow">' + eyebrow + '</span>' +
        '<h1 class="display">' + esc(l.title) + '</h1>' +
        '<p class="lede">' + esc(l.summary) + '</p>' +
        '<div class="lesson-meta">' +
          '<span class="chip">' + (l.minutes >= 120 ? 'About ' + Math.round(l.minutes / 60) + ' hours' : l.minutes + ' min') + '</span>' +
          (steps.length ? '<span class="chip">' + steps.length + ' steps</span>' : '') +
          (dl.length ? '<span class="chip">Assignment</span>' : '') +
          (l.quiz && l.quiz.length ? '<span class="chip">' + l.quiz.length + '-question quiz</span>' : '') +
          (l.project ? '<span class="chip accent">Semester project</span>' : '') +
          (Store.isDone(l.id) ? '<span class="chip done">Completed</span>' : '') +
        '</div>' +
      '</header>';

    let genreFacts = '';
    if (g) {
      genreFacts = '<section class="facts">' +
        '<div class="fact"><div class="k">Tempo</div><div class="v">' + (g.bpm[0] === g.bpm[1] ? g.bpm[0] : g.bpm[0] + '–' + g.bpm[1]) + ' BPM</div></div>' +
        '<div class="fact"><div class="k">Feel</div><div class="v" style="font-size:1.1rem">' + esc(g.feel) + '</div></div>' +
        '<div class="fact"><div class="k">Family</div><div class="v" style="font-size:1.1rem">' + esc(g.family) + '</div></div>' +
      '</section>';
    }

    let practice = '';
    const beats = l.beats || [];
    if (beats.length || (l.tools && l.tools.length)) {
      practice = '<section class="card stack"><strong>Practise in the studio</strong><div class="btn-row">' +
        beats.map(function (b, i) { return '<button class="btn ' + (b.keys || b.bass ? 'primary ' : '') + 'small" type="button" data-beat="' + i + '">' + (b.keys || b.bass ? 'Play' : 'Load') + ' "' + esc(b.name) + '" in Beat Lab</button>'; }).join('') +
        (l.tools || []).filter(function (t) { return !(t === 'drums' && beats.length); }).map(function (t) { return '<a class="btn small" href="#studio.' + t + '">Open ' + esc(toolName(t)) + '</a>'; }).join('') +
      '</div></section>';
    }

    const stepsHtml = steps.length ? '<section class="block" id="stepsBlock"><header><h2>Step-by-step guide</h2><span class="tag" id="stepCount">' + Object.keys(st).length + ' / ' + steps.length + ' done</span></header><ol class="steps">' +
      steps.map(function (t, i) {
        return '<li class="' + (st[i] ? 'checked' : '') + '"><span class="txt">' + window.MD.inline(t) + '</span><input type="checkbox" data-step="' + i + '" aria-label="Mark step ' + (i + 1) + ' done"' + (st[i] ? ' checked' : '') + '></li>';
      }).join('') + '</ol></section>' : '';

    const tipsHtml = (l.tips || l.mistakes) ? '<section class="two-col">' +
      (l.tips ? '<div class="callout tips"><h3>Pro tips</h3><ul>' + l.tips.map(function (t) { return '<li>' + window.MD.inline(t) + '</li>'; }).join('') + '</ul></div>' : '') +
      (l.mistakes ? '<div class="callout mistakes"><h3>Common mistakes</h3><ul>' + l.mistakes.map(function (t) { return '<li>' + window.MD.inline(t) + '</li>'; }).join('') + '</ul></div>' : '') +
    '</section>' : '';

    const as = l.assignment;
    const assignHtml = as ? '<section class="block"><header><h2>Practical assignment</h2><span class="tag" id="delivCount">' + Object.keys(ds).length + ' / ' + dl.length + ' delivered</span></header>' +
      '<div class="sheet"><div class="sheet-head"><span class="t">' + esc(as.title) + '</span><span class="rec">REC · +' + Store.XP.assignment + ' XP</span></div>' +
      '<div class="sheet-body"><p style="margin:0">' + window.MD.inline(as.brief) + '</p>' +
      '<ul class="deliv">' + dl.map(function (d, i) {
        return '<li class="' + (ds[i] ? 'checked' : '') + '"><input type="checkbox" id="dv' + i + '" data-deliv="' + i + '"' + (ds[i] ? ' checked' : '') + '><label for="dv' + i + '">' + window.MD.inline(d) + '</label></li>';
      }).join('') + '</ul>' +
      (as.stretch ? '<p class="small" style="margin:0"><strong>Stretch goal:</strong> ' + window.MD.inline(as.stretch) + '</p>' : '') +
      '<div class="field"><label for="noteBox">Your notes and links for this assignment (saved in this browser)</label><textarea id="noteBox" class="note-box" placeholder="What you made, links to files, what you learned, questions to revisit…">' + esc(Store.note(l.id)) + '</textarea></div>' +
      '</div></div></section>' : '';

    const quizHtml = (l.quiz && l.quiz.length) ? '<section class="block"><header><h2>Quiz</h2><span class="tag">Pass mark 70% · +' + Store.XP.quiz + ' XP</span></header><div class="quiz" id="quiz">' + quizBody(l) + '</div></section>' : '';

    main.innerHTML = '<div class="page narrow">' + head + genreFacts +
      '<section class="objectives"><strong>Learning objectives</strong><ul>' + l.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></section>' +
      practice +
      '<section class="block"><header><h2>' + (l.project ? 'The brief' : 'Lesson') + '</h2></header><div class="prose">' + md(l.body) + '</div></section>' +
      watchHtml(l) +
      stepsHtml + tipsHtml + assignHtml + quizHtml +
      '<section class="complete-bar" id="completeBar"></section>' +
      '<nav class="pager">' +
        (prev ? '<a href="#lesson.' + prev.id + '"><span class="dir">Previous</span><span class="t">' + esc(prev.title) + '</span></a>' : '') +
        (next ? '<a class="next" href="#lesson.' + next.id + '"><span class="dir">Next</span><span class="t">' + esc(next.title) + '</span></a>' : '') +
      '</nav>' +
    '</div>';

    renderCompleteBar(l);

    main.querySelectorAll('[data-beat]').forEach(function (b) {
      b.onclick = function () { Tools.Drum.load(beats[+b.dataset.beat]); studioTab = 'drums'; go('studio.drums'); };
    });
    main.querySelectorAll('[data-step]').forEach(function (cb) {
      cb.onchange = function () {
        Store.toggleStep(l.id, +cb.dataset.step);
        cb.closest('li').classList.toggle('checked', cb.checked);
        const n = Object.keys(Store.stepState(l.id)).length;
        document.getElementById('stepCount').textContent = n + ' / ' + steps.length + ' done';
        if (n === steps.length && cb.checked) toast('All steps done. +' + Store.XP.steps + ' XP');
        renderCompleteBar(l);
      };
    });
    main.querySelectorAll('[data-deliv]').forEach(function (cb) {
      cb.onchange = function () {
        Store.toggleDeliv(l.id, +cb.dataset.deliv);
        cb.closest('li').classList.toggle('checked', cb.checked);
        const n = Object.keys(Store.delivState(l.id)).length;
        document.getElementById('delivCount').textContent = n + ' / ' + dl.length + ' delivered';
        if (n === dl.length && cb.checked) toast('Assignment complete. +' + Store.XP.assignment + ' XP');
        renderCompleteBar(l);
      };
    });
    const nb = document.getElementById('noteBox');
    if (nb) {
      let t = null;
      nb.oninput = function () { clearTimeout(t); t = setTimeout(function () { Store.setNote(l.id, nb.value); }, 400); };
    }
    bindQuiz(l);
  }

  function renderCompleteBar(l) {
    const bar = document.getElementById('completeBar'); if (!bar) return;
    const done = Store.isDone(l.id);
    const q = Store.quizState(l.id);
    const dl = (l.assignment && l.assignment.deliverables) || [];
    const dDone = dl.length && Object.keys(Store.delivState(l.id)).length >= dl.length;
    const st = l.steps || [];
    const sDone = st.length && Object.keys(Store.stepState(l.id)).length >= st.length;
    function item(ok, label, xp) { return '<span class="chip' + (ok ? ' done' : '') + '">' + (ok ? '✓ ' : '') + label + ' +' + xp + '</span>'; }
    bar.innerHTML =
      '<div class="stack" style="gap:8px"><strong>' + (done ? 'Lesson complete' : 'Finish this lesson') + '</strong><div class="chips">' +
        item(done, 'Lesson', Store.XP.lesson) +
        (l.quiz && l.quiz.length ? item(q && q.passed, 'Quiz', Store.XP.quiz) : '') +
        (dl.length ? item(dDone, 'Assignment', Store.XP.assignment) : '') +
        (st.length ? item(sDone, 'Steps', Store.XP.steps) : '') +
      '</div></div>' +
      (done ? '<button class="btn" type="button" id="undoDone">Mark as not complete</button>' : '<button class="btn good" type="button" id="markDone">Mark lesson complete</button>');
    const m = document.getElementById('markDone');
    if (m) m.onclick = function () {
      const before = semProgress(l.semester).complete;
      Store.setDone(l.id, true);
      renderCompleteBar(l);
      const after = semProgress(l.semester).complete;
      toast(after && !before ? 'Semester ' + l.semester.no + ' complete! Certificate unlocked.' : 'Lesson complete. +' + Store.XP.lesson + ' XP');
    };
    const u = document.getElementById('undoDone');
    if (u) u.onclick = function () { Store.setDone(l.id, false); renderCompleteBar(l); };
  }

  const quizSel = {};
  function quizBody(l, checked) {
    const sel = quizSel[l.id] || (quizSel[l.id] = {});
    let html = l.quiz.map(function (q, i) {
      return '<div class="q"><div class="qt">' + (i + 1) + '. ' + window.MD.inline(q.q) + '</div><div class="opts" role="radiogroup" aria-label="Question ' + (i + 1) + '">' +
        q.a.map(function (a, j) {
          let cls = 'opt';
          if (checked) { if (j === q.c) cls += ' right'; else if (sel[i] === j) cls += ' wrong'; }
          else if (sel[i] === j) cls += ' sel';
          return '<button type="button" class="' + cls + '" role="radio" aria-checked="' + (sel[i] === j) + '" data-q="' + i + '" data-a="' + j + '"' + (checked ? ' disabled' : '') + '>' + window.MD.inline(a) + '</button>';
        }).join('') + '</div>' +
        (checked ? '<div class="why">' + (sel[i] === q.c ? 'Correct. ' : 'Answer: ' + window.MD.inline(q.a[q.c]) + '. ') + window.MD.inline(q.why || '') + '</div>' : '') +
      '</div>';
    }).join('');
    if (checked) {
      const score = l.quiz.filter(function (q, i) { return sel[i] === q.c; }).length;
      const pass = score / l.quiz.length >= 0.7;
      html += '<div class="quiz-result ' + (pass ? 'pass' : 'fail') + '"><span class="score">' + score + ' / ' + l.quiz.length + '</span><span>' + (pass ? 'Passed. Well done.' : 'Not yet. Review the lesson and try again.') + '</span><button class="btn small" type="button" id="quizRetry">Try again</button></div>';
    } else {
      const prev = Store.quizState(l.id);
      html += '<div class="btn-row"><button class="btn primary" type="button" id="quizCheck">Check answers</button>' + (prev ? '<span class="small muted">Best score: ' + prev.best + ' / ' + prev.total + (prev.passed ? ' · passed' : '') + '</span>' : '') + '</div>';
    }
    return html;
  }

  function bindQuiz(l) {
    const box = document.getElementById('quiz'); if (!box) return;
    const sel = quizSel[l.id] || (quizSel[l.id] = {});
    box.querySelectorAll('.opt:not([disabled])').forEach(function (b) {
      b.onclick = function () {
        const qi = +b.dataset.q;
        sel[qi] = +b.dataset.a;
        box.querySelectorAll('.opt[data-q="' + qi + '"]').forEach(function (o) {
          const on = +o.dataset.a === sel[qi];
          o.classList.toggle('sel', on); o.setAttribute('aria-checked', String(on));
        });
      };
    });
    const chk = document.getElementById('quizCheck');
    if (chk) chk.onclick = function () {
      const answered = Object.keys(sel).length;
      if (answered < l.quiz.length) { toast('Answer all ' + l.quiz.length + ' questions first (' + answered + ' answered).'); return; }
      const score = l.quiz.filter(function (q, i) { return sel[i] === q.c; }).length;
      const before = Store.quizState(l.id);
      const passed = Store.recordQuiz(l.id, score, l.quiz.length);
      box.innerHTML = quizBody(l, true);
      bindQuiz(l);
      renderCompleteBar(l);
      if (passed && !(before && before.passed)) toast('Quiz passed! +' + Store.XP.quiz + ' XP');
    };
    const rt = document.getElementById('quizRetry');
    if (rt) rt.onclick = function () { quizSel[l.id] = {}; box.innerHTML = quizBody(l); bindQuiz(l); };
  }

  // ---------- Hip-hop styles and electives ----------
  function miniGrid(p) {
    if (!p || !p.kick) return '<div class="mini-grid" aria-hidden="true">' + new Array(17).join('<span></span>') + '</div>';
    let h = '<div class="mini-grid" aria-hidden="true">';
    for (let i = 0; i < 16; i++) {
      const k = (p.kick || '')[i] === 'x';
      const s = (p.snare || '')[i] === 'x' || (p.clap || '')[i] === 'x';
      h += '<span class="' + (s ? 's' : k ? 'k' : '') + '"></span>';
    }
    return h + '</div>';
  }

  function styleLessons(st) { return LESSONS.filter(function (l) { return l.styleId === st.id; }); }

  function styleCard(st) {
    const ls = styleLessons(st);
    if (!ls.length) return '';
    const done = ls.filter(function (l) { return Store.isDone(l.id); }).length;
    let beat = st.demo || null;
    if (!beat) ls.some(function (l) { return (l.beats || []).some(function (b) { if (b.kick) { beat = b; return true; } return false; }); });
    return '<a class="genre-card' + (done === ls.length ? ' done' : '') + '" href="#lesson.' + ls[0].id + '">' +
      '<span class="gfam">' + esc(st.origin) + '</span>' +
      '<span class="gname">' + esc(st.name) + '</span>' +
      '<span class="gbpm">' + (st.bpm[0] === st.bpm[1] ? st.bpm[0] : st.bpm[0] + '–' + st.bpm[1]) + ' BPM · ' + ls.length + ' parts · ' + done + ' done</span>' +
      miniGrid(beat) +
      '<p>' + esc(st.sig) + '.</p>' +
    '</a>';
  }

  function viewGenres() {
    const sems = A.semesters.filter(function (s) { return s.hiphop; });
    const total = A.hhStyles.length;
    const doneStyles = A.hhStyles.filter(function (st) { const ls = styleLessons(st); return ls.length && ls.every(function (l) { return Store.isDone(l.id); }); }).length;
    main.innerHTML = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Year 2 · Semesters 8–12</span><h1 class="display">Hip-Hop Styles</h1>' +
      '<p class="lede">' + total + ' hip-hop styles, each a masterclass from history and sound to drums, melodies, 808s, arrangement, vocals, mixing and selling, with demo beats you can play and study in the Beat Lab.</p>' +
      '<div style="max-width:420px;display:grid;gap:6px">' + meter(total ? doneStyles / total * 100 : 0, doneStyles === total ? 'good' : '') + '<span class="small muted mono">' + doneStyles + ' of ' + total + ' styles fully completed</span></div></header>' +
      sems.map(function (s) {
        return '<section class="stack"><div class="split"><div><span class="eyebrow">Semester ' + s.no + '</span><h2 class="section-title">' + esc(s.title) + '</h2></div><a class="small" href="#semester.' + s.id + '">Semester page</a></div>' +
          '<div class="genre-grid">' + A.hhStyles.filter(function (st) { return st.sem === s.id; }).map(styleCard).join('') + '</div></section>';
      }).join('') +
      '<section class="card split"><div class="stack" style="gap:4px"><strong>Electives: genres beyond hip-hop</strong><span class="muted small">Soul, funk, jazz, Afrobeats, amapiano, reggaeton, house, cinematic and more: the music hip-hop samples and fuses with.</span></div><a class="btn" href="#electives">Open electives</a></section>' +
    '</div>';
  }

  function viewElectives() {
    const s = A.semesters.find(function (x) { return x.genres; });
    const fams = ['All'];
    s.genres.forEach(function (g) { if (fams.indexOf(g.family) === -1) fams.push(g.family); });
    if (fams.indexOf(genreFilter) === -1) genreFilter = 'All';
    main.innerHTML = '<div class="page">' +
      '<nav class="crumbs"><a href="#genres">Hip-Hop Styles</a><span>/</span><span>Electives</span></nav>' +
      '<header class="stack"><span class="eyebrow">Optional electives</span><h1 class="display">Genres Beyond Hip-Hop</h1>' +
      '<p class="lede">' + s.genres.length + ' genre studios for the music hip-hop samples and fuses with. Each has its history, drums, harmony, a loadable beat, an assignment and a quiz. Electives are optional and not required to graduate.</p>' +
      '<div class="btn-row"><a class="btn" href="#lesson.g-method">Start with: How to Master Any Genre</a></div></header>' +
      '<div class="chips" id="famChips">' + fams.map(function (f) { return '<button type="button" class="chip' + (f === genreFilter ? ' on' : '') + '" data-f="' + esc(f) + '">' + esc(f) + '</button>'; }).join('') + '</div>' +
      '<div class="genre-grid" id="genreGrid"></div>' +
    '</div>';
    function draw() {
      const list = s.genres.filter(function (g) { return genreFilter === 'All' || g.family === genreFilter; });
      document.getElementById('genreGrid').innerHTML = list.map(function (g) {
        const done = Store.isDone('g-' + g.id);
        return '<a class="genre-card' + (done ? ' done' : '') + '" href="#lesson.g-' + g.id + '">' +
          '<span class="gfam">' + esc(g.family) + (done ? ' · done' : '') + '</span>' +
          '<span class="gname">' + esc(g.name) + '</span>' +
          '<span class="gbpm">' + (g.bpm[0] === g.bpm[1] ? g.bpm[0] : g.bpm[0] + '–' + g.bpm[1]) + ' BPM · ' + esc(g.feel) + '</span>' +
          miniGrid(g.pattern) +
          '<p>' + esc(g.sig) + '.</p>' +
        '</a>';
      }).join('');
    }
    document.querySelectorAll('#famChips [data-f]').forEach(function (b) {
      b.onclick = function () {
        genreFilter = b.dataset.f;
        document.querySelectorAll('#famChips .chip').forEach(function (c) { c.classList.toggle('on', c === b); });
        draw();
      };
    });
    draw();
  }

  // Every lesson gets videos: its own curated searches, or searches built from its title.
  function watchHtml(l) {
    const list = (l.watch && l.watch.length) ? l.watch : [[l.title, l.title + ' music production tutorial'], [l.title + ' (hip-hop)', l.title + ' hip hop producer']];
    return '<section class="block"><header><h2>Watch & learn</h2><span class="tag">' + list.length + ' video searches</span></header>' +
      '<div class="watch-list">' + list.map(function (w) {
        return '<a class="watch-item" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(w[1]) + '" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span><span class="q">' + esc(w[0]) + '</span><div class="w">YouTube search: ' + esc(w[1]) + '</div></span></a>';
      }).join('') + '</div>' +
      '<p class="muted small" style="margin:0">Opens YouTube results in a new tab. Pick a recent video for your DAW, watch it once, then do the steps below yourself.</p></section>';
  }

  // ---------- Studio ----------
  function viewStudio(arg) {
    if (arg && Tools.list.some(function (t) { return t.id === arg; })) studioTab = arg;
    const t = Tools.list.find(function (x) { return x.id === studioTab; }) || Tools.list[0];
    main.innerHTML = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Hands-on practice</span><h1 class="display">Practice Studio</h1><p class="lede">Built-in instruments and trainers that run in your browser. Use headphones. Sound starts after you press a button.</p></header>' +
      '<div class="tabs" role="tablist">' + Tools.list.map(function (x) { return '<button type="button" role="tab" class="tab' + (x.id === t.id ? ' on' : '') + '" aria-selected="' + (x.id === t.id) + '" data-tool="' + x.id + '">' + esc(x.name) + '</button>'; }).join('') + '</div>' +
      '<p class="muted" style="margin:0">' + esc(t.desc) + '</p>' +
      '<div id="toolMount"></div>' +
    '</div>';
    t.tool.mount(document.getElementById('toolMount'));
    document.querySelectorAll('[data-tool]').forEach(function (b) {
      b.onclick = function () { studioTab = b.dataset.tool; go('studio.' + studioTab); };
    });
  }

  // ---------- Roadmap & practice log ----------
  function viewRoadmap() {
    const st = Store.state;
    const mins = {};
    st.log.forEach(function (e) { mins[e.date] = (mins[e.date] || 0) + e.minutes; });
    let heat = '';
    const d = new Date(); d.setDate(d.getDate() - 83);
    for (let i = 0; i < 84; i++) {
      const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      const m = mins[k] || 0;
      const lvl = m > 45 ? 'l3' : m > 20 ? 'l2' : (m > 0 || st.days[k]) ? 'l1' : '';
      heat += '<span class="' + lvl + '" title="' + k + ': ' + m + ' min"></span>';
      d.setDate(d.getDate() + 1);
    }
    const total = Store.practiceMinutes();
    main.innerHTML = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Plan your training</span><h1 class="display">Roadmap & Practice Log</h1><p class="lede">An 18-month path at 1–2 focused hours a day. Faster or slower is fine: consistency matters more than speed.</p></header>' +
      '<section class="timeline">' + A.roadmap.map(function (r) {
        return '<div class="tl-item"><span class="when">' + esc(r.when) + '</span><div><h3>' + esc(r.title) + '</h3>' +
          '<div class="chips" style="margin-top:6px">' + r.sems.map(function (id) { const s = SEM_BY_ID[id]; const p = semProgress(s); return '<a class="chip' + (p.complete ? ' done' : '') + '" href="#semester.' + id + '">S' + s.no + ' · ' + esc(s.title) + ' · ' + p.pct + '%</a>'; }).join('') + '</div>' +
          '<ul>' + r.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></div></div>';
      }).join('') + '</section>' +
      '<section class="stack"><h2 class="section-title">Weekly routine</h2><div class="week">' + A.week.map(function (w) { return '<div class="day"><b>' + w.d + '</b><strong>' + esc(w.f) + '</strong><div class="muted">' + esc(w.t) + '</div></div>'; }).join('') + '</div></section>' +
      '<section class="grid cols-2">' +
        '<div class="card stack"><h3 class="sub-title">Log practice</h3>' +
          '<form id="logForm" class="stack"><div class="form-grid"><div class="field"><label for="logMin">Minutes</label><input id="logMin" type="number" min="1" max="600" value="30"></div>' +
          '<div class="field"><label for="logWhat">What did you work on?</label><input id="logWhat" type="text" placeholder="e.g. Mixing lesson assignment"></div></div>' +
          '<button class="btn primary" type="submit">Add to log</button></form>' +
          '<p class="muted small" style="margin:0">Each logged minute earns 1 XP (up to 6,000).</p>' +
        '</div>' +
        '<div class="card stack"><h3 class="sub-title">Last 12 weeks</h3><div class="heat">' + heat + '</div>' +
          '<div class="split small"><span><strong class="mono">' + (total / 60).toFixed(1) + ' h</strong> total</span><span><strong class="mono">' + Store.streak() + '</strong> day streak</span><span><strong class="mono">' + st.log.length + '</strong> sessions</span></div>' +
        '</div>' +
      '</section>' +
      '<section class="stack"><h2 class="section-title">Session history</h2><div id="logList"></div></section>' +
    '</div>';
    function drawLog() {
      const list = Store.state.log;
      document.getElementById('logList').innerHTML = list.length ? '<div class="table-wrap"><table><thead><tr><th>Date</th><th>Minutes</th><th>Activity</th><th></th></tr></thead><tbody>' +
        list.slice(0, 60).map(function (e, i) { return '<tr><td class="mono">' + esc(e.date) + '</td><td class="mono">' + e.minutes + '</td><td>' + esc(e.what) + '</td><td><button class="btn small ghost" type="button" data-del="' + i + '" aria-label="Delete entry">Remove</button></td></tr>'; }).join('') +
        '</tbody></table></div>' : '<div class="empty">No sessions yet. Log your first practice above; it starts your streak.</div>';
      document.querySelectorAll('[data-del]').forEach(function (b) { b.onclick = function () { Store.removeLog(+b.dataset.del); viewRoadmap(); }; });
    }
    document.getElementById('logForm').onsubmit = function (e) {
      e.preventDefault();
      const m = +document.getElementById('logMin').value;
      if (!m || m < 1) { toast('Enter the minutes you practised.'); return; }
      Store.logPractice(m, document.getElementById('logWhat').value.trim() || 'Practice');
      toast('Logged ' + m + ' minutes. +' + m + ' XP');
      viewRoadmap();
    };
    drawLog();
  }

  // ---------- Glossary ----------
  function viewGlossary() {
    main.innerHTML = '<div class="page narrow">' +
      '<header class="stack"><span class="eyebrow">Reference</span><h1 class="display">Glossary</h1><p class="lede">' + A.glossary.length + ' terms every producer and engineer should know.</p></header>' +
      '<div class="field"><label for="gq">Filter terms</label><input type="search" id="gq" placeholder="Type a term, e.g. sidechain"></div>' +
      '<dl class="gloss" id="glossList"></dl></div>';
    function draw() {
      const q = document.getElementById('gq').value.trim().toLowerCase();
      const items = A.glossary.filter(function (g) { return !q || (g[0] + ' ' + g[1]).toLowerCase().indexOf(q) > -1; });
      document.getElementById('glossList').innerHTML = items.length ? items.map(function (g) { return '<div><dt>' + esc(g[0]) + '</dt><dd>' + esc(g[1]) + '</dd></div>'; }).join('') : '<div><dt>No match</dt><dd>Try a shorter word.</dd></div>';
    }
    document.getElementById('gq').oninput = draw;
    draw();
  }

  // ---------- Library ----------
  function viewLibrary() {
    main.innerHTML = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Reference</span><h1 class="display">Library</h1><p class="lede">Free tools, practice material, rights organisations, books and communities. Prices and terms change; check each site before signing up.</p></header>' +
      '<div class="grid cols-2">' + A.resources.map(function (c) {
        return '<section class="card"><h3 class="sub-title">' + esc(c.cat) + '</h3>' + c.items.map(function (it) {
          return '<div class="lib-item"><span class="n">' + (it.u ? '<a href="' + esc(it.u) + '" target="_blank" rel="noopener">' + esc(it.n) + '</a>' : esc(it.n)) + '<span class="chip">' + esc(it.t) + '</span></span><p>' + esc(it.d) + '</p></div>';
        }).join('') + '</section>';
      }).join('') + '</div></div>';
  }

  // ---------- Profile ----------
  function viewProfile() {
    const st = Store.state, x = xpInfo(), c = counts();
    const core = A.semesters.filter(function (s) { return !s.elective; });
    const all = core.every(function (s) { return semProgress(s).complete; });
    const ear = ['freq', 'interval', 'chord'].map(function (m) {
      const e = st.ear[m];
      const label = { freq: 'Frequencies', interval: 'Intervals', chord: 'Chords' }[m];
      return '<div class="stat"><span class="v">' + (e && e.total ? Math.round(e.right / e.total * 100) + '%' : '–') + '</span><span class="k">' + label + (e && e.total ? ' · ' + e.total + ' rounds' : '') + '</span></div>';
    }).join('');
    main.innerHTML = '<div class="page">' +
      '<header class="stack"><span class="eyebrow">Your record</span><h1 class="display">Profile & Certificates</h1></header>' +
      '<section class="grid cols-2">' +
        '<div class="card stack"><h3 class="sub-title">Student</h3>' +
          '<form id="pName" class="btn-row"><input type="text" id="pNameIn" value="' + esc(st.name) + '" placeholder="Your name" aria-label="Your name" style="max-width:260px"><button class="btn" type="submit">Save name</button></form>' +
          '<div class="rank-card"><span class="rank-name">' + esc(x.rank.current.name) + '</span>' + meter(x.rank.pct) + '<span class="muted small mono">' + x.xp.toLocaleString() + ' XP</span></div>' +
          '<p class="small muted" style="margin:0">Ranks: ' + Store.RANKS.map(function (r) { return esc(r.name) + ' (' + r.xp.toLocaleString() + ')'; }).join(' → ') + '</p>' +
        '</div>' +
        '<div class="card stack"><h3 class="sub-title">Progress</h3>' +
          '<div class="stat-row" style="grid-template-columns:repeat(2,minmax(0,1fr))">' +
            '<div class="stat"><span class="v">' + c.lessons + '</span><span class="k">Lessons</span></div>' +
            '<div class="stat"><span class="v">' + c.assignments + '</span><span class="k">Assignments</span></div>' +
            '<div class="stat"><span class="v">' + c.quizzes + '</span><span class="k">Quizzes passed</span></div>' +
            '<div class="stat"><span class="v">' + (Store.practiceMinutes() / 60).toFixed(1) + '</span><span class="k">Practice hours</span></div>' +
          '</div>' +
          '<strong>Ear training</strong><div class="stat-row" style="grid-template-columns:repeat(3,minmax(0,1fr))">' + ear + '</div>' +
        '</div>' +
      '</section>' +
      '<section class="stack"><h2 class="section-title">Diploma</h2>' +
        '<div class="cert' + (all ? '' : ' locked') + '"><span class="seal">Master<br>Producer</span><span class="eyebrow">Hip-Hop Academy awards the diploma of</span><span class="who">Master Hip-Hop Producer</span><span>to <strong>' + esc(st.name || 'Your Name') + '</strong></span>' +
        '<span class="muted small">' + (all ? 'For completing all ' + core.length + ' semesters' : 'Complete all ' + core.length + ' semesters to graduate (' + core.filter(function (s) { return semProgress(s).complete; }).length + ' done; electives are optional)') + '</span>' +
        (all && !framed ? '<button class="btn small no-print" type="button" data-print>Print diploma</button>' : '') + '</div>' +
      '</section>' +
      '<section class="stack"><h2 class="section-title">Semester certificates</h2><div class="lesson-list">' + A.semesters.map(function (s) {
        const p = semProgress(s);
        return '<a class="lesson-item' + (p.complete ? ' done' : '') + '" href="#semester.' + s.id + '"><span class="no">' + (p.complete ? '<span class="check-dot on"></span>' : (s.elective ? 'EL' : 'S' + s.no)) + '</span><span><span class="t">' + esc(s.title) + '</span><div class="s">' + (p.complete ? 'Awarded ' + esc(fmtDate(semCompletedAt(s))) : Math.min(p.done, p.min) + ' / ' + p.min + ' lessons') + '</div></span><span class="badges">' + (p.complete ? '<span class="chip done">Certified</span>' : '<span class="chip">' + p.pct + '%</span>') + '</span></a>';
      }).join('') + '</div></section>' +
      '<section class="stack"><h2 class="section-title">Saved beats</h2><div id="beatList"></div></section>' +
      '<section class="card stack"><h3 class="sub-title">Backup and restore</h3>' +
        '<p class="muted" style="margin:0">' + (window.App.cloud ? 'Progress is saved to your Claude account and in this browser. A backup copy is still a good idea before big changes.' : 'Progress is saved in this browser only. Copy a backup regularly (and before clearing browser data) so you can restore it here or on another device.') + '</p>' +
        '<div class="btn-row"><button class="btn" type="button" id="bkCopy">Copy backup</button><button class="btn" type="button" id="bkDl"' + (framed ? ' hidden' : '') + '>Download backup file</button><label class="btn" for="bkFile">Restore from file</label><input type="file" id="bkFile" accept="application/json,.json" hidden></div>' +
        '<div class="field"><label for="bkText">Or paste a backup here</label><textarea id="bkText" placeholder="Paste backup JSON"></textarea></div>' +
        '<div class="btn-row"><button class="btn" type="button" id="bkRestore">Restore pasted backup</button><button class="btn ghost" type="button" id="bkReset">Reset all progress</button><span id="resetConfirm"></span></div>' +
      '</section>' +
    '</div>';

    bindPrint();
    document.getElementById('pName').onsubmit = function (e) { e.preventDefault(); Store.setName(document.getElementById('pNameIn').value.trim()); toast('Name saved'); viewProfile(); };
    function drawBeats() {
      const b = Store.state.beats;
      document.getElementById('beatList').innerHTML = b.length ? '<div class="lesson-list">' + b.map(function (x, i) {
        return '<div class="lesson-item"><span class="no">' + (i + 1) + '</span><span><span class="t">' + esc(x.name) + '</span><div class="s">' + x.bpm + ' BPM · swing ' + x.swing + '%</div></span><span class="badges"><button class="btn small" type="button" data-load="' + i + '">Open</button><button class="btn small ghost" type="button" data-rm="' + i + '">Delete</button></span></div>';
      }).join('') + '</div>' : '<div class="empty">No saved beats yet. Make one in the Drum Machine and press "Save beat".</div>';
      document.querySelectorAll('[data-load]').forEach(function (btn) { btn.onclick = function () { Tools.Drum.load(Store.state.beats[+btn.dataset.load]); studioTab = 'drums'; go('studio.drums'); }; });
      document.querySelectorAll('[data-rm]').forEach(function (btn) { btn.onclick = function () { Store.removeBeat(+btn.dataset.rm); drawBeats(); }; });
    }
    drawBeats();
    document.getElementById('bkCopy').onclick = function () { copy(Store.exportJSON()); };
    const dlb = document.getElementById('bkDl');
    const backupName = 'hiphop-academy-backup-' + Store.today() + '.json';
    if (!framed) {
      dlb.onclick = function () {
        const blob = new Blob([Store.exportJSON()], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = backupName;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      };
    } else if (window.claude && typeof window.claude.use === 'function') {
      // Inside a claude.ai artifact, files are offered through the downloads capability.
      window.claude.use('downloads').then(function (dl) {
        if (!dl || !document.body.contains(dlb)) return;
        dlb.hidden = false;
        dlb.onclick = function () {
          dl.save({ filename: backupName, data: Store.exportJSON() }).then(function (r) {
            if (r.status === 'saved') toast('Backup saved');
          }, function (e) {
            const code = e && e.code;
            if (code === 'declined') return;
            if (code === 'rate_limited') { toast('A save prompt is already open.'); return; }
            dlb.hidden = true;
          });
        };
      });
    }
    function restore(text) {
      try { Store.importJSON(text); toast('Backup restored'); viewProfile(); }
      catch (e) { toast('Could not restore: ' + (e.message || 'the backup is not valid JSON.')); }
    }
    document.getElementById('bkFile').onchange = function (e) {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = function () { restore(String(r.result)); }; r.readAsText(f);
    };
    document.getElementById('bkRestore').onclick = function () {
      const t = document.getElementById('bkText').value.trim();
      if (!t) { toast('Paste a backup first.'); return; }
      restore(t);
    };
    document.getElementById('bkReset').onclick = function () {
      document.getElementById('resetConfirm').innerHTML = '<span class="small">This erases all progress in this browser.</span> <button class="btn small" type="button" id="bkResetYes" style="border-color:var(--bad);color:var(--bad)">Erase everything</button>';
      document.getElementById('bkResetYes').onclick = function () { Store.reset(); toast('Progress reset'); viewProfile(); };
    };
  }

  window.App = { toast: toast, copy: copy, go: go, refresh: function () { render(current); }, cloud: false };

  render(location.hash.slice(1) || 'home');
})();
