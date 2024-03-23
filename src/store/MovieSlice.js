import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Nowplayingmovies: null,
    Moviedata: null,
    Trailerid: null,
    Toprated:null,
    FavoriteList: [],
    // movie id what is opening in its own page
    Movies: {name:[] , info:null},
    TrendingMovies: null,
    UpcomingMovies:null,
    
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
     const disData = action.payload
     const isAllready = state.FavoriteList.some((movie)=> movie.id === disData.id)
      if(!isAllready){
        state.FavoriteList.push(action.payload)
      }
      //console.log(state.FavoriteList)
    },

    DeleteFavorite: (state ,action)=>{
    
      state.FavoriteList = action.payload
    },
    DeleteAllFavorite: (state )=>{
      console.log("in delete all")
      state.FavoriteList = []
    },

   AddSearchMovie: (state,action)=>{
    state.Movies.name = action.payload
   },
  
   AddSearchMovieinfo: (state, action)=>{
    state.Movies.info = action.payload
   },

   AddTrendingMovies: (state, action)=>{
    state.TrendingMovies = action.payload
   }
,
   AddUpcomingMovies:(state , action)=>{
state.UpcomingMovies= action.payload
   }

  }

})

export const  {AddNowplaying,AddMovieData,AddTrailerid , AddToprated,AddFavoriteList , AddSearchMovie , AddSearchMovieinfo,DeleteFavorite, AddTrendingMovies,DeleteAllFavorite,AddUpcomingMovies} = MovieSlice.actions 
export default MovieSlice.reducer