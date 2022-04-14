import styles from "./styling/Genres.module.css";
const Genres = (props) => {
//   const logInfo = () => {
//     console.log(props.artist.genres);
//   };

  return (
    <div className={styles["genre-container"]}>
      {/* <button onClick={logInfo}>log info</button> */}
      <span>{props.children}</span>
    </div>
  );
};
export default Genres;
