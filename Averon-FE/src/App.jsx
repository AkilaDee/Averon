import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle='Our' title='What We Offer'/>
          <Offers />
          <Title subTitle='Our Products' title='Products'/>
          <Products />
          <About/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact />
          <Footer />
        </div>
    </div>
  )
}

export default App
