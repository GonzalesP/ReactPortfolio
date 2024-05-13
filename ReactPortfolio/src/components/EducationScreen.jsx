import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";

import style from "./educationscreen.module.css";

export default function EducationScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="My Educational Background" />
      <div className={style.screenContent}>
        <div className={style.imageContainer}>
          img
        </div>
        <div className={style.educationContainer}>
          <div className={style.educationTextContainer}>
            <p>Bachelor of Science in Computer Science</p>
            <p>College of Engineering and Computer Science | CSUF</p>
            <p>2020-Present</p>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}