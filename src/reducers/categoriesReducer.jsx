import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const getCategories = createAsyncThunk("getCategories", async () => {
  console.log("aaaaas")
  const {data} = await instance.get("/categories");
  return data;
} )

const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        categories:null,
    },
    extraReducers: ({addCase}) => {
      addCase(getCategories.fulfilled,(state,action)=>{
        state.categories=action.payload;
        console.log(action.payload);
      })
    }
})
export default categoriesSlice.reducer