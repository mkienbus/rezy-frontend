import { configureStore } from "@reduxjs/toolkit";
import { restaurantReducer } from "./features/restaurantSlice";
import { userReducer } from './features/userSlice';

const store = configureStore({
    reducer: userReducer, restaurantReducer
})


export default store;