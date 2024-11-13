import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Link from "next/link";
import Navbar from "@/components/Layout/Navigations/Navbar";
import DetailsContent from "@/components/Services/DetailsContent";
import FaqDetail from "pages/FAQ/FaqDetail";
import OurWork from "@/components/HomePages/Index/OurWork";
import Portfolio2 from "pages/portfolio/HomePagePortfolio.js";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";

const ServicesDetails = () => {
  const [service, setService] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchService = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services?filters[slug][$eq]=${slug}&populate=*,
        ServiceDetailPageContent.BannerImage,ServiceDetailPageContent.Section1.LeftImage,
        ServiceDetailPageContent.Section1.LeftImage, ServiceDetailPageContent.Section2TopContent,
        ServiceDetailPageContent.Section2.CardIcon,
        ServiceDetailPageContent.Section3.DetailText,
        ServiceDetailPageContent.Section4.DetailText,
        ServiceDetailPageContent.SeoIndustriesText,
        ServiceDetailPageContent.SeoCards.CardIcon,
        ServiceDetailPageContent.SeoCaseStudiesText,
        ServiceDetailPageContent.SeoCaseStudies.Image,
        ServiceDetailPageContent.SocialMediaContent.Image1,ServiceDetailPageContent.SocialMediaContent.Image2,
        ServiceDetailPageContent.CardsSection.Icon,
        ServiceDetailPageContent.CardsSectionTitle,
        ServiceDetailPageContent.TextWithImage.Image,ServiceDetailPageContent.TextWithImage.Image2,
        ServiceDetailPageContent.EmailMarketingProcessHead,
        ServiceDetailPageContent.EmailMarketingProcess.Icon,
        ServiceDetailPageContent.PpcSection.Image,
        ServiceDetailPageContent.CmsHeadText,
        ServiceDetailPageContent.CmsContent.Icon
        `
      );
      setService(response.data.data);
    };

    fetchService();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{service.length > 0 && service[0]?.attributes?.MetaTitle}</title>
        <meta
          name="description"
          content={
            service.length > 0 && service[0]?.attributes?.MetaDescription
          }
        />
      </Helmet>

      <TopNav />
      <Navbar />

      <div
        className="page-title-area"
        style={{
          backgroundImage: `url(${service[0]?.attributes.ServiceDetailPageContent?.BannerImage?.data?.attributes?.url})`,
          height: "250px",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "250px",
            background: "rgba(37, 37, 37, 0.7)",
            zIndex: 1,
          }}
        ></div>
        <div className="container">
          <div className="page-title-content">
            <h1>{service.length > 0 && service[0].attributes.title}</h1>

            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services/services/">
                  <a>Services</a>
                </Link>
              </li>
              <li>{service.length > 0 && service[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      {service.length > 0 && (
        <DetailsContent
          rightText={
            service[0]?.attributes.ServiceDetailPageContent?.Section1?.RightText
          }
          leftImage={
            service[0]?.attributes.ServiceDetailPageContent?.Section1?.LeftImage
              ?.data?.attributes?.url
          }
          buttonTitle={
            service[0]?.attributes.ServiceDetailPageContent?.Section1
              ?.ButtonTitle
          }
          Section2Title={
            service[0]?.attributes.ServiceDetailPageContent?.Section2TopContent
              ?.Title
          }
          Section2Description={
            service[0]?.attributes.ServiceDetailPageContent?.Section2TopContent
              ?.Description
          }
          cards={service[0]?.attributes.ServiceDetailPageContent?.Section2}
          ProcessCards={
            service[0]?.attributes.ServiceDetailPageContent?.CardsSection
          }
          TextWithImage={
            service[0]?.attributes.ServiceDetailPageContent?.TextWithImage
          }
          ProcessCardsTitle={
            service[0]?.attributes.ServiceDetailPageContent?.CardsSectionTitle
          }
          Section3DetailContent={
            service[0]?.attributes.ServiceDetailPageContent?.Section3
              ?.DetailText
          }
          Section4DetailContent={
            service[0]?.attributes.ServiceDetailPageContent?.Section4
              ?.DetailText
          }
          SeoIndustriesText={
            service[0]?.attributes.ServiceDetailPageContent?.SeoIndustriesText
          }
          SeoIndustriesCards={
            service[0]?.attributes.ServiceDetailPageContent?.SeoCards
          }
          SeoCaseText={
            service[0]?.attributes.ServiceDetailPageContent?.SeoCaseStudiesText
          }
          SeoCaseContent={
            service[0]?.attributes.ServiceDetailPageContent?.SeoCaseStudies
          }
          SmmContent={
            service[0]?.attributes.ServiceDetailPageContent?.SocialMediaContent
          }
          EmailMarketingProcessHead={
            service[0]?.attributes.ServiceDetailPageContent
              ?.EmailMarketingProcessHead
          }
          EmailMarketingProcess={
            service[0]?.attributes.ServiceDetailPageContent
              ?.EmailMarketingProcess
          }
          PpcSection={
            service[0]?.attributes.ServiceDetailPageContent?.PpcSection
          }
          CmsTopSection={
            service[0]?.attributes.ServiceDetailPageContent?.CmsHeadText
          }
          CmsMainSection={
            service[0]?.attributes.ServiceDetailPageContent?.CmsContent
          }
        />
      )}
      <FaqDetail />
      <Portfolio2 />
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
