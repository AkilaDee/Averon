import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>

        </div>
        <div className='about-right'>
            <h3>About Us</h3>
            <h2>Premium spice wholeseller</h2>
            <p>At Averon Supplies Ltd, we bridge the gap between the lush spice gardens of Sri Lanka and the exacting standards of the UK food industry. As a specialist importer and wholesaler, our mission is simple: to provide UK trade and wholesale customers with the world’s finest authentic Ceylon spices without compromise.

            Our Heritage, Your Advantage
            We specialize exclusively in premium-grade Ceylon spices, renowned globally for their superior aroma, complex flavor profiles, and health-giving properties. By sourcing directly and maintaining a lean, transparent supply chain, we ensure that every batch of cinnamon, cardamom, and black pepper arriving at your facility is as fresh as the day it was harvested.

            Quality You Can Trust
            In an industry where purity is paramount, Averon Supplies Ltd stands for integrity. We don’t just supply spices; we provide peace of mind. Our operations are anchored by a robust, UK-compliant HACCP food safety system, ensuring full traceability from the point of origin to your warehouse door.

            The Wholesale Partner for Your Business
            Whether you are a food manufacturer requiring consistent raw ingredients, a high-end restaurant group, or a boutique retailer, we understand that your reputation depends on the quality of your ingredients. We offer:

            100% Pure Ceylon Origin: No fillers, no additives.

            Trade-Ready Compliance: Fully documented product specifications and batch-coded traceability.

            Reliable UK Distribution: Ambient-stable, bulk supply tailored to your inventory needs.

            Averon Supplies Ltd: Elevating the UK’s culinary landscape, one harvest at a time.</p>

        </div>
      
    </div>
  )
}

export default About
