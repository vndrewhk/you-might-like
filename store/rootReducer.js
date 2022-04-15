import { combineReducers } from "redux";

import authReducer from "./authSlice";
import artistsReducer from "./artistSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  artists: artistsReducer,
});

export default rootReducer;
