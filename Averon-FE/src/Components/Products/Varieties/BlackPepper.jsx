import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './BlackPepper.css';

// Asset Imports - Points directly to your pepper assets
import pepper_500 from '../../../assets/pepper500.webp';
import pepper from '../../../assets/pepper.webp';
import pepper_cracked from '../../../assets/pepper cracked.webp';
import pepper_ground from '../../../assets/pepper ground.webp';

const BlackPepper = () => {
  const specs = [
    { label: "Available Grades", value: "Whole 550 GL, Whole 500 GL, Cracked, Ground Powder" },
    { label: "Bulk Density (GL)", value: "500 grams/liter to 550+ grams/liter" },
    { label: "Moisture Content", value: "12% max" },
    { label: "Piperine Content", value: "6.0% - 7.5% (Significantly higher than competing origins)" },
    { label: "Non-Volatile Ether Extract", value: "6% min" }
  ];

  const applications = [
    { area: "Industrial Meat Processing", text: "High piperine content provides strong flavor retention throughout thermal processing cycles." },
    { area: "Spice Blending Houses", text: "Exceptional base material for commercial grinders, retail peppermills, and table blends." },
    { area: "Oleoresin Extraction", text: "High volatile oil yields make it highly efficient for chemical extraction of pure pepper oils." }
  ];

  const items = [
    { name: "Whole Black Pepper (550 GL)", desc: "High piperine content, robust berries perfect for retail packing and high-volume grinding.", img: pepper },
    { name: "Whole Black Pepper (500 GL)", desc: "Standard grade whole peppercorns suited for commercial blending.", img: pepper_500 },
    { name: "Black Pepper Cracked", desc: "Standard grade Cracked Black pepper.", img: pepper_cracked },
    { name: "Black Pepper Ground", desc: "Standard grade Black pepper powder.", img: pepper_ground }
  ];

  return (
    <div className="pepper-detail-page">
      <Helmet>
        <title>Ceylon Black Pepper | Averon Supplies Ltd</title>
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale and retail supply of single-origin Black Pepper. High-piperine whole peppercorns and variable mesh grinds for food manufacturers." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/black-pepper"/>
      </Helmet>
      

      {/* HERO SECTION CONTAINER */}
      <div className="pep-hero-split">
        <div className="pep-hero-content">
          <h1 className="pep-main-title">Black Pepper</h1>
          <p className="pep-scientific-name">Piper nigrum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="pep-large-description">
            <p>
              Sri Lankan Black Pepper (<strong>Piper nigrum</strong>) is globally renowned for possessing significantly higher piperine concentrations compared to alternative origins. Sourced directly from our trusted agricultural networks across sri lanka, our berries are harvested at peak maturity from fertile mid-country plantations where unique tropical rainfall patterns and rich soil profiles naturally maximize chemical density.
              The cultivation of true ceylon black pepper requires immense generational expertise and an uncompromising commitment to traditional agricultural standards. Unlike mass-produced alternatives that sacrifice quality for speed, our farming partners manage every stage of the crop lifecycle with meticulous care.

The harvested green berries undergo a carefully controlled blanching and sun-drying process, activating uniform enzymatic browning that gives the peppercorns their deep black, deeply wrinkled outer pericarp. Every batch captures the true essence of a premier ceylon spice, elevating it far above standard commercial grades found in mass-market retail channels.
            </p>
            <p>
              The definitive competitive edge of our pepper lies in its superior bulk density, consistently measuring between 500 and 550+ grams per liter (GL). This high metric indicates dense, fully developed, solid kernels with virtually zero hollow light berries or unwanted pinheads.

This structural superiority delivers a biting, intensely pungent flavor profile accompanied by a bold, aromatic essential oil kick. Because of this rich natural concentration, our peppercorns hold up beautifully under harsh commercial processing conditions without losing their distinctive aroma or heat.
            </p>
            <p className="pep-highlight-para">
              For industrial spice extractors, commercial meat packers, and high-end blending houses, this high-piperine yield translates directly into superior process efficiency. It requires lower raw material weights during oleoresin extraction and mass production, saving both time and money for large-scale operations.

Our advanced physical cleaning, rigorous metal detection, and strict moisture monitoring protocols ensure a remarkably clean product that is fully ready for direct-to-grinder applications in international food manufacturing facilities.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="pep-section-subheading">Technical Specifications</h2>
          <table className="pep-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="pep-table-row">
                  <td className="pep-spec-label">{spec.label}</td>
                  <td className="pep-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="pep-hero-image-wrapper">
          <img src={pepper_500} alt="Black Pepper Processing" className="pep-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="pep-applications-block">
        <h3 className="pep-apps-heading">Primary Industry Applications</h3>
        <div className="pep-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="pep-app-card">
              <h4 className="pep-app-card-title">{app.area}</h4>
              <p className="pep-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="pep-grades-section">
        <h2 className="pep-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="pep-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="pep-grade-card">
              <div className="pep-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="pep-grade-thumb" />
                <h3 className="pep-grade-name">{item.name}</h3>
              </div>
              <p className="pep-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlackPepper;