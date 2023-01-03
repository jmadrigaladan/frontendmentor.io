import { styles } from "./styles";
import {
  logo,
  manInMeeting,
  manTexting,
  womanVideoCall,
  womanVideoChatting,
} from "./assets";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="w-full ">
      <div className={`sm:py-10 lg:py-14 py-6 flex justify-center`}>
        <img src={logo} alt="" className="w-[119px] h-[28px]" />
      </div>
      <div className="w-full max-w-screen">
        <Hero />
      </div>

      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <section className="w-full mt-[64px] mb-[200px]">
            <div className="flex flex-col items-center">
              <div>
                <span className="h-[84px] border-l-[2px] block"></span>
              </div>
              <span className="block w-[56px] h-[56px] border-2 rounded-full flex items-center justify-center">
                <span className="font-black font-redHat text-secondary text-[16px]">
                  01
                </span>
              </span>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap sm:flex-nowrap justify-center w-screen px-4 mt-[64px] sm:max-w-[689px] ">
                {/* wrapper for the images */}
                <img
                  src={womanVideoChatting}
                  alt=""
                  className="w-5/12 sm:w-[164px]  rounded-[12px] mr-[12px]"
                />
                <img
                  src={womanVideoCall}
                  alt=""
                  className="w-5/12 sm:w-[164px]  rounded-[12px] sm:mr-[12px] "
                />
                <img
                  src={manInMeeting}
                  className="w-5/12 sm:w-[164px]  rounded-[12px] mr-[12px] mt-[20px]"
                  alt=""
                />
                <img
                  src={manTexting}
                  className="w-5/12 sm:w-[164px] rounded-[12px] sm:mr-[12px] mt-[20px]"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
