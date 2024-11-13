import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import Wisdom from "@/public/images/Frameworks/Wisdom2.png";
import ReactIcon from "@/public/images/Frameworks/react.svg";
import VueIcon from "@/public/images/Frameworks/vue.svg";
import WordpressIcon from "@/public/images/Frameworks/wordpress.svg";
import ShopifyIcon from "@/public/images/Frameworks/shopify.svg";
import LaravelIcon from "@/public/images/Frameworks/laravel.svg";
import yiiIcon from "@/public/images/Frameworks/yii.svg";

const Banner = () => {
  const [banner, setBanner] = React.useState();
  const [socialIcons, setSocialIcons] = React.useState([]);

  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/it-startup-banner?populate=*`
      );
      setBanner(response.data);
    };
    getBanner();
    const getSocialIcons = () => {
      fetch(`${baseApiUrl}/api/social-icon?populate=*`)
        .then((response) => response.json())
        .then((data) => {
          setSocialIcons(data.data.attributes.Social);
        })
        .catch((error) =>
          console.error("Error fetching social media data:", error)
        );
    };
    getSocialIcons();
  }, []);
  

  return (
    <>
      <div
        className="it-startup-banner-background"
        style={{
          backgroundImage: banner
            ? `url(${banner.data.attributes.image.data.attributes.url})`
            : "none",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "90vh",
          backgroundPosition: "center",
          position: "relative",
          left: 0,
          right:0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {banner && (
          <>
            <div
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(37, 37, 37, 0.7)",
              }}
            >
              <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="Banner">
                    <div className="show-desktop social">
                      <ul className="social-link">
                        {socialIcons.map((social) => (
                          <li key={social.id}>
                            <a href={social.Link} target="_blank">
                              <i
                                className={social.IconName}
                                alt={social.Name}
                              ></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="it-startup-banner-content">
                      <div className="welcome">Your Premier Digital Agency</div>
                      <h1>{banner.data.attributes.title}</h1>
                      <p>{banner.data.attributes.shortDescription}</p>
                      <Link href={banner.data.attributes.btnLink}>
                        <a className="btn-epic">
                          <div>
                            <span>{banner.data.attributes.btnText} </span>
                            <span>{banner.data.attributes.btnText} </span>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                  </div>
                </div>
                <div className="col-sm-none col-md-none col-6">
                  <div className="animation">
                    <div className="circle1">
                      <div className="Color1">
                        <div className="Color2">
                          <div className="mainImage">
                          <Image
                          className="object"
                          src={Wisdom}
                          alt="wisdom"
                          id="wisdom"
                          width={29}
                          height={27}
                        />
                          </div>
                        </div>
                      
                      </div>
                    </div>
                    <div className="orbit1">
                      <div className="circle2">
                        <ul>
                          <li>
                            <Image
                              className="object"
                              src={ShopifyIcon}
                              alt="shopify"
                              id="shopify"
                              width={48}
                              height={48}
                            />
                          </li>
                          <li>
                            <Image
                              className="object"
                              src={yiiIcon}
                              alt="yii"
                              id="yii"
                              width={48}
                              height={48}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="orbit2">
                      <div className="circle3">
                        <ul>
                          <li>
                            <Image
                              className="object"
                              src={ReactIcon}
                              alt="react"
                              id="react"
                              width={48}
                              height={48}
                            />
                          </li>
                          <li>
                            <Image
                              className="object"
                              src={VueIcon}
                              alt="vue"
                              id="vue"
                              width={48}
                              height={48}
                            />
                          </li>
                          <li>
                            <Image
                              className="object"
                              src={LaravelIcon}
                              alt="laravel"
                              id="laravel"
                              width={48}
                              height={48}
                            />
                          </li>
                          <li>
                            <Image
                              className="object"
                              src={WordpressIcon}
                              alt="wordpress"
                              id="wordpress"
                              width={48}
                              height={48}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Banner;
