import React from 'react';
import '../ComponentsCSS/Loader.css';

const Loader = ({ size = 'medium', color = 'primary', text = '', overlay = false, fullScreen = false }) => {
  const loaderClass = `ecom-loader ecom-loader--${size} ecom-loader--${color} ${
    overlay ? 'ecom-loader--overlay' : ''
  } ${fullScreen ? 'ecom-loader--fullscreen' : ''}`;

  if (fullScreen) {
    return (
      <div className="ecom-loader-fullscreen">
        <div className={loaderClass}>
          <div className="ecom-loader__spinner">
            <div className="ecom-loader__bounce1"></div>
            <div className="ecom-loader__bounce2"></div>
            <div className="ecom-loader__bounce3"></div>
          </div>
          {text && <p className="ecom-loader__text">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={loaderClass}>
      <div className="ecom-loader__spinner">
        <div className="ecom-loader__bounce1"></div>
        <div className="ecom-loader__bounce2"></div>
        <div className="ecom-loader__bounce3"></div>
      </div>
      {text && <p className="ecom-loader__text">{text}</p>}
    </div>
  );
};

// Skeleton Loader for content
export const SkeletonLoader = ({ type = 'text', count = 1, height, width, className = '' }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);
  
  return (
    <div className={`ecom-skeleton ${className}`}>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`ecom-skeleton__item ecom-skeleton__item--${type}`}
          style={{ height, width }}
        ></div>
      ))}
    </div>
  );
};

// Loading overlay for buttons
export const ButtonLoader = ({ size = 'small', color = 'white' }) => {
  return (
    <div className={`ecom-button-loader ecom-button-loader--${size} ecom-button-loader--${color}`}>
      <div className="ecom-button-loader__spinner"></div>
    </div>
  );
};

export default Loader;