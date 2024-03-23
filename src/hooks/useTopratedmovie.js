import React, { useEffect } from 'react'
import {AddToprated} from '../store/MovieSlice'
import {ApiOption} from '../Constant.js'
import { useDispatch , useSelector } from 'react-redux'
import {AddTrendingMovies,AddUpcomingMovies} from '../store/MovieSlice'

const useTopratedmovie = () => {
  const TrendingMovies = useSelector((state)=>state.movies.TrendingMovies)
  const TopratedMovies = useSelector((state)=>state.movies.Toprated)
const UpcomingMovies = useSelector((state)=>state.movies.UpcomingMovies)
  
const dispatch = useDispatch()


//url
const TopratedUrl ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
const TrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
const UpcomingURl = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"


//fetching toprated movies 
const GetToprated = async ()=>{
    const data = await fetch(TopratedUrl , ApiOption)
    const json = await data.json()
  
  dispatch(AddToprated(json.results))
}


//fetching trending movies 
const FetchTrendingData = async () =>{
  try {

      const data =  await fetch(TrendingUrl,ApiOption)
      const json = await data.json()

 dispatch(AddTrendingMovies(json.results))

  } catch (error) {
      console.log("ERROR IN FETCH TReNDING MOVIES", error)
  }
}

//fetching data of upcoming novies 
const FetchUpcoming = async ()=>{
  const data = await fetch(UpcomingURl , ApiOption)
  const json = await data.json()
  console.log(json.results)
  dispatch(AddUpcomingMovies(json.results))
}



//conditional randering 
useEffect(()=>{
  !TopratedMovies &&  GetToprated()
  !TrendingMovies &&  FetchTrendingData()
  !UpcomingMovies && FetchUpcoming()
},[])


}

export default useTopratedmovie