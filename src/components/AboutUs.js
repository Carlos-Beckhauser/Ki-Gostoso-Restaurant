import React from "react";

import "./AboutUs.scss";
import img from "../assets/aboutIMG.jpg";

const AboutUs = () => {
  return (
    <main id="aboutus">
      <div className="Title_aboutus">
        <h1>Nossa história</h1>
      </div>
      <section className="Container_aboutus">
        <div className="about-img">
          <img src={img} alt="Placeholder" />
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
