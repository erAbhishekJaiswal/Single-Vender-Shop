import React, { useState } from 'react';
import OrderList from '../../Components/OrderList';
import '../../CssFiles/Users/OrderTrackingPage.css';

const OrderTrackingPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample orders data
  const orders = [
    {
      id: 'ORD-12345',
      date: '2024-01-15',
      status: 'delivered',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 99.99, image: '/images/headphones.jpg' },
        { name: 'Phone Case', quantity: 2, price: 15.99, image: '/images/case.jpg' }
      ],
      total: 131.97,
      trackingNumber: 'TRK789456123',
      estimatedDelivery: '2024-01-20',
      deliveredDate: '2024-01-18',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      }
    },
    {
      id: 'ORD-12346',
      date: '2024-01-18',
      status: 'dispatched',
      items: [
        { name: 'Smart Watch', quantity: 1, price: 199.99, image: '/images/watch.jpg' }
      ],
      total: 199.99,
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-01-25',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      }
    },
    {
      id: 'ORD-12347',
      date: '2024-01-20',
      status: 'pending',
      items: [
        { name: 'Laptop Bag', quantity: 1, price: 49.99, image: '/images/bag.jpg' },
        { name: 'Wireless Mouse', quantity: 1, price: 29.99, image: '/images/mouse.jpg' }
      ],
      total: 79.98,
      estimatedDelivery: '2024-01-28',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      }
    },
    {
      id: 'ORD-12348',
      date: '2024-01-10',
      status: 'delivered',
      items: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 79.99, image: '/images/speaker.jpg' }
      ],
      total: 79.99,
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-15',
      deliveredDate: '2024-01-14',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Orders', count: orders.length },
    { key: 'pending', label: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { key: 'dispatched', label: 'Dispatched', count: orders.filter(o => o.status === 'dispatched').length },
    { key: 'delivered', label: 'Delivered', count: orders.filter(o => o.status === 'delivered').length }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesFilter = activeFilter === 'all' || order.status === activeFilter;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="ecom-order-tracking-page">
      <div className="ecom-order-tracking-page__container">
        {/* Header */}
        <div className="ecom-order-tracking-page__header">
          <div className="ecom-order-tracking-page__header-content">
            <h1 className="ecom-order-tracking-page__title">My Orders</h1>
            <p className="ecom-order-tracking-page__subtitle">
              Track your orders and view order history
            </p>
          </div>
          <div className="ecom-order-tracking-page__header-stats">
            <div className="ecom-order-tracking-page__stat">
              <span className="ecom-order-tracking-page__stat-number">{orders.length}</span>
              <span className="ecom-order-tracking-page__stat-label">Total Orders</span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="ecom-order-tracking-page__controls">
          <div className="ecom-order-tracking-page__filters">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`ecom-order-tracking-page__filter-btn ${
                  activeFilter === filter.key ? 'ecom-order-tracking-page__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
                <span className="ecom-order-tracking-page__filter-count">({filter.count})</span>
              </button>
            ))}
          </div>

          <div className="ecom-order-tracking-page__search">
            <div className="ecom-order-tracking-page__search-container">
              <i className="fas fa-search ecom-order-tracking-page__search-icon"></i>
              <input
                type="text"
                placeholder="Search orders or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ecom-order-tracking-page__search-input"
              />
              {searchTerm && (
                <button
                  className="ecom-order-tracking-page__search-clear"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Order List */}
        <div className="ecom-order-tracking-page__content">
          {filteredOrders.length > 0 ? (
            <OrderList orders={filteredOrders} />
          ) : (
            <div className="ecom-order-tracking-page__empty">
              <div className="ecom-order-tracking-page__empty-icon">
                <i className="fas fa-box-open"></i>
              </div>
              <h3 className="ecom-order-tracking-page__empty-title">No orders found</h3>
              <p className="ecom-order-tracking-page__empty-text">
                {searchTerm 
                  ? `No orders match your search for "${searchTerm}"`
                  : `You don't have any ${activeFilter !== 'all' ? activeFilter : ''} orders yet.`
                }
              </p>
              {searchTerm && (
                <button
                  className="ecom-order-tracking-page__empty-btn"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;