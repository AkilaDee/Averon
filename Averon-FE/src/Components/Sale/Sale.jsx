import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import './Sale.css';


// 1. Physical asset imports mapping directly to your spice naming convention
import cinnamonQuillsImg from '../../assets/cinnamon.webp';
import cinnamonGroundImg from '../../assets/cinnamon ground.webp';
import cardamomWholeImg from '../../assets/cardamom.webp';
import cardamomGroundImg from '../../assets/cardamom ground.webp';
import clovesWholeImg from '../../assets/cloves.webp';
import clovesGroundImg from '../../assets/cloves ground.webp';
import blackPepperWholeImg from '../../assets/pepper.webp';
import blackPepperGroundImg from '../../assets/pepper ground.webp';
import nutmegWholeImg from '../../assets/nutmeg.webp';
import vanillaWholeImg from '../../assets/vanilla.webp';





const SPICE_IMAGE_MAP = {
  'Cinnamon': {
    'Quills': cinnamonQuillsImg,
    'Powder': cinnamonGroundImg,
    'Ground': cinnamonGroundImg,
  },
  'Black Pepper': {
    'Whole': blackPepperWholeImg,
    'Powder': blackPepperGroundImg,
    'Ground': blackPepperGroundImg,
  },
  'Cardamom': {
    'Whole': cardamomWholeImg,
    'Powder': cardamomGroundImg,
    'Ground': cardamomGroundImg,
  },
  'Cloves': {
    'Whole': clovesWholeImg,
    'Powder': clovesGroundImg,
    'Ground': clovesGroundImg,
  },
  'Nutmeg': {
    'Whole': nutmegWholeImg,
  },
  'Vanilla': {
    'Whole': vanillaWholeImg,
  }
};

const FALLBACK_IMAGE = "https://placehold.co/600x400?text=Averon+Supplies";

// Helper function to calculate price dynamically based on volume tiers
const calculateTieredPrice = (product, quantity) => {
  if (!product.priceTiers || product.priceTiers.length === 0) {
    return product.pricePerUnit;
  }

  let activePrice = product.pricePerUnit;

  // Tiers come from the SQL backend sorted by minimum quantity ascending
  product.priceTiers.forEach(tier => {
    if (quantity >= tier.min_qty) {
      activePrice = Number(tier.price);
    }
  });

  return activePrice;
};

