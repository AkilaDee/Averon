import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>PREMIUM CEYLON SPICES</h1>
            <p className="summary-text">Expertly Graded. Sustainably Harvested. Delivered at Peak Freshness.</p>
            <br />
            {/* <h3>Our spices are sourced from manufacturers from sri lanka who produce premium spices</h3> */}
            <button className='btn-hero'>Request Sample<img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
