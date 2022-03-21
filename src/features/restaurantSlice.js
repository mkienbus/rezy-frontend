import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurants: [],
  }

  //createAsyncThunk
  export const fetchRestaurants = createAsyncThunk(
    'restaurant list',
    async () => {
        console.log("async hit")
      const response = await (await fetch('/restaurants')).json()
      console.log(response, 'resplonse')
      return response
    }
  )

  export const restaurantReducer = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
     
    },
    extraReducers(builder) {
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.restaurants =  state.restaurants.concat(action.payload)
        })
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { createRestaurant } = restaurantReducer.actions

  export const restaurantList = (state) => state.restaurants
  
  export default restaurantReducer.reducer
