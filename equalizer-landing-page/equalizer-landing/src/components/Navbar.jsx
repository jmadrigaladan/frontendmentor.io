import React from "react";
import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => (
  <nav className={`w-full ${styles.paddingY}`}>
    <div>
      <img src={logo} alt="" className="w-[146px] h-[32px]" />
    </div>
  </nav>
);

export default Navbar;
