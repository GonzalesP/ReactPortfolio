import Screen from "../Screen";
import ScreenHeader from "../ScreenHeader";

import style from "./educationscreen.module.css";

// this component returns the JSX of the Education Screen
export default function EducationScreen() {
  return (
    // <Screen> is a wrapper component that distinguishes Screen components
    <Screen>
      {/* ScreenHeader creates a title for a screen */}
      <ScreenHeader title="My Educational Background" />
      <div className={style.screenContent}>
        {/* Place the image on the left side of the screen */}
        <div className={style.splitContainer}>
          <img
            src={"/csuf-image.jpg"}
            style={{width: "640px", borderRadius: "16px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
          />
        </div>
        {/* Place the education content on the right side of the screen */}
        <div className={style.splitContainer}>
          {/* This card contains the actual education text */}
          <div className={style.educationTextContainer}>
            <p className={style.degreeText}>Bachelor of Science in Computer Science</p>
            <p className={style.departmentText}>College of Engineering and Computer Science | CSUF</p>
            <p className={style.yearText}>2020-Present</p>
          </div>
        </div>
      </div>
    </Screen>
  );
}