import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artistHistory: [],
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    addArtist: (state, action) => {
      state.artistHistory = [...state.artistHistory, action.payload];
    },
    resetArtists: (state) => {
      state.artistHistory = [];
    },
  },
});

export const { addArtist, resetArtists } = artistSlice.actions;

export default artistSlice.reducer;
