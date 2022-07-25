import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		categories: [],
		product: [],
		searchQuery: null,
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
	},
});

export const { searchQuery, loadProducts, loadCategories, getProduct } = productSlice.actions;

export default productSlice.reducer;
