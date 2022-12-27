import React from "react";
import { twitterIcon, facebookIcon, instagramIcon, logo } from "../assets";

const Footer = () => (
  <footer className="mb-[80px]">
    <div className="min-w-[327px]">
      <img src={logo} alt="" />
      <p className="w-full font-plexSans text-[16px] leading-[26px] mt-[32px] ">
        All rights reserved © Equalizer 2021
        <span className="block">
          Have any problems? Contact us via social media or email us at
        </span>
        <span className="block font-bold">equalizer@example.com</span>
      </p>
    </div>
    <div className="flex flex-row mt-[64px]">
      <img src={facebookIcon} className="cursor-pointer bg-change mr-[20px]" alt="" />
      <img src={instagramIcon} className="cursor-pointer bg-change mr-[20px]" alt="" />
      <img src={twitterIcon} className="cursor-pointer bg-change" alt="" />
    </div>
  </footer>
);

export default Footer;
