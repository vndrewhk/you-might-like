import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryBubble from "../UI/HistoryBubble";
import styles from "./styling/History.module.css";

const History = (props) => {
  const previousArtists = useSelector((state) => state.artists);
  const [artistHistory, setArtistHistory] = useState(previousArtists);

  const clickNewArtist = (id) => {
    console.log(id);
  };

  const previousArtistsClicked = artistHistory.artistHistory.map((artist) => {
    if (artist.images.length >= 1) {
      return (
        <HistoryBubble
          fetchSimilarArtists={props.fetchSimilarArtists}
          artist={artist}
          clickNewArtist={clickNewArtist}
          artistImage={artist.images[0].url}
        ></HistoryBubble>
      );
    } else {
      return (
        <HistoryBubble
          artist={artist}
          clickNewArtist={clickNewArtist}
          artistImage={fallBackImage}
        ></HistoryBubble>
      );
    }
  });
  const checkVals = () => {
    console.log(artistHistory.artistHistory);
  };

  return (
    <>
      <div className={styles["history-container"]}>
        {previousArtistsClicked}
      </div>
      <button onClick={checkVals}>click here :D </button>
    </>
  );
};

export default History;
