//import here all Redux file 
import { configureStore } from '@reduxjs/toolkit';
import Cart from './Cart';
import Inventory from './Inventory';

export const store = configureStore({
    reducer: {
        Cart,
        Inventory,
    }
});