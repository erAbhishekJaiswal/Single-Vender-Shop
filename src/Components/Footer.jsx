import React from 'react';
import '../ComponentsCSS/Footer.css';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ecom-footer">
      <div className="ecom-footer__container">
        {/* Main Footer Content */}
        <div className="ecom-footer__main">
          {/* Company Info */}
          <div className="ecom-footer__section">
            <div className="ecom-footer__logo">
              <h3>ShopEase</h3>
            </div>
            <p className="ecom-footer__description">
              Your one-stop destination for all your shopping needs. 
              We offer quality products with fast delivery and excellent customer service.
            </p>
            <div className="ecom-footer__social">
              <a href="#" className="ecom-footer__social-link">
                  <TiSocialFacebookCircular />
              </a>
              <a href="#" className="ecom-footer__social-link">
                <CiTwitter />
              </a>
              <a href="#" className="ecom-footer__social-link">
                <FaInstagram />
              </a>
              <a href="#" className="ecom-footer__social-link">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ecom-footer__section">
            <h4 className="ecom-footer__title">Quick Links</h4>
            <ul className="ecom-footer__links">
              <li><Link to="/about" className="ecom-footer__link">About Us</Link></li>
              <li><Link to="/contact" className="ecom-footer__link">Contact Us</Link></li>
              <li><Link to="/faq" className="ecom-footer__link">FAQ</Link></li>
              <li><Link to="/terms-of-service" className="ecom-footer__link">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="ecom-footer__link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="ecom-footer__section">
            <h4 className="ecom-footer__title">Categories</h4>
            <ul className="ecom-footer__links">
              <li><Link to="/electronics" className="ecom-footer__link">Electronics</Link></li>
              <li><Link to="/fashion" className="ecom-footer__link">Fashion</Link></li>
              <li><Link to="/home" className="ecom-footer__link">Home & Kitchen</Link></li>
              <li><Link to="/beauty" className="ecom-footer__link">Beauty</Link></li>
              <li><Link to="/sports" className="ecom-footer__link">Sports & Outdoors</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="ecom-footer__section">
            <h4 className="ecom-footer__title">Newsletter</h4>
            <p className="ecom-footer__newsletter-text">
              Subscribe to get special offers and discount coupons
            </p>
            <div className="ecom-footer__newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="ecom-footer__newsletter-input"
              />
              <button className="ecom-footer__newsletter-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="ecom-footer__contact">
              <div className="ecom-footer__contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="ecom-footer__contact-item">
                <i className="fas fa-envelope"></i>
                <span>support@shopease.com</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="ecom-footer__bottom">
          <div className="ecom-footer__copyright">
            <p>&copy; 2025 VenderShop. All rights reserved. Developed & Designed by Kumarinfotech</p>
          </div>
          {/* <div className="ecom-footer__payment">
            <i className="fab fa-cc-visa ecom-footer__payment-icon">P</i>
            <i className="fab fa-cc-mastercard ecom-footer__payment-icon">M</i>
            <i className="fab fa-cc-paypal ecom-footer__payment-icon">P</i>
            <i className="fab fa-cc-apple-pay ecom-footer__payment-icon">A</i>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;