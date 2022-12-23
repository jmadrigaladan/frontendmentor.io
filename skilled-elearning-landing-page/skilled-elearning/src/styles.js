const textStyling = {
  heroHeading:
    "font-jakartaSans text-[#13183F] font-extrabold text-[40px] leading-[50px] md:text-[56px] md:leading-[71px]",

  servicesHeading:
    "font-jakartaSans text-white font-extrabold text-[24px] leading-[32px] md:text-[32px] md:leading-[40px]",

  serviceCardHeading:
    "font-jakartaSans text-[#13183F] font-extrabold text-[20px] leading-[25px] md:text-[24px] md:leading-[30px]",

  paragraph:
    "font-jakartaSans text-[#83869A] font-medium text-[16px] leading-[26px] md:text-[18px] md:leading-[28px]",

  getStartedServices:
    "font-jakartaSans text-[#F74780] font-bold text-[18px] leading-[28px] hover:text-[#FFA7C3]",
};

export const styles = {
  boxWidth: "max-w-[1150px] w-full",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default textStyling;
