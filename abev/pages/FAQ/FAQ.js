import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Faqs from "pages/FAQ/FaqContent";
import FaqDetail from "pages/FAQ/FaqDetail";
import FooterOne from "@/components/Layout/Footer/Footer";

const FAQ = () => {
  
  return (
    <>
      <TopNav />
      <Navbar />
      <Faqs/>
      <FaqDetail/>
      <FooterOne />
    </>
  );
};

export default FAQ;
