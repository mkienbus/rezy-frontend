import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    username: "mkienbus",
  }

  export const userReducer = createSlice({
    name: 'userStatus',
    initialState: initialState,
    reducers: {
      loginUser: (state) => {
          return state = state.username
      },
      logoutUser: (state) => {
        return state = initialState
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginUser, logoutUser } = userReducer.actions
  
  export default userReducer.reducer
