import React from "react";
import { styles } from "./styles";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
  <div className="w-full hero__bg h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div
      className={`sm:mt-[140px] md:mt-[200px] ${styles.paddingX} ${styles.flexCenter} relative`}
    >
      <div className={`${styles.boxWidth} z-[3]`}>
        <Services />
      </div>
      <div className="services--gradient absolute" />
    </div>

    <div className="bg-[#13183f]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
