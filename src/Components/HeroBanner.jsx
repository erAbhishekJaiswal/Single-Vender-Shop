import React, { useState, useEffect } from 'react';
import '../ComponentsCSS/HeroBanner.css';

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            background: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            subtitle: "Summer Collection 2024",
            title: "Up to 50% Off on New Arrivals",
            description: "Discover the latest trends in fashion with our exclusive summer collection. Limited time offer!",
            buttonText: "Shop Now",
            buttonLink: "/summer-collection"
        },
        {
            id: 2,
            background: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            subtitle: "Electronics Sale",
            title: "Latest Gadgets & Tech",
            description: "Get the newest smartphones, laptops, and smart home devices with amazing discounts.",
            buttonText: "Explore Electronics",
            buttonLink: "/electronics"
        },
        {
            id: 3,
            background: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            subtitle: "Flash Sale",
            title: "Weekend Special Deals",
            description: "Don't miss out on our weekend flash sale. Huge discounts on all categories!",
            buttonText: "View Deals",
            buttonLink: "/flash-sale"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero-banner-container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-banner-slide ${index === currentSlide ? 'hero-banner-slide-active' : ''}`}
                    style={{ backgroundImage: `url(${slide.background})` }}
                >
                    <div className="hero-banner-overlay"></div>
                    <div className="hero-banner-content">
                        <div className="hero-banner-text">
                            <div className="hero-banner-subtitle">{slide.subtitle}</div>
                            <h1 className="hero-banner-title">{slide.title}</h1>
                            <p className="hero-banner-description">{slide.description}</p>
                            <button className="hero-banner-button">
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <button className="hero-banner-prev" onClick={prevSlide}>‹</button>
            <button className="hero-banner-next" onClick={nextSlide}>›</button>

            <div className="hero-banner-nav">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`hero-banner-dot ${index === currentSlide ? 'hero-banner-dot-active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;