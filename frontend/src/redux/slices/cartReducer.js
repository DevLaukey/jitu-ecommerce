import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    cartAdded: false,
    bookmarkCount: 0,
    itemsCount: 0,
  },
  reducers: {
    itemsCountAdd: (state) => {
      state.itemsCount++;
    },
	  itemsCountRemove: (state) => {
     state.itemsCount >0 && state.itemsCount--;
    },
    addToCart: (state) => {
      state.cartAdded = true;
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addBookmark: (state) => {
      state.bookmarkCount++;
    },
    removeBookmark: (state) => {
      state.bookmarkCount--;
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  addBookmark,
  removeBookmark,
  itemsCountAdd,
  itemsCountRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
