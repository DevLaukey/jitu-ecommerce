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
      if (payload.includes('@tangerinefurn.com')) {
              state.isAdmin = true;

      }
      else{      state.isAdmin = false;
}
    },
    logoutUser: (state) => {
      state.loggedIn = false;
    },
    addProfile: (state, { payload }) => {
      state.profileUpdated = payload;
    },
  
    
  },
});

export const {
  loginUser,
  addProfile,
  logoutUser,
  
} = userSlice.actions;

export default userSlice.reducer;