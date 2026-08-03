/**
 * seo.config.js — SINGLE SOURCE OF TRUTH for all per-page SEO metadata.
 *
 * Consumed by BOTH:
 *   - scripts/prerender.mjs  (build time -> writes unique HTML shell per route)
 *   - src/components/Seo.jsx (runtime  -> keeps <head> correct on SPA navigation)
 *
 * TO ADD A PAGE: add an entry to `routes`. Everything else is automatic
 * (canonical, OG, Twitter, breadcrumbs, sitemap entry, fallback HTML).
 *
 * ---------------------------------------------------------------------------
 * !! BEFORE YOU DEPLOY, EDIT THESE !!
 *   1. `datePublished` / `dateModified` on every /insights/* entry.
 *      They are all set to PLACEHOLDER_DATE. The build will warn you by name
 *      for each one you haven't changed.
 *   2. Create the og:image files listed in `ogImage` (1200x630 JPG or PNG)
 *      and drop them in /public/og/. Missing files fall back to the default.
 * ---------------------------------------------------------------------------
 */

export const SITE = {
  // No trailing slash. The homepage is the ONLY URL that ends in "/".
  url: 'https://www.averonsupplies.co.uk',
  name: 'Averon Supplies Ltd',
  locale: 'en_GB',
  lang: 'en-GB',
  logo: '/averonlogo.png',
  defaultOgImage: '/og/averon-default.jpg',
  twitterHandle: '', // e.g. '@averonsupplies' — leave '' if you have no X account
  telephone: '+447344469729', // E.164 — fixes audit issue #15
  email: 'info@averonsupplies.co.uk',
  address: {
    streetAddress: '42 Porthcawe Road',
    addressLocality: 'London',
    postalCode: 'SE26 5TA',
    addressCountry: 'GB',
  },
  geo: { latitude: '51.4285', longitude: '-0.0382' },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [
    'https://www.facebook.com/averonsuppliesltd',
    'https://www.instagram.com/averonsuppliesltd',
    'https://linkedin.com/company/averon-supplies-ltd',
  ],
};

export const PLACEHOLDER_DATE = '1970-01-01';

/**
 * Route schema:
 *   path         required  '/products/cloves'  (no trailing slash; '/' for home)
 *   title        required  <=60 chars ideally
 *   description  required  120-155 chars
 *   h1           required  crawler-visible fallback heading
 *   intro        required  array of paragraph strings
 *   sections     optional  [{ h2, p }]
 *   type         optional  'website' | 'article' | 'product'  (default 'website')
 *   ogImage      optional  path under /public
 *   breadcrumb   optional  label override for breadcrumb trail
 *   noindex      optional  true -> robots noindex + excluded from sitemap
 *   priority     optional  sitemap priority (default derived from depth)
 *   lastmod      optional  sitemap lastmod (default: today at build time)
 *   datePublished / dateModified   required when type === 'article'
 *   sku / category                 optional, used by Product schema
 */
