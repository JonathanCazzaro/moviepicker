import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import interfaceReducer from "./slices/interfaceSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    interface: interfaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
