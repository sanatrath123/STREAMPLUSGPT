import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Nowplayingmovies: null,
    Moviedata: null,
    Trailerid: null,
    Toprated:null,
    
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
     
      state.Trailerid = action.payload
    },

    AddToprated:(state, action)=>{
      state.Toprated = action.payload
    }

  
  }

})

export const  {AddNowplaying,AddMovieData,AddTrailerid , AddToprated} = MovieSlice.actions 
export default MovieSlice.reducer