import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import baseApiUrl from "@/utils/baseApiUrl";

const FaqDetail = () => {
  const [faqData, setFaqData] = useState(null);
  const [clickedQaId, setClickedQaId] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/faq?populate=*`);
        setFaqData(response.data.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    fetchFaqData();
  }, []);

  const handleClick = (qaId) => {
    if (Event.target !== Event.currentTarget) {
      setClickedQaId((prevClickedQaId) =>
        prevClickedQaId === qaId ? null : qaId
      );
    }
  };

  const toggleAnswer = (qaId) => {
    setFaqData((prevFaqData) => {
      const updatedFaqData = {
        ...prevFaqData,
        attributes: {
          ...prevFaqData.attributes,
          QuestionAnswers: prevFaqData.attributes.QuestionAnswers.map(
            (item) => {
              if (item.id === qaId) {
                return {
                  ...item,
                  showAnswer: !item.showAnswer,
                };
              }
              return item;
            }
          ),
        },
      };
      return updatedFaqData;
    });
  };

  return (
    <div className="faq-area-detail ptb-75 sec1">
      {faqData && (
        <div className="container">
          <div className="headtext width7 mx-auto">
            <p>FAQ</p>
          </div>
          <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
            <h1>{faqData.attributes.Title}</h1>
            <p>{faqData.attributes.Description2}</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq-list">
                {faqData.attributes.QuestionAnswers.map((qa) => (
                  <div className="faq-item" key={qa.id} data-qa-id={qa.id}>
                    <div
                      className={`question topdiv d-flex justify-content-between ${
                        qa.showAnswer ? "pink-background" : ""
                      }`}
                      onClick={() => handleClick(qa.id)}
                    >
                      <p className="quest">{qa.Question}</p>
                      <button
                        className="toggle-answer"
                        onClick={() => {
                          toggleAnswer(qa.id);
                          handleClick(qa.id);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={qa.showAnswer ? faChevronUp : faChevronDown}
                        />
                      </button>
                    </div>
                    {qa.showAnswer && <p className="answer">{qa.Answer}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-6">
              <div className="Faq-image show-desktop">
                <img
                  src={faqData.attributes.FaqImage.data.attributes.url}
                  alt={faqData.attributes.FaqImage.data.attributes.name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqDetail;
