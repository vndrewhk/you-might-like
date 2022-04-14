import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import Genres from "./Genres";
import GenreTag from "./GenreTag";
import styles from "./styling/ArtistBubble.module.css";
const ArtistBubble = (props) => {
  const artist = props.artist;
  const clickNewArtist = props.clickNewArtist;
  const artistImage = props.artistImage;

  return (
    <div key={artist.id} className={styles["artist-bubble"]}>
      <div className={styles["artist-info"]}>
        <a
          className={styles["artist-name"]}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className={styles["artist-name"]}>{artist.name}</h5>
        </a>
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
      </div>
      <Genres>
        {artist.genres.map((genre) => (
          <GenreTag key={`${genre}_${artist.name}`}>{genre}</GenreTag>
        ))}
      </Genres>
    </div>
  );
};

export default ArtistBubble;
