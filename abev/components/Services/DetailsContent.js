import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/images/bitcoin-icons--export-filled.svg";
import google from "@/public/images/google.svg";
import { Card } from "react-bootstrap";

const DetailsContent = ({
  rightText,
  leftImage,
  buttonTitle,
  Section2Title,
  Section2Description,
  cards,
  Section3DetailContent,
  Section4DetailContent,
  SeoIndustriesText,
  SeoIndustriesCards,
  SeoCaseText,
  SeoCaseContent,
  SmmContent,
  ProcessCards,
  ProcessCardsTitle,
  TextWithImage,
  EmailMarketingProcessHead,
  EmailMarketingProcess,
  PpcSection,
  CmsTopSection,
  CmsMainSection,
}) => {
  const shouldRenderRightText = rightText && rightText.length > 0;
  const shouldRenderPPC = PpcSection;
  const shouldRenderLeftImage = leftImage;
  const shouldRenderButton = buttonTitle && buttonTitle.length > 0;
  const shouldRenderTitle = Section2Title && Section2Title.length > 0;
  const shouldRenderDescription =
    Section2Description && Section2Description.length > 0;
  const shouldRenderCards = cards && cards.length > 0;
  const shouldRenderTextWithImage = TextWithImage;
  const shouldRenderTextWithImage2 =
    TextWithImage && TextWithImage.Description2;
  const shouldShowSection3 =
    Section3DetailContent && Section3DetailContent.length > 0;
  const shouldShowSection4 =
    Section4DetailContent && Section4DetailContent.length > 0;
  const shouldRenderSeoIndustries =
    SeoIndustriesText &&
    SeoIndustriesText.Title &&
    SeoIndustriesText.Description;
  const shouldRenderSeoIndustriesCards =
    SeoIndustriesCards && SeoIndustriesCards.length > 0;
  const shouldRenderSeoCase = SeoCaseContent && SeoCaseContent.length > 0;
  const shouldRenderSmm =
    SmmContent && SmmContent.TitleOne && SmmContent.DescriptionOne;
  const shouldRenderProcessCards = ProcessCards && ProcessCards.length > 0;
  const shouldRenderEmailContent =
    EmailMarketingProcessHead && EmailMarketingProcess;
  const shouldRenderCMS = CmsMainSection && CmsMainSection.length > 0;

  function getDomainFromUrl(url) {
    const link = document.createElement("a");
    link.href = url;
    return link.hostname;
  }

  return (
    <div className="services-details-area">
      
      <div className="services-details-desc">
        {shouldRenderLeftImage && (
          <div className="Section1 pt-75 pb-75">
            <div className="container">
              <div className="row">
                <div className="show-desktop col-lg-6 colh-md-12 col-12">
                  <img src={leftImage}alt={leftImage.split('/').pop().split('.')[0]} />
                </div>
                <div className="detail-cont col-lg-6 col-md-12 col-12">
                  {shouldRenderRightText && (
                    <div>
                      {rightText.map((content, index) => {
                        if (content.type === "heading") {
                          return (
                            <h1 key={index}>{content.children[0].text}</h1>
                          );
                        } else if (content.type === "paragraph") {
                          return <p key={index}>{content.children[0].text}</p>;
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  )}
                  {shouldRenderButton && (
                    <Link href="/contact">
                      <a className="btn-epicc mt-20">
                        <div>
                          <span>{buttonTitle} </span>
                          <span>{buttonTitle} </span>
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderSmm && (
          <div className="Smm">
            <div className="SmmSection1 pt-75 pb-75 bg-f9f9f9">
              <div className="container">
                <div className="row">
                  <h2>{SmmContent.TitleOne}</h2>
                  <div
                    className="col-12 col-md-6 col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <p>{SmmContent.DescriptionOne}</p>
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <img
                      src={SmmContent.Image1?.data?.attributes?.url}
                      alt={SmmContent.Image1?.data?.attributes?.name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="SmmSection2 pt-75">
              <div className="container">
                <div className="row">
                  <div className="col-12 mx-auto">
                    <h2>{SmmContent.Title2}</h2>
                    <p data-aos="fade-up" data-aos-duration="1200">
                      {SmmContent.Description2}
                    </p>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <img
                        src={SmmContent.Image2?.data?.attributes?.url}
                        alt={SmmContent.Image2?.data?.attributes?.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderPPC && (
          <div className="PPC pt-75 pb-75 bg-f9f9f9">
            <div className="container">
              <h2>{PpcSection.MainTitle}</h2>
              <p className="text-center mb-30">{PpcSection.MainDescription}</p>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={PpcSection.Image.data.attributes.url}
                  alt={PpcSection.MainTitle}
                />
              </div>
              <div className="Compare row">
                <div
                  className="col-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>{PpcSection.Title1}</h3>
                  <p>{PpcSection.Description1}</p>
                </div>
                <div
                  className="col-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>{PpcSection.Title2}</h3>
                  <p>{PpcSection.Description2}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderTextWithImage && TextWithImage.Description && (
          <div className="TextImage pt-75 pb-75">
            <div className="container">
              <h2>{TextWithImage.Title}</h2>
              <div className="row mt-40">
                <div
                  className="col-12 col-md-12 col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  {TextWithImage.Description.map((content, index) => {
                    if (content.type === "paragraph") {
                      return <p key={index}>{content.children[0].text}</p>;
                    } else if (content.type === "list") {
                      return (
                        <ul key={index}>
                          {content.children.map((item, itemIndex) => (
                            <li key={itemIndex}>{item.children[0].text}</li>
                          ))}
                        </ul>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div
                  className="col-12 col-md-12 col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src={TextWithImage.Image.data.attributes.url}
                    alt={TextWithImage.Image.data.attributes.name}
                  />
                </div>
              </div>
              {shouldRenderTextWithImage2 && (
                <div className="row mt-40">
                  <h2>{TextWithImage.Title2}</h2>
                  <div
                    className="col-lg-7 col-md-12 col-12 mt-40"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {TextWithImage.Description2.map((content2, index) => {
                      if (content2.type === "paragraph") {
                        return <p key={index}>{content2.children[0].text}</p>;
                      } else if (content2.type === "list") {
                        return (
                          <ul key={index}>
                            {content2.children.map((item, itemIndex) => (
                              <li key={itemIndex}>{item.children[0].text}</li>
                            ))}
                          </ul>
                        );
                      } else {
                        return null;
                      }
                    })}
                    <Link href="">
                      <a className="btn-epicc mt-40 d-flex justify-content-center align-items-center">
                        <div>
                          <span>{TextWithImage.ButtonTitle}</span>
                          <span>{TextWithImage.ButtonTitle}</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="col-lg-5 col-md-12 col-12 ImageCustom mt-40"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <img
                      src={TextWithImage.Image2.data.attributes.url}
                      alt={TextWithImage.Image2.data.attributes.name}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {shouldRenderCMS && (
          <div className="Cms pt-75 pb-75 bg-f9f9f9">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="Title">
                    <h3 className="text-center">{CmsTopSection.Title}</h3>
                    <p>{CmsTopSection.Description}</p>
                  </div>
                  <div className="row">
                    {CmsMainSection.map((card, index) => (
                      <div
                        key={index}
                        className="col-lg-5 col-12 mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1300"
                      >
                        <div className="CmsCards d-flex">
                          <img
                            src={card.Icon?.data?.attributes?.url}
                            alt="Card Icon"
                            className="card-img"
                          />
                          <div className="CmsCont">
                            <h3>{card.Title}</h3>

                            {card.Text.map((content, idx) => {
                              if (content.type === "paragraph") {
                                return (
                                  <p
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    key={idx}
                                  >
                                    {content.children.map(
                                      (child) => child.text
                                    )}
                                  </p>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderCards && (
          <div className="Section2 pt-75 pb-75 bg-f9f9f9">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto">
                  {shouldRenderTitle && (
                    <div
                      className="Title"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <h2 className="text-center">{Section2Title}</h2>
                    </div>
                  )}
                  {shouldRenderDescription && (
                    <div
                      className="description"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <p>{Section2Description}</p>
                    </div>
                  )}
                  <div className="row Section2Cards">
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="section2 col-lg-5 col-md-5 col-12  mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1300"
                      >
                        <div className="align-items-center d-flex flex-column ">
                          <img
                            src={card.CardIcon?.data?.attributes?.url}
                            alt={card.CardTitle}
                            className="card-img"
                          />
                          <h4>{card.CardTitle}</h4>
                        </div>
                        {card.CardDescription.map((content, idx) => {
                          if (content.type === "paragraph") {
                            return (
                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                key={idx}
                              >
                                {content.children.map((child, childIdx) =>
                                  child.bold ? (
                                    <strong
                                      className="text-black"
                                      key={childIdx}
                                    >
                                      {child.text}
                                    </strong>
                                  ) : (
                                    child.text
                                  )
                                )}
                              </p>
                            );
                          } else if (content.type === "list") {
                            return (
                              <ul key={idx}>
                                {content.children.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    {item.children[0].text}
                                  </li>
                                ))}
                              </ul>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderProcessCards && (
          <div className="ProcessCards pt-75 pb-75">
            <div className="container">
              <div className="Title">
                <h2>{ProcessCardsTitle.Title}</h2>
                <p>{ProcessCardsTitle.Description}</p>
              </div>
              <div className="card-container2 row">
                {ProcessCards.map((mobCard, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-12">
                    <Card
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <Card.Img
                        className="mx-auto"
                        variant="top"
                        src={mobCard.Icon?.data?.attributes?.url}
                        alt={mobCard.title}
                      />
                      <Card.Body>
                        <Card.Title>{mobCard.Title}</Card.Title>
                        <Card.Text>{mobCard.Description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="ButtonBottom d-flex flex-column align-items-center justify-content-center mt-40">
                <Link href="">
                  <a className="btn-epicc d-flex justify-content-center align-items-center">
                    <div>
                      <span>Send Inquiry</span>
                      <span>Send Inquiry</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
        {shouldShowSection3 && (
          <div className="show-desktop Section3 pt-75">
            <div className="container">
              {Section3DetailContent.map((content, index) => {
                if (content.type === "heading" && content.level === 2) {
                  return <h2 key={index}>{content.children[0].text}</h2>;
                }
                if (content.type === "paragraph") {
                  if (index === 1) {
                    return (
                      <p
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        key={index}
                      >
                        {content.children[0].text}
                      </p>
                    );
                  }
                }
                if (content.type === "paragraph") {
                  if (index === 1) {
                    return null;
                  }
                  const nextContent = Section3DetailContent[index + 1];
                  const subheading = Section3DetailContent[index - 1];
                  const rowOrder =
                    index % 2 === 0
                      ? { col1: 2, col2: 1 }
                      : { col1: 1, col2: 2 };
                  return (
                    <div
                      key={index}
                      className="row"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className={`col-md-6 order-${rowOrder.col1}`}>
                        {subheading && index !== 0 && (
                          <h3>{subheading.children[0].text}</h3>
                        )}
                        {index !== 0 && <p>{content.children[0].text}</p>}
                      </div>
                      <div className={`col-md-6 order-${rowOrder.col2}`}>
                        {nextContent && nextContent.type === "image" && (
                          <div className="image-container2">
                            <img
                              src={nextContent.image.url}
                              alt={nextContent.image.alternativeText}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                } else if (content.type === "image") {
                  return null;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
        {shouldShowSection3 && (
          <div className="show-mobile Section3 pt-75">
            <div className="container">
              {Section3DetailContent.map((content, index) => {
                if (content.type === "heading" && content.level === 2) {
                  return <h2 key={index}>{content.children[0].text}</h2>;
                }
                if (content.type === "paragraph") {
                  if (index === 1) {
                    return (
                      <p
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        key={index}
                      >
                        {content.children[0].text}
                      </p>
                    );
                  }
                }
                if (content.type === "paragraph") {
                  if (index === 1) {
                    return null;
                  }
                  const nextContent = Section3DetailContent[index + 1];
                  const subheading = Section3DetailContent[index - 1];
                  return (
                    <div
                      key={index}
                      className="row"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="col-12">
                        {subheading && index !== 0 && (
                          <h3>{subheading.children[0].text}</h3>
                        )}
                        {index !== 0 && <p>{content.children[0].text}</p>}
                      </div>
                      <div className="col-12">
                        {nextContent && nextContent.type === "image" && (
                          <div className="image-container2">
                            <img
                              src={nextContent.image.url}
                              alt={nextContent.image.alternativeText}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                } else if (content.type === "image") {
                  return null;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
        {shouldRenderEmailContent && (
          <div className="SeoSection pt-100 pb-75 bg-f9f9f9">
            <div className="container">
              <div className="Title">
                <h3>{EmailMarketingProcessHead.Title}</h3>
              </div>
              <div className="card-container3 row">
                {EmailMarketingProcess.map((ProCard, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-12 col-12"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div className="CardCon d-flex">
                      <div className="ImgBox">
                        <img
                          class="img-fluid"
                          variant="top"
                          src={ProCard.Icon?.data?.attributes?.url}
                          alt={ProCard.Icon?.data?.attributes?.name}
                        />
                      </div>

                      <div className="ContentInner">
                        <h5>{ProCard.Title}</h5>
                        <p>{ProCard.Text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {shouldRenderSeoIndustries && (
          <div className="SeoSection pt-100 pb-100 bg-f9f9f9">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 col-12"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="rightCont">
                    <div className="headtext width3">
                      <p>Expertise</p>
                    </div>
                    <h2>{SeoIndustriesText.Title}</h2>
                    <p>{SeoIndustriesText.Description}</p>
                    <div className="">
                      <Link href="">
                        <a className="btn-epic2 mt-40 d-flex justify-content-center align-items-center">
                          <div>
                            <span>Ask For Free Audit</span>
                            <span>Ask For Free Audit</span>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 seo-cards">
                  {shouldRenderSeoIndustriesCards && (
                    <div className="row">
                      {SeoIndustriesCards.map((card, index) => (
                        <div className="col-lg-6 col-md-6 col-12" key={index}>
                          <div
                            className="card"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          >
                            <div className="card-body d-flex">
                              <div className="image">
                                <img
                                  src={card.CardIcon?.data?.attributes?.url}
                                  alt={card.Title}
                                />
                              </div>
                              <h5 className="card-title">{card.Title}</h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {shouldRenderSeoCase && (
          <div className="SeoSection2 pt-75 pb-75">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="contentText"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h2>{SeoCaseText.Title}</h2>
                  <p>{SeoCaseText.Description}</p>
                </div>

                {SeoCaseContent.map((caseStudy, index) => (
                  <div
                    className="col-md-6 col-lg-4 col-12"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    key={index}
                  >
                    <div className="Case d-flex">
                      <Image
                        className="object"
                        src={Icon}
                        width={29}
                        height={29}
                      />
                      <a href={caseStudy.Link} className="card-link">
                        {getDomainFromUrl(caseStudy.Link)}
                      </a>
                      <p className="d-flex">
                        {caseStudy.Country}&nbsp;
                        <Image
                          className="object"
                          src={google}
                          width={23}
                          height={23}
                        />
                      </p>
                    </div>
                    <div className="image">
                      <img
                        src={caseStudy.Image?.data?.attributes.url}
                        alt={caseStudy.Country}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {shouldShowSection4 && (
          <div className="Section4 ptb-75 bg-f9f9f9">
            <div className="container">
              <div className="row">
                {Section4DetailContent.map((content, index) => {
                  if (content.type === "heading" && content.level === 2) {
                    return <h2 key={index}>{content.children[0].text}</h2>;
                  }
                  if (content.type === "heading" && content.level === 3) {
                    return (
                      <div
                        key={index}
                        className="col-lg-6 col-md-12 col-12"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="CardsDiv bg-white d-flex">
                          {Section4DetailContent[index + 2] &&
                          Section4DetailContent[index + 2].type === "image" ? (
                            <div className="image-container2">
                              <img
                                src={Section4DetailContent[index + 2].image.url}
                                alt={
                                  Section4DetailContent[index + 2].image
                                    .alternativeText
                                }
                              />
                            </div>
                          ) : null}
                          <div className="TextContent">
                            <h3>{content.children[0].text}</h3>
                            {Section4DetailContent[index + 1] &&
                            Section4DetailContent[index + 1].type ===
                              "paragraph" ? (
                              <p>
                                {
                                  Section4DetailContent[index + 1].children[0]
                                    .text
                                }
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
                <div className="ButtonBottom d-flex flex-column align-items-center justify-content-center">
                  <Link href="/contact">
                    <a className="btn-epicc mt-40 d-flex justify-content-center align-items-center">
                      <div>
                        <span>Send Inquiry</span>
                        <span>Send Inquiry</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsContent;
