import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Processing.css';

// Asset Imports
import processing_hero from '../../assets/processing.webp'; 
import sorting_line from '../../assets/cinnamon ground.webp'; 
import grading from '../../assets/grading.webp'; 
import drying from '../../assets/drying.webp';
import packaging from '../../assets/packing.webp';

const Processing = () => {
  return (
    <div className="premium-heritage-processing">
      
      {/* SECTION 0: SEO & HEAD METADATA */}
      <Helmet>
        <title>Industrial Spice Processing & Milling Standards | Averon Supplies</title>
        <meta 
          name="description" 
          content="Discover Averon Supplies Ltd's industrial processing architecture. From strict optical sorting and controlled dehydration to vacuum triple-shield packaging under critical control metrics." 
        />
        <meta name="keywords" content="industrial spice processing, cinnamon milling, spice dehydration, optical sorting spices, triple shield packaging, bulk spice quality control, moisture target spices" />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/processing" />
        
        {/* OpenGraph Metadata for Professional Sharing */}
        <meta property="og:title" content="Industrial Spice Processing Integrity & Milling | Averon Supplies Ltd" />
        <meta property="og:description" content="Combining generational milling craftsmanship with modern food safety mechanisms. Review our batch verification standards and zero-tolerance contamination protocols." />
        <meta property="og:url" content="https://averonsupplies.co.uk/processing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={processing_hero} />

        {/* Robots Instructions */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* SECTION 1: HERO ARCHITECTURE (Optimized DOM Pattern for LCP) */}
      <section className="processing-hero-section">
        <img 
          src={processing_hero} 
          alt="" 
          className="processing-hero-bg-img"
          fetchpriority="high"
          loading="eager"
        />
        <div className="processing-hero-overlay"></div>
        
        <div className="processing-hero-inner">
          <div className="center-divider-tag">
            <span className="line-arm light"></span>
            <span className="tag-text-main light">FACILITY & COMPLIANCE</span>
            <span className="line-arm light"></span>
          </div>
          <h1 className="serif-hero-title">Industrial Processing Integrity</h1>
          <p className="elegant-hero-subtitle">
            From raw estate collections to sealed, export-ready containers. Our processing architecture combines generational milling craftsmanship with modern food safety mechanisms.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE STEP-BY-STEP VISUAL PIPELINE */}
      <section className="pipeline-container">
        <div className="section-header-block">
          <h2 className="serif-section-title">The Three Pillars of Refining</h2>
          <p className="section-subtitle">How we convert field botanicals into highly standardized raw materials for global food and pharmaceutical manufacturers.</p>
        </div>

        <div className="pipeline-flow">
          
          {/* Step 1 */}
          <div className="pipeline-row">
            <div className="pipeline-text-side">
              <span className="step-number">01</span>
              <h3 className="serif-step-title">Strict Hand-Sorting & Grading</h3>
              <p className="pipeline-text">
                Every batch received at our centralized station undergoes intensive manual sorting. For true cinnamon, specialists select quills based on color consistency and multi-layer structural thickness. For other spices like black pepper and green cardamom, modern optical graders remove extraneous organic material to guarantee unmatched purity thresholds.
              </p>
            </div>
            <div className="pipeline-image-side">
              <div className="pipeline-img-frame">
                <img src={grading} alt="Manual spice sorting and batch grading process" className="pipeline-embedded-img" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="pipeline-row reverse">
            <div className="pipeline-text-side">
              <span className="step-number">02</span>
              <h3 className="serif-step-title">Controlled Thermal Dehydration</h3>
              <p className="pipeline-text">
                Moisture control is paramount to prevent microbial degradation and mold during transit. We use climate-controlled drying beds that carefully cycle air at low temperatures. This critical phase locks in the volatile oils (such as eugenol and piperine) rather than burning them off, preserving natural chemical potency.
              </p>
            </div>
            <div className="pipeline-image-side">
              <div className="pipeline-img-frame">
                <img src={drying} alt="Climate controlled low temperature drying beds" className="pipeline-embedded-img" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="pipeline-row">
            <div className="pipeline-text-side">
              <span className="step-number">03</span>
              <h3 className="serif-step-title">Milling & Triple-Shield Packaging</h3>
              <p className="pipeline-text">
                Whether supplying whole quills or custom coarse grinds, our processing equipment is calibrated to minimize heat friction during reduction. Finished lots are instantly funneled into food-grade, gas-barrier bags, then vacuum-packed into heavy multi-wall corrugated master cartons to completely neutralize moisture intrusion and aroma loss.
              </p>
            </div>
            <div className="pipeline-image-side">
              <div className="pipeline-img-frame">
                <img src={packaging} alt="Food grade vacuum triple shield packaging line" className="pipeline-embedded-img" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE ART OF THE CINNAMON CIGAR (Heading Order Fixed to H3) */}
      <section className="cinnamon-craft-showcase">
        <div className="craft-inner-container">
          
          <div className="craft-header-block">
            <span className="gold-kicker-text">TRADITIONAL CRAFTSMANSHIP</span>
            <h2 className="serif-section-title">The Art of the "Cinnamon Cigar"</h2>
            <p className="section-subtitle">
              Harvested during the monsoon months when the bark is most supple and essential oils are at their peak.
            </p>
          </div>

          <div className="craft-steps-grid">
            
            {/* Craft Step 1 */}
            <div className="craft-card">
              <div className="craft-card-header">
                <span className="craft-index">I</span>
                {/* Fixed semantic level skip from h4 to h3 */}
                <h3 className="serif-craft-title">The Pre-Dawn Harvest</h3>
              </div>
              <p className="craft-description">
                Farmers select mature shoots, cutting precisely at a 45-degree angle to ensure the parent tree sustains no structural duress and regrows stronger.
              </p>
            </div>

            {/* Craft Step 2 */}
            <div className="craft-card">
              <div className="craft-card-header">
                <span className="craft-index">II</span>
                {/* Fixed semantic level skip from h4 to h3 */}
                <h3 className="serif-craft-title">The Brass Rod Technique</h3>
              </div>
              <p className="craft-description">
                Shoots are methodically rubbed with traditional brass rods to loosen the inner bark from the woody core, activating and releasing the distinct aromatic top notes.
              </p>
            </div>

            {/* Craft Step 3 */}
            <div className="craft-card">
              <div className="craft-card-header">
                <span className="craft-index">III</span>
                {/* Fixed semantic level skip from h4 to h3 */}
                <h3 className="serif-craft-title">Hand-Rolling Execution</h3>
              </div>
              <p className="craft-description">
                Master peelers hand-layer delicate inner bark sheets into one another, naturally curling into the iconic, multi-layered "cigar" look unique to true Ceylon quills.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: REASSURANCE & CONTAMINATION MARGINS */}
      <section className="processing-safety-panel">
        <div className="processing-panel-inner">
          
          <div className="safety-visual-frame">
            <img src={sorting_line} alt="" className="safety-bg-layer" loading="lazy" />
            <div className="protection-overlay">
              <p className="overlay-quote">"Zero-tolerance policy for cross-contamination, ensuring absolute commercial purity."</p>
            </div>
          </div>

          <div className="safety-specs-frame">
            <span className="panel-kicker-tag">CRITICAL CONTROL METRICS</span>
            <h3 className="serif-panel-title">Batch Verification Standards</h3>
            <p className="panel-narrative-para">
              We operate strictly under internationally recognized preventative control plans. Every batch undergoes mandatory physical, chemical, and microbiological review prior to vessel loading.
            </p>

            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Moisture Content Target</span>
                <span className="spec-value">&lt; 12.0% Maximum</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Extraneous Matter Tolerance</span>
                <span className="spec-value">0.0% (Zero Margin)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Batch Traceability Tracking</span>
                <span className="spec-value">QR / RFID Registered</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Metal Detection Protocol</span>
                <span className="spec-value">Triple-Stage Ferrite Scan</span>
              </div>
            </div>

            <div className="cta-link-wrapper">
              <Link to="/certifications" className="gold-button-link">
                VIEW QUALITY CERTIFICATIONS
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Processing;