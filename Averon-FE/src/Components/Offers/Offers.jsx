import React, { useRef } from 'react';
import './Offers.css'; 
import { Link } from 'react-router-dom';

// Image Imports
import cinnamon_ground from '../../assets/cinnamon.webp';
import black_pepper from '../../assets/pepper.webp'; 
import cardamom from '../../assets/cardamom.webp';
import cloves from '../../assets/cloves.webp';
import nutmeg_mace from '../../assets/nutmeg.webp';
import vanilla from '../../assets/vanilla.webp';
import supply_chain from '../../assets/supply-chain.webp';
import processing from '../../assets/processing.webp';
import regions from '../../assets/regions.webp';
import certifications from '../../assets/certifications.webp';

const Offers = () => {
  const scrollTrackRef = useRef(null);

  const scroll = (direction) => {
    if (scrollTrackRef.current) {
      const { scrollLeft, clientWidth } = scrollTrackRef.current;
      
      const cardStep = clientWidth / 4; 
      const offset = direction === 'left' ? -cardStep : cardStep;
      
      scrollTrackRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='premium-heritage-offers' id='offers'>
      
      {/* SECTION 1: HERITAGE INTRO BLOCK */}
      <section className="heritage-intro-section">
        <div className="center-divider-tag">
          <span className="line-arm"></span>
          <span className="tag-text-main">OUR DIVISIONS</span>
          <span className="line-arm"></span>
        </div>
        <h2 className="serif-main-title">Premium Pure Ceylon Spices</h2>
        <p className="elegant-intro-subtitle">
          From our historic Sri Lankan estates directly to your business. Premium, single-origin spices backed by generations of expertise in cultivation, harvesting, and manufacturing.
        </p>
        <h3 className="serif-title">Direct from Estate Excellence</h3>
        {/* Extended Heritage & Industrial Narrative */}
        <div className="heritage-extended-narrative" style={{ marginTop: '2.5rem', textAlign: 'left' }}>
          <h3 className="serif-card-title" style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'inherit' }}>Our Heritage of Cultivation and Manufacturing Mastery</h3>
          <p className="card-description-text" style={{ marginBottom: '1.25rem', lineHeight: '1.7' }}>
            From our historic Sri Lankan estates directly to your enterprise, we deliver an elite portfolio of single-origin Ceylon spices backed by generations of uncompromised expertise in tropical agriculture, meticulous harvesting, and advanced manufacturing. Rooted in the island's fertile microclimates, high-altitude hill countries, and nutrient-dense soils, our agricultural operations bridge the gap between traditional generational farming and rigorous modern processing standards.
          </p>
          <p className="card-description-text" style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
            Every botanical in our catalog ranging from high-piperine Ceylon Black Pepper and premium Green Cardamom to eugenol-rich Ceylon Cloves, aromatic Nutmeg, and hand-pollinated Vanilla is cultivated with absolute precision. We reject mass-market shortcuts, ensuring that every batch preserves its peak chemical density, volatile oil integrity, and natural aromatic profile without artificial additives, chemical enhancements, or blending compromises.
          </p>

          <h3 className="serif-card-title" style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'inherit' }}>Industrial Reliability and Global Supply Chain Integrity</h3>
          <p className="card-description-text" style={{ marginBottom: '1.25rem', lineHeight: '1.7' }}>
            Designed specifically for international B2B buyers, food manufacturers, industrial extractors, and gourmet retail brands across Europe, North America, and beyond, our supply chain guarantees total transparency and traceability. We maintain strict control over every stage of the lifecycle:
          </p>
          
          <ul className="card-description-text" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Sustainable Sourcing:</strong> Partnering exclusively with verified, ethical agroforestry networks across Sri Lanka that prioritize ecological balance and long-term land stewardship.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Rigorous Quality Control:</strong> Implementing strict moisture monitoring, advanced sizing protocols, and comprehensive laboratory screenings to eliminate foreign matter, mold risks, and chemical contaminants.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Unmatched Potency:</strong> Delivering exceptional bulk densities and high volatile oil yields (such as peak eugenol and vanillin concentrations) that translate directly into superior process efficiency and lower raw material weights for large-scale operations.
            </li>
          </ul>

          <p className="card-description-text" style={{ fontStyle: 'italic', lineHeight: '1.7' }}>
            Partner with us to elevate your commercial product lines with authentic, single-origin spices built to satisfy the world's most demanding quality benchmarks.
          </p>
        </div>
      </section>

      {/* Slider Section Topic Header */}
        <div className="center-divider-tag" style={{ marginBottom: '25px' }}>
          <span className="line-arm"></span>
          <span className="tag-text-main">EXPLORE OUR PORTFOLIO</span>
          <span className="line-arm"></span>
        </div>

      {/* SECTION 2: THE CAROUSEL DIVISIONS GRID WITH NAVIGATION ARROWS */}
      <section className="divisions-carousel-container">
        
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow left-arrow" 
          onClick={() => scroll('left')} 
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <button 
          className="carousel-arrow right-arrow" 
          onClick={() => scroll('right')} 
          aria-label="Scroll right"
        >
          &#8594;
        </button>

        {/* Scrollable Track */}
        <div className="divisions-card-grid" ref={scrollTrackRef}>
          
          {/* Card 1: Flagship Ceylon Cinnamon */}
          <div className="division-item-card flagship-highlight">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${cinnamon_ground})` }}
              ></div>
              <span className="flagship-badge-pill">OUR CROWN JEWEL</span>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Ceylon Cinnamon</h3>
              <p className="card-description-text">
                The true cinnamon. Rare, thin, multi-layered quills hand-peeled in the Southern Province, offering an ultra-low coumarin, sweet aromatic profile.
              </p>
              <Link to="/products/ceylon-cinnamon" className="elegant-explore-link" aria-label="Explore Ceylon Cinnamon">
                EXPLORE →
              </Link>
            </div>
          </div>

          {/* Card 2: Black Pepper */}
          <div className="division-item-card">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${black_pepper})` }}
              ></div>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Black Pepper</h3>
              <p className="card-description-text">
                High-piperine berries, sun-dried uniformly to deliver a sharp, pure, and clean heat index trusted by top culinary blenders.
              </p>
               <Link to="/products/black-pepper" className="elegant-explore-link" aria-label="Explore Black Pepper">
                EXPLORE →
              </Link>
            </div>
          </div>

          {/* Card 3: Cardamom */}
          <div className="division-item-card">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${cardamom})` }}
              ></div>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Green Cardamom</h3>
              <p className="card-description-text">
                Intensely aromatic, hand-picked green pods sorted strictly for exceptional volatile oil density and vibrant whole color retention.
              </p>
               <Link to="/products/green-cardamom" className="elegant-explore-link" aria-label="Explore Green Cardamom">
                EXPLORE →
              </Link>
            </div>
          </div>

          {/* Card 4: Cloves */}
          <div className="division-item-card">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${cloves})` }}
              ></div>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Cloves</h3>
              <p className="card-description-text">
                Dense, hand-picked whole floral buds collected fresh for commercial grinding lines, rich essential oil distillation, and wholesale distribution.
              </p>
               <Link to="/products/cloves" className="elegant-explore-link" aria-label="Explore Cloves">
                EXPLORE →
              </Link>
            </div>
          </div>

          {/* Card 5: Nutmeg & Mace */}
          <div className="division-item-card">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${nutmeg_mace})` }}
              ></div>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Nutmeg & Mace</h3>
              <p className="card-description-text">
                Heavy, high-grade kernels and vibrant outer mace lacy bands, sun-dried uniformly to lock in rich, warm essential volatile oils.
              </p>
               <Link to="/products/nutmeg" className="elegant-explore-link" aria-label="Explore Nutmeg">
                EXPLORE →
              </Link>
            </div>
          </div>

          {/* Card 6: Dedicated Vanilla Card */}
          <div className="division-item-card">
            <div className="division-img-wrapper">
              <div 
                className="fallback-spice-bg" 
                style={{ backgroundImage: `url(${vanilla})` }}
              ></div>
            </div>
            <div className="division-content-pane">
              <h3 className="serif-card-title">Ceylon Vanilla</h3>
              <p className="card-description-text">
                Plump, oily, gourmet-grade Bourbon-type vanilla pods cured patiently to yield an exceptionally deep vanillin content and sweet floral finish.
              </p>
               <Link to="/products/vanilla" className="elegant-explore-link" aria-label="Explore Vanilla">
                EXPLORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED STORY PILLARS ROW */}
      <section className="story-pillars-outer-wrapper">
        <div className="full-bleed-story-pillars">
          
          <div className="story-pillar-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.75)), url(${supply_chain})` }}>
            <div className="pillar-header-group">
              <h4 className="pillar-title">Supply Chain</h4>
            </div>
            <div className="pillar-content-bottom">
              <p className="pillar-desc">Smallholder farmers across Sri Lanka growing certified premium spice varieties.</p>
               <Link to="/supply-chain" className="pillar-action-arrow" aria-label="Learn more about Supply chain">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="story-pillar-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.75)), url(${regions})` }}>
            <div className="pillar-header-group">
              <h4 className="pillar-title">Sourcing Regions</h4>
            </div>
            <div className="pillar-content-bottom">
              <p className="pillar-desc">Sourcing from the most fertile micro-climate farming regions across Sri Lanka.</p>
              <Link to="/sourcing-regions" className="pillar-action-arrow"aria-label="Learn more about Sourcing Regions">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="story-pillar-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.75)), url(${certifications})` }}>
            <div className="pillar-header-group">
              <h4 className="pillar-title">Certifications</h4>
            </div>
            <div className="pillar-content-bottom">
              <p className="pillar-desc">Certified facilities with complete batch traceability maps.</p>
              <Link to="/certifications" className="pillar-action-arrow" aria-label="Learn more about Certifications">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="story-pillar-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.75)), url(${processing})` }}>
            <div className="pillar-header-group">
              <h4 className="pillar-title">Processing</h4>
            </div>
            <div className="pillar-content-bottom">
              <p className="pillar-desc">Processing facilities ensuring total batch control and premium quality passports.</p>
              <Link to="/processing" className="pillar-action-arrow" aria-label="Learn more about Processing">
                Learn More →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE TECHNICAL SHOWDOWN SECTION */}
      <div className="technical-section-wrapper">
        <section className="technical-safety-panel">
          <div className="technical-panel-inner">
            <div className="safety-text-side">
              <span className="panel-kicker-tag">OUR PURPOSE</span>
              <h3 className="serif-panel-title">True Cinnamon vs Commercial Imitations</h3>
              <p className="panel-narrative-para">
                Averon Supplies runs on transparency. We want bulk spice procurement managers to look directly at the values. The global market is saturated with cheap Cassia alternatives that introduce potential coumarin chemical exposure risks. True Ceylon Cinnamon guarantees chemical peace of mind and an exquisite flavor profile.
              </p>
              
              <div className="clean-heritage-table-container">
                <table className="heritage-data-table">
                  <thead>
                    <tr>
                      <th>ANALYSIS METRIC</th>
                      <th>CEYLON CINNAMON</th>
                      <th>MARKET CASSIA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="metric-label-bold">Coumarin Contamination</td>
                      <td className="text-success-gold">Ultra-Low (~0.004%)</td>
                      <td className="text-error-red">High (Toxicity Risk)</td>
                    </tr>
                    <tr>
                      <td className="metric-label-bold">Flavor Notes</td>
                      <td>Sweet, Multi-layered, Eugenol</td>
                      <td>Harsh, Bitter, Pungent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="safety-action-side">
              <div className="compliance-quote-card">
                <p className="quote-body">
                  "A clean, disease-free food supply ecosystem achieved through direct micro-climate sourcing, complete transparency, and total supply-chain integrity."
                </p>
                <div className="quote-divider-line"></div>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1Rx9zO61Ru7jaCNSRRiJd6Gxh_Zs_8xqh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="heritage-download-btn"
                >
                  DOWNLOAD PRODUCT SPECIFICATION (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Offers;