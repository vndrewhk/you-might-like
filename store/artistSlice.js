import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  token_type: "Bearer",
  expires_in: 3600,
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    login: (state, action) => {
      state.access_token = action.payload;
    },
    logout: (state) => {
      state.access_token = null;
      //   state.token_type = null;
      //   state.expires_in = null;
    },
    resetAuthState: () => initialState,
  },
});

export const { login, logout, resetAuthState } = artistSlice.actions;

export default artistSlice.reducer;
