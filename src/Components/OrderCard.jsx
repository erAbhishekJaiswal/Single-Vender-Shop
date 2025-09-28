import React from 'react';
import DownloadInvoiceButton from './DownloadInvoiceButton';
import '../ComponentsCSS/OrderCard.css';

const OrderCard = ({ order, statusConfig, isExpanded, onToggleExpand }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressSteps = (status) => {
    const steps = [
      { key: 'pending', label: 'Order Placed', completed: true },
      { key: 'processing', label: 'Processing', completed: ['dispatched', 'delivered'].includes(status) },
      { key: 'dispatched', label: 'Dispatched', completed: ['dispatched', 'delivered'].includes(status) },
      { key: 'delivered', label: 'Delivered', completed: status === 'delivered' }
    ];
    return steps;
  };

  return (
    <div className={`ecom-order-card ${isExpanded ? 'ecom-order-card--expanded' : ''}`}>
      {/* Order Header */}
      <div className="ecom-order-card__header" onClick={onToggleExpand}>
        <div className="ecom-order-card__basic-info">
          <div className="ecom-order-card__id-date">
            <h4 className="ecom-order-card__id">Order #{order.id}</h4>
            <span className="ecom-order-card__date">Placed on {formatDate(order.date)}</span>
          </div>
          <div className="ecom-order-card__items-preview">
            {order.items.slice(0, 3).map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.name}
                className="ecom-order-card__item-image"
              />
            ))}
            {order.items.length > 3 && (
              <span className="ecom-order-card__more-items">+{order.items.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="ecom-order-card__status">
          <span
            className="ecom-order-card__status-badge"
            style={{ 
              color: statusConfig.color,
              backgroundColor: statusConfig.bgColor
            }}
          >
            <i className={statusConfig.icon}></i>
            {statusConfig.label}
          </span>
        </div>

        <div className="ecom-order-card__total">
          <span className="ecom-order-card__total-amount">${order.total.toFixed(2)}</span>
        </div>

        <div className="ecom-order-card__actions">
          <button className="ecom-order-card__expand-btn">
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="ecom-order-card__expanded-content">
          {/* Progress Tracking */}
          <div className="ecom-order-card__tracking">
            <h5 className="ecom-order-card__tracking-title">Order Progress</h5>
            <div className="ecom-order-card__progress-bar">
              <div 
                className="ecom-order-card__progress-fill"
                style={{ width: `${statusConfig.progress}%` }}
              ></div>
            </div>
            <div className="ecom-order-card__progress-steps">
              {getProgressSteps(order.status).map((step, index) => (
                <div key={step.key} className="ecom-order-card__progress-step">
                  <div className={`ecom-order-card__step-icon ${
                    step.completed ? 'ecom-order-card__step-icon--completed' : ''
                  }`}>
                    {step.completed ? (
                      <i className="fas fa-check"></i>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="ecom-order-card__step-label">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Items */}
          <div className="ecom-order-card__items">
            <h5 className="ecom-order-card__items-title">Order Items</h5>
            <div className="ecom-order-card__items-list">
              {order.items.map((item, index) => (
                <div key={index} className="ecom-order-card__item">
                  <img src={item.image} alt={item.name} className="ecom-order-card__item-detail-image" />
                  <div className="ecom-order-card__item-info">
                    <h6 className="ecom-order-card__item-name">{item.name}</h6>
                    <span className="ecom-order-card__item-quantity">Qty: {item.quantity}</span>
                  </div>
                  <div className="ecom-order-card__item-price">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="ecom-order-card__details">
            <div className="ecom-order-card__detail-section">
              <h6 className="ecom-order-card__detail-title">Shipping Address</h6>
              <div className="ecom-order-card__detail-content">
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>

            <div className="ecom-order-card__detail-section">
              <h6 className="ecom-order-card__detail-title">Delivery Information</h6>
              <div className="ecom-order-card__detail-content">
                <p>
                  <strong>Estimated Delivery:</strong> {formatDate(order.estimatedDelivery)}
                </p>
                {order.trackingNumber && (
                  <p>
                    <strong>Tracking Number:</strong> 
                    <span className="ecom-order-card__tracking-number">{order.trackingNumber}</span>
                  </p>
                )}
                {order.deliveredDate && (
                  <p>
                    <strong>Delivered on:</strong> {formatDate(order.deliveredDate)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="ecom-order-card__action-buttons">
            <DownloadInvoiceButton order={order} />
            
            {order.status === 'delivered' && (
              <button className="ecom-order-card__action-btn ecom-order-card__action-btn--secondary">
                <i className="fas fa-star"></i>
                Rate Products
              </button>
            )}
            
            {order.status === 'delivered' && (
              <button className="ecom-order-card__action-btn ecom-order-card__action-btn--secondary">
                <i className="fas fa-undo"></i>
                Return Items
              </button>
            )}
            
            <button className="ecom-order-card__action-btn ecom-order-card__action-btn--secondary">
              <i className="fas fa-question-circle"></i>
              Get Help
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;