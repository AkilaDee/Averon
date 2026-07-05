import React from 'react';
import { Link } from 'react-router-dom';
import '../Articles.css';

const WhatIsAlbaGrade = () => {
  return (
    <div className="article-page">

      {/* HERO */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link to="/insights" className="article-back">← Back to Insights</Link>
          <span className="article-category-tag">Grading & Quality</span>
          <h1 className="article-title">What is Alba Grade Cinnamon?</h1>
          <p className="article-subtitle">
            The rarest grade of Ceylon cinnamon, and the one most buyers have never heard of.
          </p>
          <div className="article-meta">
            <span>By Averon Supplies</span>
            <span className="article-meta-dot">·</span>
            <span>5 min read</span>
            <span className="article-meta-dot">·</span>
            <span>Grading & Quality</span>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div className="article-body-outer">
        <article className="article-body">

          <p className="article-lead">
            If you have ever purchased Ceylon cinnamon and noticed the term "Alba" on a specification
            sheet or catalogue, you may have wondered what it actually means. It is not a marketing
            label. It is a precise grading classification, and it represents the finest quill that
            the Ceylon cinnamon trade produces.
          </p>

          <h2>What Does "Alba" Mean?</h2>
          <p>
            Alba is the highest grade in the Ceylon cinnamon grading system, classified by quill
            diameter. The name comes from the Latin word for white, a historical reference to the
            pale, delicate appearance of the finest quills when freshly peeled and rolled. In
            commercial terms, Alba is defined as a cinnamon quill with an external diameter of
            6mm - 7mm or less.
          </p>
          <p>
            To put that in perspective: an Alba quill is roughly the width of a standard pencil.
            It is thin, tightly rolled, and composed of multiple fine layers of inner bark, the
            hallmark of genuine, high-grade Cinnamomum verum.
          </p>

          <h2>The Ceylon Cinnamon Grading System</h2>
          <p>
            Ceylon cinnamon is graded primarily by the external diameter of the quill. The full
            grading hierarchy, from finest to broadest, is as follows:
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Max Diameter</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Alba</strong></td>
                  <td>≤ 6mm</td>
                  <td>Premium culinary, gifting, high-end retail</td>
                </tr>
                <tr>
                  <td>C5 Extra Special</td>
                  <td>≤ 8mm</td>
                  <td>Fine food manufacturing, specialty retail</td>
                </tr>
                <tr>
                  <td>C5 Special</td>
                  <td>≤ 10mm</td>
                  <td>Food service, wholesale culinary</td>
                </tr>
                <tr>
                  <td>C5</td>
                  <td>≤ 12mm</td>
                  <td>General food manufacturing</td>
                </tr>
                <tr>
                  <td>C4</td>
                  <td>≤ 16mm</td>
                  <td>Extraction, grinding, industrial use</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The grade designation is not arbitrary, it directly reflects the maturity of the bark,
            the skill of the peeler, and the consistency of the rolling process. Alba quills require
            significantly more labour to produce per kilogram than C4, which is part of why they
            command a meaningful price premium.
          </p>

          <h2>Why Does Diameter Matter?</h2>
          <p>
            Thinner quills come from younger, more carefully managed shoots. The inner bark of a
            thin quill is more aromatic, more complex in flavour profile, and lower in coumarin
            relative to the thicker grades. The essential oil concentration, particularly
            cinnamaldehyde, which gives Ceylon its characteristic warm sweetness is higher per
            gram in finer grades.
          </p>
          <p>
            For a food manufacturer or culinary professional, this translates directly into a
            stronger flavour yield per gram, which offsets part of the price premium in real
            production terms.
          </p>

          <h2>The Problem With Grade Claims</h2>
          <p>
            The grading system is only as reliable as the supplier applying it. A known and
            widespread practice in the cinnamon trade is to pack the finest-looking quills on the
            outside of a bundle visible to the buyer, while concealing lower-grade, broken, or
            undersized sticks in the interior. A bundle can be labelled "Alba" while containing
            a significant proportion of material that would not meet that specification on
            individual inspection.
          </p>
          <p>
            At Averon Supplies, because we manage production directly from our estates in Sri Lanka,
            grading is applied uniformly throughout every batch, not just to the visible exterior.
            We apply a strict ≤6mm diameter standard to every quill in an Alba-graded shipment,
            and our Certificate of Analysis documents this per batch.
          </p>

          <h2>Is Alba Right for Your Application?</h2>
          <p>
            Alba is the appropriate grade when the cinnamon itself is visible to the end consumer 
            in premium retail packaging, in gifting products, in high-end culinary applications
            where presentation matters alongside flavour. For extraction, grinding into powder, or
            high-volume manufacturing where the quill form is not the end product, C5 or C4
            provides equivalent aromatic quality at a lower cost per kilogram.
          </p>
          <p>
            If you are unsure which grade suits your production requirements, we are happy to
            send sample packs across multiple grades so your team can evaluate them side by side.
          </p>

          <div className="article-cta-box">
            <h3>Request Alba Grade Samples</h3>
            <p>
              We supply Alba and C5 Extra Special quills direct from our Sri Lanka estates,
              with full COA documentation and grade verification on every batch.
            </p>
            <Link to="/contact-us" className="article-cta-btn">Request a Sample Pack</Link>
          </div>

        </article>

        {/* RELATED ARTICLES */}
        <div className="article-related">
          <h3 className="article-related-title">Related Insights</h3>
          <div className="article-related-links">
            <Link to="/insights/cinnamon-grading" className="article-related-link">
              Ceylon Cinnamon Grading Explained →
            </Link>
            <Link to="/insights/cinnamon-vs-cassia" className="article-related-link">
              How to Identify Real Ceylon Cinnamon vs Cassia →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatIsAlbaGrade;