import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { init } from "ityped";

const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["ReactJS", "NextJS", "JavaScript", "HTML", "CSS"],
    });
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h5>Hi There, I'm</h5>
        <h1>Nicolas Venzmer</h1>
        <h5 className="text-light">
          Front-End Engineer <span ref={textRef}></span>
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
