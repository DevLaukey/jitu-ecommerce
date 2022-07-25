import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profileUpdated: "",
    isAdmin: false,
    email: "",
  },
  reducers: {
    loginUser: (state, { payload}) => {
      state.loggedIn = true;
      state.email = payload;
      console.log(payload)
    },
    logoutUser: (state) => {
      state.loggedIn = false;
    },
    addProfile: (state, { payload }) => {
      state.profileUpdated = payload;
    },
    makeAdmin: (state) => {
      state.isAdmin = true;
    },
  },
});

export const {
  loginUser,
  addProfile,
  makeAdmin,
  logoutUser
} = userSlice.actions;

export default userSlice.reducer;