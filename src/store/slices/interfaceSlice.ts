import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InterfaceSliceState {
  isLoading: boolean;
  movieDialogOpen: boolean;
  success: boolean;
  successMessage: string;
  error: boolean;
  errorMessage: string;
}

const initialState: InterfaceSliceState = {
  isLoading: false,
  movieDialogOpen: false,
  success: false,
  successMessage: "",
  error: false,
  errorMessage: "",
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
    setSuccess: (state, { payload }: PayloadAction<string | false>) => {
      if (typeof payload === "string") {
        state.success = true;
        state.successMessage = payload;
      } else {
        state.success = payload;
        state.successMessage = "";
      }
    },
    setError: (state, { payload }: PayloadAction<string | false>) => {
      if (typeof payload === "string") {
        state.error = true;
        state.errorMessage = payload;
      } else {
        state.error = payload;
        state.errorMessage = "";
      }
    },
  },
});

export const { setError, setLoading, setSuccess, setMovieDialogOpen } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
