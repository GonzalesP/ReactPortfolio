import style from "./skill.module.css";

// this component returns the JSX of a Skill
// each Skill is a white card containing the skill's logo and name
export default function Skill({ image, name }) {
  return (
    // skillContainer creates the white card.
    <div className={style.skillContainer}>
      {/* render the skill's logo */}
      <img
        src={image}
        style={{width: "128px"}}
      />
      {/* render the skill's name */}
      <p className={style.skillText}>{name}</p>
    </div>
  )
}