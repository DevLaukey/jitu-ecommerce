import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import productReducer from "./slices/productReducer";
import userReducer from "./slices/userReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
  },

});
