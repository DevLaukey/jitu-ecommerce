import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profileUpdated: '',
  },
  reducers: {
    loginUser: (state) => {
      state.loggedIn = true;
    },
    addProfile: (state, {payload}) => {
      state.profileUpdated = payload
    }
  },
});

export const {
  loginUser,
  addProfile
} = userSlice.actions;

export default userSlice.reducer;