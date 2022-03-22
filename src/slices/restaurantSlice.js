import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


  //auto-generates an "API slice" when using createApi()
    //in this case, useGetAllRestaurantsQuery
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