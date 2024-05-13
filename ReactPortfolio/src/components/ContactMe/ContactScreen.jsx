import Screen from "../Screen";
import ScreenHeader from "../ScreenHeader";

import style from "./contactscreen.module.css"

// this component returns the JSX of the Contact Screen
export default function ContactScreen() {
  return (
    // <Screen> is a wrapper component that distinguishes Screen components
    <Screen>
      {/* ScreenHeader creates a title for a screen */}
      <ScreenHeader title="Contact Me!" />
      <div className={style.screenContent}>
        {/* Place the contact information on the left side of the screen */}
        <div className={style.contactContainer}>
          <div className={style.contactTextContainer}>
            <p className={style.contactText}>Email: <a href="mailto:GonzalesP@csu.fullerton.edu">
              GonzalesP@csu.fullerton.edu</a></p>
            <p className={style.contactText}>GitHub: <a href="https://github.com/GonzalesP" target="_blank">
              GonzalesP</a></p>
          </div>
        </div>
        {/* Place the image on the right side of the screen */}
        <div className={style.imageContainer}>
          {/* render the image */}
          <img
            src={"/contact-me-profile.jpg"}
            style={{
              height: "448px",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
          {/* add text underneath the image */}
          <p className={style.thankyouText}>Thank you!</p>
        </div>
      </div>
    </Screen>
  );
}