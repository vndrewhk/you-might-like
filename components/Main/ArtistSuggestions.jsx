import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import ImageWithFallback from "../UI/ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import ArtistBubble from "../UI/ArtistBubble";
import styles from "./styling/ArtistSuggestions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addArtist, addGenres, resetArtists } from "../../store/artistSlice";
import History from "./History";
import Fade from "react-reveal/Fade";
import Collapse from "@mui/material/Collapse";
import { Grid, Typography } from "@mui/material";
import YouMightLike from "./YouMightLike";

const ArtistSuggestions = (props) => {
  // onClick, redo original fn with new artist
  const [artists, setArtists] = useState(props.artists);
  const [showHistory, setShowHistory] = useState(false);

  const [currentArtist, setCurrentArtist] = useState(null);

  const [justSearched, setJustSearched] = useState(props.justSearched);
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
      // here we should filter the remaining similar artists by the id in history so we dont get duplicate artists
      // setArtists(data.artists)
      setArtists(
        data.artists.filter(
          (artist) =>
            !previousArtists.artistHistory
              .map((history) => history.id)
              .includes(artist.id)
        )
      );
      setJustSearched(false);
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
  const clickNewArtist = (id, name) => {
    console.log(id);
    fetchSimilarArtists(id);
    // add to redux
    fetchSelectedArtist(id);
    console.log(name);
    setCurrentArtist(name);
    // props.clickArtistHandler();
  };
  // should keep track of the genres counted using a hashmap, and then display it as a side value as well
  // https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations
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

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const clickHistoryHandler = (id, name) => {
    fetchSimilarArtists(id);
    console.log(name);
    setCurrentArtist(name);
  };
  const clearHistory = () => {
    dispatch(resetArtists());
    toggleHistory();
  };

  return (
    <div className={styles["suggestion-container"]}>
      {/* maybe use the length of the artist store, so that it will update eveyrtime something is added and i dont use math.random like a stinker teehee */}
      {/* have the last of the history highlighted */}
      <div>
        <Typography
          className={styles["history-toggle"]}
          variant="h4"
          container="h4"
          onClick={toggleHistory}
        >
          History
          {!showHistory && <KeyboardDoubleArrowDown></KeyboardDoubleArrowDown>}
          {showHistory && <KeyboardDoubleArrowUp></KeyboardDoubleArrowUp>}
        </Typography>
        <Collapse in={showHistory} className={styles["history-toggle-wrapper"]}>
          <History
            clearHistory={clearHistory}
            clickHistoryHandler={clickHistoryHandler}
            fetchSimilarArtists={fetchSimilarArtists}
            key={Math.random()}
          ></History>
          {/* <button onClick={clearHistory}>Clear History</button> */}
        </Collapse>
      </div>
      {/* <button>{currentArtist}</button> */}
      {!justSearched && (
        <div className={styles["YML-container"]}>
          <span>You like &nbsp;</span>
          <Fade key={currentArtist}>
            <YouMightLike currentArtist={currentArtist}></YouMightLike>
          </Fade>
          <span>&nbsp; so you might like...</span>
        </div>
      )}
      <Grid container alignItems="stretch">
        {artists && (
          <Grid item style={{ display: "flex" }}>
            <div className={styles["artist-suggestions"]}>{artistBubbles}</div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ArtistSuggestions;
