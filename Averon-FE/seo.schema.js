/**
 * seo.schema.js — shared structured-data builders.
 *
 * Imported by BOTH scripts/prerender.mjs (build) and src/components/Seo.jsx
 * (runtime), so the JSON-LD a crawler sees in the static HTML is identical to
 * what it sees after React hydrates. Divergence between the two is its own
 * SEO problem, so keep this the only place schema is defined.
 */

import { SITE, routes, absoluteUrl } from './seo.config.js';

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
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(route.path),
      price: route.price,
      priceCurrency: route.priceCurrency || 'GBP',
      availability: route.availability || 'https://schema.org/InStock',
    },
  };
}

export function articleSchema(route, image) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: route.title.split('|')[0].trim(),
    description: route.description,
    image: [`${SITE.url}${image}`],
    datePublished: route.datePublished,
    dateModified: route.dateModified,
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
  // Product schema is only emitted when the route carries a real `price`.
  //
  // Google requires 'offers', 'review' or 'aggregateRating' for a Product to be
  // eligible for rich results. Wholesale pages quote on enquiry, so there is no
  // public price to state — and a Product block without offers just produces a
  // Search Console warning while earning nothing.
  //
  // TO ENABLE FOR THE SHOP: add `price: '12.50'` (and optionally priceCurrency
  // and availability) to that route in seo.config.js. Schema appears automatically.
  // The price MUST match what is displayed on the page — Google cross-checks,
  // and a mismatch is treated as more serious than a missing field.
  if (route.type === 'product' && route.price) {
    out.push(productSchema(route, image));
  }
  if (route.type === 'article') out.push(articleSchema(route, image));
  return out;
}