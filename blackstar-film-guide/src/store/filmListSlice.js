import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filmList: [],
  filterFilmList: [],
};
const filmListSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFilmList: (state, action) => {
      state.filmList = action.payload;
    },
    addFilmDetailsToList(state, action) {
      state.filmList = [...state?.filmList, ...action?.payload];
    },
    filterFilmDetailsByTag(state, action) {
      state.filterFilmList = action.payload;
      state.filmList = action.payload;
    },
    clearFilmList(state) {
      state.filmList = [];
    },
  },
});

export const {
  setFilmList,
  addFilmDetailsToList,
  filterFilmDetailsByTag,
  sclearFilmList,
} = filmListSlice.actions;
export default filmListSlice.reducer;
