/* Optional cloud save. When the app runs as a published claude.ai Artifact with the
   `db` and `user` capabilities, progress is mirrored to the viewer's private
   data/users/<id>/progress document. Anywhere else this does nothing and the app
   keeps using browser storage only. */
(function () {
  if (!window.claude || typeof window.claude.use !== 'function') return;

  let ref = null, writing = false, again = false, timer = null, lastJSON = '';

  function schedule() { clearTimeout(timer); timer = setTimeout(flush, 1500); }

  async function flush() {
    if (!ref) return;
    const json = JSON.stringify(Store.state);
    if (json === lastJSON) return;
    if (writing) { again = true; return; }
    writing = true;
    try {
      await ref.set({ state: JSON.parse(json) });
      lastJSON = json;
    } catch (e) {
      const code = e && e.code;
      if (code === 'unavailable' || code === 'resource_exhausted') again = true;
      else ref = null; // not allowed, revoked or too large: stay on browser storage
    }
    writing = false;
    if (again && ref) { again = false; timer = setTimeout(flush, 4000 + Math.random() * 2000); }
  }

  async function start() {
    const caps = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    const db = caps[0], user = caps[1];
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    const docRef = db.doc('data/users/' + id + '/progress');
    let snap;
    try { snap = await docRef.get(); } catch (e) { return; }
    ref = docRef;
    const remote = snap.exists && snap.data() && snap.data().state;
    const local = Store.state;
    if (remote && (remote.updated || 0) > (local.updated || 0)) {
      Store.replace(remote);
      if (window.App && App.refresh) App.refresh();
    }
    lastJSON = remote ? JSON.stringify(remote) : '';
    if (window.App) App.cloud = true;
    Store.onChange(schedule);
    // Push local progress made before sync connected, if it is newer than the saved copy.
    if (local.updated && (!remote || local.updated > (remote.updated || 0))) schedule();
  }

  start();
})();
