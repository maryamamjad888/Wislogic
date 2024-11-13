import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import Cards from "@/components/HomePages/Index/Cards";
import FaqDetail from "pages/FAQ/FaqDetail";
import Testimonials from "@/components/HomePages/Index/Testimonials";
import Partners from "@/components/Common/Partners";
import FooterOne from "@/components/Layout/Footer/Footer";
import WhatWeDo from "@/components/Services/WhatWeDo";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

export default function Services() {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/what-we-do?populate=*`
        );
        setMetaData(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    getMetaInfo();
  }, []);
  return (
    <>
      <Helmet>
        <title>{metaData && metaData.MetaTitle}</title>
        <meta name="description" content={metaData && metaData.MetaDescription}/>
      </Helmet>
      <TopNav />
      <Navbar />
      <WhatWeDo />
      <Cards />
      <FaqDetail />
      <Testimonials />
      <Partners />
      <FooterOne />
    </>
  );
}
