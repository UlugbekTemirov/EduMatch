import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lc: "",
  category: "",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setLC: (state, { payload }) => {
      state.lc = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLC, setCategory } = navbarSlice.actions;

export default navbarSlice.reducer;
