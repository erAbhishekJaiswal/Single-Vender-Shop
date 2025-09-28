import React from 'react';
import '../ComponentsCSS/CartItemList.css';

const CartItemList = ({ items, onUpdateQuantity, onRemoveItem, onMoveToWishlist }) => {
  return (
    <div className="ecom-cart-item-list">
      {/* List Header */}
      <div className="ecom-cart-item-list__header">
        <div className="ecom-cart-item-list__header-product">Product</div>
        <div className="ecom-cart-item-list__header-price">Price</div>
        <div className="ecom-cart-item-list__header-quantity">Quantity</div>
        <div className="ecom-cart-item-list__header-subtotal">Subtotal</div>
        <div className="ecom-cart-item-list__header-actions">Actions</div>
      </div>

      {/* Cart Items */}
      <div className="ecom-cart-item-list__items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onMoveToWishlist={onMoveToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemoveItem, onMoveToWishlist }) => {
  const subtotal = item.price * item.quantity;

  return (
    <div className="ecom-cart-item">
      {/* Product Info */}
      <div className="ecom-cart-item__product">
        <div className="ecom-cart-item__image-container">
          <img 
            src={item.image} 
            alt={item.name}
            className="ecom-cart-item__image"
          />
          {!item.inStock && (
            <div className="ecom-cart-item__out-of-stock">Out of Stock</div>
          )}
        </div>
        <div className="ecom-cart-item__details">
          <h4 className="ecom-cart-item__name">{item.name}</h4>
          <div className="ecom-cart-item__variants">
            {item.color && (
              <span className="ecom-cart-item__variant">Color: {item.color}</span>
            )}
            {item.size && (
              <span className="ecom-cart-item__variant">Size: {item.size}</span>
            )}
          </div>
          {item.inStock ? (
            <span className="ecom-cart-item__stock ecom-cart-item__stock--in">
              <i className="fas fa-check"></i> In Stock
            </span>
          ) : (
            <span className="ecom-cart-item__stock ecom-cart-item__stock--out">
              <i className="fas fa-times"></i> Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="ecom-cart-item__price">
        <span className="ecom-cart-item__current-price">${item.price.toFixed(2)}</span>
        {item.originalPrice && (
          <span className="ecom-cart-item__original-price">${item.originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* Quantity Controls */}
      <div className="ecom-cart-item__quantity">
        <div className="ecom-cart-item__quantity-controls">
          <button
            className="ecom-cart-item__quantity-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <i className="fas fa-minus"></i>
          </button>
          
          <span className="ecom-cart-item__quantity-display">{item.quantity}</span>
          
          <button
            className="ecom-cart-item__quantity-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            disabled={item.quantity >= item.maxQuantity}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {item.quantity >= item.maxQuantity && (
          <span className="ecom-cart-item__max-quantity">Max {item.maxQuantity} per order</span>
        )}
      </div>

      {/* Subtotal */}
      <div className="ecom-cart-item__subtotal">
        <span className="ecom-cart-item__subtotal-amount">${subtotal.toFixed(2)}</span>
      </div>

      {/* Actions */}
      <div className="ecom-cart-item__actions">
        <button
          className="ecom-cart-item__action-btn ecom-cart-item__action-btn--wishlist"
          onClick={() => onMoveToWishlist(item.id)}
          title="Move to Wishlist"
        >
          <i className="fas fa-heart"></i>
        </button>
        
        <button
          className="ecom-cart-item__action-btn ecom-cart-item__action-btn--remove"
          onClick={() => onRemoveItem(item.id)}
          title="Remove Item"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>

      {/* Mobile View */}
      <div className="ecom-cart-item__mobile-actions">
        <button
          className="ecom-cart-item__mobile-btn"
          onClick={() => onRemoveItem(item.id)}
        >
          <i className="fas fa-trash"></i> Remove
        </button>
        <button
          className="ecom-cart-item__mobile-btn"
          onClick={() => onMoveToWishlist(item.id)}
        >
          <i className="fas fa-heart"></i> Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartItemList;