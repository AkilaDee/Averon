import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle='Our Products' title='What We Offer'/>
          <Offers />
          <About/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact />
        </div>
    </div>
  )
}

export default App
