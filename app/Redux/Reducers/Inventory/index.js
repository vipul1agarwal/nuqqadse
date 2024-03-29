import { createSlice } from '@reduxjs/toolkit'
import Images from "constants/Images";

const initialState = {
    selectedCategory: 12,
    selectedShop: 0,
    shopListMap: {
        1: { id: 1, title: 'Iyer South Indian Food', img: Images.shop1 },
        2: { id: 2, title: 'Shyaam Juice Corner', img: Images.shop2 },
        3: { id: 3, title: 'Lovely Sweets', img: Images.shop3 },
        4: { id: 4, title: 'Chaman Vegetables', img: Images.shop4 },
        5: { id: 5, title: 'Lalaji Kirana', img: Images.shop5 },
        6: { id: 6, title: 'Chameli Ki Chakki', img: Images.shop6 },
    },
    shopCategoriesMap: {
        1: [{ id: 11, title: 'promotions', img: Images.cat1 },
        { id: 12, title: 'idlis', img: Images.cat2 },
        { id: 13, title: 'dosas', img: Images.cat3 },
        { id: 14, title: 'utthapams', img: Images.cat4 },
        { id: 15, title: 'beverages', img: Images.shop2 },],
    },
    shopCategoryItemsMap: { 12: [{ id: 111, title: 'Plain Idli', img: Images.cat2, price: 10 },
    { id: 112, title: 'Podi idli', img: Images.cat2, price: 10 },
    { id: 113, title: 'sambar idli', img: Images.cat2, price: 10 },
    { id: 114, title: 'idli munchurian', img: Images.cat2, price: 10 },
    { id: 115, title: 'idli chaat', img: Images.cat2, price: 10 },
    { id: 116, title: 'bhasad idli', img: Images.cat2, price: 10 },
    { id: 117, title: 'lassan idli', img: Images.cat2, price: 10 },
    { id: 118, title: 'l**da idli', img: Images.cat2, price: 10 },
], 
13: [{ id: 119, title: 'Plain Dosa', img: Images.cat3, price: 10 },
    { id: 120, title: 'Podi Dosa', img: Images.cat3, price: 10 },
    { id: 121, title: 'Onion Dosa', img: Images.cat3, price: 10 },
    { id: 122, title: 'Masala Dosa', img: Images.cat3, price: 10 },
    { id: 123, title: 'Onion Masala Dosa', img: Images.cat3, price: 10 },
    { id: 124, title: 'bhasad Dosa', img: Images.cat3, price: 10},
    { id: 125, title: 'lassan Dosa', img: Images.cat3, price: 10 },
    { id: 126, title: 'l**da Dosa', img: Images.cat3, price: 10 },
],
14: [{ id: 127, title: 'Plain Utthapam', img: Images.cat4, price: 10 },
    { id: 128, title: 'Podi Utthapam', img: Images.cat4, price: 10 },
    { id: 129, title: 'Onion Utthapam', img: Images.cat4, price: 10 },
    { id: 130, title: 'Masala Utthapam', img: Images.cat4, price: 10 },
    { id: 131, title: 'Onion Masala Utthapam', img: Images.cat4, price: 10 },
    { id: 132, title: 'bhasad Utthapam', img: Images.cat4, price: 10 },
    { id: 133, title: 'lassan Utthapam', img: Images.cat4, price: 10 },
    { id: 134, title: 'l**da Utthapam', img: Images.cat4, price: 10 },
],
},
}

const fetchLatestInventory = (state) => {
    state = state
}

const setSelectedShop = (state, param) => {
    state.selectedShop = param.payload
}

const setSelectedCategory = (state, param) => {
    state.selectedCategory = param.payload
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        fetchLatestInventory,
        setSelectedShop,
        setSelectedCategory,
    }
})

export const inventoryActions = inventorySlice.actions
export default inventorySlice.reducer