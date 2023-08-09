import React from "react";
import "./nav.css";
import Tooltip from "@mui/material/Tooltip";
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
      <Tooltip title="Home">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <HiHome />
        </a>
      </Tooltip>
      <Tooltip title="About">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <MdAccountCircle />
        </a>
      </Tooltip>
      <Tooltip title="Experience">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FaBook />
        </a>
      </Tooltip>
      <Tooltip title="Portfolio">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <MdWork />
        </a>
      </Tooltip>
      <Tooltip title="Certifications">
        <a
          href="#certifications"
          onClick={() => setActiveNav("#certifications")}
          className={activeNav === "#certifications" ? "active" : ""}
        >
          <PiCertificateFill />
        </a>
      </Tooltip>
      <Tooltip title="Contact">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiSolidMessageDetail />
        </a>
      </Tooltip>
    </nav>
  );
};

export default Nav;
