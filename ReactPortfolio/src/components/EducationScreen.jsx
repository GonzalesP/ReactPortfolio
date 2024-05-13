import Screen from "./Screen";
import ScreenHeader from "./ScreenHeader";

import style from "./educationscreen.module.css";

export default function EducationScreen() {
  return (
    <Screen>
      <ScreenHeader title="My Educational Background" />
      <div className={style.screenContent}>
        <div className={style.imageContainer}>
          <img
            src={"/csuf-image.jpg"}
            style={{width: "640px", borderRadius: "16px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
          />
        </div>
        <div className={style.educationContainer}>
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