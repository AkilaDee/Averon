import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Vanilla.css';

// Asset Imports - Points directly to your vanilla assets
import vanilla from '../../../assets/vanilla.webp';

const Vanilla = () => {
  const specs = [
    { label: "Available Grades", value: "Gourmet Grade A Pods" },
    { label: "Pod Length", value: "15cm – 18cm+ premium lengths" },
    { label: "Moisture Content", value: "30% - 35% (Plump, flexible beans)" },
    { label: "Vanillin Content", value: "1.8% - 2.4%" },
    { label: "Appearance", value: "Oily, dark brown to black lustrous skin" }
  ];

  const applications = [
    { area: "Artisanal Dairy & Ice Cream", text: "Direct-seed scraped beans for visible clustering and authentic aroma release." },
    { area: "High-End Fine Pastry Production", text: "Designed for slow-steeping extractions in cream, custards, and delicate syrups." },
    { area: "Extracts & Pastes", text: "Yields rich, non-acidic bases for professional-grade baking extracts." }
  ];

  const items = [
    { name: "Gourmet Grade A Bourbon Pods", desc: "Plump, oily, moisture-rich pods boasting a deep, rich vanilla flavour profile with high seed density.", img: vanilla }
  ];

  return (
    <div className="vanilla-detail-page">
      <Helmet>
        <title>Wholesale Vanilla Pods Bulk Supply | Averon Supplies</title>
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale supply of Vanilla pods. High vanillin content Gourmet Grade A and Extract Grade B for commercial food manufacturers." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/products/vanilla"/>
      </Helmet>

      {/* HERO SECTION CONTAINER */}
      <div className="van-hero-split">
        <div className="van-hero-content">
          <h1 className="van-main-title">Vanilla</h1>
          <p className="van-scientific-name">Vanilla planifolia</p>
          
          {/* COMPREHENSIVE INDUSTRIAL EXPORT DESCRIPTION */}
          <div className="van-large-description">
            <p>
              Vanilla (<strong>Vanilla planifolia</strong>) is globally renowned for possessing significantly higher vanillin concentrations and complex aromatic profiles compared to alternative origins around the world. Sourced directly from the cool, elevated microclimates of the island in sri lanka, our gourmet Grade A vanilla pods represent a pinnacle tier of botanical purity and agricultural craftsmanship.

The cultivation of authentic Vanilla planifolia requires meticulous generational expertise and an uncompromising commitment to traditional hand-farming standards. Unlike mass-produced alternatives that sacrifice quality for speed, our farming partners manage every stage of the vanilla crop lifecycle with absolute precision.

Each orchid flower is meticulously hand-pollinated within a single morning window. The resulting vanilla beans are left to mature on the vine for up to nine months to maximize their base vanillin precursors, before undergoing a traditional Bourbon curing process spanning several months. Every single batch captures the true, unadulterated essence of a premier ceylon spice and authentic tropical harvesting, elevating it far above standard commercial grades found in mass-market retail channels.
            </p>
            <p>
              This extensive curing process involves alternating daily cycles of sun-sweating and slow indoor shade-drying, allowing the natural vanillin to crystallize smoothly within the vanilla pod wall. The resulting vanilla beans are highly flexible, oily, and plump, possessing a rich moisture content of 30% to 35% and a deep, dark brown lustrous skin that yields an incredibly smooth, cream-like vanilla aroma profile accompanied by a bold, aromatic punch.

Our strict hand-sorting and structural grading standards enforce a near-zero threshold for split, dry, or under-cured vanilla pods. Because of this rich natural concentration and robust volatile oil content, our whole vanilla beans hold up beautifully under commercial processing and storage conditions without losing their distinctive fragrance or complex structural integrity.
            </p>
            <p className="van-highlight-para">
              Free from any chemical accelerants or artificial plumping agents, our vanilla beans are specifically optimized for fine dining pastry production, dairy infusions, and natural extract formulations where a deep, rich vanilla profile with high seed density is required. Whether these whole vanilla pods are scraped for artisanal ice creams, infused into gourmet confectionery, or utilized by global manufacturing facilities to create specialty extracts, our vanilla delivers a potent, multi-layered sensory experience.

Our strict compliance with advanced quality assurance, rigorous sizing protocols, and strict moisture monitoring ensure a remarkably clean vanilla spice that is fully ready for high-end retail packaging and demanding industrial manufacturing across Europe, North America, and beyond.
            </p>
          </div>
          
          {/* TECHNICAL SPECIFICATIONS TABLE */}
          <h2 className="van-section-subheading">Technical Specifications</h2>
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
          <img src={vanilla} alt="Gourmet Vanilla Pods" className="van-main-hero-img" />
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
                <h3 className="van-grade-name">{item.name}</h3>
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