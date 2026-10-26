/* Student progress, saved in this browser. Every read and write is guarded so the
   app still works in private windows or when storage is blocked. */
(function () {
  const KEY = 'producer-academy.v1';

  function blank() {
    return {
      name: '',
      completed: {},   // lessonId -> timestamp
      quiz: {},        // lessonId -> { best, total, passed }
      steps: {},       // lessonId -> { index: true }
      deliv: {},       // lessonId -> { index: true }
      notes: {},       // lessonId -> text
      log: [],         // { date, minutes, what }
      days: {},        // 'YYYY-MM-DD' -> activity count
      ear: {},         // mode -> { right, total }
      beats: [],       // saved drum patterns
      created: Date.now()
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign(blank(), JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
    return blank();
  }

  let state = load();
  const listeners = [];

  // `updated` lets a synced copy (see sync.js) tell which version is newer.
  function save(keepStamp) {
    if (!keepStamp) state.updated = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    listeners.forEach(function (fn) { try { fn(state); } catch (e) { /* ignore */ } });
  }

  function today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function touch() { state.days[today()] = (state.days[today()] || 0) + 1; }

  const XP = { lesson: 100, quiz: 50, assignment: 150, steps: 25, perPracticeMinute: 1 };

  const RANKS = [
    { xp: 0, name: 'Rookie' },
    { xp: 600, name: 'Beatmaker' },
    { xp: 2000, name: 'Apprentice Producer' },
    { xp: 5000, name: 'Producer' },
    { xp: 10000, name: 'Engineer' },
    { xp: 17000, name: 'Hitmaker' },
    { xp: 26000, name: 'Platinum Producer' },
    { xp: 38000, name: 'Studio Owner' },
    { xp: 52000, name: 'Master Producer' }
  ];

  const Store = {
    get state() { return state; },
    today: today,
    XP: XP,
    RANKS: RANKS,
    onChange: function (fn) { listeners.push(fn); },

    setName: function (n) { state.name = String(n || '').slice(0, 60); save(); },

    isDone: function (id) { return !!state.completed[id]; },
    setDone: function (id, on) {
      if (on) { state.completed[id] = Date.now(); touch(); } else { delete state.completed[id]; }
      save();
    },

    stepState: function (id) { return state.steps[id] || {}; },
    toggleStep: function (id, idx) {
      const s = state.steps[id] || (state.steps[id] = {});
      if (s[idx]) delete s[idx]; else { s[idx] = true; touch(); }
      save();
    },

    delivState: function (id) { return state.deliv[id] || {}; },
    toggleDeliv: function (id, idx) {
      const s = state.deliv[id] || (state.deliv[id] = {});
      if (s[idx]) delete s[idx]; else { s[idx] = true; touch(); }
      save();
    },

    note: function (id) { return state.notes[id] || ''; },
    setNote: function (id, text) {
      if (text) state.notes[id] = String(text).slice(0, 20000); else delete state.notes[id];
      save();
    },

    quizState: function (id) { return state.quiz[id] || null; },
    recordQuiz: function (id, score, total) {
      const prev = state.quiz[id];
      const passed = total > 0 && score / total >= 0.7;
      state.quiz[id] = {
        best: Math.max(score, prev ? prev.best : 0),
        total: total,
        passed: passed || (prev ? prev.passed : false),
        last: score
      };
      touch();
      save();
      return passed;
    },

    logPractice: function (minutes, what) {
      const m = Math.max(1, Math.min(600, Math.round(Number(minutes) || 0)));
      state.log.unshift({ date: today(), minutes: m, what: String(what || 'Practice').slice(0, 140) });
      state.log = state.log.slice(0, 500);
      touch();
      save();
    },
    removeLog: function (idx) { state.log.splice(idx, 1); save(); },

    recordEar: function (mode, right) {
      const e = state.ear[mode] || (state.ear[mode] = { right: 0, total: 0 });
      e.total++; if (right) e.right++;
      touch();
      save();
    },

    saveBeat: function (beat) {
      state.beats.unshift(beat);
      state.beats = state.beats.slice(0, 40);
      touch();
      save();
    },
    removeBeat: function (idx) { state.beats.splice(idx, 1); save(); },

    practiceMinutes: function () {
      return state.log.reduce(function (a, l) { return a + (l.minutes || 0); }, 0);
    },

    streak: function () {
      let n = 0;
      const d = new Date();
      // Today counts if active; otherwise the streak can still be alive from yesterday.
      for (let i = 0; i < 3650; i++) {
        const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        if (state.days[key]) n++;
        else if (i > 0) break;
        d.setDate(d.getDate() - 1);
      }
      return n;
    },

    // XP is derived from progress so it always matches what the student has done.
    xpFor: function (lesson) {
      let xp = 0;
      const id = lesson.id;
      if (state.completed[id]) xp += XP.lesson;
      const q = state.quiz[id];
      if (q && q.passed) xp += XP.quiz;
      const dl = (lesson.assignment && lesson.assignment.deliverables) || [];
      if (dl.length && Object.keys(state.deliv[id] || {}).length >= dl.length) xp += XP.assignment;
      const st = lesson.steps || [];
      if (st.length && Object.keys(state.steps[id] || {}).length >= st.length) xp += XP.steps;
      return xp;
    },

    totalXP: function (lessons) {
      let xp = 0;
      lessons.forEach(function (l) { xp += Store.xpFor(l); });
      xp += Math.min(Store.practiceMinutes(), 6000) * XP.perPracticeMinute;
      return xp;
    },

    rankFor: function (xp) {
      let cur = RANKS[0], next = null;
      for (let i = 0; i < RANKS.length; i++) {
        if (xp >= RANKS[i].xp) { cur = RANKS[i]; next = RANKS[i + 1] || null; }
      }
      const pct = next ? Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100) : 100;
      return { current: cur, next: next, pct: pct };
    },

    exportJSON: function () { return JSON.stringify(state, null, 2); },
    importJSON: function (text) {
      const data = JSON.parse(text);
      if (!data || typeof data !== 'object' || !data.completed) throw new Error('That file is not a Hip-Hop Academy backup.');
      state = Object.assign(blank(), data);
      save();
    },
    // Adopt a newer copy from cloud sync without restamping it.
    replace: function (data) { state = Object.assign(blank(), data); save(true); },
    reset: function () { state = blank(); save(); }
  };

  window.Store = Store;
})();
