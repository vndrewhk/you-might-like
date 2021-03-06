import { Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import HistoryBubble from "../UI/HistoryBubble";
import styles from "./styling/History.module.css";
import fallBackImage from "../../assets/default-profile.png";
import { resetArtists } from "../../store/artistSlice";
const History = (props) => {
  const previousArtists = useSelector((state) => state.artists);
  const [artistHistory, setArtistHistory] = useState(previousArtists);

  const dispatch = useDispatch();

  const clickNewArtist = (id) => {
    console.log(id);
  };

  // const clickHistoryHandler = props.clickHistoryHandler;

  const previousArtistsClicked = artistHistory.artistHistory.map((artist) => {
    if (artist.images.length >= 1) {
      return (
        <HistoryBubble
          fetchSimilarArtists={props.fetchSimilarArtists}
          artist={artist}
          clickHistoryHandler={props.clickHistoryHandler}
          clickNewArtist={clickNewArtist}
          artistImage={artist.images[0].url}
        ></HistoryBubble>
      );
    } else {
      return (
        <HistoryBubble
          fetchSimilarArtists={props.fetchSimilarArtists}
          artist={artist}
          clickNewArtist={clickNewArtist}
          artistImage={fallBackImage}
        ></HistoryBubble>
      );
    }
  });
  const checkVals = () => {
    console.log(artistHistory.artistHistory);
    // add to redux hash map
    console.log(artistHistory.artistHistory.map((artist) => artist.genres));
  };

  const clearHistory = () => {
    dispatch(resetArtists());
    console.log("hi");
  };
  return (
    artistHistory.artistHistory.length > 0 && (
      <>
        <div className={styles["history-container"]}>
          <div className={styles["history"]}>{previousArtistsClicked}</div>
        </div>
        <Button color="secondary" onClick={clearHistory} variant="outlined">
          Clear History
        </Button>
        {/* <button onClick={checkVals}>click here :D </button> */}
      </>
    )
  );
};

export default History;
