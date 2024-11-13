import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutUs = () => {
  const [OurServices, setOurServices] = React.useState();
  const [StatisticData, setStatisticData] = React.useState();
  

  const router = useRouter();
  if (router.asPath.includes("#")) {
    const id = router.asPath.split("#")[1];
    scrollToSection(id);
  }
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-us?populate=OurStory.Image,CEO.Image,ChooseWislogic.Image,WorldClassDesigners.Images.Image,OurTeam.TeamImages.Image`
        );
        setOurServices(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchStatisticData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/statistic?populate=Stats.IconImg`
        );
        setStatisticData(response.data.data);
      } catch (error) {
        console.error("Error fetching Statistic data:", error);
      }
    };

    fetchData();
    fetchStatisticData();
  }, []);

  if (!OurServices) {
    return;
  }

  return (
    <div className="About-us pt-75">
      {OurServices && (
        <div>
          <div className="container">
            <div className="row sec1 pb-75" id="our-story">
              <div
                className="col-lg-6 col-12 show-desktop"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src={OurServices.OurStory.Image.data.attributes.url}
                  alt={OurServices.OurStory.Image.data.attributes.name}
                />
              </div>
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>{OurServices.OurStory.Title}</h1>
                {OurServices.OurStory.Description.map((content, index) => {
                  if (content.type === "paragraph") {
                    return <p key={index}>{content.children[0].text}</p>;
                  } else {
                    return null;
                  }
                })}

                <div className="ButtonBottom">
                  <Link href="/contact">
                    <a className="btn-epicc mt-20">
                      <div>
                        <span>{OurServices.OurStory.ButtonTitle}</span>
                        <span>{OurServices.OurStory.ButtonTitle}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row sec2 sec1 pb-75 mt-20">
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>{OurServices.CEO.Title}</h1>
                {OurServices.CEO.Description.map((content, index) => {
                  if (content.type === "paragraph") {
                    return <p key={index}>{content.children[0].text}</p>;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src={OurServices.CEO.Image.data.attributes.url}
                  alt={OurServices.CEO.Image.data.attributes.name}
                />
              </div>
            </div>
            <div className="row sec2 sec1 pb-75 mt-20">
              <h1 className="text-center">
                {OurServices.ChooseWislogic.Title}
              </h1>
              <div
                className="col-lg-6 col-12 mt-20"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {OurServices.ChooseWislogic.Description.map(
                  (content, index) => {
                    if (content.type === "paragraph") {
                      return <p key={index}>{content.children[0].text}</p>;
                    } else {
                      return null;
                    }
                  }
                )}
              </div>
              <div
                className="col-lg-6 col-12 mt-20 sec3"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src={OurServices.ChooseWislogic.Image.data.attributes.url}
                  alt={OurServices.ChooseWislogic.Image.data.attributes.name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
