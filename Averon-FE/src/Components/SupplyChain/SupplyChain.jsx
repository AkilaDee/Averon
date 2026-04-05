import React from 'react';
import './SupplyChain.css'; 
import plants from '../../assets/cinnamon plants.jpg';
// IMPORT your hero background image here
import heroBg from '../../assets/hero-supply.jpg'; 

const SupplyChain = () => {
  return (
    <div className="supply-chain-page">
      {/* Updated Hero Section with Inline Style for the Background */}
      <section 
        className="sc-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${heroBg})` 
        }}
      >
        <div className="averon-container">
          <span className="badge">Our Heritage</span>
          <h1 className="title-large">The Averon Story: From Our Roots to Your Table</h1>
          <p className="description">
            Expertly Graded. Sustainably Harvested. Delivered at Peak Freshness.
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="averon-section section-split">
        <div className="averon-container">
          <div className="averon-content">
            <h2 className="title-medium">The Heart of the Southern Province</h2>
            <p>
              Averon Supplies is not just an importer; we are the UK branch of a family legacy. 
              Our story begins in the mineral-rich soils of Sri Lanka’s Southern Province, 
              at our family estate in <strong>Matara District</strong>.
            </p>
            <p>
              While the world’s spice trade often relies on "commodity blending," mixing bark 
              from thousands of anonymous farms, we do the opposite. We offer 
              <strong> Single-Estate Traceability</strong>.
            </p>
          </div>
          <div className="averon-visual">
            <img src={plants} alt="Averon cinnamon plants" />
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="process-section">
        <div className="averon-container">
            <h2 className="title-medium text-center">The Art of the "Cinnamon Cigar"</h2>
            <p className="text-center">
            Harvested during the monsoon months when the bark is most supple and essential oils are at their peak.
            </p>

            <div className="process-grid">
            {/* Step 1 */}
            <div className="process-card">
                <div className="process-image">
                <img src="/assets/harvest.jpg" alt="Traditional pre-dawn cinnamon harvest" />
                </div>
                <h3>1. The Pre-Dawn Harvest</h3>
                <p>Farmers select mature shoots, cut at a 45-degree angle to ensure the tree regrows stronger.</p>
            </div>

            {/* Step 2 */}
            <div className="process-card">
                <div className="process-image">
                <img src="/assets/brass-rod.jpg" alt="Artisan using a brass rod" />
                </div>
                <h3>2. The Brass Rod Technique</h3>
                <p>Shoots are rubbed with traditional brass rods to loosen the inner bark and release the aroma.</p>
            </div>

            {/* Step 3 */}
            <div className="process-card">
                <div className="process-image">
                <img src="/assets/hand-rolling.jpg" alt="Master peeler hand-rolling" />
                </div>
                <h3>3. Hand-Rolling</h3>
                <p>Master peelers hand-layer delicate inner bark into the iconic multi-layered "cigar" look.</p>
            </div>
            </div>
        </div>
    </section>

      {/* Why Direct Matters */}
      <section className="averon-section dark-bg">
        <div className="averon-container">
          <h2 className="title-medium">Why "Direct" Matters for You</h2>
          <div className="benefit-row">
            <div className="benefit">
              <h4>Unrivalled Freshness</h4>
              <p>Arriving in the UK with a volatile oil content that machine-processed spices cannot match.</p>
            </div>
            <div className="benefit">
              <h4>Total Transparency</h4>
              <p>We manage the entire chain, from the first cut in Matara to the delivery at your door.</p>
            </div>
          </div>
          <div className="tagline">
            <h3>Pure. Direct. Traceable.</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;