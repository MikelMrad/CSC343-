import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  value:{
    isLoggedIn: false,
    username: "",
    email:  "", 
    birthday:  "", 
    uid:  "", 
  }
}

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_, action) => {
      return {
        value:{
          isLoggedIn:true,
          username: action.payload.username,
          email: action.payload.email,
          birthday: action.payload.birthday,
          uid: action.payload.email + action.payload.birthday,
        }
      }
    },
  }
})

export const {logOut, logIn} = login.actions;
export default login.reducer;