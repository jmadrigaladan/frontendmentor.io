import Button from "./components/Button";
import { styles } from "./styles";
import textStyles from "./styles";
import { desktopHeroRight, logo } from "./assets";
import { smallScreenHero } from "./assets";
import { desktopHeroLeft } from "./assets";

function App() {
  return (
    <div className="w-full ">
      <div className={`${styles.paddingY} flex justify-center`}>
        <img src={logo} alt="" className="w-[119px] h-[28px]" />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <img
          src={smallScreenHero}
          alt=""
          className="w-screen max-h-[300px] sm:hidden"
        />
        <div className="hidden sm:block w-full">
          <img src={desktopHeroLeft} alt="" className="inline" />
          <img src={desktopHeroRight} alt="" className="inline" />
        </div>
        <div className="w-[327px] h-[354px] ss:w-[457px] ss:h-[262px] mt-[48px]">
          <h1 className={`${textStyles.heroText} text-center`}>
            Group Chat for Everyone
          </h1>
          <p className={`${textStyles.para} mt-[24px] text-center`}>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col ss:flex-row ss:justify-center items-center mt-[32px]">
            <Button
              width={"193px"}
              text={"Download"}
              background={"bg-darkAqua"}
              hoverBgColor={"hover:bg-hoverAqua"}
              version={true}
              versionColor={"text-lightAqua"}
              className="w-[193px]"
              margin={"ss:mr-[12px]"}
            ></Button>
            <Button
              width={"139px"}
              text={"What is it?"}
              background={"bg-darkPurple"}
              hoverBgColor={"hover:bg-hoverPurple"}
              version={false}
              versionColor={""}
              margin={"mt-[16px] ss:mt-[0px]"}
              className="w-[139px]"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
