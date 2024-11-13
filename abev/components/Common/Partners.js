import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Partners = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const content = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/people-who-trust-us?populate=Partners.Image`
        );
        const { Title, Description, Partners } = response.data.data.attributes;
        setTitle(Title);
        setDescription(Description);
        setImages(Partners);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    content();
  }, []);

  return (
    <div className="partners-area pt-100 pb-100">
      <div className="container">
        <div className="headtext width5 mx-auto">
          <p>Partners</p>
        </div>
        <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
            {description}
          </p>
        </div>
        {/* desktop */}
        <div className="show-desktop partners-images-container">
          <div
            className="partner-grid"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {images.map((partner) => (
              <div key={partner.id} className="partner-image">
                <img
                  src={
                    partner.Image &&
                    partner.Image.data &&
                    partner.Image.data.attributes &&
                    partner.Image.data.attributes.formats &&
                    partner.Image.data.attributes.formats.thumbnail &&
                    partner.Image.data.attributes.formats.thumbnail.url
                      ? partner.Image.data.attributes.formats.thumbnail.url
                      : partner.Image.data.attributes.url
                  }
                  alt={partner.Name}
                />
              </div>
            ))}
          </div>
        </div>
        {/* mobile */}
        <div className="show-mobile partners-images-container">
  <div
    className="row partner-slide d-flex"
    data-aos="fade-up"
    data-aos-duration="1200"
    style={{ overflow: "hidden" }}
  >
    <div className="partner-images-scroll">
      {images.map((partner) => (
        <div key={partner.id} className="partner-image col-6">
          <img
            src={
              partner.Image &&
              partner.Image.data &&
              partner.Image.data.attributes &&
              partner.Image.data.attributes.formats &&
              partner.Image.data.attributes.formats.thumbnail &&
              partner.Image.data.attributes.formats.thumbnail.url
                ? partner.Image.data.attributes.formats.thumbnail.url
                : partner.Image.data.attributes.url
            }
            alt={partner.Name}
          />
        </div>
      ))}
    </div>
  </div>
</div>




      </div>
    </div>
  );
};

export default Partners;
