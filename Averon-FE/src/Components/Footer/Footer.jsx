import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (target) => {
    navigate('/', { state: { scrollTo: target } });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        
        {/* COLUMN 1: BRAND PROFILE */}
        <div className="footer-col brand-col">
          <img src={logo} alt="Averon Supplies" className="footer-logo" onClick={() => navigate('/')} />
          <p className="brand-desc">
            Direct importers of authentic Ceylon Cinnamon and premium Sri Lankan spices. We cultivate, harvest, and process on our own estates to ensure absolute traceability and uncompromised grade accuracy for UK wholesale markets.
          </p>
          
          {/* UPGRADED SOCIAL ICON CAPSULES USING PURE RAW SVGs */}
          <div className="footer-socials">
            
            {/* LINKEDIN BUTTON */}
            <a href="https://linkedin.com/averon-supplies-ltd" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* INSTAGRAM BUTTON */}
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a> */}

            {/* WHATSAPP B2B TRADE CHANNEL BUTTON */}
            <a href="https://wa.me/447344469729" target="_blank" rel="noreferrer" className="social-icon-btn whatsapp-btn" aria-label="WhatsApp Trade Support">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>

          </div>
        </div>

        {/* COLUMN 2: QUICK NAVIGATION */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><button onClick={() => handleLinkClick('hero')}>Home</button></li>
            <li><button onClick={() => handleLinkClick('offers')}>Services</button></li>
            <li><button onClick={() => handleLinkClick('products')}>Our Catalogue</button></li>
            <li><button onClick={() => handleLinkClick('quality')}>Quality Standards</button></li>
            <li><button onClick={() => handleLinkClick('about')}>Our Story</button></li>
            <li><button onClick={() => handleLinkClick('contact')}>Contact Us</button></li>
          </ul>
        </div>

        {/* COLUMN 3: WHOLESALE PRODUCTS */}
        <div className="footer-col">
          <h3>Our Varieties</h3>
          <ul className="footer-links">
            <li><button onClick={() => navigate('/products/cinnamon')}>Ceylon Cinnamon</button></li>
            <li><button onClick={() => navigate('/products/pepper')}>Black Pepper</button></li>
            <li><button onClick={() => navigate('/products/cloves')}>Hand-Picked Cloves</button></li>
            <li><button onClick={() => navigate('/products/cardamom')}>Green Cardamom</button></li>
            <li><button onClick={() => navigate('/products/vanilla')}>Vanilla Pods</button></li>
            <li><button onClick={() => navigate('/products/nutmeg')}>Whole Nutmeg</button></li>
            <li><button onClick={() => navigate('/supply-chain')}>Our Supply Chain</button></li>
          </ul>
        </div>

        {/* COLUMN 4: TRUST & CORPORATE COMPLIANCE */}
        <div className="footer-col trust-col">
          <h3>B2B Enquiries</h3>
          <p className="trust-text"><strong>Averon Supplies Ltd</strong></p>
          <p className="trust-text">📍 Direct distribution across the United Kingdom & Europe.</p>
          <p className="trust-text">📞 +44 7344469729</p>
          <p className="trust-text">📧 info@averonsupplies.co.uk</p>
          <div className="origin-badge">
            🇱🇰 Single-Origin Sri Lanka
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      {/* FOOTER BOTTOM BAR */}
      <div className="container footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Averon Supplies Ltd. All rights reserved. Registered in England & Wales.
        </p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Trade</a>
          <a href="#cookies">Cookies Policy</a>
          <a href="#modern-slavery">Modern Slavery Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;