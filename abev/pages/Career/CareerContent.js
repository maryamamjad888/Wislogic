import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurCareers = () => {
  const [ourCareer, setOurCareer] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/career?populate=*`);
        setOurCareer(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!ourCareer) {
    return;
  }

  return (
    <div className="Career-area">
      {ourCareer && (
        <div
          className="page-title-area"
          style={{
            backgroundImage: ourCareer
              ? `url(${ourCareer.BannerImg.data.attributes.url})`
              : "none",
            height: "500px",
            width: "100%",
            position: "relative",
            backgroundSize: "cover",
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
              <h1>{ourCareer.Title}</h1>
              <p className="w-80">{ourCareer.Description}</p>
              <div className="ButtonBottom">
                <Link href="/contact/">
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

export default OurCareers;
