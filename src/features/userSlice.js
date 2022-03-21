import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
  }

  export const userReducer = createSlice({
    name: 'userStatus',
    initialState: initialState,
    reducers: {
      loginUser: (state, action) => {
        state.username = action.payload
      },
      logoutUser: (state) => {
        state = initialState
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginUser, logoutUser } = userReducer.actions
  
  export default userReducer.reducer
