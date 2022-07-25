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
    removeAdmin: (state) => {
      state.isAdmin = false;
    }
  },
});

export const {
  loginUser,
  addProfile,
  makeAdmin,
  logoutUser,
  removeAdmin
} = userSlice.actions;

export default userSlice.reducer;