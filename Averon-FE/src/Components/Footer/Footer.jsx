import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; 
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
            <img src={logo} alt="Averon Logo" className="footer-logo" />
            <p className="footer-bio-text">
              Direct importers of authentic Ceylon Cinnamon and premium Sri Lankan spices. 
              We cultivate, harvest, and process on our own estates to ensure absolute traceability
               and uncompromised grade accuracy for UK wholesale markets.
            </p>
            <p className="footer-bio-text">
              Driven by collaboration, we support food manufacturers, distributors, 
              and retailers with the strategic insights and innovative concepts they need to grow, 
              backed by a reliable supply of premium, ethically sourced ingredients.
            </p>
          </div>

          {/* COLUMN 2: Navigation Links (Typo Fixed) */}
          <div className="footer-col links-col">
            <h3 className="footer-column-title">Navigation</h3>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/quality">Quality</a></li>
              <li><a href="/about-us">Our Story</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Details & Socials (Typo Fixed) */}
          <div className="footer-col contact-col">
            <h3 className="footer-column-title">Contact Us</h3>
            
            <div className="contact-item address-item">
              <FiMapPin className="contact-icon pin-icon" />
              <div className="address-text">
                <p>42 Porthcawe Road</p>
                <p>London</p>
                <p>SE26 5TA</p>
              </div>
            </div>

            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:info@averonsupplies.co.uk" className="contact-link">
                info@averonsupplies.co.uk
              </a>
            </div>

            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href="tel:+447344469729" className="contact-link">
                +44 (0) 7344 469729
              </a>
            </div>

            {/* Social Buttons Container */}
            <div className="footer-socials-row">
              <a href="https://wa.me/447344469729" target="_blank" rel="noreferrer" className="footer-social-circle ln">
                  <FaWhatsapp className="social-icon" />
              </a>
              <a href="https://linkedin.com/company/averon-supplies-ltd" target="_blank" rel="noreferrer" className="footer-social-circle ln">
                  <FaLinkedinIn className="social-icon"/>
              </a>
              <a href="mailto:info@averonsupplies.co.uk" className="footer-social-circle ln">
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
          <a href="#terms" className="terms-link">
            Terms of Business
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;