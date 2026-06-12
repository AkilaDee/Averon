import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { spiceInventory } from '../Data/ProductData';
import './Sale.css';

export default function Sale() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedVariety, setSelectedVariety] = useState(null);
  
  // Modal toggle hooks
  const [activePopupProduct, setActivePopupProduct] = useState(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [popupQty, setPopupQty] = useState(1);

  // Extract separate category tags
  const varieties = [...new Set(spiceInventory.map(item => item.variety))];

  // Dynamic product array builder
  const displayedProducts = selectedVariety
    ? spiceInventory.filter(item => item.variety === selectedVariety)
    : spiceInventory.filter(item => item.onSale === true);

  // Calculate global pack quantity
  const totalPacksCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate running total valuation
  const estimatedTotalValuation = cart.reduce((total, item) => total + (item.pricePerKg * item.quantity), 0);

  const handleOpenPopup = (product) => {
    setActivePopupProduct(product);
    setPopupQty(1); // Reset counter defaults
  };

  const handlePopupSubmit = () => {
    addToCart(activePopupProduct, popupQty);
    setActivePopupProduct(null); // Close modal view
    setIsCartDrawerOpen(true);   // Display the slide-out drawer instantly
  };

  return (
    <div className="sale-page-wrapper">
      <h1 className="sale-title">Sale</h1>
      <p className="sale-subtitle">Premium direct-import spice stocks processed into retail-ready 1kg configurations.</p>

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
                onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Averon+Supplies"; }}
              />
            </div>
            <div className="card-info">
              <span className="card-variety">{product.variety}</span>
              <h3 className="card-title">{product.title}</h3>
              
              <div className="card-price-row">
                <div className="card-price">
                  £{product.pricePerKg.toFixed(2)} <span>/ kg</span>
                </div>
                <button className="view-details-btn" onClick={() => handleOpenPopup(product)}>
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= FLOATING CART TOGGLE TRIGGER BUTTON ================= */}
      <button className="floating-cart-trigger" onClick={() => setIsCartDrawerOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        {totalPacksCount > 0 && <span className="floating-badge">{totalPacksCount}</span>}
      </button>

      {/* ================= DIAGRAM 1: PRODUCT SELECTION MODAL POPUP ================= */}
      {activePopupProduct && (
        <div className="modal-overlay" onClick={() => setActivePopupProduct(null)}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setActivePopupProduct(null)}>✕</button>
            
            <div className="popup-left-pane">
              <img 
                src={activePopupProduct.image} 
                alt={activePopupProduct.title} 
                className="popup-main-img"
                onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Averon+Supplies"; }}
              />
              <div className="popup-bullet-details">
                <p><strong>Product:</strong> {activePopupProduct.title}</p>
                <p><strong>Category Type:</strong> {activePopupProduct.variety}</p>
                <p>{activePopupProduct.description}</p>
              </div>
            </div>

            <div className="popup-right-pane">
              <span className="stock-status-tag">● ACTIVE ALLOCATION AVAILABLE</span>
              <h2 className="popup-title">{activePopupProduct.title}</h2>
              
              <div className="pack-config-selector">
                <span className="pack-label">Size</span>
                <span className="active-size-pill">1.0 kg</span>
              </div>

              <div className="popup-price">
                £{activePopupProduct.pricePerKg.toFixed(2)} GBP
              </div>

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
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= DIAGRAM 2: SLIDING DRAWER BASKET PANEL ================= */}
      {isCartDrawerOpen && (
        <div className="modal-overlay" onClick={() => setIsCartDrawerOpen(false)}>
          <div className="cart-sliding-drawer" onClick={(e) => e.stopPropagation()}>
            
            <div className="drawer-header">
              <h2>Your cart</h2>
              <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsCartDrawerOpen(false)}>✕</button>
            </div>

            <div className="shipping-promo-banner">
              Freight quotes compiled dynamically upon checkout sequence
            </div>

            <div className="drawer-scroll-content">
              {cart.length === 0 ? (
                <p className="empty-text">Your checkout basket is currently empty.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="drawer-cart-item">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="drawer-item-thumbnail" 
                      onError={(e) => { e.target.src = "https://placehold.co/100x100?text=Spice"; }}
                    />
                    <div className="drawer-item-details">
                      <div className="drawer-item-title">{item.title}</div>
                      <div className="drawer-item-packdesc">Size: 1.0kg</div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="quantity-input-wrapper">
                          <input type="text" value={item.quantity} readOnly className="qty-input-box" style={{ width: '35px', height: '28px' }} />
                          <div className="qty-arrow-container">
                            <button className="qty-arrow-btn" style={{ height: '14px' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>▲</button>
                            <button className="qty-arrow-btn" style={{ height: '14px' }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>▼</button>
                          </div>
                        </div>
                        <div className="drawer-item-price-line">
                          £{(item.pricePerKg * item.quantity).toFixed(2)} GBP
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="drawer-checkout-section">
              <div className="total-summary-row">
                <span>Estimated total:</span>
                <span>£{estimatedTotalValuation.toFixed(2)} GBP</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#666', margin: '-5px 0 20px 0' }}>Taxes and logistics variables calculated during dispatch processing.</p>
              
              <button className="checkout-action-btn" disabled={cart.length === 0}>
                CHECKOUT
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}