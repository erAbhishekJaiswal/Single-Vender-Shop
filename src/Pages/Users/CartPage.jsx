import React, { useState } from 'react';
import CartItemList from '../../Components/CartItemList';
import CheckoutButton from '../../Components/CheckoutButton';
import '../../CssFiles/Users/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 99.99,
      quantity: 2,
      image: "/images/headphones.jpg",
      color: "Black",
      size: "Standard",
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      quantity: 1,
      image: "/images/watch.jpg",
      color: "Silver",
      size: "Medium",
      inStock: true,
      maxQuantity: 3
    },
    {
      id: 3,
      name: "USB-C Charging Cable",
      price: 19.99,
      quantity: 3,
      image: "/images/cable.jpg",
      color: "White",
      size: "1m",
      inStock: true,
      maxQuantity: 10
    }
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId 
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const moveToWishlist = (itemId) => {
    // Implementation for moving to wishlist
    console.log('Move to wishlist:', itemId);
    removeItem(itemId);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 50 ? 0 : 9.99; // Free shipping over $50
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="ecom-cart-page">
        <div className="ecom-cart-page__empty">
          <div className="ecom-cart-page__empty-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <h2 className="ecom-cart-page__empty-title">Your cart is empty</h2>
          <p className="ecom-cart-page__empty-text">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button className="ecom-cart-page__empty-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ecom-cart-page">
      <div className="ecom-cart-page__container">
        {/* Header */}
        <div className="ecom-cart-page__header">
          <h1 className="ecom-cart-page__title">Shopping Cart</h1>
          <span className="ecom-cart-page__item-count">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="ecom-cart-page__content">
          {/* Cart Items List */}
          <div className="ecom-cart-page__items-section">
            <CartItemList
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onMoveToWishlist={moveToWishlist}
            />
          </div>

          {/* Order Summary */}
          <div className="ecom-cart-page__summary-section">
            <div className="ecom-cart-page__summary">
              <h3 className="ecom-cart-page__summary-title">Order Summary</h3>
              
              <div className="ecom-cart-page__summary-details">
                <div className="ecom-cart-page__summary-row">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                
                <div className="ecom-cart-page__summary-row">
                  <span>Shipping</span>
                  <span>
                    {calculateShipping() === 0 ? (
                      <span className="ecom-cart-page__free-shipping">FREE</span>
                    ) : (
                      `$${calculateShipping().toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="ecom-cart-page__summary-row">
                  <span>Tax</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                
                <div className="ecom-cart-page__summary-divider"></div>
                
                <div className="ecom-cart-page__summary-row ecom-cart-page__summary-row--total">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Progress */}
              {calculateSubtotal() < 50 && (
                <div className="ecom-cart-page__shipping-progress">
                  <div className="ecom-cart-page__progress-text">
                    Add ${(50 - calculateSubtotal()).toFixed(2)} more for free shipping!
                  </div>
                  <div className="ecom-cart-page__progress-bar">
                    <div 
                      className="ecom-cart-page__progress-fill"
                      style={{ width: `${(calculateSubtotal() / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <CheckoutButton 
                total={calculateTotal()}
                itemCount={getTotalItems()}
                onCheckout={() => console.log('Proceeding to checkout')}
              />

              {/* Security Badges */}
              <div className="ecom-cart-page__security">
                <div className="ecom-cart-page__security-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure Checkout</span>
                </div>
                <div className="ecom-cart-page__security-item">
                  <i className="fas fa-lock"></i>
                  <span>SSL Encrypted</span>
                </div>
                <div className="ecom-cart-page__security-item">
                  <i className="fas fa-undo"></i>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="ecom-cart-page__promo">
              <h4 className="ecom-cart-page__promo-title">Apply Promo Code</h4>
              <div className="ecom-cart-page__promo-input-group">
                <input 
                  type="text" 
                  placeholder="Enter promo code"
                  className="ecom-cart-page__promo-input"
                />
                <button className="ecom-cart-page__promo-btn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;