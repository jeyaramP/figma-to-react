import React, { useState } from "react";

const SalesSolutions = () => {
  const [activeTab, setActiveTab] = useState("crm-enrichment");

  const tabs = [
    {
      id: "crm-enrichment",
      title: "CRM Data Enrichment",
      icon: "assets/image/sales-tab/tab-icon-3.webp",
      content: (
        <div className="sales-tab-content">
          <h2>
            It’s hard to find the accurate contact data for every prospect.{" "}
            <span className="tab-badge">Incomplete Data</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="tab-content-box">
                <div>
                  <h2>Get Access to 700M+ Prospects.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Data Enrichment{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/CRM-Data-Enrichment-d-1536x929.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content-box">
                <div>
                  <h2>Get Access to 700M+ Prospects.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Data Enrichment{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/CRM-Data-Enrichment-1536x948.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "crm-sync",
      title: "CRM Data Sync",
      icon: "assets/image/sales-tab/tab-icon-4.webp",
      content: (
        <div className="sales-tab-content">
          <h2>
            40+ hours lost to copy-paste. Every. Single. Month.{" "}
            <span className="tab-badge">Lost Lead Context</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="tab-content-box tab-content-box-two">
                <div>
                  <h2>The Solution? LeadCRM's Instant Data Sync.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Data Sync{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img src="assets/image/sales-tab/CRM-Data-Sync.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content-box tab-content-box-two">
                <div>
                  <h2>
                    Unlock instant CRM insights on every profile you visit.
                  </h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Data Overlay{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/CRM-Data-Sync-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bulk-export",
      title: "Bulk Export & Enrichment",
      icon: "assets/image/sales-tab/tab-icon-2.webp",
      content: (
        <div className="sales-tab-content">
          <h2>
            Your Sales Navigator Workflow is Broken.{" "}
            <span className="tab-badge">Lost Productivity</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="tab-content-box">
                <div>
                  <h2>Enrich & Export 250 Profiles in Just 60 Seconds.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Bulk Export{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/Bulk-Export-Enrichment.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content-box">
                <div>
                  <h2>Export & enrich profiles to the CRM or G-Sheet</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Bulk Export{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/Bulk-Export-Enrichment-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ai-productivity",
      title: "AI Productivity",
      icon: "assets/image/sales-tab/tab-icon-1.webp",
      content: (
        <div className="sales-tab-content">
          <h2>
            Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.{" "}
            <span className="tab-badge">No Smart Assistance</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="tab-content-box tab-content-box-four">
                <div>
                  <h2>Get the same high-impact engagement in 80% less time.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM AI Response{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/AI-Comment-image-1-1024x804.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content-box tab-content-box-four">
                <div>
                  <h2>Use Shortcuts to reply faster.</h2>
                  <a href="#" className="tab-content-box-top-menu">
                    Try LeadCRM Templates{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
                <div className="tab-content-image">
                  <img
                    src="assets/image/sales-tab/Template-imges-2-1024x705.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="sec-pb-80 sec-pt-40">
      <div className="sales-tab">
        <div className="container">
          <div className="sales-tab-box">
            <h2 className="sub-main-title">
              Complete LinkedIn Sales Solutions
            </h2>
            <p className="sub-headline">
              Everything you need for professional LinkedIn prospecting
            </p>

            <div className="sale-tab-items-box">
              <ul className="nav nav-tabs" role="tablist">
                {tabs.map((tab) => (
                  <li className="nav-item" key={tab.id}>
                    <button
                      className={`nav-link ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <img src={tab.icon} alt="" />
                      {tab.title}
                      <div className="tab-bottom-line">
                        <img
                          src="assets/image/sales-tab/Rectangle.png"
                          alt=""
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content mt-4">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div key={tab.id} className="tab-pane fade show active">
                        {tab.content}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSolutions;
