import React from "react";
import styles from "../styles";
import { heroIllustration } from "../assets";
import { socialMediaIcons } from "../assets";

const Hero = () => (
  <section
    id="hero"
    className={`flex md:flex-row flex-col  ${styles.paddingY}`}
  >
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col">
        <div className={`flex ${styles.flexStart} px-6`}>
          <img src={heroIllustration} alt="" className="w-full mt-8" />
        </div>

        <div
          className={`flex flex-col md:items-start items-center max-w-[305px] md:max-w-[520px] justify-center md:mx-6 `}
        >
          <h1 className="font-poppins text-[40px] font-semibold text-white leading-[60px]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-[18px] text-white font-light leading-[27px] mt-8 max-w-[490px]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button className="bg-white text-[#684BB1] w-[200px] h-[56px] rounded-full drop-shadow-2xl hover:bg-[#E880E8] hover:text-white text-[18px] mt-8 font-poppins">
            Register
          </button>
        </div>
      </div>
      <div className="flex justify-end w-full pr-6">
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
    </div>
  </section>
);

export default Hero;
