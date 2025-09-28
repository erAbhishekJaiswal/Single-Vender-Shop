import React, { useState, useRef, useEffect } from 'react';
import ProductCard from '../../../Components/ProductCard';
import '../../../CssFiles/Common/ProductDetail.css';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('m');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomLens, setZoomLens] = useState({ show: false, x: 0, y: 0 });
    
    const imageRef = useRef(null);
    const zoomLensRef = useRef(null);
    const zoomResultRef = useRef(null);

    const product = {
        id: 1,
        name: "Premium Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.5,
        reviewCount: 1284,
        description: "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
        longDescription: "These premium wireless headphones are engineered for the ultimate listening experience. With advanced noise cancellation technology, you can immerse yourself in your music without distractions. The ergonomic design ensures comfort during extended use, while the 30-hour battery life keeps you connected all day long.",
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Quick charge (3 hours in 15 minutes)",
            "Premium comfort memory foam ear cups",
            "HD voice calls with built-in microphone",
            "Bluetooth 5.0 with 33ft range"
        ],
        specifications: {
            "Brand": "AudioPro",
            "Model": "WH-2024",
            "Connectivity": "Bluetooth 5.0",
            "Battery Life": "30 hours",
            "Charging Time": "3 hours",
            "Weight": "265g",
            "Color": "Matte Black",
            "Warranty": "2 years"
        },
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800"
        ],
        colors: [
            { name: "black", value: "#2c3e50", label: "Matte Black" },
            { name: "white", value: "#ecf0f1", label: "Pearl White" },
            { name: "blue", value: "#3498db", label: "Ocean Blue" },
            { name: "red", value: "#e74c3c", label: "Crimson Red" }
        ],
        sizes: [
            { code: "s", label: "Small" },
            { code: "m", label: "Medium" },
            { code: "l", label: "Large" },
            { code: "xl", label: "Extra Large" }
        ],
        inStock: true,
        sku: "AUDIO-WH2024-BK",
        tags: ["headphones", "wireless", "bluetooth", "noise-cancelling", "premium"]
    };

    const relatedProducts = [
        {
            id: 2,
            name: "Noise Cancelling Earbuds",
            category: "Electronics",
            price: 89.99,
            originalPrice: 129.99,
            rating: 4.3,
            reviewCount: 892,
            image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e3?w=400",
            badge: "Sale"
        },
        {
            id: 3,
            name: "Gaming Headset Pro",
            category: "Gaming",
            price: 149.99,
            originalPrice: 199.99,
            rating: 4.7,
            reviewCount: 456,
            image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400",
            badge: "Popular"
        },
        {
            id: 4,
            name: "Portable Bluetooth Speaker",
            category: "Electronics",
            price: 79.99,
            rating: 4.2,
            reviewCount: 234,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
            badge: "New"
        },
        {
            id: 5,
            name: "Smart Watch Series 5",
            category: "Wearables",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4.8,
            reviewCount: 1567,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
            badge: "Best Seller"
        }
    ];

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            selectedColor,
            selectedSize,
            quantity
        };
        console.log('Added to cart:', cartItem);
        // Add to cart logic here
    };

    const handleBuyNow = () => {
        handleAddToCart();
        // Navigate to checkout
        console.log('Proceeding to checkout');
    };


    const handleImageZoom = (e) => {
  if (!imageRef.current || !zoomLensRef.current || !zoomResultRef.current) return;
  if (!product?.images?.[activeImage]) return;


  
  setShowZoom(true);

  const image = imageRef.current;
  const lens = zoomLensRef.current;
  const result = zoomResultRef.current;

  console.log({image, lens, result});
  const pos = getCursorPos(e, image);
  let x = pos.x - (lens.offsetWidth / 2);
  let y = pos.y - (lens.offsetHeight / 2);

  if (x > image.width - lens.offsetWidth) x = image.width - lens.offsetWidth;
  if (x < 0) x = 0;
  if (y > image.height - lens.offsetHeight) y = image.height - lens.offsetHeight;
  if (y < 0) y = 0;

  setZoomLens({ show: true, x, y });

  const zoomFactor = 2;
  result.style.background = `url('${product.images[activeImage]}')`;
  result.style.backgroundSize = `${image.width * zoomFactor}px ${image.height * zoomFactor}px`;
  result.style.backgroundPosition = `-${x * zoomFactor}px -${y * zoomFactor}px`;
};


    // const handleImageZoom = (e) => {
    //     if (!imageRef.current) return;

    //     const image = imageRef.current;
    //     const lens = zoomLensRef.current;
    //     const result = zoomResultRef.current;

    //     if (!showZoom) {
    //         setShowZoom(true);
    //         return;
    //     }

    //     const pos = getCursorPos(e, image);
    //     let x = pos.x - (lens.offsetWidth / 2);
    //     let y = pos.y - (lens.offsetHeight / 2);

    //     // Prevent lens from being positioned outside the image
    //     if (x > image.width - lens.offsetWidth) x = image.width - lens.offsetWidth;
    //     if (x < 0) x = 0;
    //     if (y > image.height - lens.offsetHeight) y = image.height - lens.offsetHeight;
    //     if (y < 0) y = 0;

    //     setZoomLens({ show: true, x, y });

    //     // Display result image
    //     result.style.backgroundImage = `url('${product.images[activeImage]}')`;
    //     result.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
    //     result.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    // };

