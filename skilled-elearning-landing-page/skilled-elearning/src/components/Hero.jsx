import React from "react";
import { layout } from "../styles";
import styles from "../styles";
import textStyling from "../styles";
import { heroDesktopImg } from "../assets";
import { heroTabletImg } from "../assets";
import { heroMobileImg } from "../assets";
import NavBar from "./NavBar.jsx";

const Hero = () => (
  <div className="relative">
    <NavBar />
    <section className={`${layout.section}`}>
      <div className={`max-w-[343px] sm:max-w-[398px] md:max-w-[457px]`}>
        <h1 className={`${textStyling.heroHeading}`}>
          Maximize skill, minimize budget
        </h1>
        <p className={`${textStyling.paragraph} mt-6 md:mt-7`}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="button--gradient-1 w-[167px] h-[56px]  md:h-[63px] font-jakartaSans text-[18px] font-bold text-white leading-[28px] rounded-full mt-6 md:mt-10">
          Get Started
        </button>
      </div>
    </section>
   
  </div>
);

export default Hero;
