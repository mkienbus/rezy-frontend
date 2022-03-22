import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//import { userReducer } from './features/userSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { restaurantApi } from "./features/restaurantSlice";

// const rootReducer = combineReducers({
//     //user: userReducer,
//     restaurants: restaurantReducer
// })

const store = configureStore({
    //reducer: rootReducer,
    reducer: {
        [restaurantApi.reducerPath] : restaurantApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
    
})


export default store;