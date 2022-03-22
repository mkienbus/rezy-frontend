import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const initialState = {
//     restaurants: [],
//   }

  //auto-generates an "API slice" when using createApi()
export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        getAllRestaurants: builder.query({
            query: () => `/restaurants`,
        }),
    }),
})

export const {useGetAllRestaurantsQuery} = restaurantApi

  //createAsyncThunk
//   export const fetchRestaurants = createAsyncThunk(
//     'restaurant list',
//     async () => {
//         console.log("async hit")
//       const response = await (await fetch('/restaurants')).json()
//       console.log(response, 'resplonse')
//       return response
//     }
//   )

//   export const restaurantReducer = createSlice({
//     name: 'restaurants',
//     initialState: initialState,
//     reducers: {
     
//     },
//     extraReducers(builder) {
//         builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
//             state.restaurants =  state.restaurants.concat(action.payload)
//         })
//     }
//   })
  
  // Action creators are generated for each case reducer function
//   export const { createRestaurant } = restaurantReducer.actions

//   export const restaurantList = (state) => state.restaurants
  
//   export default restaurantReducer.reducer