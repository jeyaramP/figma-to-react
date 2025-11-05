import React from "react";

const Hero = () => {
  const brands = [
    { name: "HubSpot", logo: "assets/image/hero-brands/HubSpot.webp" },
    { name: "Salesforce", logo: "assets/image/hero-brands/Salesforce.webp" },
    { name: "Pipedrive", logo: "assets/image/hero-brands/Pipedrive.webp" },
    { name: "Zoho", logo: "assets/image/hero-brands/zoho-logo.webp" },
    {
      name: "Google Sheets",
      logo: "assets/image/hero-brands/google-sheets-logo.webp",
    },
    { name: "Copper", logo: "assets/image/hero-brands/cooper-crm.png" },

    // duplicate

    { name: "HubSpot", logo: "assets/image/hero-brands/HubSpot.webp" },
    { name: "Salesforce", logo: "assets/image/hero-brands/Salesforce.webp" },
    { name: "Pipedrive", logo: "assets/image/hero-brands/Pipedrive.webp" },
    { name: "Zoho", logo: "assets/image/hero-brands/zoho-logo.webp" },
    {
      name: "Google Sheets",
      logo: "assets/image/hero-brands/google-sheets-logo.webp",
    },
    { name: "Copper", logo: "assets/image/hero-brands/cooper-crm.png" },
  ];

  return (
    <>
      <div className="hero-bg-image">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="top-tag">
                <p>
                  <img src="assets/image/rocket-icon.svg" alt="" /> Stop
                  Juggling Tabs. Start Closing Deals.
                </p>
              </div>
              <h1 className="hero-heading">
                LinkedIn Leads, Instantly
                <span className="highlight">
                  Synced.
                  <img src="assets/image/line-1.webp" alt="" />
                </span>
              </h1>

              <p className="hero-sub-content">
                LeadCRM embeds your CRM directly into LinkedIn, automating
                prospect syncing and data <br />
                enrichment in one click.
              </p>
              <div className="hero-partners">
                <p>Work With</p>
                <div className="brand-list-container">
                  <div className="brand-list">
                    {brands.map((brand, index) => (
                      <div className="brand-list-item" key={index}>
                        <img
                          className="brand-logo"
                          src={brand.logo}
                          alt={brand.name}
                        />
                        <p className="brand-name">{brand.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p>& more</p>
              </div>
              <div className="ratings-hero">
                <img src="assets/image/rating-hero.webp" alt="" />
              </div>
              <div className="hero-bottom-btn">
                <a href="" className="chrome-web-btn">
                  <h2 className="bottom-btn-title">
                    <span>Available in</span> <br />
                    Chrome Web Store
                  </h2>
                  <img
                    src="assets/image/Google_Chrome_Web_Store_icon.webp"
                    alt=""
                  />
                </a>
                <a href="" className="get-btn">
                  <span>Get Your Account Now!</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
