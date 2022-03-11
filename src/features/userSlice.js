import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    username: "",
  }

  export const userSlice = createSlice({
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
  export const { loginUser, logoutUser } = userSlice.actions
  
  export default userSlice.reducer
