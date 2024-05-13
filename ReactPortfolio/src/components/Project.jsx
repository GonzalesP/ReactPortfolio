import style from "./project.module.css";

export default function Project({ name, description, link }) {
  return (
    <div className={style.projectContainer}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}