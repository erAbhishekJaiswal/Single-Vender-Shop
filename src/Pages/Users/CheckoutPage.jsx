import React, { useState } from 'react';
import '../../CssFiles/Users/CheckoutPage.css';
import { useNavigate } from 'react-router-dom';
const CheckoutPage = () => {
    const [currentStep, setCurrentStep] = useState('address');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        addressType: 'home'
    });

    const [errors, setErrors] = useState({});
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('cod');

    // Sample order data
    const orderItems = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
            color: "Black",
            quantity: 1,
            price: 129.99
        },
        {
            id: 2,
            name: "Smartphone Case",
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=100",
            color: "Blue",
            quantity: 2,
            price: 19.99
        }
    ];

    const savedAddresses = [
        {
            id: 1,
            type: 'home',
            name: 'John Doe',
            address: '123 Main Street, Apartment 4B',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001',
            phone: '+91 9876543210',
            isDefault: true
        },
        {
            id: 2,
            type: 'work',
            name: 'John Doe',
            address: '456 Business Park, Office 302',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400002',
            phone: '+91 9876543210',
            isDefault: false
        }
    ];

    const paymentMethods = [
        {
            id: 'cod',
            name: 'Cash on Delivery',
            icon: '💰',
            description: 'Pay when you receive your order'
        },
        {
            id: 'card',
            name: 'Credit/Debit Card',
            icon: '💳',
            description: 'Pay securely with your card',
            disabled: true
        },
        {
            id: 'upi',
            name: 'UPI Payment',
            icon: '📱',
            description: 'Fast and secure UPI payment',
            disabled: true
        },
        {
            id: 'netbanking',
            name: 'Net Banking',
            icon: '🏦',
            description: 'Transfer from your bank account',
            disabled: true
        }
    ];

    // Order summary calculations
    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = subtotal > 500 ? 0 : 49;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shippingFee + tax;

    // Order confirmation data
    const orderConfirmation = {
        orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        status: 'Pending',
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        paymentMethod: 'Cash on Delivery',
        totalAmount: total.toFixed(2)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid Indian phone number';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'State is required';
        }

        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Please enter a valid 6-digit pincode';
        }

        return newErrors;
    };

    const handleAddressSelect = (address) => {
        setSelectedAddress(address.id);
        setFormData({
            firstName: address.name.split(' ')[0],
            lastName: address.name.split(' ').slice(1).join(' '),
            phone: address.phone,
            address: address.address,
            city: address.city,
            state: address.state,
            pincode: address.pincode,
            country: 'India',
            addressType: address.type
        });
    };

    const handlePlaceOrder = async () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setOrderPlaced(true);
            setCurrentStep('confirmation');
            navigate('/order-tracking');
        } catch (error) {
            console.error('Error placing order:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUseNewAddress = () => {
        setSelectedAddress(null);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            country: 'India',
            addressType: 'home'
        });
    };

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <div className="checkout-container">
                    <div className={`checkout-confirmation checkout-confirmation-show`}>
                        <div className="checkout-confirmation-icon">✅</div>
                        <h2 className="checkout-confirmation-title">Order Placed Successfully!</h2>
                        <p className="checkout-confirmation-subtitle">
                            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                        </p>
                        
                        <div className="checkout-order-details">
                            <div className="checkout-order-detail-row">
                                <span className="checkout-order-detail-label">Order ID:</span>
                                <span className="checkout-order-detail-value">{orderConfirmation.orderId}</span>
                            </div>
                            <div className="checkout-order-detail-row">
                                <span className="checkout-order-detail-label">Order Status:</span>
                                <span className="checkout-order-status">{orderConfirmation.status}</span>
                            </div>
                            <div className="checkout-order-detail-row">
                                <span className="checkout-order-detail-label">Estimated Delivery:</span>
                                <span className="checkout-order-detail-value">{orderConfirmation.estimatedDelivery}</span>
                            </div>
                            <div className="checkout-order-detail-row">
                                <span className="checkout-order-detail-label">Payment Method:</span>
                                <span className="checkout-order-detail-value">{orderConfirmation.paymentMethod}</span>
                            </div>
                            <div className="checkout-order-detail-row">
                                <span className="checkout-order-detail-label">Total Amount:</span>
                                <span className="checkout-order-detail-value">₹{orderConfirmation.totalAmount}</span>
                            </div>
                        </div>

                        <div className="checkout-confirmation-actions">
                            <button className="checkout-confirmation-btn checkout-confirmation-btn-primary">
                                Track Your Order
                            </button>
                            <button className="checkout-confirmation-btn checkout-confirmation-btn-secondary">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                {/* Checkout Header */}
                <div className="checkout-header">
                    <h1 className="checkout-title">Checkout</h1>
                    <p className="checkout-subtitle">Complete your purchase in just a few steps</p>
                </div>

                {/* Checkout Steps */}
                <div className="checkout-steps">
                    <div className={`checkout-step ${currentStep === 'address' ? 'checkout-step-active' : ''}`}>
                        <div className="checkout-step-icon">1</div>
                        <span className="checkout-step-label">Address</span>
                    </div>
                    <div className={`checkout-step ${currentStep === 'payment' ? 'checkout-step-active' : ''}`}>
                        <div className="checkout-step-icon">2</div>
                        <span className="checkout-step-label">Payment</span>
                    </div>
                    <div className={`checkout-step ${currentStep === 'confirmation' ? 'checkout-step-active' : ''}`}>
                        <div className="checkout-step-icon">3</div>
                        <span className="checkout-step-label">Confirmation</span>
                    </div>
                </div>

                <div className="checkout-content">
                    {/* Left Column - Forms */}
                    <div>
                        {/* Address Section */}
                        <div className="checkout-address-form">
                            <h2 className="checkout-section-title">
                                <span>📍 Delivery Address</span>
                            </h2>

                            {/* Saved Addresses */}
                            {savedAddresses.length > 0 && (
                                <div className="checkout-saved-addresses">
                                    <h3 style={{marginBottom: '1rem', color: '#2c3e50'}}>Saved Addresses</h3>
                                    <div className="checkout-address-options">
                                        {savedAddresses.map(address => (
                                            <div
                                                key={address.id}
                                                className={`checkout-address-option ${selectedAddress === address.id ? 'checkout-address-option-active' : ''}`}
                                                onClick={() => handleAddressSelect(address)}
                                            >
                                                <div className="checkout-address-option-header">
                                                    <span className={`checkout-address-type ${address.isDefault ? 'checkout-address-default' : ''}`}>
                                                        {address.type.toUpperCase()}
                                                    </span>
                                                    {address.isDefault && (
                                                        <span style={{fontSize: '0.8rem', color: '#27ae60'}}>Default</span>
                                                    )}
                                                </div>
                                                <div className="checkout-address-details">
                                                    <div className="checkout-address-name">{address.name}</div>
                                                    <div>{address.address}</div>
                                                    <div>{address.city}, {address.state} - {address.pincode}</div>
                                                    <div>{address.phone}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={handleUseNewAddress}
                                        style={{
                                            background: 'none',
                                            border: '2px dashed #bdc3c7',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            width: '100%',
                                            cursor: 'pointer',
                                            color: '#7f8c8d',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.borderColor = '#3498db';
                                            e.target.style.color = '#3498db';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.borderColor = '#bdc3c7';
                                            e.target.style.color = '#7f8c8d';
                                        }}
                                    >
                                        + Use New Address
                                    </button>
                                </div>
                            )}

                            {/* Address Form */}
                            <form className="checkout-form">
                                <div className="checkout-form-row">
                                    <div className="checkout-form-group">
                                        <label htmlFor="firstName" className="checkout-form-label checkout-form-label-required">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="checkout-form-input"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your first name"
                                        />
                                        {errors.firstName && (
                                            <div className="checkout-form-error">⚠️ {errors.firstName}</div>
                                        )}
                                    </div>

                                    <div className="checkout-form-group">
                                        <label htmlFor="lastName" className="checkout-form-label checkout-form-label-required">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="checkout-form-input"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your last name"
                                        />
                                        {errors.lastName && (
                                            <div className="checkout-form-error">⚠️ {errors.lastName}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="checkout-form-row">
                                    <div className="checkout-form-group">
                                        <label htmlFor="phone" className="checkout-form-label checkout-form-label-required">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="checkout-form-input"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your 10-digit phone number"
                                        />
                                        {errors.phone && (
                                            <div className="checkout-form-error">⚠️ {errors.phone}</div>
                                        )}
                                    </div>

                                    <div className="checkout-form-group">
                                        <label htmlFor="email" className="checkout-form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="checkout-form-input"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="checkout-form-group">
                                    <label htmlFor="address" className="checkout-form-label checkout-form-label-required">
                                        Street Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        className="checkout-form-textarea"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your complete address"
                                        rows="3"
                                    />
                                    {errors.address && (
                                        <div className="checkout-form-error">⚠️ {errors.address}</div>
                                    )}
                                </div>

                                <div className="checkout-form-row">
                                    <div className="checkout-form-group">
                                        <label htmlFor="city" className="checkout-form-label checkout-form-label-required">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="checkout-form-input"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            placeholder="Enter your city"
                                        />
                                        {errors.city && (
                                            <div className="checkout-form-error">⚠️ {errors.city}</div>
                                        )}
                                    </div>

                                    <div className="checkout-form-group">
                                        <label htmlFor="state" className="checkout-form-label checkout-form-label-required">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            className="checkout-form-input"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            placeholder="Enter your state"
                                        />
                                        {errors.state && (
                                            <div className="checkout-form-error">⚠️ {errors.state}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="checkout-form-row">
                                    <div className="checkout-form-group">
                                        <label htmlFor="pincode" className="checkout-form-label checkout-form-label-required">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            name="pincode"
                                            className="checkout-form-input"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            placeholder="Enter 6-digit pincode"
                                            maxLength="6"
                                        />
                                        {errors.pincode && (
                                            <div className="checkout-form-error">⚠️ {errors.pincode}</div>
                                        )}
                                    </div>

                                    <div className="checkout-form-group">
                                        <label htmlFor="addressType" className="checkout-form-label">
                                            Address Type
                                        </label>
                                        <select
                                            id="addressType"
                                            name="addressType"
                                            className="checkout-form-select"
                                            value={formData.addressType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="home">Home</option>
                                            <option value="work">Work</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Payment Method Section */}
                        <div className="checkout-payment-method">
                            <h2 className="checkout-section-title">
                                <span>💳 Payment Method</span>
                            </h2>

                            <div className="checkout-payment-options">
                                {paymentMethods.map(method => (
                                    <div
                                        key={method.id}
                                        className={`checkout-payment-option ${paymentMethod === method.id ? 'checkout-payment-option-active' : ''} ${method.disabled ? 'checkout-loading' : ''}`}
                                        onClick={() => !method.disabled && setPaymentMethod(method.id)}
                                        style={method.disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                                    >
                                        <div className="checkout-payment-icon">{method.icon}</div>
                                        <div className="checkout-payment-label">{method.name}</div>
                                        <div className="checkout-payment-desc">{method.description}</div>
                                        {method.disabled && (
                                            <div style={{fontSize: '0.8rem', color: '#e74c3c', marginTop: '0.5rem'}}>
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {paymentMethod === 'cod' && (
                                <div style={{
                                    background: '#e8f6f3',
                                    padding: '1rem',
                                    borderRadius: '10px',
                                    border: '1px solid #27ae60',
                                    marginTop: '1rem'
                                }}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#27ae60'}}>
                                        <span>💡</span>
                                        <strong>Cash on Delivery</strong>
                                    </div>
                                    <p style={{margin: '0.5rem 0 0 0', color: '#5a6c7d', fontSize: '0.9rem'}}>
                                        You'll pay when you receive your order. Please keep exact change ready.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="checkout-order-summary">
                        <h2 className="checkout-section-title">
                            <span>🛒 Order Summary</span>
                        </h2>

                        <div className="checkout-order-items">
                            {orderItems.map(item => (
                                <div key={item.id} className="checkout-order-item">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="checkout-order-item-image"
                                    />
                                    <div className="checkout-order-item-details">
                                        <div className="checkout-order-item-name">{item.name}</div>
                                        <div className="checkout-order-item-meta">
                                            Color: {item.color} • Qty: {item.quantity}
                                        </div>
                                    </div>
                                    <div className="checkout-order-item-price">
                                        ₹{(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-order-totals">
                            <div className="checkout-order-total-row">
                                <span>Subtotal:</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="checkout-order-total-row">
                                <span>Shipping:</span>
                                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee.toFixed(2)}`}</span>
                            </div>
                            <div className="checkout-order-total-row">
                                <span>Tax (18% GST):</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>
                            <div className="checkout-order-total-row checkout-order-total-row-grand">
                                <span>Total Amount:</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="checkout-place-order">
                            <button
                                className="checkout-place-order-btn"
                                onClick={handlePlaceOrder}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="checkout-loading-spinner"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        🚀 Place Order
                                    </>
                                )}
                            </button>
                            
                            <div className="checkout-terms">
                                By placing your order, you agree to our{' '}
                                <a href="/terms">Terms of Service</a> and{' '}
                                <a href="/privacy">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;