import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Products.css';

import product1 from '../../assets/alba.webp';
import product2 from '../../assets/c5spec.webp';
import product3 from '../../assets/c5stick.webp';
import cinnamon from '../../assets/cinnamon.webp';
import cardamom from '../../assets/cardamom.webp';
import cloves from '../../assets/cloves.webp';
import vanilla from '../../assets/vanilla.webp';
import nutmeg from '../../assets/nutmeg.webp';
import cinnamon_ground from '../../assets/cinnamon ground.webp';
import cloves_ground from '../../assets/cloves ground.webp';
import cardamom_ground from '../../assets/cardamom ground.webp';
import pepper_ground from '../../assets/pepper ground.webp';
import pepper from '../../assets/pepper.webp';
import pepper_500 from '../../assets/pepper500.webp';
import pepper_cracked from '../../assets/pepper cracked.webp';
import quillings from '../../assets/quillings.webp';
import C4 from '../../assets/C4.webp';
import H1 from '../../assets/H1.webp';
import H2 from '../../assets/H2.webp';

const productDetails = {
  'ceylon-cinnamon': {
    slug: 'ceylon-cinnamon',
    title: "Our Ceylon Cinnamon Range",
    description: "Explore estate-grade authentic Ceylon cinnamon quills, powders, and quillings directly sourced from Sri Lanka.",
    image: cinnamon,
    summary: "Premium Ceylon Cinnamon is valued for its delicate aroma and natural sweetness, offering a refined and distinctive flavor profile.",
    items: [
      { name: "Cinnamon Sticks - Alba Grade", desc: "The highest premium quality grade. Thin, smooth, and highly prized quills (≤ 6 mm diameter).", img: product1 },
      { name: "Cinnamon Sticks - C5 Extra Special Grade", desc: "Excellent premium grade with slender, neatly rolled quills (≤ 8 mm diameter).", img: product2 },
      { name: "Cinnamon Sticks - C5 Special Grade", desc: "A top-tier traditional grade displaying great color, tight rolling, and sweet flavor profile (≤ 10 mm diameter).", img: product2 },
      { name: "Cinnamon Sticks - C5 Grade", desc: "Standard high-quality commercial quills featuring classic aroma and rich golden appearance.", img: product3 },
      { name: "Cinnamon Sticks - C4 Grade", desc: "Standard high-quality commercial C4 quills featuring classic aroma and rich golden appearance.", img: C4 },
      { name: "Cinnamon Sticks - H1 Grade", desc: "Standard H1 commercial quills featuring classic aroma and rich golden appearance.", img: H1 },
      { name: "Cinnamon Sticks - H2 Grade", desc: "Standard H2 commercial quills featuring classic aroma and rich golden appearance.", img: H2 },
      { name: "Cinnamon Quillings", desc: "Standard high-quality commercial quills featuring classic aroma and rich golden appearance.", img: quillings },
      { name: "Cinnamon Ground", desc: "100% Pure, ultra-fine mesh (60-80).", img: cinnamon_ground }
    ]
  },
  'black-pepper': {
    slug: 'black-pepper',
    title: "Our Black Pepper Range",
    description: "High-piperine whole peppercorns, cracked varieties, and ground black pepper sourced from Sri Lanka.",
    image: pepper_500,
    summary: "Premium Sri Lankan black pepper is valued for its bold aroma and high piperine content, offering a vibrant and distinctive flavour profile.",
    items: [
      { name: "Whole Black Pepper (550 GL)", desc: "High piperine content, robust berries perfect for retail packing and high-volume grinding.", img: pepper },
      { name: "Whole Black Pepper (500 GL)", desc: "Standard grade whole peppercorns suited for commercial blending.", img: pepper_500 },
      { name: "Black Pepper Cracked", desc: "Standard grade Cracked Black pepper.", img: pepper_cracked },
      { name: "Black Pepper Ground", desc: "Standard grade Black pepper powder.", img: pepper_ground }
    ]
  },
  cardamom: {
    slug: 'green-cardamom',
    title: "Our Green Cardamom Range",
    description: "Prized green cardamom pods and premium ground variants packed with natural essential oils.",
    image: cardamom,
    summary: "Premium Ceylon Green Cardamom is prized for its cooling, floral aroma and high cineole content, offering a sweet yet complex flavour profile.",
    items: [
      { name: "Jumbo Green Cardamom (LG)", desc: "Large, bright green pods packed with essential oils and intense fragrance.", img: cardamom },
      { name: "Green Cardamom Ground", desc: "Large, bright green powder packed with essential oils and intense fragrance.", img: cardamom_ground }
    ]
  },
  cloves: {
    slug: 'cloves',
    title: "Our Clove Range",
    description: "Whole full-headed cloves and high-eugenol ground clove powders for commercial applications.",
    image: cloves,
    summary: "Premium Ceylon Cloves are prized for its intense, warm aroma and high eugenol oil content, offering a bold and pungent flavour profile.",
    items: [
      { name: "Hand-Picked Premium Cloves", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves },
      { name: "Premium Cloves Ground", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves_ground }
    ]
  },
  vanilla: {
    slug: 'vanilla',
    title: "Our Vanilla Range",
    description: "Plump, moisture-rich Gourmet Grade A Bourbon vanilla pods with a rich flavor profile.",
    image: vanilla,
    summary: "Premium Ceylon Vanilla is valued for its rich, cream-like aroma and deep, complex sweetness, offering a velvety and distinctive flavor profile.",
    items: [
      { name: "Gourmet Grade A Bourbon Pods", desc: "Plump, oily, moisture-rich pods boasting a deep, rich flavour profile.", img: vanilla }
    ]
  },
  nutmeg: {
    slug: 'nutmeg',
    title: "Our Nutmeg Range",
    description: "High-density, oil-rich whole nutmeg nuts sourced directly from Sri Lankan estates.",
    image: nutmeg,
    summary: "Premium Sri Lankan Nutmeg is valued for its warm, woody aroma and high essential oil content, offering a highly aromatic and distinctive flavor profile.",
    items: [
      { name: "Whole Nutmeg", desc: "High-density, oil-rich whole nuts entirely free from blemishes.", img: nutmeg }
    ]
  }
};

