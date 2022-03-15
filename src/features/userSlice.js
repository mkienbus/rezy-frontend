import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
  function createAsyncThunk(){
  // 'users/fetchByIdStatus',
  // async (userId, thunkAPI) => {
  //   const response = await userAPI.fetchById(userId)
  //   return response.data
  // }

    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((loginUser(r)));
      }
    })}

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
