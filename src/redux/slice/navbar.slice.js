import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "uz",
  sidebar: false,
  top: 0,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setTop: (state, { payload }) => {
      state.top = payload;
    },
    setSidebar: (state, { payload }) => {
      state.sidebar = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage, setTop, setSidebar } = navbarSlice.actions;

export default navbarSlice.reducer;
