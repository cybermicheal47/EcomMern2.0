import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isfetching: false,
    error: false,
  },
  reducers: {
    //Get all products
    getProductStart: (state) => {
      state.isfetching = true;
      state.error = false;
    },
    getProductSucess: (state, action) => {
      state.isfetching = false;
      state.products = action.payload;
    },
    getProductFail: (state, action) => {
      state.isfetching = false;
      state.error = true;
    },

    //Delete products
    deleteProductStart: (state) => {
      state.isfetching = true;
      state.error = false;
    },
    deleteProductSucess: (state, action) => {
      state.isfetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
    deleteProductFail: (state, action) => {
      state.isfetching = false;
      state.error = true;
    },

    //UPDATE Products
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD Product
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSucess,
  getProductFail,
  deleteProductSucess,
  deleteProductFail,
  deleteProductStart,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
