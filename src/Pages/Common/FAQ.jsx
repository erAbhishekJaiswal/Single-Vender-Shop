import React, { useState } from "react";
import "../../CssFiles/Common/FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is ShopEase?",
    answer:
      "ShopEase is an online shopping platform that provides a wide range of products across categories like fashion, electronics, and more."
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is placed, you can track it from the 'My Orders' section in your account dashboard. You will also receive email/SMS updates."
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and wallet payments. Cash on delivery is available on select items."
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, we have a 7-day easy return policy for most products. Check the product page for specific return eligibility before purchase."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Find answers to common questions below. Still have doubts? Contact us anytime.
        </p>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </button>
              <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
