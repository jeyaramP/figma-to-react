 import React, { useState, useEffect } from "react";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [shadow, setShadow] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "auto";
  };

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <>
      <div className="mobile-menu-header">
        <div
          className="logo-with-toggle"
          style={{
            boxShadow: shadow ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <div className="logo">
            <img
              width="167"
              height="58"
              src="assets/image/LeadCRM.webp"
              alt="LeadCRM"
            />
          </div>

          <div className="menu-btn-mobile">
            <div className="get-free-ac-btn">
              <a href="#">
                <span>Get your free account</span>
              </a>
            </div>
            <div className="login-btn">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M14.1665 15.5833V11.3333L21.2498 16.9999L14.1665 22.6666V18.4166H1.4165V15.5833H14.1665ZM3.48172 21.2499H6.49032C8.17158 25.4033 12.2435 28.3333 16.9998 28.3333C23.2591 28.3333 28.3332 23.2592 28.3332 16.9999C28.3332 10.7407 23.2591 5.66659 16.9998 5.66659C12.2435 5.66659 8.17158 8.59649 6.49032 12.7499H3.48172C5.28694 7.00235 10.6565 2.83325 16.9998 2.83325C24.8238 2.83325 31.1665 9.17588 31.1665 16.9999C31.1665 24.8239 24.8238 31.1666 16.9998 31.1666C10.6565 31.1666 5.28694 26.9975 3.48172 21.2499Z"
                    fill="#1A3E62"
                  ></path>
                </svg>
                <span>Login</span>
              </a>
            </div>
            <div className="mobile-toggle" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`mobile-sidebar ${isSidebarOpen ? "active" : ""}`}>
          <div className="mobile-sidebar-header">
            <img
              src="assets/image/LeadCRM.webp"
              alt="LeadCRM Logo"
              className="mobile-logo"
            />
            <button className="close-sidebar" onClick={toggleSidebar}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul className="mobile-menu">
            {/* ===== Product Dropdown ===== */}
            <li
              className={`mega-main-menu dropdown ${
                openDropdowns.product ? "open" : ""
              }`}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("product"); }}>
                Product <i className="fa-solid fa-chevron-down"></i>
              </a>

              <div className="mega-menu-box dropdown-list">
                <div className="ln-extension">
                  <div className="ln-extension-content">
                    <h3>LinkedIn Extension</h3>
                    <p>
                      Easily manage your network, organize leads, and integrate
                      seamlessly with your CRM for efficient follow-ups and
                      enhanced sales workflows.
                    </p>
                  </div>
                  <img
                    src="assets/image/mega-menu/products/extension-leadcrm-menu.webp"
                    alt="LeadCRM Extension"
                  />
                </div>

                <div className="features-column">
                  <h3>Features</h3>
                  <ul>
                    {[
                      {
                        title: "Lead Finder",
                        desc: "Professional Profiles Instantly.",
                        img: "add-connection.webp",
                      },
                      {
                        title: "Teammate",
                        desc: "Empower. Collaborate. Grow. Win.",
                        img: "my-team-e1743507016397.webp",
                      },
                      {
                        title: "Deal Management",
                        desc: "Streamline Your Deal Management.",
                        img: "one-click-deal-e1743507028596.webp",
                      },
                      {
                        title: "Waterfall Data Enrichment",
                        desc: "Transform Data. Drive Sales Success.",
                        img: "data-enrichment-tool.webp",
                      },
                      {
                        title: "Bulk Export & Enrich",
                        desc: "Export LinkedIn Leads & Auto-Enrich.",
                        img: "Bulk-export.webp",
                      },
                      {
                        title: "CRM Data Sync",
                        desc: "Sync LinkedIn Contacts Directly.",
                        img: "CRM-Date-sync.webp",
                      },
                      {
                        title: "CRM Data Overlay",
                        desc: "Instant LinkedIn Intel Overlaid on Your CRM.",
                        img: "Frame.webp",
                      },
                      {
                        title: "AI-Assisted Commenting",
                        desc: "Auto-Generate Comments and Build Trust.",
                        img: "AI-Comment.webp",
                      },
                      {
                        title: "AI Response Assistant",
                        desc: "Reply Smarter & Faster to Messages.",
                        img: "AI-Response.webp",
                      },
                      {
                        title: "Templates & Shortcuts",
                        desc: "Speed Up Outreach with 1-Click Templates.",
                        img: "Templates.webp",
                      },
                    ].map((item, i) => (
                      <li key={i}>
                        <img
                          src={`assets/image/mega-menu/products/${item.img}`}
                          alt="icon"
                        />
                        <div>
                          <a href="#">
                            <h4>{item.title}</h4>
                          </a>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="integration-column">
                  <h3>LeadCRM Integration</h3>
                  <ul>
                    <li>
                      <img
                        src="assets/image/mega-menu/products/LeadCRM-Integration.webp"
                        alt="icon"
                      />
                      <div>
                        <a href="#">
                          <h4>CRM Integration</h4>
                        </a>
                        <p>Boost Productivity with Integration.</p>
                      </div>
                    </li>
                  </ul>

                  <h3>Extension</h3>
                  <ul className="extensions">
                    <li>
                      <div className="mega-menu-extention-item">
                        <img
                          src="assets/image/mega-menu/products/chrome-logo.webp"
                          alt="icon"
                        />
                        <div className="title-line">
                          <a href="#">
                            <h3>Chrome</h3>
                          </a>
                          <p>LinkedIn Chrome Extension</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mega-menu-extention-item">
                        <img
                          src="assets/image/mega-menu/products/Firefox_logo.webp"
                          alt="icon"
                        />
                        <div className="title-line">
                          <h3>
                            Firefox <span className="coming">Coming Soon</span>
                          </h3>
                          <p>LinkedIn Firefox Extension</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mega-menu-extention-item">
                        <img
                          src="assets/image/mega-menu/products/Microsoft_Edge_logo.webp"
                          alt="icon"
                        />
                        <div className="title-line">
                          <h3>
                            Edge <span className="coming">Coming Soon</span>
                          </h3>
                          <p>LinkedIn Edge Extension</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Pricing */}
            <li>
              <a href="#">Pricing</a>
            </li>

            {/* Resources Dropdown */}
            <li
              className={`submenu dropdown ${
                openDropdowns.resources ? "open" : ""
              }`}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("resources"); }}>
                Resources <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="submenu-list dropdown-list">
                {[
                  ["blog.webp", "Blogs"],
                  ["api-documentation.webp", "API Documentation"],
                  ["crm-alternative.webp", "LeadCRM Alternatives"],
                  ["crm-integration.webp", "LinkedIn CRM Integration Guide"],
                  ["Bulk-export.webp", "Lead Export Guide"],
                  ["customized.webp", "HubSpot Troubleshooting Guide"],
                  ["faqs.webp", "FAQs"],
                ].map(([img, title], i) => (
                  <li key={i}>
                    <a href="#">
                      <img src={`assets/image/menu/resources/${img}`} alt="" />
                      <h3>{title}</h3>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Company Dropdown */}
            <li
              className={`submenu dropdown ${
                openDropdowns.company ? "open" : ""
              }`}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("company"); }}>
                Company <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="submenu-list dropdown-list">
                {[
                  ["about-us.webp", "About Us"],
                  ["contact.webp", "Contact Us"],
                ].map(([img, title], i) => (
                  <li key={i}>
                    <a href="#">
                      <img src={`assets/image/menu/resources/${img}`} alt="" />
                      <h3>{title}</h3>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
