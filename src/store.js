import { configureStore } from "@reduxjs/toolkit";
import { restaurantReducer } from "./features/restaurantSlice";
import { userReducer } from './features/userSlice';

const store = configureStore({
    reducer: userReducer,
    reducer: restaurantReducer
})


export default store;