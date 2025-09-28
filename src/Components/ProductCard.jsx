import React, { useState } from 'react';
import '../ComponentsCSS/ProductCard.css';

const product = {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.5,
        reviewCount: 128,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "High-quality sound with noise cancellation technology",
        badge: "Sale",
        variants: [
            { name: "Black", color: "#2c3e50" },
            { name: "White", color: "#ecf0f1" },
            { name: "Blue", color: "#3498db" }
        ]
    }
const ProductCard = ({ 
   
    size = 'medium', 
    layout = 'vertical',
    showWishlist = true,
    showVariants = true 
}) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(0);

    const {
        id,
        name,
        category,
        price,
        originalPrice,
        rating,
        reviewCount,
        image,
        description,
        badge,
        variants = []
    } = product;

    const handleAddToCart = () => {
        console.log(`Added ${name} to cart`);
        // Add to cart logic here
    };

    const handleQuickView = () => {
        console.log(`Quick view for ${name}`);
        // Quick view logic here
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        // Wishlist logic here
    };

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    };

    return (
        <div className={`product-card product-card-${size} product-card-${layout}`}>
            <div className="product-card-image-container">
                <img src={image} alt={name} className="product-card-image" />
                
                {badge && (
                    <div className={`product-card-badge ${badge === 'New' ? 'product-card-badge-new' : 'product-card-badge-sale'}`}>
                        {badge}
                    </div>
                )}
                
                {showWishlist && (
                    <button 
                        className={`product-card-wishlist ${isWishlisted ? 'product-card-wishlist-active' : ''}`}
                        onClick={toggleWishlist}
                    >
                        ♥
                    </button>
                )}
            </div>

            <div className="product-card-content">
                <div className="product-card-category">{category}</div>
                <h3 className="product-card-name">{name}</h3>
                {description && <p className="product-card-description">{description}</p>}
                
                <div className="product-card-rating">
                    <span className="product-card-stars">{renderStars(rating)}</span>
                    <span className="product-card-review">({reviewCount})</span>
                </div>

                {showVariants && variants.length > 0 && (
                    <div className="product-card-variants">
                        {variants.map((variant, index) => (
                            <div
                                key={index}
                                className={`product-card-variant ${selectedVariant === index ? 'product-card-variant-active' : ''}`}
                                style={{ backgroundColor: variant.color }}
                                onClick={() => setSelectedVariant(index)}
                                title={variant.name}
                            />
                        ))}
                    </div>
                )}

                <div className="product-card-price">
                    <span className="product-card-current-price">${price}</span>
                    {originalPrice && originalPrice > price && (
                        <>
                            <span className="product-card-original-price">${originalPrice}</span>
                            <span className="product-card-discount">-{discount}%</span>
                        </>
                    )}
                </div>

                <div className="product-card-actions">
                    <button 
                        className="product-card-button product-card-button-primary"
                        onClick={handleAddToCart}
                    >
                        🛒 Add to Cart
                    </button>
                    <button 
                        className="product-card-button product-card-button-secondary"
                        onClick={handleQuickView}
                    >
                        👁 Quick View
                    </button>
                </div>
            </div>
        </div>
    );
};

// Default props for the product
ProductCard.defaultProps = {
    product: {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.5,
        reviewCount: 128,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "High-quality sound with noise cancellation technology",
        badge: "Sale",
        variants: [
            { name: "Black", color: "#2c3e50" },
            { name: "White", color: "#ecf0f1" },
            { name: "Blue", color: "#3498db" }
        ]
    }
};

export default ProductCard;