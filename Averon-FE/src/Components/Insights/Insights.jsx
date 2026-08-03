import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Insights.css';

import imgAlba from '../../assets/alba-gd.webp';
import imgCassia from '../../assets/cinnamon-vs-cassia.webp';
import imgCoumarin from '../../assets/coumarin.webp';
import imgTesting from '../../assets/lab-test.webp';
import imgGrading from '../../assets/grades.webp';
import imgOrigin from '../../assets/estate.webp';
import imgSuperfood from '../../assets/superfood.webp';
import imgOrganicBenefits from '../../assets/organic-benefits.webp';
import imgUnlockBenefits from '../../assets/cinnamon ground.webp';
import imgCapsuleDosage from '../../assets/dosage.webp'; 
import imgCapsule from '../../assets/capsule.webp'; 
import imgHeritage from '../../assets/about.webp'; 
import imgUsage from '../../assets/quillings.webp'; 

const articles = [
  {
    slug: 'ceylon-spice-heritage',
    title: 'The Master Guide to Authentic Ceylon Spices: Heritage, Health, and Flavour',
    description: 'Explore the rich history, exceptional terroir, and profound health benefits of single-origin Sri Lankan spices, from true cinnamon to hand-harvested cardamoms and cloves.',
    category: 'Origin & Provenance',
    readTime: '9 min read',
    image: imgHeritage,
  },
  {
    slug: 'ceylon-cinnamon-capsules',
    title: 'Best Ceylon Cinnamon Capsules: Safe & Effective Supplement',
    description: 'Discover the benefits of Ceylon cinnamon capsules for enhancing metabolic health and reducing inflammation. Choose the best organic supplements for safe, effective wellness support.',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: imgCapsule,
  },
  {
    slug: 'ceylon-cinnamon-dosage-guide',
    title: 'Ceylon Cinnamon Capsule Dosage Guide: Safe and Effective',
    description: 'Discover the recommended dosage of Ceylon cinnamon capsules to maximize health benefits safely. Learn about its benefits, dosage guidelines, and potential side effects.',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: imgCapsuleDosage,
  },
  {
    slug: 'ceylon-cinnamon-benefits',
    title: 'Top Health Benefits of Ceylon Cinnamon',
    description: 'Discover the myriad ceylon cinnamon benefits, from supporting heart health to boosting immunity. Learn how "true cinnamon" enhances wellness and cuisine.',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: imgUnlockBenefits,
  },
  {
    slug: 'ceylon-cinnamon-superfood',
    title: 'Ceylon Cinnamon Sticks: The Ultimate Superfood Guide',
    description: 'Discover the health benefits of Ceylon cinnamon sticks, the "true cinnamon," renowned for its rich history and ability to manage blood sugar and inflammation. Choose organic Ceylon for maximum wellness.',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: imgSuperfood,
  },
  {
    slug: 'organic-ceylon-cinnamon',
    title: 'Organic Ceylon Cinnamon: Health Benefits & Uses',
    description: 'Discover the incredible health benefits of organic Ceylon cinnamon, known for its sweet flavor and low coumarin levels. Enhance your recipes and well-being with this versatile spice.',
    category: 'Health & Wellness',
    readTime: '6 min read',
    image: imgOrganicBenefits,
  },
  {
    slug: 'alba-grade-cinnamon',
    title: 'What is Alba Grade Cinnamon?',
    description: 'Alba is the rarest and finest grade of Ceylon cinnamon, yet most buyers have never heard of it. Learn what the grade means, the strict diameter standard it must meet, and why it commands a premium that C5 and C4 simply cannot match.',
    category: 'Grading & Quality',
    readTime: '5 min read',
    image: imgAlba,
  },
  {
    slug: 'ceylon-cinnamon-vs-cassia',
    title: 'How to Identify Real Ceylon Cinnamon vs Cassia',
    description: 'Most cinnamon sold in the UK is not Ceylon. It is Cassia, a cheaper, harsher substitute. We break down the visual, aromatic, and chemical differences, and show you exactly how to verify what you are buying before it reaches your production line.',
    category: 'Authentication',
    readTime: '7 min read',
    image: imgCassia,
  },
  {
    slug: 'coumarin-in-cinnamon',
    title: 'What is Coumarin and Why Does It Matter?',
    description: 'Coumarin is a naturally occurring compound in cinnamon that becomes a concern at high doses. Ceylon contains almost none. Cassia can contain up to 12,000 mg/kg. We explain what this means for daily use, food manufacturing, and why regulatory bodies across Europe have flagged it.',
    category: 'Food Safety',
    readTime: '6 min read',
    image: imgCoumarin,
  },
  {
    slug: 'ceylon-cinnamon-usage',
    title: 'Cinnamon Usage: What is Good for Cinnamon?',
    description: 'Discover the many uses of cinnamon, from blood sugar balance to skincare. Learn what is good for cinnamon and how to incorporate it safely into your routine.',
    category: 'Health & Wellness',
    readTime: '7 min read',
    image: imgUsage,
  },
  {
    slug: 'ceylon-cinnamon-testing',
    title: 'Lead and Pesticide Testing in Cinnamon. What to Look For',
    description: 'Independent testing has found elevated lead and pesticide residues in a significant number of commercially available cinnamon products. We explain what Maximum Residue Limits mean, what a Certificate of Analysis should cover, and the questions every buyer should ask their supplier.',
    category: 'Testing & Compliance',
    readTime: '8 min read',
    image: imgTesting,
  },
  {
    slug: 'ceylon-cinnamon-grading',
    title: 'Ceylon Cinnamon Grading Explained',
    description: 'Ceylon cinnamon is graded by quill diameter, consistency, and layering, a system most suppliers do not explain clearly. This guide covers every grade from Alba to C4, what each is best suited for, and why strict adherence to diameter standards matters more than the label alone.',
    category: 'Grading & Quality',
    readTime: '6 min read',
    image: imgGrading,
  },
  {
    slug: 'ceylon-cinnamon-origin',
    title: 'Why Ceylon Cinnamon Comes Only From Sri Lanka',
    description: 'True cinnamon, Cinnamomum verum grows in very few places on earth, and Sri Lanka remains its undisputed home. We trace the history, the geography, and the climate conditions that make authentic Ceylon cinnamon impossible to replicate anywhere else in the world.',
    category: 'Origin & Provenance',
    readTime: '5 min read',
    image: imgOrigin,
  },
];

