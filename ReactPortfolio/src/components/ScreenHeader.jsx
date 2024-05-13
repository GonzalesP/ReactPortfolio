import style from "./screenheader.module.css"

export default function ScreenHeader({ title }) {
  return (
    <div className={style.headerContainer}>
      <p className={style.headerText}>
        {title}
      </p>
    </div>
  );
}