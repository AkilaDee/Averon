import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className='about-right'>
            <h3>Our Story</h3>
            <h2>THE AVERON JOURNEY</h2>
            <p>Averon Supplies Ltd is a vertically integrated primary importer and wholesale distributor specializing in premium Ceylon spices for the UK’s industrial, 
              manufacturing, and trade sectors. 
              Headquartered in the United Kingdom, the company was established to redefine the spice supply chain by providing direct, 
              estate-to-enterprise access. 
              By operating an end-to-end model that encompasses cultivation, processing, and international logistics, 
              Averon Supplies Ltd eliminates the inefficiencies and lack of transparency inherent in traditional multi-tiered brokerage.<br />

              Our operations are centered on providing a secure and consistent pipeline for businesses that require high-specification raw ingredients. 
              We leverage a localized infrastructure in Sri Lanka’s Southern Province to manage production at the source, 
              ensuring that every consignment meets rigorous UK trade standards before leaving the origin. 
              As a primary distributor, we provide the UK food industry with the logistical reliability and technical documentation necessary for modern supply chain management.<br />

              Today, Averon Supplies Ltd stands as a strategic partner to manufacturers and wholesalers who prioritize provenance and direct-from-origin integrity. 
              We remain committed to streamlining the journey of the world’s finest spices, 
              delivering them with the professional efficiency and regulatory compliance that the UK market demands.</p>

        </div>
      
    </div>
  )
}

export default About
