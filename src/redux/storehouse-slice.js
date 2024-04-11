import { createSlice } from "@reduxjs/toolkit";

const initialState = { storehouses: [] };

const storehouseSlice = createSlice({
  name: "storehouse",
  initialState,
  reducers: {
    getAllStorehouses: (state, action) => {
      state.storehouses = action.payload;
    },
  },
});

export const storehouseActions = storehouseSlice.actions;
export default storehouseSlice;
