import { createSlice } from "@reduxjs/toolkit";

const initialState = { storehouses: [], singleStorehouse: {} };

const storehouseSlice = createSlice({
  name: "storehouse",
  initialState,
  reducers: {
    getAllStorehouses: (state, action) => {
      state.storehouses = action.payload;
    },

    removeOneStorehouse: (state, action) => {
      const newStorehouses = state.storehouses.filter(
        (house) => house.id !== action.payload
      );
      state.storehouses = newStorehouses;
    },

    getOneStorehouse: (state, action) => {
      state.singleStorehouse = action.payload;
    },
  },
});

export const storehouseActions = storehouseSlice.actions;
export default storehouseSlice;
