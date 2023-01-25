import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { App } from "../../types/app";

interface InterfaceSliceState {
  isLoading: boolean;
  error: App.Error | null;
}

const initialState: InterfaceSliceState = {
  isLoading: false,
  error: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }: PayloadAction<App.Error>) => {
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { clearError, setError, setLoading } = interfaceSlice.actions;

export default interfaceSlice.reducer;
