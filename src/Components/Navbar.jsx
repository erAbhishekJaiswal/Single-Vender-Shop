// import React, { useState } from 'react';
// import '../ComponentsCSS/Navbar.css';
// import { FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="ecom-navbar">
//       <div className="ecom-navbar__container">
//         {/* Logo */}
//         <div className="ecom-navbar__logo">
//           <h2>ShopEase</h2>
//         </div>

//         {/* Search Bar */}
//         <div className="ecom-navbar__search">
//           <input 
//             type="text" 
//             placeholder="Search products..." 
//             className="ecom-navbar__search-input"
//           />
//           <button className="ecom-navbar__search-btn">
//             <i className="fas fa-search"><FaSearch /></i>
            
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className={`ecom-navbar__menu ${isMenuOpen ? 'ecom-navbar__menu--active' : ''}`}>
//           <li className="ecom-navbar__item">
//             <a href="/" className="ecom-navbar__link">Home</a>
//           </li>
//           <li className="ecom-navbar__item">
//             <a href="/products" className="ecom-navbar__link">Products</a>
//           </li>
//           <li className="ecom-navbar__item">
//             <a href="/categories" className="ecom-navbar__link">Categories</a>
//           </li>
//           <li className="ecom-navbar__item">
//             <a href="/deals" className="ecom-navbar__link">Deals</a>
//           </li>
//         </ul>

//         {/* Icons */}
//         <div className="ecom-navbar__icons">
//           <button className="ecom-navbar__icon-btn">
//             <i className="fas fa-user"></i>
//             <span className="ecom-navbar__icon-text">Account</span>
//           </button>
//           <button className="ecom-navbar__icon-btn">
//             <i className="fas fa-heart"></i>
//             <span className="ecom-navbar__icon-text">Wishlist</span>
//           </button>
//           <button className="ecom-navbar__icon-btn">
//             <i className="fas fa-shopping-cart"></i>
//             <span className="ecom-navbar__icon-text">Cart (3)</span>
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="ecom-navbar__toggle"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="ecom-navbar__toggle-bar"></span>
//           <span className="ecom-navbar__toggle-bar"></span>
//           <span className="ecom-navbar__toggle-bar"></span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;














import React, { useState } from 'react';
import '../ComponentsCSS/Navbar.css';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="ecom-navbar">
      <div className="ecom-navbar__container">
        {/* Logo */}
        <div className="ecom-navbar__logo">
          <h2>Vendor Shop</h2>
        </div>

        {/* Search Bar */}
        <div className="ecom-navbar__search">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="ecom-navbar__search-input"
          />
          <button className="ecom-navbar__search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`ecom-navbar__menu ${isMenuOpen ? 'ecom-navbar__menu--active' : ''}`}>
          <li><a href="/" className="ecom-navbar__link">Home</a></li>
          <li><Link to="/products" className="ecom-navbar__link">Products</Link></li>
          {/* <li><Link to="/categories" className="ecom-navbar__link">Categories</Link></li> */}
          <li><Link to="/deals" className="ecom-navbar__link">Deals</Link></li>
        </ul>

        {/* Icons */}
        <div className="ecom-navbar__icons">
          <button onClick={() => navigate('/account')} className="ecom-navbar__icon-btn"><FaUser /><span>Account</span></button>
          <button onClick={() => navigate('/wishlist')} className="ecom-navbar__icon-btn"><FaHeart /><span>Wishlist</span></button>
          <button onClick={() => navigate('/cart')} className="ecom-navbar__icon-btn"><FaShoppingCart /><span>Cart (1)</span></button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="ecom-navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="ecom-navbar__toggle-bar"></span>
          <span className="ecom-navbar__toggle-bar"></span>
          <span className="ecom-navbar__toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
