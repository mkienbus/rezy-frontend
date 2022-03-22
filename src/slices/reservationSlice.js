import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     reservation: [],
//   }

  export const reservationReducer = createSlice({
    name: 'reservation',
    initialState: { 
        value: 1
    },
    reducers: {
        showReservations: (state, action) => {
            return action.payload
      },
        makeReservation:(state, action) => {
            return [...state, action.payload]
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { showReservations } = reservationReducer.actions
  
  export default reservationReducer.reducer