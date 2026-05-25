import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
// import { Helmet } from 'react-helmet-async';
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
import Cinnamon from './Components/Products/Varieties/Cinnamon';
import BlackPepper from './Components/Products/Varieties/BlackPepper';
import Cardamom from './Components/Products/Varieties/Cardamom';
import Cloves from './Components/Products/Varieties/Cloves';
import Vanilla from './Components/Products/Varieties/Vanilla';
import Nutmeg from './Components/Products/Varieties/Nutmeg';

// FIX: Intercepts background route states so the page scrolls cleanly without relying on # hashes in the URL bar
const ScrollHandler = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // 1. Check if a hidden cross-page scroll instruction was passed from the Navbar
    if (state && state.scrollTo) {
      // Small delay allows the homepage elements to completely mount before animating the scroll
      const timer = setTimeout(() => {
        scroller.scrollTo(state.scrollTo, {
          duration: 500,
          smooth: true,
          offset: -150, // Keeps section headings from being obscured by your fixed navbar
        });
      }, 100);

      // Clean history tracking instantly so reloading the page doesn't re-trigger unwanted scrolling
      window.history.replaceState({}, document.title);
      
      return () => clearTimeout(timer);
    } else {
      // 2. Default step for normal page routes (resets viewport position instantly back to the top)
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
      <ScrollHandler /> 
      <Navbar />
      <Routes>
        {/* LANDING PAGE ROUTE */}
        <Route path="/" element={
          <>
            {/* <Helmet>
              <title>Averon Supplies Ltd | Premium Ceylon Cinnamon & Sri Lankan Spices UK</title>
              <meta name="description" content="UK-based direct importer of premium Ceylon Cinnamon and Sri Lankan spices. We grow and manufacture on our own estates to ensure full traceability and consistent quality for B2B and wholesale." />
            </Helmet> */}
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
        
        {/* FIXED WHOLESALE SPICE SUB-ROUTES */}
        <Route path="/products/cinnamon" element={<Cinnamon />} />
        <Route path="/products/pepper" element={<BlackPepper />} /> 
        <Route path="/products/cloves" element={<Cloves />} />
        <Route path="/products/cardamom" element={<Cardamom />} />
        <Route path="/products/vanilla" element={<Vanilla />} />
        <Route path="/products/nutmeg" element={<Nutmeg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;