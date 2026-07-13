import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './SupplyChain.css';

// Asset Imports
import supply_hero from '../../assets/supply-chain.webp'; 
import chain_metrics from '../../assets/supply-method.webp'; 
import farm_sourcing from '../../assets/farmers.webp';
import logistics_img from '../../assets/freight.webp';

const SupplyChain = () => {
  return (
    <div className="premium-heritage-supply">
      
      {/* SECTION 0: SEO & HEAD METADATA */}
      <Helmet>
        <title>Ethical Spice Supply Chain & Sourcing | Averon Supplies</title>
        <meta 
          name="description" 
          content="Explore Averon Supplies Ltd's vertically integrated supply chain. From estates in Sri Lanka to international freight, we provide transparent, ethical B2B spice procurement." 
        />
        <meta name="keywords" content="ethical spice sourcing, sustainable spice supply chain, wholesale cinnamon logistics, direct farm spice procurement, single-origin traceability, fair trade spice supplier UK" />
        <link rel="canonical" href="https://averonsupplies.co.uk/supply-chain" />
        
        {/* Fix Render-Blocking CSS by Preloading It */}
        <link rel="preload" href="/assets/index-13N7qzJ_.css" as="style" />

        {/* OpenGraph Metadata for Professional Sharing */}
        <meta property="og:title" content="Directly Integrated B2B Spice Supply Chain | Averon Supplies Ltd" />
        <meta property="og:description" content="Eliminating broker middle-layers to provide fixed price matrixes, lot-level batch tracking, and rigorous chemical barrier testing directly from origin." />
        <meta property="og:url" content="https://averonsupplies.co.uk/supply-chain" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={supply_hero} />

        {/* Robots Instructions */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* SECTION 1: HERO ARCHITECTURE (Optimized for LCP Image Discovery) */}
      <section className="supply-hero-section">
        {/* Render LCP image via HTML tag instead of CSS background image */}
        <img 
          src={supply_hero} 
          alt="" 
          className="supply-hero-bg-img" 
          fetchpriority="high" 
          loading="eager"
        />
        <div className="supply-hero-overlay"></div>
        
        <div className="supply-hero-inner">
          <div className="center-divider-tag">
            <span className="line-arm light"></span>
            <span className="tag-text-main light">FARM TO CONTAINER</span>
            <span className="line-arm light"></span>
          </div>
          <h1 className="serif-hero-title">Ethical Supply Chain Ecosystem</h1>
          <p className="elegant-hero-subtitle">
            Complete structural visibility from family-owned estate grids to industrial border clearances. We eliminate traditional broker layers to secure pure batches, stable pricing matrixes, and absolute food safety.
          </p>
        </div>
      </section>

      {/* SECTION 2: VERTICAL INTEGRATION STAGES */}
      <section className="chain-stages-container">
        <div className="section-header-block">
          <h2 className="serif-section-title">Direct Vertical Integration</h2>
          <p className="section-subtitle">By owning nodes at both the origin harvesting blocks and international distribution lines, we offer full oversight of your botanical lot passports.</p>
        </div>

        <div className="stages-split-layout">
          
          {/* Node A */}
          <div className="stage-split-row">
            <div className="stage-text-block">
              <span className="stage-index">STAGE A</span>
              <h3 className="serif-stage-title">Estates in Sri Lanka</h3>
              <p className="stage-body-text">
                Our supply chain begins directly in the micro-climate agricultural communities of Sri Lanka. We cultivate ongoing multi-generational relationships with vetted local farmers, supplying them with clean botanical stock, sustainable soil management strategies, and guaranteed fair-trade price locks. This transparent relationship safeguards your pipeline against adulteration risks and artificial crop inflation.
              </p>
            </div>
            <div className="stage-visual-block">
              <div className="stage-image-frame farmers-extended-frame">
                <img src={farm_sourcing} alt="Estates in Sri Lanka" className="stage-embedded-img" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Node B (Alternating Layout) */}
          <div className="stage-split-row reverse">
            <div className="stage-text-block">
              <span className="stage-index">STAGE B</span>
              <h3 className="serif-stage-title">Global Consolidation & Freight Forwarding</h3>
              <p className="stage-body-text">
                Once processing and triple-shield packaging are completed at our certified central facility, lots are cleared through customs with comprehensive batch passport documentation. Working alongside elite global ocean freight lines, we manage all shipping logistics from the Port of Colombo directly to your regional warehouse hub, ensuring a continuous, temperature-monitored distribution cycle.
              </p>
            </div>
            <div className="stage-visual-block">
              <div className="stage-image-frame">
                <img src={logistics_img} alt="Global Freight Forwarding" className="stage-embedded-img" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE POLICY CORE (DARK ASSURANCE PANEL) */}
      <section className="supply-compliance-panel">
        <div className="supply-panel-inner">
          
          <div className="compliance-specs-frame">
            <span className="panel-kicker-tag">COMPLIANCE & ETHICS</span>
            <h3 className="serif-panel-title">Enterprise Risk Mitigation</h3>
            <p className="panel-narrative-para">
              Industrial spice procurement demands more than just premium quality; it requires corporate vulnerability shielding. Averon Supplies enforces strict auditing standards across every single handling node.
            </p>

            <div className="compliance-checklist">
              <div className="check-item">
                <span className="check-bullet">&#10003;</span>
                <p className="check-text"><strong>Fair-Trade Pricing Guarantee:</strong> Bypassing exploitative regional trading auctions to keep financial equity directly in farming communities.</p>
              </div>
              <div className="check-item">
                <span className="check-bullet">&#10003;</span>
                <p className="check-text"><strong>Lot-Level Batch Audits:</strong> Every incoming pallet maps perfectly back to its collection collection node via unified digital serial indices.</p>
              </div>
              <div className="check-item">
                <span className="check-bullet">&#10003;</span>
                <p className="check-text"><strong>Aflatoxin & Chemical Barriers:</strong> Routine lab diagnostics ensure complete compliance with stringent UK, EU, and USDA food safety limits.</p>
              </div>
            </div>

            <div className="cta-link-wrapper">
              <Link to="/processing" className="gold-button-link">
                EXPLORE PROCESSING STANDARDS
              </Link>
            </div>
          </div>

          <div className="compliance-visual-frame">
            <div className="compliance-bg-layer">
              <img src={chain_metrics} alt="Compliance data verification" className="stage-embedded-img" loading="lazy" />
            </div>
            <div className="protection-overlay">
              <p className="overlay-quote">"Securing international supply networks through transparent pricing, verified traceability, and ethical accountability."</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SupplyChain;