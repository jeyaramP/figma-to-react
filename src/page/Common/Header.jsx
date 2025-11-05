 import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  // Product Features
  const features = [
    {
      img: "add-connection.webp",
      title: "Lead Finder",
      desc: "Professional Profiles Instantly.",
    },
    {
      img: "my-team-e1743507016397.webp",
      title: "Teammate",
      desc: "Empower. Collaborate. Grow. Win.",
    },
    {
      img: "one-click-deal-e1743507028596.webp",
      title: "Deal Management",
      desc: "Streamline Your Deal Management.",
    },
    {
      img: "data-enrichment-tool.webp",
      title: "Waterfall Data Enrichment",
      desc: "Transform Data. Drive Sales Success.",
    },
    {
      img: "Bulk-export.webp",
      title: "Bulk Export & Enrich",
      desc: "Export LinkedIn Leads & Auto-Enrich.",
    },
    {
      img: "CRM-Date-sync.webp",
      title: "CRM Data Sync",
      desc: "Sync LinkedIn Contacts Directly.",
    },
    {
      img: "Frame.webp",
      title: "CRM Data Overlay",
      desc: "Instant LinkedIn Intel Overlaid on Your CRM.",
    },
    {
      img: "AI-Comment.webp",
      title: "AI-Assisted Commenting",
      desc: "Auto-Generate Comments and Build Trust.",
    },
    {
      img: "AI-Response.webp",
      title: "AI Response Assistant",
      desc: "Reply Smarter & Faster to Messages.",
    },
    {
      img: "Templates.webp",
      title: "Templates & Shortcuts",
      desc: "Speed Up Outreach with 1-Click Templates.",
    },
  ];

  // Resources Submenu
  const resources = [
    { img: "blog.webp", title: "Blogs" },
    { img: "api-documentation.webp", title: "API Documentation" },
    { img: "crm-alternative.webp", title: "LeadCRM Alternatives" },
    { img: "crm-integration.webp", title: "LinkedIn CRM Integration Guide" },
    { img: "Bulk-export.webp", title: "Lead Export Guide" },
    { img: "customized.webp", title: "HubSpot Troubleshooting Guide" },
    { img: "faqs.webp", title: "FAQs" },
  ];

  // Company Submenu
  const company = [
    { img: "about-us.webp", title: "About Us" },
    { img: "contact.webp", title: "Contact Us" },
  ];

  // Extensions
  const extensions = [
    {
      img: "chrome-logo.webp",
      title: "Chrome",
      desc: "LinkedIn Chrome Extension",
    },
    {
      img: "Firefox_logo.webp",
      title: "Firefox",
      desc: "LinkedIn Firefox Extension",
      coming: true,
    },
    {
      img: "Microsoft_Edge_logo.webp",
      title: "Edge",
      desc: "LinkedIn Edge Extension",
      coming: true,
    },
  ];

  // === Sticky Header on Scroll ===
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="desktop-header">
        <div className="navbar">
          <div className="container">
            <div className="main-menu">
              {/* Logo */}
              <div className="logo">
                <img width="200" src="assets/image/LeadCRM.webp" alt="LeadCRM" />
              </div>

              {/* Menu List */}
              <div className="menu-list">
                <ul>
                  {/* Product Mega Menu */}
                  <li className="mega-main-menu">
                    <a href="#">
                      Product <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <div className="mega-menu-box">
                      {/* Left Column */}
                      <div className="ln-extension">
                        <div className="ln-extension-content">
                          <h3>LinkedIn Extension</h3>
                          <p>
                            Easily manage your network, organize leads, and
                            integrate seamlessly with your CRM for efficient
                            follow-ups and enhanced sales workflows. Take control
                            of your LinkedIn outreach like never before!
                          </p>
                        </div>
                        <img
                          src="assets/image/mega-menu/products/extension-leadcrm-menu.webp"
                          alt="LeadCRM Extension"
                        />
                      </div>

                      {/* Features Column */}
                      <div className="features-column">
                        <h3>Features</h3>
                        <ul>
                          {features.map((f, i) => (
                            <li key={i}>
                              <img
                                src={`assets/image/mega-menu/products/${f.img}`}
                                alt={f.title}
                              />
                              <div>
                                <a href="#">
                                  <h4>{f.title}</h4>
                                </a>
                                <p>{f.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Integration Column */}
                      <div className="integration-column">
                        <h3>LeadCRM Integration</h3>
                        <ul>
                          <li>
                            <img
                              src="assets/image/mega-menu/products/LeadCRM-Integration.webp"
                              alt="CRM Integration"
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
                          {extensions.map((ex, i) => (
                            <li key={i}>
                              <div className="mega-menu-extention-item">
                                <img
                                  src={`assets/image/mega-menu/products/${ex.img}`}
                                  alt={ex.title}
                                />
                                <div className="title-line">
                                  <h3>
                                    {ex.title}{" "}
                                    {ex.coming && (
                                      <span className="coming">Coming Soon</span>
                                    )}
                                  </h3>
                                  <p>{ex.desc}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Pricing */}
                  <li>
                    <a href="#">Pricing</a>
                  </li>

                  {/* Resources */}
                  <li className="submenu">
                    <a href="#">
                      Resources <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul className="submenu-list">
                      {resources.map((r, i) => (
                        <li key={i}>
                          <a href="#">
                            <img
                              src={`assets/image/menu/resources/${r.img}`}
                              alt={r.title}
                            />
                            <h3>{r.title}</h3>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Company */}
                  <li className="submenu">
                    <a href="#">
                      Company <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul className="submenu-list">
                      {company.map((c, i) => (
                        <li key={i}>
                          <a href="#">
                            <img
                              src={`assets/image/menu/resources/${c.img}`}
                              alt={c.title}
                            />
                            <h3>{c.title}</h3>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Right Buttons */}
              <div className="menu-btn">
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
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default Header;
