import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../reducers/categoriesReducer'
import merchantsReducer from '../reducers/merchantsReducer'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
    merchants:merchantsReducer
  },
})