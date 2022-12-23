import React from "react";
import textStyling from "../styles";

const ServiceCard = ({ title, icon, description }) => (
  <div className="w-[350px] h-[345px] service--card__bg-shadow rounded-[15px] mr-7 mt-14">
    <div className="mt-16 w-[286px] h-[218px] mx-8">
      <div className="">
        <h1 className={`${textStyling.serviceCardHeading}`}>Animation</h1>
        <p className={`${textStyling.paragraph} mt-6`}>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <button
          className={`bg-transparent ${textStyling.getStartedServices} mt-6`}
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard;
