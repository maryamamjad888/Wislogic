import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import baseApiUrl from "@/utils/baseApiUrl";

const OurWork = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);
  const [ourWork, setourWork] = React.useState();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/project?populate=BannerImg`);
        setourWork(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderCards = () => {
    return cards.map((card) => (
      <div className="col-lg-4 col-md-6 col-12" key={card.id}>
        <Card>
          <CardImg src={card.Image.data.attributes.url} alt={card.Title} />
          <CardBody>
            <CardText>{card.Type}</CardText>
            <CardTitle>{card.Title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <div className="ourWork">
         {ourWork && (
        <div
          className="page-title-area"
          style={{
            backgroundImage: ourWork
              ? `url(${ourWork.BannerImg.data.attributes.url})`
              : "none",
            height: "500px",
            width: "100%",
            position: "relative",
            backgroundSize:"cover",
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
              <h1>
              {ourWork.Title}
              </h1>
              <p className="w-80">{ourWork.Description}</p>
              <div className="ButtonBottom">
                <Link href="/contact">
                  <a className="btn-epic mt-20">
                    <div>
                      <span>{ourWork.ButtonTitle}</span>
                      <span>{ourWork.ButtonTitle}</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
       
      )}
      <div className="showcase pt-75 pb-50 bg-f9f9f9">
      <div className="container">
        <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
            {description}
          </p>
        </div>
        <div className="work-caro portfolio-widget"><div className="row">{renderCards()}</div></div>
      </div>
    </div>
    </div>
    
  );
};

export default OurWork;
