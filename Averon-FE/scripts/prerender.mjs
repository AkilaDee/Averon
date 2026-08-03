/**
 * scripts/prerender.mjs
 *
 * Runs AFTER `vite build`. Takes the single dist/index.html shell and explodes
 * it into one unique static HTML file per route:
 *
 *   dist/index.html
 *   dist/products/index.html
 *   dist/products/ceylon-cinnamon/index.html
 *   ...
 *
 * Each file gets its own <title>, meta description, self-referencing canonical,
 * Open Graph + Twitter tags, route-specific JSON-LD and crawler-visible
 * fallback body content. Also emits dist/sitemap.xml and dist/robots.txt.
 *
 * Usage:  node scripts/prerender.mjs   (or just `npm run build`)
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, routes, absoluteUrl, PLACEHOLDER_DATE } from '../seo.config.js';
import { buildSchemas, trail } from '../seo.schema.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const HEAD_MARKER = '<!--SEO_HEAD-->';
const BODY_MARKER = '<!--SEO_BODY-->';

const TODAY = new Date().toISOString().slice(0, 10);

// ── helpers ────────────────────────────────────────────────────────────────

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

/**
 * react-helmet-async tags every element it manages with data-rh="true", and on
 * mount it removes head elements carrying that marker before inserting its own.
 * Without the marker, Helmet treats our prerendered tags as foreign and simply
 * adds duplicates alongside them  two <title>s, two canonicals, doubled JSON-LD.
 *
 * Stamping the marker here makes Helmet adopt and replace these tags cleanly.
 */
const HELMET_ATTR = 'data-rh="true"';
const markForHelmet = (line) =>
  line
    .replace(/^<title>/, `<title ${HELMET_ATTR}>`)
    .replace(/^<meta /, `<meta ${HELMET_ATTR} `)
    .replace(/^<link /, `<link ${HELMET_ATTR} `)
    .replace(/^<script type="application\/ld\+json">/, `<script ${HELMET_ATTR} type="application/ld+json">`);

const exists = (p) => access(p).then(() => true, () => false);

/** Sibling links, so every fallback shell has genuinely different internal links. */
function siblings(route) {
  if (route.path === '/') {
    return routes.filter((r) => r.path.startsWith('/products/'));
  }
  const parentOf = (p) => p.slice(0, p.lastIndexOf('/')) || '/';
  const parent = parentOf(route.path);
  return routes.filter(
    (r) => r.path !== route.path && r.path !== '/' && parentOf(r.path) === parent
  );
}

// ── head construction ──────────────────────────────────────────────────────

function buildHead(route, image) {
  const url = absoluteUrl(route.path);
  const ogType = route.type === 'article' ? 'article' : 'website';

  const lines = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    ``,
    `<!-- Self-referencing canonical (audit issue #3) -->`,
    `<link rel="canonical" href="${url}" />`,
    `<!-- hreflang belongs on alternate, never on canonical (audit issue #8) -->`,
    `<link rel="alternate" href="${url}" hreflang="${SITE.lang}" />`,
    `<link rel="alternate" href="${url}" hreflang="x-default" />`,
    ``,
    `<!-- Open Graph (audit issues #5, #14) -->`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.url}${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(route.h1)}" />`,
  ];

  // Only emit article dates once they're real  see seo.schema.js.
  if (route.type === 'article' && route.datePublished !== PLACEHOLDER_DATE) {
    lines.push(
      `<meta property="article:published_time" content="${route.datePublished}" />`,
      `<meta property="article:modified_time" content="${route.dateModified}" />`
    );
  }

  lines.push(
    ``,
    `<!-- Twitter/X cards (audit issue #10) -->`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${SITE.url}${image}" />`
  );
  if (SITE.twitterHandle) {
    lines.push(
      `<meta name="twitter:site" content="${esc(SITE.twitterHandle)}" />`,
      `<meta name="twitter:creator" content="${esc(SITE.twitterHandle)}" />`
    );
  }

  lines.push(
    ``,
    `<!-- Structured data, route-specific (audit issue #7) -->`,
    ...buildSchemas(route, image).map(jsonLd)
  );

  return lines.map((l) => (l ? `    ${markForHelmet(l)}` : '')).join('\n');
}

// ── body construction ──────────────────────────────────────────────────────

function buildBody(route) {
  const crumbs = trail(route);
  const sibs = siblings(route);

  const nav =
    crumbs.length > 1
      ? `      <nav aria-label="Breadcrumb">
        <ol>
${crumbs
  .map(
    (c, i) =>
      `          <li>${
        i === crumbs.length - 1 ? esc(c.name) : `<a href="${c.path}">${esc(c.name)}</a>`
      }</li>`
  )
  .join('\n')}
        </ol>
      </nav>`
      : '';

  const sections = (route.sections || [])
    .map(
      (s) => `        <section>
          <h2>${esc(s.h2)}</h2>
          <p>${esc(s.p)}</p>
        </section>`
    )
    .join('\n');

  const related = sibs.length
    ? `        <section>
          <h2>Related Pages</h2>
          <ul>
${sibs
  .map((s) => `            <li><a href="${s.path}">${esc(s.breadcrumb || s.h1)}</a></li>`)
  .join('\n')}
          </ul>
        </section>`
    : '';

  return [
    `      <header>`,
    `        <h1>${esc(route.h1)}</h1>`,
    `      </header>`,
    nav,
    `      <main>`,
    `        <section>`,
    route.intro.map((p) => `          <p>${esc(p)}</p>`).join('\n'),
    `        </section>`,
    sections,
    related,
    `        <section>`,
    `          <p>Ready to secure bulk pricing or request samples? <a href="/contact-us">Get in touch with our wholesale team today</a>.</p>`,
    `        </section>`,
    `      </main>`,
  ]
    .filter(Boolean)
    .join('\n');
}

