import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import FloatingWhtsappIcon from "@/components/FloatingWhtsapp";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import Banner from "@/components/HomePages/Index/Banner";
import AboutCompany from "@/components/HomePages/Index/AboutCompany";
import Cards from "@/components/HomePages/Index/Cards";
import Workflow from "@/components/HomePages/Index/Workflow";
import Portfolio2 from "./portfolio/HomePagePortfolio";
import Testimonials from "@/components/HomePages/Index/Testimonials";
import Team from "@/components/HomePages/Index/Team";
import Stats from "pages/About/Stats";
import Partners from "@/components/Common/Partners";
import Blogs from "@/components/HomePages/Index/Blogs";
import Footer from "@/components/Layout/Footer/Footer";
import Newsletter from "@/components/Newsletter";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

export default function Home() {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/home-page-meta-detail?&populate=*`
        );
        console.log("response", response);
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
      <Banner />
      <Newsletter />
      <FloatingWhtsappIcon />
      <AboutCompany />
      <Cards />
      <Workflow />
      <Stats />
      <Team />
      <Portfolio2 />
      <Partners />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}