const Products = () => {
  const { slug } = useParams();
  const activeCategory = slug ? productDetails[slug] : null;

  return (
    <div className='products'>
      <Helmet>
        {activeCategory ? (
          <>
            <title>{activeCategory.title} | Averon Supplies</title>
            <meta name="description" content={activeCategory.description} />
            <link 
              rel="canonical" 
              href={`https://www.averonsupplies.co.uk/products/${activeCategory.slug}`} 
              hreflang="en-GB"
            />
          </>
        ) : (
          <>
            <title>Wholesale Ceylon Spices Range | Direct Estate Supply | Averon Supplies</title>
            <meta 
              name="description" 
              content="Direct estate-to-business wholesale supply of single-origin, premium grade Ceylon spices. Bulk container pricing on Cinnamon, Black Pepper, Cardamom, and Vanilla." 
            />
            <link 
              rel="canonical" 
              href="https://www.averonsupplies.co.uk/products" 
              hreflang="en-GB"
            />
          </>
        )}
      </Helmet>

      {activeCategory ? (
        /* =========================================================
            INDIVIDUAL CATEGORY VIEW (When a slug is present)
           ========================================================= */
        <div className="single-category-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link to="/products" className="insights-cta-btn" style={{ textDecoration: 'none' }}>← Back to All Products</Link>
          </div>

          <h1 style={{ marginBottom: '10px' }}>{activeCategory.title}</h1>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>{activeCategory.description}</p>

          <div className="variety-results-display" style={{ width: '100%' }}>
            <div className="variety-items-grid">
              {activeCategory.items.map((item, index) => (
                <div key={index} className="variety-item-card">
                  <div className="variety-card-image-wrapper">
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================
            MAIN PRODUCTS HUB VIEW (When viewing /products)
            - Dynamically mapped from productDetails to avoid hardcoding
           ========================================================= */
        <>
          <div className="product-categories">
            {Object.values(productDetails).map((cat) => (
              <div className="cat-card" key={cat.slug}>
                <img src={cat.image} alt={cat.title} fetchPriority={cat.slug === 'ceylon-cinnamon' ? 'high' : 'auto'} />
                <h3>{cat.title.replace('Our ', '').replace(' Range', '')}</h3>
                <p>{cat.summary}</p>
                <Link to={`/products/${cat.slug}`} className="read-more-btn">
                  Explore {cat.title.replace('Our ', '').replace(' Range', '')}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default Products;