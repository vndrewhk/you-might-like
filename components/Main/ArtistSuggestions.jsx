import { AirlineStops } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import ImageWithFallback from "../UI/ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import ArtistBubble from "../UI/ArtistBubble";

const ArtistSuggestions = (props) => {
  // onClick, redo original fn with new artist
  const [artists, setArtists] = useState(props.artists);
  const fetchSimilarArtists = async (id) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/related-artists`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem(
              "token_type"
            )} ${localStorage.getItem("access_token")}`,
            // "Bearer BQAvvYzy5kWu8kV3U7zBH5XCvIxBK9Ap3d35K0JstHe6zAb48USZb3SL-womw1-zKmU7mO_147JoHN02EQyTAXb5OlCFylM9Zm3hii5FxfQfgRBG53dG5bwOcnfFcAAI6I2pCtsALXdT0pURin-TkJI",
          },
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      setArtists(data.artists);
    } catch (err) {
      console.log(err);
    }
  };
  const clickNewArtist = (id) => {
    console.log(id);
    fetchSimilarArtists(id);
  };

  const artistBubbles = artists.map((artist) => {
    if (artist.images.length >= 1) {
      return (
        <ArtistBubble
          artist={artist}
          clickNewArtist={clickNewArtist}
          artistImage={artist.images[0].url}
        ></ArtistBubble>
      );
    } else {
      return (
        <ArtistBubble
          artist={artist}
          clickNewArtist={clickNewArtist}
          artistImage={fallBackImage}
        ></ArtistBubble>
      );
    }
  });
  const checkVal = () => {
    console.log(artists[0]);
    console.log(artists[0].id);

    console.log(artists[0].images[0].url);
  };

  return <>{artists && <div>{artistBubbles}</div>}</>;
};

export default ArtistSuggestions;
