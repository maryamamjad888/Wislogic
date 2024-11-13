import React from "react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const NewsletterPopup = () =>{
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeOurNewsletter, setSubscribeOurNewsletter] = useState();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const getSubscribeOurNewsletter = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/subscribe-our-newsletter?populate=*`
      );
      setSubscribeOurNewsletter(response.data);
    };
    getSubscribeOurNewsletter();
  }, []);

  const handleClosePopup = () => setShowPopup(false);

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
    }).then(() => {
      handleClosePopup();
    });
  };

  return (
    <>
      {showPopup && (
        <Modal show={showPopup} onHide={handleClosePopup}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {subscribeOurNewsletter && (
              <div className="subscribe-area">
                <div className="container">
                  <div className="align-items-center d-flex flex-column justify-content-center">
                    <div className="modal-image">
                      <img
                        src={
                          subscribeOurNewsletter.data.attributes.image.data
                            .attributes.url
                        }
                        alt={
                          subscribeOurNewsletter.data.attributes.image.data
                            .attributes.alternativeText
                        }
                      />
                    </div>
                    <div className="content-news text-center">
                      <h3>{subscribeOurNewsletter.data.attributes.subTitle}</h3>
                      <span className="sub-title">
                        {subscribeOurNewsletter.data.attributes.title}
                      </span>

                      <form className="newsletter-form" onSubmit={sendEmail}>
                        <div className="email-input-container justify-content-center">
                          <input
                            type="email"
                            className="input-newsletter"
                            placeholder="Enter your email address"
                            name="user_email"
                            value={email}
                            onChange={handleChange}
                            required={true}
                            autoComplete="off"
                          />
                          <button type="submit" className="email-icon2">
                            <img
                              src={
                                subscribeOurNewsletter.data.attributes.IconImg
                                  .data.attributes.url
                              }
                              alt={
                                subscribeOurNewsletter.data.attributes.image
                                  .data.attributes.alternativeText
                              }
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default NewsletterPopup;
