import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const AboutCompany = () => {
  const [services, setServices] = React.useState();

  React.useEffect(() => {
    const content = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-our-company?populate=*`
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    content();
  }, []);

  if (!services) {
    return
  }

  const { Heading, Description, image } = services.data.attributes;

  return (
    <div className="About-area pt-100 pb-100">
      <div className="container">
        <div className="headtext width">
          <p>About Our Company</p>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text-container">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                {Heading}
              </h1>
              <p data-aos="fade-up" data-aos-duration="1200">
                {Description}
              </p>
            </div>
            <div className="Read More">
              <Link href="/About/AboutUs#our-story" activeClassName="active">
                <a className="btn-epic">
                  <div>
                    <span>Read More</span>
                    <span>Read More</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="image-container"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src={image.data.attributes.url}
                alt={image.data.attributes.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
