import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  // FIXED LOGIC BLOCK:
  // We explicitly intercept the event 'e' to prevent the browser from appending the '#' symbol.
  // Then we silently pass the scroll destination behind the scenes via history state.
  const handleNav = (e, target) => {
    setMobileMenu(false); // Clean up layout: closes the mobile menu automatically upon selection
    
    if (!isHomePage) {
      e.preventDefault(); // CRITICAL: Blocks the standard anchor hash append action
      navigate('/', { state: { scrollTo: target } });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Base class layout forces permanent solid background; sticky handles optional sizing shifts */
    <nav className={`container nav ${sticky ? 'dark-nav' : ''}`}>
      
      <img 
        src={logo} 
        alt="Averon Logo" 
        className='logo' 
        onClick={() => navigate('/')} 
        style={{cursor: 'pointer'}} 
      />

      <div className="nav-right-side">
        <div className="nav-contact-info">
          <span>📞 +44 7344469729</span>
          <span>📧 info@averonsupplies.co.uk</span>
        </div>

        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={500} onClick={(e) => handleNav(e, 'hero')}>
              Home
            </Link>
          </li>
          <li>
            <Link to='offers' smooth={true} offset={-220} duration={500} onClick={(e) => handleNav(e, 'offers')}>
              Services
            </Link>
          </li>
          <li>
            <Link to='products' smooth={true} offset={-230} duration={500} onClick={(e) => handleNav(e, 'products')}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link to='quality' smooth={true} offset={-600} duration={500} onClick={(e) => handleNav(e, 'quality')}>
              Quality
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} offset={-125} duration={500} onClick={(e) => handleNav(e, 'about')}>
              Our Story
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} offset={-260} duration={500} onClick={(e) => handleNav(e, 'contact')}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar;