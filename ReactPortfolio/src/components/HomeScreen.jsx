import Screen from "./Screen";
import ScreenHeader from "./ScreenHeader";

import style from "./homescreen.module.css"

export default function HomeScreen() {
  return (
    <Screen>
      <ScreenHeader title="Welcome to My Portfolio!" />
      <div className={style.screenContent}>
        <div className={style.introContainer}>
          <div className={style.introTextContainer}>
            <p className={style.helloText}>Hello!</p>
            <p className={style.paragraphText}>I'm Pascual Gonzales</p>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img
            src={"/introduction-profile.jpg"}
            style={{width: "512px", borderRadius: "16px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
          />
        </div>
      </div>
    </Screen>
  );
}