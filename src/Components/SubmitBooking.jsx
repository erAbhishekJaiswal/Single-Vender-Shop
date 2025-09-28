import React, { useState } from 'react';
import './SubmitBooking.css';

const SubmitBooking = ({ onSubmit, isSubmitting, bookingData }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="ecom-submit-booking">
      <div className="ecom-submit-booking__summary">
        <h3 className="ecom-submit-booking__title">Ready to Book!</h3>
        
        <div className="ecom-submit-booking__details">
          <div className="ecom-submit-booking__detail-item">
            <span>Appointment:</span>
            <strong>
              {new Date(bookingData.date).toLocaleDateString()} at {bookingData.time}
            </strong>
          </div>
          <div className="ecom-submit-booking__detail-item">
            <span>For:</span>
            <strong>{bookingData.guests} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</strong>
          </div>
        </div>

        <div className="ecom-submit-booking__terms">
          <label className="ecom-submit-booking__terms-label">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="ecom-submit-booking__terms-checkbox"
            />
            <span className="ecom-submit-booking__terms-text">
              I agree to the <a href="/terms" target="_blank">terms and conditions</a> and 
              understand that this booking is subject to confirmation.
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className={`ecom-submit-booking__btn ${
          isSubmitting ? 'ecom-submit-booking__btn--loading' : ''
        }`}
        onClick={onSubmit}
        disabled={!termsAccepted || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="ecom-submit-booking__spinner"></div>
            Confirming Your Booking...
          </>
        ) : (
          <>
            <i className="fas fa-calendar-check"></i>
            Confirm Booking
          </>
        )}
      </button>

      {/* Success Message (would be shown after submission) */}
      {isSubmitting && (
        <div className="ecom-submit-booking__processing">
          <div className="ecom-submit-booking__processing-content">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Processing your booking...</p>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="ecom-submit-booking__info">
        <div className="ecom-submit-booking__info-item">
          <i className="fas fa-sync-alt"></i>
          <span>Free cancellation up to 24 hours before</span>
        </div>
        <div className="ecom-submit-booking__info-item">
          <i className="fas fa-envelope"></i>
          <span>Confirmation email will be sent shortly</span>
        </div>
      </div>
    </div>
  );
};

export default SubmitBooking;