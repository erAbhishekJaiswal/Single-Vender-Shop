import React, { useState, useEffect } from 'react';
import '../../../CssFiles/Common/Deals/DealsPage.css';

const DealsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('popular');
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        minutes: 45,
        seconds: 30
    });

    const categories = [
        { id: 'all', name: 'All Deals', icon: '🔥', count: 156 },
        { id: 'flash', name: 'Flash Sales', icon: '⚡', count: 23 },
        { id: 'featured', name: 'Featured', icon: '⭐', count: 45 },
        { id: 'ending', name: 'Ending Soon', icon: '⏰', count: 18 },
        { id: 'electronics', name: 'Electronics', icon: '📱', count: 34 },
        { id: 'fashion', name: 'Fashion', icon: '👕', count: 28 },
        { id: 'home', name: 'Home & Kitchen', icon: '🏠', count: 22 },
        { id: 'beauty', name: 'Beauty', icon: '💄', count: 15 }
    ];

    const deals = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            category: "electronics",
            price: 129.99,
            originalPrice: 199.99,
            discount: 35,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            description: "Noise cancelling wireless headphones with 30hr battery life",
            badge: "featured",
            stock: 15,
            sold: 89,
            rating: 4.5,
            endTime: "2024-01-20T23:59:59",
            isFeatured: true
        },
        {
            id: 2,
            title: "Smart Fitness Watch Series 5",
            category: "electronics",
            price: 199.99,
            originalPrice: 299.99,
            discount: 33,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
            description: "Advanced fitness tracking with heart rate monitor",
            badge: "flash",
            stock: 8,
            sold: 156,
            rating: 4.7,
            endTime: "2024-01-18T15:30:00",
            isFlash: true
        },
        {
            id: 3,
            title: "Organic Cotton T-Shirt Pack",
            category: "fashion",
            price: 29.99,
            originalPrice: 49.99,
            discount: 40,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            description: "Pack of 3 premium organic cotton t-shirts",
            badge: "popular",
            stock: 45,
            sold: 234,
            rating: 4.3,
            endTime: "2024-01-25T12:00:00"
        },
        {
            id: 4,
            title: "Stainless Steel Cookware Set",
            category: "home",
            price: 149.99,
            originalPrice: 249.99,
            discount: 40,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
            description: "10-piece professional cookware set",
            badge: "ending",
            stock: 3,
            sold: 67,
            rating: 4.6,
            endTime: "2024-01-17T18:00:00",
            isEnding: true
        },
        {
            id: 5,
            title: "Professional Camera Lens",
            category: "electronics",
            price: 599.99,
            originalPrice: 899.99,
            discount: 33,
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
            description: "85mm f/1.4 professional portrait lens",
            badge: "featured",
            stock: 5,
            sold: 23,
            rating: 4.8,
            endTime: "2024-01-30T23:59:59",
            isFeatured: true
        },
        {
            id: 6,
            title: "Designer Handbag Collection",
            category: "fashion",
            price: 199.99,
            originalPrice: 399.99,
            discount: 50,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
            description: "Luxury leather handbag with multiple compartments",
            badge: "flash",
            stock: 12,
            sold: 89,
            rating: 4.4,
            endTime: "2024-01-19T14:00:00",
            isFlash: true
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = { ...prev };
                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes--;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours--;
                        } else {
                            newTime.hours = 23;
                            if (newTime.days > 0) {
                                newTime.days--;
                            }
                        }
                    }
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const filteredDeals = deals.filter(deal => {
        const matchesCategory = activeCategory === 'all' || deal.category === activeCategory;
        const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            deal.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedDeals = [...filteredDeals].sort((a, b) => {
        switch (sortBy) {
            case 'discount':
                return b.discount - a.discount;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'ending':
                return new Date(a.endTime) - new Date(b.endTime);
            default: // popular
                return b.sold - a.sold;
        }
    });

    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'flash': return 'deals-item-badge-flash';
            case 'featured': return 'deals-item-badge-featured';
            case 'ending': return 'deals-item-badge';
            default: return 'deals-item-badge';
        }
    };

    const getProgressPercentage = (sold, stock) => {
        return (sold / (sold + stock)) * 100;
    };

    const handleQuickBuy = (deal) => {
        console.log('Quick buy:', deal);
        // Add to cart and proceed to checkout logic
    };

    const handleAddToWishlist = (deal) => {
        console.log('Added to wishlist:', deal);
        // Add to wishlist logic
    };

    return (
        <div className="deals-page">
            <div className="deals-container">
                {/* Header */}
                <div className="deals-header">
                    <h1 className="deals-title">Hot Deals & Offers</h1>
                    <p className="deals-subtitle">
                        Discover amazing discounts and limited-time offers on your favorite products. 
                        Don't miss out on these incredible deals!
                    </p>
                </div>

                {/* Countdown Banner */}
                <div className="deals-countdown">
                    <div className="deals-countdown-content">
                        <h2 className="deals-countdown-title">
                            ⚡ Flash Sale Ending Soon!
                        </h2>
                        <p>Hurry up! These exclusive offers won't last long</p>
                        
                        <div className="deals-countdown-timer">
                            <div className="deals-countdown-unit">
                                <div className="deals-countdown-number">{timeLeft.days}</div>
                                <div className="deals-countdown-label">Days</div>
                            </div>
                            <div className="deals-countdown-unit">
                                <div className="deals-countdown-number">{timeLeft.hours}</div>
                                <div className="deals-countdown-label">Hours</div>
                            </div>
                            <div className="deals-countdown-unit">
                                <div className="deals-countdown-number">{timeLeft.minutes}</div>
                                <div className="deals-countdown-label">Minutes</div>
                            </div>
                            <div className="deals-countdown-unit">
                                <div className="deals-countdown-number">{timeLeft.seconds}</div>
                                <div className="deals-countdown-label">Seconds</div>
                            </div>
                        </div>
                        
                        <button className="deals-countdown-cta">
                            🛍️ Shop Flash Sale
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="deals-filters">
                    <div className="deals-filters-left">
                        <div className="deals-filter-group">
                            <span className="deals-filter-label">Sort by:</span>
                            <select 
                                className="deals-filter-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="popular">Most Popular</option>
                                <option value="discount">Highest Discount</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="ending">Ending Soon</option>
                            </select>
                        </div>
                        
                        <div className="deals-filter-group">
                            <span className="deals-filter-label">Category:</span>
                            <select 
                                className="deals-filter-select"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                {categories.slice(1).map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className="deals-filters-right">
                        <input
                            type="text"
                            className="deals-search"
                            placeholder="Search deals..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        
                        <div className="deals-view-options">
                            <button 
                                className={`deals-view-btn ${viewMode === 'grid' ? 'deals-view-btn-active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                Grid
                            </button>
                            <button 
                                className={`deals-view-btn ${viewMode === 'list' ? 'deals-view-btn-active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                List
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="deals-categories">
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className={`deals-category ${activeCategory === category.id ? 'deals-category-active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                            <span style={{ 
                                background: 'rgba(0,0,0,0.1)', 
                                padding: '2px 8px', 
                                borderRadius: '10px',
                                fontSize: '0.8rem'
                            }}>
                                {category.count}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Deals Grid */}
                {sortedDeals.length === 0 ? (
                    <div className="deals-empty">
                        <div className="deals-empty-icon">🔍</div>
                        <h2 className="deals-empty-title">No Deals Found</h2>
                        <p className="deals-empty-desc">
                            We couldn't find any deals matching your criteria. 
                            Try adjusting your filters or search terms.
                        </p>
                        <button 
                            onClick={() => {
                                setActiveCategory('all');
                                setSearchQuery('');
                            }}
                            style={{
                                background: 'linear-gradient(45deg, #e74c3c, #e67e22)',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2rem',
                                borderRadius: '10px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Show All Deals
                        </button>
                    </div>
                ) : (
                    <div className="deals-grid">
                        {sortedDeals.map(deal => (
                            <div 
                                key={deal.id} 
                                className={`deals-item ${deal.isFeatured ? 'deals-item-featured' : ''} deals-item-new`}
                            >
                                {deal.badge && (
                                    <div className={`deals-item-badge ${getBadgeColor(deal.badge)}`}>
                                        {deal.badge === 'flash' ? 'FLASH SALE' : 
                                         deal.badge === 'featured' ? 'FEATURED' : 
                                         deal.badge === 'ending' ? 'ENDING SOON' : 
                                         deal.badge.toUpperCase()}
                                    </div>
                                )}
                                
                                <img 
                                    src={deal.image} 
                                    alt={deal.title}
                                    className="deals-item-image"
                                />
                                
                                <div className="deals-item-content">
                                    <div className="deals-item-category">{deal.category}</div>
                                    <h3 className="deals-item-title">{deal.title}</h3>
                                    <p className="deals-item-description">{deal.description}</p>
                                    
                                    <div className="deals-item-meta">
                                        <div className="deals-item-price">
                                            <span className="deals-item-current">${deal.price}</span>
                                            <span className="deals-item-original">${deal.originalPrice}</span>
                                            <span className="deals-item-discount">-{deal.discount}%</span>
                                        </div>
                                        <span className={`deals-item-stock ${deal.stock < 10 ? 'deals-item-stock-low' : ''}`}>
                                            {deal.stock < 10 ? `Only ${deal.stock} left!` : `${deal.stock} in stock`}
                                        </span>
                                    </div>
                                    
                                    <div className="deals-item-progress">
                                        <div className="deals-item-progress-bar">
                                            <div 
                                                className="deals-item-progress-fill"
                                                style={{ width: `${getProgressPercentage(deal.sold, deal.stock)}%` }}
                                            ></div>
                                        </div>
                                        <div className="deals-item-progress-text">
                                            {deal.sold} sold
                                        </div>
                                    </div>
                                    
                                    <div className="deals-item-actions">
                                        <button 
                                            className="deals-item-btn deals-item-btn-primary"
                                            onClick={() => handleQuickBuy(deal)}
                                        >
                                            ⚡ Buy Now
                                        </button>
                                        <button 
                                            className="deals-item-btn deals-item-btn-secondary"
                                            onClick={() => handleAddToWishlist(deal)}
                                        >
                                            ♥ Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Newsletter Section */}
                <div className="deals-newsletter">
                    <div className="deals-newsletter-content">
                        <h2 className="deals-newsletter-title">💌 Never Miss a Deal!</h2>
                        <p className="deals-newsletter-desc">
                            Subscribe to our newsletter and be the first to know about exclusive offers, 
                            flash sales, and special discounts delivered straight to your inbox.
                        </p>
                        <div className="deals-newsletter-form">
                            <input
                                type="email"
                                className="deals-newsletter-input"
                                placeholder="Enter your email address"
                            />
                            <button className="deals-newsletter-btn">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsPage;