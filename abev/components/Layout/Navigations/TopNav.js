import React, { useEffect, useState } from "react";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";
import Image from "next/image";
import phone from "@/public/images/call.svg";
import email from "@/public/images/email.svg";
import Link from "next/link";

const Navbar2 = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [socialIcons, setSocialIcons] = useState([]);

  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/contact-info?populate=*`
        );
        setContactInfo(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

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

    getContactInfo();
    getSocialIcons();
  }, []);
  const handlePhoneClick = () => {
    const phoneNumber = contactInfo.phoneNumber1;
    const encodedPhoneNumber = encodeURIComponent(phoneNumber); 
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    const email = contactInfo.email1;
    const mailtoUrl = `mailto:${email}`; 
    window.location.href = mailtoUrl; 
  };

  return (
    <div className="topNavbar desktop">
      <div className="contact-info">
      <span onClick={handlePhoneClick}><Image src={phone} alt="phone" />{contactInfo.phoneNumber1}</span>
        <span onClick={handleEmailClick}><Image src={email} alt="email" />{contactInfo.email1}</span>
      
      </div>
      <ul className="social-links">
          {socialIcons.map((social) => (
            <li key={social.id}>
              <Link href={social.Link} target="_blank" rel="noopener noreferrer">
                <i className={social.IconName} alt={social.Name}></i>
              </Link>
            </li>
          ))}
        
      </ul>
    </div>
  );
};

export default Navbar2;
