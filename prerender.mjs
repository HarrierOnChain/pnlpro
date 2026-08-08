// Post-build prerender. Renders the built SPA with a real headless browser and
// snapshots the fully-rendered HTML back into dist/index.html, so crawlers and
// social scrapers see real content instead of an empty <div id="root">.
//
// BEST-EFFORT BY DESIGN: any failure (no puppeteer, launch error, timeout) is
// caught, logged, and the script exits 0 leaving the normal SPA build in place —
// it can never break the deploy.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');
const BASE = process.env.VITE_BASE || '/';

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2',
};

async function main() {
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch (e) {
    console.warn('[prerender] puppeteer unavailable — skipping (SPA build kept):', e.message);
    return;
  }

  // Static server that serves dist/ under the configured base path.
  const server = createServer(async (req, res) => {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (BASE !== '/' && p.startsWith(BASE)) p = '/' + p.slice(BASE.length);
    if (p === '/' || p === '') p = '/index.html';
    try {
      const data = await readFile(join(DIST, p));
      res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      try {
        const data = await readFile(join(DIST, 'index.html')); // SPA fallback
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('not found');
      }
    }
  });
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  const url = `http://localhost:${port}${BASE}`;

  let browser;
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    // Render every locale to its own static page (SEO: /es/, /ja/ … + hreflang).
    // English is rendered LAST so dist/index.html stays the clean build until then.
    const LOCALES = ['zh', 'ru', 'es', 'pt', 'fr', 'de', 'it', 'tr', 'vi', 'ja', 'ko', 'ar', 'en'];
    const HTMLLANG = { zh: 'zh-CN', pt: 'pt-BR' };
    for (const code of LOCALES) {
      const target = code === 'en' ? url : `${url}?lang=${code}`;
      await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForSelector('#contact', { timeout: 20000 }); // full render done
      let html = await page.content();
      if (!html.includes('id="contact"')) throw new Error(`rendered HTML missing content for ${code}`);
      // per-locale <html lang/dir>, canonical, og:url
      const htmlLang = HTMLLANG[code] || code;
      const dirAttr = code === 'ar' ? ' dir="rtl"' : '';
      html = html.replace(/<html[^>]*>/i, `<html lang="${htmlLang}"${dirAttr}>`);
      const locUrl = code === 'en' ? 'https://pnlpro.fit/' : `https://pnlpro.fit/${code}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${locUrl}" />`);
      html = html.replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${locUrl}" />`);
      const outDir = code === 'en' ? DIST : join(DIST, code);
      if (code !== 'en') await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, 'index.html'), html);
      console.log(`[prerender] ${code} -> ${code === 'en' ? 'dist/index.html' : 'dist/' + code + '/index.html'} (${html.length} bytes)`);
    }
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.warn('[prerender] skipped due to error (SPA build kept):', e.message);
  process.exit(0);
});
