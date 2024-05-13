import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";

import style from "./contactscreen.module.css"

export default function ContactScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Contact Me!" />
      <div className={style.screenContent}>
        <div className={style.contactContainer}>
          <div className={style.contactTextContainer}>
            <p>email: <a href="mailto:GonzalesP@csu.fullerton.edu">GonzalesP@csu.fullerton.edu</a></p>
            <p>GitHub: <a href="https://github.com/GonzalesP" target="_blank">GonzalesP</a></p>
          </div>
        </div>
        <div className={style.imageContainer}>
          img
        </div>
      </div>
    </ScreenContainer>
  );
}