const categoryColours = {
  'Health & Wellness': '#2d5a3d',
  'Grading & Quality': '#926A02',
  'Authentication': '#1E293B',
  'Food Safety': '#5C4008',
  'Testing & Compliance': '#2d5a3d',
  'Origin & Provenance': '#6B4F12',
};

const Insights = () => {
  // Grab the dynamic slug parameter if your route is configured as /insights/:slug
  const { slug } = useParams();

  // Find if an active article matches the URL slug
  const activeArticle = slug ? articles.find((a) => a.slug === slug) : null;

  return (
    <div className="insights-page">
      <Helmet>
        {activeArticle ? (
          <>
            <title>{activeArticle.title} | Averon Supplies Insights</title>
            <meta name="description" content={activeArticle.description} />
            <link 
              rel="canonical" 
              href={`https://www.averonsupplies.co.uk/insights/${activeArticle.slug}`} 
            />
          </>
        ) : (
          <>
            <title>Ceylon Cinnamon & Spice Insights & Knowledge Centre | Averon Supplies</title>
            <meta 
              name="description" 
              content="Explore expert guides, grading standards, health benefits, and sourcing insights for authentic single-origin Ceylon spices directly from Sri Lanka." 
            />
            <link 
              rel="canonical" 
              href="https://www.averonsupplies.co.uk/insights" 
              hreflang="en-GB"
            />
          </>
        )}
      </Helmet>

      {activeArticle ? (
        /* =========================================================
            INDIVIDUAL ARTICLE VIEW (When a slug is present)
           ========================================================= */
        <div className="single-article-container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: categoryColours[activeArticle.category] || '#926A02', fontWeight: 'bold' }}>
            {activeArticle.category}
          </span>
          <h1 style={{ margin: '15px 0' }}>{activeArticle.title}</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>{activeArticle.readTime}</p>
          
          {activeArticle.image && (
            <img 
              src={activeArticle.image} 
              alt={activeArticle.title} 
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />
          )}

          <div className="article-body">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{activeArticle.description}</p>
            {/* Render full article body layout elements here */}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/insights" className="insights-cta-btn">← Back to Knowledge Centre</Link>
          </div>
        </div>
      ) : (
        /* =========================================================
            MAIN INSIGHTS HUB GRID VIEW (When viewing /insights)
           ========================================================= */
        <>
          {/* HERO */}
          <div className="insights-hero">
            <div className="insights-hero-inner">
              <span className="insights-eyebrow">Knowledge Centre</span>
              <h1 className="insights-hero-title">Ceylon Cinnamon & Spice Insights</h1>
              <p className="insights-hero-sub">
                Sourced from 15+ years of direct cultivation in Sri Lanka. Practical knowledge
                for buyers, manufacturers, and anyone serious about what goes into their product.
              </p>
            </div>
          </div>

          {/* ARTICLE GRID */}
          <div className="insights-grid-outer">
            <div className="insights-grid">
              {articles.map((article) => (
                <Link
                  to={`/insights/${article.slug}`}
                  key={article.slug}
                  className="insight-card"
                >
                  {/* IMAGE */}
                  <div className="insight-card-img">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="insight-card-img-real"
                      />
                    ) : (
                      <div className="insight-card-img-inner">
                        <span className="insight-card-number">??</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="insight-card-body">
                    <div className="insight-card-meta">
                      <span
                        className="insight-category"
                        style={{ color: categoryColours[article.category] || '#926A02' }}
                      >
                        {article.category}
                      </span>
                      <span className="insight-read-time">{article.readTime}</span>
                    </div>
                    <h2 className="insight-card-title">{article.title}</h2>
                    <p className="insight-card-desc">{article.description}</p>
                    <span className="insight-card-cta">
                      Read article <span className="insight-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="insights-bottom-cta">
            <div className="insights-bottom-inner">
              <h3 className="insights-cta-title">Sourcing Ceylon spices for your business?</h3>
              <p className="insights-cta-sub">
                Request a sample pack or our wholesale pricing matrix.
              </p>
              <Link to="/contact-us" className="insights-cta-btn">Get in Touch</Link>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Insights;