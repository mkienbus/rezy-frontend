import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//import { userReducer } from './features/userSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { restaurantApi } from "./slices/restaurantSlice";
import { reservationReducer } from "./slices/reservationSlice";

// const rootReducer = combineReducers({

// })

const store = configureStore({
    //reducer: rootReducer,
    reducer: {
        [restaurantApi.reducerPath] : restaurantApi.reducer,
        reservation: reservationReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
    
})


export default store;