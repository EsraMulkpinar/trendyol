import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";


export const getFavorites = createAsyncThunk("getFavorites", async () => {
  const { data } = await instance.get("/favorites")
  return data;
})

export const addToFavorites = createAsyncThunk("addToFavorites", async (payload) => {
  const { data } = await instance.post("/favorites",payload)
  return data;
})
export const removeFavorites = createAsyncThunk("removeFavorites",async (payload) => {
  const {data} = await instance.delete("/favorites",payload)
  return data;
})

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: null
  },
  extraReducers: ({ addCase }) => {
    addCase(getFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
      console.log(action.payload);
    })
    
  }
})

export default favoriteSlice.reducer