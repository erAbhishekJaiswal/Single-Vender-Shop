import React, { useState } from 'react';
import '../../ComponentsCSS/Products/ProductFilters.css';

const ProductFilters = ({ filters, onFilterChange, availableBrands, productCount }) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories', count: productCount },
    { value: 'electronics', label: 'Electronics', count: 12 },
    { value: 'clothing', label: 'Clothing', count: 8 },
    { value: 'sports', label: 'Sports', count: 6 },
    { value: 'lifestyle', label: 'Lifestyle', count: 10 },
    { value: 'home', label: 'Home & Garden', count: 7 }
  ];

  const priceRanges = [
    { label: 'Under $25', range: [0, 25] },
    { label: '$25 - $50', range: [25, 50] },
    { label: '$50 - $100', range: [50, 100] },
    { label: '$100 - $200', range: [100, 200] },
    { label: 'Over $200', range: [200, 1000] }
  ];

  const ratings = [4.5, 4.0, 3.5, 3.0];

  const handleCategoryChange = (category) => {
    onFilterChange({ ...filters, category });
  };

  const handlePriceRangeChange = (range) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({ ...filters, rating });
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: updatedBrands });
  };

  const handleStockChange = (inStock) => {
    onFilterChange({ ...filters, inStock });
  };

  const handleSaleChange = (onSale) => {
    onFilterChange({ ...filters, onSale });
  };

  const clearFilters = () => {
    onFilterChange({
      category: 'all',
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      onSale: false,
      brands: []
    });
  };

  return (
    <>
      {/* Mobile Filters Toggle */}
      <button 
        className="ecom-product-filters__mobile-toggle"
        onClick={() => setIsMobileFiltersOpen(true)}
      >
        <i className="fas fa-filter"></i>
        Filters
        <span className="ecom-product-filters__mobile-badge">{productCount}</span>
      </button>

      {/* Filters Overlay */}
      {isMobileFiltersOpen && (
        <div 
          className="ecom-product-filters__overlay"
          onClick={() => setIsMobileFiltersOpen(false)}
        ></div>
      )}

      {/* Filters Sidebar */}
      <div className={`ecom-product-filters ${isMobileFiltersOpen ? 'ecom-product-filters--mobile-open' : ''}`}>
        <div className="ecom-product-filters__header">
          <h3 className="ecom-product-filters__title">Filters</h3>
          <button 
            className="ecom-product-filters__close"
            onClick={() => setIsMobileFiltersOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="ecom-product-filters__content">
          {/* Categories */}
          <div className="ecom-product-filters__section">
            <h4 className="ecom-product-filters__section-title">Categories</h4>
            <div className="ecom-product-filters__categories">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`ecom-product-filters__category ${
                    filters.category === category.value ? 'ecom-product-filters__category--active' : ''
                  }`}
                  onClick={() => handleCategoryChange(category.value)}
                >
                  <span className="ecom-product-filters__category-name">{category.label}</span>
                  <span className="ecom-product-filters__category-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="ecom-product-filters__section">
            <h4 className="ecom-product-filters__section-title">Price Range</h4>
            <div className="ecom-product-filters__price-range">
              <div className="ecom-product-filters__price-inputs">
                <div className="ecom-product-filters__price-input-group">
                  <label>Min</label>
                  <span className="ecom-product-filters__price-prefix">$</span>
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceRangeChange([parseInt(e.target.value) || 0, filters.priceRange[1]])}
                    className="ecom-product-filters__price-input"
                    min="0"
                    max="1000"
                  />
                </div>
                <div className="ecom-product-filters__price-input-group">
                  <label>Max</label>
                  <span className="ecom-product-filters__price-prefix">$</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange([filters.priceRange[0], parseInt(e.target.value) || 1000])}
                    className="ecom-product-filters__price-input"
                    min="0"
                    max="1000"
                  />
                </div>
              </div>
              <div className="ecom-product-filters__price-presets">
                {priceRanges.map((range, index) => (
                  <button
                    key={index}
                    className={`ecom-product-filters__price-preset ${
                      filters.priceRange[0] === range.range[0] && filters.priceRange[1] === range.range[1] 
                        ? 'ecom-product-filters__price-preset--active' 
                        : ''
                    }`}
                    onClick={() => handlePriceRangeChange(range.range)}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="ecom-product-filters__section">
            <h4 className="ecom-product-filters__section-title">Customer Rating</h4>
            <div className="ecom-product-filters__ratings">
              {ratings.map(rating => (
                <button
                  key={rating}
                  className={`ecom-product-filters__rating ${
                    filters.rating === rating ? 'ecom-product-filters__rating--active' : ''
                  }`}
                  onClick={() => handleRatingChange(filters.rating === rating ? 0 : rating)}
                >
                  <div className="ecom-product-filters__rating-stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <i
                        key={star}
                        className={`fas fa-star ${
                          star <= rating ? 'ecom-product-filters__star--active' : 'ecom-product-filters__star--inactive'
                        }`}
                      ></i>
                    ))}
                  </div>
                  <span className="ecom-product-filters__rating-text">& above</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          {availableBrands.length > 0 && (
            <div className="ecom-product-filters__section">
              <h4 className="ecom-product-filters__section-title">Brands</h4>
              <div className="ecom-product-filters__brands">
                {availableBrands.map(brand => (
                  <label key={brand} className="ecom-product-filters__brand">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="ecom-product-filters__brand-checkbox"
                    />
                    <span className="ecom-product-filters__brand-checkmark"></span>
                    <span className="ecom-product-filters__brand-name">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Additional Filters */}
          <div className="ecom-product-filters__section">
            <h4 className="ecom-product-filters__section-title">Other</h4>
            <div className="ecom-product-filters__switches">
              <label className="ecom-product-filters__switch">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => handleStockChange(e.target.checked)}
                  className="ecom-product-filters__switch-input"
                />
                <span className="ecom-product-filters__switch-slider"></span>
                <span className="ecom-product-filters__switch-label">In Stock Only</span>
              </label>
              
              <label className="ecom-product-filters__switch">
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={(e) => handleSaleChange(e.target.checked)}
                  className="ecom-product-filters__switch-input"
                />
                <span className="ecom-product-filters__switch-slider"></span>
                <span className="ecom-product-filters__switch-label">On Sale</span>
              </label>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="ecom-product-filters__actions">
            <button 
              className="ecom-product-filters__clear-btn"
              onClick={clearFilters}
            >
              <i className="fas fa-times"></i>
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;