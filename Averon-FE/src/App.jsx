import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll'; // Import the scroller tool
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Quality from './Components/Quality/Quality';
import Offers from './Components/Offers/Offers';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import SupplyChain from './Components/SupplyChain/SupplyChain';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

// This component ensures that every time the URL changes, we handle scrolling
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a #hash in the URL (like #offers), scroll to it
      const target = hash.replace('#', '');
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset: -150, // Matches your Navbar height/offset
      });
    } else {
      // If there is no hash, just scroll to the top of the new page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
      {/* This invisible component handles all the "jump to section" logic */}
      <ScrollHandler /> 
      
      <Navbar />
      <Routes>
        {/* LANDING PAGE ROUTE */}
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Title subTitle='SERVICES' title='Premium Ceylon Spices for Wholesale'/>
              <Offers />
              <Title subTitle='OUR CATALOGUE' title='Exceptional Quality in Every Batch'/>
              <Products />
              <Title subTitle='EXCEPTIONAL QUALITY' title='Rigorous Standards, Fully Compliant'/>
              <Quality />
              <About setPlayState={setPlayState}/>
              <Title subTitle='CONTACT US' title='Get in Touch'/>
              <Contact />
            </div>
              <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>
          </>
        } />

        {/* SUPPLY CHAIN ROUTE */}
        <Route path="/supply-chain" element={<SupplyChain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;