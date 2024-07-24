import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice // Add the counter reducer to the store
  },
})