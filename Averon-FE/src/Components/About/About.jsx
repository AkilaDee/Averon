import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about-wrapper'>
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className='about-right'>
            <h3>Our Story</h3>
            <h2>THE AVERON JOURNEY</h2>
            <p>Averon Supplies Ltd operates as a strategic bridge between the specialized spice gardens of Sri Lanka and the exacting requirements of the British food industry. 
              As a dedicated importer and primary wholesaler, the company is defined by a commitment to providing UK trade and wholesale customers with authentic Ceylon spices without compromise. 
              This heritage provides a distinct market advantage through an exclusive focus on premium-grade products recognized globally for their superior aroma, complex flavor profiles, 
              and inherent health properties. By managing a lean and transparent supply chain, Averon ensures that every consignment of cinnamon, cardamom, 
              and black pepper reaches its destination with the same freshness it possessed at the point of harvest. 

              In a global marketplace where purity is paramount, Averon Supplies Ltd represents institutional integrity by providing more than just raw ingredients. 
              The company provides a comprehensive sense of security through operations anchored by a robust and UK-compliant HACCP food safety system. 
              This infrastructure guarantees full traceability from the specific point of origin directly to the warehouse door of the client. 
              By aligning traditional cultivation with modern safety standards, the company serves as a reliable partner for organizations that prioritize transparency and long-term supply security.</p>

        </div>
    </div>
      <div className='about-bottom'>
          <p>As a vertically integrated entity, Averon Supplies Ltd is structured to redefine the spice supply chain by providing direct estate-to-enterprise access. 
            By operating an end-to-end model that encompasses cultivation, processing, and international logistics, 
            the company eliminates the inefficiencies and lack of transparency inherent in traditional multi-tiered brokerage. 
            These operations are centered on providing a secure and consistent pipeline for businesses that require high-specification raw ingredients. 
            By leveraging a localized infrastructure in the Southern Province of Sri Lanka to manage production at the source, 
            every consignment is verified against rigorous UK trade standards before leaving the origin. <br /><br />

            As a primary distributor, the company provides the UK food industry with the logistical reliability and technical documentation necessary for modern supply chain management. 
            This technical precision ensures that the reputation of a food manufacturer, high-end restaurant group, or boutique retailer is protected by the integrity of their raw materials. 
            Every shipment is delivered with trade-ready compliance including one hundred percent pure Ceylon origin guarantees, fully documented product specifications, 
            and batch-coded traceability. Through reliable UK distribution and ambient-stable bulk supplies tailored to specific inventory needs, 
            Averon Supplies Ltd continues to elevate the national culinary landscape one harvest at a time.</p>
      </div>
    </div>
  )
}

export default About
