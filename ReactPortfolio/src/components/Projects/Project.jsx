import style from "./project.module.css";

// this component returns the JSX of a Project
// each Project is a white card containing the project's name, description,
// and GitHub link
export default function Project({ name, description, link }) {
  return (
    // projectContainer creates the white card.
    <div className={style.projectContainer}>
      {/* render the project's name */}
      <p className={style.projectText}>{name}</p>

      {/* render the project's description */}
      <p className={style.descriptionText}>{description}</p>

      {/* render the project's link */}
      <p className={style.linkText}><a target="_blank" href={link}>Visit the GitHub repo</a></p>
    </div>
  )
}