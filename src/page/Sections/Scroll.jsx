import React from "react";

// Array of slide objects
const slides = [
  {
    img: "assets/image/slide-section/feature-leadcrm-1.webp",
    text: "One click push to CRM",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-2.webp",
    text: "Custom Field Mapping",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-3.webp",
    text: "Instant Email Finder",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-4.webp",
    text: "Advanced Waterfall Enrichment",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-5.webp",
    text: "Seamless Deal Management",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-6.webp",
    text: "Access to 700M+ Contacts",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-7.webp",
    text: "Advanced AI Productivity",
  },
  {
    img: "assets/image/slide-section/feature-leadcrm-8.webp",
    text: "Bulk Export & Enrich",
  },
  {
    img: "assets/image/slide-section/Supports-9-Global-Languages.png",
    text: "Supports 9 Global Languages",
  },
];

const Scroll = () => {

  
  const allSlides = [...slides, ...slides];

  return (
    <section>
      <div className="slider-wrapper">
        <div className="slider-track">
          {allSlides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={typeof slide.text === "string" ? slide.text : "Slide"} />
              <div className="slide-text">{slide.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroll;
