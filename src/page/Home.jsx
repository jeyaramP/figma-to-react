import React from "react";
import Hero from "./Sections/Hero";
import Scroll from "./Sections/Scroll";
import CrmDiffrent from "./Sections/CrmDiffrent";
import HowItWorks from "./Sections/HowItWorks";
import Header from "./Common/Header";
import SalesSolutions from "./Sections/SalesSolutions";
import Testimonial from "./Sections/Testimonial";
import FlowChart from "./Sections/FlowChart";
import LinkedIn from "./Sections/LinkedIn";
import Faq from "./Sections/Faq";
import Footer from "./Common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Scroll />
      <CrmDiffrent />
      <HowItWorks />
      <SalesSolutions />
      <Testimonial />
      <FlowChart />
      <LinkedIn />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
