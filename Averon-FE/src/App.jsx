import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added Routes to import
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

// 1. Create a placeholder for your new page (or import it if you made a file)
// const SupplyChainPage = () => <div style={{padding: '100px'}}><h1>Supply Chain Details Coming Soon</h1></div>;

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
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
              <Footer />
            </div>
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