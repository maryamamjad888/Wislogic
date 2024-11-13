import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import ReactMarkdown from "react-markdown";

const DetailsContent = ({
  attributes: {
    detailsText,
    date,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".blog-details-desc h1, .blog-details-desc h2, .blog-details-desc h3, .blog-details-desc h4, .blog-details-desc h5, .blog-details-desc h6"
    );

    headings.forEach((heading, index) => {
      const id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      heading.setAttribute("id", id + "-" + index);
    });
  }, [detailsText]);

  return (
    <div className="blog-details-area pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="post-meta">
              <ul>
                <li>{formattedDate}</li>
              </ul>
            </div>
            <div className="blog-details-desc green-color">
              <div className="post-thumb">
                <img src={imageUrl} alt="blog-details" />
              </div>
              <ReactMarkdown>{detailsText}</ReactMarkdown>
            </div>
          </div>
          <div className="show-desktop col-lg-4 col-12 ">
            <div className="table-of-contents">
              <h2 className="text-center">Table of Contents</h2>
              <ul>
                {detailsText.match(/#{1,6}\s\*\*(.*?)\*\*/g)
                  ? detailsText
                      .match(/#{1,6}\s\*\*(.*?)\*\*/g)
                      .map((heading, index) => {
                        const headingText = heading.replace(
                          /#{1,6}\s\*\*(.*?)\*\*/,
                          "$1"
                        );
                        const id = headingText
                          .toLowerCase()
                          .replace(/\s+/g, "-");
                        return (
                          <li key={index}>
                            <a href={`#${id}-${index}`}>{headingText}</a>
                          </li>
                        );
                      })
                  : null}
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="left-sidebar">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
