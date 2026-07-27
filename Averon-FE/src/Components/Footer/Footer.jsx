import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.webp'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* UPPER CONTAINER: 4-Column Layout */}
      <div className="footer-upper">
        <div className="footer-columns-container">
          
          {/* COLUMN 1: Brand Info */}
          <div className="footer-col brand-info-col">
            <img src={logo} 
              alt="Averon Logo" 
              className="main-logo-img"
              width="234"
              height="80" />
            <p className="footer-bio-text">
              Direct importer of authentic Ceylon Cinnamon and premium Sri Lankan spices. 
              We cultivate, harvest, and process on our own estates to ensure absolute traceability
               and uncompromised grade accuracy for UK wholesale markets.
            </p>
            <p className="footer-bio-text">
              Driven by collaboration, we support food manufacturers, distributors, 
              and retailers with the strategic insights and innovative concepts they need to grow, 
              backed by a reliable supply of premium, ethically sourced ingredients.
            </p>
          </div>

          {/* COLUMN 2: Navigation Links */}
          <div className="footer-col links-col">
            <h3 className="footer-column-title">Navigation</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/quality">Quality</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Details & Socials */}
          <div className="footer-col contact-col">
            <h3 className="footer-column-title">Contact Us</h3>
            
            <div className="contact-item address-item">
              <FiMapPin className="contact-icon pin-icon" />
              <div className="address-text">
                <p>42 Porthcawe Road</p>
                <p>London</p>
                <p>SE26 5TA</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:info@averonsupplies.co.uk" className="contact-link" aria-label="Send us an email">
                info@averonsupplies.co.uk
              </a>
            </div>

            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href="tel:+447344469729" className="contact-link" aria-label="Call Us">
                +44 (0) 7344 469729
              </a>
            </div>

            {/* Social Buttons Container */}
            <div className="footer-socials-row">
               <a href="https://www.facebook.com/averonsuppliesltd" target="_blank" rel="noreferrer" className="footer-social-circle fb" aria-label="Visit our Facebook page">
                  <FaFacebookF className="social-icon" />
               </a>
               <a href="https://www.instagram.com/averonsuppliesltd" target="_blank" rel="noreferrer" className="footer-social-circle ig" aria-label="Visit our instagram page">
                  <FaInstagram className="social-icon" />
               </a>
              <a href="https://linkedin.com/company/averon-supplies-ltd" target="_blank" rel="noreferrer" className="footer-social-circle ln" aria-label="Visit our LinkedIn page">
                  <FaLinkedinIn className="social-icon"/>
              </a>
              <a href="mailto:info@averonsupplies.co.uk" className="footer-social-circle ln" aria-label="Send us an email">
                  <FaRegEnvelope className="social-icon"/>
              </a>
            </div>
          </div>

          {/* COLUMN 4: Certifications & Subscription */}
          <div className="footer-col certs-col">
          </div>

        </div>
      </div>

      {/* LOWER CONTAINER: Dark Olive Copyright Ribbon */}
      <div className="footer-lower">
        <div className="footer-lower-container">
          <p className="copyright-text">
            © 2026 - Averon Supplies. All Rights Reserved.
          </p>
          <Link to="/terms-of-business" className="terms-link">
            Terms of Business
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;