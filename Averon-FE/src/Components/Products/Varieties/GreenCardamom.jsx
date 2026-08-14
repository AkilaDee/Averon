import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './GreenCardamom.css';

// Asset Imports - Points directly to your cardamom assets
import cardamom from '../../../assets/cardamom.webp';
import cardamom_ground from '../../../assets/cardamom ground.webp';

const GreenCardamom = () => {
  const specs = [
    { label: "Available Grades", value: "Jumbo Green Cardamom (LG), Fine Ground Powder" },
    { label: "Pod Size Profile", value: "7mm - 8mm+ calibrated pods" },
    { label: "Moisture Content", value: "11% max" },
    { label: "Volatile Oil Content", value: "3.5% - 5.0% v/w (Rich in cineole and limonene)" },
    { label: "Color Specification", value: "Deep, natural green (No artificial color enhancement)" }
  ];

  const applications = [
    { area: "Beverage Infusions", text: "Essential for traditional chai blends, specialty coffees, and botanical craft brewing." },
    { area: "Nordic & Middle Eastern Cuisine", text: "Whole pods optimized for long shelf-life distributions in fine catering and retail packing." },
    { area: "Perfumery & Aromatherapy", text: "Raw material source for high-grade essential oil steam distillers." }
  ];

  const items = [
    { name: "Jumbo Green Cardamom (LG)", desc: "Large, bright green pods packed with essential oils and intense fragrance.", img: cardamom },
    { name: "Green Cardamom Ground", desc: "100% Pure, finely milled green cardamom seeds with full oil retention.", img: cardamom_ground }
  ];

  return (
    <div className="cardamom-detail-page">
      <Helmet>
        <title>Ceylon Green Cardamom | Averon Supplies Ltd</title>
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale and retail supply of green cardamom pods. Bulk container-load sourcing for industrial food processors, spice millers, and packers." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/green-cardamom"/>
      </Helmet>

      {/* HERO SECTION CONTAINER */}
      <div className="card-hero-split">
        <div className="card-hero-content">
          <h1 className="card-main-title">Green Cardamom</h1>
          <p className="card-scientific-name">Elettaria cardamomum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="card-large-description">
            <p>
              Green Cardamom (<strong>Elettaria cardamomum</strong>) is globally renowned for possessing significantly higher aromatic oil concentrations and complex flavor profiles compared to alternative origins around the world. Sourced directly from the humid, canopy-shaded hill countries of sri lanka, our green cardamom pods represent a pinnacle tier of botanical purity and agricultural craftsmanship.

The cultivation of authentic Elettaria cardamomum requires meticulous generational expertise and an uncompromising commitment to traditional harvesting standards. Unlike mass-produced alternatives that sacrifice quality for speed, our farming partners manage every stage of the green cardamom crop lifecycle with absolute precision.

The green cardamom pods are individually hand-picked at precise maturity thresholds just before they naturalize and open, ensuring that the intensely fragrant internal black seeds remain completely sealed, unexposed to air, and fully saturated with volatile essential oils rich in cineole and limonene. Every single batch captures the true, unadulterated essence of a premier ceylon spice and authentic tropical harvesting, elevating it far above standard commercial grades found in mass-market retail channels.
            </p>
            <p>
              Following harvest, the green cardamom pods are immediately transferred to drying process. This rapid, non-chemical drying process locks in the vibrant, deep green chlorophyll pigmentation while permanently sealing the pod structure against moisture ingress. We strictly avoid the use of artificial colorants, bleaching agents, or chemical preservatives, offering an entirely natural product that complies cleanly with international green-label regulations.

Our jumbo green cardamom and cardamom pods are meticulously sorted to isolate only plump, uniform pods measuring 7mm to 8mm and above, ensuring an uncompromised aesthetic presentation for retail packs. This structural superiority delivers an intensely cooling, sweet-spicy, and highly floral cardamom aroma profile accompanied by a bold, pungent punch. Because of this rich natural concentration and robust volatile oil content, our pods hold up beautifully under commercial processing and storage conditions without losing their distinctive fragrance or complex structural integrity.
            </p>
            <p className="card-highlight-para">
              For fine Scandinavian baking networks, artisan pastry chefs, and gourmet beverage infusers seeking the finest green cardamom, this superior concentration of natural cineole and limonene translates into an unmatched flavor release. Whether this green cardamom is crushed into traditional spiced breads, infused into rich artisanal coffees, or utilized by global aromatherapy extraction labs to capture exotic fragrance notes, our green cardamom delivers a potent, multi-layered sensory experience.

Our rigorous sizing protocols and strict moisture monitoring ensure a remarkably clean, green cardamom spice that is fully ready for high-end retail packaging and demanding industrial manufacturing across Europe, North America, and beyond.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="card-section-subheading">Technical Specifications</h2>
          <table className="card-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="card-table-row">
                  <td className="card-spec-label">{spec.label}</td>
                  <td className="card-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="card-hero-image-wrapper">
          <img src={cardamom} alt="Green Cardamom Pods" className="card-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="card-applications-block">
        <h3 className="card-apps-heading">Primary Industry Applications</h3>
        <div className="card-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="card-app-card">
              <h4 className="card-app-card-title">{app.area}</h4>
              <p className="card-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="card-grades-section">
        <h2 className="card-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="card-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="card-grade-card">
              <div className="card-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="card-grade-thumb" />
                <h3 className="card-grade-name">{item.name}</h3>
              </div>
              <p className="card-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GreenCardamom;