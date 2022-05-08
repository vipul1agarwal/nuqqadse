import { createSlice } from '@reduxjs/toolkit'
import Images from "constants/Images";

const initialState = [
    { id: 1, title: 'Levi’s Jeans', categoryId: 0, img: Images.chekLeviJens },
]
const addToCart = (state, param) => {
    console.log(' ********')
    console.log(state)
    console.log(' ********')
    console.log(param.payload)
    console.log(' ********')
    state[0].title = 'vipul'
    state.push(param.payload[0])
    console.log(state)
    console.log(' ********')
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart,
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer