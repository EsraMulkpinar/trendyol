import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const { data } = await instance.get("/product");
  return data;
});

export const getFilterProducts = createAsyncThunk(
  "getFilterProducts",
  async (name) => {
    const { data } = await instance.get(`/product`, { params: { name } });
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    filterProducts: [],
    loading: false,
    error: null,
  },
  extraReducers: ({ addCase }) => {
    addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    });
    addCase(getFilterProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(getFilterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.filterProducts = action.payload;
    });
    addCase(getFilterProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default productSlice.reducer;
