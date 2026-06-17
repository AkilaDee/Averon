import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
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
import Cinnamon from './Components/Products/Varieties/Cinnamon';
import BlackPepper from './Components/Products/Varieties/BlackPepper';
import Cardamom from './Components/Products/Varieties/GreenCardamom';
import Cloves from './Components/Products/Varieties/Cloves';
import Vanilla from './Components/Products/Varieties/Vanilla';
import Nutmeg from './Components/Products/Varieties/Nutmeg';
import SearchResults from './Components/SearchResults/SearchResults';
import SourcingRegions from './Components/SourcingRegions/SourcingRegions';
import Processing from './Components/Processing/Processing';
import Certifications from './Components/Certifications/Certifications';
import TermsOfBusiness from './Components/TermsOfBusiness/TermsOfBusiness';
import { CartProvider } from './Components/Sale/CartContext';
import Sale from './Components/Sale/Sale';

const ScrollHandler = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state && state.scrollTo) {
      const timer = setTimeout(() => {
        scroller.scrollTo(state.scrollTo, {
          duration: 500,
          smooth: true,
          offset: -150,
        });
      }, 100);
      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <main>
                <Hero />
                <div className="container">
                  <Offers />
                </div>
              </main>
              <Footer />
            </>
          } />

          <Route path="/sale" element={
            <>
              <main>
                <Sale />
              </main>
              <Footer />
            </>
          } />

          <Route path="/search" element={
            <>
              <main>
                <SearchResults />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products" element={
            <>
              <main>
                <Title subTitle='OUR CATALOGUE' title='Exceptional Quality in Every Batch'/>
                <Products />
              </main>
              <Footer />
            </>
          } />

          <Route path="/about-us" element={
            <>
              <main>
                <About setPlayState={setPlayState}/>
              </main>
              <Footer />
            </>
          } />

          <Route path="/contact-us" element={
            <>
              <main>
                <Title subTitle='CONTACT US' title='Get in Touch'/>
                <Contact />
              </main>
              <Footer />
            </>
          } />

          <Route path="/quality" element={
            <>
              <main>
                <Title subTitle='EXCEPTIONAL QUALITY' title='Rigorous Standards, Fully Compliant'/>
                <Quality />
              </main>
              <Footer />
            </>
          } />

          <Route path="/supply-chain" element={
            <>
              <main>
                <SupplyChain />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/ceylon-cinnamon" element={
            <>
              <main>
                <Cinnamon />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/black-pepper" element={
            <>
              <main>
                <BlackPepper />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/cloves" element={
            <>
              <main>
                <Cloves />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/green-cardamom" element={
            <>
              <main>
                <Cardamom />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/vanilla" element={
            <>
              <main>
                <Vanilla />
              </main>
              <Footer />
            </>
          } />

          <Route path="/products/nutmeg" element={
            <>
              <main>
                <Nutmeg />
              </main>
              <Footer />
            </>
          } />

          <Route path="/sourcing-regions" element={
            <>
              <main>
                <SourcingRegions />
              </main>
              <Footer />
            </>
          } />

          <Route path="/processing" element={
            <>
              <main>
                <Processing />
              </main>
              <Footer />
            </>
          } />

          <Route path="/certifications" element={
            <>
              <main>
                <Certifications />
              </main>
              <Footer />
            </>
          } />

          <Route path="/terms-of-business" element={
            <>
              <main>
                <TermsOfBusiness />
              </main>
              <Footer />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;