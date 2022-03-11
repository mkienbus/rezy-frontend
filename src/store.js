import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
})


export default store;

// import { configureStore } from "@reduxjs/toolkit"
// import counterReducer from "./features/counterSlice";

// const store = configureStore({
//     reducer: counterReducer
// })

// export default store