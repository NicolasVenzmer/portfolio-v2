import React, { useState, useEffect } from "react";
import "./nav.css";
import Tooltip from "@mui/material/Tooltip";
import { MdAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPositions = {
        "#": 0,
        "#about": document.getElementById("about").offsetTop - 60,
        "#experience": document.getElementById("experience").offsetTop - 60,
        "#portfolio": document.getElementById("portfolio").offsetTop - 60,
        "#languages": document.getElementById("languages").offsetTop - 60,
        "#contact": document.getElementById("contact").offsetTop - 60,
      };
      let currentSection = "#";
      for (const [section, position] of Object.entries(sectionPositions)) {
        if (scrollPosition >= position) {
          currentSection = section;
        } else {
          break;
        }
      }
      setActiveNav(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Tooltip title="Languages">
        <a
          href="#languages"
          onClick={() => setActiveNav("#languages")}
          className={activeNav === "#languages" ? "active" : ""}
        >
          <MdLanguage />
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
