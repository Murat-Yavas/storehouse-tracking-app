import { configureStore } from "@reduxjs/toolkit";
import storehouseSlice from "./storehouse-slice";

export const store = configureStore({
  reducer: { storehouse: storehouseSlice.reducer },
});
