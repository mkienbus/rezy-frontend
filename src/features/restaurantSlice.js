import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurants: [],
  }

  export const restaurantReducer = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
      createRestaurant: (state, action) => {
        state.name = action.payload
        state.address = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { createRestaurant } = restaurantReducer.actions
  
  export default restaurantReducer.reducer
