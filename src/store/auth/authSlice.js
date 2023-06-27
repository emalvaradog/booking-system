import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentScreen: "home",
  },
  reducers: {
    setCurrentScreen: (state, { payload }) => {
      state.currentScreen = payload;
    },
  },
});

export const { setCurrentScreen } = authSlice.actions;
