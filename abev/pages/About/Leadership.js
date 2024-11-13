import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";


const Leadership = () => {
  const [OurServices, setOurServices] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/about-us?populate=WorldClassDesigners.Images.Image`
        );
        setOurServices(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
   
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

  if (!OurServices) {
    return;
  }

  return (
    <div className="About-us pt-75">
      {OurServices && (
        <div>
          <div className="container">
            <div id="leadership" className="DesignerDesign sec2 sec1 row mt-20 pb-75">
              <h1 className="text-center">
                {OurServices.WorldClassDesigners.Title}
              </h1>
              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {OurServices.WorldClassDesigners.Description}
              </p>
              {OurServices.WorldClassDesigners.Images.map((image, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-12 mt-40"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="designers">
                    <img
                      src={image.Image.data.attributes.url}
                      alt={OurServices.WorldClassDesigners.Title}
                    />
                  </div>
                </div>
              ))}
            </div> 
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Leadership;
