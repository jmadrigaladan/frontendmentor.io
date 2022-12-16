import React from "react";
import styles from "../styles";
import { heroIllustration } from "../assets";

const Hero = () => (
  <section
    id="hero"
    className={`flex md:flex-row flex-col ${styles.flexCenter}`}
  >
    <div className={`flex  md:mr-10 mr-0  w-[3/5] mt-16`}>
      <img src={heroIllustration} alt="" className="w-full" />
    </div>
    <div
      className={`flex flex-col  md:max-w-[520px] justify-center md:mx-6 w-[2/5] `}
    >
      <h1 className="font-poppins text-[24px] text-center w-[280px] sm:w-full sm:text-left  leading-[36px] md:text-[32px] lg:text-[40px] font-semibold text-white md:leading-[60px]">
        Build The Community Your Fans Will Love
      </h1>
      <p className="text-[18px] text-white font-light leading-[27px] mt-8 max-w-[490px]">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="bg-white text-[#684BB1] w-[200px] h-[56px] rounded-full drop-shadow-2xl hover:bg-[#E880E8] hover:text-white text-[18px] mt-8 font-poppins">
        Register
      </button>
    </div>
  </section>
);

export default Hero;
