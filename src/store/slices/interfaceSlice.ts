import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InterfaceSliceState {
  isLoading: boolean;
  movieDialogOpen: boolean;
  myPicksDialogOpen: boolean;
  notification: AppTypes.Notification | null;
}

const initialState: InterfaceSliceState = {
  isLoading: false,
  movieDialogOpen: false,
  myPicksDialogOpen: false,
  notification: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setMovieDialogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.movieDialogOpen = payload;
    },
    setMyPicksDialogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.myPicksDialogOpen = payload;
    },
    setNotification: (state, { payload }: PayloadAction<AppTypes.Notification>) => {
      state.notification = payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setLoading, setMovieDialogOpen, setMyPicksDialogOpen, clearNotification, setNotification } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
