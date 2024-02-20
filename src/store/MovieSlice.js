import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Nowplayingmovies: null,
    Moviedata: null,
    Trailerid: null,
    
}

const MovieSlice = createSlice({
  name:"movies",
  initialState,

  reducers:{
    AddNowplaying:(state, action)=>{
        state.Nowplayingmovies = action.payload
       },

    AddMovieData:(state,action)=>{
      state.Moviedata= action.payload
    
    },

    AddTrailerid:(state,action)=>{
      console.log("data is coming to store", action.payload)
      state.Trailerid = action.payload
    }

  
  }

})

export const  {AddNowplaying,AddMovieData,AddTrailerid} = MovieSlice.actions 
export default MovieSlice.reducer