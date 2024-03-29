import React from "react";

import "./Navbar.scss";
import Logo from "../assets/logo.png";

const Navigation = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="nav-logo">
        <img src={Logo} width="130" alt="Ki Gostoso Logo" />
        <h1>
          Restaurante Ki Gostoso
          <br />
          Fone: 47 999882401
        </h1>
      </div>
      <div>
        <ul className="nav-menu">
          <li>
            <a href="#aboutus">Sobre nós</a>
          </li>

          <li>
            <a href="#menu">Cardápio</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
