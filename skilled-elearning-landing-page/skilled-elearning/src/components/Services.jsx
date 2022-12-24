import React from "react";
import textStyling from "../styles";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => (
  <section className="h-screen ">
    <div className="flex justify-center items-end flex-wrap md:max-w-[1200px]">
      <div className="gradient-1 w-[339px] h-[259px] md:w-[350px] md:h-[330px] rounded-[15px] mr-2 md:mr-7">
        <div className="w-full flex justify-center">
          <h1
            className={`${textStyling.servicesHeading} mt-16 w-[286px] h-[120px]`}
          >
            Check out our most popular courses!
          </h1>
        </div>
      </div>

      <ServiceCard className="w-[1/3]" />
      <ServiceCard className="w-[1/3]" />
      <ServiceCard className="" />
      <ServiceCard className="" />
      <ServiceCard className="" />
    </div>
   
  </section>
);

export default Services;
