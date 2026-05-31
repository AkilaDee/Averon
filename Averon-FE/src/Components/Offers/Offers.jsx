import React from 'react';
/* Ensure you import your CSS file at the top */
import './Offers.css'; 
import map from '../../assets/map.jpg'

import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='services' id='offers'>
      <div className="averon-container">
        {/* 1. Sourcing Section */}
        <section className="averon-section section-split">
          <div className="averon-content">
            <span className="badge">Direct from Estate</span>
            <h2 className="title-large-offer">Sourcing That Bypasses Global Middlemen</h2>
            <p className="description-offer">
              We source directly from Sri Lankan estates to ensure your spices arrive within weeks of harvest, not months.
            </p>
            <Link to="/supply-chain" className="sc-button">
              Explore our supply chain →
            </Link>
          </div>
          <div className="averon-visual map-placeholder">
            <p>Sri Lanka Sourcing Map</p>
            <img src={map} alt="" />
          </div>
        </section>

        {/* 2 & 3. Quality & Compliance Grid */}
        <section className="averon-section section-bg">
          <div className="grid-dual">
            {/* Comparison Table */}
            <div className="card table-card">
              <h3 className="title-medium-offer">The "True" Difference</h3>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Ceylon Cinnamon</th>
                    <th>Cassia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-feature">COUMARIN LEVEL</td>
                    <td className="text-safe">Ultra-Low</td>
                    <td className="text-unsafe">High (Risk)</td>
                  </tr>
                  <tr>
                    <td className="text-feature">FLAVOUR</td>
                    <td>Sweet & Delicate</td>
                    <td>Pungent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Compliance Card */}
            <div className="card dark-card">
              <h3 className="title-medium-offer">Compliance & Safety</h3>
              <p className="description-offer-alt">
                Fully FSA Registered and HACCP compliant. We provide complete traceability for every batch.
              </p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1Rx9zO61Ru7jaCNSRRiJd6Gxh_Zs_8xqh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="primary-button"
                style={{ 
                  display: 'inline-flex',   // Changed to inline-flex for easier centering
                  alignItems: 'center',     // Vertical center
                  justifyContent: 'center', // Horizontal center
                  textAlign: 'center',      // Backup for text wrapping
                  textDecoration: 'none'    // Removes the default link underline
                }}
              >
                Download Product Specification (PDF)
              </a>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Offers;