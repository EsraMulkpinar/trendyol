import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";


export const getProducts = createAsyncThunk("getProducts",async() => {
 const {data}  = await instance.get("/product")
 return data
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        products:null
    },
    extraReducers: ({addCase}) => {
      addCase(getProducts.fulfilled,(state,action) => {
        state.products=action.payload
        console.log(action.payload);
      })
    }
})
export default productSlice.reducer