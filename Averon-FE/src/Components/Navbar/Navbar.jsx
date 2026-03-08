import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
    
  const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  useEffect(() => {
    // We create a function to handle the logic
    const handleScroll = () => {
      // window must be lowercase. scrollY is the standard property.
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // CLEANUP: Removes the listener when you navigate away 
    // This prevents your site from getting slow
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      
      {/* Left Column: Full Height Logo */}
      <img src={logo} alt="Averon Logo" className='logo' />

      {/* Right Column: Stacked Contact and Tabs */}
      <div className="nav-right-side">
        <div className="nav-contact-info">
          <span>📞 +44 7344469729</span>
          <span>📧 info@averonsupplies.co.uk</span>
        </div>

        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='offers' smooth={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='products' smooth={true} offset={-260} duration={500}>Catalogue</Link></li>
          <li><Link to='quality' smooth={true} offset={-260} duration={500}>Quality</Link></li>
          <li><Link to='about' smooth={true} offset={-125} duration={500}>Our Story</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        </ul>
      </div>

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
)
}

export default Navbar