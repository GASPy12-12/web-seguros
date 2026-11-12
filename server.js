// Servidor local para ver la web en la compu (Node 18+, sin dependencias).
// La web publicada no lo necesita: son archivos estáticos de la carpeta public.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = process.argv[3] || process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, process.argv[2] || 'public');
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };

// Lee las cabeceras de seguridad que usa Netlify (public/_headers) para probarlas en local
const SEC_HEADERS = {};
try {
  fs.readFileSync(path.join(PUBLIC_DIR, '_headers'), 'utf8').split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s+([\w-]+):\s*(.+)$/);
    if (m) SEC_HEADERS[m[1]] = m[2];
  });
} catch {}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const file = path.normalize(path.join(PUBLIC_DIR, url.pathname === '/' ? 'index.html' : url.pathname));
  if (!file.startsWith(PUBLIC_DIR)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('No encontrado'); }
    res.writeHead(200, { ...SEC_HEADERS, 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Web lista en http://localhost:${PORT}`));
