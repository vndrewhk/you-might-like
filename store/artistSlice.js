import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artistHistory: [],
  genres: {},
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    addArtist: (state, action) => {
      state.artistHistory = [...state.artistHistory, action.payload];
    },
    addGenres: (state, action) => {
      // let toAdd = action.payload;
      if (state.genres[action.payload] || state.genres[action.payload] == 0) {
        state.genres[action.payload]++;
      } else {
        state.genres[action.payload] = 0;
      }
    },
    resetArtists: (state) => {
      state.artistHistory = [];
      state.genres = {};
    },
  },
});

export const { addArtist, resetArtists, addGenres } = artistSlice.actions;

export default artistSlice.reducer;
