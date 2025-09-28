import React, { useState, useRef, useEffect } from 'react';
import '../ComponentsCSS/SearchBar.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);

    const suggestions = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            category: "Electronics",
            price: "$129.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            category: "Wearables",
            price: "$199.99",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100"
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt",
            category: "Clothing",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100"
        }
    ];

    const categories = ["All", "Electronics", "Clothing", "Home", "Beauty", "Sports", "Books"];

    const recentSearches = ["headphones", "laptop", "running shoes", "smartwatch", "backpack"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            console.log(`Searching for: ${query}`);
            setShowSuggestions(false);
            // Add search logic here
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name);
        setShowSuggestions(false);
        // Navigate to product page
    };

    const handleCategoryClick = (category) => {
        setQuery(category);
        setShowSuggestions(true);
    };

    const handleRecentSearch = (searchTerm) => {
        setQuery(searchTerm);
        setShowSuggestions(true);
    };

    const filteredSuggestions = suggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-bar-container" ref={searchRef}>
            <form className="search-bar-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="Search for products, brands, and categories..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                />
                <button type="submit" className="search-bar-button">
                    <FaSearch /> Search
                </button>

                <div className={`search-bar-suggestions ${showSuggestions && query ? 'search-bar-suggestions-visible' : ''}`}>
                    {filteredSuggestions.map(item => (
                        <div
                            key={item.id}
                            className="search-bar-suggestion-item"
                            onClick={() => handleSuggestionClick(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="search-bar-suggestion-image"
                            />
                            <div className="search-bar-suggestion-text">
                                <div className="search-bar-suggestion-name">{item.name}</div>
                                <div className="search-bar-suggestion-category">{item.category}</div>
                            </div>
                            <div className="search-bar-suggestion-price">{item.price}</div>
                        </div>
                    ))}
                    
                    {query && filteredSuggestions.length === 0 && (
                        <div className="search-bar-suggestion-item">
                            <div className="search-bar-suggestion-text">
                                No results found for "{query}"
                            </div>
                        </div>
                    )}
                </div>
            </form>

            <div className="search-bar-categories">
                {categories.map(category => (
                    <div
                        key={category}
                        className="search-bar-category"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            <div className="search-bar-recent">
                <div className="search-bar-recent-title">Recent searches:</div>
                <div className="search-bar-recent-tags">
                    {recentSearches.map((search, index) => (
                        <div
                            key={index}
                            className="search-bar-recent-tag"
                            onClick={() => handleRecentSearch(search)}
                        >
                            {search}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;