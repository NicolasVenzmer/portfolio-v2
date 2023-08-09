import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {FaHtml5} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {SiMui} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {BiLogoCss3} from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaPython} from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiLogoJavascript className="experience__details-icon" color="#f0db4f"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" color="#88dded"/>
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" color="#e34c26"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoCss3 className="experience__details-icon" color="#264de4"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMui className="experience__details-icon" color="#377df7"/>
              <div>
                <h4>Material-UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" color="#68a063"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoPostgresql className="experience__details-icon" color="#00758F"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" color="#4B8BBE"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
