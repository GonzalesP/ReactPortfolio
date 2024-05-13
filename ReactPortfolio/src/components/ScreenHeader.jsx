import style from "./screenheader.module.css"

// this component returns the JSX of a Screen Header
// all headers are centered and large
export default function ScreenHeader({ title }) {
  return (
    <div className={style.headerContainer}>
      <p className={style.headerText}>
        {title}
      </p>
    </div>
  );
}