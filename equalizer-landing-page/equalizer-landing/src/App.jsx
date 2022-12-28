import { styles } from "./styles";
import textStyling from "./styles";
import Navbar from "./components/Navbar";
import { primaryPattern } from "./assets";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full background--hero bg-[url('./assets/bg-main-mobile.png')]">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <img
        src={primaryPattern}
        alt=""
        className="hidden sm:block sm:w-[266px] sm:h-[400px] lg:w-[312px] lg:h-[468px] absolute sm:top-[-32px] sm:right-[-40px] lg:top-[-40px] lg:right-0"
      />

      <div className={`${styles.flexCenter} ${styles.paddingX} mt-[80px]`}>
        <div className={`${styles.boxWidth}`}>
          <div className="w-full flex justify-center sm:justify-start ">
            <div className="w-[327px] h-[320px] ss:w-[520px] md:w-[1015px]">
              <h1 className={`${textStyling.heroText} w-full`}>
                We make your music sound extraordinary.
              </h1>
              <p className={`${textStyling.heroPara} mt-[40px]`}>
                A system audio equalizer specifically designed for Android and
                iOS. Freely tune the way your music sounds with a professional
                grade parametric EQ & volume mixer. Control bass, mids, treble,
                gain control, reverb, and more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
      <div
        className={`${styles.flexCenter} ${styles.paddingX} mt-[400px] sm:mt-[280px]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
