import React, { useState } from 'react';
import '../ComponentsCSS/UserProfile.css';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);

    const userData = {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, New York, NY 10001",
        joinDate: "January 15, 2022",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200",
        orders: 24,
        reviews: 8,
        wishlist: 12
    };

    const orders = [
        {
            id: 1,
            product: "Wireless Bluetooth Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
            date: "2024-01-15",
            price: 129.99,
            status: "Delivered"
        },
        {
            id: 2,
            product: "Smart Fitness Watch",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
            date: "2024-01-10",
            price: 199.99,
            status: "Pending"
        },
        {
            id: 3,
            product: "Organic Cotton T-Shirt",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100",
            date: "2024-01-05",
            price: 29.99,
            status: "Cancelled"
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Delivered": return "user-profile-status-delivered";
            case "Pending": return "user-profile-status-pending";
            case "Cancelled": return "user-profile-status-cancelled";
            default: return "";
        }
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <h1 className="user-profile-title">My Account</h1>
                <p className="user-profile-subtitle">Manage your profile and track your orders</p>
            </div>

            <div className="user-profile-content">
                <div className="user-profile-sidebar">
                    <div className="user-profile-avatar">
                        <img 
                            src={userData.avatar} 
                            alt={userData.name}
                            className="user-profile-image"
                        />
                        <h2 className="user-profile-name">{userData.name}</h2>
                        <p className="user-profile-email">{userData.email}</p>
                    </div>

                    <div className="user-profile-stats">
                        <div className="user-profile-stat">
                            <span className="user-profile-stat-number">{userData.orders}</span>
                            <span className="user-profile-stat-label">Orders</span>
                        </div>
                        <div className="user-profile-stat">
                            <span className="user-profile-stat-number">{userData.reviews}</span>
                            <span className="user-profile-stat-label">Reviews</span>
                        </div>
                        <div className="user-profile-stat">
                            <span className="user-profile-stat-number">{userData.wishlist}</span>
                            <span className="user-profile-stat-label">Wishlist</span>
                        </div>
                        <div className="user-profile-stat">
                            <span className="user-profile-stat-number">2</span>
                            <span className="user-profile-stat-label">Years</span>
                        </div>
                    </div>

                    <nav className="user-profile-nav">
                        <button 
                            className={`user-profile-nav-item ${activeTab === 'profile' ? 'user-profile-nav-item-active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile Information
                        </button>
                        <button 
                            className={`user-profile-nav-item ${activeTab === 'orders' ? 'user-profile-nav-item-active' : ''}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            Order History
                        </button>
                        <button 
                            className={`user-profile-nav-item ${activeTab === 'address' ? 'user-profile-nav-item-active' : ''}`}
                            onClick={() => setActiveTab('address')}
                        >
                            Address Book
                        </button>
                        <button 
                            className={`user-profile-nav-item ${activeTab === 'security' ? 'user-profile-nav-item-active' : ''}`}
                            onClick={() => setActiveTab('security')}
                        >
                            Security Settings
                        </button>
                    </nav>
                </div>

                <div className="user-profile-main">
                    {activeTab === 'profile' && (
                        <div className="user-profile-card">
                            <div className="user-profile-card-header">
                                <h3 className="user-profile-card-title">Profile Information</h3>
                                <button 
                                    className="user-profile-edit-btn"
                                    onClick={() => setIsEditing(!isEditing)}
                                >
                                    {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                                </button>
                            </div>

                            <form className="user-profile-form">
                                <div className="user-profile-form-group">
                                    <label className="user-profile-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="user-profile-input"
                                        defaultValue={userData.name}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="user-profile-form-group">
                                    <label className="user-profile-label">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="user-profile-input"
                                        defaultValue={userData.email}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="user-profile-form-group">
                                    <label className="user-profile-label">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="user-profile-input"
                                        defaultValue={userData.phone}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="user-profile-form-group">
                                    <label className="user-profile-label">Join Date</label>
                                    <input 
                                        type="text" 
                                        className="user-profile-input"
                                        defaultValue={userData.joinDate}
                                        disabled
                                    />
                                </div>
                                <div className="user-profile-form-group user-profile-form-group-full">
                                    <label className="user-profile-label">Bio</label>
                                    <textarea 
                                        className="user-profile-input user-profile-textarea"
                                        placeholder="Tell us about yourself..."
                                        disabled={!isEditing}
                                    ></textarea>
                                </div>

                                {isEditing && (
                                    <div className="user-profile-actions">
                                        <button 
                                            type="button" 
                                            className="user-profile-cancel-btn"
                                            onClick={() => setIsEditing(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="user-profile-save-btn">
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}

                    {activeTab === 'orders' && (
                        <div className="user-profile-card">
                            <div className="user-profile-card-header">
                                <h3 className="user-profile-card-title">Order History</h3>
                            </div>

                            <div className="user-profile-orders">
                                {orders.map(order => (
                                    <div key={order.id} className="user-profile-order">
                                        <img 
                                            src={order.image} 
                                            alt={order.product}
                                            className="user-profile-order-image"
                                        />
                                        <div className="user-profile-order-info">
                                            <div className="user-profile-order-name">{order.product}</div>
                                            <div className="user-profile-order-date">Ordered on {order.date}</div>
                                        </div>
                                        <div className="user-profile-order-price">${order.price}</div>
                                        <div className={`user-profile-order-status ${getStatusClass(order.status)}`}>
                                            {order.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;