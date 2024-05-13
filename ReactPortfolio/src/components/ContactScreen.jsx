import Screen from "./Screen";
import ScreenHeader from "./ScreenHeader";

import style from "./contactscreen.module.css"

export default function ContactScreen() {
  return (
    <Screen>
      <ScreenHeader title="Contact Me!" />
      <div className={style.screenContent}>
        <div className={style.contactContainer}>
          <div className={style.contactTextContainer}>
            <p className={style.contactText}>Email: <a href="mailto:GonzalesP@csu.fullerton.edu">
              GonzalesP@csu.fullerton.edu</a></p>
            <p className={style.contactText}>GitHub: <a href="https://github.com/GonzalesP" target="_blank">
              GonzalesP</a></p>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img
            src={"/contact-me-profile.jpg"}
            style={{height: "448px", borderRadius: "16px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
          />
          <p className={style.thankyouText}>Thank you!</p>
        </div>
      </div>
    </Screen>
  );
}