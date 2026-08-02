import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../Articles.css';

const WhatIsCoumarin = () => {
  return (
    <div className="article-page">
      <Helmet>
        <title>What is Coumarin and Why Does It Matter? | Averon Supplies</title>
        <meta name="description" content="Coumarin is a naturally occurring compound in cinnamon. Cassia contains up to 12,000mg/kg while Ceylon contains almost none. Learn what this means for food safety." />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/insights/coumarin-in-cinnamon" />
      </Helmet>

      <div className="article-hero">
        <div className="article-hero-inner">
          <Link to="/insights" className="article-back">← Back to Insights</Link>
          <span className="article-category-tag">Food Safety</span>
          <h1 className="article-title">What is Coumarin and Why Does It Matter?</h1>
          <p className="article-subtitle">
            A naturally occurring compound that makes Cassia cinnamon a concern for regular consumers and why Ceylon is the safer choice.
          </p>
          <div className="article-meta">
            <span>By Averon Supplies</span>
            <span className="article-meta-dot">·</span>
            <span>6 min read</span>
            <span className="article-meta-dot">·</span>
            <span>Food Safety</span>
          </div>
        </div>
      </div>

      <div className="article-body-outer">
        <article className="article-body">

          <p className="article-lead">
            Coumarin is not a pesticide or contaminant. It is a naturally occurring aromatic
            compound found in a wide range of plants, including both Ceylon cinnamon and Cassia.
            The critical difference is the concentration at which it occurs in each, and what
            that means for people who consume cinnamon regularly.
          </p>

          <h2>What is Coumarin?</h2>
          <p>
            Coumarin (chemical name 1,2-benzopyrone) is a fragrant organic compound responsible
            for the characteristic sweet, hay-like scent found in many plants, including tonka
            beans, sweet clover, and certain species of cinnamon. In small quantities it is
            harmless and occurs naturally in many foods. At higher doses, particularly with
            regular exposure over time, it has been associated with liver toxicity in
            animal studies and is classified as a possible hepatotoxin in humans.
          </p>
          <p>
            The European Food Safety Authority (EFSA) established a Tolerable Daily Intake (TDI)
            of 0.1mg of coumarin per kilogram of body weight. For an average adult weighing 70kg,
            that is a daily limit of 7mg of coumarin. This limit was set not because coumarin is
            acutely dangerous in small amounts, but because regular consumption above this level
            over an extended period raises a measurable liver health concern.
          </p>

          <h2>Coumarin in Cassia vs Ceylon</h2>
          <p>
            This is where the difference between Cassia and Ceylon cinnamon becomes a food
            safety issue rather than purely a taste or quality distinction.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Cinnamon Type</th>
                  <th>Coumarin (mg/kg)</th>
                  <th>Daily TDI exceeded by?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ceylon (C. verum)</strong></td>
                  <td>~17 mg/kg</td>
                  <td>Not exceeded at typical consumption</td>
                </tr>
                <tr>
                  <td>Chinese Cassia (C. cassia)</td>
                  <td>~2,100 mg/kg</td>
                  <td>Exceeded by approximately 3g/day</td>
                </tr>
                <tr>
                  <td>Vietnamese Cassia (C. loureiroi)</td>
                  <td>~6,900 mg/kg</td>
                  <td>Exceeded by approximately 1g/day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            To put those numbers in context: a single teaspoon of ground Cassia cinnamon weighs
            approximately 2.6 grams. For Vietnamese Cassia, that single teaspoon could contain
            more coumarin than the daily tolerable intake for a 70kg adult - from one use.
          </p>

          <h2>Who Should Be Most Concerned?</h2>
          <p>
            For occasional consumers using cinnamon once or twice a week, the risk from Cassia
            is low. The concern applies primarily to:
          </p>
          <p>
            <strong>Daily users</strong> - people adding cinnamon to oatmeal, smoothies, or
            coffee every day as part of a health routine. This group can accumulate meaningful
            coumarin exposure over time.
          </p>
          <p>
            <strong>Supplement users</strong> - cinnamon capsules and extracts often contain
            concentrated Cassia. A single supplement dose can deliver multiple times the daily
            TDI depending on the product.
          </p>
          <p>
            <strong>Food manufacturers</strong> - products that use cinnamon as a primary
            flavour ingredient at significant quantities (cinnamon rolls, spiced drinks,
            health bars) have a compliance consideration if their target consumer base
            includes daily or high-frequency users. The German Federal Institute for Risk
            Assessment (BfR) specifically recommended that food manufacturers consider
            switching to Ceylon cinnamon in high-cinnamon products for this reason.
          </p>
          <p>
            <strong>Children</strong> - because the TDI is calculated per kilogram of body
            weight, children face a proportionally higher exposure per portion than adults.
          </p>

          <h2>Regulatory Position</h2>
          <p>
            Germany introduced specific guidance recommending the use of Ceylon cinnamon in
            high-cinnamon food products. The EU has coumarin listed as a restricted flavouring
            substance under Regulation (EC) No 1334/2008, with maximum permitted levels in
            specific food categories. In the UK, these levels are maintained under retained
            EU law post-Brexit.
          </p>
          <p>
            Coumarin content is a standard test included in the Certificate of Analysis for
            professionally sourced Ceylon cinnamon. It is one of the clearest, most verifiable
            markers of genuine Cinnamomum verum because genuine Ceylon simply cannot produce
            high coumarin levels. Any COA showing coumarin above 100mg/kg on a claimed Ceylon
            sample warrants serious scrutiny.
          </p>

          <h2>What This Means for Sourcing Decisions</h2>
          <p>
            If you are sourcing cinnamon for a product that will be consumed regularly, or by
            health-conscious consumers who may already be managing their coumarin intake from
            other sources, Ceylon cinnamon is not merely the obvious choice. It is the
            defensible choice from a food safety and compliance standpoint.
          </p>
          <p>
            At Averon Supplies, every batch of Ceylon cinnamon we supply is accompanied by a
            COA that includes coumarin content testing from an accredited laboratory. Our
            results consistently show coumarin levels well within the range expected of genuine
            Cinnamomum verum. We are happy to share documentation on request.
          </p>

          <div className="article-cta-box">
            <h3>Request Documentation</h3>
            <p>
              We provide full COA documentation including coumarin content with every batch.
              Contact us to request example test results or a sample pack.
            </p>
            <Link to="/contact-us" className="article-cta-btn">Get in Touch</Link>
          </div>

        </article>

        <div className="article-related">
          <h3 className="article-related-title">Related Insights</h3>
          <div className="article-related-links">
            <Link to="/insights/ceylon-cinnamon-vs-cassia" className="article-related-link">
              How to Identify Real Ceylon Cinnamon vs Cassia →
            </Link>
            <Link to="/insights/cinnamon-testing" className="article-related-link">
              Lead and Pesticide Testing in Cinnamon - What to Look For →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatIsCoumarin;