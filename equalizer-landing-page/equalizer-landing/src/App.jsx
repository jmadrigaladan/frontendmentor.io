import { styles } from "./styles";
import textStyling from "./styles";
import Navbar from "./components/Navbar";
import { primaryPattern } from "./assets";

function App() {
  return (
    <div className="w-full h-screen">
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
          <div className="ss:max-w-[520px] lg:max-w-[1015px]">
            <h1 className={`${textStyling.heroText}`}>
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
  );
}

export default App;
