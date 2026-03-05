import React from 'react'
import './Quality.css'


const quality = () => {
  return (
    <div className='qualities'>
        <div className='quality'>
            <h2>UK Food Business Excellence</h2>
            <br />
            <p>Averon Supplies Ltd is a registered Food Business Operator (FBO) with our local authority. 
              We operate in full compliance with UK Food Standards Agency (FSA) regulations, 
              ensuring that every spice in our catalogue meets the highest safety and hygiene criteria.
            </p>
        </div>
        <div className='quality'>
            <h2>HACCP-Based Safety Systems</h2>
            <br />
            <p>Your safety is our priority. Our facility and supply chain are governed by a robust HACCP (Hazard Analysis and Critical Control Point) system. 
              We meticulously monitor every stage from intake and ambient storage to final dispatch to eliminate risks and maintain product integrity.
            </p>
        </div>
        <div className='quality'>
            <h2>Full Traceability</h2>
            <br />
            <p>We maintain a strict one step back, one step forward traceability protocol. Every batch of our Ceylon spices is fully documented, 
              allowing us to trace products back to the specific estate and harvest in Sri Lanka. 
              This ensures complete transparency for your internal audits.
            </p>
        </div>
        <div className='quality'>
            <h2>Purity & Specification Guarantee</h2>
            <br />
            <p>All products are 100% pure, non-irradiated, and free from fillers or artificial additives. Detailed Technical Specification Sheets 
              (including microbiological analysis and moisture levels) are available for all products upon request.
            </p>
        </div>
    </div>
  )
}

export default quality