// ── sitemap + robots ───────────────────────────────────────────────────────

function buildSitemap() {
  // One consistent URL format  no trailing slash except the homepage (audit
  // issue #9). No <changefreq>, which Google ignores (audit issue #13).
  // Real per-page <lastmod> instead of one shared date (audit issue #12).
  const urls = routes
    .filter((r) => !r.noindex)
    .map((r) => {
      const depth = r.path === '/' ? 0 : r.path.split('/').filter(Boolean).length;
      const priority = r.priority || (depth === 1 ? '0.8' : '0.6');
      const lastmod = r.lastmod || r.dateModified || TODAY;
      return [
        '  <url>',
        `    <loc>${absoluteUrl(r.path)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

# Audit issue #11 suggested blocking /assets/ to save crawl budget.
# Deliberately left commented out: blocking the JS/CSS bundles stops Googlebot
# rendering a React SPA correctly, which costs far more than the crawl budget
# it saves. Uncomment only if you are certain.
# Disallow: /assets/

Sitemap: ${SITE.url}/sitemap.xml
`;
}

// ── main ───────────────────────────────────────────────────────────────────

/**
 * Compare seo.config.js against the paths declared in src/App.jsx.
 *
 * This exists because the two lists drift. A route in the config but not the
 * router gets a prerendered file at a URL React can't render; a route in the
 * router but not the config ships with no metadata at all. Both are silent.
 */
async function checkRouteParity(warnings) {
  const appPath = join(ROOT, 'src', 'App.jsx');
  if (!(await exists(appPath))) return;

  const src = await readFile(appPath, 'utf8');
  const declared = new Set(
    [...src.matchAll(/<Route\s[^>]*path=["']([^"']+)["']/g)].map((m) => m[1])
  );
  if (!declared.size) return;

  const configured = new Set(routes.map((r) => r.path));

  for (const p of configured) {
    if (!declared.has(p) && !declared.has('*')) {
      warnings.push(`${p} is in seo.config.js but has no <Route> in App.jsx`);
    }
  }
  for (const p of declared) {
    if (p !== '*' && !configured.has(p)) {
      warnings.push(`${p} has a <Route> in App.jsx but no entry in seo.config.js`);
    }
  }
}

async function main() {
  const templatePath = join(DIST, 'index.html');
  if (!(await exists(templatePath))) {
    console.error('\n  dist/index.html not found. Run `vite build` first.\n');
    process.exit(1);
  }

  const template = await readFile(templatePath, 'utf8');

  if (!template.includes(HEAD_MARKER) || !template.includes(BODY_MARKER)) {
    console.error(
      `\n  Markers missing.\n  index.html needs ${HEAD_MARKER} inside <head> and ${BODY_MARKER} inside <div id="root">.\n`
    );
    process.exit(1);
  }

  const warnings = [];
  const seen = new Set();

  for (const route of routes) {
    if (seen.has(route.path)) {
      warnings.push(`duplicate route in seo.config.js: ${route.path}`);
      continue;
    }
    seen.add(route.path);

    if (route.type === 'article' && route.datePublished === PLACEHOLDER_DATE) {
      warnings.push(`${route.path} still has the placeholder datePublished`);
    }
    if (route.description.length > 160) {
      warnings.push(
        `${route.path} description is ${route.description.length} chars (aim for 120-155)`
      );
    }
    if (route.title.length > 65) {
      warnings.push(`${route.path} title is ${route.title.length} chars (may truncate in SERPs)`);
    }

    let image = route.ogImage || SITE.defaultOgImage;
    if (!(await exists(join(DIST, image.replace(/^\//, ''))))) {
      if (image !== SITE.defaultOgImage) {
        warnings.push(`${route.path}: og image ${image} missing, using default`);
      }
      image = SITE.defaultOgImage;
    }

    const html = template
      .replace(HEAD_MARKER, buildHead(route, image).trimStart())
      .replace(BODY_MARKER, '\n' + buildBody(route) + '\n    ');

    const outDir = route.path === '/' ? DIST : join(DIST, route.path);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
  }

  await checkRouteParity(warnings);

  await writeFile(join(DIST, 'sitemap.xml'), buildSitemap(), 'utf8');
  await writeFile(join(DIST, 'robots.txt'), buildRobots(), 'utf8');

  console.log(`\n  Prerendered ${seen.size} routes -> dist/`);
  console.log('  Wrote dist/sitemap.xml and dist/robots.txt');

  if (!(await exists(join(DIST, SITE.defaultOgImage.replace(/^\//, ''))))) {
    warnings.push(`default og image missing: add public${SITE.defaultOgImage} at 1200x630`);
  }

  if (warnings.length) {
    console.log(`\n  ${warnings.length} warning(s):`);
    warnings.forEach((w) => console.log(`    - ${w}`));
  }
  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
