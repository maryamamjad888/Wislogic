import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurCareerDetail = () => {
  const [ourCareer, setOurCareer] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/career?populate=*`);
        setOurCareer(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!ourCareer) {
    return;
  }

  return (
    <div className="Career-area">
      {ourCareer && (
        <div
          className="Career-area pt-75"
         
        >
          <div className="container">
            <div className="row">
            <div className="left-text col-6">
              {ourCareer.LeftText.map((item, index) => (
                <div key={index}>
                  {item.type === "heading" && <h2>{item.children[0].text}</h2>}
                  {item.type === "list" && (
                    <ul>
                      {item.children.map((child, i) => (
                        <li key={i}>{child.children[0].text}</li>
                      ))}
                    </ul>
                  )}
                 
                </div>
              ))}
            </div>
            <div className="right-text col-6">
              {ourCareer.RightText.map((item, index) => (
                <div key={index}>
                  {item.type === "heading" && <h2>{item.children[0].text}</h2>}
                  {item.type === "list" && (
                    <ul>
                      {item.children.map((child, i) => (
                        <li key={i}>{child.children[0].text}</li>
                      ))}
                    </ul>
                  )}
                 
                </div>
              ))}
            </div>
            </div>        
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCareerDetail;
