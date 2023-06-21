import React from "react";

import "./Hero.scss";
import bgImg3 from "../assets/food-img3.jpg";

const Hero = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg">
          <img src={bgImg3} alt="BackGround  3 from KiGostoso Restaurant" />
          <div className="hero-title">
            <h1>Experimente nosso menu cheio de variedades</h1>
            <button>Menu</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
