import style from "./navbar.module.css"

export default function NavBar({ view, setView }) {
  return (
    <div className={style.navBarContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.titleText}>Portfolio</h1>
      </div>
      <div className={style.navButtonContainer}>
        <button className={view == "Home" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Home")}>Home</button>

        <button className={view == "About" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("About")}>About</button>

        <button className={view == "Skills" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Skills")}>Skills</button>

        <button className={view == "Education" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Education")}>Education</button>

        <button className={view == "Projects" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Projects")}>Projects</button>

        <button className={view == "Contact" ? style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Contact")}>Contact</button>
      </div>
    </div>
  );
}