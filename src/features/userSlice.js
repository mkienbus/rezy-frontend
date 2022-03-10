import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
  }

  export const user = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      loginUser: (state) => {
        state = state.username
      },
      logoutUser: (state) => {
        state = initialState
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginUser, logoutUser } = userSlice.actions
  
  export default userSlice.reducer
