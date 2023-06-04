import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const getCategories = createAsyncThunk("getCategories", async () => {
  console.log("aaaaas")
  const {data} = await instance.get("/category");
  return data;
} )

export const getCategoryById = createAsyncThunk("getCategoryById", async (id,{rejectWithValue}) => {
  const {data} = await instance.get(`/category/${id}`);
  console.log(data);
  return data;
} )
const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        categories:null,
        currentCategory:null
    },
    extraReducers: ({addCase}) => {
      addCase(getCategories.fulfilled,(state,action)=>{
        state.categories=action.payload;
        console.log(action.payload);
      })
      addCase(getCategoryById.pending, (state) => {
        state.currentCategory = null
      })
      addCase(getCategoryById.fulfilled,(state,action) => {
        state.currentCategory = action.payload
      })
    }
})
export default categoriesSlice.reducer