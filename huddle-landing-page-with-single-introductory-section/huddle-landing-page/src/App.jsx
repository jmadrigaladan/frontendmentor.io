import React from "react";
import styles from "./styles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
const App = () => (
  <div className="bg-[#684BB1] w-full overflow-hidden h-screen bg-[url('./assets/bg-desktop.svg')]">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
