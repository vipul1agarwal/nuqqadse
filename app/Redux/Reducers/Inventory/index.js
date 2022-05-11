import { createSlice } from '@reduxjs/toolkit'
import Images from "constants/Images";

const initialState = {
    shopListMap: {
        1: { id: 1, title: 'Iyer South Indian Food', img: Images.shop1 },
        2: { id: 2, title: 'Shyaam Juice Corner', img: Images.shop2 },
        3: { id: 3, title: 'Lovely Sweets', img: Images.shop3 },
        4: { id: 4, title: 'Chaman Vegetables', img: Images.shop4 },
        5: { id: 5, title: 'Lalaji Kirana', img: Images.shop5 },
        6: { id: 6, title: 'Chameli Ki Chakki', img: Images.shop6 },
    },
    shopCategoriesMap: {1: [{ categoryId: 11, title: 'Chaman Mithai', img: Images.shop2 },],},
    shopCategoryItemsMap: {11: [{ itemId: 111, title: 'Chaman Halwa', img: Images.chekLeviJens },],},
}

const fetchLatestInventory = (state) => {
    state = state
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        fetchLatestInventory,
    }
})

export const inventoryActions = inventorySlice.actions
export default inventorySlice.reducer