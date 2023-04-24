import React from "react";

import "./Hero.scss";
import bgImg3 from "../assets/food-img3.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={bgImg3} alt="BackGround  3 from KiGostoso Restaurant" />
        <div className="hero-title">
          <h1>Venha experimentar nosso menu cheio de variedades</h1>
          <button>Cardápio</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
