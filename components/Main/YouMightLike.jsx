import { Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styling/YouMightLike.module.css";
// import ImageWithFallback from "./ImageWithFallback";
import fallBackImage from "../../assets/default-profile.png";
import ImageWithFallback from "../UI/ImageWithFallback";

const YouMightLike = (props) => {
  const previousArtists = useSelector((state) => state.artists);
  const [artistHistory, setArtistHistory] = useState(
    previousArtists.artistHistory
  );

  const checkVals = () => {
    console.log(artistHistory[artistHistory.length - 1]);
  };

  return (
    <>
      {artistHistory.length > 0 && (
        <div className={styles["you-might-like-container"]}>
          {/* <Typography variant="p" component="p">
            You like */}
          {/* <ImageWithFallback
            className={styles["artist-image"]}
            //   alt={artistHistory[artistHistory.length - 1].name}
            width="35"
            height="35"
            fallbackSrc={fallBackImage}
            src={artistHistory[artistHistory.length - 1].images[0].url}
          ></ImageWithFallback> */}
          {artistHistory[artistHistory.length - 1].name}
          {/* {artistHistory[artistHistory.length - 1].name} so you might like ...
          </Typography> */}
          {/* <div onClick={checkVals}>check vals</div> */}
        </div>
      )}
    </>
  );
};

export default YouMightLike;
