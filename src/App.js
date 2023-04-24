import "./App.css";

import "./utils/_base.scss";

import Navigation from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
