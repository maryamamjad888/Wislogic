import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseApiUrl from "@/utils/baseApiUrl";
import GoogleMap from "./GoogleMap";
import Link from "next/link";
import Image from "next/image";
import flag1 from "@/public/images/pak.png";
import flag2 from "@/public/images/uae.png";


// Form initial state
const INITIAL_STATE = {
  my_name: "",
  my_email: "",
  phone_no: "",
  inquiry_about: "",
  message: "",
};

const ContactForm = () => {
  const [contactInfo, setContactInfo] = React.useState();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  React.useEffect(() => {
    const getContactInfo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/contact-info?populate=*`
      );
      setContactInfo(response.data);
    };
    getContactInfo();
  }, []);
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };
  const [selectedImage, setSelectedImage] = useState("flag1");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cbveyok', 'template_s3pbqgp', form.current, {
        publicKey: 'oidv8bRsnkO8oh2tc',
      })
      .then(
        () => {
          setSubmissionStatus('success');
        },
        (error) => {
          setSubmissionStatus('failed');
        },
      );
  };
  React.useEffect(() => {
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
      text = 'Thankyou for contacting us! We will get back to you soon.';
      icon = 'success';
    } else if (status === 'error') {
      title = 'Error!';
      text = 'Failed to send your message. Please try again later.';
      icon = 'error';
    }

    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className="contact-area pt-75">
        <div className="container">
          <div className="row pb-75">
            {contactInfo && (
              <div className="col-lg-6 col-12">
                <div className="left-content">
                  <div className="section-title style-two">
                    <span className="sub-title">Contact Us</span>
                    <h2 className="mt-20">
                      <span> Get In </span>
                      Touch With Us!
                    </h2>
                  </div>
                  <p>{contactInfo.data.attributes.ContactText}</p>
                  <div className="flags d-flex">
                    <Image
                      src={flag2}
                      alt="UAE"
                      height={30}
                      width={30}
                      onClick={() => handleImageClick("flag1")}
                      style={{ cursor: "pointer" }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Image
                      src={flag1}
                      alt="Pakistan"
                      height={30}
                      width={33}
                      onClick={() => handleImageClick("flag2")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="single-contact-info-box">
                    <p>
                      {selectedImage === "flag2"
                        ? contactInfo.data.attributes.phoneNumber2
                        : contactInfo.data.attributes.phoneNumber1}
                    </p>
                  </div>

                  <div className="single-contact-info-box">
                    <p>{contactInfo.data.attributes.email1}</p>
                  </div>

                  <div className="single-contact-info-box">
                    <p>
                      {selectedImage === "flag2"
                        ? contactInfo.data.attributes.address2
                        : contactInfo.data.attributes.address1}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="col-lg-6 col-12">
              <div className="contact-form bg-f9f9f9">
                <h2>Speak To An Expert</h2>
                <p>
                  If you have any requirement please share with us at
                  info@wistech.biz or simply send us your inquiry by filling out
                  the form below.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="my_name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          name="my_email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="phone_no"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Inquiring About</label>
                        <input
                          type="text"
                          name="inquiry_about"
                          className="form-control shadow-none"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          cols="30"
                          rows="6"
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          Accept
                          <Link href="/terms-conditions">
                            <a>&nbsp;Terms of Services&nbsp;</a>
                          </Link>
                          and
                          <Link href="/privacy-policy">
                            <a>&nbsp;Privacy Policy</a>
                          </Link>
                        </label>
                      </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="ButtonBottom">
                      <input type="submit" value="Send Message" className="btn-submit" />
                      </div>
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
