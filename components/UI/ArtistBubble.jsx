import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import Genres from "./Genres";
import GenreTag from "./GenreTag";
import styles from "./styling/ArtistBubble.module.css";
import GenreMax from "./GenreMax";

import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ArtistBubble = (props) => {
  const artist = props.artist;
  const clickNewArtist = props.clickNewArtist;
  const artistImage = props.artistImage;

  const verifyImage = () => {
    console.log(artistImage);
    console.log(artistImage.length);
    console.log(typeof artistImage.length == "undefined");
  };

  return (
    <div key={artist.id} className={styles["artist-bubble"]}>
      {/* <div className={styles["artist-info"]}>
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
      </div> */}
      {/* <Genres artist={artist}>
        {artist.genres.length >= 3 ? (
          <GenreMax artist={artist}></GenreMax>
        ) : (
          artist.genres.map((genre) => (
            <GenreTag key={`${genre}_${artist.name}`}>{genre}</GenreTag>
          ))
        )}
      </Genres> */}

      <Card
        className={styles["artist-card"]}
        sx={{ maxWidth: 345, height: "100%", width: "100%" }}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image={artistImage}
          alt={artist.name}
        /> */}
        <CardMedia height="140" sx={{ cursor: "pointer" }}>
          <Image
            onClick={clickNewArtist.bind(null, artist.id)}
            src={artistImage}
            alt={artist.name}
            width="100%"
            height="75%"
            layout="responsive"
            objectFit="cover"
          ></Image>
        </CardMedia>
        {/* <CardMedia>
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
   
            <ImageWithFallback
              className={styles["artist-image"]}
              onClick={clickNewArtist.bind(null, artist.id)}
              alt="artist image"
              // width="50"
              // height="50"
              layout="fill"
              objectFit="contain"
              fallbackSrc={fallBackImage}
              src={artistImage}
            ></ImageWithFallback>
          </div>
        </CardMedia> */}
        <CardContent sx={{ pointerEvents: "none" }}>
          {/* <a
            className={styles["artist-name"]}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <Typography gutterBottom variant="h5" component="div">
            {artist.name}
          </Typography>
          {/* </a> */}
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        <Genres artist={artist}>
          {artist.genres.length >= 3 ? (
            <GenreMax artist={artist}></GenreMax>
          ) : (
            artist.genres.map((genre) => (
              <GenreTag key={`${genre}_${artist.name}`}>{genre}</GenreTag>
            ))
          )}
        </Genres>
        {/* <button onClick={verifyImage}>image check</button> */}
        <CardActions className={styles["spotify-link"]}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="small">Listen on Spotify</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ArtistBubble;
