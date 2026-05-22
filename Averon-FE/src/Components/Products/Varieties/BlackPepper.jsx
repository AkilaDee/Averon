import React from 'react';
import { Link } from 'react-router-dom';
import './blackpepper.css';

// Asset Imports - Points directly to your pepper assets
import pepper_500 from '../../../assets/pepper500.jpg';
import pepper from '../../../assets/pepper.jpg';
import pepper_cracked from '../../../assets/pepper cracked.jpg';
import pepper_ground from '../../../assets/pepper ground.jpg';

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
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="pep-back-nav">
        <Link to="/products" className="pep-back-link">
          ← Back to All Products
        </Link>
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="pep-hero-split">
        <div className="pep-hero-content">
          <h1 className="pep-main-title">High-Piperine Black Pepper</h1>
          <p className="pep-scientific-name">Piper nigrum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="pep-large-description">
            <p>
              Sri Lankan Black Pepper (<strong>Piper nigrum</strong>) is globally renowned for possessing significantly higher piperine concentrations compared to alternative origins. Our berries are harvested at peak maturity from fertile mid-country plantations where rainfall patterns and rich soil profiles naturally maximize chemical density. The harvested green berries undergo a controlled blanching and sun-drying process, activating uniform enzymatic browning that gives the peppercorns their deep black, deeply wrinkled outer pericarp.
            </p>
            <p>
              The definitive competitive edge of our pepper lies in its superior bulk density, consistently measuring between 500 and 550+ grams per liter (GL). This indicates highly developed, solid kernels with virtually zero hollow "light berries" or pinheads. This structural superiority delivers a biting, intensely pungent flavor profile accompanied by a bold, aromatic volatile oil kick that holds up beautifully under commercial processing conditions.
            </p>
            <p className="pep-highlight-para">
              For industrial spice extractors, meat packers, and high-end blending houses, this high-piperine yield translates directly into superior process efficiency and lower raw material requirements during oleoresin extraction. Our advanced physical cleaning, metal detection, and moisture monitoring protocols ensure a remarkably clean, premium product suitable for direct-to-grinder applications.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h3 className="pep-section-subheading">Technical Specifications</h3>
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
          <img src={pepper_500} alt="Premium Black Pepper Processing" className="pep-main-hero-img" />
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
                <h4 className="pep-grade-name">{item.name}</h4>
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