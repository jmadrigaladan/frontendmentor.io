import { styles } from "./styles";
import { logo } from "./assets";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-full ">
      <div className={`${styles.paddingY} flex justify-center`}>
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
          </section>
          {/* ABOUT SECTION */}
        </div>
      </div>
    </div>
  );
}

export default App;
