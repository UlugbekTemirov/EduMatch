import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slice/navbar.slice";

export const store = configureStore({
  reducer: {
    navbar,
  },
  devTools: process.env.NODE_ENV !== "production",
});
