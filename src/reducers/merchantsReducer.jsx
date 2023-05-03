import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const getMerchants = createAsyncThunk("getMerchants", async () => {
  const {data} = await instance.get("/merchant");
  console.log(data);
  return data;
} )

const merchantSlice = createSlice({
    name:"merchants",
    initialState:{
      merchants:null,
    },
    extraReducers: ({addCase}) => {
      addCase(getMerchants.fulfilled,(state,action)=>{
        state.merchants=action.payload;
        console.log(action.payload);
      })
    }
})
export default merchantSlice.reducer