import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FAQS = () => {
  const [faqData, setfaqData] = useState(null);

  useEffect(() => {
    const fetchfaqData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/faq?populate=*`
        );
        setfaqData(response.data.data);
      } catch (error) {
        console.error("Error fetching What We Do data:", error);
      }
    };
    fetchfaqData();
  }, []);

  return (
    <div className="faq-area">
      {faqData && (
        <div
          className="page-title-area"
          style={{
            backgroundImage: faqData
              ? `url(${faqData.attributes.BannerImg.data.attributes.url})`
              : "none",
            height: "500px",
            width: "100%",
            position: "relative",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "500px",
              background: "rgba(37, 37, 37, 0.6)",
              zIndex: 1,
            }}
          ></div>
          <div className="container">
            <div
              className="what-text-container d-flex flex-column align-items-center justify-content-center"
              style={{ position: "relative", zIndex: 2 }}
            >
              <h1 className="text-center">
               {faqData.attributes.Title}
              </h1>
              <p className="w-80">{faqData.attributes.Description}</p>
              <div className="ButtonBottom">
                <Link href="/contact">
                  <a className="btn-epicc mt-20">
                    <div>
                      <span>Contact Us</span>
                      <span>Contact Us</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQS;
