import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Navbar from "@/components/Layout/Navigations/Navbar";
import TopNav from "@/components/Layout/Navigations/TopNav";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

const Contact = () => {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/contact-info?populate=*`
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
      <ContactInfo />
      <ContactForm />
      <FooterOne />
    </>
  );
};

export default Contact;
