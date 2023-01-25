import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { App } from "../../types/app";

interface DataSliceState {
  movies: App.MovieSearchResult[];
  currentMovie: App.Movie | null;
}

const initialState: DataSliceState = {
  movies: [],
  currentMovie: null
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<App.MovieSearchResult[]>) => {
      state.movies = payload;
    },
    setCurrentMovie: (state, { payload }: PayloadAction<App.Movie>) => {
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
