import React, { useEffect } from 'react';
import '../ComponentsCSS/Modal.css';

const Modal = ({ isOpen, onClose, title, children, type = 'default', size = 'medium' }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ecom-modal__overlay" onClick={onClose}>
      <div 
        className={`ecom-modal ecom-modal--${size} ecom-modal--${type}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ecom-modal__header">
          <h3 className="ecom-modal__title">{title}</h3>
          <button className="ecom-modal__close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="ecom-modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

// Booking Modal Component
export const BookingModal = ({ isOpen, onClose, onConfirm, product }) => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ date, time, product });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Appointment" type="booking" size="medium">
      <form onSubmit={handleSubmit} className="ecom-modal__form">
        {product && (
          <div className="ecom-modal__product-info">
            <img src={product.image} alt={product.name} className="ecom-modal__product-image" />
            <div className="ecom-modal__product-details">
              <h4>{product.name}</h4>
              <p className="ecom-modal__product-price">${product.price}</p>
            </div>
          </div>
        )}
        
        <div className="ecom-modal__form-group">
          <label className="ecom-modal__label">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ecom-modal__input"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="ecom-modal__form-group">
          <label className="ecom-modal__label">Select Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="ecom-modal__select"
            required
          >
            <option value="">Choose a time</option>
            <option value="09:00">09:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="16:00">04:00 PM</option>
          </select>
        </div>
        
        <div className="ecom-modal__actions">
          <button type="button" className="ecom-modal__btn ecom-modal__btn--secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="ecom-modal__btn ecom-modal__btn--primary">
            Confirm Booking
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Confirmation Modal Component
export const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", type = "warning" }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} type={type} size="small">
      <div className="ecom-modal__confirmation">
        <div className={`ecom-modal__icon ecom-modal__icon--${type}`}>
          {type === 'warning' && <i className="fas fa-exclamation-triangle"></i>}
          {type === 'success' && <i className="fas fa-check-circle"></i>}
          {type === 'error' && <i className="fas fa-times-circle"></i>}
          {type === 'info' && <i className="fas fa-info-circle"></i>}
        </div>
        <p className="ecom-modal__message">{message}</p>
        <div className="ecom-modal__actions ecom-modal__actions--center">
          <button className="ecom-modal__btn ecom-modal__btn--secondary" onClick={onClose}>
            {cancelText}
          </button>
          <button 
            className={`ecom-modal__btn ecom-modal__btn--${type}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Modal;