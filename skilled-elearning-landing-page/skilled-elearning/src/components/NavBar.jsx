import React from "react";
import { logoDark } from "../assets";

const NavBar = () => (
  <nav className="w-full py-6">
    <div className="flex flex-row justify-between items-center">
      <img
        className="w-[85px] h-[22px] md:w-[110px] md:h-[28px]"
        src={logoDark}
        alt=""
      />
      <button className="button--color w-[140px] h-[48px] md:w-[167px] md:h-[56px] font-jakartaSans text-[18px] font-bold text-white leading-[28px] rounded-full">
        Get Started
      </button>
    </div>
  </nav>
);

export default NavBar;
