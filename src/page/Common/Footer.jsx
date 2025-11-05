 import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="sec-pt-40 footer-section">
        <div className="container">
          <div className="footer-sec-inside">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-box">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src="assets/image/LeadCRM.webp"
                        alt="LeadCRM Logo"
                      />
                    </a>
                  </div>
                  <p className="footer-logo-content">
                    LeadCRM helps sales teams connect their LinkedIn prospecting
                    with their CRM workflow, saving time and increasing revenue
                    through better data management and enrichment.
                  </p>
                  <div className="footer-social-icon">
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-menu">
                  <h3>Integrations</h3>
                  <ul>
                    <li><a href="#">HubSpot</a></li>
                    <li><a href="#">Salesforce</a></li>
                    <li><a href="#">Pipedrive</a></li>
                    <li><a href="#">Zoho</a></li>
                    <li><a href="#">Copper CRM</a></li>
                    <li><a href="#">Google Sheets</a></li>
                    <li><a href="#">Close.com</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-menu">
                  <h3>Alternative</h3>
                  <ul>
                    <li><a href="#">LeadCRM Alternatives</a></li>
                    <li><a href="#">Surfe Alternative</a></li>
                    <li><a href="#">Linkmatch Alternative</a></li>
                    <li><a href="#">Apollo.io Alternative</a></li>
                    <li><a href="#">Hublead Alternative</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer-menu">
                  <h3>Legal</h3>
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-menu footer-address">
                  <h3>Integrations</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i> support@leadcrm.io
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-phone"></i> +1 231-538-7466
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-circle-question"></i> Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-map"></i> Roadmap
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-user-group"></i> Partner Program
                      </a>
                    </li>
                  </ul>

                  <a href="#" className="chrome-ext-link">
                    <div className="chrome-ext-btn">
                      <div className="content-title">
                        <h4>Available in</h4>
                        <p>Chrome</p>
                      </div>
                      <div className="chrome-str-img">
                        <img
                          src="assets/image/Google_Chrome_Web_Store_icon.webp"
                          alt="Chrome Web Store"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-disclaimer">
              <p className="dis-content">
                Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All
                LinkedIn™ logos and trademarks displayed on this tool are property
                of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is
                at your own risk.
              </p>
            </div>

            <div className="copyright">
              <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
