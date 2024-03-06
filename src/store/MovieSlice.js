import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Nowplayingmovies: null,
    Moviedata: null,
    Trailerid: null,
    Toprated:null,
    FavoriteList: [],
    // movie id what is opening in its own page
    MovieId: {id:null , info:{}},
    
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
   
   AddMovieId: (state,action)=>{
    state.MovieId.id = action.payload
   },

   AddIndivisualMovieData: (state, action)=>{
    state.MovieId.info = action.payload
   }
  
  }

})

export const  {AddNowplaying,AddMovieData,AddTrailerid , AddToprated,AddFavoriteList , AddMovieId,AddIndivisualMovieData} = MovieSlice.actions 
export default MovieSlice.reducer