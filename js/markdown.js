/* A deliberately small Markdown renderer for lesson content.
   Supports: ## / ### / #### headings, paragraphs, - and 1. lists, > callouts,
   | tables |, ``` code blocks ```, ---, **bold**, *italic*, ==highlight==, `code` and [links](url). */
(function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function inline(s) {
    let out = esc(s);
    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
    out = out.replace(/==([^=]+)==/g, '<mark>$1</mark>');
    out = out.replace(/\[([^\]]+)\]\(((?:https?:\/\/|#)[^)\s]+)\)/g, function (_, text, url) {
      const ext = url.charAt(0) !== '#';
      return '<a href="' + url + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + text + '</a>';
    });
    return out;
  }

  function splitRow(line) {
    let l = line.trim();
    if (l.startsWith('|')) l = l.slice(1);
    if (l.endsWith('|')) l = l.slice(0, -1);
    return l.split('|').map(function (c) { return c.trim(); });
  }

  function render(src) {
    if (!src) return '';
    const raw = String(src).replace(/\r/g, '').split('\n');
    const lines = raw.map(function (l) { return l.replace(/^\s+/, ''); });
    const html = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      // Code blocks keep their spacing so grids (like drum patterns) stay aligned.
      if (line.startsWith('```')) {
        const buf = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) { buf.push(raw[i]); i++; }
        i++;
        html.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>');
        continue;
      }

      let m = line.match(/^(#{2,4})\s+(.*)$/);
      if (m) {
        const lvl = m[1].length;
        html.push('<h' + lvl + '>' + inline(m[2]) + '</h' + lvl + '>');
        i++; continue;
      }
      if (/^---+$/.test(line.trim())) { html.push('<hr>'); i++; continue; }

      if (line.startsWith('|')) {
        const rows = [];
        while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++; }
        const head = splitRow(rows[0]);
        const body = rows.slice(1).filter(function (r) { return !/^\|?\s*:?-{2,}/.test(r.replace(/\s/g, '').replace(/^\|/, '')); });
        let t = '<div class="table-wrap"><table><thead><tr>' + head.map(function (h) { return '<th>' + inline(h) + '</th>'; }).join('') + '</tr></thead><tbody>';
        body.forEach(function (r) {
          t += '<tr>' + splitRow(r).map(function (c) { return '<td>' + inline(c) + '</td>'; }).join('') + '</tr>';
        });
        html.push(t + '</tbody></table></div>');
        continue;
      }

      if (line.startsWith('>')) {
        const buf = [];
        while (i < lines.length && lines[i].startsWith('>')) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
        html.push('<blockquote><p>' + buf.map(inline).join('<br>') + '</p></blockquote>');
        continue;
      }

      if (/^[-*]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^[-*]\s+/.test(lines[i])) { items.push(lines[i].replace(/^[-*]\s+/, '')); i++; }
        html.push('<ul>' + items.map(function (it) { return '<li>' + inline(it) + '</li>'; }).join('') + '</ul>');
        continue;
      }

      if (/^\d+[.)]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+[.)]\s+/.test(lines[i])) { items.push(lines[i].replace(/^\d+[.)]\s+/, '')); i++; }
        html.push('<ol>' + items.map(function (it) { return '<li>' + inline(it) + '</li>'; }).join('') + '</ol>');
        continue;
      }

      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|[-*]\s|\d+[.)]\s|>|\||---+$|```)/.test(lines[i])) {
        para.push(lines[i]); i++;
      }
      html.push('<p>' + inline(para.join(' ')) + '</p>');
    }
    return html.join('\n');
  }

  window.MD = { render: render, inline: inline, esc: esc };
})();
