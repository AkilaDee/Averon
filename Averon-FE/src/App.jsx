import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { CartProvider } from './Components/Sale/CartContext';

// Normal imports (used on homepage - load immediately)
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Offers from './Components/Offers/Offers';
import ResourceHub from './Components/ResourceHub/ResourceHub';
import Footer from './Components/Footer/Footer';

// Lazy loaded (only load when user visits that page)
const Cinnamon = lazy(() => import('./Components/Products/Varieties/Cinnamon'));
const Quality = lazy(() => import('./Components/Quality/Quality'));
const Title = lazy(() => import('./Components/Title/Title'));
const About = lazy(() => import('./Components/About/About'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Products = lazy(() => import('./Components/Products/Products'));
const SupplyChain = lazy(() => import('./Components/SupplyChain/SupplyChain'));
const BlackPepper = lazy(() => import('./Components/Products/Varieties/BlackPepper'));
const Cardamom = lazy(() => import('./Components/Products/Varieties/GreenCardamom'));
const Cloves = lazy(() => import('./Components/Products/Varieties/Cloves'));
const Vanilla = lazy(() => import('./Components/Products/Varieties/Vanilla'));
const Nutmeg = lazy(() => import('./Components/Products/Varieties/Nutmeg'));
const SearchResults = lazy(() => import('./Components/SearchResults/SearchResults'));
const SourcingRegions = lazy(() => import('./Components/SourcingRegions/SourcingRegions'));
const Processing = lazy(() => import('./Components/Processing/Processing'));
const Certifications = lazy(() => import('./Components/Certifications/Certifications'));
const TermsOfBusiness = lazy(() => import('./Components/TermsOfBusiness/TermsOfBusiness'));
const Sale = lazy(() => import('./Components/Sale/Sale'));
const Insights = lazy(() => import('./Components/Insights/Insights'));
const CinnamonSuperfoodGuide = lazy(() => import('./Components/Insights/Articles/CeylonCinnamonSuperfoodGuide'));
const CeylonCinnamonCapsuleDosageGuide = lazy(() => import('./Components/Insights/Articles/CeylonCinnamonCapsuleDosageGuide'));
const BestCeylonCinnamonCapsulesGuide = lazy(() => import('./Components/Insights/Articles/BestCeylonCinnamonCapsulesGuide'));
const OrganicCeylonCinnamonBenefits = lazy(() => import('./Components/Insights/Articles/OrganicCeylonCinnamonBenefits'));
const UnlockCeylonCinnamonBenefits = lazy(() => import('./Components/Insights/Articles/UnlockCeylonCinnamonBenefits'));
const WhatIsAlbaGrade = lazy(() => import('./Components/Insights/Articles/WhatIsAlbaGrade'));
const IdentifyCeylonCinnamon = lazy(() => import('./Components/Insights/Articles/TrueCinnamonVsCassia'));
const WhatIsCoumarin = lazy(() => import('./Components/Insights/Articles/WhatIsCoumarin'));
const LeadandPesticideTesting = lazy(() => import('./Components/Insights/Articles/LeadandPesticideTesting'));
const CinnamonGradingExplained = lazy(() => import('./Components/Insights/Articles/CinnamonGradingExplained'));
const WhyCeylonCinnamon = lazy(() => import('./Components/Insights/Articles/WhyCeylonCinnamon'));

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
        <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          <Routes>

            <Route path="/" element={
              <>
                <main>
                  <Hero />
                  <div className="container">
                    <Offers />
                    <ResourceHub />
                  </div>
                </main>
                <Footer />
              </>
            } />

            <Route path="/sale" element={
              <>
                <main><Sale /></main>
                <Footer />
              </>
            } />

            <Route path="/search" element={
              <>
                <main><SearchResults /></main>
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
                <main><About setPlayState={setPlayState}/></main>
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

            <Route path="/insights" element={
              <>
                <main><Insights /></main>
                <Footer />
              </>
            } />
            <Route path="/insights/ceylon-cinnamon-superfood" element={
              <>
                <main><CinnamonSuperfoodGuide /></main>
                <Footer />
              </>
            } />
            <Route path="/insights/ceylon-cinnamon-benefits" element={
              <>
                <main><UnlockCeylonCinnamonBenefits /></main>
                <Footer />
              </>
            } />

             <Route path="/insights/ceylon-cinnamon-capsules" element={
              <>
                <main><BestCeylonCinnamonCapsulesGuide /></main>
                <Footer />
              </>
            } />

             <Route path="/insights/organic-ceylon-cinnamon" element={
              <>
                <main><OrganicCeylonCinnamonBenefits /></main>
                <Footer />
              </>
            } />
            <Route path="/insights/ceylon-cinnamon-dosage-guide" element={
              <>
                <main><CeylonCinnamonCapsuleDosageGuide /></main>
                <Footer />
              </>
            } />
            <Route path="/insights/alba-grade-cinnamon" element={
              <>
                <main><WhatIsAlbaGrade /></main>
                <Footer />
              </>
            } />

            <Route path="/insights/ceylon-cinnamon-vs-cassia" element={
              <>
                <main><IdentifyCeylonCinnamon /></main>
                <Footer />
              </>
            } />

            <Route path="/insights/coumarin-in-cinnamon" element={
              <>
                <main><WhatIsCoumarin /></main>
                <Footer />
              </>
            } />

            <Route path="/insights/ceylon-cinnamon-testing" element={
              <>
                <main><LeadandPesticideTesting /></main>
                <Footer />
              </>
            } />

            <Route path="/insights/ceylon-cinnamon-grading" element={
              <>
                <main><CinnamonGradingExplained /></main>
                <Footer />
              </>
            } />

            <Route path="/insights/ceylon-cinnamon-origin" element={
              <>
                <main><WhyCeylonCinnamon /></main>
                <Footer />
              </>
            } />

            <Route path="/supply-chain" element={
              <>
                <main><SupplyChain /></main>
                <Footer />
              </>
            } />

            <Route path="/products/ceylon-cinnamon" element={
              <>
                <main><Cinnamon /></main>
                <Footer />
              </>
            } />

            <Route path="/products/black-pepper" element={
              <>
                <main><BlackPepper /></main>
                <Footer />
              </>
            } />

            <Route path="/products/cloves" element={
              <>
                <main><Cloves /></main>
                <Footer />
              </>
            } />

            <Route path="/products/green-cardamom" element={
              <>
                <main><Cardamom /></main>
                <Footer />
              </>
            } />

            <Route path="/products/vanilla" element={
              <>
                <main><Vanilla /></main>
                <Footer />
              </>
            } />

            <Route path="/products/nutmeg" element={
              <>
                <main><Nutmeg /></main>
                <Footer />
              </>
            } />

            <Route path="/sourcing-regions" element={
              <>
                <main><SourcingRegions /></main>
                <Footer />
              </>
            } />

            <Route path="/processing" element={
              <>
                <main><Processing /></main>
                <Footer />
              </>
            } />

            <Route path="/certifications" element={
              <>
                <main><Certifications /></main>
                <Footer />
              </>
            } />

            <Route path="/terms-of-business" element={
              <>
                <main><TermsOfBusiness /></main>
                <Footer />
              </>
            } />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;