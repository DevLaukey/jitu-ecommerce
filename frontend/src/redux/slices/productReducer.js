import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		categories: [],
		searchQuery: null,
	},
	reducers: {
		searchQuery: (state, { payload }) => {
			state.searchQuery = payload;
		},
		loadProducts: (state, action) => {
			state.products = action.payload;
		},
		loadCategories: (state, action) => {
			state.categories = action.payload;
		},
	},
});

export const { searchQuery, loadProducts, loadCategories } = productSlice.actions;

export default productSlice.reducer;
