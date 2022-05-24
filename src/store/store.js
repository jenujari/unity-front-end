import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter'
import layoutReducer from './features/layout'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
});