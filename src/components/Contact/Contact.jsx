import { useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Topbar from "../Topbar/Topbar";

import {
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  Email
} from "@mui/icons-material";

export default function Contact() {
  const form = useRef();
  const resetForm = () => {
    dispatch({ type: "Reset" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email has been sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Email could not be sent. Please enter the details carefully");
        }
      );
    resetForm();
  };
  const [formState, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
  });
  function reducer(state, action) {
    switch (action.type) {
      case "Name":
        return { ...state, name: action.payload };
      case "Email":
        return { ...state, email: action.payload };
      case "Message":
        return { ...state, message: action.payload };
      case "Reset":
        return { name: "", email: "", message: "" };
      default:
        return state;
    }
  }
  return (
    <div className="contact-container">
      <div className="contact-topbar">
        <Topbar />
      </div>
      <div
        className="contact-us-container"
       
      >
        <div className="contact-desc">
          <div className="contact-us">
            {/* <h1 className="contact-desc-title">Contact Us</h1> */}
            <h2 className="contact-desc-desc">
              Interested in joining us but don't know where to start? Do you
              have a mind-blowing idea that you need help with? Reach out to us,
              We are happy to help!
            </h2>
          </div>
          <div className="chat-with-us">
            <h1 className="chat-title">Join our open Whatsapp group</h1>
            <div className="chat-qr">
              <img src="/images/iitr_logo.png" alt="iitr logo"></img>
            </div>
          </div>
          <div className="visit-us">
            <h1 className="visit-title">Visit us</h1>
            <div className="location">
              <h3>Say hello at the PaAC office in Students' Activity Center</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13839.688495359684!2d77.8997458085611!3d29.86651966481195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32bac1adc93%3A0x80bba7dd5e4d1a6a!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1692962984241!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAC address"
              ></iframe>
            </div>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/astro_iitr/?hl=en"
              target="_blank"
              className="social-media-handle"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/company/paac-iitr/?originalSubdomain=in"
              target="_blank"
              className="social-media-handle"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/paaciitr"
              target="_blank"
              className="social-media-handle"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/physastroclubiitr/"
              target="_blank"
              className="social-media-handle"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="mailto:paac@iitr.ac.in"
              target="_blank"
              className="social-media-handle"
              rel="noreferrer"
            >
              <Email />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <label>Name </label>
          <input
            required
            name="form-name"
            type="text"
            value={formState.name}
            onChange={(event) => {
              dispatch({ type: "Name", payload: event.target.value });
            }}
          />
          <label>Email </label>
          <input
            required
            name="form-email"
            type="email"
            value={formState.email}
            onChange={(event) => {
              dispatch({ type: "Email", payload: event.target.value });
            }}
          />
          <label>Message</label>
          <textarea
            required
            rows={5}
            name="form-message"
            value={formState.message}
            onChange={(event) => {
              dispatch({ type: "Message", payload: event.target.value });
            }}
          />
          <div className="form-submit">
            <button className="form-submit-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
