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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#languages">Languages</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/NicolasVenzmer" target="_blank">
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
