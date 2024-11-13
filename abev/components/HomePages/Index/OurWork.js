import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import baseApiUrl from "@/utils/baseApiUrl";
import { Carousel } from "react-responsive-carousel";

const OurWork = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/best-work-showcase?populate=Cards.Image`
        );

        const { Title, Description, Cards } = response.data.data.attributes;

        setTitle(Title);
        setDescription(Description);
        setCards(Cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderCards = () => {
    const rows = [];
    const cardsPerRowDesktop = 3;

    for (let i = 0; i < cards.length; i += cardsPerRowDesktop) {
      const rowCards = cards.slice(i, i + cardsPerRowDesktop);

      rows.push(
        <div className="row" key={i}>
          {rowCards.map((card) => (
            <div className="col-lg-4 col-md-6 col-12" key={card.id}>
              <Card>
                <CardImg
                  src={card.Image.data.attributes.url}
                  alt={card.Title}
                />
                <CardBody>
                  <CardText>{card.Type}</CardText>
                  <CardTitle>{card.Title}</CardTitle>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };
  const renderMobileCards = () => {
    const rows = [];
    const cardsPerRowMob = 1;

    for (let i = 0; i < cards.length; i += cardsPerRowMob) {
      const rowCards = cards.slice(i, i + cardsPerRowMob);

      rows.push(
        <div className="row" key={i}>
          {rowCards.map((card) => (
            <div className="col-12" key={card.id}>
              <Card>
                <CardImg
                  src={card.Image.data.attributes.url}
                  alt={card.Title}
                />
                <CardBody>
                  <CardText>{card.Type}</CardText>
                  <CardTitle>{card.Title}</CardTitle>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="showcase pt-75 pb-50 bg-f9f9f9">
      <div className="container">
        <div className="headtext width4 mx-auto">
          <p>Our Portfolio</p>
        </div>
        <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
            {description}
          </p>
        </div>
        {/* Desktop */}
        <div
          className="show-desktop work-caro"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={false}
            emulateTouch={true}
          >
            {renderCards()}
          </Carousel>
        </div>
        {/* Mobile */}
        <div
          className="show-mobile work-caro"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            emulateTouch={true}
          >
            {renderMobileCards()}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
