import { combineReducers } from "redux";

import authReducer from "./authSlice";
import artistsReducer from "./authSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  artists: artistsReducer,
});

export default rootReducer;
