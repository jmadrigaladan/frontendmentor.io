import React from "react";
import textStyling from "./styles";
import { styles } from "./styles";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import { heroDesktopImg } from "./assets";

const App = () => (
  <div className="w-full bg-[url('./assets/image-hero-desktop.png')] bg-right-top bg-no-repeat bg-contain">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div>{/* Serivices Section */}</div>

    <div>{/* Footer */}</div>
  </div>
);

export default App;
