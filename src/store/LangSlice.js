import { createSlice } from "@reduxjs/toolkit";


const initialState = {

lang: "English",
}

const LangSlice = createSlice({
    name: "Lang",
    initialState,

    reducers: {
 changeLang: (state, action)=>{
state.lang = action.payload

}

    }
})


export  const  { changeLang} = LangSlice.actions 
export default LangSlice.reducer