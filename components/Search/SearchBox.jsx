import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ArtistAutoComplete from "./ArtistAutoComplete";
import { useRef } from "react";

const SearchBox = (props) => {
  const searchInput = useRef(null);
  const submitArtistHandler = props.submitArtistHandler;
  const submitHandler = (e) => {
    submitArtistHandler(searchInput.current.value, e);
    // searchInput.current.value = "";
  };

  return (
    <div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <form onSubmit={submitHandler}>
          <Autocomplete
            // key={Math.random()}
            freeSolo
            id="free-solo-2-demo"
            // disableClearable
            options={ArtistAutoComplete.map((option) => option.artist)}
            renderInput={(params) => (
              <TextField
                inputRef={searchInput}
                {...params}
                label="Search Artist..."
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </form>
      </Stack>
    </div>
  );
};

export default SearchBox;
