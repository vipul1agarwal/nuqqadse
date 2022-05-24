import { createSlice } from '@reduxjs/toolkit'
import Images from "constants/Images";

const initialState = {
    selectedCategory: 0,
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
    shopCategoryItemsMap: { 12: [{ id: 111, title: 'Plain Idli', img: Images.cat2 },
    { id: 112, title: 'Podi idli', img: Images.cat2 },
    { id: 113, title: 'sambar idli', img: Images.cat2 },
    { id: 114, title: 'idli munchurian', img: Images.cat2 },
    { id: 115, title: 'idli chaat', img: Images.cat2 },
    { id: 116, title: 'bhasad idli', img: Images.cat2 },
    { id: 117, title: 'lassan idli', img: Images.cat2 },
    { id: 118, title: 'l**da idli', img: Images.cat2 },
], },
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