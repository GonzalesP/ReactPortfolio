import style from "./project.module.css";

export default function Project({ name, description, link }) {
  return (
    <div className={style.projectContainer}>
      <p className={style.projectText}>{name}</p>
      <p className={style.descriptionText}>{description}</p>
      <p className={style.linkText}><a target="_blank" href={link}>Visit the GitHub repo</a></p>
    </div>
  )
}