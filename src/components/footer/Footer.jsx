import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nicolas Venzmer
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="www.google.com">
          <BsLinkedin />
        </a>
        <a href="www.google.com">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nicolas Venzmer. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
