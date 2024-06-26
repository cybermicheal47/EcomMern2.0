import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSucess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
