import React from 'react';
import { Link } from 'react-router-dom';
import './Insights.css';

const articles = [
  {
    slug: 'alba-grade-cinnamon',
    title: 'What is Alba Grade Cinnamon?',
    description:
      'Alba is the rarest and finest grade of Ceylon cinnamon, yet most buyers have never heard of it. Learn what the grade means, the strict diameter standard it must meet, and why it commands a premium that C5 and C4 simply cannot match.',
    category: 'Grading & Quality',
    readTime: '5 min read',
    image: null,
  },
  {
    slug: 'ceylon-cinnamon-vs-cassia',
    title: 'How to Identify Real Ceylon Cinnamon vs Cassia',
    description:
      'Most cinnamon sold in the UK is not Ceylon. It is Cassia, a cheaper, harsher substitute. We break down the visual, aromatic, and chemical differences, and show you exactly how to verify what you are buying before it reaches your production line.',
    category: 'Authentication',
    readTime: '7 min read',
    image: null,
  },
  {
    slug: 'coumarin-in-cinnamon',
    title: 'What is Coumarin and Why Does It Matter?',
    description:
      'Coumarin is a naturally occurring compound in cinnamon that becomes a concern at high doses. Ceylon contains almost none. Cassia can contain up to 12,000 mg/kg. We explain what this means for daily use, food manufacturing, and why regulatory bodies across Europe have flagged it.',
    category: 'Food Safety',
    readTime: '6 min read',
    image: null,
  },
  {
    slug: 'ceylon-cinnamon-testing',
    title: 'Lead and Pesticide Testing in Cinnamon. What to Look For',
    description:
      'Independent testing has found elevated lead and pesticide residues in a significant number of commercially available cinnamon products. We explain what Maximum Residue Limits mean, what a Certificate of Analysis should cover, and the questions every buyer should ask their supplier.',
    category: 'Testing & Compliance',
    readTime: '8 min read',
    image: null,
  },
  {
    slug: 'ceylon-cinnamon-grading',
    title: 'Ceylon Cinnamon Grading Explained',
    description:
      'Ceylon cinnamon is graded by quill diameter, consistency, and layering, a system most suppliers do not explain clearly. This guide covers every grade from Alba to C4, what each is best suited for, and why strict adherence to diameter standards matters more than the label alone.',
    category: 'Grading & Quality',
    readTime: '6 min read',
    image: null,
  },
  {
    slug: 'ceylon-cinnamon-origin',
    title: 'Why Ceylon Cinnamon Comes Only From Sri Lanka',
    description:
      'True cinnamon, Cinnamomum verum grows in very few places on earth, and Sri Lanka remains its undisputed home. We trace the history, the geography, and the climate conditions that make authentic Ceylon cinnamon impossible to replicate anywhere else in the world.',
    category: 'Origin & Provenance',
    readTime: '5 min read',
    image: null,
  },
];

const categoryColours = {
  'Grading & Quality': '#926A02',
  'Authentication': '#1E293B',
  'Food Safety': '#5C4008',
  'Testing & Compliance': '#2d5a3d',
  'Origin & Provenance': '#6B4F12',
};

const Insights = () => {
  return (
    <div className="insights-page">

      {/* HERO */}
      <div className="insights-hero">
        <div className="insights-hero-inner">
          <span className="insights-eyebrow">Knowledge Centre</span>
          <h1 className="insights-hero-title">Ceylon Cinnamon Insights</h1>
          <p className="insights-hero-sub">
            Sourced from 15+ years of direct cultivation in Sri Lanka. Practical knowledge
            for buyers, manufacturers, and anyone serious about what goes into their product.
          </p>
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className="insights-grid-outer">
        <div className="insights-grid">
          {articles.map((article, i) => (
            <Link
              to={`/insights/${article.slug}`}
              key={article.slug}
              className="insight-card"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="insight-card-img">
                <div className="insight-card-img-inner">
                  <span className="insight-card-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
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
          <h3 className="insights-cta-title">Sourcing Ceylon cinnamon for your business?</h3>
          <p className="insights-cta-sub">
            Request a sample pack or our wholesale pricing matrix.
          </p>
          <Link to="/contact-us" className="insights-cta-btn">Get in Touch</Link>
        </div>
      </div>

    </div>
  );
};

export default Insights;