import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

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
    // The backticks and ${} allow us to swap classes dynamically
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Averon Logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>What We Offer</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar