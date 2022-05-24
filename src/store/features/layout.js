import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: 0,
  darkTheme: 0,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleSidebar, toggleTheme } = layoutSlice.actions;

export default layoutSlice.reducer;
