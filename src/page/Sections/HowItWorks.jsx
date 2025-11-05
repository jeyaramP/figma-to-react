import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="sec-pb-80 sec-pt-40 how-it-work">
        <div className="container">
          <div className="how-it-wor-content-section">
            <h2 className="sub-main-title">How it Works</h2>
            <p>
              From setup to success in <b>4 simple steps</b>
            </p>
            <div className="steps-box">
              <div className="steps-box-item">
                <div className="steps-box-item-content">
                  <div className="step-number">1</div>
                  <h3>Install the Extension</h3>
                  <p>
                    Add LeadCRM to Chrome and connect your CRM in 2
                    minutes—secure and seamless.
                  </p>
                </div>
                <div className="steps-box-item-img">
                  <img
                    src="assets/image/how-work/install-the-extension.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps-box-item">
                <div className="steps-box-item-content">
                  <div className="step-number">2</div>
                  <h3>Browse LinkedIn</h3>
                  <p>
                    Use LinkedIn normally, our extension auto-captures data and
                    reveals CRM contacts instantly.
                  </p>
                </div>
                <div className="steps-box-item-img">
                  <img
                    src="assets/image/how-work/Browse-LinkedIn.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps-box-item">
                <div className="steps-box-item-content">
                  <div className="step-number">3</div>
                  <h3>Get Enriched Data</h3>
                  <p>
                    Enrich profiles with verified emails, phones, and company
                    data with 95%+ accuracy guaranteed.
                  </p>
                </div>
                <div className="steps-box-item-img">
                  <img
                    src="assets/image/how-work/Get-Enriched-Data.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps-box-item">
                <div className="steps-box-item-content">
                  <div className="step-number">4</div>
                  <h3>Sync to CRM Instantly</h3>
                  <p>
                    Prospect data syncs to your CRM instantly with history,
                    tracking, and AI powered insights for better follow ups.
                  </p>
                </div>
                <div className="steps-box-item-img">
                  <img
                    src="assets/image/how-work/Sync-to-CRM-Instantly.webp"
                    alt=""
                  />
                </div>
              </div>

              <div className="line-step-img">
                <img src="assets/image/how-work/line-frame.png" alt="" />
              </div>
            </div>
            <div className="step-bottom-btn">
              <button href="" className="get-btn">
                Try LeadCRM Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
