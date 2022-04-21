import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import styles from "./styling/HistoryBubble.module.css";
import Fade from "react-reveal/Fade";
const HistoryBubble = (props) => {
  const artist = props.artist;
  const clickNewArtist = props.fetchSimilarArtists;
  const artistImage = props.artistImage;

  const clickHistoryHandler = props.clickHistoryHandler;
  return (
    // <Fade in={true}>
    // <Fade top>
    <div
      className={styles["history-bubble"]}
      onClick={clickNewArtist.bind(null, artist.id)}
    >
      <div className={styles["artist-image-container"]}>
        <ImageWithFallback
          className={styles["artist-image"]}
          onClick={clickHistoryHandler.bind(null, artist.id, artist.name)}
          alt={artist.name}
          width="50"
          height="50"
          fallbackSrc={fallBackImage}
          src={artistImage}
        ></ImageWithFallback>
      </div>
      <p className={styles["artist-name"]}>{artist.name}</p>
    </div>
    // </Fade>
    // </Fade>
  );
};

export default HistoryBubble;
