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

  // THE KEY LOGIC:
  // This function will manually force a redirect if we aren't on the home page.
  const handleNav = (target) => {
    if (!isHomePage) {
      navigate(`/#${target}`);
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
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      
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
            <Link to='hero' smooth={true} offset={0} duration={500} onClick={() => handleNav('hero')}>
              Home
            </Link>
          </li>
          <li>
            <Link to='offers' smooth={true} offset={-220} duration={500} onClick={() => handleNav('offers')}>
              Services
            </Link>
          </li>
          <li>
            <Link to='products' smooth={true} offset={-230} duration={500} onClick={() => handleNav('products')}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link to='quality' smooth={true} offset={-600} duration={500} onClick={() => handleNav('quality')}>
              Quality
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} offset={-125} duration={500} onClick={() => handleNav('about')}>
              Our Story
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} offset={-260} duration={500} onClick={() => handleNav('contact')}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar