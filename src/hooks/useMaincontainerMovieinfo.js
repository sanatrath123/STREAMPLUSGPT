import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddMovieData } from "../store/MovieSlice";


const useNowPlayingMovie = () => {
     
   
const dispatch = useDispatch()
const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)

const GetMovie =  async ()=>{
    const data = NowPlaying[3]
    NowPlaying ? dispatch(AddMovieData(data)) : null
}
  
useEffect(()=>{
    GetMovie()
},[])

};

export default useNowPlayingMovie;
