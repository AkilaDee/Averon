/**
 * seo.schema.js — shared structured-data builders.
 *
 * Imported by BOTH scripts/prerender.mjs (build) and src/components/Seo.jsx
 * (runtime), so the JSON-LD a crawler sees in the static HTML is identical to
 * what it sees after React hydrates. Divergence between the two is its own
 * SEO problem, so keep this the only place schema is defined.
 */

import { SITE, routes, absoluteUrl, PLACEHOLDER_DATE } from './seo.config.js';

/** Breadcrumb trail derived from the URL path. */
export function trail(route) {
  const crumbs = [{ name: 'Home', path: '/' }];
  if (route.path === '/') return crumbs;

  const segs = route.path.split('/').filter(Boolean);
  let acc = '';
  for (const seg of segs) {
    acc += `/${seg}`;
    const match = routes.find((r) => r.path === acc);
    crumbs.push({
      name:
        match?.breadcrumb ||
        match?.h1 ||
        seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      path: acc,
    });
  }
  return crumbs;
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: `${SITE.url}/`,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.lang,
  };
}

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}${SITE.logo}`,
    description:
      'Specialist importer and wholesale distributor of Ceylon cinnamon and Sri Lankan spices sourced directly from our own estates in Sri Lanka.',
    telephone: SITE.telephone, // E.164 — audit issue #15
    email: SITE.email,
    address: { '@type': 'PostalAddress', ...SITE.address },
    geo: { '@type': 'GeoCoordinates', ...SITE.geo },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SITE.openingHours.days,
      opens: SITE.openingHours.opens,
      closes: SITE.openingHours.closes,
    },
    sameAs: SITE.sameAs,
  };
}

export function breadcrumbList(route) {
  const crumbs = trail(route);
  if (crumbs.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function productSchema(route, image) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: route.h1,
    description: route.description,
    image: [`${SITE.url}${image}`],
    category: route.category || 'Spices',
    ...(route.sku ? { sku: route.sku } : {}),
    brand: { '@type': 'Brand', name: SITE.name },
    url: absoluteUrl(route.path),
    // NOTE: add an `offers` block with real price/currency/availability to be
    // eligible for product rich results. Omitted here because wholesale pricing
    // isn't published — don't fake it, Google penalises mismatched offer data.
  };
}

export function articleSchema(route, image) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: route.title.split('|')[0].trim(),
    description: route.description,
    image: [`${SITE.url}${image}`],
    // A wrong date is worse than no date: Google reads datePublished and will
    // happily show 1970 in results. Until a real date is set in seo.config.js,
    // omit the field entirely rather than assert something false.
    ...(route.datePublished && route.datePublished !== PLACEHOLDER_DATE
      ? { datePublished: route.datePublished }
      : {}),
    ...(route.dateModified && route.dateModified !== PLACEHOLDER_DATE
      ? { dateModified: route.dateModified }
      : {}),
    author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(route.path) },
    inLanguage: SITE.lang,
  };
}

/** Every schema block that belongs on a given route, in order. */
export function buildSchemas(route, image = SITE.defaultOgImage) {
  const out = [website(), localBusiness()];
  const bc = breadcrumbList(route);
  if (bc) out.push(bc);
  if (route.type === 'product') out.push(productSchema(route, image));
  if (route.type === 'article') out.push(articleSchema(route, image));
  return out;
}