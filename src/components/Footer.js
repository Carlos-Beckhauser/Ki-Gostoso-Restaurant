import React from "react";

import Logo from "../assets/logo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <main id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} width="130" alt="Ki Gostoso Logo" />
          <h1>
            Restaurante <br />
            Ki Gostoso
          </h1>
        </div>

        <div>
          <p>Horário de Atendimento</p>
          <p>de Segunda à Sexta</p>
          <p>(47) 3442-2171</p>
        </div>
      </div>
      <div className="dev_signature"> Carlos Beckhauser - Web Developer</div>
    </main>
  );
};

export default Footer;