//     const handleImageZoom = (e) => {
//     if (!imageRef.current) return;

//     setShowZoom(true); // ← always enable zoom on mouse move

//     const image = imageRef.current;
//     const lens = zoomLensRef.current;
//     const result = zoomResultRef.current;

//     const pos = getCursorPos(e, image);
//     let x = pos.x - (lens.offsetWidth / 2);
//     let y = pos.y - (lens.offsetHeight / 2);

//     if (x > image.width - lens.offsetWidth) x = image.width - lens.offsetWidth;
//     if (x < 0) x = 0;
//     if (y > image.height - lens.offsetHeight) y = image.height - lens.offsetHeight;
//     if (y < 0) y = 0;

//     setZoomLens({ show: true, x, y });

//     result.style.background = `url('${product.images[activeImage]}')`;
//     result.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
//     result.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
// };

    const getCursorPos = (e, image) => {
        const a = image.getBoundingClientRect();
        return {
            x: e.pageX - a.left - window.pageXOffset,
            y: e.pageY - a.top - window.pageYOffset
        };
    };

    const handleMouseLeave = () => {
        setZoomLens({ show: false, x: 0, y: 0 });
    };

    useEffect(() => {
    if (showZoom && zoomLensRef.current && zoomResultRef.current) {
        // console.log(zoomLens.show);
        // setShowZoom(zoomLens.show);
        zoomLensRef.current.style.display = zoomLens.show ? 'block' : 'none';
        zoomResultRef.current.style.display = zoomLens.show ? 'block' : 'none'; // ✅ Add this

        if (zoomLens.show) {
            // console.log({x: zoomLens.x, y: zoomLens.y});
            // setShowZoom(zoomLens.show);
            zoomLensRef.current.style.left = `${zoomLens.x}px`;
            zoomLensRef.current.style.top = `${zoomLens.y}px`;
        }
    } else if (zoomResultRef.current) {
        // console.log("hide zoom");
        zoomResultRef.current.style.display = 'none'; // ✅ Hide when zoom off
    }
}, [zoomLens, showZoom]);


    // useEffect(() => {
    //     if (showZoom && zoomLensRef.current && zoomResultRef.current) {
    //         zoomLensRef.current.style.display = zoomLens.show ? 'block' : 'none';
    //         zoomResultRef.current.style.display = zoomLens.show ? 'block' : 'none';
            
    //         if (zoomLens.show) {
    //             zoomLensRef.current.style.left = `${zoomLens.x}px`;
    //             zoomLensRef.current.style.top = `${zoomLens.y}px`;
    //         }
    //     }
    // }, [zoomLens, showZoom]);

    const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Main Product Section */}
                <div className="product-detail-main">
                    {/* Image Gallery */}
                    <div className="product-detail-gallery">
                        <div className="product-detail-badge product-detail-badge-sale">
                            {discount}% OFF
                        </div>
                        
                        <button 
                            className={`product-detail-wishlist ${isWishlisted ? 'product-detail-wishlist-active' : ''}`}
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            {isWishlisted ? '♥' : '♡'}
                        </button>

                        <div 
                            className="product-detail-zoom-container"
                            onMouseMove={handleImageZoom}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => setShowZoom(!showZoom)}
                        >
                            <img
                                ref={imageRef}
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="product-detail-main-image"
                            />
                            <div 
                                ref={zoomLensRef}
                                className="product-detail-zoom-lens"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }}
                            />
                            <div 
                                ref={zoomResultRef}
                                className="product-detail-zoom-result"
                            />
                            <div className="product-detail-zoom-overlay" />
                            <div className="product-detail-zoom-instruction">Click to {showZoom ? 'disable' : 'enable'} zoom</div>
                            <div className="product-detail-zoom-hint">
                                Move your mouse over the image to see a zoomed-in view.
                            </div>
                        </div>

                        <div className="product-detail-thumbnails">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} view ${index + 1}`}
                                    className={`product-detail-thumbnail ${index === activeImage ? 'product-detail-thumbnail-active' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="product-detail-info">
                        <div className="product-detail-category">{product.category}</div>
                        <h1 className="product-detail-title">{product.name}</h1>
                        
                        <div className="product-detail-rating">
                            <span className="product-detail-stars">
                                {renderStars(product.rating)}
                            </span>
                            <span className="product-detail-review-count">
                                ({product.reviewCount} reviews)
                            </span>
                            <span style={{color: '#27ae60', fontWeight: 600}}>In Stock</span>
                        </div>

                        <div className="product-detail-price">
                            <span className="product-detail-current-price">${product.price}</span>
                            <span className="product-detail-original-price">${product.originalPrice}</span>
                            <span className="product-detail-discount">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
                        </div>

                        <p className="product-detail-description">{product.description}</p>

                        {/* Color Selection */}
                        <div className="product-detail-variants">
                            <div className="product-detail-variant-group">
                                <label className="product-detail-variant-label">Color</label>
                                <div className="product-detail-color-options">
                                    {product.colors.map(color => (
                                        <div
                                            key={color.name}
                                            className={`product-detail-color-option ${selectedColor === color.name ? 'product-detail-color-option-active' : ''}`}
                                            style={{ backgroundColor: color.value }}
                                            onClick={() => setSelectedColor(color.name)}
                                            title={color.label}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="product-detail-variant-group">
                                <label className="product-detail-variant-label">Size</label>
                                <div className="product-detail-variant-options">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size.code}
                                            className={`product-detail-variant-option ${selectedSize === size.code ? 'product-detail-variant-option-active' : ''}`}
                                            onClick={() => setSelectedSize(size.code)}
                                        >
                                            {size.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="product-detail-quantity">
                            <span className="product-detail-quantity-label">Quantity:</span>
                            <div className="product-detail-quantity-controls">
                                <button 
                                    className="product-detail-quantity-btn"
                                    onClick={() => handleQuantityChange(-1)}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="product-detail-quantity-input"
                                    value={quantity}
                                    min="1"
                                    max="10"
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                />
                                <button 
                                    className="product-detail-quantity-btn"
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="product-detail-actions">
                            <button 
                                className="product-detail-add-cart"
                                onClick={handleAddToCart}
                            >
                                🛒 Add to Cart
                            </button>
                            <button 
                                className="product-detail-buy-now"
                                onClick={handleBuyNow}
                            >
                                ⚡ Buy Now
                            </button>
                        </div>

                        <div className="product-detail-secondary-actions">
                            <button className="product-detail-secondary-btn">
                                📦 Free Shipping
                            </button>
                            <button className="product-detail-secondary-btn">
                                ↩️ 30-Day Returns
                            </button>
                            <button className="product-detail-secondary-btn">
                                🔒 Secure Checkout
                            </button>
                        </div>

                        {/* Product Meta */}
                        <div className="product-detail-meta">
                            <div className="product-detail-meta-item">
                                <span className="product-detail-meta-label">SKU:</span>
                                <span className="product-detail-meta-value">{product.sku}</span>
                            </div>
                            <div className="product-detail-meta-item">
                                <span className="product-detail-meta-label">Category:</span>
                                <span className="product-detail-meta-value">{product.category}</span>
                            </div>
                            <div className="product-detail-meta-item">
                                <span className="product-detail-meta-label">Tags:</span>
                                <span className="product-detail-meta-value">{product.tags.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="product-detail-tabs">
                    <div className="product-detail-tabs-header">
                        <button 
                            className={`product-detail-tab ${activeTab === 'description' ? 'product-detail-tab-active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button 
                            className={`product-detail-tab ${activeTab === 'specs' ? 'product-detail-tab-active' : ''}`}
                            onClick={() => setActiveTab('specs')}
                        >
                            Specifications
                        </button>
                        <button 
                            className={`product-detail-tab ${activeTab === 'reviews' ? 'product-detail-tab-active' : ''}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews ({product.reviewCount})
                        </button>
                        <button 
                            className={`product-detail-tab ${activeTab === 'shipping' ? 'product-detail-tab-active' : ''}`}
                            onClick={() => setActiveTab('shipping')}
                        >
                            Shipping & Returns
                        </button>
                    </div>

                    <div className="product-detail-tab-content">
                        {activeTab === 'description' && (
                            <div>
                                <p>{product.longDescription}</p>
                                <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Key Features:</h3>
                                <ul style={{listStyle: 'none', padding: 0}}>
                                    {product.features.map((feature, index) => (
                                        <li key={index} style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center'}}>
                                            <span style={{color: '#27ae60', marginRight: '0.5rem'}}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="product-detail-specs">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="product-detail-spec-item">
                                        <span className="product-detail-spec-label">{key}</span>
                                        <span className="product-detail-spec-value">{value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <p>Customer reviews will be displayed here.</p>
                            </div>
                        )}

                        {activeTab === 'shipping' && (
                            <div>
                                <h3>Shipping Information</h3>
                                <p>Free standard shipping on orders over $50. Express shipping available.</p>
                                <h3>Return Policy</h3>
                                <p>30-day money-back guarantee. No questions asked.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="product-detail-related">
                    <div className="product-detail-related-header">
                        <h2 className="product-detail-related-title">You May Also Like</h2>
                        <p className="product-detail-related-subtitle">
                            Discover similar products that match your style and preferences
                        </p>
                    </div>
                    
                    <div className="product-detail-related-grid">
                        {relatedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;