export const routes = [
  // ─── Homepage ────────────────────────────────────────────────────────────
  {
    path: '/',
    title: 'Ceylon Cinnamon & Spice Wholesale | Averon Supplies',
    description:
      'Wholesale importer of single-origin Ceylon cinnamon and Sri Lankan spices, sourced directly from our own estates. Bulk supply, samples and specs available.',
    h1: 'Ceylon Cinnamon & Sri Lankan Spices Wholesale',
    intro: [
      'Averon Supplies Ltd is a specialist importer and wholesale distributor of authentic, single-origin Ceylon cinnamon and high-quality Sri Lankan spices. Sourced from our own estate gardens, our products deliver unmatched purity, rich essential oils, and absolute traceability from source to your delivery destination.',
      'We supply food manufacturers, wholesalers, organic grocers and commercial packagers across the UK and Europe. Our strictly managed supply chain ensures consistent wholesale quality and unadulterated botanical varieties.',
    ],
    sections: [
      {
        h2: 'Our Wholesale Pure Spice Range',
        p: 'Browse our collection of bulk spices sourced directly from Sri Lanka\u2019s optimal micro-climate regions, from hand-peeled true cinnamon quills to high-piperine black peppercorns and oil-rich vanilla pods.',
      },
      {
        h2: 'Wholesale Integrity and Certifications',
        p: 'We focus on transparency and quality control. Our partner processing facilities use rigorous batch-control mapping to guarantee safety standards across the supply chain, with full product specifications available on request.',
      },
    ],
    priority: '1.0',
  },

  // ─── Products ────────────────────────────────────────────────────────────
  {
    path: '/products',
    title: "{activeCategory.title} | Averon Supplies",
    description:
      "wholesale supply of single-origin Ceylon spices. Bulk container pricing on Cinnamon, Black Pepper, Cardamom, and Vanilla.",
    h1: 'Wholesale Sri Lankan Spice Range',
    breadcrumb: 'Products',
    intro: [
      'Every spice we supply is single-origin and traceable to the estate and processing batch it came from. We deal in bulk quantities for food manufacturers, repackers, blenders and organic retailers across the UK and Europe.',
      'Select a product below for full specifications, grading options, moisture and volatile oil parameters, and available pack formats.',
    ],
    sections: [
      {
        h2: 'Available in Bulk',
        p: 'Ceylon cinnamon quills and powder, sun-dried black peppercorns, green cardamom pods, whole cloves, nutmeg and mace, and Bourbon-type vanilla beans. Sample packs are available for all lines before committing to a container or pallet order.',
      },
    ],
  },
  {
    path: '/products/ceylon-cinnamon',
    type: 'product',
    title: "Ceylon Cinnamon Wholesale | Averon Supplies Ltd",
    description:
      "Ceylon Cinnamon, sourced from our own estates in Sri Lanka, capturing the rich aroma, delicate flavor, and absolute purity of true cinnamon.",
    h1: 'Wholesale Ceylon Cinnamon (True Cinnamon)',
    breadcrumb: 'Ceylon Cinnamon',
    category: 'Spices > Cinnamon',
    intro: [
      'Hand-peeled, multi-layered sweet quills of Cinnamomum verum containing ultra-low coumarin levels compared to common Cassia. Harvested and rolled by hand on our own estates, then graded and packed under controlled conditions.',
      'Available across the full grading spectrum from Alba through Continental and Mexican to Hamburg grades, plus ground powder and cut-and-sifted formats for manufacturing.',
    ],
    sections: [
      {
        h2: 'Specification & Grading',
        p: 'Quill length, diameter and colour vary by grade. We supply typical volatile oil content, moisture, ash and coumarin figures per batch, alongside a certificate of analysis for every consignment.',
      },
      {
        h2: 'Why True Ceylon Cinnamon',
        p: 'Cassia carries coumarin at levels that can constrain daily intake in finished products. Ceylon cinnamon\u2019s trace coumarin content makes it the appropriate choice for supplements, infant products and high-inclusion applications.',
      },
    ],
    priority: '0.9',
  },
  {
    path: '/products/black-pepper',
    type: 'product',
    title: "Wholesale Black Pepper Bulk Supply | Averon Supplies",
    description:
      "Direct estate-to-business wholesale supply of single-origin Black Pepper. High-piperine whole peppercorns and variable mesh grinds for food manufacturers.",
    h1: 'Wholesale Black Pepper (Whole Peppercorns)',
    breadcrumb: 'Black Pepper',
    category: 'Spices > Pepper',
    intro: [
      'High-piperine, sun-dried whole peppercorns tailored for commercial milling and high-heat culinary blending. Sri Lankan pepper is prized for its pungency and aromatic depth relative to bulk commodity origins.',
      'Supplied graded by bulk density with piperine and volatile oil figures per batch.',
    ],
    sections: [
      {
        h2: 'Specification',
        p: 'Whole berries, cleaned and machine-sorted, with declared bulk density, moisture, light berry percentage and extraneous matter limits. Steam-sterilised options available on request.',
      },
    ],
  },
  {
    path: '/products/green-cardamom',
    type: 'product',
    title: "Wholesale Green Cardamom Bulk Supply | Averon Supplies",
    description:
      "Direct estate-to-business wholesale supply of green cardamom pods. Bulk container-load sourcing for industrial food processors, spice millers, and packers.",
    h1: 'Wholesale Green Cardamom Pods',
    breadcrumb: 'Green Cardamom',
    category: 'Spices > Cardamom',
    intro: [
      'Bold, highly aromatic green pods harvested and cured to preserve essential volatile oils. Grown in Sri Lanka\u2019s cooler highland micro-climates, which produce the intense sweet-eucalyptic profile cardamom is valued for.',
      'Graded by pod size and colour retention, with volatile oil content declared per batch.',
    ],
    sections: [
      {
        h2: 'Handling & Storage',
        p: 'Cardamom loses aroma rapidly once ground. We supply whole pods in barrier packaging to protect volatile oil content through storage and transit, with seed and ground formats available to order.',
      },
    ],
  },
  {
    path: '/products/cloves',
    type: 'product',
    title: "Wholesale Cloves Bulk Supply | Averon Supplies",
    description:
      "Direct estate-to-business wholesale supply of Ceylon Cloves. High eugenol whole hand-picked (HPS) and commercial grades for industrial food manufacturers.",
    h1: 'Wholesale Whole Cloves',
    breadcrumb: 'Whole Cloves',
    category: 'Spices > Cloves',
    intro: [
      'Hand-selected whole floral buds rich in eugenol, suited to wholesale grading, culinary processing and oil extraction. Sun-dried and cleaned to remove stems and headless buds.',
      'Available whole or ground, with eugenol and volatile oil content declared per consignment.',
    ],
    sections: [
      {
        h2: 'Specification',
        p: 'Declared headless bud percentage, stem content, moisture and volatile oil. Cloves destined for extraction are graded separately from culinary lots.',
      },
    ],
  },
  {
    path: '/products/nutmeg',
    type: 'product',
    title: "Wholesale Nutmeg Bulk Supply | Averon Supplies",
    description:
      "Direct estate-to-business wholesale supply of Ceylon Nutmeg. High volatile oil whole nutmeg, sound unwrinkled, and ground grades for food manufacturers.",
    h1: 'Wholesale Nutmeg & Mace',
    breadcrumb: 'Nutmeg & Mace',
    category: 'Spices > Nutmeg',
    intro: [
      'High-grade whole kernels wrapped in vibrant, lacy mace bands. Sri Lankan nutmeg is harvested at full maturity and slow-dried to protect the kernel and the surrounding aril.',
      'Nutmeg is graded as sound, shrivelled or broken; mace is graded by colour. We supply both separately to specification.',
    ],
    sections: [
      {
        h2: 'Quality Parameters',
        p: 'Sound whole kernels sorted by count per kilogram, with moisture and defect limits declared. Aflatoxin testing is available and routinely carried out on lots destined for the EU and UK.',
      },
    ],
  },
  {
    path: '/products/vanilla',
    type: 'product',
    title: "Wholesale Vanilla Pods Bulk Supply | Averon Supplies",
    description:
      "Direct estate-to-business wholesale supply of Vanilla pods. High vanillin content Gourmet Grade A and Extract Grade B for commercial food manufacturers.",
    h1: 'Wholesale Ceylon Vanilla Pods',
    breadcrumb: 'Vanilla Pods',
    category: 'Spices > Vanilla',
    intro: [
      'Plump, oil-rich Bourbon-type vanilla beans cured carefully over several months for intense vanillin yields and a supple, non-brittle pod.',
      'Graded by length, moisture and appearance, with gourmet and extraction grades supplied separately.',
    ],
    sections: [
      {
        h2: 'Grades',
        p: 'Gourmet grade beans are supplied at higher moisture for direct culinary use; extraction grade beans are drier and priced on vanillin content. Both are available in vacuum-sealed bulk packs.',
      },
    ],
  },

  // ─── Insights / Blog ─────────────────────────────────────────────────────
  {
    path: '/insights',
    title: "{activeArticle.title} | Averon Supplies Insights",
    description:
      "Explore expert guides, grading standards, health benefits, and sourcing insights for authentic single-origin Ceylon spices directly from Sri Lanka.",
    h1: 'Insights: Ceylon Cinnamon & Spice Sourcing',
    breadcrumb: 'Insights',
    intro: [
      'Practical, technical writing on Ceylon cinnamon and Sri Lankan spice sourcing, aimed at buyers, product developers and manufacturers who need to understand what they are specifying.',
      'Topics cover grading systems, coumarin and safety limits, laboratory testing, origin and heritage, and how to distinguish true cinnamon from Cassia in a supply chain.',
    ],
  },
  {
    path: '/insights/ceylon-spice-heritage',
    type: 'article',
    datePublished: '2026-07-24',
    title: "The Master Guide to Authentic Ceylon Spice | Averon Supplies",
    description:
      "Explore the rich history, exceptional terroir, and profound health benefits of single-origin Sri Lankan ceylon spice, from true cinnamon to hand-harvested cardamoms and cloves.",
    h1: 'The Heritage of Ceylon Spices',
    breadcrumb: 'Ceylon Spice Heritage',
    intro: [
      'Sri Lanka\u2019s spice trade predates European contact by centuries, and the island\u2019s reputation for cinnamon was established long before it was formalised into an estate system.',
      'This article traces that history and explains why the growing regions and peeling traditions established generations ago still determine quality in the modern wholesale market.',
    ],
  },
  {
    path: '/insights/ceylon-cinnamon-benefits',
    type: 'article',
    datePublished: '2026-07-29',
    title: "Unlock Ceylon Cinnamon Benefits for Health | Averon Supplies",
    description:
      "Discover the myriad ceylon cinnamon benefits, from supporting heart health to boosting immunity. Learn how 'true cinnamon' enhances wellness and cuisine.",
    h1: 'Health Benefits of Ceylon Cinnamon',
    breadcrumb: 'Health Benefits',
    intro: [
      'Ceylon cinnamon is studied most often for its effects on blood glucose regulation, antioxidant activity and inflammatory markers. The evidence base is promising in places and thin in others.',
      'This guide separates what has reasonable support from what is frequently overstated, and explains why the coumarin distinction between Ceylon and Cassia matters most for anyone consuming cinnamon daily.',
    ],
    sections: [
      {
        h2: 'Why the Species Matters',
        p: 'Much of the popular research attributed to "cinnamon" was conducted on Cassia. Because Cassia carries substantially higher coumarin, the practical dosing conclusions differ significantly between the two species.',
      },
    ],
    priority: '0.8',
  },
  {
    path: '/insights/ceylon-cinnamon-capsules',
    type: 'article',
    datePublished: '2026-07-26',
    title: "Best Ceylon Cinnamon Capsules: A Buyer's Guide | Averon",
    description:
      "Discover the benefits of Ceylon cinnamon capsules for enhancing metabolic health and reducing inflammation. Choose the best organic supplements for safe, effective wellness support.",
    h1: 'Ceylon Cinnamon Capsules: What to Look For',
    breadcrumb: 'Cinnamon Capsules',
    intro: [
      'Supplement labels frequently say "cinnamon" without naming a species, and a significant proportion of products sold as Ceylon cinnamon are wholly or partly Cassia.',
      'This article sets out what a credible capsule label should declare, how manufacturers can verify species in incoming raw material, and which claims are not supportable.',
    ],
  },
  {
    path: '/insights/organic-ceylon-cinnamon',
    type: 'article',
    datePublished: '2026-07-28',
    title: "Organic Ceylon Cinnamon: Benefits & Uses | Averon",
    description:
      "Discover the incredible health benefits of organic Ceylon cinnamon, known for its sweet flavor and low coumarin levels. Enhance your recipes and well-being with this versatile spice.",
    h1: 'The Benefits of Organic Ceylon Cinnamon',
    breadcrumb: 'Organic Ceylon Cinnamon',
    intro: [
      'Organic certification for cinnamon covers cultivation and handling practice, chain of custody and processing facility controls — but it is not a proxy for grade, purity or coumarin content.',
      'This article explains which standards apply to UK and EU importers, what documentation should accompany a certified consignment, and how to verify a claim rather than accept it.',
    ],
  },
  {
    path: '/insights/ceylon-cinnamon-dosage-guide',
    type: 'article',
    datePublished: '2026-07-27',
    title: "Ceylon Cinnamon Capsule Dosage Guide | Averon Supplies",
    description:
      "Discover the recommended dosage of Ceylon cinnamon capsules to maximize health benefits safely. Learn about its benefits, dosage guidelines, and potential side effects.",
    h1: 'Ceylon Cinnamon Capsule Dosage Guide',
    breadcrumb: 'Dosage Guide',
    intro: [
      'Safe daily quantities of cinnamon are governed largely by coumarin intake, and the tolerable daily intake established by EFSA is the reference point most formulators work from.',
      'Because Ceylon cinnamon contains only trace coumarin, the practical ceiling on daily consumption is far higher than for Cassia — this guide shows the arithmetic behind that difference.',
    ],
    sections: [
      {
        h2: 'For Manufacturers',
        p: 'Inclusion rates in finished products should be calculated against the coumarin figure on the batch certificate of analysis rather than a generic species average, particularly for products intended for daily consumption.',
      },
    ],
    priority: '0.8',
  },
  {
    path: '/insights/alba-grade-cinnamon',
    type: 'article',
    datePublished: '2026-07-26',
    title: "What is Alba Grade Cinnamon? | Averon Supplies",
    description:
      "Alba is the finest grade of Ceylon cinnamon with a diameter of 6mm or less. Learn what the grade means, the strict diameter standard, and why it commands a premium.",
    h1: 'Alba Grade Cinnamon Explained',
    breadcrumb: 'Alba Grade',
    intro: [
      'Alba sits at the top of the Ceylon cinnamon grading system, defined primarily by quill diameter, with the thinnest and most delicate quills commanding the highest price.',
      'This article explains the Alba specification, how it relates to Continental, Mexican and Hamburg grades, and the applications where the premium is and is not justified.',
    ],
  },
  {
    path: '/insights/ceylon-cinnamon-vs-cassia',
    type: 'article',
    datePublished: '2026-07-25',
    title: "Ceylon Cinnamon vs Cassia: Key Differences | Averon",
    description:
      "Discover the differences in ceylon cinnamon vs cassia for flavor and health. Compare true cinnamon vs cassia, learn about cinnamomum verum, and choose the best type.",
    h1: 'Ceylon Cinnamon vs Cassia: Key Differences',
    breadcrumb: 'Ceylon vs Cassia',
    intro: [
      'Ceylon cinnamon (Cinnamomum verum) and Cassia (chiefly Cinnamomum cassia and C. burmannii) are sold interchangeably as "cinnamon" in most markets, despite substantial differences in composition and safe intake.',
      'This comparison covers appearance, structure, flavour, coumarin content and price, and explains how to distinguish the two in whole quill form and after grinding.',
    ],
    sections: [
      {
        h2: 'The Practical Test',
        p: 'Whole quills are straightforward to tell apart: true cinnamon forms multiple thin layers rolled together and crumbles easily, while Cassia forms a thick single curl that is hard and woody. Ground material requires laboratory verification.',
      },
    ],
    priority: '0.8',
  },
  {
    path: '/insights/coumarin-in-cinnamon',
    type: 'article',
    datePublished: '2026-07-24',
    title: "What is Coumarin and Why Does It Matter? | Averon Supplies",
    description:
      "Coumarin is a naturally occurring compound in cinnamon. Cassia contains up to 12,000mg/kg while Ceylon contains almost none. Learn what this means for food safety.",
    h1: 'Coumarin in Cinnamon: Levels & Limits',
    breadcrumb: 'Coumarin Content',
    intro: [
      'Coumarin is a naturally occurring compound found at high levels in Cassia and only in trace amounts in true Ceylon cinnamon. It is the single most important compositional difference between the two.',
      'This article covers typical concentration ranges by species, the tolerable daily intake set by EFSA, and how those figures translate into inclusion limits in finished products.',
    ],
    priority: '0.8',
  },
  {
    path: '/insights/ceylon-cinnamon-testing',
    type: 'article',
    datePublished: '2026-07-20',
    title: "Lead and Pesticide Testing in Cinnamon | Averon Supplies",
    description:
      "Independent testing has found elevated lead and pesticide residues in commercially available cinnamon. Learn what a COA should cover and what to ask your supplier.",
    h1: 'Lead & Pesticide Testing in Ceylon Cinnamon',
    breadcrumb: 'Lead & Pesticide Testing',
    intro: [
      'Heavy metal and pesticide residue contamination is the most consequential safety risk in the spice trade, and cinnamon is not exempt from it.',
      'This article covers how lead and pesticide screening is carried out, the residue limits that apply to material entering the UK and EU, and what a credible certificate of analysis should show.',
    ],
  },
  {
    path: '/insights/ceylon-cinnamon-grading',
    type: 'article',
    datePublished: '2026-07-20',
    title: "Ceylon Cinnamon Grading: Alba to C4 | Averon Supplies",
    description:
      "Complete guide to Ceylon cinnamon grading. Covers all grades from Alba to C4, diameter standards, and which grade suits your application.",
    h1: 'The Ceylon Cinnamon Grading System',
    breadcrumb: 'Grading System',
    intro: [
      'Ceylon cinnamon grading is based principally on quill diameter, appearance and quill quality, producing the familiar Alba, Continental, Mexican and Hamburg categories with numbered sub-grades beneath them.',
      'This guide sets out each grade with its specification, explains the C5, C4, M5 and H1 notation, and covers how grade relates to flavour, price and end application.',
    ],
    priority: '0.8',
  },
  {
    path: '/insights/ceylon-cinnamon-origin',
    type: 'article',
    datePublished: '2026-07-18',
    title: "Why Ceylon Cinnamon Only Grows in Sri Lanka | Averon",
    description:
      "Discover the true cinnamon origin. True cinnamon (Cinnamomum verum) is native to Sri Lanka. Learn the history and climate that make it impossible to replicate.",
    h1: 'The Origin of Ceylon Cinnamon',
    breadcrumb: 'Why Ceylon Cinnamon',
    intro: [
      'True Ceylon cinnamon is concentrated in the south-western coastal belt of Sri Lanka, where sandy soils and a specific rainfall pattern produce the thin, sweet bark the species is known for.',
      'This article covers the growing regions, the conditions that define them, and why cinnamon grown outside this belt behaves differently even when it is the same species.',
    ],
  },

  {
    path: '/insights/ceylon-cinnamon-usage',
    type: 'article',
    datePublished: '2026-07-14',
    title: "How to Use Ceylon Cinnamon | Averon Supplies",
    description:
      "Discover the many benefits of cinnamon, from blood sugar balance to skincare. Learn what is good for cinnamon and how to incorporate it safely into your routine.",
    h1: 'How to Use Ceylon Cinnamon',
    breadcrumb: 'Usage',
    intro: [
      'Ceylon cinnamon is milder and sweeter than Cassia, with a more delicate citrus-floral character that behaves differently in heat and in cold preparations.',
      'This guide covers practical use in cooking, baking and beverages, how to adjust quantities when substituting for Cassia, and how to store quills and ground cinnamon to protect their volatile oils.',
    ],
  },

  // ─── Informational ───────────────────────────────────────────────────────
  {
    path: '/quality',
    title: "Quality Assurance & Food Safety | Averon Supplies",
    description:
      "Our rigorous spice quality control protocols ensure food-grade compliance. Access Certificates of Analysis (CoA), laboratory testing, and microbial purity data.",
    h1: 'Quality Control & Assurance',
    breadcrumb: 'Quality',
    intro: [
      'Every consignment we ship is tested and documented at batch level. Certificates of analysis cover moisture, ash, volatile oil, coumarin where relevant, and microbiological parameters.',
      'We work to the specification the customer requires rather than a single house standard, and we will commission independent third-party verification on request.',
    ],
  },
  {
    path: '/supply-chain',
    title: "Ethical Spice Supply Chain & Sourcing | Averon Supplies",
    description:
      "Explore Averon Supplies Ltd's vertically integrated supply chain. From estates in Sri Lanka to international freight, we provide transparent, ethical B2B spice procurement.",
    h1: 'Supply Chain & Traceability',
    breadcrumb: 'Supply Chain',
    intro: [
      'Our supply chain runs from our own estate gardens through partner processing facilities to UK and European delivery, with batch identity preserved at every stage.',
      'That means we can trace any pallet back to a harvest window, a peeling batch and a processing lot, which matters when a customer needs to answer a question about a specific consignment.',
    ],
  },
  {
    path: '/sourcing-regions',
    title: "Sri Lankan Spice Sourcing Regions | Averon Supplies",
    description:
      "Explore Averon Supplies Ltd's single-origin Sri Lankan sourcing networks. Learn how maritime lowlands, sub-mountainous ridges, and wet zones create volatile oil profiles.",
    h1: 'Our Sri Lankan Sourcing Regions',
    breadcrumb: 'Sourcing Regions',
    intro: [
      'Different spices come from different parts of Sri Lanka, and the differences are not marginal. Cinnamon quality is tied to the south-western coastal belt; cardamom to cooler highland elevations.',
      'This page sets out the regions we source from, the conditions in each, and how micro-climate shapes the profile of the material we ship.',
    ],
  },
  {
    path: '/processing',
    title: "Spice Processing & Milling Standards | Averon Supplies",
    description:
      "Discover Averon Supplies Ltd's industrial processing architecture. From strict optical sorting and controlled dehydration to vacuum triple-shield packaging under critical control metrics.",
    h1: 'Processing & Handling',
    breadcrumb: 'Processing',
    intro: [
      'Cinnamon peeling remains a hand skill, and the quality of the finished quill depends on it. Beyond peeling, our processing covers drying, cleaning, sorting, grading and barrier packing.',
      'Each step is controlled to protect volatile oil content and prevent contamination, with steam sterilisation available where a customer specification calls for it.',
    ],
  },
  {
    path: '/certifications',
    title: "Spice Import Compliance & HACCP | Averon Supplies",
    description:
      "Review Averon Supplies Ltd's statutory compliance metrics. Verified UK Food Business Operator (FBO), strict FSA guidelines, fully-documented HACCP systems, and 100% batch traceability.",
    h1: 'Certifications & Compliance',
    breadcrumb: 'Certifications',
    intro: [
      'We hold and maintain the documentation UK and EU buyers need for wholesale spice import, covering food safety management, organic chain of custody where applicable, and consignment-level analysis.',
      'Certificates and specification sheets are available on request for any product line before you order.',
    ],
  },
  {
    path: '/about-us',
    title: "About Averon Supplies | Direct Wholesale Spice Importers",
    description:
      "Discover the story behind Averon Supplies. We bridge the gap between single-origin spice estates and global food manufacturing with transparency and integrity.",
    h1: 'About Averon Supplies Ltd',
    breadcrumb: 'About Us',
    intro: [
      'Averon Supplies Ltd is a UK-registered importer and wholesale distributor working directly with our own estate gardens in Sri Lanka, without intermediary traders between grower and buyer.',
      'That structure is why we can offer batch-level traceability and consistent grading rather than blended commodity material of uncertain origin.',
    ],
  },
  {
    path: '/contact-us',
    title: "Get in Touch | Averon Supplies",
    description:
      "Contact Averon Supplies for wholesale Ceylon spice inquiries, custom container pricing, and sample requests.",
    h1: 'Contact Our Wholesale Team',
    breadcrumb: 'Contact Us',
    intro: [
      'Get in touch for bulk pricing, product specifications, certificates of analysis or samples. We respond to trade enquiries within one working day.',
      'Telephone +44 7344 469729 or email info@averonsupplies.co.uk. Our office hours are Monday to Friday, 09:00 to 17:00.',
    ],
  },
  {
    path: '/sale',
    title: 'Buy Ceylon Cinnamon Online | Averon Supplies',
    description:
      'Buy authentic Ceylon cinnamon online, direct from our Sri Lankan estates. Smaller quantities for retail customers alongside our wholesale supply.',
    h1: 'Buy Ceylon Cinnamon Online',
    breadcrumb: 'Shop',
    intro: [
      'Our online shop offers the same estate-sourced Ceylon cinnamon we supply to trade customers, in quantities suited to individual buyers and small businesses.',
      'Every order comes from the same graded, tested batches as our wholesale consignments — there is no separate retail-grade material.',
    ],
    priority: '0.9',
  },
  {
    path: '/terms-of-business',
    title: "Terms & Conditions of Sale | Averon Supplies",
    description:
      "Review the official B2B Terms and Conditions of Sale for Averon Supplies Ltd. Comprehensive guidelines covering price fluctuations, bulk tolerances, retention of title, and international jurisdiction.",
    h1: 'Terms of Business',
    breadcrumb: 'Terms of Business',
    intro: [
      'These terms govern orders placed with Averon Supplies Ltd, covering pricing, payment terms, delivery, inspection and returns.',
      'Wholesale consignments are subject to separate contract terms agreed at the point of order.',
    ],
    priority: '0.3',
  },
  {
    // Internal search results. Deliberately noindex: Google treats indexed
    // site-search pages as thin content and can penalise for them.
    path: '/search',
    noindex: true,
    title: 'Search | Averon Supplies',
    description:
      'Search Averon Supplies for Ceylon cinnamon and Sri Lankan spice products, insight articles and sourcing information.',
    h1: 'Search',
    breadcrumb: 'Search',
    intro: ['Search our product range and insight articles.'],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Averon Supplies',
    description:
      'How Averon Supplies Ltd collects, uses and protects personal data, which cookies we set, and how to exercise your rights under UK GDPR.',
    h1: 'Privacy Policy',
    breadcrumb: 'Privacy Policy',
    intro: [
      'This policy explains what personal data Averon Supplies Ltd collects through this website, why we collect it, who we share it with, and the rights you have over it.',
      'It also lists the cookies we set and explains how to change your cookie choice at any time.',
    ],
    priority: '0.3',
  },
];

// Apply the placeholder date to every article that hasn't had one set manually.
for (const r of routes) {
  if (r.type === 'article') {
    r.datePublished = r.datePublished || PLACEHOLDER_DATE;
    r.dateModified = r.dateModified || r.datePublished;
  }
}

/** Look up a route by pathname. Tolerates a trailing slash. */
export function getRoute(pathname) {
  const clean =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return routes.find((r) => r.path === clean) || null;
}

export const absoluteUrl = (p) => (p === '/' ? `${SITE.url}/` : `${SITE.url}${p}`);