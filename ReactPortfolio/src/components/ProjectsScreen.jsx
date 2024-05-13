import ScreenContainer from "./ScreenContainer";
import ScreenHeader from "./ScreenHeader";
import Project from "./Project";

import style from "./projectsscreen.module.css";

export default function ProjectsScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="My Projects" />
      <div className={style.screenContent}>
        <div className={style.rowContainer}>
          <Project
            name="Fullerton Overflow"
            description="I worked in a team named PECKK. Our team created a
              ReactJS web app where CSUF students can post questions about
              different courses from CSUF, simlar to Stack Overflow."
            link="https://github.com/KBReader/PECKK"
          />
          <Project
            name="To-Do List Backend API"
            description="I created a backend API for managing a To-Do list using
              Flask (a micro web framework for Python) and MySQL. The API has
              basic CRUD (Create, Read, Update, Delete) operations."
            link="https://github.com/GonzalesP/cpsc-449-assignment-1"
          />
        </div>
        <div className={style.rowContainer}>
          <Project
            name="Fitnesse"
            description="I created an Android mobile app using React Native and
              Expo. This app provides a set of meal plans and workout routines
              that users can follow in order to improve their physical fitness.
              The app also records a history of the user's daily weight changes.
              Users can also unlock achievements as they continue improving
              their physical fitness."
            link="https://github.com/GonzalesP/Fitnesse"
          />
          <Project
            name="Company Manager Backend API"
            description="I worked in a team of three students. Our team created
              a backend API for managing a company's projects and employees. The
              API has a microservices architecture and incorporates several
              backend strategies, including JWT token authentication, password
              encryption, and caching via Redis."
            link="https://github.com/GonzalesP/cpsc-449-project"
          />
        </div>
      </div>
    </ScreenContainer>
  );
}