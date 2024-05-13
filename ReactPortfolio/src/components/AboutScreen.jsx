import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";

import style from "./aboutscreen.module.css";

export default function AboutScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="About Me" />
      <div className={style.screenContent}>
        <div className={style.imageContainer}>
          img
        </div>
        <div className={style.aboutContainer}>
          <div className={style.aboutTextContainer}>
            <p>I'm Pascual</p>
            <p>
              I am a Full-Stack developer from Buena Park, California.
              I am a Computer Science undergraduate from CSUF.
              I like to develop apps and learn new algorithms.
              I also like Data Science.
            </p>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}