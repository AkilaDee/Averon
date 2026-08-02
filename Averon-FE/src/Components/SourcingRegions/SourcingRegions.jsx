import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './SourcingRegions.css';

// Asset Imports
import regions_hero_bg from '../../assets/regions.webp'; // Using standard industrial/estate backdrop for hero
import map from '../../assets/map.jpg';   // Map asset brought explicitly into the DOM layout

// NOTE: Adjust these image names/paths to match the ones available in your assets folder
import central_highlands from '../../assets/central_highlands.webp'; 
import southern_coast from '../../assets/southern_coast.webp';
import low_country from '../../assets/low_country.webp';

const SourcingRegions = () => {
  return (
    <div className="premium-heritage-regions">
      
      {/* SECTION 0: SEO & HEAD METADATA */}
      <Helmet>
        <title>Sri Lankan Spice Sourcing Regions & Terroir | Averon Supplies</title>
        <meta 
          name="description" 
          content="Explore Averon Supplies Ltd's single-origin Sri Lankan sourcing networks. Learn how maritime lowlands, sub-mountainous ridges, and wet zones create volatile oil profiles." 
        />
        <meta name="keywords" content="Ceylon cinnamon origin, Sri Lanka spice regions, volcanic soil spices, maritime lowlands cinnamon, high-piperine black pepper sourcing, single-origin spice microclimates" />
        <link rel="canonical" href="https://averonsupplies.co.uk/sourcing-regions" />
        
        {/* OpenGraph Metadata for Professional Sharing */}
        <meta property="og:title" content="Geographic Traceability & Spice Micro-Climates | Averon Supplies Ltd" />
        <meta property="og:description" content="Controlling crop structural profiles from the soil up. Discover how our geographic monsoon-balancing network yields flat B2B quality metrics year-round." />
        <meta property="og:url" content="https://averonsupplies.co.uk/sourcing-regions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={regions_hero_bg} />

        {/* Robots Instructions */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* SECTION 1: HERO ARCHITECTURE */}
      <section className="regions-hero-section" style={{ backgroundImage: `linear-gradient(rgba(26, 30, 33, 0.75), rgba(26, 30, 33, 0.9)), url(${regions_hero_bg})` }}>
        <div className="regions-hero-inner">
          <div className="center-divider-tag">
            <span className="line-arm light"></span>
            <span className="tag-text-main light">TERROIR & ORIGIN</span>
            <span className="line-arm light"></span>
          </div>
          <h1 className="serif-hero-title">Sri Lankan Micro-Climates</h1>
          <p className="elegant-hero-subtitle">
            Why origin matters. Our volcanic soils, specific elevations, and historic monsoon patterns create the exceptional volatile oil density found exclusively in Averon Supplies' botanical networks.
          </p>
        </div>
      </section>

      {/* NEW SECTION 2: THE SRI LANKA SOURCING MAP SHOWCASE */}
      <section className="sourcing-map-showcase">
        <div className="map-inner-container">
          <div className="map-text-column">
            <span className="gold-kicker-text">GEOGRAPHIC TRACEABILITY</span>
            <h2 className="serif-section-title">Mapping Our Origin Network</h2>
            <p className="map-narrative">
              Our direct ground-level partnerships span across targeted agricultural pockets strategically located throughout the island. By locking down exclusive estate lines across variable topographies, we control exact structural quality properties directly from the soil up.
            </p>
            <div className="map-legend-box">
              <div className="legend-row">
                <span className="legend-dot coast"></span>
                <p className="legend-text"><strong>Maritime Lowlands:</strong> Delivers thin, multi-layered quills.</p>
              </div>
              <div className="legend-row">
                <span className="legend-dot highlands"></span>
                <p className="legend-text"><strong>Sub-Mountainous Ridges:</strong> Concentrates floral volatile top-notes.</p>
              </div>
            </div>
          </div>
          <div className="map-visual-column">
            <div className="map-graphic-wrapper">
              <img src={map} alt="Averon Supplies Sri Lanka Sourcing Map" className="map-img" />
              <div className="map-graphic-overlay-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TERROIR TRIAD GRID */}
      <section className="terroir-grid-container">
        <div className="section-header-block">
          <h2 className="serif-section-title">Cultivation Ecosystems</h2>
          <p className="section-subtitle">Three distinct geographical zones delivering specific chemical and flavor profiles tailored for enterprise requirements.</p>
        </div>

        <div className="terroir-cards-wrapper">
          
          {/* Region 1 */}
          <div className="terroir-card">
            <div className="terroir-img-frame">
              <div className="terroir-bg-layer" style={{ backgroundImage: `url(${southern_coast})` }}></div>
              <span className="elevation-badge">0 – 300M ELEVATION</span>
            </div>
            <div className="terroir-body">
              <h3 className="serif-card-title">The Southern Coastal Strip</h3>
              <p className="region-meta">Primary Yield: Flagship Alba & Cinnamon Grades</p>
              <p className="card-description-text">
                Nestled along the humid coastal boundaries of Matara and Galle. The sandy, silica-rich topsoil combined with salt-kissed maritime breezes coaxes the ultra-thin, highly complex inner bark layers characteristic of true Ceylon Cinnamon.
              </p>
            </div>
          </div>

          {/* Region 2 */}
          <div className="terroir-card">
            <div className="terroir-img-frame">
              <div className="terroir-bg-layer" style={{ backgroundImage: `url(${central_highlands})` }}></div>
              <span className="elevation-badge">900M – 1500M ELEVATION</span>
            </div>
            <div className="terroir-body">
              <h3 className="serif-card-title">The Central Highlands</h3>
              <p className="region-meta">Primary Yield: Green Cardamom & Cloves</p>
              <p className="card-description-text">
                Characterized by lower temperatures, heavy mist blankets, and steep sub-mountainous slopes. This high-altitude environmental stress slows plant metabolism, condensing high concentrations of volatile organic compounds within floral buds and pods.
              </p>
            </div>
          </div>

          {/* Region 3 */}
          <div className="terroir-card">
            <div className="terroir-img-frame">
              <div className="terroir-bg-layer" style={{ backgroundImage: `url(${low_country})` }}></div>
              <span className="elevation-badge">300M – 600M ELEVATION</span>
            </div>
            <div className="terroir-body">
              <h3 className="serif-card-title">The Mid-Country Wet Zone</h3>
              <p className="region-meta">Primary Yield: High-Piperine Black Pepper & Nutmeg</p>
              <p className="card-description-text">
                Boasting dense, rich alluvial forest soils and uninterrupted tropical rainfall distributions. This optimal vegetative environment produces exceptionally dense spice seeds carrying high raw oil weight percentages.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE TECHNICAL BREAKDOWN (DARK CORE PANEL) */}
      <section className="regions-technical-panel">
        <div className="regions-panel-inner">
          
          <div className="panel-text-block">
            <span className="panel-kicker-tag">BATCH BALANCING</span>
            <h3 className="serif-panel-title">Monsoon Cycles & Raw Material Control</h3>
            <p className="panel-narrative-para">
              Sri Lanka is swept by two distinct monsoons: the Yala and the Maha. Because harvesting timelines dictate final eugenol and piperine density metrics, our supply chain shifts procurement geographically month-by-month to ensure incoming industrial shipments maintain flat quality metrics year-round.
            </p>
            <div className="cta-link-wrapper">
              <Link to="/supply-chain" className="gold-button-link">
                VIEW SUPPLY CHAIN TRACEABILITY
              </Link>
            </div>
          </div>

          <div className="panel-stats-block">
            <div className="metric-box">
              <span className="metric-number">100%</span>
              <span className="metric-label">Single-Origin Sri Lanka</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">7k+</span>
              <span className="metric-label">Monitored Smallholder Acres</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">4.8%</span>
              <span className="metric-label">Average Volatile Oil Minimums</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SourcingRegions;