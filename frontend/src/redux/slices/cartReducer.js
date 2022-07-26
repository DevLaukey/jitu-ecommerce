import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
		favorites: [],
		checkout: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart = [{ ...action.payload, quantity: 1 }, ...state.cart];
		},
		addItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.productID === action.payload) item.quantity++;
				return item;
			});
			state.cart = newCart;
		},
		minusItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.productID === action.payload) item.quantity--;
				return item;
			});
			state.cart = newCart;
		},
		removeFromCart: (state, action) => {
			const newCart = state.cart.filter((item) => item.productID !== action.payload);
			state.cart = newCart;
		},
		clearCart: (state) => {
			state.cart = [];
		},
		addToFavorite: (state, action) => {
			state.favorites = [action.payload, ...state.favorites];
		},
		removeFromFavorite: (state, action) => {
			const newItems = state.favorites.filter((item) => item.productID !== action.payload);
			state.favorites = newItems;
		},
		addToCheckout: (state, action) => {
			state.checkout = [...state.checkout, action.payload];
		},
	},
});

export const {
	addToCart,
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
	clearCart,
	addToFavorite,
	removeFromFavorite,
	addToCheckout,
} = cartSlice.actions;

export default cartSlice.reducer;
