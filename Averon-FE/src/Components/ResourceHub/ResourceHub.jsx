import React from 'react';
import { Link } from 'react-router-dom';
import './ResourceHub.css';

const ResourceHub = () => {
  return (
    <section className="resource-hub-section" id="resources">
      <div className="center-divider-tag">
        <span className="line-arm"></span>
        <span className="tag-text-main">TECHNICAL & PRODUCT HUB</span>
        <span className="line-arm"></span>
      </div>
      
      <h2 className="serif-main-title">Wholesale Procurement & Product Insights</h2>
      <p className="elegant-intro-subtitle">
        Access our professional spice guides, chemical safety analyses, and wholesale product specifications.
      </p>

      <div className="resources-grid">
        
        {/* Card 1: Flagship Product & Grading */}
        <div className="resource-card">
          <div className="resource-meta">GRADING & SPECS</div>
          <h3 className="resource-card-title">Ceylon Cinnamon Grades & Standard Specifications</h3>
          <p className="resource-card-excerpt">
            Explore our wholesale grading system. We supply true cinnamon in premium formats ranging from ultra-thin, delicate Alba quills to dense quillings and ground powders tailored for food manufacturing.
          </p>
          <div className="resource-link-group">
            <Link to="/products/ceylon-cinnamon" className="resource-internal-link">
              View Cinnamon Grades <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 2: Botanical Safety & Coumarin Analysis */}
        <div className="resource-card">
          <div className="resource-meta">SAFETY PROFILE</div>
          <h3 className="resource-card-title">True Cinnamon vs. Cassia: Chemical & Safety Profiles</h3>
          <p className="resource-card-excerpt">
            Understand the critical regulatory limits on coumarin content. Learn why food manufacturers are transitioning away from common Cassia to protect their brand and consumers.
          </p>
          <div className="resource-link-group">
            <Link to="/insights" className="resource-internal-link">
              Read Safety Analysis <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Commercial Samples */}
        <div className="resource-card highlight-card">
          <div className="resource-meta">B2B CONTRACTS</div>
          <h3 className="resource-card-title">Commercial Sampling & Volume Quotations</h3>
          <p className="resource-card-excerpt">
            We supply food manufacturers, premium packagers, and tea blenders across the UK. Request custom batch samples accompanied by full laboratory Certificate of Analysis (CoA) reports.
          </p>
          <div className="resource-link-group">
            <Link to="/contact-us" className="resource-internal-link highlight-btn">
              Request Lab Samples <span>&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourceHub;