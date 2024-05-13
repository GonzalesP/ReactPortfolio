import style from "./skill.module.css";

export default function Skill({ image, name }) {
  return (
    <div className={style.skillContainer}>
      img
      <p>{name}</p>
    </div>
  )
}