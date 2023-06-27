import { configureStore } from "@reduxjs/toolkit";
import { meetingSlice } from "./meetings/meetingSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    meeting: meetingSlice.reducer,
  },
});
