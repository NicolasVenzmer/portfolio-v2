import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oxo5nc4",
      "template_mya4k2q",
      form.current,
      "PnCli_c7OkdMIM5Bx"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <action className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nicolasvenzmer@gmail.com</h5>
            <a href="mailto:nicolasvenzmer@gmail.com" target="blank">
              Send a message
            </a>
          </action>
          <action className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Nicolas Venzmer</h5>
            <a
              href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/"
              target="blank"
            >
              Send a message
            </a>
          </action>
          <action className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+541154889200</h5>
            <a href="https://wa.me/1154889200?text=Hi Nicolas!" target="blank">
              Send a message
            </a>
          </action>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
