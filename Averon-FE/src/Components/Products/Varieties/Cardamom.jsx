import React from 'react';
import { Link } from 'react-router-dom';
import './Cardamom.css';

// Asset Imports - Points directly to your cardamom assets
import cardamom from '../../../assets/cardamom.jpg';
import cardamom_ground from '../../../assets/cardamom ground.jpg';

const Cardamom = () => {
  const specs = [
    { label: "Available Grades", value: "Jumbo Green Cardamom (LG), Fine Ground Powder" },
    { label: "Pod Size Profile", value: "7mm – 8mm+ calibrated pods" },
    { label: "Moisture Content", value: "11% max" },
    { label: "Volatile Oil Content", value: "3.5% - 5.0% v/w (Rich in cineole and limonene)" },
    { label: "Color Specification", value: "Deep, natural green (No artificial color enhancement)" }
  ];

  const applications = [
    { area: "Premium Beverage Infusions", text: "Essential for traditional chai blends, specialty coffees, and botanical craft brewing." },
    { area: "Nordic & Middle Eastern Cuisine", text: "Whole pods optimized for long shelf-life distributions in fine catering and retail packing." },
    { area: "Perfumery & Aromatherapy", text: "Raw material source for high-grade essential oil steam distillers." }
  ];

  const items = [
    { name: "Jumbo Green Cardamom (LG)", desc: "Large, bright green pods packed with essential oils and intense fragrance.", img: cardamom },
    { name: "Green Cardamom Ground", desc: "100% Pure, finely milled green cardamom seeds with full oil retention.", img: cardamom_ground }
  ];

  return (
    <div className="cardamom-detail-page">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="card-back-nav">
        <Link to="/products" className="card-back-link">
          ← Back to All Products
        </Link>
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="card-hero-split">
        <div className="card-hero-content">
          <h1 className="card-main-title">Jumbo Green Cardamom</h1>
          <p className="card-scientific-name">Elettaria cardamomum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="card-large-description">
            <p>
              Sourced from the humid, canopy-shaded hill countries of Sri Lanka, our Green Cardamom (<strong>Elettaria cardamomum</strong>) represents a pinnacle tier of botanical purity. The pods are individually hand-picked at precise maturity thresholds just before they open, ensuring that the intensely fragrant internal black seeds remain completely sealed, unexposed to air, and fully saturated with volatile essential oils rich in cineole and limonene.
            </p>
            <p>
              Following harvest, the pods are immediately transferred to specialized, temperature-controlled flue-curing chambers. This rapid, non-chemical drying process locks in the vibrant, deep green chlorophyll pigmentation while permanently sealing the pod structure against moisture ingress. We strictly avoid the use of artificial colorants, bleaching agents, or chemical preservatives, offering an entirely natural product that complies cleanly with international green-label regulations.
            </p>
            <p className="card-highlight-para">
              Our Jumbo LG range is meticulously sorted to isolate only plump, uniform pods measuring 7mm to 8mm and above, ensuring an uncompromised aesthetic presentation for premium retail packs. With its intensely cooling, sweet-spicy, and highly floral aroma profile, this cardamom is highly prized by gourmet beverage infusers, fine Scandinavian baking networks, and global aromatherapy extraction labs.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h3 className="card-section-subheading">Technical Specifications</h3>
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
          <img src={cardamom} alt="Premium Green Cardamom Pods" className="card-main-hero-img" />
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
                <h4 className="card-grade-name">{item.name}</h4>
              </div>
              <p className="card-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Cardamom;