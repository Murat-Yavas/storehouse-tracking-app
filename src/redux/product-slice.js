import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], productById: {} };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsByStorehouse: (state, action) => {
      state.products = action.payload;
    },

    getOneProduct: (state, action) => {
      state.productById = action.payload;
    },

    removeOneProduct: (state, action) => {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      console.log(newProducts);
      state.products = newProducts;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
