import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";


const Counter = ({ targetNumber }) => {
  const [count, setCount] = React.useState(0);
  const [isCounting, setIsCounting] = React.useState(false);
  const counterRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsCounting(entries[0].isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    let startTime, animationFrameId;
    const startCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000; // 2 seconds
      const currentValue = Math.min(
        Math.floor((progress / duration) * targetNumber),
        targetNumber
      );
      setCount(currentValue);
      if (progress < duration && isCounting)
        animationFrameId = requestAnimationFrame(startCounter);
    };
    if (isCounting) animationFrameId = requestAnimationFrame(startCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isCounting, targetNumber]);

  return <div ref={counterRef}>{count}+</div>;
};

const Stats = () => {
  const [statisticData, setStatisticData] = React.useState(null);

  React.useEffect(() => {
    const fetchStatisticData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/statistic?populate=Stats.IconImg`
        );
        setStatisticData(response.data.data);
      } catch (error) {
        console.error("Error fetching Statistic data:", error);
      }
    };
    fetchStatisticData();
  }, []);

  React.useEffect(() => {
    if (window.location.hash) {
      console.log("Hash detected in URL:", window.location.hash);
      const element = document.getElementById(window.location.hash.substr(1));
      console.log("Element:", element);
      if (element) {
        console.log("Scrolling to element...");
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Element not found!");
      }
    }
  }, []);

  return (
    <div className="About-us">
      {statisticData && (
            <div className="show-desktop statistics-section pt-75">
              <div className="stats-section">
                <h2 className="text-center">STATISTICS</h2>
                <h3 className="text-center">
                  {statisticData.attributes.Title}
                </h3>
                <div className="stats-container d-flex justify-content-center mt-50">
                  {statisticData.attributes.Stats.map((stat) => (
                    <div key={stat.id} className="stat-item d-flex">
                      <img
                        src={stat.IconImg.data.attributes.url}
                        alt={stat.Text}
                      />
                      <div className="number-stat">
                        <Counter
                          targetNumber={parseInt(
                            stat.Number.replace(/\D/g, "")
                          )}
                        />
                      </div>
                      <div className="text-stat">{stat.Text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {statisticData && (
            <div className="show-mobile statistics-section pt-75">
              <div className="stats-section">
                <h2 className="text-center">STATISTICS</h2>
                <h3 className="text-center">
                  {statisticData.attributes.Title}
                </h3>
                <div className="row mt-50">
                  {statisticData.attributes.Stats.map((stat) => (
                    <div
                      key={stat.id}
                      className="col-6 mx-auto stat-item d-flex"
                    >
                      <img
                        src={stat.IconImg.data.attributes.url}
                        alt={stat.Text}
                      />
                      <div className="number-stat">
                        <Counter
                          targetNumber={parseInt(
                            stat.Number.replace(/\D/g, "")
                          )}
                        />
                      </div>
                      <div className="text-stat">{stat.Text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
    </div>
  );
};

export default Stats;
