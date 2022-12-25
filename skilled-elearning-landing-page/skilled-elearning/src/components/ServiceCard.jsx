import React from "react";
import textStyling from "../styles";
import { animationIcon } from "../assets";

const ServiceCard = ({ title, icon, description }) => (
  <div className="w-[340px] h-[283px] md:w-[350px] md:h-[345px] service--card__bg-shadow rounded-[15px] mr-2 md:mr-7 mt-8  md:mt-14 relative">
    <div className="mt-16 w-[286px] h-[218px] mx-8">
      <div className="">
        <h1 className={`${textStyling.serviceCardHeading}`}>{title}</h1>
        <p className={`${textStyling.paragraph} mt-6 h-[78px] md:h-[112px]`}>
          {description}
        </p>
        <button
          className={`bg-transparent ${textStyling.getStartedServices} mt-6`}
        >
          Get Started
        </button>

        <div className="gradient-1 rounded-full w-[56px] h-[56px] absolute top-[-20px]">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCard;
