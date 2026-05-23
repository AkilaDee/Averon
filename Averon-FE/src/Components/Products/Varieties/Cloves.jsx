import React from 'react';
import { Link } from 'react-router-dom';
import './Cloves.css';

// Asset Imports - Points directly to your cloves assets
import cloves from '../../../assets/cloves.jpg';
import cloves_ground from '../../../assets/cloves ground.jpg';

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
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="clv-back-nav">
        <Link to="/" className="clv-back-link">
          ← Back to All Products
        </Link>
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="clv-hero-split">
        <div className="clv-hero-content">
          <h1 className="clv-main-title">Hand-Picked Premium Cloves</h1>
          <p className="clv-scientific-name">Syzygium aromaticum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="clv-large-description">
            <p>
              Our premium Ceylon Cloves (<strong>Syzygium aromaticum</strong>) are harvested during the optimal dry winter windows from ancient spice gardens spanning the mid-elevation hillsides. The unopened flower buds are hand-picked when they transition from green to a vibrant pinkish-red, capturing them at the exact physiological moment when their eugenol content peaks. The buds are then carefully hand-separated from their clusters and shade-dried on clean platforms until they turn a deep, rich dark brown with lighter crown tips.
            </p>
            <p>
              Sri Lankan cloves are globally distinct due to their massive volatile oil yield, routinely testing between 16% and 20% v/w. This high concentration of eugenol oil gives them an exceptionally strong, warm, and highly pungent flavor profile, while also providing powerful natural antimicrobial and antioxidant benefits. Our hand-picking standards enforce a near-zero threshold for headless cloves, woody stems, or moisture-depleted "mother cloves."
            </p>
            <p className="clv-highlight-para">
              This uncompromised structural grading makes our whole cloves ideal for sophisticated industrial curing, custom spice brines, pharmaceutical oral-care formulations, and high-yield oil distillation houses where absolute purity and raw chemical potency are non-negotiable standards.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h3 className="clv-section-subheading">Technical Specifications</h3>
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
                <h4 className="clv-grade-name">{item.name}</h4>
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