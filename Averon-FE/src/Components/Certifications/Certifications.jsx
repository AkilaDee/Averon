import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Ensure npm install react-helmet or react-helmet-async is completed
import './Certifications.css';

// Asset Imports
import cert_hero from '../../assets/certifications.webp'; 
import compliance_bg from '../../assets/accreditations.webp'; 

const Certifications = () => {
  return (
    <div className="premium-heritage-certs">
      
      {/* SECTION 0: SEO & HEAD METADATA */}
      <Helmet>
        <title>Spice Import Compliance & HACCP Certifications | Averon Supplies</title>
        <meta 
          name="description" 
          content="Review Averon Supplies Ltd's statutory compliance metrics. Verified UK Food Business Operator (FBO), strict FSA guidelines, fully-documented HACCP systems, and 100% batch traceability." 
        />
        <meta name="keywords" content="FBO registered, UK Food Standards Agency compliance, HACCP spice supplier, spice traceability audit, wholesale spice certification UK, non-irradiated cinnamon technical sheet" />
        <link rel="canonical" href="https://averonsupplies.co.uk/certifications" />
        
        {/* OpenGraph Metadata for Professional Sharing (LinkedIn/B2B Networks) */}
        <meta property="og:title" content="Regulatory Compliance & Technical Spice Standards | Averon Supplies Ltd" />
        <meta property="og:description" content="Direct wholesale distribution backed by documented UK food safety frameworks, mandatory HACCP controls, and complete single-origin traceability protocols." />
        <meta property="og:url" content="https://averonsupplies.co.uk/certifications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={cert_hero} />

        {/* Robots Instructions */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* SECTION 1: HERO ARCHITECTURE */}
      <section className="certs-hero-section" style={{ backgroundImage: `linear-gradient(rgba(26, 30, 33, 0.8), rgba(26, 30, 33, 0.93)), url(${cert_hero})` }}>
        <div className="certs-hero-inner">
          <div className="center-divider-tag">
            <span className="line-arm light"></span>
            <span className="tag-text-main light">REGULATORY GATEWAY</span>
            <span className="line-arm light"></span>
          </div>
          <h1 className="serif-hero-title">Compliance & Certifications</h1>
          <p className="elegant-hero-subtitle">
            Averon Supplies Ltd operates a fully transparent, audited, and legally registered import architecture. Review our verified UK food business operator matrices and technical frameworks below.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE FOUR COMPLIANCE PILLARS */}
      <section className="framework-grid-container">
        <div className="section-header-block">
          <h2 className="serif-section-title">Verified Legal Frameworks</h2>
          <p className="section-subtitle">Absolute corporate safety documentation for enterprise risk mitigation and standard auditing validation.</p>
        </div>

        <div className="framework-grid">
          
          {/* Pillar 1 */}
          <div className="framework-card">
            <div className="card-accent-bar"></div>
            <span className="framework-tag">UK STATUTORY</span>
            <h3 className="serif-card-title">Registered Food Business Operator (FBO)</h3>
            <p className="card-text">
              Averon Supplies Ltd is officially registered as a Food Business Operator with our local authority. Our facility, storage controls, and distribution pathways operate strictly under the enforcement guidelines of the UK Food Standards Agency (FSA).
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="framework-card">
            <div className="card-accent-bar"></div>
            <span className="framework-tag">HAZARD CONTROL</span>
            <h3 className="serif-card-title">HACCP-Governed Infrastructure</h3>
            <p className="card-text">
              Our storage assets and inventory paths run on a rigorously defined HACCP (Hazard Analysis and Critical Control Point) system. We systematically log intake metrics, control critical ambient variables, and verify structural batch protection during final dispatch.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="framework-card">
            <div className="card-accent-bar"></div>
            <span className="framework-tag">AUDIT TRANSPARENCY</span>
            <h3 className="serif-card-title">One Step Forward & Back Traceability</h3>
            <p className="card-text">
              We run a mandatory one step back, one step forward traceability loop on every shipment. Every single consignment is mapped and backed by definitive origin customs paperwork, tracking product steps clean from regional farms down to delivery drop points.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="framework-card">
            <div className="card-accent-bar"></div>
            <span className="framework-tag">CHEMICAL PURITY</span>
            <h3 className="serif-card-title">Purity & Non-Irradiation Guarantee</h3>
            <p className="card-text">
              All inventory lots are guaranteed 100% pure, non-irradiated spice grades, entirely free from additive fillers or bulk extension compounds. Full Technical Specification Sheets, microbiological analyses, and moisture readouts are compiled per batch.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: TECH SPEC TECHNICAL ROW */}
      <section className="spec-download-panel" style={{ backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.95)), url(${compliance_bg})` }}>
        <div className="spec-panel-inner">
          <div className="spec-text-side">
            <span className="panel-kicker-tag">DOCUMENTATION ON DEMAND</span>
            <h3 className="serif-panel-title">Request Batch Technical Passports</h3>
            <p className="panel-narrative-para">
              We provide full transparency for your quality assurance audits. Upon trade inquiry or contract initiation, our logistics team issues formal validation packs containing complete microbiological breakdowns, ash mass metrics, moisture level readouts, and country-of-origin certificates.
            </p>
          </div>
          <div className="spec-action-side">
            <div className="contact-reassurance-box">
              <p className="box-title">Direct Procurement Channel</p>
              <a href="mailto:info@averonsupplies.co.uk" className="box-email">info@averonsupplies.co.uk</a>
              <p className="box-phone">+44 (0) 7344 469729</p>
              <Link to="/contact-us" className="gold-action-btn">INQUIRE FOR TECHNICAL SHEETS</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Certifications;