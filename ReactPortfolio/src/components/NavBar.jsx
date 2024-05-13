import style from "./navbar.module.css"

// this component returns the JSX of the Navigation Bar
// it consists of the website's name (Portfolio) and navigation buttons
export default function NavBar({ view, setView }) {
  return (
    // navBarContainer contains the entire Navigation Bar (title + buttons)
    <div className={style.navBarContainer}>
      {/* create a separate container for the website's title */}
      <div className={style.titleContainer}>
        <h1 className={style.titleText}>Portfolio</h1>
      </div>

      {/* create a separate container for all of the Navigation buttons */}
      <div className={style.navButtonContainer}>

        {/* Each button will use a ternary operator to decide whether the user
        has selected it or not. If a button is selected (i.e., the view state
        is equal to the corresponding button), it will be underlined */}
        <button className={view == "Home" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Home")}>
            Home
        </button>

        <button className={view == "About" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("About")}>
            About
        </button>

        <button className={view == "Skills" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Skills")}>
            Skills
        </button>

        <button className={view == "Education" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Education")}>
            Education
        </button>

        <button className={view == "Projects" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Projects")}>
            Projects
        </button>

        <button className={view == "Contact" ?
          style.navButtonActive : style.navButtonInactive}
          onClick={() => setView("Contact")}>
            Contact
        </button>
      </div>
    </div>
  );
}