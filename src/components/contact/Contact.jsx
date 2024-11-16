import React, { useState } from "react";
import "./contact.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import MAIL from "../../assets/contact-icon.png";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaVerification = (token) => {
    setCaptchaToken(token);
    console.log("hCaptcha verified:", token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA to submit the form.");
      return;
    }
    // Process the form data here
    console.log("Form submitted successfully!");
  };

  return (
    <section id="contact">
      <h5>CONTACT US</h5>
      <h2>Get in Touch</h2>
      <div className="contact">
        <div className="contact__column">
          <h3>
            Send us a message
            <img src={MAIL} alt="envelope" />
          </h3>
          <p>
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <BsEnvelopeFill className="contact__icon" />
              <p>Contact@GreatStack.dev</p>
            </li>
            <li>
              <FaPhoneVolume className="contact__icon" />
              <p>+1 123-456-7890</p>
            </li>
            <li>
              <FaLocationDot className="contact__icon" />
              <p>
                77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
              </p>
            </li>
          </ul>
        </div>
        <div className="contact__column">
          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              required
            />

            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            {/* hCaptcha Integration */}
            <div className="hcaptcha-wrapper">
              <HCaptcha
                sitekey="78726a22-300e-411a-a0da-07a071a6f426"
                onVerify={handleCaptchaVerification}
              />
            </div>

            <button type="submit" className="btn">
              Submit now <HiOutlineArrowLongRight className="btn__icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
