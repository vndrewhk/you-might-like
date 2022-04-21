import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ArtistAutoComplete from "./ArtistAutoComplete";
import { useRef, useState } from "react";

import styles from "./styling/Searchbox.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { pink } from "@mui/material/colors";

const SearchBox = (props) => {
  const searchInput = useRef(null);
  const [touched, setTouched] = useState(false);
  const submitArtistHandler = props.submitArtistHandler;
  // maybe do it onchange so its better for user
  const submitHandler = (e) => {
    setTouched(true);
    e.preventDefault();
    submitArtistHandler(searchInput.current.value, e);
    // searchInput.current.value = "";
  };

  // textfield styling

  return (
    <div className={styles["search-box-container"]}>
      <Stack spacing={2} sx={{ width: 300 }}>
        <form onChange={submitHandler} onSubmit={submitHandler}>
          <Autocomplete
            // key={Math.random()}
            freeSolo
            id="free-solo-2-demo"
            // disableClearable
            options={ArtistAutoComplete.map((option) => option.artist)}
            renderInput={(params) => (
              <TextField
                inputRef={searchInput}
                variant="outlined"
                color="success"
                {...params}
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  backgroundColor: "#9bc99b",

                  borderRadius: 5,
                  // borderColor: "white"
                  // border: "1px solid white",
                }}
                label="Artists.."
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  startAdornment: (
                    // <InputAdornment position="start">
                    <SearchIcon color="secondary" sx={{ color: pink[500] }} />
                    // </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </form>
        {!touched && <div>Start typing to see some artists!</div>}
      </Stack>
    </div>
  );
};

export default SearchBox;
