import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import footerimg from "@/public/images/Footer/footerimg.jpg";
import send from "@/public/images/Footer/fa--send.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import emailjs from "@emailjs/browser";

const FooterOne = () => {
  const [footerData, setFooterData] = useState({});
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/footer?populate=OurServices,Information,ContactUs.Image`
        );
        setFooterData(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cahnlck', 'template_wuahngd', e.target, {
        publicKey: 'oidv8bRsnkO8oh2tc',
      })
      .then(
        () => {
          setSubmissionStatus('success');
        },
        (error) => {
          setSubmissionStatus('failed');
        }
      );
  };
  useEffect(() => {
    if (submissionStatus === 'success') {
      alertContent('success');
    } else if (submissionStatus === 'failed') {
      alertContent('error');
    }
  }, [submissionStatus]);

  const alertContent = (status) => {
    let title, text, icon;

    if (status === 'success') {
      title = 'Success';
      text = 'Thank you for subscribing to our newsletter!';
      icon = 'success';
    } else if (status === 'error') {
      title = 'Error!';
      text = 'Failed to subscribe. Please try again later.';
      icon = 'error';
    }

    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  };


  const currentYear = new Date().getFullYear();
  const handlePhoneClick = (phoneNumber) => {
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = (email) => {
    const mailtoUrl = `mailto:${email}`;
    window.location.href = mailtoUrl;
  };
  const handleLetsTalkClick = () => {
    const phoneNumber = "+971 50 380 9772";
    handlePhoneClick(phoneNumber);
  };

  return (
    <div className="template-footer-one">
      <div className="show-desktop mt-100">
        <div className="left-container">
          <div className="row">
            <div className="col-8 bg-darkgrey pt-75">
              <div className="d-flex">
                {footerData.OurServices && (
                  <div className="">
                    <div className="single-footer-widget">
                      <div className="borderText">
                        <h3>Our Services</h3>
                      </div>
                      <ul className="my-links">
                        {footerData.OurServices.map((service) => (
                          <li key={service.id}>
                            {service.Link ? (
                              <Link href={service.Link}>
                                <a>{service.Name}</a>
                              </Link>
                            ) : (
                              <span>{service.Name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {footerData.Information && (
                  <div className="">
                    <div className="single-footer-widget pl-3">
                      <div className="borderText">
                        <h3>Information</h3>
                      </div>
                      <ul className="my-links">
                        {footerData.Information.map((info) => (
                          <li key={info.id}>
                            {info.Link ? (
                              <Link href={info.Link}>
                                <a>{info.Name}</a>
                              </Link>
                            ) : (
                              <span>{info.Name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {footerData.ContactUs && (
                  <div className="">
                    <div className="single-footer-widget pl-3">
                      <div className="borderText">
                        <h3>Contact Us</h3>
                      </div>

                      <ul className="my-links">
                        {footerData.ContactUs.map((contact) => (
                          <li key={contact.id}>
                            <div
                              className="icons"
                              onClick={() =>
                                contact.Name.includes("@")
                                  ? handleEmailClick(contact.Name)
                                  : handlePhoneClick(contact.Name)
                              }
                            >
                              {contact.Image &&
                                contact.Image.data &&
                                contact.Image.data.attributes && (
                                  <img
                                    src={contact.Image.data.attributes.url}
                                    alt={contact.Name}
                                  />
                                )}
                              <span>{contact.Name}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="copyright-area d-flex">
                <div className="align-items-center">
                  <p>
                    © 2006 - {currentYear} | All Rights Reserved by Wisdom IT
                    Solutions LLC
                  </p>
                </div>
                <form onSubmit={sendEmail}>
                  <div className="email-input-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="email-input"
                      name="user_email"
                      value={email}
                      onChange={handleChange}
                      required={true}
                      autoComplete="off"
                    />
                    <button type="submit" className="email-icon">
                      <Image
                        src={send}
                        width={20}
                        height={20}
                        alt="Submit"
                        className="submit-icon"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-4 bg-lightgray pt-75 d-flex flex-column align-items-center">
              <h1>Have a project in your mind?</h1>
              <button
                className="lets-talk-button"
                onClick={handleLetsTalkClick}
              >
                let's Talk
              </button>
              <div className="timings">
                <p>
                  9 : 00 AM - 6 : 00 PM
                  <br />
                  Saturday - Thursday
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <Image src={footerimg} />
        </div>
      </div>

      <div className="show-mobile mt-50">
        <div className="bg-dark">
          <div className="row mx-auto">
            {footerData.OurServices && (
              <div className="col-lg-4 col-md-4 col-6 mx-auto">
                <div className="single-footer">
                  <div className="borderText">
                    <h3>Our Services</h3>
                  </div>
                  <ul className="my-links">
                    {footerData.OurServices.map((service) => (
                      <li key={service.id}>
                        {service.Link ? (
                          <Link href={service.Link}>
                            <a>{service.Name}</a>
                          </Link>
                        ) : (
                          <span>{service.Name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {footerData.Information && (
              <div className="col-lg-4 col-md-4 col-6 mx-auto">
                <div className="single-footer pl-3">
                  <div className="borderText">
                    <h3>Information</h3>
                  </div>
                  <ul className="my-links">
                    {footerData.Information.map((info) => (
                      <li key={info.id}>
                        {info.Link ? (
                          <Link href={info.Link}>
                            <a>{info.Name}</a>
                          </Link>
                        ) : (
                          <span>{info.Name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {footerData.ContactUs && (
              <div className="col-lg-4 col-md-4 col-12 mt-40">
                <div className="single-footer pl-3">
                  <div className="borderText">
                    <h3>Contact Us</h3>
                  </div>

                  <ul className="my-links">
                    {footerData.ContactUs.map((contact) => (
                      <li key={contact.id}>
                        <div
                          className="icons"
                          onClick={() =>
                            contact.Name.includes("@")
                              ? handleEmailClick(contact.Name)
                              : handlePhoneClick(contact.Name)
                          }
                        >
                          {contact.Image &&
                            contact.Image.data &&
                            contact.Image.data.attributes && (
                              <img
                                src={contact.Image.data.attributes.url}
                                alt={contact.Name}
                              />
                            )}
                          <span>{contact.Name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <form onSubmit={sendEmail}>
                  <div className="email-input-container mt-40">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="email-input"
                      name="user_email"
                      value={email}
                      onChange={handleChange}
                      required={true}
                      autoComplete="off"
                    />
                    <button type="submit" className="email-icon">
                      <Image
                        src={send}
                        width={20}
                        height={20}
                        alt="Submit"
                        className="submit-icon"
                      />
                    </button>
                  </div>
                </form>
           
            <div className="copyright-area d-flex">
              <div className="align-items-center">
                <p>
                  © 2006 - {currentYear} | All Rights Reserved by Wisdom IT
                  Solutions LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
