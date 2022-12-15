import React from "react";
import { logo } from "../assets";

const NavBar = () => (
  <nav className="w-full py-6">
    <img src={logo} alt="huddle logo" className="w-[200px] h-[32px]" />
  </nav>
);

export default NavBar;
