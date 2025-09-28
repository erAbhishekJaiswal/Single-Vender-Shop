import React, { useState } from 'react';
import '../../ComponentsCSS/Products/ProductCard.css';

const ProductCard = ({ product, viewMode }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product.name);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // Quick view logic here
    console.log('Quick view:', product.name);
  };

  const getDiscountPercentage = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < Math.floor(rating) 
            ? 'ecom-product-card__star--full'
            : index < rating 
            ? 'ecom-product-card__star--half'
            : 'ecom-product-card__star--empty'
        }`}
      ></i>
    ));
  };

  return (
    <div className={`ecom-product-card ecom-product-card--${viewMode}`}>
      {/* Product Image */}
      <div className="ecom-product-card__image-container">
        {!imageLoaded && !imageError && (
          <div className="ecom-product-card__image-skeleton"></div>
        )}
        
        <img
          src={imageError ? '/images/placeholder-product.jpg' : product.image}
          alt={product.name}
          className={`ecom-product-card__image ${
            imageLoaded ? 'ecom-product-card__image--loaded' : ''
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Badges */}
        <div className="ecom-product-card__badges">
          {product.onSale && (
            <span className="ecom-product-card__badge ecom-product-card__badge--sale">
              -{getDiscountPercentage()}%
            </span>
          )}
          {product.isNew && (
            <span className="ecom-product-card__badge ecom-product-card__badge--new">
              New
            </span>
          )}
          {!product.inStock && (
            <span className="ecom-product-card__badge ecom-product-card__badge--out-of-stock">
              Out of Stock
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="ecom-product-card__actions">
          <button
            className="ecom-product-card__action-btn ecom-product-card__action-btn--wishlist"
            onClick={handleWishlistToggle}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <i className={`fas ${isWishlisted ? 'fa-heart' : 'fa-heart'}`}></i>
          </button>
          
          <button
            className="ecom-product-card__action-btn ecom-product-card__action-btn--quickview"
            onClick={handleQuickView}
            title="Quick View"
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`ecom-product-card__add-to-cart ${
            !product.inStock ? 'ecom-product-card__add-to-cart--disabled' : ''
          }`}
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <>
              <i className="fas fa-shopping-cart"></i>
              Add to Cart
            </>
          ) : (
            'Out of Stock'
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="ecom-product-card__info">
        <div className="ecom-product-card__category">{product.category}</div>
        
        <h3 className="ecom-product-card__name">{product.name}</h3>
        
        <div className="ecom-product-card__brand">{product.brand}</div>

        {/* Rating */}
        <div className="ecom-product-card__rating">
          <div className="ecom-product-card__stars">
            {renderStars(product.rating)}
          </div>
          <span className="ecom-product-card__rating-value">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="ecom-product-card__price">
          {product.originalPrice && product.originalPrice > product.price ? (
            <>
              <span className="ecom-product-card__current-price">${product.price.toFixed(2)}</span>
              <span className="ecom-product-card__original-price">${product.originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="ecom-product-card__current-price">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Features (List View Only) */}
        {viewMode === 'list' && product.features && (
          <ul className="ecom-product-card__features">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="ecom-product-card__feature">
                <i className="fas fa-check"></i>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Description (List View Only) */}
        {viewMode === 'list' && (
          <p className="ecom-product-card__description">
            High-quality product with excellent features and customer satisfaction guarantee.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;