import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Experience Working</small>
            </article>
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>University</h5>
              <small>Bachelor In Computer Science</small>
            </article>
            <article className="about__card">
              <BiBrain className="about__icon" />
              <h5>Interests</h5>
              <div className="about__description">
                <small>Technology</small>
                <small>Finance</small>
                <small>Science</small>
              </div>
            </article>
          </div>
          <p>
            Experienced Front-End Software Engineer with 2+ years of expertise
            in JavaScript and frameworks, transforming complex designs into
            optimized web applications. Fluent in English, Spanish, and
            intermediate in German. Graduate in Bachelor's in Computer
            Science. Passionate, proactive, and committed to continuous
            learning. Let's collaborate to build innovative web solutions and
            shape the future of technology.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
