import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genresdata: null,
}

const GenresSlice= createSlice({
    name:"genres",
    initialState,
    reducers:{
AddGenresData:(state, action)=>{
state.genresdata= action.payload;
}
    }
})

export const {AddGenresData}=GenresSlice.actions
export default GenresSlice.reducer