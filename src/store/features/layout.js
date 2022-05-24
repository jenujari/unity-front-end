import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: 0,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar :(state) => {
      state.sidebar = !state.sidebar;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleSidebar } = layoutSlice.actions

export default layoutSlice.reducer