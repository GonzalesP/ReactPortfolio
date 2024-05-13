import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";
import Skill from "./Skill";

import style from "./skillsscreen.module.css";

export default function SkillsScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="My Skills" />
      <div className={style.screenContent}>
        <div className={style.rowContainer}>
          <Skill name="ReactJS and React Native"/>
          <Skill name="HTML5"/>
          <Skill name="CSS3"/>
          <Skill name="JavaScript"/>
        </div>
        <div className={style.rowContainer}>
          <Skill name="PHP"/>
          <Skill name="MySQL"/>
          <Skill name="MongoDB"/>
          <Skill name="Python"/>
        </div>
        <div className={style.rowContainer}>
          <Skill name="C++"/>
          <Skill name="C"/>
          <Skill name="C#"/>
          <Skill name="GitHub"/>
        </div>
      </div>
    </ScreenContainer>
  );
}