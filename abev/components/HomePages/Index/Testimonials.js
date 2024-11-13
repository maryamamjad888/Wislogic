import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import testimonial from "@/public/images/testimonial.jpg";
import Image from "next/image";
import quotes from "@/public/images/chatbox.svg";
import next from "@/public/images/next.svg";
import prev from "@/public/images/prev.svg";
import award from "@/public/images/award.svg";

const TestimonialOne = () => {
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-1?populate=feedbacks.image`
      );
      setTestimonials(response.data);
    };
    getTestimonials();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const lastIndex = testimonials.data.attributes.feedbacks.length - 1;
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  const handleNextClick = () => {
    const lastIndex = testimonials.data.attributes.feedbacks.length - 1;
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };
  return (
    <>
      {testimonials && (
        <div className="testimonials-area pt-75 pb-75 bg-f9f9f9">
          <div className="show-desktop">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="headtext width6 mx-auto">
                    <p>Testimonials</p>
                  </div>
                  <div className="text-container text-center">
                    <h1 data-aos="fade-up" data-aos-duration="1200">
                      {testimonials.data.attributes.Title}
                    </h1>
                  </div>

                  <div
                    className="testimonials-slides"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showThumbs={false}
                      autoPlay={false}
                      emulateTouch={true}
                      showIndicators={false}
                      selectedItem={currentIndex}
                    >
                      {testimonials.data.attributes.feedbacks.map(
                        (feedback) => (
                          <div
                            className="single-testimonials-item"
                            key={feedback.id}
                          >
                            <div className="speech-bubble">
                              <div className="quotes position-absolute">
                                <Image src={quotes} />
                              </div>

                              <p>{feedback.feedbackText}</p>
                            </div>
                            <div className="client-info d-flex justify-content-start">
                              <img
                                src={feedback.image.data.attributes.url}
                                alt={
                                  feedback.image.data.attributes.alternativeText
                                }
                              />
                              <div className="info d-flex flex-column align-items-start">
                                <h5>{feedback.name}</h5>
                                <p>{feedback.designation}</p>
                              </div>
                              <div className="custom-buttons-bottom">
                                <button
                                  type="button"
                                  className="custom-prev-button"
                                  onClick={handlePrevClick}
                                >
                                  <Image src={prev} alt={next} />
                                </button>
                                <button
                                  type="button"
                                  className="custom-next-button"
                                  onClick={handleNextClick}
                                >
                                  <Image src={next} alt={prev} />
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </Carousel>
                  </div>
                </div>
                <div
                  className="img-con col-lg-6 col-md-12 col-12"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="client d-flex">
                    <Image src={award} width={60} height={60} />
                    <p>
                      90.0% <br />
                      Clients Satisfy
                    </p>
                  </div>
                  <div className="img-container">
                    <Image
                      src={testimonial}
                      alt="Wislogic-testimonials-90%-slients-satisfy"
                      width={490}
                      height={490}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="show-mobile">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="headtext width6 mx-auto">
                    <p>Testimonials</p>
                  </div>
                  <div className="text-container text-center">
                    <h1 data-aos="fade-up" data-aos-duration="1200">
                      {testimonials.data.attributes.Title}
                    </h1>
                  </div>

                  <div
                    className="testimonials-slides"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showThumbs={false}
                      autoPlay={false}
                      emulateTouch={true}
                      showIndicators={false}
                      selectedItem={currentIndex}
                    >
                      {testimonials.data.attributes.feedbacks.map(
                        (feedback) => (
                          <div
                            className="single-testimonials-item"
                            key={feedback.id}
                          >
                            <div className="speech-bubble">
                              <div className="quotes position-absolute">
                                <Image src={quotes} />
                              </div>

                              <p>{feedback.feedbackText}</p>
                            </div>
                            <div className="client-info d-flex justify-content-center">
                              <img
                                src={feedback.image.data.attributes.url}
                                alt={
                                  feedback.image.data.attributes.alternativeText
                                }
                              />
                              <div className="info d-flex flex-column align-items-start">
                                <h5>{feedback.name}</h5>
                                <p>{feedback.designation}</p>
                              </div>
                            </div>
                            <div className="custom-buttons-bottom d-flex justify-content-center">
                              <button
                                type="button"
                                className="custom-prev-button"
                                onClick={handlePrevClick}
                              >
                                <Image src={prev} alt={next} />
                              </button>
                              <button
                                type="button"
                                className="custom-next-button"
                                onClick={handleNextClick}
                              >
                                <Image src={next} alt={prev} />
                              </button>
                            </div>
                          </div>
                        )
                      )}
                    </Carousel>
                  </div>
                </div>
                <div
                  className="img-con col-lg-6 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="client d-flex">
                    <Image src={award} width={60} height={60} />
                    <p>
                      90.0% <br />
                      Clients Satisfy
                    </p>
                  </div>
                  <div className="img-container">
                    <Image
                      src={testimonial}
                      alt="testimonial"
                      width={490}
                      height={490}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialOne;
