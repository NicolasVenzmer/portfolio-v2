import React from "react";
import "./nav.css";
import { MdAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { useState } from "react";
import { HiHome } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <MdAccountCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <PiCertificateFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiSolidMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
