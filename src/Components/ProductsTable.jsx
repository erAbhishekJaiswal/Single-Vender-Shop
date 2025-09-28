import React, { useState } from 'react';
import '../ComponentsCSS/ProductsTable.css';

const ProductsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const products = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            category: "Electronics",
            price: 129.99,
            stock: 45,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
            status: "In Stock"
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            category: "Wearables",
            price: 199.99,
            stock: 12,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
            status: "Low Stock"
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt",
            category: "Clothing",
            price: 29.99,
            stock: 0,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100",
            status: "Out of Stock"
        },
        {
            id: 4,
            name: "Stainless Steel Water Bottle",
            category: "Accessories",
            price: 24.99,
            stock: 78,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=100",
            status: "In Stock"
        },
        {
            id: 5,
            name: "Professional Camera Lens",
            category: "Photography",
            price: 599.99,
            stock: 5,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=100",
            status: "Low Stock"
        },
        {
            id: 6,
            name: "Gaming Keyboard RGB",
            category: "Electronics",
            price: 89.99,
            stock: 34,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100",
            status: "In Stock"
        },
        {
            id: 7,
            name: "Yoga Mat Premium",
            category: "Fitness",
            price: 39.99,
            stock: 67,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=100",
            status: "In Stock"
        }
    ];

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "In Stock": return "products-table-status-instock";
            case "Low Stock": return "products-table-status-lowstock";
            case "Out of Stock": return "products-table-status-outstock";
            default: return "";
        }
    };

    return (
        <div className="products-table-container">
            <div className="products-table-header">
                <h2 className="products-table-title">Products Inventory</h2>
                <div className="products-table-controls">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="products-table-search"
                    />
                    <select className="products-table-filter">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Wearables</option>
                        <option>Clothing</option>
                        <option>Accessories</option>
                    </select>
                </div>
            </div>

            <div className="products-table-wrapper">
                <table className="products-table">
                    <thead className="products-table-head">
                        <tr>
                            <th className="products-table-header-cell">Product</th>
                            <th className="products-table-header-cell">Category</th>
                            <th className="products-table-header-cell">Price</th>
                            <th className="products-table-header-cell">Rating</th>
                            <th className="products-table-header-cell">Stock Status</th>
                            <th className="products-table-header-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map(product => (
                            <tr key={product.id} className="products-table-body-row">
                                <td className="products-table-cell">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="products-table-image"
                                        />
                                        <span className="products-table-name">{product.name}</span>
                                    </div>
                                </td>
                                <td className="products-table-cell">
                                    <span className="products-table-category">{product.category}</span>
                                </td>
                                <td className="products-table-cell products-table-price">
                                    ${product.price}
                                </td>
                                <td className="products-table-cell">
                                    <div className="products-table-rating">
                                        <span className="products-table-stars">
                                            {renderStars(product.rating)}
                                        </span>
                                        <span>{product.rating}</span>
                                    </div>
                                </td>
                                <td className="products-table-cell">
                                    <span className={`products-table-status ${getStatusClass(product.status)}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="products-table-cell">
                                    <div className="products-table-actions">
                                        <button className="products-table-btn products-table-btn-edit">
                                            Edit
                                        </button>
                                        <button className="products-table-btn products-table-btn-delete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="products-table-pagination">
                    <div className="products-table-info">
                        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} products
                    </div>
                    <div className="products-table-pages">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`products-table-page ${currentPage === page ? 'products-table-page-active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsTable;