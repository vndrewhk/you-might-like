import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import SearchBox from "../Search/SearchBox";
import ArtistSuggestions from "./ArtistSuggestions";
import styles from "./styling/MainBody.module.css";
import UnloggedHome from "./UnloggedHome";

const MainBody = () => {
  const auth = useSelector((state) => state.auth);
  const [artistInfo, setArtistInfo] = useState();
  const [justSearched, setJustSearched] = useState(false);

  const submitArtistHandler = (searchInput, e) => {
    e.preventDefault();
    fetchArtistHandler(searchInput);
  };

  const fetchArtistHandler = async (artist) => {
    if (artist.length > 0) {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("token_type")} ${
                auth.access_token
              }`,
              // "Bearer BQAvvYzy5kWu8kV3U7zBH5XCvIxBK9Ap3d35K0JstHe6zAb48USZb3SL-womw1-zKmU7mO_147JoHN02EQyTAXb5OlCFylM9Zm3hii5FxfQfgRBG53dG5bwOcnfFcAAI6I2pCtsALXdT0pURin-TkJI",
            },
          }
        );
        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const data = await response.json();
        setArtistInfo(data.artists);
        setJustSearched(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const logInfo = () => {
    console.log(artistInfo);
    console.log(artistInfo.items);
    console.log(artistInfo.items[0].images[0].url);
  };

  const handleLogin = () => {
    window.location = `${process.env.NEXT_PUBLIC_AUTHORIZE_URL}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles["main-body"]}>
      {!auth.access_token && (
        <>
          {/* <Button variant="contained" type="submit" onClick={handleLogin}>
            Connect to spotify
          </Button> */}
          <UnloggedHome></UnloggedHome>
        </>
      )}

      {/* use redux for a login state */}

      {auth.access_token && (
        <>
          {/* <Button onClick={handleLogout} variant="contained" type="submit">
            Logout
          </Button> */}

          {/* use a key to update history everytime state is updated */}

          <SearchBox
            // clicked={clicked}
            submitArtistHandler={submitArtistHandler}
          ></SearchBox>
          {artistInfo && (
            <ArtistSuggestions
              // clickArtistHandler={clickArtistHandler}
              justSearched={justSearched}
              key={Math.random()}
              artists={artistInfo.items}
            ></ArtistSuggestions>
          )}
          {/* <button onClick={logInfo}>log info</button> */}
        </>
      )}
    </div>
  );
};

export default MainBody;
