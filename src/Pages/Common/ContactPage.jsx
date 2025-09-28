import React, { useState } from 'react';
import '../../CssFiles/Common/ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: '',
        newsletter: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email Us',
            content: 'Have a question? Send us an email and we\'ll get back to you within 24 hours.',
            details: 'support@shopease.com',
            link: 'mailto:support@shopease.com'
        },
        {
            icon: '📞',
            title: 'Call Us',
            content: 'Prefer to talk? Our customer service team is available 24/7.',
            details: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: '💬',
            title: 'Live Chat',
            content: 'Get instant help from our support team through live chat.',
            details: 'Available 24/7',
            link: '#chat'
        },
        {
            icon: '🏢',
            title: 'Visit Us',
            content: 'Come visit our headquarters. We\'d love to meet you in person!',
            details: '123 Commerce St, New York, NY 10001',
            link: '#map'
        }
    ];

    const faqItems = [
        {
            question: 'How long does it take to get a response?',
            answer: 'We typically respond to all inquiries within 24 hours. For urgent matters, please call our support line.'
        },
        {
            question: 'Do you offer technical support?',
            answer: 'Yes, we have a dedicated technical support team available 24/7 to help with any issues.'
        },
        {
            question: 'Can I schedule a meeting with your team?',
            answer: 'Absolutely! Use the contact form to request a meeting and we\'ll coordinate a time that works for you.'
        },
        {
            question: 'What are your business hours?',
            answer: 'Our customer service is available 24/7. Our office hours are Monday-Friday, 9 AM - 6 PM EST.'
        }
    ];

    const departments = [
        'General Inquiry',
        'Technical Support',
        'Sales',
        'Billing',
        'Partnership',
        'Careers',
        'Other'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                department: '',
                message: '',
                newsletter: false
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="contact-page">
                <section className="contact-hero">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title">Thank You!</h1>
                        <p className="contact-hero-subtitle">
                            Your message has been received. We'll get back to you within 24 hours.
                        </p>
                    </div>
                </section>
                
                <div className="contact-content">
                    <div style={{ 
                        textAlign: 'center', 
                        background: 'white', 
                        padding: '4rem', 
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Message Sent Successfully</h2>
                        <p style={{ color: '#5a6c7d', marginBottom: '2rem' }}>
                            We appreciate you reaching out to us. Our team will review your message 
                            and respond as soon as possible.
                        </p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            style={{
                                padding: '1rem 2rem',
                                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Get In Touch</h1>
                    <p className="contact-hero-subtitle">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="contact-container">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2 className="contact-info-title">Contact Information</h2>
                        <div className="contact-info-list">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-info-item">
                                    <div className="contact-info-icon">{item.icon}</div>
                                    <div className="contact-info-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <a href={item.link} className="contact-info-link">
                                            {item.details}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h2 className="contact-form-title">Send us a Message</h2>
                        <form 
                            className={`contact-form ${isSubmitting ? 'contact-form-loading' : ''}`}
                            onSubmit={handleSubmit}
                        >
                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="firstName" className="contact-form-label">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="contact-form-input"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && (
                                        <div className="contact-form-error">{errors.firstName}</div>
                                    )}
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="lastName" className="contact-form-label">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="contact-form-input"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && (
                                        <div className="contact-form-error">{errors.lastName}</div>
                                    )}
                                </div>
                            </div>

                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="email" className="contact-form-label">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="contact-form-input"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <div className="contact-form-error">{errors.email}</div>
                                    )}
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="phone" className="contact-form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="contact-form-input"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="subject" className="contact-form-label">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="contact-form-input"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="What is this regarding?"
                                />
                                {errors.subject && (
                                    <div className="contact-form-error">{errors.subject}</div>
                                )}
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="department" className="contact-form-label">
                                    Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    className="contact-form-select"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a department</option>
                                    {departments.map(dept => (
                                        <option key={dept} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-form-label">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact-form-textarea"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Please describe your inquiry in detail..."
                                    rows="5"
                                />
                                {errors.message && (
                                    <div className="contact-form-error">{errors.message}</div>
                                )}
                            </div>

                            <div className="contact-form-group">
                                <label className="contact-form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleInputChange}
                                    />
                                    <span className="contact-form-checkbox-label">
                                        Subscribe to our newsletter for updates and promotions
                                    </span>
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                className="contact-form-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                {/* <div className="contact-map">
                    <h2 className="contact-map-title">Find Us</h2>
                    <div className="contact-map-container">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60271.483653653515!2d73.08934346790464!3d19.240238180702576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2z4KSV4KSy4KWN4KSv4KS-4KSjLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1shi!2sin!4v1758884291909!5m2!1shi!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="contact-map-placeholder">
                            📍 Interactive Map Would Display Here
                        </div>
                        <div className="contact-map-overlay">
                            <div className="contact-map-info">
                                <h3>Our Headquarters</h3>
                                <p>123 Commerce Street<br />New York, NY 10001<br />United States</p>
                                <p>📞 +1 (555) 123-4567<br />📧 info@shopease.com</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="contact-faq-content">
                    <h2 className="contact-faq-title">Frequently Asked Questions</h2>
                    <p className="contact-faq-subtitle">
                        Quick answers to common questions
                    </p>
                    
                    <div className="contact-faq-grid">
                        {faqItems.map((faq, index) => (
                            <div key={index} className="contact-faq-item">
                                <h3 className="contact-faq-question">{faq.question}</h3>
                                <p className="contact-faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;