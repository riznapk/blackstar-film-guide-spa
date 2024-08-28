import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmListSlice from "./filmListSlice";

const rootReducer = combineReducers({
  filmList: filmListSlice,
});

export default configureStore({
  reducer: rootReducer,
});
