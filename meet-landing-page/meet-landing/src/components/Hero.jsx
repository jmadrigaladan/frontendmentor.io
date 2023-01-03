import React from "react";
import Button from "./Button";
import textStyles from "../styles";
import { desktopHeroLeft, desktopHeroRight } from "../assets";
import { smallScreenHero } from "../assets";
const Hero = () => (
  <section className="w-full mb-[64px] md:mb-[200px]">
    <img
      src={smallScreenHero}
      alt=""
      className="w-screen flex flex-1 lg:hidden max-h-[343px]"
    />
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-screen">
      <img
        src={desktopHeroLeft}
        alt=""
        className="w-[1/3] hidden lg:inline max-w-[394px] max-h-[303px]"
      />
      <div className="w-[327px] h-[354px] ss:w-[457px] ss:h-[262px] mt-[48px] lg:mt-[0px] lg:max-w-[540px] lg:h-[303px] mx-[24px] ">
        <h1 className={`${textStyles.heroText} text-center`}>
          Group Chat for Everyone
        </h1>
        <p className={`${textStyles.para} mt-[24px] text-center`}>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="flex flex-col ss:flex-row ss:justify-center items-center mt-[32px]">
          <Button
            width={"193px"}
            text={"Download"}
            background={"bg-darkAqua"}
            hoverBgColor={"hover:bg-hoverAqua"}
            version={true}
            versionColor={"text-lightAqua"}
            className="w-[193px]"
            margin={"ss:mr-[12px]"}
          ></Button>
          <Button
            width={"139px"}
            text={"What is it?"}
            background={"bg-darkPurple"}
            hoverBgColor={"hover:bg-hoverPurple"}
            version={false}
            versionColor={""}
            margin={"mt-[16px] ss:mt-[0px]"}
            className="w-[139px]"
          ></Button>
        </div>
      </div>
      <img
        src={desktopHeroRight}
        alt=""
        className="w-[1/3] hidden lg:inline max-w-[394px] max-h-[303px]"
      />
    </div>
  </section>
);

export default Hero;
