import style from "./navbar.module.css"

export default function NavBar({ setView }) {
  function updateView(newView) {
    setView(newView)
  }
  return (
    <div className={style.navBarContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.websiteTitle}>Portfolio</h1>
      </div>
      <div className={style.navButtonContainer}>
        <button className={style.navButton} onClick={() => updateView("Home")}>Home</button>
        <button className={style.navButton} onClick={() => updateView("About")}>About</button>
        <button className={style.navButton} onClick={() => updateView("Skills")}>Skills</button>
        <button className={style.navButton} onClick={() => updateView("Education")}>Education</button>
        <button className={style.navButton} onClick={() => updateView("Projects")}>Projects</button>
        <button className={style.navButton} onClick={() => updateView("Contact")}>Contact</button>
      </div>
    </div>
  );
}