import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    UserData: null,
  userdatabase: [],
    
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state , action)=>{
       state.status  = true
       state.UserData = action.payload
        },
 
        logout: (state)=>{
            state.status= false
            state.UserData=null
            state.userdatabase = []
             
        }
        ,
        AddUser: (state , action)=>{
            state.userdatabase = action.payload
        }
    }
})


export const {login , logout, AddUser } = AuthSlice.actions

export default AuthSlice.reducer