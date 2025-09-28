import React from 'react';
import ProductCard from './ProductCard';
import '../../ComponentsCSS/Products/ProductGrid.css';

const ProductGrid = ({ products, viewMode, isLoading }) => {
  if (isLoading) {
    return (
      <div className="ecom-product-grid">
        <div className="ecom-product-grid__skeleton">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="ecom-product-grid__skeleton-card">
              <div className="ecom-product-grid__skeleton-image"></div>
              <div className="ecom-product-grid__skeleton-content">
                <div className="ecom-product-grid__skeleton-title"></div>
                <div className="ecom-product-grid__skeleton-price"></div>
                <div className="ecom-product-grid__skeleton-rating"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="ecom-product-grid__empty">
        <div className="ecom-product-grid__empty-icon">
          <i className="fas fa-search"></i>
        </div>
        <h3 className="ecom-product-grid__empty-title">No products found</h3>
        <p className="ecom-product-grid__empty-text">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
        <button className="ecom-product-grid__empty-btn">
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className={`ecom-product-grid ecom-product-grid--${viewMode}`}>
      <div className={`ecom-product-grid__container ecom-product-grid__container--${viewMode}`}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;