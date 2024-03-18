import React, { useEffect } from 'react'
import {ApiOption} from "../Constant"
import {AddTrendingMovies} from '../store/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'

const useTrendingmovies = () => {
 const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

const dispatch = useDispatch()

const TrendingMovies = useSelector((state)=>state.movies.TrendingMovies)

 const FetchData = async () =>{
    try {

        const data =  await fetch(url,ApiOption)
        const json = await data.json()
    console.log(json.results)
   dispatch(AddTrendingMovies(json.results))

    } catch (error) {
        console.log("ERROR IN FETCH TReNDING MOVIES", error)
    }
 }

 useEffect(()=>{

 !TrendingMovies &&  FetchData()

 },[])

}

export default useTrendingmovies