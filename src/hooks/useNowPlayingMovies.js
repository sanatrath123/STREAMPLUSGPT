import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddMovieData } from "../store/MovieSlice";


const useNowPlayingMovie = () => {
    
const dispatch = useDispatch()
const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
const GetMovie =  async ()=>{

    const data = await fetch(`https://api.themoviedb.org/3/movie/${NowPlaying?.[1]?.id}?api_key=643250af56da02a2e2f608e90d8f7cd0`)

    const json = await data.json()
    dispatch(AddMovieData(json))
    console.log(json)
}
  
useEffect(()=>{
    GetMovie()
},[])

};

export default useNowPlayingMovie;
