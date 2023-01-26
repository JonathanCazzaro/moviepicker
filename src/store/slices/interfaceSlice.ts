import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppTypes } from "../../types/app";

interface InterfaceSliceState {
  isLoading: boolean;
  error: AppTypes.Error | null;
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
    setError: (state, { payload }: PayloadAction<AppTypes.Error>) => {
      state.error = payload;
    },
    clearError: (state) => {
      if (state.error) state.error = null;
    },
  },
});

export const { clearError, setError, setLoading } = interfaceSlice.actions;

export default interfaceSlice.reducer;
