import React, { useState, useEffect } from "react";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

const Workflow = () => {
  const [workflowData, setWorkflowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/how-we-work?populate=Steps.Image`
        );
        setWorkflowData(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="workflow pt-100 pb-75">
      {/* Desktop */}
      <div className="show-desktop">
        <div className="container">
          {workflowData ? (
            <>
              <div className="headtext width3 mx-auto">
                <p>Workflow</p>
              </div>
              <div className="text-container text-center pb-40">
                <h1 data-aos="fade-up" data-aos-duration="1200">
                  {workflowData.Title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="w-80 mx-auto"
                >
                  {workflowData.Description}
                </p>
              </div>

              <div className="row steps">
                {workflowData.Steps &&
                  workflowData.Steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="col-3 step d-flex justify-content-center align-items-center text-center"
                    >
                      {index % 2 === 0 && step.Image && (
                        <div
                          className="stepLine"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          <div className="stepImg">
                            <img
                              src={step.Image.data.attributes.url}
                              alt={`Image for ${step.Title}`}
                            />
                          </div>
                        </div>
                      )}

                      <div
                        className={`content text-center ${
                          index % 4 === 0 || index % 4 === 2 ? "mt-40" : ""
                        }${index % 4 === 1 || index % 4 === 3 ? "mb-40" : ""}`}
                      >
                        <h3 className="step-number">
                          Step {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </h3>
                        <h5>{step.Title}</h5>
                        <p>{step.Description}</p>
                      </div>
                      {index % 2 !== 0 && step.Image && (
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1200"
                          className={`stepLine2 ${index === 1 ? "first" : ""}`}
                        >
                          <div className="stepImg">
                            <img
                              src={step.Image.data.attributes.url}
                              alt={`Image for ${step.Title}`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      {/* mobile */}
      <div className="show-mobile">
        <div className="container">
          {workflowData ? (
            <>
              <div className="headtext width3 mx-auto">
                <p>Workflow</p>
              </div>
              <div className="text-container text-center pb-20">
                <h1 data-aos="fade-up" data-aos-duration="1200">
                  {workflowData.Title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="w-80 mx-auto"
                >
                  {workflowData.Description}
                </p>
              </div>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                emulateTouch={true}
              >
                {workflowData.Steps &&
                  workflowData.Steps.map((step, index) => (
                    <div key={step.id}>
                      <div
                        className="col-12 step d-flex justify-content-center align-items-center text-center"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <div>
                          <div className="stepImg">
                            <img
                              src={step.Image.data.attributes.url}
                              alt={`Image for ${step.Title}`}
                            />
                          </div>
                        </div>

                        <div className="step-detail">
                          <h3 className="step-number">
                            Step {index + 1 < 10 ? `0${index + 1}` : index + 1}
                          </h3>
                          <h5>{step.Title}</h5>
                          <p>{step.Description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
