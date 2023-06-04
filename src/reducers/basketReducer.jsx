import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const addToBasket = createAsyncThunk("addToBasket", async (product_id) => {
    const { data } = await instance.post("/basket", { product_id })
    return data
})

export const getBasket = createAsyncThunk("getBasket", async () => {
    const { data } = await instance.get("/basket")
    return data
})

export const removeFromBasket = createAsyncThunk("removeFromBasket", async (id) => {
    const { data } = await instance.delete(`/basket/${id}`)
    return data
})

export const decreaseQuantity = createAsyncThunk("decreaseQuantity",async (product_id) => {
  const {data}= await instance.post("/basket/decrease",{product_id})
  return data
})


const basketReducer = createSlice({
    name: "basket",
    initialState: {
        basket: null,
        totalBasket: []
    },
    reducers:{
        setActive: (state,action) => {
            state.totalBasket.push(current(state.basket).find((basketitem) => basketitem.id === action.payload))
        },
        setNotActive: (state,action) => {
            state.totalBasket.splice(current(state.totalBasket).findIndex((basketitem) => basketitem.id === action.payload),1)
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(getBasket.fulfilled, (state, action) => {
            state.basket = action.payload
            console.log(action.payload)
        })
    }
})

export const {setActive,setNotActive} = basketReducer.actions

export default basketReducer.reducer