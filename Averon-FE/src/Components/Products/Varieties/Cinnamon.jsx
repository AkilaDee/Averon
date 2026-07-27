import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Cinnamon.css';

// Asset Imports - Points directly to your existing asset setup
// import cinnamon from '../../assets/cinnamon.jpg';
// import product1 from '../../assets/alba.JPG';
// import product2 from '../../assets/c5spec.JPG';
// import product3 from '../../assets/c5stick.JPG';
// import quillings from '../../assets/quillings.jpg';
// import cinnamon_ground from '../../assets/cinnamon ground.jpg';
// import C4 from '../../assets/C4.jpg';
// import H1 from '../../assets/H1.jpg';
// import H2 from '../../assets/H2.png';
import product1 from '../../../assets/alba.webp'
import product2 from '../../../assets/c5spec.webp'
import product3 from '../../../assets/c5stick.webp'
import cinnamon from '../../../assets/cinnamon.webp'
import C4 from '../../../assets/C4.webp'
import H1 from '../../../assets/H1.webp'
import H2 from '../../../assets/H2.webp'
import cinnamon_ground from '../../../assets/cinnamon ground.webp'
import quillings from '../../../assets/quillings.webp'



const CinnamonDetail = () => {
  const specs = [
    { label: "Available Grades", value: "Alba, C5 Extra Special, C5 Special, C5 Sticks, C4 Sticks, H1, H2, Quillings, Ground (60-80 Mesh)" },
    { label: "Moisture Content", value: "14% max" },
    { label: "Volatile Oil Content", value: "1.5% - 2.5% v/w" },
    { label: "Coumarin Content", value: "Ultra-low (Trace amounts, < 0.005%)" },
    { label: "Color Profile", value: "Light golden-brown to tan" }
  ];

  const applications = [
    { area: "Gourmet Bakery & Confectionery", text: "High-end European pastry manufacturing demanding sweet, delicate profiles without bitterness." },
    { area: "Premium Spirit Distillation", text: "Used as a botanical bedrock for artisanal gins, spiced rums, and seasonal liqueurs." },
    { area: "Wellness & Nutraceuticals", text: "Fine ground options for supplements targeting blood sugar regulation due to safe coumarin profiles." }
  ];

  const items = [
   { name: "Cinnamon Sticks - Alba Grade", desc: "The highest premium quality grade. Thin, smooth, and highly prized quills (≤ 6 mm diameter).", img: product1 },
   { name: "Cinnamon Sticks - C5 Extra Special Grade", desc: "Excellent premium grade with slender, neatly rolled quills (≤ 8 mm diameter).", img: product2 },
   { name: "Cinnamon Sticks - C5 Special Grade", desc: "A top-tier traditional grade displaying great color, tight rolling, and sweet flavor profile (≤ 10 mm diameter).", img: product2 },
   { name: "Cinnamon Sticks - C5 Grade", desc: "Standard high-quality commercial quills featuring classic aroma and rich golden appearance.", img: product3 },
   { name: "Cinnamon Sticks - C4 Grade", desc: "Standard high-quality commercial C4 quills featuring classic aroma and rich golden appearance.", img: C4 },
   { name: "Cinnamon Sticks - H1 Grade", desc: "Standard H1 commercial quills featuring classic aroma and rich golden appearance.", img: H1 },
   { name: "Cinnamon Sticks - H2 Grade", desc: "Standard H2 commercial quills featuring classic aroma and rich golden appearance.", img: H2 },
   { name: "Cinnamon Quillings", desc: "Standard high-quality commercial quills featuring classic aroma and rich golden appearance.", img: quillings },
   { name: "Cinnamon Ground", desc: "100% Pure, ultra-fine mesh (60-80).", img: cinnamon_ground }
  ];

  return (
    <div className="cinnamon-detail-page">
      <Helmet>
        <title>Premium Ceylon Cinnamon | Averon Supplies</title>
        <meta 
          name="description" 
          content="Premium Ceylon Cinnamon, sourced from our own estates in Sri Lanka, capturing the rich aroma, delicate flavor, and absolute purity of true cinnamon." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/ceylon-cinnamon" hreflang="en-GB"/>
      </Helmet>

      {/* HERO SECTION CONTAINER */}
      <div className="cin-hero-split">
        <div className="cin-hero-content">
          <h1 className="cin-main-title">Ceylon Cinnamon</h1>
          <p className="cin-scientific-name">Cinnamomum verum</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="cin-large-description">
            <p>
              Our premium Ceylon Cinnamon is cultivated and harvested exclusively within the dedicated agricultural zones of southern Sri Lanka, a geographic region uniquely optimized for the production of authentic <strong>Cinnamomum verum</strong>. Unlike common Cassia bark (Indonesian and Chinese varieties) which is thick, rugged, and high in toxic coumarin levels, genuine Ceylon Cinnamon is celebrated for its highly complex, multi-layered quill structure. The outer bark is delicately scraped away by generational artisans, after which the fine inner bark is peeled in paper-thin layers and joined together to form a single, solid compound quill.
            </p>
            <p>
              This tedious manual processing method preserves the delicate essential oils within the bark matrix, yielding a sophisticated sensory profile defined by subtle sweetness, warm woody undercurrents, and distinct citrus top notes. Because it contains trace amounts of coumarin (less than 0.005%), our cinnamon represents the safest, most refined choice for international food manufacturing, specialized medical nutraceuticals, and upscale culinary retail networks across Europe and North America.
            </p>
            <p className="cin-highlight-para">
              Every step of our supply chain from hand-rolling and uniform sun-drying to calibrated grading and mechanical cutting is strictly regulated. This ensures that our premium grades, from ultra-slender Alba to robust H1 sticks, arrive at destination ports completely free of mold, moisture damage, or extraneous organic materials, fully matching rigid EU customs requirements.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="cin-section-subheading">Technical Specifications</h2>
          <table className="cin-specs-table">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="cin-table-row">
                  <td className="cin-spec-label">{spec.label}</td>
                  <td className="cin-spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="cin-hero-image-wrapper">
          <img src={cinnamon} alt="Premium Ceylon Cinnamon Processing" className="cin-main-hero-img" />
        </div>
      </div>

      {/* APPLICATIONS SECTION BLOCK */}
      <div className="cin-applications-block">
        <h2 className="cin-apps-heading">Primary Industry Applications</h2>
        <div className="cin-apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="cin-app-card">
              <h3 className="cin-app-card-title">{app.area}</h3>
              <p className="cin-app-card-text">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADES DISPLAY GRID */}
      <div className="cin-grades-section">
        <h2 className="cin-grades-main-title">Available Cut & Processing Profiles</h2>
        <div className="cin-grades-grid">
          {items.map((item, index) => (
            <div key={index} className="cin-grade-card">
              <div className="cin-grade-image-wrapper">
                <img src={item.img} alt={item.name} className="cin-grade-thumb" />
                <h3 className="cin-grade-name">{item.name}</h3>
              </div>
              <p className="cin-grade-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CinnamonDetail;