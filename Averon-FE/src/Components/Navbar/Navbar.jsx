import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import logo from '../../assets/logo.png';
import './Navbar.css';
import { FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiSearch, FiMail, FiPhone, FiChevronDown } from 'react-icons/fi'; // Imported FiChevronDown

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileOpen(false); 
    }
  };

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="brusco-header">
      {/* TIER 1: TOP UTILITY BAR */}
      <div className="tier-one">
        <div className="tier-one-container">
          <div className="tier-one-center-links">
            <NavLink to="/enquire" className="top-enquire">Enquire Now</NavLink>
            
            <a href="mailto:info@averonsupplies.co.uk" className="contact-icon-link">
              <FiMail className="contact-inline-icon" /> info@averonsupplies.co.uk
            </a>
            
            <a href="tel:+447344469729" className="contact-icon-link">
              <FiPhone className="contact-inline-icon" /> +44 (0) 7344469729
            </a>
          </div>

          <div className="tier-one-socials">
            <a href="https://wa.me/447344469729" target="_blank" rel="noreferrer" className="social-circle wa">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://linkedin.com/company/averon-supplies-ltd" target="_blank" rel="noreferrer" className="social-circle ln">
              <FaLinkedinIn />
            </a>
            <a href="mailto:info@averonsupplies.co.uk" className="social-circle ml">
              <FaRegEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* TIER 2: MIDDLE BAR */}
      <div className="tier-two">
        <div className="tier-two-container">
          <div className="logo-wrapper">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Averon Logo" className="main-logo-img" />
            </NavLink>
          </div>

          <form onSubmit={handleSearchSubmit} className="search-bar-container">
            <input 
              type="text" 
              placeholder="Type here to search ..." 
              className="nav-search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-icon-btn" aria-label="Submit Search">
              <FiSearch />
            </button>
          </form>

          <div className="brand-statement">
            Sourcing Excellence, Delivering Quality
          </div>
        </div>
      </div>

      {/* TIER 3: BOTTOM NAVIGATION LINKS */}
      <div className="tier-three">
        <div className="tier-three-container">
          <div 
            className="mobile-toggle-icon" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            &#9776;
          </div>

          <ul className={`main-nav-links ${isMobileOpen ? 'open-mobile' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => isActive ? "active-nav-item" : ""}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>

            {/* DROPDOWN NAVIGATION ITEM */}
            <li className="nav-dropdown-wrapper">
              <NavLink 
                to="/products" 
                className={({ isActive }) => `dropdown-trigger ${isActive ? "active-nav-item" : ""}`}
                onClick={closeMobileMenu}
              >
                Products <FiChevronDown className="dropdown-arrow-icon" />
              </NavLink>
              
              {/* Dropdown Menu Overlay */}
              <ul className="nav-dropdown-menu">
                <li>
                  <NavLink to="/products/cinnamon" onClick={closeMobileMenu}>
                    Ceylon Cinnamon
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/black-pepper" onClick={closeMobileMenu}>
                    Black Pepper
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/green-cardamom" onClick={closeMobileMenu}>
                    Green Cardamom
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/cloves" onClick={closeMobileMenu}>
                    Cloves
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/vanilla" onClick={closeMobileMenu}>
                    Vanilla
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/nutmeg" onClick={closeMobileMenu}>
                    Nutmeg
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink 
                to="/quality" 
                className={({ isActive }) => isActive ? "active-nav-item" : ""}
                onClick={closeMobileMenu}
              >
                Quality
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us" 
                className={({ isActive }) => isActive ? "active-nav-item" : ""}
                onClick={closeMobileMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact-us" 
                className={({ isActive }) => isActive ? "active-nav-item" : ""}
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;