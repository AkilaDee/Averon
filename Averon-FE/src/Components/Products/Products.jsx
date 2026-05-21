import React, { useState } from 'react'
import './Products.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import product1 from '../../assets/alba.JPG'
import product2 from '../../assets/c5spec.JPG'
import product3 from '../../assets/c5stick.JPG'
import pepper from '../../assets/pepper.jpg'
import cinnamon from '../../assets/cinnamon.jpg'
import cardamom from '../../assets/cardamom.jpg'
import cloves from '../../assets/cloves.jpg'
import vanilla from '../../assets/vanilla.jpg'
import nutmeg from '../../assets/nutmeg.jpg'

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
        { name: "Cinnamon Powder", desc: "100% Pure, ultra-fine mesh (60-80).", img: product3 }
      ]
    },
    pepper: {
      title: "Our Black Pepper Range",
      items: [
        { name: "Whole Black Pepper (550 GL)", desc: "High piperine content, robust berries perfect for retail packing and high-volume grinding.", img: pepper },
        { name: "Whole Black Pepper (500 GL)", desc: "Standard grade whole peppercorns suited for commercial blending.", img: pepper },
        { name: "Black Pepper Powder", desc: "Standard grade Black pepper powder.", img: pepper }
      ]
    },
    cardamom: {
      title: "Our Green Cardamom Range",
      items: [
        { name: "Jumbo Green Cardamom (LG)", desc: "Large, bright green pods packed with essential oils and intense fragrance.", img: cardamom },
        { name: "Green Cardamom Powder", desc: "Large, bright green powder packed with essential oils and intense fragrance.", img: cardamom }
      ]
    },
    cloves: {
      title: "Our Clove Range",
      items: [
        { name: "Hand-Picked Premium Cloves", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves },
        { name: "Premium Cloves Powder", desc: "Whole, full-headed cloves with zero headless units, high in eugenol oil.", img: cloves }
      ]
    },
    vanilla: {
      title: "Our Vanilla Range",
      items: [
        { name: "Gourmet Grade A Bourbon Pods", desc: "Plump, oily, moisture-rich pods boasting a deep, rich vanillin profile.", img: vanilla }
      ]
    },
    nutmeg: {
      title: "Our Nutmeg Range",
      items: [
        { name: "Whole Nutmeg (ABCD Grade)", desc: "High-density, oil-rich whole nuts entirely free from blemishes.", img: nutmeg }
      ]
    }
  };

  return (
    <div className='products' style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', color: '#111111' }}>

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
          <img src={pepper} alt="black pepper" />
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
      <div className="variety-explorer-section" style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '26px', marginBottom: '30px', color: '#1E293B', textAlign: 'center', fontWeight: '700' }}>Explore Our Product Range</h2>
        
        <div className="explorer-split-container" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', width: '100%' }}>
          
          {/* LEFT SIDEBAR MENU (Set to exactly 100px top margin) */}
          <div className="variety-sidebar-menu" style={{ flex: '0 0 200px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '100px' }}>
            {Object.keys(productDetails).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                style={{
                  background: selectedCategory === key ? '#E8AF03' : '#fafafa',
                  color: '#111111',
                  border: '1px solid',
                  borderColor: selectedCategory === key ? '#E8AF03' : '#ddd',
                  padding: '14px 22px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '15px',
                  textAlign: 'left',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === key ? '0 3px 10px rgba(232, 175, 3, 0.3)' : 'none'
                }}
              >
                {key === 'pepper' ? 'Black Pepper' : key === 'cardamom' ? 'Green Cardamom' : key}
              </button>
            ))}
          </div>

          {/* RIGHT VARIETY DISPLAY CONTAINER */}
          <div className="variety-results-display" style={{ flex: '1', background: '#fafafa', padding: '25px', borderRadius: '12px', border: '1px solid #ddd', minHeight: '450px' }}>
            <h3 style={{ fontSize: '22px', marginTop: '0', marginBottom: '25px', color: '#1E293B', borderBottom: '2px solid #E8AF03', paddingBottom: '12px', fontWeight: '600' }}>
              {productDetails[selectedCategory].title}
            </h3>
            
            <div className="variety-items-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              {productDetails[selectedCategory].items.map((item, index) => (
                <div key={index} className="variety-item-card" style={{ background: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 3px 8px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <img src={item.img} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
                    <h4 style={{ margin: '0 0 8px 0', color: '#1E293B', fontSize: '16px', lineHeight: '1.3', fontWeight: '600' }}>{item.name}</h4>
                  </div>
                  <p style={{ fontSize: '13px', color: '#111111', lineHeight: '1.4', margin: '0', opacity: 0.9 }}>{item.desc}</p>
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