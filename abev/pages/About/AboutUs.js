import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Navbar from "@/components/Layout/Navigations/Navbar";
import TopNav from "@/components/Layout/Navigations/TopNav";
import AboutPageContent from "pages/About/AboutPageContent.js";
import AboutPageDetail from "pages/About/AboutPageDetail";
import Leadership from "pages/About/Leadership";
import Team from "pages/About/OurTeam";
import Stats from "pages/About/Stats";
import Partners from "@/components/Common/Partners";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

const Contact = () => {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-us?populate=*`
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
        <meta name="description" content={metaData && metaData.MetaDescription} />
      </Helmet>
      <TopNav />
      <Navbar />
      <AboutPageContent />
      <AboutPageDetail />
      <Leadership/>
      <Team/>
      <Stats/>
      <Partners/>
     
      <FooterOne />
    </>
  );
};

export default Contact;
