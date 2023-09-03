import React from "react";
import "./experience.css";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const frontEndData = [
  {
    icon: <SiTypescript className="experience__details-icon" color="#007acc" />,
    title: "Typescript",
    description: "Intermediate",
  },
  {
    icon: (
      <BiLogoJavascript className="experience__details-icon" color="#f0db4f" />
    ),
    title: "Javascript",
    description: "Experienced",
  },
  {
    icon: <FaReact className="experience__details-icon" color="#88dded" />,
    title: "React JS",
    description: "Experienced",
  },
  {
    icon: <FaHtml5 className="experience__details-icon" color="#e34c26" />,
    title: "HTML",
    description: "Experienced",
  },
  {
    icon: <BiLogoCss3 className="experience__details-icon" color="#264de4" />,
    title: "CSS",
    description: "Experienced",
  },
  {
    icon: <SiMui className="experience__details-icon" color="#377df7" />,
    title: "Material-UI",
    description: "Experienced",
  },
];

const backEndData = [
  {
    icon: <FaNodeJs className="experience__details-icon" color="#68a063" />,
    title: "Node JS",
    description: "Intermediate",
  },
  {
    icon: (
      <BiLogoPostgresql className="experience__details-icon" color="#00758F" />
    ),
    title: "SQL",
    description: "Intermediate",
  },
  {
    icon: <FaPython className="experience__details-icon" color="#4B8BBE" />,
    title: "Python",
    description: "Intermediate",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndData.map(({ icon, title, description }, index) => {
              return (
                <article className="experience__details">
                  {icon}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{description}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndData.map(({ icon, title, description }, index) => {
              return (
                <article className="experience__details">
                  {icon}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{description}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
