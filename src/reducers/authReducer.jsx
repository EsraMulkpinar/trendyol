import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const register = createAsyncThunk("register", async (payload) => {
    const { data } = await instance.post("/auth/register", payload)
    return data
})
export const login = createAsyncThunk('login', async (credentials) => {
    try {
        const response = await instance.post('/auth/login', credentials);
        const registerUser = response.data; // API'den gelen kullanıcı verisi
        if (registerUser.email === credentials.email && registerUser.password === credentials.password) {
            return registerUser; // Kullanıcı doğrulandı
        } else {
            throw new Error('Kullanıcı doğrulama hatası');
        }
    } catch (error) {
        throw new Error('Kullanıcı doğrulama hatası');
    }
});

const authReducer = createSlice({
    name: "auth",
    initialState: {
        registerUser: null,
        loginUser: null,
        isAuthenticated: false,
        loginStatus: 'idle',
    },
    // reducers: {
    //     logout(state) {
    //       state.registerUser = null;
    //       state.isAuthenticated = false;
    //     },
    //   },
    extraReducers: ({ addCase }) => {
        addCase(register.fulfilled, (state, action) => {
            state.registerUser = action.payload
            console.log(action.payload);
        })
        addCase(login.pending, (state) => {
            state.loginStatus = 'loading';
            state.error = null;
        })
        addCase(login.fulfilled, (state, action) => {
            state.loginStatus = 'succeseded';
            state.error = null;
            state.registerUser = action.payload;
        })
        addCase(login.rejected, (state, action) => {
            state.loginStatus = 'failed';
            state.error = action.error.message;
            state.registerUser = null;
        });
    }
})

export default authReducer.reducer