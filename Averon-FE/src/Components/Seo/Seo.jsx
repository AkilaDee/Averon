/**
 * src/Components/Seo/Seo.jsx
 *
 * Keeps <head> correct during client-side navigation.
 *
 * The prerendered HTML from scripts/prerender.mjs is what crawlers read on a
 * cold request  that's the part that fixes the audit. This handles the other
 * half: when a user clicks from /products to /products/cloves, React Router
 * swaps the view without a page load, so the <title>, canonical and OG tags
 * would otherwise still describe the previous page.
 *
 * Uses react-helmet-async, which you already have via <HelmetProvider> in
 * main.jsx. Do NOT manipulate document.head directly alongside Helmet 
 * Helmet reconciles the tags it owns on every render and will fight you.
 *
 * USAGE  mount ONCE, inside <BrowserRouter>, outside <Routes>:
 *
 *   <BrowserRouter>
 *     <ScrollHandler />
 *     <Seo />
 *     ...
 *
 * PRECEDENCE: Helmet resolves conflicts by mount depth  the deepest/latest
 * <Helmet> wins. Because <Seo /> sits high in the tree, any page component
 * that renders its own <Helmet> will override these values for the tags it
 * declares, while still inheriting everything it doesn't. See the note at the
 * bottom of this file.
 */

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE, getRoute, absoluteUrl } from '../../../seo.config.js';
import { buildSchemas } from '../../../seo.schema.js';

export default function Seo() {
  const { pathname } = useLocation();
  const route = getRoute(pathname);

  // Unknown path: don't let it inherit the previous page's metadata, and don't
  // let a soft 404 get indexed.
  if (!route) {
    return (
      <Helmet>
        <title>{`Page Not Found | ${SITE.name}`}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    );
  }

  const url = absoluteUrl(route.path);
  const imagePath = route.ogImage || SITE.defaultOgImage;
  const image = `${SITE.url}${imagePath}`;
  const isArticle = route.type === 'article';

  return (
    <Helmet prioritizeSeoTags>
      <html lang={SITE.lang} />

      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      <meta
        name="robots"
        content={
          route.noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Self-referencing canonical (audit issue #3) */}
      <link rel="canonical" href={url} />
      {/* hreflang belongs on alternate, never on canonical (audit issue #8) */}
      <link rel="alternate" href={url} hrefLang={SITE.lang} />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {/* Open Graph (audit issues #5, #14) */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={route.h1} />

      {isArticle && (
        <meta property="article:published_time" content={route.datePublished} />
      )}
      {isArticle && (
        <meta property="article:modified_time" content={route.dateModified} />
      )}

      {/* Twitter/X cards (audit issue #10) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={image} />
      {SITE.twitterHandle && (
        <meta name="twitter:site" content={SITE.twitterHandle} />
      )}

      {/* Structured data, route-specific (audit issue #7) */}
      {buildSchemas(route, imagePath).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

/**
 * ─── IF YOUR PAGE COMPONENTS ALREADY USE <Helmet> ───────────────────────────
 *
 * Check with:   grep -rl "Helmet" src/Components/
 *
 * If article or product components already set their own <title> and
 * description, you have a choice:
 *
 *   (a) Leave them. They'll override this component per page, which works 
 *       but you now have metadata in two places, and seo.config.js stops being
 *       the source of truth for those pages. The prerendered HTML is built
 *       from seo.config.js, so any divergence means crawlers and users see
 *       different titles for the same URL.
 *
 *   (b) Strip <Helmet> out of those components and let seo.config.js drive
 *       everything. Recommended  one file to maintain, and what a crawler
 *       reads is guaranteed to match what a browser renders.
 *
 * Option (b) is why the config file exists. Worth the ten minutes.
 */
