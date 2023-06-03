import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const register = createAsyncThunk("register", async (payload) => {
  const { data } = await instance.post("/auth/register", payload);
  return data;
});
export const login = createAsyncThunk("login", async (credentials) => {
  try {
    const { data } = await instance.post("/auth/login", credentials);
    return data;
  } catch (error) {
    throw new Error("Kullanıcı doğrulama hatası");
  }
});
export const logout = createAsyncThunk("logout",async () => {
  const { data } = await instance.get("/auth/logout");
  return data;
})

const authReducer = createSlice({
  name: "auth",
  initialState: {
    registerUser: null,
    loginStatus: "idle",
  },
  extraReducers: ({ addCase }) => {
    addCase(register.fulfilled, (state, action) => {
      state.registerUser = action.payload;
      console.log(action.payload);
    });
    addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
    });
    addCase(logout.fulfilled,() => {
      alert("sadfdg")
      localStorage.removeItem("token")
    })
  },
});

export default authReducer.reducer;
