import React, { useState } from 'react'
import './Products.css'
import product1 from '../../assets/alba.JPG'
import product2 from '../../assets/c5spec.JPG'
import product3 from '../../assets/c5stick.JPG'
import pepper from '../../assets/pepper.jpg'
import cinnamon from '../../assets/cinnamon.jpg'
import cardamom from '../../assets/cardamom.jpg'
import cloves from '../../assets/cloves.jpg'
import vanilla from '../../assets/vanilla.jpg'
import nutmeg from '../../assets/nutmeg.jpg'
import cinnamon_ground from '../../assets/cinnamon ground.jpg'
import cloves_ground from '../../assets/cloves ground.jpg'
import cardamom_ground from '../../assets/cardamom ground.jpg'
import pepper_ground from '../../assets/pepper ground.jpg'
import pepper_500 from '../../assets/pepper500.jpg'
import pepper_cracked from '../../assets/pepper cracked.jpg'
import quillings from '../../assets/quillings.jpg'
import C4 from '../../assets/C4.jpg'
import H1 from '../../assets/H1.jpg'
import H2 from '../../assets/H2.png'






const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('cinnamon');

  const productDetails = {
    cinnamon: {
      title: "Our Ceylon Cinnamon Range",
      items: [
        { name: "Alba Grade", desc: "The highest premium quality grade. Thin, smooth, and highly prized quills (≤ 6 mm diameter).", img: product1 },
        { name: "C5 Extra Special", desc: "Excellent premium grade with slender, neatly rolled quills (≤ 8 mm diameter).", img: product2 },
        { name: "C5 Special", desc: "A top-tier traditional grade displaying great color, tight rolling, and sweet flavor profile (≤ 10 mm diameter).", img: product3 },
        { name: "C5 Sticks", desc: "Standard high-quality commercial quills featuring classic aroma and rich golden appearance.", img: product3 },
        { name: "C4 Sticks", desc: "Standard high-quality commercial C4 quills featuring classic aroma and rich golden appearance.", img: C4 },
        { name: "H1 Sticks", desc: "Standard H1 commercial quills featuring classic aroma and rich golden appearance.", img: H1 },
        { name: "H2 Sticks", desc: "Standard H2 commercial quills featuring classic aroma and rich golden appearance.", img: H2 },
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

      {/* =========================================================
          SECTION 1: MAIN PRODUCTS DISPLAY (CLEANED OF INLINE STYLES)
          ========================================================= */}
      <div className="product-categories">
        <div className="cat-card">
          <img src={cinnamon} alt="Cinnamon" />
          <h3>Ceylon Cinnamon</h3>
          <p>Premium Ceylon Cinnamon is valued for its delicate aroma and natural sweetness, offering a refined and distinctive flavor profile.</p>
          <a href="/products/cinnamon" className="read-more-btn">Read More</a>
        </div>

        <div className="cat-card">
          <img src={pepper_500} alt="black pepper" />
          <h3>Black Pepper</h3>
          <p>Premium Sri Lankan black pepper is valued for its bold aroma and high piperine content, offering a vibrant and distinctive flavour profile.</p>
          <a href="/products/pepper" className="read-more-btn">Read More</a>
        </div>

        <div className="cat-card">
          <img src={cardamom} alt="Cardamom" />
          <h3>Green Cardamom</h3>
          <p>Premium Ceylon Green Cardamom is prized for its cooling, floral aroma and high cineole content, offering a sweet yet complex flavour profile.</p>
          <a href="/products/cardamom" className="read-more-btn">Read More</a>
        </div>

        <div className="cat-card">
          <img src={cloves} alt="Cloves" />
          <h3>Cloves</h3>
          <p>Premium Ceylon Cloves are prized for its intense, warm aroma and high eugenol oil content, offering a bold and pungent flavour profile.</p>
          <a href="/products/cloves" className="read-more-btn">Read More</a>
        </div>
      </div>

      <div className="product-categories">
        <div className="cat-card">
          <img src={vanilla} alt="Vanilla" />
          <h3>Vanilla</h3>
          <p>Premium Ceylon Vanilla is valued for its rich, cream-like aroma and deep, complex sweetness, offering a velvety and distinctive flavor profile.</p>
          <a href="/products/vanilla" className="read-more-btn">Read More</a>
        </div>

        <div className="cat-card">
          <img src={nutmeg} alt="Nutmeg" />
          <h3>Nutmeg</h3>
          <p>Premium Sri Lankan Nutmeg is valued for its warm, woody aroma and high essential oil content, offering a highly aromatic and distinctive flavor profile.</p>
          <a href="/products/nutmeg" className="read-more-btn">Read More</a>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0' }} />

      {/* =========================================================
          SECTION 2: VARIETY EXPLORER (SIDEBAR AT EXACTLY 100PX)
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
                {key === 'pepper' ? 'Black Pepper' : key === 'cardamom' ? 'Green Cardamom' : key}
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