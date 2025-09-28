import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import SubmitBooking from './SubmitBooking';
import './BookingPopup.css';

const BookingPopup = ({ isOpen, onClose, product, onBookingSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form when opening
      setCurrentStep(1);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        specialRequests: ''
      });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success callback
      if (onBookingSuccess) {
        onBookingSuccess(bookingData);
      }
      
      // Close popup after success
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Booking failed:', error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ecom-booking-popup">
      <div className="ecom-booking-popup__overlay" onClick={onClose}></div>
      
      <div className="ecom-booking-popup__content">
        {/* Header */}
        <div className="ecom-booking-popup__header">
          <div className="ecom-booking-popup__header-content">
            <h2 className="ecom-booking-popup__title">Book Your Appointment</h2>
            <p className="ecom-booking-popup__subtitle">
              {product ? `Booking for: ${product.name}` : 'Schedule your visit'}
            </p>
          </div>
          
          <button className="ecom-booking-popup__close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="ecom-booking-popup__progress">
          <div className="ecom-booking-popup__progress-steps">
            {[1, 2, 3].map((step) => (
              <div key={step} className="ecom-booking-popup__progress-step">
                <div className={`ecom-booking-popup__step-number ${
                  step === currentStep ? 'ecom-booking-popup__step-number--active' :
                  step < currentStep ? 'ecom-booking-popup__step-number--completed' : ''
                }`}>
                  {step < currentStep ? <i className="fas fa-check"></i> : step}
                </div>
                <span className="ecom-booking-popup__step-label">
                  {step === 1 ? 'Details' : step === 2 ? 'DateTime' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="ecom-booking-popup__progress-bar">
            <div 
              className="ecom-booking-popup__progress-fill"
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Product Info */}
        {product && (
          <div className="ecom-booking-popup__product-info">
            <img src={product.image} alt={product.name} className="ecom-booking-popup__product-image" />
            <div className="ecom-booking-popup__product-details">
              <h4 className="ecom-booking-popup__product-name">{product.name}</h4>
              <p className="ecom-booking-popup__product-price">${product.price}</p>
              {product.duration && (
                <p className="ecom-booking-popup__product-duration">
                  <i className="fas fa-clock"></i> {product.duration} minutes
                </p>
              )}
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="ecom-booking-popup__form-container">
          <form onSubmit={handleSubmit} className="ecom-booking-popup__form">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <BookingForm 
                data={bookingData}
                onChange={handleInputChange}
                step={1}
              />
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <BookingForm 
                data={bookingData}
                onChange={handleInputChange}
                step={2}
              />
            )}

            {/* Step 3: Review & Confirm */}
            {currentStep === 3 && (
              <div className="ecom-booking-popup__review">
                <h3 className="ecom-booking-popup__review-title">Review Your Booking</h3>
                
                <div className="ecom-booking-popup__review-details">
                  <div className="ecom-booking-popup__review-section">
                    <h4>Personal Information</h4>
                    <div className="ecom-booking-popup__review-item">
                      <span>Name:</span>
                      <strong>{bookingData.name}</strong>
                    </div>
                    <div className="ecom-booking-popup__review-item">
                      <span>Email:</span>
                      <strong>{bookingData.email}</strong>
                    </div>
                    <div className="ecom-booking-popup__review-item">
                      <span>Phone:</span>
                      <strong>{bookingData.phone}</strong>
                    </div>
                  </div>

                  <div className="ecom-booking-popup__review-section">
                    <h4>Appointment Details</h4>
                    <div className="ecom-booking-popup__review-item">
                      <span>Date:</span>
                      <strong>{new Date(bookingData.date).toLocaleDateString()}</strong>
                    </div>
                    <div className="ecom-booking-popup__review-item">
                      <span>Time:</span>
                      <strong>{bookingData.time}</strong>
                    </div>
                    <div className="ecom-booking-popup__review-item">
                      <span>Guests:</span>
                      <strong>{bookingData.guests}</strong>
                    </div>
                  </div>

                  {bookingData.specialRequests && (
                    <div className="ecom-booking-popup__review-section">
                      <h4>Special Requests</h4>
                      <p className="ecom-booking-popup__review-requests">{bookingData.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="ecom-booking-popup__actions">
              <div className="ecom-booking-popup__action-buttons">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="ecom-booking-popup__btn ecom-booking-popup__btn--secondary"
                    onClick={handlePrevStep}
                    disabled={isSubmitting}
                  >
                    <i className="fas fa-arrow-left"></i>
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    className="ecom-booking-popup__btn ecom-booking-popup__btn--primary"
                    onClick={handleNextStep}
                    disabled={!isStepValid(currentStep, bookingData)}
                  >
                    Continue
                    <i className="fas fa-arrow-right"></i>
                  </button>
                ) : (
                  <SubmitBooking 
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    bookingData={bookingData}
                  />
                )}
              </div>
              
              {currentStep < 3 && (
                <div className="ecom-booking-popup__step-info">
                  Step {currentStep} of 3
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="ecom-booking-popup__footer">
          <div className="ecom-booking-popup__security">
            <i className="fas fa-lock"></i>
            <span>Your information is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Validation function for each step
const isStepValid = (step, data) => {
  switch (step) {
    case 1:
      return data.name.trim() && 
             data.email.trim() && 
             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
             data.phone.trim();
    case 2:
      return data.date && data.time;
    case 3:
      return true;
    default:
      return false;
  }
};

export default BookingPopup;