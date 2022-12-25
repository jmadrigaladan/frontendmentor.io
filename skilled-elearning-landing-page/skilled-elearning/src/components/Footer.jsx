import React from "react";
import { logoLight } from "../assets";

const Footer = () => (
  <div className="w-full py-6">
    <div className="flex flex-row justify-between items-center">
      <img
        className="w-[85px] h-[22px] md:w-[110px] md:h-[28px]"
        src={logoLight}
        alt=""
      />
      <button className="button--gradient-2 w-[140px] h-[48px] md:w-[167px] md:h-[56px] font-jakartaSans text-[18px] font-bold text-white leading-[28px] rounded-full">
        Get Started
      </button>
    </div>
  </div>
);
export default Footer;
