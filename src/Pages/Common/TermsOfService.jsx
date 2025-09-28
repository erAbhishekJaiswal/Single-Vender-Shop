import React from "react";
import "../../CssFiles/Common/TermsOfService.css";

const TermsOfService = () => {
  return (
    <section className="tos-page">
      <div className="tos-container">
        <h1 className="tos-title">Terms of Service</h1>
        <p className="tos-updated">Last updated: September 26, 2025</p>

        <div className="tos-content">
          <div className="tos-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>ShopEase</strong>. By accessing or using our website,
              you agree to comply with these Terms of Service. Please read them
              carefully before using our platform.
            </p>
          </div>

          <div className="tos-section">
            <h2>2. User Responsibilities</h2>
            <p>
              You agree to use the website only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict
              their use of the platform. Any misuse may lead to suspension of
              your account.
            </p>
          </div>

          <div className="tos-section">
            <h2>3. Purchases & Payments</h2>
            <p>
              All purchases made through our platform are subject to product
              availability, pricing, and applicable taxes. We reserve the right
              to refuse or cancel any order at our discretion.
            </p>
          </div>

          <div className="tos-section">
            <h2>4. Returns & Refunds</h2>
            <p>
              Products may be returned within 7 days of delivery if they meet
              the return policy criteria. Refunds will be processed to the
              original payment method within 5–7 business days.
            </p>
          </div>

          <div className="tos-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              ShopEase is not responsible for any damages, direct or indirect,
              arising from the use of our website or services. All services are
              provided "as is" without warranties of any kind.
            </p>
          </div>

          <div className="tos-section">
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              Continued use of our services after changes indicates acceptance
              of the updated terms.
            </p>
          </div>

          <div className="tos-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms, please contact us
              at <a href="mailto:support@shopease.com">support@shopease.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
