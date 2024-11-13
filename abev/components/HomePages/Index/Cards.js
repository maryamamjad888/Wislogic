import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "react-bootstrap";
import baseApiUrl from "@/utils/baseApiUrl";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const Cards = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/services?populate=HomePageCards.CardIcon`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  const firstTitles = [
    "Web Design",
    "Web Development",
    "Mobile App Development",
    "Social Media Marketing",
    "Web Hosting",
    "Search Engine Optimization"
  ];

  const firstCards = data.filter(card => firstTitles.includes(card.attributes.HomePageCards.CardTitle));
  
  const remainingCards = data.filter(card => !firstTitles.includes(card.attributes.HomePageCards.CardTitle));

  const sortedData = [...firstCards, ...remainingCards];

  return (
    <div className="Cards-area pt-75 pb-50 bg-f9f9f9">
      <div className="container">
        <div className="headtext width2 mx-auto">
          <p>What We Offer?</p>
        </div>
        <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            Our Best Services
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
          Wis logic is the top web and software development company in Dubai, UAE. Who offers fully customised mobile applications, web applications, as well as digital marketing services in Dubai and all kinds of digital solutions that are customised to lead your business to new heights of success.
          </p>
        </div>
        <div className="card-caro" data-aos="fade-up" data-aos-duration="1200">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={false}
            emulateTouch={true}
            containerClass="card-carousel"
          >
            {sortedData
              .reduce((slides, card, index) => {
                if (index % 6 === 0) {
                  slides.push([]);
                }
                slides[slides.length - 1].push(card);
                return slides;
              }, [])
              .map((slideCards, slideIndex) => (
                <div key={slideIndex} className="card-slide">
                  <Row className="card-container mx-auto">
                    {slideCards.map((card) => (
                      <Col key={card.id} xs={12} md={6} lg={4}>
                        <Link
                          href={`/services/${card.attributes.slug}`}
                          className="card-link"
                        >
                          <Card className="text-center">
                            <CardImg
                              className="mx-auto"
                              variant="top"
                              src={
                                card.attributes.HomePageCards.CardIcon.data
                                  .attributes.url
                              }
                              alt={card.attributes.HomePageCards.CardTitle}
                            />
                            <CardBody>
                              <CardTitle>
                                {card.attributes.HomePageCards.CardTitle}
                              </CardTitle>
                              <CardText className="three-lines">
                                {card.attributes.HomePageCards.CardText}{" "}
                              </CardText>
                              <div className="read-more">
                                <a href="#" className="read-more-link">
                                  Read more &nbsp;
                                  <FaArrowRight />
                                </a>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Cards;
