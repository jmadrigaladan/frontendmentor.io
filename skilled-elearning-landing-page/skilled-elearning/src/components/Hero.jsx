import React from "react";
import { layout } from "../styles";
import styles from "../styles";
import textStyling from "../styles";
import { heroMobileImg } from "../assets";
import NavBar from "./NavBar.jsx";

const Hero = () => (
  <div>
    <NavBar />
    <section className={`${layout.section}`}>
      <div
        className={`w-full flex flex-col items-start ss:items-center sm:items-start sm:max-w-[398px] md:max-w-[457px] mt-14 md:mt-20 `}
      >
        <h1
          className={`text-left ss:text-center sm:text-left ${textStyling.heroHeading}`}
        >
          Maximize skill, minimize budget
        </h1>
        <p
          className={`text-left ss:text-center sm:text-left ${textStyling.paragraph} mt-6 md:mt-7`}
        >
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="button--gradient-1 w-[167px] h-[56px]  md:h-[63px] font-jakartaSans text-[18px] font-bold text-white leading-[28px] rounded-full mt-6 md:mt-10">
          Get Started
        </button>
      </div>
      <div className="sm:hidden">
        <img src={heroMobileImg} alt="" className="w-full mt-6" />
      </div>
    </section>
  </div>
);

export default Hero;
