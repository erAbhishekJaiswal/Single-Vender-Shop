import React, { useState } from 'react';
import '../ComponentsCSS/Sidebar.css';
import { FaBars } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Electronics',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
    },
    {
      name: 'Fashion',
      subcategories: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
      name: 'Home & Kitchen',
      subcategories: ['Furniture', 'Appliances', 'Decor', 'Cookware']
    },
    {
      name: 'Beauty',
      subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrances']
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="ecom-sidebar__overlay" onClick={onClose}></div>}
      
      {/* Sidebar */}
      <aside className={`ecom-sidebar ${isOpen ? 'ecom-sidebar--open' : ''}`}>
        <div className="ecom-sidebar__header">
          <h3 className="ecom-sidebar__title">Categories</h3>
          <button className="ecom-sidebar__close" onClick={onClose}>
            {/* <i className="fas fa-times"></i> */}
            <FaBars />
          </button>
        </div>

        <nav className="ecom-sidebar__nav">
          <ul className="ecom-sidebar__menu">
            <li className="ecom-sidebar__item">
              <a href="/" className="ecom-sidebar__link ecom-sidebar__link--main">
                <i className="fas fa-home"></i>
                Home
              </a>
            </li>
            
            {categories.map((category, index) => (
              <li key={index} className="ecom-sidebar__item">
                <button 
                  className={`ecom-sidebar__link ecom-sidebar__link--category ${
                    activeCategory === index ? 'ecom-sidebar__link--active' : ''
                  }`}
                  onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                >
                  <i className="fas fa-chevron-right ecom-sidebar__icon"></i>
                  {category.name}
                </button>
                
                {activeCategory === index && (
                  <ul className="ecom-sidebar__submenu">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="ecom-sidebar__subitem">
                        <a href={`/category/${sub.toLowerCase()}`} className="ecom-sidebar__sublink">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="ecom-sidebar__item">
              <a href="/deals" className="ecom-sidebar__link ecom-sidebar__link--main">
                <i className="fas fa-tag"></i>
                Hot Deals
              </a>
            </li>
            
            <li className="ecom-sidebar__item">
              <a href="/contact" className="ecom-sidebar__link ecom-sidebar__link--main">
                <i className="fas fa-envelope"></i>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="ecom-sidebar__footer">
          <div className="ecom-sidebar__promo">
            <h4>Special Offer!</h4>
            <p>Get 20% off on your first order</p>
            <button className="ecom-sidebar__promo-btn">Shop Now</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;