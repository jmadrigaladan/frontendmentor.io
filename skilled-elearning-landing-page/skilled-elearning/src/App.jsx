import React from "react";
import { styles } from "./styles";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";

const App = () => (
  <div className="w-full hero__bg h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className="services--gradient">
      <div className={`mt-[200px] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
    </div>
    {/* Serivices Section */}

    <div>{/* Footer */}</div>
  </div>
);

export default App;
