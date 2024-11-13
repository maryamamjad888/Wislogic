import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WhatWeDo = () => {
  const [weDoData, setWeDoData] = useState(null);

  useEffect(() => {
    const fetchWeDoData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/what-we-do?populate=*`
        );
        setWeDoData(response.data.data);
      } catch (error) {
        console.error("Error fetching What We Do data:", error);
      }
    };
    fetchWeDoData();
  }, []);

  return (
    <div className="what-we-do-area">
      {weDoData && (
        <>
          <div
            className="page-title-area"
            style={{
              backgroundImage: weDoData
                ? `url(${weDoData.attributes.BannerImage.data.attributes.url})`
                : "none",
              height: "500px",
              width: "100%",
              position: "relative",
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
                  What We <span>Do</span>
                </h1>
                <p className="w-80">{weDoData.attributes.Description}</p>
                <div className="ButtonBottom">
                  <Link href="/contact">
                    <a className="btn-epicc mt-20">
                      <div>
                        <span>Contact Us</span>
                        <span>Contact Us</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WhatWeDo;
