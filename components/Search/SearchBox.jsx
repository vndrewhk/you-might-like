import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import AutocompleteChoices from "./AutocompleteChoices";
import { FormControl } from "@mui/material";
import { useRef } from "react";

const SearchBox = (props) => {
  const searchInput = useRef(null);
  const submitArtistHandler = props.submitArtistHandler;

  return (
    <div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <form onSubmit={submitArtistHandler.bind(null, searchInput)}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={AutocompleteChoices.map((option) => option.title)}
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
