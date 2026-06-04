import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Quality.css'

import quality_img1 from '../../assets/harvest_field.jpg' 
import quality_img2 from '../../assets/processing_drying.jpg'

const Quality = () => {
  return (
    <div className='quality-page-container'>
      <Helmet>
        <title>Spice Quality Assurance & Food Safety Compliance | Averon Supplies</title>
        <meta 
          name="description" 
          content="Our rigorous spice quality control protocols ensure food-grade compliance. Access Certificates of Analysis (CoA), laboratory testing, and microbial purity data." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/quality" />
      </Helmet>

      <h1 className="quality-main-title">Quality</h1>

      {/* ROW 1: What We Offer & Sourcing Method */}
      <div className="quality-split-row">
        <div className="quality-text-block">
          <p className="highlight-lead-text">
            <strong>Do you have any questions for our category experts regarding a certain product? Talk to the team today on <span className="text-link">info@averonsupplies.co.uk</span> or +44 7344469729.</strong>
          </p>
          
          <p>
            Averon Supplies provides contract and container-load wholesale distribution of single-origin spices. We secure initial crop allocations directly from source networks in Sri Lanka, manage international freight logistics, and handle UK customs clearance to deliver your inventory straight to your manufacturing facilities.
          </p>
          
          <p>
            We supply verified raw materials on fixed-price contracts to help commercial clients lock in predictable material margins for ahead-of-time planning.
          </p>

          <h2>Direct Ground-Level Partnerships</h2>
          <p>
            We operate through close partnerships with established agricultural estates and family plantations. This structural setup gives us hands-on oversight of raw product collection, local processing conditions, and operational standards at the origin level before goods are dispatched for maritime transport.
          </p>

          <a href="/contact-us" className="enquire-now-btn">ENQUIRE NOW</a>
        </div>

        <div className="quality-image-block">
          <img src={quality_img1} alt="Averon Supplies Estate Sourcing" className="editorial-img" />
        </div>
      </div>

      {/* ROW 2: Quality Inspection & Compliance Execution */}
      <div className="quality-split-row reverse-row">
        <div className="quality-image-block">
          <img src={quality_img2} alt="Spice processing and quality tracking" className="editorial-img-tall" />
        </div>

        <div className="quality-text-block">
          <h2>Regulatory & Food Safety Operations</h2>
          <p>
            Averon Supplies Ltd is registered as a Food Business Operator (FBO) with our local authority and operates under the enforcement guidelines of the UK Food Standards Agency (FSA). Every batch imported is processed through structured safety checks to ensure standard commercial hygiene.
          </p>
          <p>
            Our storage facility and inventory paths run on a defined HACCP (Hazard Analysis and Critical Control Point) system. We systematically log intake metrics, control ambient environment variables, and verify batch security during distribution.
          </p>

          <h2>Traceability Realization & Documentation</h2>
          <p>
            We run a one step back, one step forward traceability loop on every shipment. Every single consignment is mapped and backed by specific origin paperwork, tracking product steps cleanly from regional farms down to final delivery points.
          </p>
          <p>
            We supply non-irradiated, 100% pure spice grades without additive fillers. Full Technical Specification Sheets, comprehensive microbiological analyses, and moisture level printouts are systematically compiled and issued upon trade request.
          </p>

          {/* <div className="compliance-badges-footer">
            <span className="badge-logo">HACCP Compliant</span>
            <span className="badge-logo">FSA Registered</span>
            <span className="badge-logo">Sedex Member</span>
            <span className="badge-logo">Single-Origin</span>
          </div> */}
        </div>
      </div>

      {/* BOTTOM SECTION: Core Quality & Compliance Details */}
      <div className='qualities-bottom-section'>
          <div className='quality-detail-card'>
              <h2>UK Food Business Excellence</h2>
              <p>Averon Supplies Ltd is a registered Food Business Operator (FBO) with our local authority. 
                We operate in full compliance with UK Food Standards Agency (FSA) regulations, 
                ensuring that every spice in our catalogue meets the highest safety and hygiene criteria.
              </p>
          </div>
          
          <div className='quality-detail-card'>
              <h2>HACCP-Based Safety Systems</h2>
              <p>Your safety is our priority. Our facility and supply chain are governed by a robust HACCP (Hazard Analysis and Critical Control Point) system. 
                We meticulously monitor every stage from intake and ambient storage to final dispatch to eliminate risks and maintain product integrity.
              </p>
          </div>
          
          <div className='quality-detail-card'>
              <h2>Full Traceability & Transparency</h2>
              <p>We maintain a strict one step back, one step forward traceability protocol. Every batch of our Ceylon spices is fully documented, 
                allowing us to trace products back to the specific estate and harvest in Sri Lanka. 
                This ensures complete transparency for your internal audits.
              </p>
          </div>
          
          <div className='quality-detail-card'>
              <h2>Purity & Specification Guarantee</h2>
              <p>All products are 100% pure, non-irradiated, and free from fillers or artificial additives. Detailed Technical Specification Sheets 
                (including microbiological analysis and moisture levels) are available for all products upon request.
              </p>
          </div>
      </div>

    </div>
  )
}

export default Quality