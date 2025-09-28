import React, { useState, useEffect } from 'react';
import ProductFilters from '../../../Components/Products/ProductFilters';
import ProductGrid from '../../../Components/Products/ProductGrid';
import '../../../CssFiles/Common/Products/ProductListPage.css';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    onSale: false,
    brands: []
  });
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  // Sample products data
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 99.99,
        originalPrice: 129.99,
        image: "/images/headphones.jpg",
        category: "electronics",
        brand: "SoundMax",
        rating: 4.5,
        reviewCount: 128,
        inStock: true,
        onSale: true,
        isNew: true,
        features: ["Noise Cancelling", "30hr Battery", "Fast Charge"]
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "/images/watch.jpg",
        category: "electronics",
        brand: "FitTech",
        rating: 4.2,
        reviewCount: 89,
        inStock: true,
        onSale: false,
        isNew: false,
        features: ["Heart Rate Monitor", "GPS", "Waterproof"]
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        image: "/images/tshirt.jpg",
        category: "clothing",
        brand: "EcoWear",
        rating: 4.7,
        reviewCount: 256,
        inStock: true,
        onSale: true,
        isNew: true,
        features: ["Organic Cotton", "Eco-Friendly", "Machine Wash"]
      },
      {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 24.99,
        image: "/images/bottle.jpg",
        category: "lifestyle",
        brand: "HydroFlask",
        rating: 4.8,
        reviewCount: 342,
        inStock: false,
        onSale: false,
        isNew: false,
        features: ["Insulated", "BPA Free", "Lifetime Warranty"]
      },
      {
        id: 5,
        name: "Professional Camera Lens",
        price: 599.99,
        originalPrice: 799.99,
        image: "/images/lens.jpg",
        category: "electronics",
        brand: "PhotoPro",
        rating: 4.9,
        reviewCount: 67,
        inStock: true,
        onSale: true,
        isNew: false,
        features: ["Image Stabilization", "Weather Sealed", "Fast AF"]
      },
      {
        id: 6,
        name: "Yoga Mat Premium",
        price: 49.99,
        image: "/images/yogamat.jpg",
        category: "sports",
        brand: "ZenLife",
        rating: 4.3,
        reviewCount: 156,
        inStock: true,
        onSale: false,
        isNew: true,
        features: ["Non-Slip", "Eco-Friendly", "Extra Thick"]
      },
      {
        id: 7,
        name: "Wireless Charging Pad",
        price: 39.99,
        originalPrice: 49.99,
        image: "/images/charger.jpg",
        category: "electronics",
        brand: "ChargeTech",
        rating: 4.0,
        reviewCount: 203,
        inStock: true,
        onSale: true,
        isNew: false,
        features: ["Fast Charge", "Multi-Device", "LED Indicator"]
      },
      {
        id: 8,
        name: "Minimalist Backpack",
        price: 79.99,
        image: "/images/backpack.jpg",
        category: "lifestyle",
        brand: "UrbanGear",
        rating: 4.6,
        reviewCount: 189,
        inStock: true,
        onSale: false,
        isNew: true,
        features: ["Waterproof", "Laptop Sleeve", "Multiple Pockets"]
      }
    ];

    setIsLoading(true);
    setTimeout(() => {
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.rating > 0) {
      result = result.filter(product => product.rating >= filters.rating);
    }

    // In stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }

    // On sale filter
    if (filters.onSale) {
      result = result.filter(product => product.onSale);
    }

    // Brand filter
    if (filters.brands.length > 0) {
      result = result.filter(product => filters.brands.includes(product.brand));
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id); // Using ID as proxy for date
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        result.sort((a, b) => b.rating - a.rating); // Sort by rating for featured
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, filters, sortBy]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      onSale: false,
      brands: []
    });
  };

  const getAvailableBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))];
    return brands;
  };

  const getProductStats = () => {
    return {
      total: products.length,
      filtered: filteredProducts.length,
      categories: [...new Set(products.map(product => product.category))].length
    };
  };

  if (isLoading) {
    return (
      <div className="ecom-product-list-page">
        <div className="ecom-product-list-page__loading">
          <div className="ecom-product-list-page__loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ecom-product-list-page">
      <div className="ecom-product-list-page__container">
        {/* Header */}
        {/* <div className="ecom-product-list-page__header">
          <div className="ecom-product-list-page__header-content">
            <h1 className="ecom-product-list-page__title">Our Products</h1>
            <p className="ecom-product-list-page__subtitle">
              Discover amazing products tailored for you
            </p>
          </div>
          <div className="ecom-product-list-page__stats">
            <div className="ecom-product-list-page__stat">
              <span className="ecom-product-list-page__stat-number">{getProductStats().total}</span>
              <span className="ecom-product-list-page__stat-label">Total Products</span>
            </div>
            <div className="ecom-product-list-page__stat">
              <span className="ecom-product-list-page__stat-number">{getProductStats().categories}</span>
              <span className="ecom-product-list-page__stat-label">Categories</span>
            </div>
          </div>
        </div> */}

        {/* Controls Bar */}
        <div className="ecom-product-list-page__controls">
          <div className="ecom-product-list-page__controls-left">
            <span className="ecom-product-list-page__results-count">
              Showing {filteredProducts.length} of {products.length} products
            </span>
            {filteredProducts.length < products.length && (
              <button 
                className="ecom-product-list-page__clear-filters"
                onClick={clearAllFilters}
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="ecom-product-list-page__controls-right">
            {/* View Mode Toggle */}
            <div className="ecom-product-list-page__view-toggle">
              <button
                className={`ecom-product-list-page__view-btn ${
                  viewMode === 'grid' ? 'ecom-product-list-page__view-btn--active' : ''
                }`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                className={`ecom-product-list-page__view-btn ${
                  viewMode === 'list' ? 'ecom-product-list-page__view-btn--active' : ''
                }`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <i className="fas fa-list"></i>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="ecom-product-list-page__sort">
              <label htmlFor="sort-select" className="ecom-product-list-page__sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ecom-product-list-page__sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ecom-product-list-page__content">
          {/* Filters Sidebar */}
          <aside className="ecom-product-list-page__sidebar">
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              availableBrands={getAvailableBrands()}
              productCount={filteredProducts.length}
            />
          </aside>

          {/* Products Grid */}
          <main className="ecom-product-list-page__main">
            <ProductGrid
              products={currentProducts}
              viewMode={viewMode}
              isLoading={isLoading}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="ecom-product-list-page__pagination">
                <button
                  className="ecom-product-list-page__pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <i className="fas fa-chevron-left"></i>
                  Previous
                </button>

                <div className="ecom-product-list-page__pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`ecom-product-list-page__pagination-number ${
                        currentPage === page ? 'ecom-product-list-page__pagination-number--active' : ''
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="ecom-product-list-page__pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}

            {/* Load More Button (Alternative to pagination) */}
            {currentProducts.length < filteredProducts.length && (
              <div className="ecom-product-list-page__load-more">
                <button
                  className="ecom-product-list-page__load-more-btn"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={currentPage === totalPages}
                >
                  Load More Products
                  <i className="fas fa-arrow-down"></i>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;