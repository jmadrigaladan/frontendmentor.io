import { styles } from "./styles";
import textStyles from "./styles";
import {
  desktopFooter,
  logo,
  manInMeeting,
  manTexting,
  tabletFooter,
  womanVideoCall,
  womanVideoChatting,
} from "./assets";
import { mobileFooter } from "./assets";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Button from "./components/Button";
function App() {
  return (
    <div className="w-full ">
      <div className={`sm:py-10 lg:py-14 py-6 flex justify-center`}>
        <img src={logo} alt="" className="w-[119px] h-[28px]" />
      </div>
      <div className="w-full max-w-screen">
        <Hero />
      </div>
      <Divider sectionText={"01"} />
      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <section className="w-full mt-[64px] mb-[200px] relative">
            <div className="flex justify-center">
              <div className="flex flex-wrap sm:flex-nowrap justify-center sm:items-center w-screen px-4 sm:px-12 mt-[64px] ">
                <img
                  src={womanVideoChatting}
                  alt=""
                  className="w-5/12 sm:w-1/4   rounded-[12px] mr-[12px]"
                />
                <img
                  src={womanVideoCall}
                  alt=""
                  className="w-5/12 sm:w-1/4 rounded-[12px] sm:mr-[12px] "
                />
                <img
                  src={manInMeeting}
                  className="w-5/12 sm:w-1/4  rounded-[12px] mr-[12px] mt-[20px] sm:mt-[0px]"
                  alt=""
                />
                <img
                  src={manTexting}
                  className="w-5/12 sm:w-1/4 rounded-[12px] sm:mr-[12px] mt-[20px] sm:mt-[0px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-[64px]">
              <div className="flex flex-col items-center w-[327px] h-[284px] sm:w-[573px] sm:h-[240px]">
                <h1 className={`${textStyles.sectionHeader} `}>
                  built for modern Use
                </h1>
                <h1
                  className={`${textStyles.sectionText} text-center mt-[24px] sm:mt-[16px] sm:w-[445px]`}
                >
                  Smarter Meetings, all in one place
                </h1>
                <p className={`${textStyles.para} text-center mt-[32px]`}>
                  Send messages, share files, show your screen, and record your
                  meetings — all in one workspace. Control who can join with
                  invite-only team access, data encryption, and data export.
                </p>
              </div>
              <div className="absolute bottom-[-230px] z-40">
                <Divider sectionText={"02"} />
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bgFooter h-[540px] md:h-[308px] relative">
        <img
          src={mobileFooter}
          alt=""
          className="ss:hidden object-cover opacity-20"
        />
        <img
          src={tabletFooter}
          alt=""
          className="hidden ss:block md:hidden object-cover opacity-20 h-[540px]"
        />
        <img
          src={desktopFooter}
          alt=""
          className="hidden md:block h-[308px] w-screen  opacity-20"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 m-auto w-[327px] h-[264px] mt-[96px] flex flex-col items-center md:flex-row md:items-start md:justify-between md:w-[1100px] md:h-[88px]">
          <h1
            className={`${textStyles.footerText} text-center md:text-left md:w-[350px]`}
          >
            Experience more together
          </h1>
          <p
            className={`${textStyles.footerPara} text-center mt-[24px] md:mt-[8px] md:text-left md:w-[350px]`}
          >
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button
            width={"193px"}
            text={"Download"}
            background={"bg-darkPurple"}
            hoverBgColor={"hover:bg-hoverPurple"}
            version={true}
            versionColor={"text-lightPurple"}
            className="w-[193px]"
            margin={"mt-[32px]"}
          ></Button>
        </div>
      </footer>
    </div>
  );
}

export default App;
