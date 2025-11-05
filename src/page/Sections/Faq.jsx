 import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "1. What exactly does LeadCRM do?",
      answer: `LeadCRM is a browser extension that seamlessly connects your LinkedIn account (including Sales Navigator) to your CRM. It eliminates manual data entry by allowing you to instantly sync entire LinkedIn profiles—including contact information, experience, and skills—to your CRM in a single click. It’s designed to save your sales team dozens of hours a month, prevent data errors, and ensure your CRM is always up-to-date.`,
    },
    {
      question: "2. Which CRMs do you integrate with?",
      answer: `We offer deep, bi-directional integrations with the most popular CRMs in the industry, including <b>HubSpot, Salesforce, Zoho and Pipedrive</b>. Our “two-way sync” means that data flows seamlessly between LinkedIn and your CRM, so your records are always enriched and current on both platforms.`,
    },
    {
      question: "3. Can I integrate my CRM if it’s not supported natively?",
      answer: `Yes, you can integrate any CRM with our system as long as it supports certain APIs. Reach out to support@leadcrm.io to learn more.`,
    },
    {
      question: "4. Can I control what information gets synced to my CRM?",
      answer: `Yes, you have complete control. Our flexible field mapping allows you to precisely define which data from a LinkedIn profile goes into which specific field in your CRM. This ensures your data is perfectly organized according to your team’s workflow and prevents messy, inconsistent records. You can set it up once, and every sync will follow your rules automatically.`,
    },
    {
      question: "5. How is LeadCRM different from other tools?",
      answer: `<b>LeadCRM stands out in three key ways:</b><br /><br />
      <b>True Bi-Directional Sync:</b> Unlike tools that only push data one way, we keep both LinkedIn and your CRM perfectly in sync.<br />
      <b>Waterfall Enrichment:</b> We use an advanced process to find the most accurate and up-to-date contact information for your prospects.<br />
      <b>Complete Profile Sync:</b> We capture the entire profile, not just bits and pieces, and give you full control over where that data lands in your CRM.`,
    },
    {
      question: "6. Is LeadCRM safe and GDPR compliant?",
      answer: `Absolutely. We take data security and privacy very seriously. LeadCRM is built with enterprise-grade security practices to ensure your data and your customers’ data are always protected. We are fully GDPR compliant, and our processes are designed to help you maintain compliance while conducting your sales activities.`,
    },
    {
      question: "7. What kind of support can I expect from LeadCRM?",
      answer: `We offer dedicated customer support to ensure you get the most out of LeadCRM. Our team is available via email and live chat to help you with everything from initial setup to optimizing your workflow. Pro-tier customers also receive a dedicated account manager for priority support. We’re committed to being responsive and helpful, so you’re never left without an answer.`,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section sec-pb-80 sec-pt-40">
      <div className="container">
        <div className="faq-container">
          <h2 className="sub-main-title">Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="shape1">
        <img
          src="assets/image/chart/comment-icon.webp"
          alt="Comment Icon Shape"
        />
      </div>

      <div className="shape2">
        <img
          src="assets/image/chart/Collaboration.webp"
          alt="Collaboration Shape"
        />
      </div>
    </section>
  );
};

export default Faq;
