import React from 'react';
import './BookingForm.css';

const BookingForm = ({ data, onChange, step }) => {
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Only allow bookings from tomorrow
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3); // Allow bookings up to 3 months in advance
    return maxDate.toISOString().split('T')[0];
  };

  if (step === 1) {
    return (
      <div className="ecom-booking-form">
        <h3 className="ecom-booking-form__title">Personal Information</h3>
        <p className="ecom-booking-form__description">
          Please provide your contact details for the booking confirmation.
        </p>

        <div className="ecom-booking-form__grid">
          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Full Name *
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="ecom-booking-form__input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Email Address *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="ecom-booking-form__input"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Phone Number *
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className="ecom-booking-form__input"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Number of Guests
            </label>
            <select
              value={data.guests}
              onChange={(e) => onChange('guests', parseInt(e.target.value))}
              className="ecom-booking-form__select"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="ecom-booking-form__group">
          <label className="ecom-booking-form__label">
            Special Requests (Optional)
          </label>
          <textarea
            value={data.specialRequests}
            onChange={(e) => onChange('specialRequests', e.target.value)}
            className="ecom-booking-form__textarea"
            placeholder="Any special requirements or notes..."
            rows={3}
          />
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="ecom-booking-form">
        <h3 className="ecom-booking-form__title">Select Date & Time</h3>
        <p className="ecom-booking-form__description">
          Choose your preferred appointment date and time slot.
        </p>

        <div className="ecom-booking-form__grid ecom-booking-form__grid--datetime">
          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Select Date *
            </label>
            <div className="ecom-booking-form__date-input-container">
              <i className="fas fa-calendar ecom-booking-form__date-icon"></i>
              <input
                type="date"
                value={data.date}
                onChange={(e) => onChange('date', e.target.value)}
                className="ecom-booking-form__input ecom-booking-form__input--date"
                min={getMinDate()}
                max={getMaxDate()}
                required
              />
            </div>
            <div className="ecom-booking-form__date-hints">
              <span className="ecom-booking-form__date-hint">
                <i className="fas fa-info-circle"></i>
                Bookings available from tomorrow
              </span>
            </div>
          </div>

          <div className="ecom-booking-form__group">
            <label className="ecom-booking-form__label">
              Select Time *
            </label>
            <div className="ecom-booking-form__time-slots">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  className={`ecom-booking-form__time-slot ${
                    data.time === slot ? 'ecom-booking-form__time-slot--selected' : ''
                  }`}
                  onClick={() => onChange('time', slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Date & Time Preview */}
        {(data.date || data.time) && (
          <div className="ecom-booking-form__selection-preview">
            <h4>Selected Appointment</h4>
            <div className="ecom-booking-form__preview-details">
              {data.date && (
                <span className="ecom-booking-form__preview-item">
                  <i className="fas fa-calendar"></i>
                  {new Date(data.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
              {data.time && (
                <span className="ecom-booking-form__preview-item">
                  <i className="fas fa-clock"></i>
                  {data.time}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default BookingForm;