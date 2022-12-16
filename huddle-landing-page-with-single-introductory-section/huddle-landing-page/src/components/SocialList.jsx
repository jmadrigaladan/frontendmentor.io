import React from "react";
import { socialMediaIcons } from "../assets";

const SocialList = () => (
  <div className="flex justify-center md:justify-end w-full">
    <ul className="flex flex-row">
      {socialMediaIcons.map((icon, index) => (
        <li
          className={`hover:border-[#FF52C1] border-2 p-[6px] md:p-2 rounded-full ${
            index === socialMediaIcons.length - 1 ? "mr-0" : "mr-4"
          }`}
          key={icon.id}
        >
          <img
            src={icon.image}
            alt=""
            id="socialIcon"
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default SocialList;
