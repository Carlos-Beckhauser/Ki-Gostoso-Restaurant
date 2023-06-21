import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./utils/_base.scss";

import Navigation from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Hero />
      <AboutUs />
      <Menu />
      <Contact />
      <Footer />
      <Routes>
        <Route path="#aboutus" Component={<AboutUs />} />
        <Route path="#menu" Component={<Menu />} />
        <Route path="#contact" Component={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
