import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storehouses: [],
  singleStorehouse: {},
  showStorehouseModal: false,
};

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

    createOneStorehouse: (state, action) => {
      state.storehouses.push(action.payload);
    },

    toggleShowStorehouseModal: (state) => {
      state.showStorehouseModal = true;
    },
    toggleHideStorehouseModal: (state) => {
      state.showStorehouseModal = false;
    },
  },
});

export const storehouseActions = storehouseSlice.actions;
export default storehouseSlice;
