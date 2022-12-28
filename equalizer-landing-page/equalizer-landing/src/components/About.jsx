import { secondaryPattern } from "../assets";
import { illustration } from "../assets";
import { appleIcon, androidIcon } from "../assets";
import textStyling, { styles } from "../styles";

const About = () => (
  <section className={`${styles.flexCenter} mt-[200px] sm:mt-[280px]`}>
    <div className="flex justify-center bg-primary w-[375px] h-[600px] sm:w-[696px] md:w-[1100px] rounded-[12px] relative">
      <img
        src={secondaryPattern}
        alt=""
        className="w-[280px] h-[420px] md:w-[312px] md:h-[468px] sm:ml-[60px] md:ml-[-10px] md:mt-[-70px]"
      />
      <img
        src={illustration}
        alt=""
        className="absolute w-[208px] h-[430px] sm:w-[270px] sm:h-[556px] top-[-120px] sm:left-[60px] md:left-[197px]"
      />
      <div className="bg-[#FA7453] w-[375px] sm:w-[399px] md:w-[446px] rounded-[12px] h-[546px] md:h-[625px] absolute bottom-[-325px] sm:bottom-[-115px] sm:right-[40px] flex justify-center ">
        <div className="w-[302px] h-[450px] my-[48px]">
          <h1 className={`${textStyling.aboutText}`}>Premium EQ</h1>
          <p className={`${textStyling.aboutPara} mt-[12px]`}>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <div className="flex flex-row items-center mt-[36px] ">
            <h1 className="font-plexSans text-secondary text-[65px] leading-[52px] font-bold mr-[16px]">
              $4
            </h1>
            <h1 className="font-plexSans text-secondary text-[20px] font-normal leading-[32px]">
              / month
            </h1>
          </div>
          <div className="flex flex-col mt-[32px]">
            <button className="bg-primary hover:bg-[#66E2DC] w-[296px] md:w-[333px] h-[61px] rounded-[12px] flex justify-center items-center">
              <img src={appleIcon} alt="" className="mr-[8px]" />
              <h1 className="font-plexSans text-[18px] leading-[32px] text-secondary font-bold">
                iOS Download
              </h1>
            </button>
            <button className="bg-secondary hover:bg-[#FFB964] w-[296px] md:w-[333px] h-[61px] rounded-[12px] flex justify-center items-center mt-[16px]">
              <img src={androidIcon} alt="" className="mr-[8px]" />
              <h1 className="font-plexSans text-primary text-[18px] leading-[32px] font-bold ">
                Android Download
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
