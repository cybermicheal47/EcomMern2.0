import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    isLoading: false,
    error: false,
  },

  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },

    registerSuccess: (state) => {
      state.isLoading = false;
    },

    registerFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registrationSlice.actions;

export default registrationSlice.reducer;
