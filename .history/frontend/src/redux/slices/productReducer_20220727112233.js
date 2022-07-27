import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    product: [],
    searchQuery: null,
    count: 0
  },
  reducers: {
    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProduct: (state, action) => {
      state.categories = action.payload;
    },
    updateProductCount: (state, { payload }) => {
      state.count = payload;
    },
  },
});

export const { searchQuery, loadProducts, loadCategories, getProduct, updateProductCount } = productSlice.actions;

export default productSlice.reducer;