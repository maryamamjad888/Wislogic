import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const Team = () => {
  const [OurServices, setOurServices] = React.useState();
 const router = useRouter();
  if (router.asPath.includes("#")) {
    const id = router.asPath.split("#")[1];
    scrollToSection(id);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-us?populate=OurTeam.TeamImages.Image`
        );
        setOurServices(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    if (window.location.hash) {
      console.log("Hash detected in URL:", window.location.hash);
      const element = document.getElementById(window.location.hash.substr(1));
      console.log("Element:", element);
      if (element) {
        console.log("Scrolling to element...");
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Element not found!");
      }
    }
  }, []);

  if (!OurServices) {
    return;
  }

  return (
    <div className="About-us pt-75">
      {OurServices && (
        <div>
          <div className="container">
            <div id="our-team" className="OurTeam row">
              <h1 className="text-center">{OurServices.OurTeam.Title}</h1>
              <p className="text-center">{OurServices.OurTeam.Description}</p>
              {OurServices.OurTeam.TeamImages.map((image2, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-6 mt-40"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="Team">
                    <img
                      src={image2.Image.data.attributes.url}
                      alt={image2.Name}
                    />
                    <div className="name-bio text-center">
                      <h5>{image2.Name}</h5>
                      <p>{image2.Bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
