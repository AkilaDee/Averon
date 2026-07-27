import React, { useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import product1 from '../../assets/alba.webp'
import product2 from '../../assets/c5spec.webp'
import product3 from '../../assets/c5stick.webp'
import cinnamon from '../../assets/cinnamon.webp'
import cardamom from '../../assets/cardamom.webp'
import cloves from '../../assets/cloves.webp'
import vanilla from '../../assets/vanilla.webp'
import nutmeg from '../../assets/nutmeg.webp'
import cinnamon_ground from '../../assets/cinnamon ground.webp'
import cloves_ground from '../../assets/cloves ground.webp'
import cardamom_ground from '../../assets/cardamom ground.webp'
import pepper_ground from '../../assets/pepper ground.webp'
import pepper from '../../assets/pepper.webp'
import pepper_500 from '../../assets/pepper500.webp'
import pepper_cracked from '../../assets/pepper cracked.webp'
import quillings from '../../assets/quillings.webp'
import C4 from '../../assets/C4.webp'
import H1 from '../../assets/H1.webp'
import H2 from '../../assets/H2.webp'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('cinnamon');

  const productDetails = {
    cinnamon: {
      title: "Our Ceylon Cinnamon Range",
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
    pepper: {
      title: "Our Black Pepper Range",
      items: [
        { name: "Whole Black Pepper (550 GL)", desc: "High piperine content, robust berries perfect for retail packing and high-volume grinding.", img: pepper },
        { name: "Whole Black Pepper (500 GL)", desc: "Standard grade whole peppercorns suited for commercial blending.", img: pepper_500 },
        { name: "Black Pepper Cracked", desc: "Standard grade Cracked Black pepper.", img: pepper_cracked },
        { name: "Black Pepper Ground", desc: "Standard grade Black pepper powder.", img: pepper_ground }
      ]
    },
    cardamom: {
      title: "Our Green Cardamom Range",
      items: [
        { name: "Jumbo Green Cardamom (LG)", desc: "Large, bright green pods packed with essential oils and intense fragrance.", img: cardamom },
        { name: "Green Cardamom Ground", desc: "Large, bright green powder packed with essential oils and intense fragrance.", img: cardamom_ground }
      ]
    },
    cloves: {
      title: "Our Clove Range",
      items: [
        { name: "Hand-Picked Premium Cloves", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves },
        { name: "Premium Cloves Ground", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves_ground }
      ]
    },
    vanilla: {
      title: "Our Vanilla Range",
      items: [
        { name: "Gourmet Grade A Bourbon Pods", desc: "Plump, oily, moisture-rich pods boasting a deep, rich flavour profile.", img: vanilla }
      ]
    },
    nutmeg: {
      title: "Our Nutmeg Range",
      items: [
        { name: "Whole Nutmeg", desc: "High-density, oil-rich whole nuts entirely free from blemishes.", img: nutmeg }
      ]
    }
  };

  return (
    <div className='products'>
      <Helmet>
        {/* Dynamically update the Title and Canonical based on the selected spice */}
        <title>{productDetails[selectedCategory].title} | Averon Supplies</title>
        
        <meta 
          name="description" 
          content="Direct estate-to-business wholesale supply of single-origin, premium grade Ceylon spices. Bulk container pricing on Cinnamon, Black Pepper, Cardamom, and Vanilla." 
        />
  
        <link 
          rel="canonical" 
          href={`https://www.averonsupplies.co.uk/products/${selectedCategory}`} 
          hreflang="en-GB"
        />
      </Helmet>

      {/* =========================================================
          SECTION 1: MAIN PRODUCTS DISPLAY
          ========================================================= */}
      <div className="product-categories">
        <div className="cat-card">
          <img src={cinnamon} alt="Ceylon-Cinnamon" fetchPriority="high"/>
          <h3>Ceylon Cinnamon</h3>
          <p>Premium Ceylon Cinnamon is valued for its delicate aroma and natural sweetness, offering a refined and distinctive flavor profile.</p>
          <Link to="/products/cinnamon" className="read-more-btn" onClick={() => setSelectedCategory('cinnamon')}>Explore Ceylon Cinnamon</Link>
        </div>

        <div className="cat-card">
          <img src={pepper_500} alt="black pepper" />
          <h3>Black Pepper</h3>
          <p>Premium Sri Lankan black pepper is valued for its bold aroma and high piperine content, offering a vibrant and distinctive flavour profile.</p>
          <Link to="/products/pepper" className="read-more-btn" onClick={() => setSelectedCategory('pepper')}>Explore Black Pepper</Link>
        </div>

        <div className="cat-card">
          <img src={cardamom} alt="Cardamom" />
          <h3>Green Cardamom</h3>
          <p>Premium Ceylon Green Cardamom is prized for its cooling, floral aroma and high cineole content, offering a sweet yet complex flavour profile.</p>
          <Link to="/products/cardamom" className="read-more-btn" onClick={() => setSelectedCategory('cardamom')}>Explore Cardamom</Link>
        </div>

        <div className="cat-card">
          <img src={cloves} alt="Cloves" />
          <h3>Cloves</h3>
          <p>Premium Ceylon Cloves are prized for its intense, warm aroma and high eugenol oil content, offering a bold and pungent flavour profile.</p>
          <Link to="/products/cloves" className="read-more-btn" onClick={() => setSelectedCategory('cloves')}>Explore Cloves</Link>
        </div>
      </div>

      <div className="product-categories">
        <div className="cat-card">
          <img src={vanilla} alt="Vanilla" />
          <h3>Vanilla</h3>
          <p>Premium Ceylon Vanilla is valued for its rich, cream-like aroma and deep, complex sweetness, offering a velvety and distinctive flavor profile.</p>
          <Link to="/products/vanilla" className="read-more-btn" onClick={() => setSelectedCategory('vanilla')}>Explore Vanilla</Link>
        </div>

        <div className="cat-card">
          <img src={nutmeg} alt="Nutmeg" />
          <h3>Nutmeg</h3>
          <p>Premium Sri Lankan Nutmeg is valued for its warm, woody aroma and high essential oil content, offering a highly aromatic and distinctive flavor profile.</p>
          <Link to="/products/nutmeg" className="read-more-btn" onClick={() => setSelectedCategory('nutmeg')}>Explore Nutmeg</Link>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0' }} />

      {/* =========================================================
          SECTION 2: VARIETY EXPLORER
          ========================================================= */}
      <div className="variety-explorer-section">
        <h2>Explore Our Product Range</h2>
        
        <div className="explorer-split-container">
          
          {/* LEFT SIDEBAR MENU */}
          <div className="variety-sidebar-menu">
            {Object.keys(productDetails).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={selectedCategory === key ? 'active' : ''}
              >
                {key === 'pepper' ? 'Black Pepper' : key === 'cardamom' ? 'Green Cardamom' : key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* RIGHT VARIETY DISPLAY CONTAINER */}
          <div className="variety-results-display">
            <h3>{productDetails[selectedCategory].title}</h3>
            
            <div className="variety-items-grid">
              {productDetails[selectedCategory].items.map((item, index) => (
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
      </div>

    </div>
  )
}

export default Products