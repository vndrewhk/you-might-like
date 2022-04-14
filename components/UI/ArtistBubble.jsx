import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
const ArtistBubble = (props) => {
  const artist = props.artist;
  const clickNewArtist = props.clickNewArtist;
  const artistImage = props.artistImage

  return (
    <div key={artist.id} className="artist-bubble">
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>{artist.name}</h5>
      </a>
      <h6>Genres:</h6>

      {/* <p>{artist.images[0].url}</p> */}
      <ImageWithFallback
        onClick={clickNewArtist.bind(null, artist.id)}
        alt="artist image"
        width="50"
        height="50"
        fallbackSrc={fallBackImage}
        src={artistImage}
      ></ImageWithFallback>
      <p>
        {artist.genres.map((genre) => (
          <>{genre}</>
        ))}
      </p>
    </div>
  );
};

export default ArtistBubble;
