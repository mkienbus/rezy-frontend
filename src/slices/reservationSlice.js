import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     reservation: [],
//   }

  export const reservationReducer = createSlice({
    name: 'reservation',
    initialState: { 
        value: []
    },
    reducers: {
        showReservations: (state) => {
            return state
      },
        makeReservation:(state, action) => {
            return [...state, action.payload]
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { showReservations, makeReservation } = reservationReducer.actions
  
  export default reservationReducer.reducer