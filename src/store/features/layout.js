import { createSlice } from "@reduxjs/toolkit";
import get from "lodash/get";
const initialState = {
  sidebar: 0,
  profileBar: 0,
  darkTheme: 0,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar = get(action, "payload", !state.sidebar);
    },
    toggleProfileBar: (state, action) => {
      state.profileBar = get(action, "payload", !state.profileBar);
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleSidebar, toggleTheme, toggleProfileBar } =
  layoutSlice.actions;

export default layoutSlice.reducer;
