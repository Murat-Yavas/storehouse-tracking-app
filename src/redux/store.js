import { configureStore } from "@reduxjs/toolkit";
import storehouseSlice from "./storehouse-slice";
import productSlice from "./product-slice";

export const store = configureStore({
  reducer: {
    storehouse: storehouseSlice.reducer,
    product: productSlice.reducer,
  },
});
