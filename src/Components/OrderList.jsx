import React, { useState } from 'react';
import OrderCard from './OrderCard';
import '../ComponentsCSS/OrderList.css';

const OrderList = ({ orders }) => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        label: 'Pending',
        icon: 'fas fa-clock',
        color: '#ffa726',
        bgColor: '#fff3e0',
        progress: 25
      },
      dispatched: {
        label: 'Dispatched',
        icon: 'fas fa-shipping-fast',
        color: '#2196f3',
        bgColor: '#e3f2fd',
        progress: 65
      },
      delivered: {
        label: 'Delivered',
        icon: 'fas fa-check-circle',
        color: '#4caf50',
        bgColor: '#e8f5e8',
        progress: 100
      }
    };
    return configs[status] || configs.pending;
  };

  return (
    <div className="ecom-order-list">
      <div className="ecom-order-list__header">
        <div className="ecom-order-list__header-item">Order Details</div>
        <div className="ecom-order-list__header-item">Status</div>
        <div className="ecom-order-list__header-item">Total</div>
        <div className="ecom-order-list__header-item">Actions</div>
      </div>

      <div className="ecom-order-list__items">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            statusConfig={getStatusConfig(order.status)}
            isExpanded={expandedOrder === order.id}
            onToggleExpand={() => toggleOrderExpand(order.id)}
          />
        ))}
      </div>

      {/* Summary */}
      <div className="ecom-order-list__summary">
        <div className="ecom-order-list__summary-item">
          <span>Total Orders:</span>
          <strong>{orders.length}</strong>
        </div>
        <div className="ecom-order-list__summary-item">
          <span>Total Amount:</span>
          <strong>${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderList;