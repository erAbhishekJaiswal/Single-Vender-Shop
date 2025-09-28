import React from "react";
import "../../CssFiles/Common/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="pp-page">
      <div className="pp-container">
        <h1 className="pp-title">Privacy Policy</h1>
        <p className="pp-updated">Last updated: September 26, 2025</p>

        <div className="pp-content">
          <div className="pp-section">
            <h2>1. Introduction</h2>
            <p>
              At <strong>ShopEase</strong>, we value your privacy. This Privacy
              Policy explains how we collect, use, and protect your personal
              information when you use our services.
            </p>
          </div>

          <div className="pp-section">
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email,
              phone number, payment details, and browsing behavior on our
              website to provide better services.
            </p>
          </div>

          <div className="pp-section">
            <h2>3. How We Use Your Information</h2>
            <p>
              Your information is used to process orders, improve customer
              experience, send updates, and prevent fraudulent activities.
            </p>
          </div>

          <div className="pp-section">
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell your personal data. However, we may share
              information with trusted third-party services (e.g., payment
              gateways, delivery partners) to fulfill your orders.
            </p>
          </div>

          <div className="pp-section">
            <h2>5. Data Security</h2>
            <p>
              We implement strict security measures to protect your data, but no
              method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="pp-section">
            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal information. You may also opt-out of marketing emails.
            </p>
          </div>

          <div className="pp-section">
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with the revised date.
            </p>
          </div>

          <div className="pp-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any concerns about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:privacy@shopease.com">privacy@shopease.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
