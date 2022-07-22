import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    searchQuery: null,
  },
  reducers: {
    searchQuery: (state, {payload}) => {
      state.searchQuery = payload;
    }
  },
});

export const {searchQuery } =
  productSlice.actions;

export default productSlice.reducer;
