import React, { useState } from 'react';
import '../ComponentsCSS/CheckoutButton.css';
import {useNavigate} from 'react-router-dom';

const CheckoutButton = ({ total, itemCount, onCheckout, isLoading = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isLoading) {
      onCheckout();
      navigate('/checkout');
    }
  };

  return (
    <div className="ecom-checkout-button__container">
      <button
        className={`ecom-checkout-button ${isLoading ? 'ecom-checkout-button--loading' : ''}`}
        onClick={handleCheckout}
        disabled={isLoading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
          <>
            <div className="ecom-checkout-button__spinner"></div>
            Processing...
          </>
        ) : (
          <>
            <span className="ecom-checkout-button__text">Proceed to Checkout</span>
            <span className="ecom-checkout-button__total">${total.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Secure Payment Icons */}
      <div className={`ecom-checkout-button__payment-icons ${isHovered ? 'ecom-checkout-button__payment-icons--visible' : ''}`}>
        <i className="fab fa-cc-visa" title="Visa"></i>
        <i className="fab fa-cc-mastercard" title="Mastercard"></i>
        <i className="fab fa-cc-amex" title="American Express"></i>
        <i className="fab fa-cc-paypal" title="PayPal"></i>
        <i className="fab fa-apple-pay" title="Apple Pay"></i>
      </div>

      {/* Quick Info */}
      <div className="ecom-checkout-button__info">
        <div className="ecom-checkout-button__info-item">
          <i className="fas fa-shipping-fast"></i>
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="ecom-checkout-button__info-item">
          <i className="fas fa-undo"></i>
          <span>30-day money-back guarantee</span>
        </div>
        <div className="ecom-checkout-button__info-item">
          <i className="fas fa-lock"></i>
          <span>Secure SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;