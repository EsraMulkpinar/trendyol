import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";
import { toast } from "react-toastify";

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

export const checkout = createAsyncThunk("checkout",async (payload) => {
    const {data}= await instance.post("/checkout",payload)
    return data
})


const basketReducer = createSlice({
    name: "basket",
    initialState: {
        basket: null,
        totalBasket: []
    },
    reducers:{
        addToTotalBasket: (state,action) => {
            state.totalBasket.push(current(state.basket).find((basketitem) => basketitem.id === action.payload))
        },
        removeFromTotalBasket: (state,action) => {
            state.totalBasket.splice(current(state.totalBasket).findIndex((basketitem) => basketitem.id === action.payload),1)
        } ,
        increaseItem: (state,action) => {
           const foundItemIndex = current(state.totalBasket).findIndex((basketitem) => action.payload === basketitem.id)
          state.totalBasket[foundItemIndex].quantity++
        },
        decreaseItem: (state,action) => {
            const foundItemIndex = current(state.totalBasket).findIndex((basketitem) => action.payload === basketitem.id)
            if(state.totalBasket[foundItemIndex].quantity < 1){
                state.totalBasket.splice(foundItemIndex,1)
                
            }
            else state.totalBasket[foundItemIndex].quantity--
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(getBasket.fulfilled, (state, action) => {
            state.basket = action.payload
            console.log(action.payload)
        })
        addCase(checkout.fulfilled,() => {
            toast.success("Ödeme Başarılı")
        })
        addCase(checkout.rejected,() => {
            toast.error("Ödeme Başarısız")
        })
    }
})

export const {addToTotalBasket,removeFromTotalBasket,increaseItem,decreaseItem} = basketReducer.actions

export default basketReducer.reducer