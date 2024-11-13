import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Link from "next/link";

const Leadership = () => {
  const [OurServices, setOurServices] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-us?populate=HomePageTeam.Pictures.Image`
        );
        setOurServices(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!OurServices) {
    return;
  }

  return (
    <div className="DesignerDesign pt-75 pb-75">
      {OurServices && (
        <div>
          <div className="container">
            <div className="headtext width3 mx-auto">
              <p>Our Team</p>
            </div>
            <div id="leadership" className="sec2 sec1 row mt-20 pb-75">
              <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
                <h1 data-aos="fade-up" data-aos-duration="1200">
                  {OurServices.HomePageTeam.Title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className=" w-80"
                >
                  {OurServices.HomePageTeam.Description}
                </p>
              </div>

              {OurServices.HomePageTeam.Pictures.map((image, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-12 mt-20 position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Link href={image.linkedln} target="_blank">
                    <div className="lead">
                      <img
                        src={image.Image.data.attributes.url}
                        alt={image.Image.data.attributes.name}
                      />
                      <div className="overlay"></div>
                      <div className="detail d-flex">
                        <div className="Team-Detail">
                          <h5>{image.Name}</h5>
                          <p>{image.Title}</p>
                        </div>
                        <div className="Social-detail">
                          <Link href={image.linkedln} target="_blank">
                            <i className="flaticon-linkedin" alt="linkedln"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leadership;
