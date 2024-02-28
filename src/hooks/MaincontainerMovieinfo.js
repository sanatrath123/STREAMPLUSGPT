import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddMovieData } from "../store/MovieSlice";


const useNowPlayingMovie = () => {
    
const dispatch = useDispatch()
const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
console.log(NowPlaying[0])
const GetMovie =  async ()=>{
return 1
    
}
  
useEffect(()=>{
    GetMovie()
},[])

};

export default useNowPlayingMovie;
