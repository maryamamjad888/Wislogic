import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Navbar from "@/components/Layout/Navigations/Navbar";
import TopNav from "@/components/Layout/Navigations/TopNav";
import FooterOne from "@/components/Layout/Footer/Footer";
import CareerContent from "pages/Career/CareerContent";
import OurCareerDetail from "./CareerDetail";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

const Career = () => {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/career?populate=*`);
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
        <meta
          name="description"
          content={metaData && metaData.MetaDescription}
        />
      </Helmet>
      <TopNav />
      <Navbar />
      <CareerContent />
      <OurCareerDetail />
      <FooterOne />
    </>
  );
};

export default Career;