export default function Sale() {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  
  const [spiceInventory, setSpiceInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariety, setSelectedVariety] = useState(null);
  
  const [activePopupProduct, setActivePopupProduct] = useState(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [popupQty, setPopupQty] = useState(1);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  // Fetch updated payload from Express Backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
        const data = await response.json();
        
        const formattedData = data.map(item => {
          const spiceGroup = SPICE_IMAGE_MAP[item.product_name];
          const assignedImage = spiceGroup ? spiceGroup[item.variant_name] : null;

          return {
            id: item.id, // item_id from DB
            title: `${item.product_name} (${item.grade_name})`, 
            variety: item.variant_name, 
            pricePerUnit: Number(item.price_per_unit), 
            unitType: item.unit_type || 'kg', // Dynamic units ('kg', 'pcs', etc.)
            priceTiers: item.price_tiers || [], // Array of bulk thresholds
            image: assignedImage || FALLBACK_IMAGE,
            description: item.specification ? `Specification: ${item.specification}` : 'Premium supply batch.',
            onSale: item.in_shop 
          };
        });

        setSpiceInventory(formattedData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load inventory from database API:', err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setCheckoutLoading(true);
    try {
      const targetItem = cart[0];

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerEmail: "wholesale-buyer@averon.co.uk", 
          itemId: targetItem.id, // Sends unified item_id
          quantity: targetItem.quantity, 
          finalPricePayed: calculateTieredPrice(targetItem, targetItem.quantity),
          paymentMethod: "Card Processing"
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Success! Payment verified and stock allocation locked.");
        clearCart(); 
        setIsCartDrawerOpen(false); 
      } else {
        alert(`Checkout Denied: ${result.error}`);
      }
    } catch (err) {
      console.error("Error communicating with checkout API:", err);
      alert("Network error occurred during payment processing sequence.");
    } finally {
      setCheckoutLoading(false);
    }
  };

  const varieties = [...new Set(spiceInventory.map(item => item.variety))];

  const displayedProducts = selectedVariety
    ? spiceInventory.filter(item => item.variety === selectedVariety)
    : spiceInventory.filter(item => item.onSale === true);

  // Totals calculated using the dynamic tiered framework
  const totalUnitsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const estimatedTotalValuation = cart.reduce((total, item) => {
    const itemPrice = calculateTieredPrice(item, item.quantity);
    return total + (itemPrice * item.quantity);
  }, 0);

  const handleOpenPopup = (product) => {
    setActivePopupProduct(product);
    setPopupQty(1);
  };

  const handlePopupSubmit = () => {
    // Inject current calculated active tier price into cart item payload snapshot
    const finalPrice = calculateTieredPrice(activePopupProduct, popupQty);
    const productWithPriceSnapshot = {
      ...activePopupProduct,
      currentAppliedPrice: finalPrice
    };
    
    addToCart(productWithPriceSnapshot, popupQty);
    setActivePopupProduct(null);
    setIsCartDrawerOpen(true);
  };

  if (loading) {
    return <div className="loading-state" style={{ padding: '40px', textAlign: 'center' }}>Loading live stock layout directly from database ledger...</div>;
  }

  return (
    <div className="sale-page-wrapper">
      <h1 className="sale-title">Sale</h1>
      <p className="sale-subtitle">Premium direct-import spice stocks processed into custom trade units.</p>

      {/* Categories Filter Bar */}
      <div className="filter-row">
        <button 
          onClick={() => setSelectedVariety(null)} 
          className={`filter-btn ${selectedVariety === null ? 'active' : ''}`}
        >
          All Sale Offers
        </button>
        {varieties.map(variety => (
          <button 
            key={variety} 
            onClick={() => setSelectedVariety(variety)} 
            className={`filter-btn ${selectedVariety === variety ? 'active' : ''}`}
          >
            {variety}
          </button>
        ))}
      </div>

      {/* Product Grid Display */}
      <div className="products-grid">
        {displayedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="card-img-container">
              <img 
                src={product.image} 
                alt={product.title} 
                className="card-img" 
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
              />
            </div>
            <div className="card-info">
              <span className="card-variety">{product.variety}</span>
              <h3 className="card-title">{product.title}</h3>
              
              <div className="card-price-row">
                <div className="card-price">
                  £{product.pricePerUnit.toFixed(2)} <span>/ {product.unitType}</span>
                </div>
                <button className="view-details-btn" onClick={() => handleOpenPopup(product)}>
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING CART TOGGLE TRIGGER BUTTON */}
      <button className="floating-cart-trigger" onClick={() => setIsCartDrawerOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        {totalUnitsCount > 0 && <span className="floating-badge">{totalUnitsCount}</span>}
      </button>

      {/* PRODUCT SELECTION MODAL POPUP */}
      {activePopupProduct && (
        <div className="modal-overlay" onClick={() => setActivePopupProduct(null)}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setActivePopupProduct(null)}>✕</button>
            
            <div className="popup-left-pane">
              <img 
                src={activePopupProduct.image} 
                alt={activePopupProduct.title} 
                className="popup-main-img"
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
              />
              <div className="popup-bullet-details">
                <p><strong>Product:</strong> {activePopupProduct.title}</p>
                <p><strong>Category Type:</strong> {activePopupProduct.variety}</p>
                <p>{activePopupProduct.description}</p>
              </div>
            </div>

            <div className="popup-right-pane">
              <span className="stock-status-tag">● ACTIVE BATCH ALLOCATION</span>
              <h2 className="popup-title">{activePopupProduct.title}</h2>
              
              <div className="pack-config-selector">
                <span className="pack-label">Base Configuration</span>
                <span className="active-size-pill">1.0 {activePopupProduct.unitType}</span>
              </div>

              {/* Dynamic Price Display Changes Instantly As User Increments Quantity */}
              <div className="popup-price">
                £{(calculateTieredPrice(activePopupProduct, popupQty)).toFixed(2)} <span style={{fontSize: '1rem', color: '#666'}}>per {activePopupProduct.unitType}</span>
              </div>

              {activePopupProduct.priceTiers.length > 1 && (
                <div className="tier-discount-legend" style={{ margin: '10px 0', padding: '8px', background: '#f5f5f5', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>Volume Trade Discounts Available:</span>
                  {activePopupProduct.priceTiers.map((t, idx) => (
                    <div key={idx}>Buy {parseFloat(t.min_qty)} {activePopupProduct.unitType}+: Get it for <strong style={{color: '#2e7d32'}}>£{parseFloat(t.price).toFixed(2)}</strong></div>
                  ))}
                </div>
              )}

              <div className="action-row">
                <div className="quantity-input-wrapper">
                  <input 
                    type="text" 
                    value={popupQty} 
                    readOnly 
                    className="qty-input-box"
                  />
                  <div className="qty-arrow-container">
                    <button className="qty-arrow-btn" onClick={() => setPopupQty(prev => prev + 1)}>▲</button>
                    <button className="qty-arrow-btn" onClick={() => setPopupQty(prev => Math.max(1, prev - 1))}>▼</button>
                  </div>
                </div>

                <button className="add-to-cart-action-btn" onClick={handlePopupSubmit}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  ADD TO BASKET
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SLIDING DRAWER BASKET PANEL */}
      {isCartDrawerOpen && (
        <div className="modal-overlay" onClick={() => setIsCartDrawerOpen(false)}>
          <div className="cart-sliding-drawer" onClick={(e) => e.stopPropagation()}>
            
            <div className="drawer-header">
              <h2>Your basket</h2>
              <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsCartDrawerOpen(false)}>✕</button>
            </div>

            <div className="shipping-promo-banner">
              Logistics and dynamic freight compiled automatically upon verification
            </div>

            <div className="drawer-scroll-content">
              {cart.length === 0 ? (
                <p className="empty-text">Your checkout basket is currently empty.</p>
              ) : (
                cart.map(item => {
                  const runningTierPrice = calculateTieredPrice(item, item.quantity);
                  return (
                    <div key={item.id} className="drawer-cart-item">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="drawer-item-thumbnail" 
                        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                      />
                      <div className="drawer-item-details">
                        <div className="drawer-item-title">{item.title}</div>
                        <div className="drawer-item-packdesc">Unit: 1.0{item.unitType}</div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div className="quantity-input-wrapper">
                            <input type="text" value={item.quantity} readOnly className="qty-input-box" style={{ width: '35px', height: '28px' }} />
                            <div className="qty-arrow-container">
                              <button className="qty-arrow-btn" style={{ height: '14px' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>▲</button>
                              <button className="qty-arrow-btn" style={{ height: '14px' }} onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>▼</button>
                            </div>
                          </div>
                          <div className="drawer-item-price-line">
                            £{(runningTierPrice * item.quantity).toFixed(2)} GBP
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="drawer-checkout-section">
              <div className="total-summary-row">
                <span>Estimated total:</span>
                <span>£{estimatedTotalValuation.toFixed(2)} GBP</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#666', margin: '-5px 0 20px 0' }}>Taxes and localized logistics variables calculated during dispatch processing.</p>
              
              <button 
                className="checkout-action-btn" 
                disabled={cart.length === 0 || checkoutLoading} 
                onClick={handleCheckout}
              >
                {checkoutLoading ? "PROCESSING..." : "CHECKOUT"}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}