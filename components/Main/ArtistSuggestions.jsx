import { AirlineStops } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import ImageWithFallback from "../UI/ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import ArtistBubble from "../UI/ArtistBubble";
import styles from "./styling/ArtistSuggestions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addArtist } from "../../store/artistSlice";
import History from "./History";

const ArtistSuggestions = (props) => {
  // onClick, redo original fn with new artist
  const [artists, setArtists] = useState(props.artists);
  const auth = useSelector((state) => state.auth);
  // make a redux store which pushes each clicked artist to the a store so you can follow the path down
  const previousArtists = useSelector((state) => state.artists);

  const dispatch = useDispatch();
  const addArtistHandler = (artist) => {
    dispatch(addArtist(artist));
  };

  const fetchSimilarArtists = async (id) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/related-artists`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token_type")} ${
              auth.access_token
            }`,
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
  const fetchSelectedArtist = async (id) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token_type")} ${
            auth.access_token
          }`,
          // "Bearer BQAvvYzy5kWu8kV3U7zBH5XCvIxBK9Ap3d35K0JstHe6zAb48USZb3SL-womw1-zKmU7mO_147JoHN02EQyTAXb5OlCFylM9Zm3hii5FxfQfgRBG53dG5bwOcnfFcAAI6I2pCtsALXdT0pURin-TkJI",
        },
      });
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      // send to store
      addArtistHandler(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  // https://developer.spotify.com/console/get-artist/?id=1FBER7ufQj5dCXxUgyKplP
  const clickNewArtist = (id) => {
    console.log(id);
    fetchSimilarArtists(id);
    // add to redux
    fetchSelectedArtist(id);
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
    console.log(previousArtists);
    console.log(artists);
  };

  return (
    <>
      <History key={Math.random()}></History>
      {artists && (
        <div className={styles["artist-suggestions"]}>{artistBubbles}</div>
      )}
      <button onClick={checkVal}>check store</button>
    </>
  );
};

export default ArtistSuggestions;
