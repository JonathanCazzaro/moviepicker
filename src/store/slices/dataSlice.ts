import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppTypes } from "../../types/app";

interface DataSliceState {
  movies: AppTypes.MovieSearchResult[];
  currentMovie: AppTypes.Movie | null;
}

const initialState: DataSliceState = {
  movies: [],
  currentMovie: null
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<AppTypes.MovieSearchResult[]>) => {
      state.movies = payload;
    },
    setCurrentMovie: (state, { payload }: PayloadAction<AppTypes.Movie>) => {
      state.currentMovie = payload;
    },
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    }
  },
});

export const {
  clearCurrentMovie,
  setCurrentMovie,
  setMovies,
} = dataSlice.actions;

export default dataSlice.reducer;
