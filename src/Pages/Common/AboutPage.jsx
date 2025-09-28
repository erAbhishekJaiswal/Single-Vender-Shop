import React from 'react';
import '../../CssFiles/Common/AboutPage.css';

const AboutPage = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO & Founder",
            bio: "With over 15 years of experience in e-commerce, Sarah leads our vision to revolutionize online shopping.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            }
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "CTO",
            bio: "Technology innovator with a passion for creating seamless digital experiences for our customers.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Head of Design",
            bio: "Creative visionary who ensures every interaction with our brand is beautiful and intuitive.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            social: {
                linkedin: "#",
                dribbble: "#",
                behance: "#"
            }
        },
        {
            id: 4,
            name: "David Kim",
            role: "Marketing Director",
            bio: "Strategic thinker who connects our products with the right customers through innovative campaigns.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#"
            }
        }
    ];

    const values = [
        {
            icon: "🚀",
            title: "Innovation",
            description: "We constantly push boundaries to bring you the latest trends and technologies in e-commerce."
        },
        {
            icon: "💝",
            title: "Customer First",
            description: "Our customers are at the heart of everything we do. Their satisfaction is our ultimate goal."
        },
        {
            icon: "🌱",
            title: "Sustainability",
            description: "We're committed to eco-friendly practices and sustainable business operations."
        },
        {
            icon: "🤝",
            title: "Community",
            description: "Building strong relationships with our customers, partners, and local communities."
        },
        {
            icon: "⭐",
            title: "Excellence",
            description: "Striving for the highest quality in every product and service we provide."
        },
        {
            icon: "🔒",
            title: "Trust",
            description: "Your privacy and security are our top priorities. Shop with confidence."
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Our Story</h1>
                    <p className="about-hero-subtitle">
                        Founded in 2015, we've grown from a small startup to a leading e-commerce platform, 
                        serving millions of customers worldwide with quality products and exceptional service.
                    </p>
                    
                    <div className="about-hero-stats">
                        <div className="about-hero-stat">
                            <span className="about-hero-stat-number">2M+</span>
                            <span className="about-hero-stat-label">Happy Customers</span>
                        </div>
                        <div className="about-hero-stat">
                            <span className="about-hero-stat-number">50K+</span>
                            <span className="about-hero-stat-label">Products</span>
                        </div>
                        <div className="about-hero-stat">
                            <span className="about-hero-stat-number">120+</span>
                            <span className="about-hero-stat-label">Countries</span>
                        </div>
                        <div className="about-hero-stat">
                            <span className="about-hero-stat-number">98%</span>
                            <span className="about-hero-stat-label">Satisfaction Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="about-story-content">
                    <div className="about-story-text">
                        <h2 className="about-section-title">Our Journey</h2>
                        <p className="about-story-description">
                            What started as a simple idea to make online shopping more accessible has evolved 
                            into a comprehensive e-commerce ecosystem. We believe that everyone deserves access 
                            to quality products at affordable prices, delivered with exceptional service.
                        </p>
                        <p className="about-story-description">
                            Through innovation and dedication, we've built a platform that not only connects 
                            buyers with sellers but also creates meaningful experiences that go beyond 
                            traditional shopping.
                        </p>
                        
                        <div className="about-story-highlights">
                            <div className="about-story-highlight">
                                <div className="about-story-icon">🏆</div>
                                <div>
                                    <h4>Industry Awards</h4>
                                    <p>Recognized as Best E-commerce Platform 2023</p>
                                </div>
                            </div>
                            <div className="about-story-highlight">
                                <div className="about-story-icon">🌍</div>
                                <div>
                                    <h4>Global Reach</h4>
                                    <p>Serving customers in 120+ countries worldwide</p>
                                </div>
                            </div>
                            <div className="about-story-highlight">
                                <div className="about-story-icon">💼</div>
                                <div>
                                    <h4>Trusted Partners</h4>
                                    <p>Collaborating with 5000+ verified sellers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Our office" 
                            className="about-story-image"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="about-values-content">
                    <h2 className="about-section-title" style={{color: 'white'}}>Our Values</h2>
                    <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto'}}>
                        These core principles guide everything we do and shape our company culture
                    </p>
                    
                    <div className="about-values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="about-value-card">
                                <div className="about-value-icon">{value.icon}</div>
                                <h3 className="about-value-title">{value.title}</h3>
                                <p className="about-value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="about-team-content">
                    <h2 className="about-section-title">Meet Our Team</h2>
                    <p style={{fontSize: '1.2rem', color: '#5a6c7d', maxWidth: '600px', margin: '0 auto 2rem'}}>
                        The passionate individuals behind our success story
                    </p>
                    
                    <div className="about-team-grid">
                        {teamMembers.map(member => (
                            <div key={member.id} className="about-team-member">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="about-team-image"
                                />
                                <div className="about-team-info">
                                    <h3 className="about-team-name">{member.name}</h3>
                                    <p className="about-team-role">{member.role}</p>
                                    <p className="about-team-bio">{member.bio}</p>
                                    <div className="about-team-social">
                                        {Object.entries(member.social).map(([platform, link]) => (
                                            <a 
                                                key={platform} 
                                                href={link} 
                                                className="about-team-social-link"
                                                aria-label={platform}
                                            >
                                                {platform === 'linkedin' && '💼'}
                                                {platform === 'twitter' && '🐦'}
                                                {platform === 'github' && '💻'}
                                                {platform === 'dribbble' && '🎨'}
                                                {platform === 'behance' && '📐'}
                                                {platform === 'instagram' && '📷'}
                                                {platform === 'email' && '✉️'}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="about-cta-content">
                    <h2 className="about-cta-title">Join Our Journey</h2>
                    <p className="about-cta-description">
                        Ready to experience the future of e-commerce? Join millions of satisfied customers 
                        who trust us for their shopping needs.
                    </p>
                    <div className="about-cta-buttons">
                        <a href="/shop" className="about-cta-button about-cta-button-primary">
                            Start Shopping
                        </a>
                        <a href="/careers" className="about-cta-button about-cta-button-secondary">
                            View Careers
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;