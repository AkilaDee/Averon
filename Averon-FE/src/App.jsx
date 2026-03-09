import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Quality from './Components/Quality/Quality'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default App
