import React from "react";
import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import Banner from "@/components/HomePages/App/Banner";
import PartnerStyle2 from "@/components/Partners/PartnerStyle2";
import Overview from "@/components/HomePages/App/Overview";
import Features from "@/components/HomePages/App/Features";
import TestimonialOne from "@/components/HomePages/Index/Testimonials";
import Pricing from "@/components/HomePages/App/Pricing";
import Faq from "@/components/HomePages/App/Faq";
import FooterOne from "@/components/Layout/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar3 />
      <Banner />
      <PartnerStyle2 />
      <Overview />
      <Features />
      <TestimonialOne />
      <Pricing />
      <Faq />
      <FooterOne />
    </>
  );
};

export default App;
