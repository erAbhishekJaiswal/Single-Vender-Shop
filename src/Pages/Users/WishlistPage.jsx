import React, { useState } from 'react';
import '../../CssFiles/Users/WishlistPage.css';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Premium Wireless Bluetooth Headphones",
            category: "Electronics",
            price: 129.99,
            originalPrice: 199.99,
            rating: 4.5,
            reviews: 1284,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
            description: "High-quality sound with active noise cancellation technology",
            inStock: true,
            stockCount: 15,
            badge: "sale",
            addedDate: "2024-01-15"
        },
        {
            id: 2,
            name: "Smart Fitness Watch Series 5",
            category: "Wearables",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4.7,
            reviews: 892,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
            description: "Track your health and fitness with advanced sensors",
            inStock: true,
            stockCount: 8,
            badge: "popular",
            addedDate: "2024-01-10"
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt - Premium Quality",
            category: "Clothing",
            price: 29.99,
            originalPrice: 39.99,
            rating: 4.3,
            reviews: 456,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
            description: "Comfortable and eco-friendly organic cotton t-shirt",
            inStock: false,
            stockCount: 0,
            badge: "new",
            addedDate: "2024-01-05"
        },
        {
            id: 4,
            name: "Professional Camera Lens 85mm f/1.4",
            category: "Photography",
            price: 899.99,
            originalPrice: 1199.99,
            rating: 4.8,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300",
            description: "Professional portrait lens with stunning bokeh effects",
            inStock: true,
            stockCount: 3,
            badge: null,
            addedDate: "2024-01-01"
        }
    ]);

    const [sortBy, setSortBy] = useState('recent');
    const [viewMode, setViewMode] = useState('list');
    const [searchQuery, setSearchQuery] = useState('');

    // Calculate wishlist statistics
    const totalItems = wishlistItems.length;
    const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
    const totalSaved = wishlistItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0);
    const inStockItems = wishlistItems.filter(item => item.inStock).length;

    const handleRemoveItem = (itemId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    };

    const handleAddToCart = (item) => {
        console.log('Added to cart:', item);
        // Add to cart logic here
    };

    const handleMoveAllToCart = () => {
        wishlistItems.forEach(item => {
            if (item.inStock) {
                handleAddToCart(item);
            }
        });
    };

    const handleShareWishlist = () => {
        const wishlistUrl = `${window.location.origin}/wishlist/share`;
        navigator.clipboard.writeText(wishlistUrl);
        alert('Wishlist link copied to clipboard!');
    };

    const getStockStatus = (item) => {
        if (!item.inStock) return { text: 'Out of Stock', class: 'wishlist-item-outstock' };
        if (item.stockCount < 5) return { text: 'Low Stock', class: 'wishlist-item-lowstock' };
        return { text: 'In Stock', class: 'wishlist-item-instock' };
    };

    const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    };

    const filteredItems = wishlistItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            default: // recent
                return new Date(b.addedDate) - new Date(a.addedDate);
        }
    });

    if (wishlistItems.length === 0) {
        return (
            <div className="wishlist-page">
                <div className="wishlist-container">
                    <div className="wishlist-empty">
                        <div className="wishlist-empty-icon">💝</div>
                        <h2 className="wishlist-empty-title">Your Wishlist is Empty</h2>
                        <p className="wishlist-empty-desc">
                            Looks like you haven't added any items to your wishlist yet. 
                            Start exploring our products and add your favorites to keep track of them!
                        </p>
                        <div className="wishlist-empty-actions">
                            <button className="wishlist-empty-btn wishlist-empty-btn-primary">
                                🛍️ Start Shopping
                            </button>
                            <button className="wishlist-empty-btn wishlist-empty-btn-secondary">
                                🔥 View Popular Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <div className="wishlist-container">
                {/* Header */}
                <div className="wishlist-header">
                    <h1 className="wishlist-title">My Wishlist</h1>
                    <p className="wishlist-subtitle">
                        Save your favorite items and keep track of prices and availability
                    </p>
                    
                    <div className="wishlist-stats">
                        <div className="wishlist-stat">
                            <span className="wishlist-stat-number">{totalItems}</span>
                            <span className="wishlist-stat-label">Total Items</span>
                        </div>
                        <div className="wishlist-stat">
                            <span className="wishlist-stat-number">${totalValue.toFixed(2)}</span>
                            <span className="wishlist-stat-label">Total Value</span>
                        </div>
                        <div className="wishlist-stat">
                            <span className="wishlist-stat-number">${totalSaved.toFixed(2)}</span>
                            <span className="wishlist-stat-label">Total Saved</span>
                        </div>
                        <div className="wishlist-stat">
                            <span className="wishlist-stat-number">{inStockItems}</span>
                            <span className="wishlist-stat-label">In Stock</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="wishlist-filters">
                    <div className="wishlist-filters-left">
                        <select 
                            className="wishlist-sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recent">Sort by: Most Recent</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                            <option value="rating">Highest Rated</option>
                        </select>

                        <div className="wishlist-view-options">
                            <button 
                                className={`wishlist-view-btn ${viewMode === 'list' ? 'wishlist-view-btn-active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                List View
                            </button>
                            <button 
                                className={`wishlist-view-btn ${viewMode === 'grid' ? 'wishlist-view-btn-active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                Grid View
                            </button>
                        </div>
                    </div>

                    <div className="wishlist-filters-right">
                        <input
                            type="text"
                            className="wishlist-search"
                            placeholder="Search in wishlist..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="wishlist-content">
                    {/* Main Content - Wishlist Items */}
                    <div className="wishlist-items">
                        {sortedItems.map(item => {
                            const stockStatus = getStockStatus(item);
                            const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
                            
                            return (
                                <div key={item.id} className="wishlist-item">
                                    {item.badge && (
                                        <div className={`wishlist-item-badge ${
                                            item.badge === 'new' ? 'wishlist-item-badge-new' : 
                                            item.badge === 'sale' ? 'wishlist-item-badge-sale' : ''
                                        }`}>
                                            {item.badge === 'new' ? 'NEW' : 
                                             item.badge === 'sale' ? 'SALE' : 
                                             item.badge.toUpperCase()}
                                        </div>
                                    )}
                                    
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="wishlist-item-image"
                                    />
                                    
                                    <div className="wishlist-item-details">
                                        <div className="wishlist-item-category">{item.category}</div>
                                        <h3 className="wishlist-item-name">{item.name}</h3>
                                        <p className="wishlist-item-description">{item.description}</p>
                                        
                                        <div className="wishlist-item-meta">
                                            <div className="wishlist-item-rating">
                                                <span className="wishlist-item-stars">
                                                    {renderStars(item.rating)}
                                                </span>
                                                <span className="wishlist-item-reviews">
                                                    ({item.reviews} reviews)
                                                </span>
                                            </div>
                                            <div className={`wishlist-item-stock ${stockStatus.class}`}>
                                                {stockStatus.text}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="wishlist-item-price">
                                        <div className="wishlist-item-current-price">${item.price}</div>
                                        {item.originalPrice > item.price && (
                                            <>
                                                <div className="wishlist-item-original-price">${item.originalPrice}</div>
                                                <div className="wishlist-item-discount">-{discount}%</div>
                                            </>
                                        )}
                                    </div>
                                    
                                    <div className="wishlist-item-actions">
                                        <button 
                                            className="wishlist-item-add-cart"
                                            onClick={() => handleAddToCart(item)}
                                            disabled={!item.inStock}
                                        >
                                            🛒 Add to Cart
                                        </button>
                                        <button 
                                            className="wishlist-item-remove"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            ❌ Remove
                                        </button>
                                        <button className="wishlist-item-move">
                                            📁 Move to List
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Sidebar */}
                    <div className="wishlist-sidebar">
                        <div className="wishlist-summary">
                            <h3 className="wishlist-summary-title">📊 Wishlist Summary</h3>
                            
                            <div className="wishlist-summary-stats">
                                <div className="wishlist-summary-stat">
                                    <span className="wishlist-summary-label">Items:</span>
                                    <span className="wishlist-summary-value">{totalItems}</span>
                                </div>
                                <div className="wishlist-summary-stat">
                                    <span className="wishlist-summary-label">In Stock:</span>
                                    <span className="wishlist-summary-value">{inStockItems}</span>
                                </div>
                                <div className="wishlist-summary-stat">
                                    <span className="wishlist-summary-label">Out of Stock:</span>
                                    <span className="wishlist-summary-value">{totalItems - inStockItems}</span>
                                </div>
                                <div className="wishlist-summary-stat">
                                    <span className="wishlist-summary-label">Total Value:</span>
                                    <span className="wishlist-summary-value">${totalValue.toFixed(2)}</span>
                                </div>
                                <div className="wishlist-summary-stat">
                                    <span className="wishlist-summary-label">You Save:</span>
                                    <span className="wishlist-summary-value" style={{color: '#27ae60'}}>
                                        ${totalSaved.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="wishlist-summary-actions">
                                <button 
                                    className="wishlist-summary-btn wishlist-summary-btn-primary"
                                    onClick={handleMoveAllToCart}
                                >
                                    🛒 Add All to Cart
                                </button>
                                <button className="wishlist-summary-btn wishlist-summary-btn-secondary">
                                    🖨️ Print Wishlist
                                </button>
                            </div>
                        </div>

                        <div className="wishlist-share">
                            <h3 className="wishlist-share-title">🔗 Share Your Wishlist</h3>
                            <p className="wishlist-share-desc">
                                Share your wishlist with friends and family so they know exactly what you want!
                            </p>
                            <div className="wishlist-share-actions">
                                <button 
                                    className="wishlist-share-btn wishlist-share-copy"
                                    onClick={handleShareWishlist}
                                >
                                    📋 Copy Link
                                </button>
                                <button className="wishlist-share-btn wishlist-share-social">
                                    📱 Share via Social
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;