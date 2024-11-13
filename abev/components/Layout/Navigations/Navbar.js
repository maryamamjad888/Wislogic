import { useEffect, useState } from "react";
import React from "react";
import Link from "@/utils/ActiveLink";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  const [logo, setLogo] = useState();
  const [menu, setMenu] = useState(true);
  const [data, setData] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState({
    services: false,
    aboutUs: false,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/services?populate=*`
        );
        const { data } = response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(`${baseApiUrl}/api/logo?populate=*`);
      setLogo(response.data);
    };
    getLogo();
  }, []);

  if (!data) {
    return null;
  }

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const toggleSubMenu = (menuName) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const handleMegamenuLinkClick = () => {
    const megaMenu = document.querySelector('.megamenu'); 
    if (megaMenu) {
      megaMenu.classList.add('d-none'); 
    }
  };
  
  const handleOurServicesLinkHover = () => {
    const megaMenu = document.querySelector('.megamenu');
    if (megaMenu) {
      megaMenu.classList.remove('d-none'); 
    }
  };

  const  handleMobileamenuLinkClick = () => {
    const mobMenu = document.querySelector('.navbar-collapse'); 
    if (mobMenu) {
      toggleNavbar();
    }
  };
 
  
  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className={`navbar-area ${menu ? "" : "show-overlay"}`}>
        <div className="overlay" onClick={toggleNavbar}></div>
        {/* Desktop navbar */}
        <div className="show-desktop main-nav">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {logo && (
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src={logo.data.attributes.blackLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.blackLogo.data.attributes
                          .name
                      }
                    />
                  </a>
                </Link>
              )}

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services/services" activeClassName="active">
                    <a className="nav-link" onMouseEnter={handleOurServicesLinkHover}>Our Services</a>
                    </Link>
                    <ul className="megamenu">
                      <div className="megamenu-heading">
                        <h4>What We Do?</h4>
                      </div>
                      <div className="megamenu-underline"></div>

                      <div className="d-flex">
                        {[0, 6, 12].map((startIndex, columnIndex) => (
                          <div
                            className={`megamenu-column${columnIndex + 1}`}
                            key={columnIndex}
                          >
                            {data
                              .slice(startIndex, startIndex + 6)
                              .map((service) => (
                                <li className="nav-item2" key={service.id}>
                                  <div onClick={() => handleMegamenuLinkClick(`/services/${service.attributes.slug}`)}>
                                    <Link
                                      href={`/services/${service.attributes.slug}`}
                                      activeClassName="active"
                                    >
                                      <div className="d-flex">
                                        <img
                                          src={
                                            service.attributes.MegaMenuImage?.data
                                              ?.attributes.url || ""
                                          }
                                          alt={ service.attributes.MegaMenuImage.data.attributes.name}
                                          className="service-image"
                                        />
                                        <a className="nav-link2">
                                          {service.attributes.title}
                                        </a>
                                      </div>
                                    </Link>
                                  </div>
                                </li>
                              ))}
                          </div>
                        ))}
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/Projects/OurWork" activeClassName="active">
                      <a className="nav-link">
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blogs/blog" activeClassName="active">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/About/AboutUs" activeClassName="active">
                      <a className="nav-link">About Us</a>
                    </Link>
                    <ul className="menu">
                      <Link
                        href="/About/AboutUs#our-story"
                        activeClassName="active"
                      >
                        <li>
                          <a className="nav-link3">Our Story</a>
                        </li>
                      </Link>

                      <Link
                        href="/About/AboutUs#our-team"
                        activeClassName="active"
                      >
                        <li>
                          <a className="nav-link3">Our Team</a>
                        </li>
                      </Link>

                      <Link href="/Career/Careers" activeClassName="active">
                        <li>
                          <a className="nav-link3">Careers</a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact">
                  <a className="btn-epic desktop">
                    <div>
                      <span>Contact Us</span>
                      <span>Contact Us</span>
                    </div>
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="show-mobile col-lg-none main-nav">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {logo && (
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src={logo.data.attributes.blackLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.blackLogo.data.attributes
                          .name
                      }
                    />
                  </a>
                </Link>
              )}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                {logo && (
                  <Link href="/">
                    <div className="logo-fixed">
                      <a className="col-lg-none navbar-brand">
                        <img
                          src={
                            logo.data.attributes.blackLogo.data.attributes.url
                          }
                          alt={
                            logo.data.attributes.blackLogo.data.attributes
                              .alternativeText
                          }
                        />
                      </a>
                    </div>
                  </Link>
                )}
                <div className="menu-scroll">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() => toggleSubMenu("services")}
                      >
                        Our Services
                        {subMenuOpen.services ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </a>

                      <ul
                        className={`mobile-menu ${
                          subMenuOpen.services ? "show" : ""
                        }`}
                      >
                        {data.map((service) => (
                          <li className="nav-item2" key={service.id}>
                            <div onClick={() => handleMobileamenuLinkClick(`/services/${service.attributes.slug}`)}>
                            <Link
                              href={`/services/${service.attributes.slug}`}
                              activeClassName="active"
                            >
                              <div className="">
                                <a className="nav-link2">
                                  {service.attributes.title}
                                </a>
                              </div>
                            </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="nav-item">
                    <Link href="/Projects/OurWork" activeClassName="active">
                      <a className="nav-link">
                        Portfolio
                      </a>
                    </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blogs/blog" activeClassName="active">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link"
                        onClick={() => toggleSubMenu("aboutUs")}
                      >
                        About Us
                        {subMenuOpen.aboutUs ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </a>
                      <ul
                        className={`mobile-menu ${
                          subMenuOpen.aboutUs ? "show" : ""
                        }`}
                      >
                        <Link
                          href="/About/AboutUs#our-story"
                          activeClassName="active"
                        >
                          <li className="nav-item2">
                            <a className="nav-link2">Our Story</a>
                          </li>
                        </Link>

                        <Link
                          href="/About/AboutUs#our-team"
                          activeClassName="active"
                        >
                          <li className="nav-item2">
                            <a className="nav-link2">Our Team</a>
                          </li>
                        </Link>

                        <Link href="/Career/Careers" activeClassName="active">
                          <li className="nav-item2">
                            <a className="nav-link2">Careers</a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/FAQ/FAQ" activeClassName="active">
                        <a className="nav-link">FAQ</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="others-option">
                <Link href="/contact">
                  <a className="btn-epic desktop">
                    <div>
                      <span>Contact Us</span>
                      <span>Contact Us</span>
                    </div>
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


