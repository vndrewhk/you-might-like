import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import SearchBox from "../Search/SearchBox";
import ArtistSuggestions from "./ArtistSuggestions";
import styles from "./styling/MainBody.module.css";
import UnloggedHome from "./UnloggedHome";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#7CFB90",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};
const buttonStyle = {
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
};
const MainBody = () => {
  const auth = useSelector((state) => state.auth);
  const [artistInfo, setArtistInfo] = useState();
  const [justSearched, setJustSearched] = useState(false);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <b>IMPORTANT</b>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Due to Spotify API limitations, you <b>MUST</b> login with the
                  following provided developer account.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Email: <b>youmightlike.app@gmail.com</b> Password:
                  <b>youmightlike</b>
                </Typography>
                <Button sx={buttonStyle} onClick={handleClose}>
                  Got it!
                </Button>
              </Box>
            </Modal>
          </div>
          {/* <Button sx={buttonStyle} onClick={handleOpen}>
            Login Info
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
