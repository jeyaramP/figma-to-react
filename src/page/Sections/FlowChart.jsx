 import React from "react";

const FlowChart = () => {
  return (
    <section className="sec-pb-80 sec-pt-40 flow-chart-section">
      <div className="container">
        <div className="flow-chart">
          <h2 className="sub-main-title">
            Your CRM, Now the Single Source of Truth.
          </h2>
          <p className="sub-headline">
            Sync complete LinkedIn profiles and use our flexible field mapping
            to ensure every detail, from job history to contact info,
            <br />
            populates exactly where you need it, creating a perfectly organized
            CRM automatically.
          </p>

          <div className="chart-img">
            <img
              src="assets/image/chart/leadcrm-supported.png"
              alt="LeadCRM Supported Chart"
            />
          </div>

          <div className="step-bottom-btn">
            <button className="get-btn">
              Try LeadCRM Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img
          src="assets/image/chart/comment-icon.webp"
          alt="Comment Icon Decoration"
        />
      </div>

      <div className="shape2">
        <img
          src="assets/image/chart/Collaboration.webp"
          alt="Collaboration Decoration"
        />
      </div>
    </section>
  );
};

export default FlowChart;
