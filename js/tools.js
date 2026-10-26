/* Practice Studio: drum machine, metronome, theory explorer, synth lab, ear trainer
   and calculators. All sound is synthesised with the Web Audio API (no samples). */
(function () {
  const esc = window.MD.esc;

  // ---------- Audio engine ----------
  const Engine = {
    ctx: null, out: null, noise: null,
    get: function () {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        this.ctx = new AC();
        const comp = this.ctx.createDynamicsCompressor();
        comp.threshold.value = -8; comp.ratio.value = 4; comp.attack.value = 0.003; comp.release.value = 0.15;
        this.out = this.ctx.createGain();
        this.out.gain.value = 0.8;
        this.out.connect(comp); comp.connect(this.ctx.destination);
        const len = this.ctx.sampleRate;
        this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const d = this.noise.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    noiseSrc: function () {
      const s = this.ctx.createBufferSource();
      s.buffer = this.noise;
      return s;
    }
  };

  function midiToFreq(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  function noteName(m) { return NOTE_NAMES[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1); }

  // ---------- Drum voices ----------
  let openHatGain = null;
  const Voices = {
    kick: function (t, v) {
      const c = Engine.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(160, t);
      o.frequency.exponentialRampToValueAtTime(48, t + 0.11);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
      o.connect(g); g.connect(Engine.out);
      o.start(t); o.stop(t + 0.5);
      const cl = c.createOscillator(), cg = c.createGain();
      cl.type = 'square'; cl.frequency.value = 1800;
      cg.gain.setValueAtTime(v * 0.12, t);
      cg.gain.exponentialRampToValueAtTime(0.0001, t + 0.012);
      cl.connect(cg); cg.connect(Engine.out);
      cl.start(t); cl.stop(t + 0.02);
    },
    snare: function (t, v) {
      const c = Engine.ctx;
      const n = Engine.noiseSrc(), hp = c.createBiquadFilter(), ng = c.createGain();
      hp.type = 'highpass'; hp.frequency.value = 1400;
      ng.gain.setValueAtTime(v * 0.7, t);
      ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
      n.connect(hp); hp.connect(ng); ng.connect(Engine.out);
      n.start(t); n.stop(t + 0.22);
      const o = c.createOscillator(), og = c.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(220, t);
      o.frequency.exponentialRampToValueAtTime(160, t + 0.08);
      og.gain.setValueAtTime(v * 0.6, t);
      og.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
      o.connect(og); og.connect(Engine.out);
      o.start(t); o.stop(t + 0.12);
    },
    clap: function (t, v) {
      const c = Engine.ctx;
      const n = Engine.noiseSrc(), bp = c.createBiquadFilter(), g = c.createGain();
      bp.type = 'bandpass'; bp.frequency.value = 1300; bp.Q.value = 0.9;
      g.gain.setValueAtTime(0.0001, t);
      [0, 0.011, 0.022].forEach(function (o) {
        g.gain.setValueAtTime(v * 0.9, t + o);
        g.gain.exponentialRampToValueAtTime(v * 0.15, t + o + 0.009);
      });
      g.gain.setValueAtTime(v * 0.6, t + 0.032);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      n.connect(bp); bp.connect(g); g.connect(Engine.out);
      n.start(t); n.stop(t + 0.25);
    },
    chh: function (t, v) {
      const c = Engine.ctx;
      if (openHatGain) {
        try { openHatGain.gain.cancelScheduledValues(t); openHatGain.gain.setTargetAtTime(0.0001, t, 0.008); } catch (e) { /* ignore */ }
        openHatGain = null;
      }
      const n = Engine.noiseSrc(), hp = c.createBiquadFilter(), g = c.createGain();
      hp.type = 'highpass'; hp.frequency.value = 7500;
      g.gain.setValueAtTime(v * 0.45, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      n.connect(hp); hp.connect(g); g.connect(Engine.out);
      n.start(t); n.stop(t + 0.06);
    },
    ohh: function (t, v) {
      const c = Engine.ctx;
      const n = Engine.noiseSrc(), hp = c.createBiquadFilter(), g = c.createGain();
      hp.type = 'highpass'; hp.frequency.value = 6500;
      g.gain.setValueAtTime(v * 0.4, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      n.connect(hp); hp.connect(g); g.connect(Engine.out);
      n.start(t); n.stop(t + 0.4);
      openHatGain = g;
    },
    perc: function (t, v) {
      // 808-style cowbell: two detuned squares through a band-pass.
      const c = Engine.ctx, bp = c.createBiquadFilter(), g = c.createGain();
      bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 1.2;
      [540, 800].forEach(function (f) {
        const o = c.createOscillator();
        o.type = 'square'; o.frequency.value = f;
        o.connect(bp); o.start(t); o.stop(t + 0.3);
      });
      g.gain.setValueAtTime(v * 0.35, t);
      g.gain.exponentialRampToValueAtTime(v * 0.1, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      bp.connect(g); g.connect(Engine.out);
    },
    sub: function (t, v, dur, freq) {
      const c = Engine.ctx, o = c.createOscillator(), g = c.createGain(), sh = c.createWaveShaper();
      const curve = new Float32Array(256);
      for (let i = 0; i < 256; i++) { const x = i / 128 - 1; curve[i] = Math.tanh(x * 2.2); }
      sh.curve = curve;
      o.type = 'sine';
      o.frequency.setValueAtTime(freq * 1.5, t);
      o.frequency.exponentialRampToValueAtTime(freq, t + 0.05);
      const d = Math.max(0.12, Math.min(dur, 1.4));
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(v * 0.8, t + 0.006);
      g.gain.setValueAtTime(v * 0.8, t + d * 0.6);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(sh); sh.connect(g); g.connect(Engine.out);
      o.start(t); o.stop(t + d + 0.02);
    }
  };

  const ROWS = [
    { k: 'kick', label: 'Kick' }, { k: 'snare', label: 'Snare' }, { k: 'clap', label: 'Clap' },
    { k: 'chh', label: 'Closed hat' }, { k: 'ohh', label: 'Open hat' }, { k: 'perc', label: 'Cowbell/perc' }, { k: 'sub', label: '808' }
  ];

  function blankPattern() {
    const p = { name: 'Empty', bpm: 120, swing: 50 };
    ROWS.forEach(function (r) { p[r.k] = '................'; });
    return p;
  }
  function normalise(p) {
    const out = blankPattern();
    Object.keys(p).forEach(function (k) { out[k] = p[k]; });
    ROWS.forEach(function (r) { out[r.k] = (out[r.k] || '').padEnd(16, '.').slice(0, 16); });
    return out;
  }

  // ---------- Drum machine ----------
  const Drum = {
    pattern: null, muted: {}, playing: false, step: 0, nextTime: 0, timer: null, queue: [], raf: null, root: 'A', el: null,
    rootFreq: function () {
      const idx = NOTE_NAMES.indexOf(this.root);
      return midiToFreq(33 + ((idx - 9 + 12) % 12)); // octave 1, from A1 = 55 Hz upwards
    },
    load: function (p) {
      this.pattern = normalise(JSON.parse(JSON.stringify(p)));
      if (this.el) this.render();
    },
    start: function () {
      const c = Engine.get();
      if (!c) { window.App && App.toast('Audio is not supported in this browser.'); return; }
      this.playing = true; this.step = 0; this.queue = [];
      this.nextTime = c.currentTime + 0.06;
      clearInterval(this.timer);
      this.timer = setInterval(this.tick.bind(this), 25);
      this.draw();
      this.updateTransport();
    },
    stop: function () {
      this.playing = false;
      clearInterval(this.timer);
      cancelAnimationFrame(this.raf);
      this.queue = [];
      if (this.el) this.el.querySelectorAll('.now').forEach(function (n) { n.classList.remove('now'); });
      this.updateTransport();
    },
    subDuration: function (i, stepDur) {
      const row = this.pattern.sub;
      for (let k = 1; k <= 16; k++) { if (row[(i + k) % 16] !== '.') return k * stepDur; }
      return 16 * stepDur;
    },
    tick: function () {
      const c = Engine.ctx, p = this.pattern;
      const stepDur = 60 / p.bpm / 4;
      while (this.nextTime < c.currentTime + 0.12) {
        let t = this.nextTime;
        if (this.step % 2 === 1) t += ((p.swing / 100) * 2 * stepDur) - stepDur;
        const s = this.step, self = this;
        ROWS.forEach(function (r) {
          const ch = p[r.k][s];
          if (ch === '.' || self.muted[r.k]) return;
          const v = ch === 'o' ? 0.35 : 0.9;
          if (r.k === 'sub') Voices.sub(t, v, self.subDuration(s, stepDur) * 0.95, self.rootFreq());
          else Voices[r.k](t, v);
        });
        this.queue.push({ step: s, time: t });
        this.nextTime += stepDur;
        this.step = (this.step + 1) % 16;
      }
    },
    draw: function () {
      const self = this;
      function frame() {
        if (!self.playing) return;
        const now = Engine.ctx.currentTime;
        let cur = null;
        while (self.queue.length && self.queue[0].time <= now) cur = self.queue.shift();
        if (cur && self.el) {
          self.el.querySelectorAll('.now').forEach(function (n) { n.classList.remove('now'); });
          self.el.querySelectorAll('[data-step="' + cur.step + '"]').forEach(function (n) { n.classList.add('now'); });
        }
        self.raf = requestAnimationFrame(frame);
      }
      this.raf = requestAnimationFrame(frame);
    },
    updateTransport: function () {
      if (!this.el) return;
      const b = this.el.querySelector('#dmPlay');
      if (b) { b.textContent = this.playing ? 'Stop' : 'Play'; b.classList.toggle('rec-on', this.playing); }
    },
    presets: function () {
      const list = [];
      const A = window.ACADEMY;
      A.semesters.forEach(function (s) {
        s.lessons.forEach(function (l) {
          (l.beats || []).forEach(function (b) {
            list.push({ group: l.genre ? (l.genre.family) : 'Lesson beats', name: b.name, pattern: b, lesson: l.id });
          });
        });
      });
      return list;
    },
    render: function () {
      const el = this.el, p = this.pattern, self = this;
      const presets = this.presets();
      const groups = {};
      presets.forEach(function (pr, i) { (groups[pr.group] = groups[pr.group] || []).push([pr, i]); });
      let opts = '<option value="">Load a pattern…</option>';
      Object.keys(groups).forEach(function (g) {
        opts += '<optgroup label="' + esc(g) + '">' + groups[g].map(function (x) { return '<option value="' + x[1] + '"' + (x[0].name === p.name ? ' selected' : '') + '>' + esc(x[0].name) + '</option>'; }).join('') + '</optgroup>';
      });
      const saved = Store.state.beats;
      if (saved.length) {
        opts += '<optgroup label="My saved beats">' + saved.map(function (b, i) { return '<option value="s' + i + '">' + esc(b.name) + '</option>'; }).join('') + '</optgroup>';
      }

      let grid = '<div class="seq-wrap"><div class="seq" role="grid" aria-label="Step sequencer">';
      grid += '<span></span>';
      for (let i = 0; i < 16; i++) grid += '<span class="step-led" data-step="' + i + '"></span>';
      ROWS.forEach(function (r) {
        grid += '<button type="button" class="row-label' + (self.muted[r.k] ? ' muted-row' : '') + '" data-mute="' + r.k + '" title="Click to mute or unmute">' + r.label + '</button>';
        for (let i = 0; i < 16; i++) {
          const ch = p[r.k][i];
          grid += '<button type="button" class="pad' + (i % 4 === 0 ? ' beat' : '') + (ch === 'x' ? ' on' : ch === 'o' ? ' ghost' : '') + '" data-row="' + r.k + '" data-i="' + i + '" data-step="' + i + '" aria-label="' + r.label + ' step ' + (i + 1) + '" aria-pressed="' + (ch !== '.') + '"></button>';
        }
      });
      grid += '</div></div>';

      el.innerHTML =
        '<div class="device">' +
          '<div class="device-bar">' +
            '<button class="btn primary" id="dmPlay" type="button">Play</button>' +
            '<div class="field"><label for="dmPreset">Pattern</label><select id="dmPreset">' + opts + '</select></div>' +
            '<div class="field" style="width:96px"><label for="dmBpm">BPM</label><input id="dmBpm" type="number" min="50" max="220" value="' + p.bpm + '"></div>' +
            '<div class="field" style="width:150px"><label for="dmSwing">Swing <span id="dmSwingV">' + p.swing + '%</span></label><input id="dmSwing" type="range" min="50" max="75" value="' + p.swing + '"></div>' +
            '<div class="field" style="width:96px"><label for="dmRoot">808 key</label><select id="dmRoot">' + NOTE_NAMES.map(function (n) { return '<option' + (n === self.root ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>' +
          '</div>' +
          '<div class="lcd" id="dmLcd">' + esc(p.name) + ' · ' + p.bpm + ' BPM · swing ' + p.swing + '%</div>' +
          grid +
          '<div class="device-bar">' +
            '<button class="btn small" type="button" id="dmClear">Clear</button>' +
            '<button class="btn small" type="button" id="dmCopy">Copy as text</button>' +
            '<input type="text" id="dmName" placeholder="Name your beat" style="max-width:200px">' +
            '<button class="btn small" type="button" id="dmSave">Save beat</button>' +
          '</div>' +
          '<p class="muted small" style="margin:0">Click a pad to cycle: off → hit → ghost (quiet). Click a row name to mute it. Swing delays every second 16th; 66% is triplet feel.</p>' +
        '</div>';

      el.querySelector('#dmPlay').onclick = function () { self.playing ? self.stop() : self.start(); };
      el.querySelector('#dmPreset').onchange = function (e) {
        const v = e.target.value;
        if (v === '') return;
        if (v.charAt(0) === 's') self.load(Store.state.beats[+v.slice(1)]);
        else self.load(presets[+v].pattern);
      };
      el.querySelector('#dmBpm').onchange = function (e) { p.bpm = Math.max(50, Math.min(220, +e.target.value || 120)); self.lcd(); };
      el.querySelector('#dmSwing').oninput = function (e) { p.swing = +e.target.value; el.querySelector('#dmSwingV').textContent = p.swing + '%'; self.lcd(); };
      el.querySelector('#dmRoot').onchange = function (e) { self.root = e.target.value; };
      el.querySelector('#dmClear').onclick = function () { ROWS.forEach(function (r) { p[r.k] = '................'; }); p.name = 'My beat'; self.render(); if (self.playing) self.updateTransport(); };
      el.querySelector('#dmCopy').onclick = function () {
        const txt = p.name + ' @ ' + p.bpm + ' BPM, swing ' + p.swing + '%\n' + ROWS.map(function (r) { return r.label.padEnd(13) + p[r.k]; }).join('\n');
        App.copy(txt);
      };
      el.querySelector('#dmSave').onclick = function () {
        const name = (el.querySelector('#dmName').value || '').trim() || ('Beat ' + (Store.state.beats.length + 1));
        const b = JSON.parse(JSON.stringify(p)); b.name = name;
        Store.saveBeat(b);
        App.toast('Saved "' + name + '"');
        self.render(); self.updateTransport();
      };
      el.querySelectorAll('[data-mute]').forEach(function (b) {
        b.onclick = function () { const k = b.dataset.mute; self.muted[k] = !self.muted[k]; b.classList.toggle('muted-row', !!self.muted[k]); };
      });
      el.querySelectorAll('.pad').forEach(function (b) {
        b.onclick = function () {
          const r = b.dataset.row, i = +b.dataset.i;
          const cur = p[r][i];
          const nxt = cur === '.' ? 'x' : cur === 'x' ? 'o' : '.';
          p[r] = p[r].slice(0, i) + nxt + p[r].slice(i + 1);
          b.classList.toggle('on', nxt === 'x');
          b.classList.toggle('ghost', nxt === 'o');
          b.setAttribute('aria-pressed', String(nxt !== '.'));
          if (nxt !== '.' && !self.playing) {
            Engine.get();
            const t = Engine.ctx.currentTime + 0.01, v = nxt === 'o' ? 0.35 : 0.9;
            if (r === 'sub') Voices.sub(t, v, 0.5, self.rootFreq()); else Voices[r](t, v);
          }
        };
      });
      this.updateTransport();
    },
    lcd: function () {
      const p = this.pattern, l = this.el && this.el.querySelector('#dmLcd');
      if (l) l.textContent = p.name + ' · ' + p.bpm + ' BPM · swing ' + p.swing + '%';
    },
    mount: function (el) {
      this.el = el;
      if (!this.pattern) {
        const pr = this.presets();
        const first = pr.find(function (x) { return x.name === 'Boom Bap'; }) || pr[0];
        this.pattern = normalise(JSON.parse(JSON.stringify(first ? first.pattern : blankPattern())));
      }
      this.render();
    },
    unmount: function () { this.stop(); this.el = null; }
  };

  // ---------- Metronome ----------
  const Metro = {
    bpm: 90, beats: 4, playing: false, beat: 0, nextTime: 0, timer: null, queue: [], raf: null, taps: [], el: null,
    click: function (t, first) {
      const c = Engine.ctx, o = c.createOscillator(), g = c.createGain();
      o.frequency.value = first ? 1600 : 1000;
      g.gain.setValueAtTime(0.6, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g); g.connect(Engine.out);
      o.start(t); o.stop(t + 0.06);
    },
    start: function () {
      const c = Engine.get(); if (!c) return;
      this.playing = true; this.beat = 0; this.queue = [];
      this.nextTime = c.currentTime + 0.06;
      const self = this;
      this.timer = setInterval(function () {
        while (self.nextTime < Engine.ctx.currentTime + 0.12) {
          self.click(self.nextTime, self.beat === 0);
          self.queue.push({ beat: self.beat, time: self.nextTime });
          self.nextTime += 60 / self.bpm;
          self.beat = (self.beat + 1) % self.beats;
        }
      }, 25);
      const frame = function () {
        if (!self.playing) return;
        let cur = null;
        while (self.queue.length && self.queue[0].time <= Engine.ctx.currentTime) cur = self.queue.shift();
        if (cur && self.el) {
          self.el.querySelectorAll('.metro-dots span').forEach(function (s, i) { s.classList.toggle('on', i === cur.beat); });
        }
        self.raf = requestAnimationFrame(frame);
      };
      this.raf = requestAnimationFrame(frame);
      this.sync();
    },
    stop: function () {
      this.playing = false; clearInterval(this.timer); cancelAnimationFrame(this.raf);
      if (this.el) this.el.querySelectorAll('.metro-dots span').forEach(function (s) { s.classList.remove('on'); });
      this.sync();
    },
    tap: function () {
      const now = performance.now();
      this.taps = this.taps.filter(function (t) { return now - t < 2500; });
      this.taps.push(now);
      if (this.taps.length >= 2) {
        const gaps = [];
        for (let i = 1; i < this.taps.length; i++) gaps.push(this.taps[i] - this.taps[i - 1]);
        const avg = gaps.slice(-6).reduce(function (a, b) { return a + b; }, 0) / Math.min(gaps.length, 6);
        this.bpm = Math.round(60000 / avg);
        this.bpm = Math.max(30, Math.min(260, this.bpm));
        this.sync();
      }
    },
    sync: function () {
      if (!this.el) return;
      this.el.querySelector('#mBpmBig').textContent = this.bpm;
      this.el.querySelector('#mBpm').value = this.bpm;
      const b = this.el.querySelector('#mPlay');
      b.textContent = this.playing ? 'Stop' : 'Start';
      b.classList.toggle('rec-on', this.playing);
      const ms = 60000 / this.bpm;
      this.el.querySelector('#mInfo').textContent = 'Quarter note = ' + ms.toFixed(1) + ' ms · bar of ' + this.beats + ' = ' + (ms * this.beats / 1000).toFixed(2) + ' s';
    },
    mount: function (el) {
      this.el = el;
      const self = this;
      let dots = '';
      for (let i = 0; i < this.beats; i++) dots += '<span' + (i === 0 ? ' class="first"' : '') + '></span>';
      el.innerHTML =
        '<div class="device">' +
          '<div class="split"><div><div class="big-bpm" id="mBpmBig">' + this.bpm + '</div><div class="muted small">BPM</div></div><div class="metro-dots">' + dots + '</div></div>' +
          '<div class="device-bar">' +
            '<button class="btn primary" id="mPlay" type="button">Start</button>' +
            '<button class="btn" id="mTap" type="button">Tap tempo</button>' +
            '<div class="field" style="width:96px"><label for="mBpm">BPM</label><input id="mBpm" type="number" min="30" max="260" value="' + this.bpm + '"></div>' +
            '<div class="field" style="width:120px"><label for="mBeats">Beats per bar</label><select id="mBeats">' + [2, 3, 4, 5, 6, 7].map(function (n) { return '<option' + (n === self.beats ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>' +
          '</div>' +
          '<div class="lcd" id="mInfo"></div>' +
          '<p class="muted small" style="margin:0">Tap the button (or press T) along with any song to find its tempo. Use it for the Taste Map assignment.</p>' +
        '</div>';
      el.querySelector('#mPlay').onclick = function () { self.playing ? self.stop() : self.start(); };
      el.querySelector('#mTap').onclick = function () { self.tap(); };
      el.querySelector('#mBpm').onchange = function (e) { self.bpm = Math.max(30, Math.min(260, +e.target.value || 90)); self.sync(); };
      el.querySelector('#mBeats').onchange = function (e) {
        self.beats = +e.target.value; const was = self.playing; self.stop(); self.mount(el); if (was) self.start();
      };
      this.keyHandler = function (e) {
        if (e.key === 't' || e.key === 'T') { if (!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) self.tap(); }
      };
      document.addEventListener('keydown', this.keyHandler);
      this.sync();
    },
    unmount: function () { this.stop(); document.removeEventListener('keydown', this.keyHandler); this.el = null; }
  };

  // ---------- Simple keys voice used by theory tools ----------
  function playKey(midi, when, dur, vel) {
    const c = Engine.get(); if (!c) return;
    const t = when || c.currentTime + 0.005;
    const d = dur || 1.2, v = vel || 0.25;
    const f = midiToFreq(midi);
    const g = c.createGain(), lp = c.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.setValueAtTime(Math.min(8000, f * 8), t); lp.frequency.exponentialRampToValueAtTime(Math.max(300, f * 2), t + d);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + 0.008);
    g.gain.exponentialRampToValueAtTime(v * 0.35, t + 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    [['triangle', 1, 1], ['sine', 2, 0.35], ['sine', 3, 0.12]].forEach(function (w) {
      const o = c.createOscillator(), og = c.createGain();
      o.type = w[0]; o.frequency.value = f * w[1]; og.gain.value = w[2];
      o.connect(og); og.connect(lp); o.start(t); o.stop(t + d + 0.05);
    });
    lp.connect(g); g.connect(Engine.out);
  }

  // ---------- Theory explorer ----------
  const SCALES = {
    'Major (Ionian)': [0, 2, 4, 5, 7, 9, 11],
    'Natural Minor (Aeolian)': [0, 2, 3, 5, 7, 8, 10],
    'Harmonic Minor': [0, 2, 3, 5, 7, 8, 11],
    'Melodic Minor': [0, 2, 3, 5, 7, 9, 11],
    'Dorian (≈ Kafi)': [0, 2, 3, 5, 7, 9, 10],
    'Phrygian (≈ Bhairavi)': [0, 1, 3, 5, 7, 8, 10],
    'Lydian (≈ Kalyan)': [0, 2, 4, 6, 7, 9, 11],
    'Mixolydian (≈ Khamaj)': [0, 2, 4, 5, 7, 9, 10],
    'Locrian': [0, 1, 3, 5, 6, 8, 10],
    'Phrygian Dominant': [0, 1, 4, 5, 7, 8, 10],
    'Double Harmonic (≈ Bhairav)': [0, 1, 4, 5, 7, 8, 11],
    'Purvi thaat': [0, 1, 4, 6, 7, 8, 11],
    'Marwa thaat': [0, 1, 4, 6, 7, 9, 11],
    'Todi thaat': [0, 1, 3, 6, 7, 8, 11],
    'Major Pentatonic': [0, 2, 4, 7, 9],
    'Minor Pentatonic': [0, 3, 5, 7, 10],
    'Blues': [0, 3, 5, 6, 7, 10],
    'Hirajoshi': [0, 2, 3, 7, 8],
    'Whole Tone': [0, 2, 4, 6, 8, 10]
  };
  const PROGRESSIONS = [
    { name: '1 – 5 – 6 – 4 (pop anthem)', d: [0, 4, 5, 3] },
    { name: '6 – 4 – 1 – 5 (emotional)', d: [5, 3, 0, 4] },
    { name: '1 – 6 – 4 – 5 (doo-wop)', d: [0, 5, 3, 4] },
    { name: '2 – 5 – 1 (jazz cadence)', d: [1, 4, 0] },
    { name: '1 – 7 – 6 – 5 (descending)', d: [0, 6, 5, 4] },
    { name: '1 – 4 – 5 – 4 (rock)', d: [0, 3, 4, 3] },
    { name: '6 – 2 – 5 – 1 (circle)', d: [5, 1, 4, 0] },
    { name: '1 – 4 (vamp)', d: [0, 3, 0, 3] }
  ];
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  function chordQuality(intervals) {
    const k = intervals.join(',');
    const map = {
      '4,7': ['', 'maj'], '3,7': ['m', 'min'], '3,6': ['dim', 'dim'], '4,8': ['aug', 'aug'],
      '4,7,11': ['maj7', 'maj'], '4,7,10': ['7', 'maj'], '3,7,10': ['m7', 'min'], '3,6,10': ['m7b5', 'dim'],
      '3,6,9': ['dim7', 'dim'], '3,7,11': ['m(maj7)', 'min'], '4,8,11': ['maj7#5', 'aug'], '2,7': ['sus2', 'maj'], '5,7': ['sus4', 'maj']
    };
    return map[k] || ['?', 'maj'];
  }

  const Theory = {
    root: 0, scale: 'Major (Ionian)', sevenths: false, el: null,
    notesInScale: function () { const r = this.root; return SCALES[this.scale].map(function (i) { return (r + i) % 12; }); },
    chords: function () {
      const sc = SCALES[this.scale];
      if (sc.length !== 7) return [];
      const r = this.root, self = this;
      return sc.map(function (deg, i) {
        const idx = self.sevenths ? [0, 2, 4, 6] : [0, 2, 4];
        const semis = idx.map(function (k) { const j = i + k; return sc[j % 7] + (j >= 7 ? 12 : 0); });
        const rel = semis.slice(1).map(function (s) { return s - semis[0]; });
        const q = chordQuality(rel);
        let rn = ROMAN[i];
        if (q[1] === 'min' || q[1] === 'dim') rn = rn.toLowerCase();
        if (self.sevenths) {
          rn += { 'maj7': 'maj7', '7': '7', 'm7': '7', 'm7b5': 'ø7', 'dim7': '°7', 'm(maj7)': '(maj7)', 'maj7#5': '+maj7' }[q[0]] || '';
        } else {
          if (q[1] === 'dim') rn += '°';
          if (q[1] === 'aug') rn += '+';
        }
        const rootPc = (r + deg) % 12;
        const midis = semis.map(function (s) { return 48 + r + s; });
        return { rn: rn, name: NOTE_NAMES[rootPc] + q[0], notes: midis.map(function (m) { return NOTE_NAMES[m % 12]; }).join(' '), midis: midis };
      });
    },
    render: function () {
      const el = this.el, self = this;
      const inScale = this.notesInScale();
      const whites = [], blacks = [];
      for (let m = 48; m <= 72; m++) {
        const pc = m % 12;
        if ([1, 3, 6, 8, 10].indexOf(pc) === -1) whites.push(m); else blacks.push(m);
      }
      const wW = 100 / whites.length;
      let kb = '<div class="keyboard" id="thKeys"><div class="white-row">';
      whites.forEach(function (m) {
        const pc = m % 12;
        kb += '<button type="button" class="key white' + (inScale.indexOf(pc) > -1 ? ' in-scale' : '') + (pc === self.root ? ' root' : '') + '" data-m="' + m + '">' + (pc === 0 ? noteName(m) : NOTE_NAMES[pc]) + '</button>';
      });
      kb += '</div>';
      blacks.forEach(function (m) {
        const pc = m % 12;
        const wIndex = whites.filter(function (w) { return w < m; }).length;
        const left = wIndex * wW - wW * 0.3;
        kb += '<button type="button" class="key black' + (inScale.indexOf(pc) > -1 ? ' in-scale' : '') + (pc === self.root ? ' root' : '') + '" data-m="' + m + '" style="left:' + left + '%;width:' + (wW * 0.6) + '%">' + NOTE_NAMES[pc] + '</button>';
      });
      kb += '</div>';

      const chords = this.chords();
      let chordHtml = '';
      if (chords.length) {
        chordHtml = '<div class="chord-grid">' + chords.map(function (c, i) {
          return '<button type="button" class="chord-btn" data-c="' + i + '"><span class="rn">' + esc(c.rn) + '</span><span class="cn">' + esc(c.name) + '</span><span class="nn">' + esc(c.notes) + '</span></button>';
        }).join('') + '</div>' +
        '<div class="knob-group"><div class="gl">Play a progression in this scale</div><div class="chips">' +
        PROGRESSIONS.map(function (p, i) {
          const label = p.d.map(function (d) { return chords[d].rn; }).join(' – ');
          return '<button type="button" class="btn small" data-p="' + i + '" title="' + esc(p.name) + '">' + esc(label) + '</button>';
        }).join('') + '</div><p class="muted small" style="margin:0">Numbers are scale degrees, so the same progression changes colour in every mode.</p></div>';
      } else {
        chordHtml = '<p class="muted small" style="margin:0">Chords and progressions are shown for 7-note scales. Pentatonic and other scales are great for melodies: play them on the keyboard.</p>';
      }

      el.innerHTML =
        '<div class="device">' +
          '<div class="device-bar">' +
            '<div class="field" style="width:90px"><label for="thRoot">Root</label><select id="thRoot">' + NOTE_NAMES.map(function (n, i) { return '<option value="' + i + '"' + (i === self.root ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>' +
            '<div class="field" style="min-width:220px"><label for="thScale">Scale / mode</label><select id="thScale">' + Object.keys(SCALES).map(function (s) { return '<option' + (s === self.scale ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select></div>' +
            '<label class="small" style="display:flex;gap:8px;align-items:center;color:var(--rail-muted)"><input type="checkbox" id="thSev"' + (this.sevenths ? ' checked' : '') + '> 7th chords</label>' +
            '<button class="btn" type="button" id="thPlayScale">Play scale</button>' +
          '</div>' +
          '<div class="lcd">' + esc(NOTE_NAMES[this.root] + ' ' + this.scale) + ': ' + esc(inScale.map(function (p) { return NOTE_NAMES[p]; }).join(' ')) + '</div>' +
          kb + chordHtml +
        '</div>';

      el.querySelector('#thRoot').onchange = function (e) { self.root = +e.target.value; self.render(); };
      el.querySelector('#thScale').onchange = function (e) { self.scale = e.target.value; self.render(); };
      el.querySelector('#thSev').onchange = function (e) { self.sevenths = e.target.checked; self.render(); };
      el.querySelector('#thPlayScale').onclick = function () {
        const c = Engine.get(); if (!c) return;
        const sc = SCALES[self.scale].concat([12]);
        sc.forEach(function (s, i) { playKey(60 + self.root + s - (self.root > 6 ? 12 : 0), c.currentTime + 0.05 + i * 0.28, 0.6, 0.22); });
      };
      el.querySelectorAll('.key').forEach(function (k) {
        k.addEventListener('pointerdown', function (e) {
          e.preventDefault();
          playKey(+k.dataset.m);
          k.classList.add('down');
          setTimeout(function () { k.classList.remove('down'); }, 180);
        });
      });
      el.querySelectorAll('[data-c]').forEach(function (b) {
        b.onclick = function () {
          const ch = chords[+b.dataset.c];
          ch.midis.forEach(function (m) { playKey(m, null, 1.6, 0.16); });
        };
      });
      el.querySelectorAll('[data-p]').forEach(function (b) {
        b.onclick = function () {
          const c = Engine.get(); if (!c) return;
          const prog = PROGRESSIONS[+b.dataset.p].d;
          prog.forEach(function (d, i) {
            const t = c.currentTime + 0.05 + i * 1.0;
            chords[d].midis.forEach(function (m) { playKey(m, t, 1.0, 0.15); });
            playKey(chords[d].midis[0] - 12, t, 1.0, 0.18);
            setTimeout(function () {
              el.querySelectorAll('.chord-btn').forEach(function (cb) { cb.classList.toggle('playing', +cb.dataset.c === d); });
            }, (t - c.currentTime) * 1000);
          });
          setTimeout(function () { el.querySelectorAll('.chord-btn').forEach(function (cb) { cb.classList.remove('playing'); }); }, prog.length * 1000 + 300);
        };
      });
    },
    mount: function (el) { this.el = el; this.render(); },
    unmount: function () { this.el = null; }
  };

  // ---------- Synth lab ----------
  const SYNTH_PRESETS = {
    'Init Saw': { wave: 'sawtooth', detune: 0, cutoff: 8000, res: 1, envAmt: 0, fdecay: 0.3, a: 0.005, d: 0.2, s: 0.8, r: 0.2, lfoRate: 0, lfoDepth: 0, oct: 0 },
    'Pluck': { wave: 'sawtooth', detune: 8, cutoff: 400, res: 4, envAmt: 5000, fdecay: 0.25, a: 0.002, d: 0.4, s: 0, r: 0.25, lfoRate: 0, lfoDepth: 0, oct: 0 },
    'Soft Pad': { wave: 'sawtooth', detune: 14, cutoff: 1800, res: 1, envAmt: 600, fdecay: 1.5, a: 0.9, d: 1, s: 0.8, r: 1.8, lfoRate: 0.3, lfoDepth: 400, oct: 0 },
    'Sub Bass': { wave: 'sine', detune: 0, cutoff: 600, res: 0.5, envAmt: 0, fdecay: 0.2, a: 0.003, d: 0.3, s: 1, r: 0.06, lfoRate: 0, lfoDepth: 0, oct: -2 },
    'Acid Bass': { wave: 'sawtooth', detune: 0, cutoff: 300, res: 18, envAmt: 2800, fdecay: 0.18, a: 0.002, d: 0.2, s: 0.4, r: 0.08, lfoRate: 0, lfoDepth: 0, oct: -1 },
    'Wobble Bass': { wave: 'sawtooth', detune: 10, cutoff: 350, res: 8, envAmt: 0, fdecay: 0.2, a: 0.005, d: 0.2, s: 1, r: 0.1, lfoRate: 4, lfoDepth: 1800, oct: -2 },
    'Square Lead': { wave: 'square', detune: 5, cutoff: 3500, res: 2, envAmt: 1500, fdecay: 0.3, a: 0.005, d: 0.3, s: 0.7, r: 0.2, lfoRate: 5.5, lfoDepth: 150, oct: 0 },
    'Bell': { wave: 'triangle', detune: 0, cutoff: 6000, res: 1, envAmt: 2000, fdecay: 0.5, a: 0.001, d: 1.4, s: 0, r: 1.2, lfoRate: 0, lfoDepth: 0, oct: 1 }
  };
  const KEYMAP = { a: 0, w: 1, s: 2, e: 3, d: 4, f: 5, t: 6, g: 7, y: 8, h: 9, u: 10, j: 11, k: 12, o: 13, l: 14, p: 15 };

  const Synth = {
    p: JSON.parse(JSON.stringify(SYNTH_PRESETS['Init Saw'])), preset: 'Init Saw', voices: {}, lfo: null, lfoGain: null, el: null, baseMidi: 48,
    ensureLfo: function () {
      const c = Engine.get(); if (!c) return null;
      if (!this.lfo) {
        this.lfo = c.createOscillator(); this.lfoGain = c.createGain();
        this.lfo.type = 'sine'; this.lfo.connect(this.lfoGain); this.lfo.start();
      }
      this.lfo.frequency.value = this.p.lfoRate || 0.0001;
      this.lfoGain.gain.value = this.p.lfoRate > 0 ? this.p.lfoDepth : 0;
      return c;
    },
    noteOn: function (midi) {
      const c = this.ensureLfo(); if (!c) return;
      if (this.voices[midi]) this.noteOff(midi, true);
      const p = this.p, t = c.currentTime + 0.003;
      const f = midiToFreq(midi + p.oct * 12);
      const filt = c.createBiquadFilter(), amp = c.createGain();
      filt.type = 'lowpass'; filt.Q.value = p.res;
      filt.frequency.setValueAtTime(p.cutoff, t);
      if (p.envAmt > 0) {
        filt.frequency.linearRampToValueAtTime(Math.min(18000, p.cutoff + p.envAmt), t + 0.004);
        filt.frequency.setTargetAtTime(p.cutoff, t + 0.004, Math.max(0.01, p.fdecay / 3));
      }
      this.lfoGain.connect(filt.frequency);
      const oscs = [];
      const dets = p.detune > 0 ? [-p.detune, p.detune] : [0];
      dets.forEach(function (dt) {
        const o = c.createOscillator();
        o.type = p.wave; o.frequency.value = f; o.detune.value = dt;
        o.connect(filt); o.start(t); oscs.push(o);
      });
      const peak = 0.28 / Math.sqrt(dets.length);
      amp.gain.setValueAtTime(0.0001, t);
      amp.gain.linearRampToValueAtTime(peak, t + Math.max(0.002, p.a));
      amp.gain.setTargetAtTime(Math.max(0.0001, peak * p.s), t + Math.max(0.002, p.a), Math.max(0.01, p.d / 3));
      filt.connect(amp); amp.connect(Engine.out);
      this.voices[midi] = { oscs: oscs, amp: amp, filt: filt };
      if (this.el) { const k = this.el.querySelector('.key[data-m="' + midi + '"]'); if (k) k.classList.add('down'); }
    },
    noteOff: function (midi, fast) {
      const v = this.voices[midi]; if (!v) return;
      const c = Engine.ctx, t = c.currentTime;
      const r = fast ? 0.01 : Math.max(0.01, this.p.r);
      v.amp.gain.cancelScheduledValues(t);
      v.amp.gain.setValueAtTime(Math.max(0.0001, v.amp.gain.value), t);
      v.amp.gain.setTargetAtTime(0.0001, t, r / 4);
      v.oscs.forEach(function (o) { o.stop(t + r + 0.1); });
      const lg = this.lfoGain;
      setTimeout(function () { try { lg.disconnect(v.filt.frequency); } catch (e) { /* ignore */ } }, (r + 0.15) * 1000);
      delete this.voices[midi];
      if (this.el) { const k = this.el.querySelector('.key[data-m="' + midi + '"]'); if (k) k.classList.remove('down'); }
    },
    allOff: function () { const self = this; Object.keys(this.voices).forEach(function (m) { self.noteOff(+m, true); }); },
    knob: function (id, label, min, max, step, val, fmt) {
      return '<div class="knob"><label for="sy_' + id + '">' + label + ' <output id="syo_' + id + '">' + fmt(val) + '</output></label><input type="range" id="sy_' + id + '" data-k="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></div>';
    },
    render: function () {
      const el = this.el, p = this.p, self = this;
      const ms = function (v) { return v < 1 ? Math.round(v * 1000) + ' ms' : (+v).toFixed(2) + ' s'; };
      const hz = function (v) { return v >= 1000 ? (v / 1000).toFixed(1) + ' kHz' : Math.round(v) + ' Hz'; };
      const whites = [], blacks = [];
      for (let m = this.baseMidi; m <= this.baseMidi + 24; m++) { if ([1, 3, 6, 8, 10].indexOf(m % 12) === -1) whites.push(m); else blacks.push(m); }
      const wW = 100 / whites.length;
      let kb = '<div class="keyboard" id="syKeys"><div class="white-row">';
      whites.forEach(function (m) { kb += '<button type="button" class="key white" data-m="' + m + '">' + (m % 12 === 0 ? noteName(m) : '') + '</button>'; });
      kb += '</div>';
      blacks.forEach(function (m) {
        const wIndex = whites.filter(function (w) { return w < m; }).length;
        kb += '<button type="button" class="key black" data-m="' + m + '" style="left:' + (wIndex * wW - wW * 0.3) + '%;width:' + (wW * 0.6) + '%"></button>';
      });
      kb += '</div>';

      el.innerHTML =
        '<div class="device">' +
          '<div class="device-bar">' +
            '<div class="field" style="min-width:160px"><label for="syPreset">Preset</label><select id="syPreset">' + Object.keys(SYNTH_PRESETS).map(function (n) { return '<option' + (n === self.preset ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>' +
            '<div class="field" style="width:130px"><label for="syWave">Waveform</label><select id="syWave">' + ['sine', 'triangle', 'square', 'sawtooth'].map(function (w) { return '<option' + (w === p.wave ? ' selected' : '') + '>' + w + '</option>'; }).join('') + '</select></div>' +
            '<div class="field" style="width:110px"><label for="syOct">Octave</label><select id="syOct">' + [-2, -1, 0, 1, 2].map(function (o) { return '<option value="' + o + '"' + (o === p.oct ? ' selected' : '') + '>' + (o > 0 ? '+' + o : o) + '</option>'; }).join('') + '</select></div>' +
          '</div>' +
          '<div class="grid cols-3">' +
            '<div class="knob-group"><div class="gl">Oscillator</div>' + this.knob('detune', 'Detune', 0, 40, 1, p.detune, function (v) { return v + ' ct'; }) + '</div>' +
            '<div class="knob-group"><div class="gl">Filter</div>' +
              this.knob('cutoff', 'Cutoff', 80, 12000, 10, p.cutoff, hz) +
              this.knob('res', 'Resonance', 0.1, 24, 0.1, p.res, function (v) { return (+v).toFixed(1); }) +
              this.knob('envAmt', 'Env amount', 0, 8000, 10, p.envAmt, hz) +
              this.knob('fdecay', 'Filter decay', 0.02, 3, 0.01, p.fdecay, ms) +
            '</div>' +
            '<div class="knob-group"><div class="gl">Amp envelope</div>' +
              this.knob('a', 'Attack', 0.001, 3, 0.001, p.a, ms) +
              this.knob('d', 'Decay', 0.01, 3, 0.01, p.d, ms) +
              this.knob('s', 'Sustain', 0, 1, 0.01, p.s, function (v) { return Math.round(v * 100) + '%'; }) +
              this.knob('r', 'Release', 0.01, 4, 0.01, p.r, ms) +
            '</div>' +
            '<div class="knob-group"><div class="gl">LFO → cutoff</div>' +
              this.knob('lfoRate', 'Rate', 0, 12, 0.1, p.lfoRate, function (v) { return (+v).toFixed(1) + ' Hz'; }) +
              this.knob('lfoDepth', 'Depth', 0, 4000, 10, p.lfoDepth, hz) +
            '</div>' +
          '</div>' +
          kb +
          '<p class="muted small" style="margin:0">Play with the mouse, touch, or your computer keyboard: <span class="kbd">A W S E D F T G Y H U J K</span> = C to C. Start every sound from "Init Saw" to learn what each control does.</p>' +
        '</div>';

      el.querySelector('#syPreset').onchange = function (e) { self.preset = e.target.value; self.p = JSON.parse(JSON.stringify(SYNTH_PRESETS[self.preset])); self.allOff(); self.render(); };
      el.querySelector('#syWave').onchange = function (e) { p.wave = e.target.value; };
      el.querySelector('#syOct').onchange = function (e) { p.oct = +e.target.value; };
      el.querySelectorAll('input[type=range][data-k]').forEach(function (inp) {
        inp.oninput = function () {
          const k = inp.dataset.k; p[k] = +inp.value;
          const o = el.querySelector('#syo_' + k);
          const map = { cutoff: hz, envAmt: hz, lfoDepth: hz, fdecay: ms, a: ms, d: ms, r: ms };
          o.textContent = map[k] ? map[k](p[k]) : k === 's' ? Math.round(p[k] * 100) + '%' : k === 'detune' ? p[k] + ' ct' : k === 'lfoRate' ? p[k].toFixed(1) + ' Hz' : p[k].toFixed(1);
          if ((k === 'lfoRate' || k === 'lfoDepth') && self.lfo) self.ensureLfo();
        };
      });
      el.querySelectorAll('#syKeys .key').forEach(function (k) {
        const m = +k.dataset.m;
        k.addEventListener('pointerdown', function (e) { e.preventDefault(); k.setPointerCapture && k.setPointerCapture(e.pointerId); self.noteOn(m); });
        k.addEventListener('pointerup', function () { self.noteOff(m); });
        k.addEventListener('pointercancel', function () { self.noteOff(m); });
        k.addEventListener('lostpointercapture', function () { self.noteOff(m); });
      });
    },
    mount: function (el) {
      this.el = el; this.render();
      const self = this;
      this.down = function (e) {
        if (e.repeat || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
        const n = KEYMAP[e.key.toLowerCase()];
        if (n !== undefined) self.noteOn(self.baseMidi + 12 + n);
      };
      this.up = function (e) {
        const n = KEYMAP[e.key.toLowerCase()];
        if (n !== undefined) self.noteOff(self.baseMidi + 12 + n);
      };
      document.addEventListener('keydown', this.down);
      document.addEventListener('keyup', this.up);
    },
    unmount: function () {
      this.allOff();
      document.removeEventListener('keydown', this.down);
      document.removeEventListener('keyup', this.up);
      this.el = null;
    }
  };

  // ---------- Ear trainer ----------
  const INTERVALS = ['Unison', 'Minor 2nd', 'Major 2nd', 'Minor 3rd', 'Major 3rd', 'Perfect 4th', 'Tritone', 'Perfect 5th', 'Minor 6th', 'Major 6th', 'Minor 7th', 'Major 7th', 'Octave'];
  const CHORD_Q = {
    'Major': [0, 4, 7], 'Minor': [0, 3, 7], 'Diminished': [0, 3, 6], 'Augmented': [0, 4, 8],
    'Major 7': [0, 4, 7, 11], 'Minor 7': [0, 3, 7, 10], 'Dominant 7': [0, 4, 7, 10], 'Sus4': [0, 5, 7]
  };
  const FREQS = { easy: [125, 500, 2000, 8000], hard: [63, 125, 250, 500, 1000, 2000, 4000, 8000] };
  function fmtHz(f) { return f >= 1000 ? (f / 1000) + ' kHz' : f + ' Hz'; }

  const Ear = {
    mode: 'freq', level: 'easy', q: null, answered: false, el: null, src: null,
    options: function () {
      if (this.mode === 'interval') return this.level === 'easy' ? [3, 4, 5, 7, 12] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      if (this.mode === 'chord') return this.level === 'easy' ? ['Major', 'Minor', 'Diminished', 'Augmented'] : Object.keys(CHORD_Q);
      return FREQS[this.level];
    },
    newQ: function () {
      const o = this.options();
      const ans = o[Math.floor(Math.random() * o.length)];
      this.q = { ans: ans, root: 52 + Math.floor(Math.random() * 12) };
      this.answered = false;
      this.render();
      this.play();
    },
    stopNoise: function () { if (this.src) { try { this.src.stop(); } catch (e) { /* ignore */ } this.src = null; } },
    playNoise: function (boost) {
      const c = Engine.get(); if (!c) return;
      this.stopNoise();
      const n = Engine.noiseSrc(); n.loop = true;
      const pink = c.createBiquadFilter(); pink.type = 'lowpass'; pink.frequency.value = 9000;
      const peq = c.createBiquadFilter(); peq.type = 'peaking'; peq.frequency.value = this.q.ans; peq.Q.value = 1.4; peq.gain.value = boost ? 12 : 0;
      const g = c.createGain(); g.gain.value = 0.18;
      n.connect(pink); pink.connect(peq); peq.connect(g); g.connect(Engine.out);
      n.start(); n.stop(c.currentTime + 1.6);
      this.src = n;
    },
    play: function () {
      const c = Engine.get(); if (!c || !this.q) return;
      if (this.mode === 'interval') {
        const t = c.currentTime + 0.05;
        playKey(this.q.root, t, 0.9, 0.25);
        playKey(this.q.root + this.q.ans, t + 0.7, 1.1, 0.25);
      } else if (this.mode === 'chord') {
        const self = this;
        CHORD_Q[this.q.ans].forEach(function (s) { playKey(self.q.root + s, null, 1.8, 0.16); });
      } else {
        this.playNoise(true);
      }
    },
    answer: function (val, btn) {
      if (this.answered) return;
      this.answered = true;
      const right = String(val) === String(this.q.ans);
      Store.recordEar(this.mode, right);
      btn.classList.add(right ? 'right' : 'wrong');
      const self = this;
      if (!right) {
        this.el.querySelectorAll('[data-a]').forEach(function (b) { if (b.dataset.a === String(self.q.ans)) b.classList.add('right'); });
      }
      const fb = this.el.querySelector('#earFb');
      fb.textContent = right ? 'Correct!' : 'Not quite. The answer was ' + this.label(this.q.ans) + '.';
      this.el.querySelector('#earScore').textContent = this.scoreText();
    },
    label: function (v) {
      if (this.mode === 'interval') return INTERVALS[v];
      if (this.mode === 'freq') return fmtHz(v);
      return v;
    },
    scoreText: function () {
      const e = Store.state.ear[this.mode];
      if (!e || !e.total) return 'No rounds yet';
      return e.right + ' / ' + e.total + ' correct (' + Math.round(e.right / e.total * 100) + '%)';
    },
    render: function () {
      const el = this.el, self = this;
      const modes = [['freq', 'Frequencies (EQ)'], ['interval', 'Intervals'], ['chord', 'Chord qualities']];
      const opts = this.options();
      const help = {
        freq: 'Listen to the flat noise, then the boosted noise. Which frequency band is boosted by 12 dB?',
        interval: 'Two notes play one after the other. Name the interval between them.',
        chord: 'A chord plays. Name its quality.'
      }[this.mode];
      el.innerHTML =
        '<div class="device">' +
          '<div class="device-bar">' +
            '<div class="chips">' + modes.map(function (m) { return '<button type="button" class="btn small' + (m[0] === self.mode ? ' primary' : '') + '" data-mode="' + m[0] + '">' + m[1] + '</button>'; }).join('') + '</div>' +
            '<div class="field" style="width:120px"><label for="earLevel">Level</label><select id="earLevel"><option value="easy"' + (this.level === 'easy' ? ' selected' : '') + '>Easy</option><option value="hard"' + (this.level === 'hard' ? ' selected' : '') + '>Hard</option></select></div>' +
          '</div>' +
          '<p class="muted" style="margin:0">' + help + '</p>' +
          '<div class="btn-row">' +
            (this.q ? '<button class="btn primary" type="button" id="earReplay">' + (this.mode === 'freq' ? 'Play boosted' : 'Replay') + '</button>' : '<button class="btn primary" type="button" id="earStart">Start round</button>') +
            (this.mode === 'freq' && this.q ? '<button class="btn" type="button" id="earFlat">Play flat</button>' : '') +
            (this.q ? '<button class="btn" type="button" id="earNext">Next question</button>' : '') +
          '</div>' +
          (this.q ? '<div class="ear-opts">' + opts.map(function (o) { return '<button type="button" class="btn" data-a="' + esc(o) + '">' + esc(self.label(o)) + '</button>'; }).join('') + '</div>' : '') +
          '<div class="lcd" id="earFb">' + (this.q ? 'Listen, then choose an answer.' : 'Press start. Headphones recommended.') + '</div>' +
          '<div class="muted small" id="earScore">' + this.scoreText() + '</div>' +
        '</div>';
      el.querySelectorAll('[data-mode]').forEach(function (b) { b.onclick = function () { self.stopNoise(); self.mode = b.dataset.mode; self.q = null; self.render(); }; });
      el.querySelector('#earLevel').onchange = function (e) { self.level = e.target.value; self.q = null; self.render(); };
      const st = el.querySelector('#earStart'); if (st) st.onclick = function () { self.newQ(); };
      const rp = el.querySelector('#earReplay'); if (rp) rp.onclick = function () { self.play(); };
      const fl = el.querySelector('#earFlat'); if (fl) fl.onclick = function () { self.playNoise(false); };
      const nx = el.querySelector('#earNext'); if (nx) nx.onclick = function () { self.newQ(); };
      el.querySelectorAll('[data-a]').forEach(function (b) { b.onclick = function () { self.answer(b.dataset.a, b); }; });
    },
    mount: function (el) { this.el = el; this.q = null; this.render(); },
    unmount: function () { this.stopNoise(); this.el = null; }
  };

  // ---------- Calculators ----------
  function money(v) {
    const n = Math.round(v);
    return (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString();
  }
  function lsGet(k, def) { try { const v = localStorage.getItem('pa.calc.' + k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function lsSet(k, v) { try { localStorage.setItem('pa.calc.' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }

  const Calc = {
    el: null, tab: 'delay',
    render: function () {
      const el = this.el, self = this;
      const tabs = [['delay', 'Delay & reverb times'], ['notes', '808 tuning chart'], ['earn', 'Earnings planner'], ['rate', 'Studio rate calculator'], ['loud', 'Loudness targets']];
      el.innerHTML =
        '<div class="stack">' +
          '<div class="chips">' + tabs.map(function (t) { return '<button type="button" class="chip' + (t[0] === self.tab ? ' on' : '') + '" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>' +
          '<div id="calcBody"></div>' +
        '</div>';
      el.querySelectorAll('[data-t]').forEach(function (b) { b.onclick = function () { self.tab = b.dataset.t; self.render(); }; });
      this[this.tab](el.querySelector('#calcBody'));
    },
    delay: function (box) {
      const bpm = lsGet('bpm', 120);
      box.innerHTML =
        '<div class="card stack">' +
          '<div class="form-grid"><div class="field"><label for="cBpm">Tempo (BPM)</label><input id="cBpm" type="number" min="30" max="300" value="' + bpm + '"></div></div>' +
          '<div id="cDelayOut"></div>' +
          '<p class="muted small" style="margin:0">Set delay times to these values for rhythmic echoes. For reverb, try pre-delay of a 1/64 or 1/32 note and a decay that ends before the next important beat (often a 1/2 or whole note).</p>' +
        '</div>';
      function draw() {
        const b = Math.max(30, Math.min(300, +box.querySelector('#cBpm').value || 120));
        lsSet('bpm', b);
        const q = 60000 / b;
        const vals = [['1/1 (whole)', 4], ['1/2', 2], ['1/4', 1], ['1/8', 0.5], ['1/16', 0.25], ['1/32', 0.125], ['1/64', 0.0625]];
        let rows = vals.map(function (v) {
          const ms = q * v[1];
          return '<tr><td>' + v[0] + '</td><td>' + ms.toFixed(1) + ' ms</td><td>' + (ms * 1.5).toFixed(1) + ' ms</td><td>' + (ms * 2 / 3).toFixed(1) + ' ms</td><td>' + (1000 / ms).toFixed(2) + ' Hz</td></tr>';
        }).join('');
        box.querySelector('#cDelayOut').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Note</th><th>Straight</th><th>Dotted</th><th>Triplet</th><th>LFO rate</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
      }
      box.querySelector('#cBpm').oninput = draw;
      draw();
    },
    notes: function (box) {
      let rows = '';
      for (let m = 24; m <= 47; m++) {
        const f = midiToFreq(m);
        const note = noteName(m);
        const tag = f < 40 ? 'Very deep: big systems only' : f <= 60 ? 'Sweet spot for 808s' : 'Punchy, audible on more speakers';
        rows += '<tr><td><strong>' + note + '</strong></td><td>' + f.toFixed(2) + ' Hz</td><td>' + (f * 2).toFixed(1) + ' Hz</td><td>' + (f * 3).toFixed(1) + ' Hz</td><td>' + tag + '</td></tr>';
      }
      box.innerHTML =
        '<div class="card stack">' +
          '<p style="margin:0">Fundamental frequency of each low note (A4 = 440 Hz, octave numbers with middle C = C4). Use it to tune kicks and 808s to your key. The 2nd and 3rd harmonics are what small speakers actually reproduce, so saturation that boosts them makes bass audible on phones.</p>' +
          '<div class="table-wrap"><table><thead><tr><th>Note</th><th>Fundamental</th><th>2nd harmonic</th><th>3rd harmonic</th><th>Notes</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '</div>';
    },
    earn: function (box) {
      const d = lsGet('earn', { leases: 6, leasePrice: 35, excl: 0.5, exclPrice: 400, mixes: 3, mixPrice: 120, masters: 4, masterPrice: 40, hours: 20, hourly: 45, streams: 50000, perStream: 0.004, packs: 10, packPrice: 20, sync: 0, feePct: 10, expenses: 250, tax: 25 });
      const fields = [
        ['leases', 'Beat leases / month'], ['leasePrice', 'Avg lease price ($)'], ['excl', 'Exclusives / month'], ['exclPrice', 'Avg exclusive ($)'],
        ['mixes', 'Mixes / month'], ['mixPrice', 'Price per mix ($)'], ['masters', 'Masters / month'], ['masterPrice', 'Price per master ($)'],
        ['hours', 'Studio hours / month'], ['hourly', 'Hourly rate ($)'], ['streams', 'Streams / month (masters you own)'], ['perStream', 'Payout per stream ($)'],
        ['packs', 'Sample packs sold / month'], ['packPrice', 'Pack price ($)'], ['sync', 'Sync income / month ($)'],
        ['feePct', 'Platform & payment fees (%)'], ['expenses', 'Monthly expenses ($)'], ['tax', 'Tax set-aside (%)']
      ];
      box.innerHTML =
        '<div class="card stack">' +
          '<p style="margin:0">Model your music income. The numbers below are an <strong>example</strong> of an early-stage producer; replace them with your own. Streaming payouts vary by platform and country; treat results as estimates.</p>' +
          '<div class="form-grid">' + fields.map(function (f) { return '<div class="field"><label for="e_' + f[0] + '">' + f[1] + '</label><input type="number" step="any" min="0" id="e_' + f[0] + '" data-f="' + f[0] + '" value="' + d[f[0]] + '"></div>'; }).join('') + '</div>' +
          '<div class="calc-out" id="earnOut"></div>' +
        '</div>';
      function draw() {
        box.querySelectorAll('[data-f]').forEach(function (i) { d[i.dataset.f] = +i.value || 0; });
        lsSet('earn', d);
        const lines = [
          ['Beat leases', d.leases * d.leasePrice], ['Exclusives', d.excl * d.exclPrice], ['Mixing', d.mixes * d.mixPrice],
          ['Mastering', d.masters * d.masterPrice], ['Studio time', d.hours * d.hourly], ['Streaming (master)', d.streams * d.perStream],
          ['Sample packs', d.packs * d.packPrice], ['Sync', d.sync]
        ];
        const gross = lines.reduce(function (a, l) { return a + l[1]; }, 0);
        const fees = gross * d.feePct / 100;
        const pre = gross - fees - d.expenses;
        const tax = Math.max(0, pre) * d.tax / 100;
        const net = pre - tax;
        const max = Math.max.apply(null, lines.map(function (l) { return l[1]; }).concat([1]));
        let html = lines.map(function (l) {
          return '<div class="bar-line"><span>' + l[0] + '</span><span class="bar-track"><span class="bar" style="display:block;width:' + (l[1] / max * 100) + '%"></span></span><span class="mono">' + money(l[1]) + '</span></div>';
        }).join('');
        html += '<div class="total-line"><span>Gross / month</span><span class="v">' + money(gross) + '</span></div>';
        html += '<div class="bar-line"><span>Fees</span><span></span><span class="mono">-' + money(fees) + '</span></div>';
        html += '<div class="bar-line"><span>Expenses</span><span></span><span class="mono">-' + money(d.expenses) + '</span></div>';
        html += '<div class="bar-line"><span>Tax set-aside</span><span></span><span class="mono">-' + money(tax) + '</span></div>';
        html += '<div class="total-line"><span>Take-home / month</span><span class="v">' + money(net) + '</span></div>';
        html += '<div class="total-line"><span>Take-home / year</span><span class="v">' + money(net * 12) + '</span></div>';
        box.querySelector('#earnOut').innerHTML = html;
      }
      box.querySelectorAll('[data-f]').forEach(function (i) { i.oninput = draw; });
      draw();
    },
    rate: function (box) {
      const d = lsGet('rate', { rent: 900, utilities: 150, gear: 200, software: 80, marketing: 150, insurance: 50, other: 100, salary: 2500, hours: 80, buffer: 25 });
      const fields = [['rent', 'Rent ($/month)'], ['utilities', 'Utilities & internet'], ['gear', 'Gear payments / upkeep'], ['software', 'Software subscriptions'], ['marketing', 'Marketing'], ['insurance', 'Insurance'], ['other', 'Other costs'], ['salary', 'Your target salary'], ['hours', 'Billable hours / month'], ['buffer', 'Safety buffer (%)']];
      box.innerHTML =
        '<div class="card stack">' +
          '<p style="margin:0">Find the hourly rate that covers your costs and pays you. The values are an <strong>example</strong>; enter your own.</p>' +
          '<div class="form-grid">' + fields.map(function (f) { return '<div class="field"><label for="r_' + f[0] + '">' + f[1] + '</label><input type="number" min="0" step="any" id="r_' + f[0] + '" data-f="' + f[0] + '" value="' + d[f[0]] + '"></div>'; }).join('') + '</div>' +
          '<div class="calc-out" id="rateOut"></div>' +
        '</div>';
      function draw() {
        box.querySelectorAll('[data-f]').forEach(function (i) { d[i.dataset.f] = +i.value || 0; });
        lsSet('rate', d);
        const costs = d.rent + d.utilities + d.gear + d.software + d.marketing + d.insurance + d.other;
        const need = costs + d.salary;
        const be = d.hours > 0 ? need / d.hours : 0;
        const rec = be * (1 + d.buffer / 100);
        const pkg = rec * 2 + rec * 3;
        box.querySelector('#rateOut').innerHTML =
          '<div class="total-line"><span>Monthly costs</span><span class="v">' + money(costs) + '</span></div>' +
          '<div class="total-line"><span>Costs + salary</span><span class="v">' + money(need) + '</span></div>' +
          '<div class="total-line"><span>Break-even rate</span><span class="v">' + money(be) + ' / hour</span></div>' +
          '<div class="total-line"><span>Recommended rate (with buffer)</span><span class="v">' + money(rec) + ' / hour</span></div>' +
          '<p class="muted small" style="margin:0">Example song package at this rate (2 h recording + about 3 h of mixing time): around ' + money(pkg) + '. Compare with your local market before publishing prices.</p>';
      }
      box.querySelectorAll('[data-f]').forEach(function (i) { i.oninput = draw; });
      draw();
    },
    loud: function (box) {
      box.innerHTML =
        '<div class="card stack">' +
          '<p style="margin:0">Approximate streaming normalisation references. Platforms update these; check their current guidance before release.</p>' +
          '<div class="table-wrap"><table><thead><tr><th>Platform</th><th>Reference</th><th>Notes</th></tr></thead><tbody>' +
            '<tr><td>Spotify</td><td>-14 LUFS</td><td>Loud -11, Quiet -19; -1 dBTP (or -2 dBTP for masters louder than -14 LUFS)</td></tr>' +
            '<tr><td>YouTube</td><td>-14 LUFS</td><td>Turns loud tracks down</td></tr>' +
            '<tr><td>Apple Music</td><td>-16 LUFS</td><td>Sound Check</td></tr>' +
            '<tr><td>Amazon Music</td><td>about -14 LUFS</td><td></td></tr>' +
            '<tr><td>Tidal</td><td>-14 LUFS</td><td></td></tr>' +
            '<tr><td>Deezer</td><td>-15 LUFS</td><td></td></tr>' +
          '</tbody></table></div>' +
          '<div class="table-wrap"><table><thead><tr><th>Genre</th><th>Typical integrated loudness</th></tr></thead><tbody>' +
            '<tr><td>EDM, dubstep, hard trap</td><td>-5 to -8 LUFS</td></tr>' +
            '<tr><td>Pop, hip-hop, trap</td><td>-7 to -10 LUFS</td></tr>' +
            '<tr><td>Rock, Afrobeats, R&amp;B</td><td>-8 to -11 LUFS</td></tr>' +
            '<tr><td>Lo-fi, indie, acoustic</td><td>-10 to -14 LUFS</td></tr>' +
            '<tr><td>Jazz, classical, ambient</td><td>-14 to -20 LUFS</td></tr>' +
          '</tbody></table></div>' +
        '</div>';
    },
    mount: function (el) { this.el = el; this.render(); },
    unmount: function () { this.el = null; }
  };

  window.Tools = {
    list: [
      { id: 'drums', name: 'Drum Machine', desc: '16-step sequencer with 40+ genre and lesson patterns, swing and a tuned 808.', tool: Drum },
      { id: 'synth', name: 'Synth Lab', desc: 'Subtractive synth with filter, envelopes and LFO. Learn sound design hands-on.', tool: Synth },
      { id: 'piano', name: 'Theory Explorer', desc: 'Scales, modes, thaats, diatonic chords and progressions you can hear.', tool: Theory },
      { id: 'ear', name: 'Ear Trainer', desc: 'Frequency, interval and chord-quality training with saved scores.', tool: Ear },
      { id: 'metronome', name: 'Metronome & Tap Tempo', desc: 'Keep time and find the BPM of any song.', tool: Metro },
      { id: 'calc', name: 'Calculators', desc: 'Delay times, 808 tuning, earnings planner, studio rates, loudness targets.', tool: Calc }
    ],
    Drum: Drum,
    stopAll: function () { [Drum, Metro, Synth, Ear].forEach(function (t) { if (t.el) t.unmount(); }); }
  };
})();
