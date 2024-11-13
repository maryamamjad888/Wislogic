import React from "react";
import ReactMarkdown from "react-markdown";

const PortfolioDetailsContent = ({
  attributes: {
    title,
    ProjectOverview,
    ImagesCollage,
    Challenge,
    solution,
    Result,
  },
}) => {
  const extractImageUrlFromMarkdown = (markdownText) => {
    return markdownText ? markdownText.replace(/!\[(.*?)\]\((.*?)\)/g, "") : "";
  };

  const challengeTextWithoutImage = extractImageUrlFromMarkdown(Challenge || '');
  const challengeImageUrl = Challenge?.match(/!\[(.*?)\]\((.*?)\)/)?.[2] || null;

  const FirstBlockWithoutImage = extractImageUrlFromMarkdown(
    solution?.FirstBlock || ''
  );
  const FirstBlockImageUrl = solution?.FirstBlock?.match(/!\[(.*?)\]\((.*?)\)/)?.[2] || null;

  const ThirdBlockWithoutImage = extractImageUrlFromMarkdown(
    solution?.ThirdBlock || ''
  );
  const ThirdBlockImageUrl = solution?.ThirdBlock?.match(/!\[(.*?)\]\((.*?)\)/)?.[2] || null;

  const BlockOneWithoutImage = extractImageUrlFromMarkdown(Result?.BlockOne || '');
  const BlockOneImageUrl = Result?.BlockOne?.match(/!\[(.*?)\]\((.*?)\)/)?.[2] || null;

  return (
    <div className="portfolio-details-area ptb-100">
      <div className="container">
        <div className="portfolio-details-desc">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="case-study">
                <div className="case-text">
                  <p>Case Study</p>
                </div>
                <h1>{title}</h1>
              </div>
            </div>
            <div className="col-lg-6 col-12">
            {ProjectOverview && (
                  <ReactMarkdown>{ProjectOverview}</ReactMarkdown>
                )}
             
            </div>
          </div>
          <div
            className="collage mt-50"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className="row">
              <div className="col-lg-7 col-12">
                {ImagesCollage[0] && (
                  <div className="collageimg1">
                    <img
                      src={ImagesCollage[0].GridImages.data.attributes.url}
                      alt={ImagesCollage[0].Name}
                    />
                  </div>
                )}
              </div>
              <div className="col-lg-5 col-12">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    {ImagesCollage[1] && (
                      <div className="collageimg2">
                        <img
                          src={ImagesCollage[1].GridImages.data.attributes.url}
                          alt={ImagesCollage[1].Name}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-12">
                    {ImagesCollage[2] && (
                      <div className="collageimg3">
                        <img
                          src={ImagesCollage[2].GridImages.data.attributes.url}
                          alt={ImagesCollage[2].Name}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-12">
                    {ImagesCollage[3] && (
                      <div className="collageimg3">
                        <img
                          src={ImagesCollage[3].GridImages.data.attributes.url}
                          alt={ImagesCollage[3].Name}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section1 pt-75">
            <h2 className="text-center">Detailed Overview</h2>
            <div className="row">
              <div className="col-lg-6 col-12">
                <ReactMarkdown>{challengeTextWithoutImage}</ReactMarkdown>
              </div>
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {challengeImageUrl && (
                  <img
                    src={challengeImageUrl}
                    alt="Challenge Image"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="section2 mt-10">
            <div className="row">
              <div className="col-lg-6 col-12">
                {solution && solution.FirstBlock && (
                  <ReactMarkdown>{FirstBlockWithoutImage}</ReactMarkdown>
                )}
              </div>
              <div
                className="col-lg-6 col-12 mt-40"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {FirstBlockImageUrl && (
                  <img
                    src={FirstBlockImageUrl}
                    alt="Second Block Image"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="section3 mt-10">
          {solution && solution.SecondBlock && (
                  <ReactMarkdown>{solution.SecondBlock}</ReactMarkdown>
                )}
           
          </div>
          <div className="section4 mt-40">
            <div className="row">
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {ThirdBlockImageUrl && (
                  <img
                    src={ThirdBlockImageUrl}
                    alt="Challenge Image"
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="col-lg-6 col-12 third-block">
                {ThirdBlockWithoutImage && (
                  <ReactMarkdown>{ThirdBlockWithoutImage}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
          <div className="mini-blocks pt-75">
            <div className="row">
              {solution &&
                solution.MiniBlocks &&
                solution.MiniBlocks.map((block) => (
                  <div
                    className="mini-blocks col-lg-3 col-12 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    key={block.id}
                  >
                    <div className="d-flex justify-content-center">
                      <div className="TopBox">
                        <h6>{block.Title}</h6>
                      </div>

                      <div className="TopOverlay">
                        <div className="IconBox">
                          <img
                            class="img-fluid"
                            variant="top"
                            src={block.Icon?.data?.attributes?.url}
                            alt={block.Title}
                          />
                        </div>
                      </div>
                    </div>
                    <p>{block.DetailText}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="results pt-75">
            <div className="row">
              <div className="col-lg-6 col-12 third-block">
                {BlockOneWithoutImage && (
                  <ReactMarkdown>{BlockOneWithoutImage}</ReactMarkdown>
                )}
              </div>
              <div
                className="col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {BlockOneImageUrl && (
                  <img
                    src={BlockOneImageUrl}
                    alt="Challenge Image"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
            <div className="sec2 row">
              <div className="col-12">
              {Result && Result.BlockTwo && (
                 <ReactMarkdown>{Result.BlockTwo}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsContent;
