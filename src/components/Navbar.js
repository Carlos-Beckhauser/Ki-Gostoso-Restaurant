import React from "react";

import "./Navbar.scss";
import Logo from "../assets/logo.png";

const Navigation = () => (
  <nav className="navbar">
    <h1>navbar works!!!</h1>
    <img src={Logo} width="130" alt="Ki Gostoso Logo" />
  </nav>
);

export default Navigation;
