import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import styles from "./styling/HistoryBubble.module.css";

const HistoryBubble = (props) => {
  const artist = props.artist;
  const clickNewArtist = props.fetchSimilarArtists;
  const artistImage = props.artistImage;

  return (
    <div className={styles["history-bubble"]}>
      <div className={styles["artist-image-container"]}>
        <ImageWithFallback
          className={styles["artist-image"]}
          onClick={clickNewArtist.bind(null, artist.id)}
          alt="artist image"
          width="50"
          height="50"
          fallbackSrc={fallBackImage}
          src={artistImage}
        ></ImageWithFallback>
      </div>
      <p className={styles["artist-name"]}>{artist.name}</p>
    </div>
  );
};

export default HistoryBubble;
