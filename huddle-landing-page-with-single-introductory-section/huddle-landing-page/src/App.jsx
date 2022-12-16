import React from "react";
import styles from "./styles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SocialList from "./components/SocialList";
const App = () => (
  <div className="bg-[#684BB1] w-full  h-screen bg-[url('./assets/bg-desktop.svg')]">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexCenter} ${styles.paddingX} h-[80vh]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX} `}>
        <SocialList />
      </div>
    </div>
  </div>
);

export default App;
