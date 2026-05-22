import React from 'react';
import { Link } from 'react-router-dom';
import './Nutmeg.css';

// Asset Imports - Points directly to your nutmeg assets
import nutmeg from '../../../assets/nutmeg.jpg';

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
    { area: "Premium Fragrance Blending", text: "High chemical oil yield renders it optimal for clean steam extraction inside cosmetic labs." }
  ];

  const items = [
    { name: "Whole ABCD Grade Nutmeg", desc: "Dense, heavily marbled whole kernels completely free of external blemishes or shell debris.", img: nutmeg }
  ];

  return (
    <div className="nutmeg-detail-page">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="nut-back-nav">
        <Link to="/products" className="nut-back-link">
          ← Back to All Products
        </Link>
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="nut-hero-split">
        <div className="nut-hero-content">
          <h1 className="nut-main-title">Premium Whole Nutmeg</h1>
          <p className="nut-scientific-name">Myristica fragrans</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="nut-large-description">
            <p>
              Sourced from sustainable agroforestry networks in the fertile wet zones, our whole ABCD-grade Nutmeg kernels (<strong>Myristica fragrans</strong>) represent a structurally superior tier of tree-born spices. The tree-ripened fruits are harvested immediately upon splitting open to reveal the bright red aril (mace) surrounding the inner nut. The nutmeg kernels are extracted and slowly dried within their protective inner shells to safeguard the interior volatile oil matrix against rancidity and oxidation.
            </p>
            <p>
              Once the drying cycle is complete, the outer shells are gently cracked open to reveal dense, heavily marbled kernels that are entirely free of external blemishes, mold cavities, or insect boring. Sri Lankan nutmeg is highly valued by industrial food processors due to its robust volatile oil content (6% to 9% v/w), delivering a characteristically warm, intensely woody, and slightly sweet flavor profile that holds up remarkably well in processed formats.
            </p>
            <p className="nut-highlight-para">
              Our strict compliance with advanced aflatoxin testing and thorough physical sorting protocols ensures that our whole nutmeg kernels consistently pass the most stringent food safety screenings at European ports of entry. This makes them a reliable base for industrial meat packing, commercial baking mixes, and premium cosmetic fragrance blending.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h3 className="nut-section-subheading">Technical Specifications</h3>
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
          <img src={nutmeg} alt="Premium Whole Nutmeg Kernels" className="nut-main-hero-img" />
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
                <h4 className="nut-grade-name">{item.name}</h4>
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