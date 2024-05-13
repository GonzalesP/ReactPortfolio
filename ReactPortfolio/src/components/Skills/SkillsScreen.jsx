import Screen from "../Screen";
import ScreenHeader from "../ScreenHeader";
import Skill from "./Skill";

import style from "./skillsscreen.module.css";

// this component returns the JSX of the Skills Screen
export default function SkillsScreen() {
  return (
    // <Screen> is a wrapper component that distinguishes Screen components
    <Screen>
      {/* ScreenHeader creates a title for a screen */}
      <ScreenHeader title="My Skills" />
      <div className={style.screenContent}>

        {/* Divide the Skill components into three horizontal rows */}
        <div className={style.rowContainer}>
          <Skill name="ReactJS" image="/react-logo.png" />
          <Skill name="HTML5" image="html5-logo.png" />
          <Skill name="CSS3" image="css3-logo.png" />
          <Skill name="JavaScript" image="js-logo.png" />
        </div>

        <div className={style.rowContainer}>
          <Skill name="PHP" image="php-logo.png" />
          <Skill name="MySQL" image="mysql-logo.png" />
          <Skill name="MongoDB" image="mongodb-logo.png" />
          <Skill name="Python" image="python-logo.png" />
        </div>

        <div className={style.rowContainer}>
          <Skill name="C" image="c-lang-logo.png" />
          <Skill name="C++" image="cpp-logo.png" />
          <Skill name="C#" image="c-sharp-logo.png" />
          <Skill name="GitHub" image="github-logo.png" />
        </div>
      </div>
    </Screen>
  );
}