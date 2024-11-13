import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Link from "next/link";
const ContactInfo = () => {
  const [contactInfo, setContactInfo] = React.useState();
  React.useEffect(() => {
    const getContactInfo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/contact-info?populate=BannerImg`
      );
      setContactInfo(response.data);
    };
    getContactInfo();
  }, []);

  return (
    <>
      {contactInfo && (
        <div className="contact-info-area">
          <div
            className="page-title-area"
            style={{
              backgroundImage: contactInfo
                ? `url(${contactInfo.data.attributes.BannerImg.data.attributes.url})`
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
                <h1>
                {contactInfo.data.attributes.Title}
                </h1>
                <p className="w-80">{contactInfo.data.attributes.Description}</p>
                <div className="ButtonBottom">
                  <Link href="">
                    <a className="btn-epicc mt-20">
                      <div>
                        <span>{contactInfo.data.attributes.ButtonTitle}</span>
                        <span>{contactInfo.data.attributes.ButtonTitle}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-f1f5fd">
            <div className="contact-info-inner">
              <div className="row justify-content-center">
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
