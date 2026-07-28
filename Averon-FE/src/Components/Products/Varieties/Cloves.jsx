import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Cloves.css';

// Asset Imports - Points directly to your cloves assets
import cloves from '../../../assets/cloves.webp';
import cloves_ground from '../../../assets/cloves ground.webp';

const Cloves = () => {
  const specs = [
    { label: "Available Grades", value: "Hand-Picked Premium Whole Cloves, Premium Ground" },
    { label: "Headless Units", value: "< 1.0% max" },
    { label: "Moisture Content", value: "10% max" },
    { label: "Eugenol Oil Content", value: "16% - 20% v/w (Industry-leading potency)" },
    { label: "Extraneous Matter", value: "< 0.5% max" }
  ];

  const applications = [
    { area: "Customs-Regulated Preservation", text: "Highly potent natural antimicrobial and antioxidant properties used in clean-label curing." },
    { area: "Dental & Pharmaceutical Formulation", text: "High eugenol baseline makes it ideal for top-tier oral care extraction and topical therapeutics." },
    { area: "Savory Brines & Sauces", text: "Thick-bodied whole cloves that hold structural integrity during industrial pickling processes." }
  ];

  const items = [
    { name: "Hand-Picked Premium Cloves", desc: "Whole, full-headed cloves with zero headless units, exceptionally high in eugenol oil.", img: cloves },
    { name: "Premium Cloves Ground", desc: "100% Pure, finely milled cloves with maximum aromatic oil retention.", img: cloves_ground }
  ];

  return (
    <div className="cloves-detail-page">
      <Helmet>
        <title>Wholesale Cloves Bulk Supply | Averon Supplies</title>
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale supply of premium Ceylon Cloves. High eugenol whole hand-picked (HPS) and commercial grades for industrial food manufacturers." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/cloves" hreflang="en-GB"/>
      </Helmet>

      {/* HERO SECTION CONTAINER */}
      <div className="clv-hero-split">
        <div className="clv-hero-content">
          <h1 className="clv-main-title">Cloves</h1>
          <p className="clv-scientific-name">Syzygium aromaticum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="clv-large-description">
            <p>
              Ceylon Cloves (<strong>Syzygium aromaticum</strong>) are globally renowned for possessing significantly higher eugenol oil concentrations and complex aromatic profiles compared to alternative origins around the world. Sourced directly from ancient spice gardens spanning the mid-elevation hillsides of sri lanka, our cloves represent a pinnacle tier of botanical purity and agricultural craftsmanship.

The cultivation of authentic cloves requires meticulous generational expertise and an uncompromising commitment to traditional harvesting standards. Unlike mass-produced alternatives that sacrifice quality for speed, our farming partners manage every stage of the cloves crop lifecycle with absolute precision.

Our premium ceylon cloves are harvested during the optimal dry winter windows from ancient spice gardens. The unopened flower buds are hand-picked when they transition from green to a vibrant pinkish-red, capturing them at the exact physiological moment when their eugenol content peaks. The buds are then carefully hand-separated from their clusters and shade-dried on clean platforms until they turn a deep, rich dark brown with lighter crown tips. Every single batch captures the true, unadulterated essence of a premier ceylon spice and authentic tropical harvesting, elevating it far above standard commercial grades found in mass-market retail channels.
            </p>
            <p>
              Sri Lankan cloves are globally distinct due to their massive volatile oil yield, routinely testing between 16% and 20% v/w. This high concentration of eugenol essential oils gives them an exceptionally strong, warm, and highly pungent flavor profile, while also providing powerful natural antimicrobial and antioxidant benefits.

Our hand-picking standards enforce a near-zero threshold for headless cloves, woody stems, or moisture-depleted "mother cloves." This structural superiority delivers an intensely warm, sweet, and highly aromatic cloves aroma profile accompanied by a bold, numbing punch. Because of this rich natural concentration and robust volatile oil content, our whole cloves hold up beautifully under commercial processing and storage conditions without losing their distinctive fragrance or complex structural integrity.
            </p>
            <p className="clv-highlight-para">
              For sophisticated industrial curing, custom spice brines, pharmaceutical oral-care formulations, and high-yield oil distillation houses seeking the finest cloves, this superior concentration of natural eugenol translates into an unmatched chemical and flavor release. Whether these premium whole cloves are infused into rich artisanal broths, distilled for pharmaceutical applications, or utilized by global manufacturing facilities to extract high-potency extracts, our cloves deliver a potent, multi-layered sensory experience.

Our rigorous sizing protocols and strict moisture monitoring ensure a remarkably clean, premium cloves spice that is fully ready for high-end retail packaging and demanding industrial manufacturing across Europe, North America, and beyond.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="clv-section-subheading">Technical Specifications</h2>
          <table className="clv-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="clv-table-row">
                  <td className="clv-spec-label">{spec.label}</td>
                  <td className="clv-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="clv-hero-image-wrapper">
          <img src={cloves} alt="Premium Whole Cloves" className="clv-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="clv-applications-block">
        <h3 className="clv-apps-heading">Primary Industry Applications</h3>
        <div className="clv-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="clv-app-card">
              <h4 className="clv-app-card-title">{app.area}</h4>
              <p className="clv-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="clv-grades-section">
        <h2 className="clv-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="clv-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="clv-grade-card">
              <div className="clv-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="clv-grade-thumb" />
                <h3 className="clv-grade-name">{item.name}</h3>
              </div>
              <p className="clv-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Cloves;