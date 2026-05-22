import React from 'react';
import { Link } from 'react-router-dom';
import './Vanilla.css';

// Asset Imports - Points directly to your vanilla assets
import vanilla from '../../../assets/vanilla.jpg';

const Vanilla = () => {
  const specs = [
    { label: "Available Grades", value: "Gourmet Grade A Pods" },
    { label: "Pod Length", value: "15cm – 18cm+ premium lengths" },
    { label: "Moisture Content", value: "30% - 35% (Plump, flexible beans)" },
    { label: "Vanillin Content", value: "1.8% - 2.4%" },
    { label: "Appearance", value: "Oily, dark brown to black lustrous skin" }
  ];

  const applications = [
    { area: "Artisanal Dairy & Ice Cream", text: "Direct-seed scraped beans for visible premium clustering and authentic aroma release." },
    { area: "High-End Fine Pastry Production", text: "Designed for slow-steeping extractions in cream, custards, and delicate syrups." },
    { area: "Premium Extracts & Pastes", text: "Yields rich, non-acidic bases for professional-grade baking extracts." }
  ];

  const items = [
    { name: "Gourmet Grade A Bourbon Pods", desc: "Plump, oily, moisture-rich pods boasting a deep, rich vanilla flavour profile with high seed density.", img: vanilla }
  ];

  return (
    <div className="vanilla-detail-page">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="van-back-nav">
        <Link to="/products" className="van-back-link">
          ← Back to All Products
        </Link>
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="van-hero-split">
        <div className="van-hero-content">
          <h1 className="van-main-title">Gourmet Grade A Vanilla</h1>
          <p className="van-scientific-name">Vanilla planifolia</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="van-large-description">
            <p>
              Our Gourmet Grade A Vanilla pods (<strong>Vanilla planifolia</strong>) are the product of a highly intensive, artisan-led cultivation process based in the cool, elevated microclimates of the island. Each orchid flower is meticulously hand-pollinated within a single morning window. The resulting vanilla beans are left to mature on the vine for up to nine months to max out their base vanillin precursors, before undergoing a traditional Bourbon curing process spanning several months.
            </p>
            <p>
              This extensive curing process involves alternating daily cycles of sun-sweating and slow indoor shade-drying, allowing the natural vanillin to crystallize smoothly within the pod wall. The resulting premium beans are highly flexible, oily, and plump, possessing a rich moisture content of 30% to 35% and a deep, dark brown lustrous skin that yields an incredibly smooth, cream-like flavor profile.
            </p>
            <p className="van-highlight-para">
              Free from any chemical accelerants or artificial plumping agents, our vanilla beans are specifically optimized for fine dining pastry production, premium dairy infusions, and natural extract formulations where a deep, rich vanilla profile with high seed density is required.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h3 className="van-section-subheading">Technical Specifications</h3>
          <table className="van-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="van-table-row">
                  <td className="van-spec-label">{spec.label}</td>
                  <td className="van-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="van-hero-image-wrapper">
          <img src={vanilla} alt="Premium Gourmet Vanilla Pods" className="van-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="van-applications-block">
        <h3 className="van-apps-heading">Primary Industry Applications</h3>
        <div className="van-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="van-app-card">
              <h4 className="van-app-card-title">{app.area}</h4>
              <p className="van-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="van-grades-section">
        <h2 className="van-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="van-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="van-grade-card">
              <div className="van-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="van-grade-thumb" />
                <h4 className="van-grade-name">{item.name}</h4>
              </div>
              <p className="van-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Vanilla;