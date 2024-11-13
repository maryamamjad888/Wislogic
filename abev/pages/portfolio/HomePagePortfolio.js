import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PortfolioStyle2 = () => {
  const [portfolios, setPortfolios] = React.useState();
  React.useEffect(() => {
    const getPortfolios = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/portfolios?populate=*`
      );
      setPortfolios(response.data);
    };
    getPortfolios();
  }, []);

 
  return (
    <>
      {portfolios && (
        <div className="case-studies-area ptb-75 bg-f9f9f9">
          <div className="container">
            <div className="headtext width4 mx-auto">
              <p>Our Portfolio</p>
            </div>
            <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                A Sneak Peek at Our Work
              </h1>
              <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
                Our design & development services start and ends with a best in-class experience approach that builds business.
              </p>
            </div>
            <div className="row">
              {portfolios.data.map((portfolio) => (
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  key={portfolio.id}
                >
                  <div className="single-case-studies-box">
                    <Link href={`/portfolio/${portfolio.attributes.slug}`}>
                      <a className="d-block image">
                        <div className="overlay-new"></div> 
                        <img
                          src={portfolio.attributes.image.data.attributes.url}
                          alt={portfolio.attributes.image.data.attributes.name}
                        />
                        <div className="por-content">
                          <h3>
                            <Link href={`/portfolio/${portfolio.attributes.slug}`}>
                              <a>{portfolio.attributes.title}</a>
                            </Link>
                          </h3>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioStyle2;
