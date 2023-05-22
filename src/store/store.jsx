import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../reducers/categoriesReducer'
import merchantsReducer from '../reducers/merchantsReducer'
import productsReducer from '../reducers/productsReducer'
import authReducer from '../reducers/authReducer'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
    merchants:merchantsReducer,
    products:productsReducer,
    auth:authReducer
  },
})