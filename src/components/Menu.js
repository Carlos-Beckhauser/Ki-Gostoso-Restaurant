import React from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

import "./Menu.scss";

const Menu = () => {
  return (
    <main id="menu">
      <div className="title_week-day">
        <h1>Cardápio Semanal</h1>
      </div>
      <section className="container_week-day">
        <div className="week-day">
          <img src={img1} alt="week food grid-area1" />
          <h1>Segunda</h1>
          <p>Strogonoff</p>
        </div>
        <div className="week-day">
          <img src={img2} alt="week food grid-area2" />

          <h1>Terça</h1>
          <p>Lasanha</p>
        </div>
        <div className="week-day">
          <img src={img3} alt="week food grid-area3" />

          <h1>Quarta</h1>
          <p>Pescados</p>
        </div>
        <div className="week-day">
          <img src={img4} alt="week food grid-area4" />

          <h1>Quinta</h1>
          <p>Rabada</p>
        </div>
        <div className="week-day grid-area5">
          <img src={img5} alt="week food" />

          <h1>Sexta</h1>
          <p>Dobradinha</p>
        </div>
        <div className="week-day grid-area6">
          <img src={img6} alt="week food" />

          <h1>Sábado</h1>
          <p>Feijoada</p>
        </div>
      </section>
    </main>
  );
};

export default Menu;
