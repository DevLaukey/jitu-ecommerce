import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loginUser: (state) => {
      state.loggedIn = true;
    },
  },
});

export const {
    loginUser
} = userSlice.actions;

export default userSlice.reducer;