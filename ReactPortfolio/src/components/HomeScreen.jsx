import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";

import style from "./homescreen.module.css"

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Welcome to My Portfolio!" />
      <div className={style.screenContent}>
        <div className={style.introContainer}>
          <div className={style.introTextContainer}>
            <p>Hello</p>
            <p>I'm Pascual</p>
          </div>
        </div>
        <div className={style.imageContainer}>
          img
        </div>
      </div>
    </ScreenContainer>
  );
}