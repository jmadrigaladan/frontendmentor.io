import React from "react";
import { twitterIcon, facebookIcon, instagramIcon, logo } from "../assets";

const Footer = () => (
  <footer className="mb-[80px]">
    <div className="min-w-[327px] flex flex-col md:flex-row md:items-center ">
      <img
        src={logo}
        className="w-[120px] h-[30px] md:mr-[140px] md:mb-[40px]"
        alt=""
      />
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="w-[327px] sm:w-[366px] md:mr-[375px]">
          <p className="w-full font-plexSans text-[16px] leading-[26px] mt-[32px] ">
            All rights reserved © Equalizer 2021
            <span className="block sm:inline-block">
              Have any problems? Contact us via social media or email us at{" "}
            </span>
            <span className="block sm:inline font-bold">
              equalizer@example.com
            </span>
          </p>
        </div>
        <div className="flex flex-row mt-[64px]">
          <img
            src={facebookIcon}
            className="cursor-pointer bg-change mr-[20px] w-[20px] h-[20px]"
            alt=""
          />
          <img
            src={instagramIcon}
            className="cursor-pointer bg-change mr-[20px] w-[20px] h-[20px]"
            alt=""
          />
          <img
            src={twitterIcon}
            className="cursor-pointer bg-change w-[20px] h-[20px]"
            alt=""
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
