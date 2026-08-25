import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Nutmeg.css';

// Asset Imports - Points directly to your nutmeg assets
import nutmeg from '../../../assets/nutmeg.webp';
import nutmegNew from '../../../assets/nutmegNew.webp';
import nutmeg_ground from '../../../assets/nutmeg ground.webp';

const Nutmeg = () => {
  const specs = [
    { label: "Available Grades", value: "Whole" },
    { label: "Defect Threshold", value: "0% mold cavities or insect boring" },
    { label: "Moisture Content", value: "10% max" },
    { label: "Volatile Oil Content", value: "6.0% - 9.0% v/w (Highly concentrated aromatic matrix)" },
    { label: "Aflatoxin Controls", value: "Strictly compliant with rigorous EU food safety limits" }
  ];

  const applications = [
    { area: "Industrial Meat Packing", text: "Robust volatile oils retain flavor profile consistency under industrial processing pressure." },
    { area: "Commercial Bakery Mixes", text: "Provides deep, warming aromatic notes across large-scale commercial recipe volumes." },
    { area: "Fragrance Blending", text: "High chemical oil yield renders it optimal for clean steam extraction inside cosmetic labs." }
  ];

  const items = [
    { name: "Nutmeg Whole", desc: "Dense, heavily marbled whole kernels completely free of external blemishes or shell debris.", img: nutmegNew },
    { name: "Nutmeg Ground", desc: "100% Pure, finely milled nutmeg with full oil retention.", img: nutmeg_ground }
  ];

  return (
    <div className="nutmeg-detail-page">
      <Helmet>
        <title>Ceylon Nutmeg | Averon Supplies Ltd</title>
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale and retail supply of Ceylon Nutmeg. High volatile oil whole nutmeg, sound unwrinkled, and ground grades for food manufacturers." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/nutmeg"/>
      </Helmet>

      {/* HERO SECTION CONTAINER */}
      <div className="nut-hero-split">
        <div className="nut-hero-content">
          <h1 className="nut-main-title">Nutmeg</h1>
          <p className="nut-scientific-name">Myristica fragrans</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="nut-large-description">
            <p>
              Nutmeg (<strong>Myristica fragrans</strong>) is globally renowned for possessing significantly higher volatile oil concentrations and complex aromatic profiles compared to alternative origins around the world. Sourced directly from sustainable agroforestry networks in the fertile wet zones of sri lanka, our whole nutmeg kernels represent a pinnacle tier of botanical purity and agricultural craftsmanship.

The cultivation of authentic nutmeg requires meticulous generational expertise and an uncompromising commitment to traditional harvesting standards. Unlike mass-produced alternatives that sacrifice quality for speed, our farming partners manage every stage of the nutmeg crop lifecycle with absolute precision.

Our tree-ripened nutmeg fruits are harvested immediately upon splitting open to reveal the bright red aril (mace) surrounding the inner nut. The nutmeg kernels are extracted and slowly dried within their protective inner shells to safeguard the interior volatile oil matrix against rancidity and oxidation. Every single batch captures the true, unadulterated essence of a premier ceylon spice and authentic tropical harvesting, elevating it far above standard commercial grades found in mass-market retail channels.
            </p>
            <p>
              Once the drying cycle is complete, the outer shells are gently cracked open to reveal dense, heavily marbled nutmeg kernels that are entirely free of external blemishes, mold cavities, or insect boring. Sri Lankan nutmeg is highly valued by industrial food processors due to its robust volatile oil content (6% to 9% v/w), delivering a characteristically warm, intensely woody, and slightly sweet nutmeg aroma profile accompanied by a bold, aromatic punch.

Our strict hand-sorting and structural grading standards enforce a near-zero threshold for broken kernels or under-matured nutmeg. Because of this rich natural concentration and robust volatile oil content, our whole nutmeg kernels hold up beautifully under commercial processing and storage conditions without losing their distinctive fragrance or complex structural integrity.
            </p>
            <p className="nut-highlight-para">
              For industrial meat packing, commercial baking mixes, and cosmetic fragrance blending seeking the finest nutmeg, this superior concentration of natural essential oils translates into an unmatched flavor and aromatic release. Whether these whole nutmeg kernels are freshly grated into gourmet culinary dishes, distilled for high-end perfumery, or utilized by global manufacturing facilities to create specialty extracts, our nutmeg delivers a potent, multi-layered sensory experience.

Our strict compliance with advanced aflatoxin testing, rigorous sizing protocols, and strict moisture monitoring ensure a remarkably clean nutmeg spice that is fully ready for high-end retail packaging and demanding industrial manufacturing across Europe, North America, and beyond.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="nut-section-subheading">Technical Specifications</h2>
          <table className="nut-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="nut-table-row">
                  <td className="nut-spec-label">{spec.label}</td>
                  <td className="nut-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="nut-hero-image-wrapper">
          <img src={nutmeg} alt="Whole Nutmeg Kernels" className="nut-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="nut-applications-block">
        <h3 className="nut-apps-heading">Primary Industry Applications</h3>
        <div className="nut-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="nut-app-card">
              <h4 className="nut-app-card-title">{app.area}</h4>
              <p className="nut-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="nut-grades-section">
        <h2 className="nut-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="nut-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="nut-grade-card">
              <div className="nut-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="nut-grade-thumb" />
                <h3 className="nut-grade-name">{item.name}</h3>
              </div>
              <p className="nut-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Nutmeg;