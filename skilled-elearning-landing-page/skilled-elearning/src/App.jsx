import React from "react";
import textStyling from "./styles";
import { styles } from "./styles";
import Hero from "./components/Hero.jsx";

const App = () => (
  <div className="w-full hero__bg h-screen">
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
