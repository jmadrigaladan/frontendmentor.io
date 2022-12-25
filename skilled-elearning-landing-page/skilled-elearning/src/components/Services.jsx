import React from "react";
import textStyling from "../styles";
import ServiceCard from "./ServiceCard.jsx";
import { styles } from "../styles";
import { services } from "../constants";

const Services = () => (
  <section className={`mb-14 md:mb-24`}>
    <div className="flex justify-center items-end flex-wrap md:max-w-[1200px]">
      <div className="gradient-1 w-[339px] h-[120px] sm:h-[259px] md:w-[350px] md:h-[330px] rounded-[15px] mr-2 md:mr-7">
        <div className="w-full flex justify-center">
          <h1
            className={`${textStyling.servicesHeading} mt-6 sm:mt-16 w-[286px] h-[120px]`}
          >
            Check out our most popular courses!
          </h1>
        </div>
      </div>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

export default Services;
