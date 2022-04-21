import styles from "./styling/Genres.module.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
const GenreTag = (props) => {
  return (
    <Chip
      label={props.children}
      sx={{ backgroundColor: "#045471" }}
      className={styles["genre-tag"]}
    ></Chip>
  );
};

export default GenreTag;
