import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Nowplayingmovies: null,
    Moviedata: null,
    Trailerid: null,
    Toprated:null,
    FavoriteList: [],
    // movie id what is opening in its own page
    Movies: {name:[] , info:null},
    
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
    },

    AddFavoriteList: (state, action)=>{
      state.FavoriteList.push(action.payload)
    },
   
   AddSearchMovie: (state,action)=>{
    state.Movies.name = action.payload
   },
  
   AddSearchMovieinfo: (state, action)=>{
    state.Movies.info = action.payload
   }
  }

})

export const  {AddNowplaying,AddMovieData,AddTrailerid , AddToprated,AddFavoriteList , AddSearchMovie , AddSearchMovieinfo} = MovieSlice.actions 
export default MovieSlice.reducer