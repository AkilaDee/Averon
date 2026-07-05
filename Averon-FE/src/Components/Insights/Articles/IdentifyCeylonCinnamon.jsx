import React from 'react';
import { Link } from 'react-router-dom';
import '../Articles.css';

const IdentifyCeylonCinnamon = () => {
  return (
    <div className="article-page">

      <div className="article-hero">
        <div className="article-hero-inner">
          <Link to="/insights" className="article-back">← Back to Insights</Link>
          <span className="article-category-tag">Authentication</span>
          <h1 className="article-title">How to Identify Real Ceylon Cinnamon vs Cassia</h1>
          <p className="article-subtitle">
            Most cinnamon sold in the UK is not what it claims to be. Here is how to tell the difference.
          </p>
          <div className="article-meta">
            <span>By Averon Supplies</span>
            <span className="article-meta-dot">·</span>
            <span>7 min read</span>
            <span className="article-meta-dot">·</span>
            <span>Authentication</span>
          </div>
        </div>
      </div>

      <div className="article-body-outer">
        <article className="article-body">

          <p className="article-lead">
            Walk into any supermarket in the UK and pick up a jar labelled "cinnamon." The
            overwhelming likelihood is that what you are holding is not Ceylon cinnamon at all. 
            It is Cassia, a related but botanically distinct spice that is cheaper to produce,
            harsher in flavour, and significantly higher in a compound called coumarin that
            raises safety concerns at regular consumption levels.
          </p>

          <h2>Two Different Plants</h2>
          <p>
            True Ceylon cinnamon is Cinnamomum verum, a species native to Sri Lanka and grown
            commercially in very few areas in Sri Lanka. Cassia refers primarily to Cinnamomum cassia
            (Chinese cinnamon), Cinnamomum aromaticum, and Cinnamomum loureiroi (Vietnamese or
            Saigon cinnamon), all of which are related but distinct species.
          </p>
          <p>
            UK food labelling law permits both to be sold as "cinnamon" without further
            qualification, which is how a product labelled simply "ground cinnamon" can legally
            contain Cassia. Only products specifically labelled "Ceylon cinnamon" or
            "Cinnamomum verum" are guaranteed to be the genuine article.
          </p>

          <h2>Visual Differences - Quill Form</h2>
          <p>
            The easiest way to distinguish the two in quill form is the cross-section of the stick:
          </p>
          <p>
            <strong>Ceylon cinnamon</strong> quills are made up of multiple thin, tightly wound
            layers of inner bark. When you cut across the quill, you see a series of fine,
            papery layers nested inside each other, like a scroll. The outer surface is a pale
            tan-brown, smooth, and slightly brittle. The quill itself is fragile, it will crumble
            when pressed with a fingernail rather than resist.
          </p>
          <p>
            <strong>Cassia</strong> sticks are thick-walled, hard, and typically made of a single
            layer of bark that curls into a rough tube. They are darker in colour, a deeper
            reddish-brown and considerably harder. They will not crumble under finger pressure.
            The texture is rough and coarse rather than smooth and layered.
          </p>

          <h2>Colour</h2>
          <p>
            Ceylon cinnamon is distinctly lighter. A warm tan or light brown, sometimes with a
            slight yellowish tone. Cassia is typically a deeper, darker reddish-brown or mahogany.
            In powder form, Ceylon tends to be lighter and more golden-tan; Cassia powder is
            darker and redder.
          </p>

          <h2>Aroma and Flavour</h2>
          <p>
            Ceylon has a more delicate, complex, and slightly sweet aromatic profile. Warm,
            floral, and nuanced, with lower heat and a longer finish. The essential oil
            concentration (cinnamaldehyde) is present but balanced by other aromatic compounds
            that soften it.
          </p>
          <p>
            Cassia, particularly Vietnamese Cassia has a more intense, sharp, and one-dimensional
            flavour. It is the taste most UK consumers grew up associating with "cinnamon" precisely
            because Cassia has dominated mass-market supply for decades. It is not inferior for all
            applications, but it is distinct.
          </p>

          <h2>The Coumarin Difference</h2>
          <p>
            This is where the distinction becomes a food safety matter rather than a taste
            preference. Coumarin is a naturally occurring aromatic compound found in both species,
            but at dramatically different concentrations:
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Coumarin Content (typical)</th>
                  <th>EU/UK Daily Tolerable Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ceylon (C. verum)</strong></td>
                  <td>0.017 g/kg</td>
                  <td>Well within safe limits</td>
                </tr>
                <tr>
                  <td>Cassia (C. cassia)</td>
                  <td>1 - 12 g/kg</td>
                  <td>Can exceed limits at regular consumption</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The European Food Safety Authority (EFSA) has set the Tolerable Daily Intake of
            coumarin at 0.1mg per kg of body weight. For a person consuming cinnamon regularly
            in baked goods, smoothies, supplements, or health products, Cassia can approach
            or exceed this threshold. Ceylon cannot.
          </p>

          <h2>How to Verify at the Point of Purchase</h2>
          <p>
            For retail consumers, the simplest check is the label. Look for "Ceylon cinnamon,"
            "Sri Lanka cinnamon," or the botanical name Cinnamomum verum. If the label says
            only "cinnamon" or "ground cinnamon" with no origin or species specified, assume
            it is Cassia.
          </p>
          <p>
            For food manufacturers and wholesale buyers, a Certificate of Analysis (COA) from an
            accredited laboratory should include species confirmation, coumarin content, and
            country of origin. Any credible Ceylon cinnamon supplier should provide this
            documentation per batch without hesitation.
          </p>
          <p>
            At Averon Supplies, we provide a full COA with every batch, including species
            verification confirming Cinnamomum verum, coumarin content, pesticide residue
            testing, and microbiological results. We are happy to share example documentation
            on request.
          </p>

          <div className="article-cta-box">
            <h3>Verify Before You Buy</h3>
            <p>
              Request a sample of our Ceylon cinnamon with full COA documentation. See and
              taste the difference before making a sourcing decision.
            </p>
            <Link to="/contact-us" className="article-cta-btn">Request a Sample Pack</Link>
          </div>

        </article>

        <div className="article-related">
          <h3 className="article-related-title">Related Insights</h3>
          <div className="article-related-links">
            <Link to="/insights/coumarin-in-cinnamon" className="article-related-link">
              What is Coumarin and Why Does It Matter? →
            </Link>
            <Link to="/insights/cinnamon-grading" className="article-related-link">
              Ceylon Cinnamon Grading Explained →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IdentifyCeylonCinnamon;