import React from "react";
import "./portfolio.css";
import NETFLIX from "../../assets/netflix-logo.png";
import AMAZON from "../../assets/amazon-logo.png";
import EXPENSES from "../../assets/expenses-logo.svg";
import EMPLOYEE from "../../assets/employee-logo.svg";

const data = [
  {
    id: 1,
    image: NETFLIX,
    title: "Netflix",
    github: "https://github.com/NicolasVenzmer/netflix-clone",
    demo: "https://netflix-clone-dca91.web.app/",
  },
  {
    id: 2,
    image: AMAZON,
    title: "Amazon",
    github: "https://github.com/NicolasVenzmer/amazon-clone",
    demo: "https://amazon-clone0.netlify.app/",
  },
  {
    id: 3,
    image: EXPENSES,
    title: "My Expenses",
    github: "https://github.com/NicolasVenzmer/AplicacionPresupuesto",
    demo: "https://tusgastosdiarios.netlify.app/",
  },
  {
    id: 4,
    image: EMPLOYEE,
    title: "Employee Control",
    github: "https://github.com/NicolasVenzmer/ControlDeEmpleados",
    demo: "https://control-clientes-73292.web.app/home",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
