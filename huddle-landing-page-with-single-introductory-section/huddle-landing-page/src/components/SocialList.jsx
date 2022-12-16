import React from "react";
import { socialMediaIcons } from "../assets";

const SocialList = () => (
  <div className="flex justify-end w-full">
    <ul className="flex flex-row">
      {socialMediaIcons.map((icon, index) => (
        <li
          className={`border-2 p-2 rounded-full ${
            index === socialMediaIcons.length - 1 ? "mr-0" : "mr-4"
          }`}
          key={icon.id}
        >
          <img src={icon.image} alt="" className="w-[20px] h-[20px]" />
        </li>
      ))}
    </ul>
  </div>
);

export default SocialList;
