import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/NicolasVenzmer"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://wa.me/1154889200?text=Hi Nicolas!"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
