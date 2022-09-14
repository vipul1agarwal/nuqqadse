import { createSlice } from '@reduxjs/toolkit'
import Images from "constants/Images";

const initialState = {
    cartItems: [],
    cartTotal: 0,
}
const addToCart = (state, param) => {
    console.log(param, ' ========')
    let existing = state.cartItems.find(item => item.id === param.payload[0].id )
    if(existing) {
        existing.quantity += 1
        existing.subTotal += existing.price
    } else {
        let item = param.payload[0]
        state.cartItems.push({...item, ...{quantity: 1, subTotal: item.price}})
    }
    state.cartTotal += param.payload[0].price
}

const removeFromCart = (state, param) => {
    state.cartItems.map(item => { if(item.id === param.payload) {
        item.quantity = Math.max(item.quantity-1, 0)
        item.subTotal = Math.max(item.subTotal - item.price, 0)
        state.cartTotal-=item.price
    }})

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart,
        removeFromCart,
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer