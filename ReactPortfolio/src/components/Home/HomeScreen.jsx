import Screen from "../Screen";
import ScreenHeader from "../ScreenHeader";

import style from "./homescreen.module.css"

// this component returns the JSX of the Home Screen
export default function HomeScreen() {
  return (
    // <Screen> is a wrapper component that distinguishes Screen components
    <Screen>
      {/* ScreenHeader creates a title for a screen */}
      <ScreenHeader title="Welcome to My Portfolio!" />
      <div className={style.screenContent}>
        {/* Place the introduction content on the left side of the screen */}
        <div className={style.splitContainer}>
          {/* This card contains the actual introduction text */}
          <div className={style.introTextContainer}>
            <p className={style.helloText}>Hello!</p>
            <p className={style.paragraphText}>I'm Pascual Gonzales</p>
          </div>
        </div>
        {/* Place the image on the right side of the screen */}
        <div className={style.splitContainer}>
          <img
            src={"/introduction-profile.jpg"}
            style={{
              width: "512px",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
        </div>
      </div>
    </Screen>
  );
}