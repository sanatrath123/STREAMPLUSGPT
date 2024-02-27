import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    UserData: null,
    
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
             
        }
    }
})


export const {login , logout} = AuthSlice.actions

export default AuthSlice.reducer