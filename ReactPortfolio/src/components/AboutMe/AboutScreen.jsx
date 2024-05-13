import Screen from "../Screen";
import ScreenHeader from "../ScreenHeader";

import style from "./aboutscreen.module.css";

// this component returns the JSX of the About Screen
export default function AboutScreen() {
  return (
    // <Screen> is a wrapper component that distinguishes Screen components
    <Screen>
      {/* ScreenHeader creates a title for a screen */}
      <ScreenHeader title="About Me" />
      <div className={style.screenContent}>
        {/* Place the image on the left side of the screen */}
        <div className={style.splitContainer}>
          <img
            src={"/about-me-profile.jpg"}
            style={{
              width: "512px",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
        </div>
        {/* Place the about me content on the right side of the screen */}
        <div className={style.splitContainer}>
          {/* This card contains the actual about me text */}
          <div className={style.aboutTextContainer}>
            <p className={style.helloText}>I'm Pascual</p>
            <p className={style.paragraphText}>
              I am a Full-Stack developer from Buena Park, California.
              I am a Computer Science undergraduate from CSUF.
              I like to develop apps, learn new algorithms, and study Data Science.
              My hobbies include hiking, biking, and playing the drums.
              Nice to meet you!
            </p>
          </div>
        </div>
      </div>
    </Screen>
  );
}