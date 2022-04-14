import styles from "./styling/Genres.module.css";
const Genres = (props) => {
  return (
    <div className={styles["genre-container"]}>
      <span>{props.children}</span>
    </div>
  );
};
export default Genres;
