import React, { useEffect } from 'react';
import '../ComponentsCSS/Toast.css';

const Toast = ({ message, type = 'info', onClose, duration = 5000, position = 'top-right' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-times-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      case 'info': return 'fas fa-info-circle';
      default: return 'fas fa-bell';
    }
  };

  return (
    <div className={`ecom-toast ecom-toast--${type} ecom-toast--${position}`}>
      <div className="ecom-toast__content">
        <div className="ecom-toast__icon">
          <i className={getIcon()}></i>
        </div>
        <div className="ecom-toast__message">
          <p className="ecom-toast__title">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          <p className="ecom-toast__text">{message}</p>
        </div>
        <button className="ecom-toast__close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="ecom-toast__progress">
        <div 
          className="ecom-toast__progress-bar" 
          style={{ animationDuration: `${duration}ms` }}
        ></div>
      </div>
    </div>
  );
};

// Toast Container Component
export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="ecom-toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          position={toast.position}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

// Hook for using toasts
export const useToast = () => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, options = {}) => {
    const id = Date.now() + Math.random();
    const toast = {
      id,
      message,
      type: options.type || 'info',
      position: options.position || 'top-right',
      duration: options.duration || 5000,
    };

    setToasts(prev => [...prev, toast]);
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (message, options) => addToast(message, { ...options, type: 'success' });
  const error = (message, options) => addToast(message, { ...options, type: 'error' });
  const warning = (message, options) => addToast(message, { ...options, type: 'warning' });
  const info = (message, options) => addToast(message, { ...options, type: 'info' });

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
};

export default Toast;