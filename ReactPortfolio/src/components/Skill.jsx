import style from "./skill.module.css";

export default function Skill({ image, name }) {
  return (
    <div className={style.skillContainer}>
      <img
        src={image}
        style={{width: "128px"}}
      />
      <p className={style.skillText}>{name}</p>
    </div>
  )
}