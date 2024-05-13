import Screen from "./Screen";
import ScreenHeader from "./ScreenHeader";
import Skill from "./Skill";

import style from "./skillsscreen.module.css";

export default function SkillsScreen() {
  return (
    <Screen>
      <ScreenHeader title="My Skills" />
      <div className={style.screenContent}>
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