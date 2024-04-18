import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productById: {},
  showProductModal: false,
  isProductLoading: false,
  isProductError: false,
};

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

      state.products = newProducts;
    },

    createOneProduct: (state, action) => {
      state.products.push(action.payload);
    },

    toggleShowProductModal: (state) => {
      state.showProductModal = true;
    },

    toggleHideProductModal: (state) => {
      state.showProductModal = false;
    },

    toggleIsLoading: (state, action) => {
      state.isProductLoading = action.payload;
    },

    toggleIsError: (state, action) => {
      state.isProductError = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
