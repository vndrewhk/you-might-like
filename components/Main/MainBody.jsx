import { Button } from "@mui/material";
import { useState } from "react";
import SearchBox from "../Search/SearchBox";
import ArtistSuggestions from "./ArtistSuggestions";

const MainBody = () => {
  const [artistInfo, setArtistInfo] = useState();
  const submitArtistHandler = (searchInput, e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(searchInput.current.value);
    fetchArtistHandler(searchInput);

    console.log("hi");
  };

  const fetchArtistHandler = async (artist) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
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
      setArtistInfo(data.artists);
    } catch (err) {
      console.log(err);
    }
  };

  const logInfo = () => {
    console.log(artistInfo);
    console.log(artistInfo.items);
    console.log(artistInfo.items[0].images[0].url)
  };

  const handleLogin = () => {
    window.location = `${process.env.NEXT_PUBLIC_AUTHORIZE_URL}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="main-body">
      <Button variant="contained" type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
      <SearchBox submitArtistHandler={submitArtistHandler}></SearchBox>
      {artistInfo && (
        <ArtistSuggestions
          key={Math.random()}
          artists={artistInfo.items}
        ></ArtistSuggestions>
      )}
      <button onClick={logInfo}>log info</button>
    </div>
  );
};

export default MainBody;
