import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./events/eventSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    events: eventSlice.reducer,
  },
});
