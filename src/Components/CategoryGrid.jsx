import React from 'react';
import '../ComponentsCSS/CategoryGrid.css';

const CategoryGrid = () => {
    const categories = [
        {
            id: 1,
            name: "Kid's Fashion",
            image: "https://plus.unsplash.com/premium_photo-1697612942566-e0c243ab512c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productCount: "2.2K+ Products",
            featured: false
        },
        {
            id: 2,
            name: "Men's Fashion",
            image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            productCount: "1.2K+ Products",
            featured: false
        },
        {
            id: 3,
            name: "Women's Fashion",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            productCount: "1.5K+ Products",
            featured: false
        },
        {
            id: 4,
            name: "Electronics",
            image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            productCount: "800+ Products",
            featured: true
        },
        {
            id: 5,
            name: "Smart Watches",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
            productCount: "300+ Products",
            featured: false
        },
        {
            id: 6,
            name: "Bags & Luggage",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            productCount: "450+ Products",
            featured: false
        },
        {
            id: 7,
            name: "Home & Kitchen",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
            productCount: "900+ Products",
            featured: false
        }
    ];

    const handleCategoryClick = (categoryName) => {
        console.log(`Navigating to ${categoryName} category`);
        // Add navigation logic here
    };

    return (
        <div className="category-grid-container">
            <div className="category-grid-header">
                <h2 className="category-grid-title">Shop by Category</h2>
                <p className="category-grid-subtitle">
                    Explore our wide range of products across different categories
                </p>
            </div>

            <div className="category-grid-wrapper">
                {categories.map(category => (
                    <div
                        key={category.id}
                        className={`category-grid-item ${category.featured ? 'category-grid-item-featured' : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="category-grid-image"
                        />
                        <div className="category-grid-overlay">
                            <h3 className="category-grid-name">{category.name}</h3>
                            <p className="category-grid-count">{category.productCount}</p>
                            <button className="category-grid-button">
                                Explore Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;