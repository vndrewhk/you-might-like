import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  access_token: null,
  token_type: "Bearer",
  expires_in: 3600,
};

const authSlice = createSlice({
  name: "auth",
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
export const { login, logout, resetAuthState } = authSlice.actions;

export default authSlice.reducer;
