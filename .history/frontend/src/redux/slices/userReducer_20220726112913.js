import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profileUpdated: "",
    isAdmin: false,
    email: "",
    count: 0,
  },
  reducers: {
    loginUser: (state, { payload }) => {
      state.loggedIn = true;
      state.email = payload;
      if (payload.includes("@tangerinefurn.com")) {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    logoutUser: (state) => {
      state.loggedIn = false;
    },
    addProfile: (state, { payload }) => {
      state.profileUpdated = payload;
    },
    updateCount: (state, { payload }) => {
      state.count = payload;
    }
  },
});

export const { loginUser, addProfile, logoutUser, updateCount } = userSlice.actions;

export default userSlice.reducer;
