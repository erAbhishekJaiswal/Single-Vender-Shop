import React, { useState, useEffect } from 'react';
import '../../CssFiles/Admin/DashboardPage.css';

const DashboardPage = () => {
    const [stats, setStats] = useState({
        orders: { value: 1247, change: 12.5, target: 1500 },
        sales: { value: 89234.56, change: 8.3, target: 100000 },
        gst: { value: 16062.42, change: 8.3, target: 18000 },
        users: { value: 8456, change: 5.7, target: 10000 }
    });

    const [timeRange, setTimeRange] = useState('month');
    const [currentTime, setCurrentTime] = useState('');

    const recentActivities = [
        {
            id: 1,
            type: 'order',
            text: 'New order #ORD-2847 placed',
            time: '2 minutes ago',
            amount: '$149.99',
            icon: '🛒'
        },
        {
            id: 2,
            type: 'user',
            text: 'New user registration',
            time: '15 minutes ago',
            amount: '',
            icon: '👤'
        },
        {
            id: 3,
            type: 'payment',
            text: 'Payment received for order #ORD-2846',
            time: '1 hour ago',
            amount: '$299.99',
            icon: '💳'
        },
        {
            id: 4,
            type: 'order',
            text: 'Order #ORD-2845 shipped',
            time: '2 hours ago',
            amount: '$89.99',
            icon: '🚚'
        },
        {
            id: 5,
            type: 'user',
            text: 'User profile updated',
            time: '3 hours ago',
            amount: '',
            icon: '⚡'
        }
    ];

    const quickActions = [
        {
            title: 'Add Product',
            description: 'Create new product listing',
            icon: '📦',
            action: () => console.log('Add Product')
        },
        {
            title: 'View Orders',
            description: 'Manage customer orders',
            icon: '🛒',
            action: () => console.log('View Orders')
        },
        {
            title: 'Analytics',
            description: 'View detailed reports',
            icon: '📊',
            action: () => console.log('Analytics')
        },
        {
            title: 'Customers',
            description: 'Manage user accounts',
            icon: '👥',
            action: () => console.log('Customers')
        }
    ];

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            setCurrentTime(now.toLocaleDateString('en-US', options));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    const getProgressPercentage = (value, target) => {
        return (value / target) * 100;
    };

    const StatCard = ({ title, value, change, target, icon, type, isCurrency = false }) => {
        const progress = getProgressPercentage(value, target);
        
        return (
            <div className={`dashboard-stat-card dashboard-stat-card-${type}`}>
                <div className="dashboard-stat-header">
                    <div className="dashboard-stat-info">
                        <div className="dashboard-stat-title">{title}</div>
                        <div className="dashboard-stat-value">
                            {isCurrency ? formatCurrency(value) : formatNumber(value)}
                        </div>
                        <div className={`dashboard-stat-change ${
                            change >= 0 ? 'dashboard-stat-change-positive' : 'dashboard-stat-change-negative'
                        }`}>
                            {change >= 0 ? '↗' : '↘'} {Math.abs(change)}% from last period
                        </div>
                    </div>
                    <div className="dashboard-stat-icon">
                        {icon}
                    </div>
                </div>
                
                <div className="dashboard-stat-progress">
                    <div className="dashboard-stat-progress-bar">
                        <div 
                            className="dashboard-stat-progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="dashboard-stat-progress-text">
                        <span>Progress</span>
                        <span>{progress.toFixed(1)}%</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
                {/* Header */}
                <div className="dashboard-header">
                    <div className="dashboard-welcome">
                        <div className="dashboard-welcome-text">
                            <h1>Welcome back, Admin! 👋</h1>
                            <p>Here's what's happening with your store today. Monitor your business performance and take action.</p>
                        </div>
                        <div className="dashboard-date">
                            <div className="dashboard-date-day">
                                {new Date().getDate()}
                            </div>
                            <div className="dashboard-date-full">
                                {currentTime}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="dashboard-actions">
                        {quickActions.map((action, index) => (
                            <div 
                                key={index}
                                className="dashboard-action"
                                onClick={action.action}
                            >
                                <span className="dashboard-action-icon">{action.icon}</span>
                                <div className="dashboard-action-title">{action.title}</div>
                                <div className="dashboard-action-desc">{action.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="dashboard-stats">
                    <StatCard
                        title="Total Orders"
                        value={stats.orders.value}
                        change={stats.orders.change}
                        target={stats.orders.target}
                        icon="📦"
                        type="orders"
                    />
                    <StatCard
                        title="Total Sales"
                        value={stats.sales.value}
                        change={stats.sales.change}
                        target={stats.sales.target}
                        icon="💰"
                        type="sales"
                        isCurrency={true}
                    />
                    <StatCard
                        title="GST Collected"
                        value={stats.gst.value}
                        change={stats.gst.change}
                        target={stats.gst.target}
                        icon="🏛️"
                        type="gst"
                        isCurrency={true}
                    />
                    <StatCard
                        title="Active Users"
                        value={stats.users.value}
                        change={stats.users.change}
                        target={stats.users.target}
                        icon="👥"
                        type="users"
                    />
                </div>

                {/* Charts Section */}
                <div className="dashboard-charts">
                    {/* Sales Chart */}
                    <div className="dashboard-chart-card">
                        <div className="dashboard-chart-header">
                            <h3 className="dashboard-chart-title">Sales Overview</h3>
                            <div className="dashboard-chart-actions">
                                <button 
                                    className={`dashboard-chart-btn ${timeRange === 'week' ? 'dashboard-chart-btn-active' : ''}`}
                                    onClick={() => setTimeRange('week')}
                                >
                                    Week
                                </button>
                                <button 
                                    className={`dashboard-chart-btn ${timeRange === 'month' ? 'dashboard-chart-btn-active' : ''}`}
                                    onClick={() => setTimeRange('month')}
                                >
                                    Month
                                </button>
                                <button 
                                    className={`dashboard-chart-btn ${timeRange === 'year' ? 'dashboard-chart-btn-active' : ''}`}
                                    onClick={() => setTimeRange('year')}
                                >
                                    Year
                                </button>
                            </div>
                        </div>
                        <div className="dashboard-chart-placeholder">
                            📊 Chart Visualization - Ready for Integration
                            <div style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7}}>
                                Connect with Chart.js, D3.js, or any chart library
                            </div>
                        </div>
                    </div>

                    {/* Revenue Chart */}
                    <div className="dashboard-chart-card">
                        <div className="dashboard-chart-header">
                            <h3 className="dashboard-chart-title">Revenue Analytics</h3>
                            <div className="dashboard-chart-actions">
                                <button className="dashboard-chart-btn">Export</button>
                                <button className="dashboard-chart-btn">Settings</button>
                            </div>
                        </div>
                        <div className="dashboard-chart-placeholder">
                            💰 Revenue Charts - Future Implementation
                            <div style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7}}>
                                Perfect for financial data visualization
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity & Performance Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                    {/* Recent Activity */}
                    <div className="dashboard-activity">
                        <div className="dashboard-activity-header">
                            <h3 className="dashboard-activity-title">Recent Activity</h3>
                            <a href="#view-all" className="dashboard-activity-view-all">
                                View All →
                            </a>
                        </div>
                        <div className="dashboard-activity-list">
                            {recentActivities.map(activity => (
                                <div key={activity.id} className={`dashboard-activity-item dashboard-activity-${activity.type}`}>
                                    <div className="dashboard-activity-icon">
                                        {activity.icon}
                                    </div>
                                    <div className="dashboard-activity-content">
                                        <div className="dashboard-activity-text">{activity.text}</div>
                                        <div className="dashboard-activity-time">{activity.time}</div>
                                    </div>
                                    {activity.amount && (
                                        <div className="dashboard-activity-amount">{activity.amount}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="dashboard-metric">
                            <div className="dashboard-metric-header">
                                <div className="dashboard-metric-title">Conversion Rate</div>
                                <span style={{ color: '#27ae60', fontWeight: 600 }}>+2.3%</span>
                            </div>
                            <div className="dashboard-metric-value">4.7%</div>
                            <div className="dashboard-metric-change" style={{ color: '#27ae60' }}>
                                ↗ Improved from last month
                            </div>
                        </div>

                        <div className="dashboard-metric">
                            <div className="dashboard-metric-header">
                                <div className="dashboard-metric-title">Avg. Order Value</div>
                                <span style={{ color: '#27ae60', fontWeight: 600 }}>+$12.50</span>
                            </div>
                            <div className="dashboard-metric-value">$89.99</div>
                            <div className="dashboard-metric-change" style={{ color: '#27ae60' }}>
                                ↗ Growing steadily
                            </div>
                        </div>

                        <div className="dashboard-metric">
                            <div className="dashboard-metric-header">
                                <div className="dashboard-metric-title">Customer Satisfaction</div>
                                <span style={{ color: '#27ae60', fontWeight: 600 }}>94%</span>
                            </div>
                            <div className="dashboard-metric-value">4.8/5</div>
                            <div className="dashboard-metric-change" style={{ color: '#27ae60' }}>
                                ⭐ Excellent rating
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Charts Row */}
                <div className="dashboard-charts" style={{ marginTop: '2rem' }}>
                    {/* User Analytics */}
                    <div className="dashboard-chart-card">
                        <div className="dashboard-chart-header">
                            <h3 className="dashboard-chart-title">User Analytics</h3>
                            <div className="dashboard-chart-actions">
                                <button className="dashboard-chart-btn">Real-time</button>
                                <button className="dashboard-chart-btn">Trends</button>
                            </div>
                        </div>
                        <div className="dashboard-chart-placeholder">
                            👥 User Engagement Metrics
                            <div style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7}}>
                                User growth, retention, and engagement data
                            </div>
                        </div>
                    </div>

                    {/* Inventory Status */}
                    <div className="dashboard-chart-card">
                        <div className="dashboard-chart-header">
                            <h3 className="dashboard-chart-title">Inventory Overview</h3>
                            <div className="dashboard-chart-actions">
                                <button className="dashboard-chart-btn">Stock Alert</button>
                                <button className="dashboard-chart-btn">Categories</button>
                            </div>
                        </div>
                        <div className="dashboard-chart-placeholder">
                            📦 Stock Levels & Alerts
                            <div style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7}}>
                                Low stock alerts and inventory tracking
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;