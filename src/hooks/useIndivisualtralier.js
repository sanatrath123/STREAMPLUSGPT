import React, { useEffect, useState } from 'react'
import { ApiOption } from '../Constant'
//import {AddIndivisualMovieData} from '../store/MovieSlice'
//import { useSelector , useDispatch } from 'react-redux'


const useIndivisualtralier = ({movieId}) => {
 const [movieinfo , setMovieinfo] = useState(null)
    //const dispatch = useDispatch()
    
    const Id = movieId   //useSelector((state)=>state.movies.MovieId.id)
    console.log(Id)
 const url = `https://api.themoviedb.org/3/movie/${Id}/videos?language=en-US`
 

 useEffect(()=>{
      Datafetch() 
  },[])

const Datafetch = async ()=>{
   
 try {
    
    const data = await fetch(url , ApiOption)
    const json = await data.json()
    console.log(json.results)
    //dispatch(AddIndivisualMovieData(json.results))
    //set the values in local state variable
    setMovieinfo(json.results)
            
        } catch (error) {
            console.log('ERROR IN useIndivisualtralier', error)
        } 


        
    }

    return movieinfo
}

export default useIndivisualtralier