import React, { useEffect, useRef, useState } from 'react'
import {ApiOption} from '../Constant'
import { useSelector , useDispatch} from 'react-redux';
import {AddSearchMovieinfo} from '../store/MovieSlice'

const useSearchMovie = () => {


    const name = useSelector((state)=>state.movies.Movies.name)
    
   const prevname = useRef(name)
// const [info , setInfo] = useState(null)
const url =  `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`
const dispatch = useDispatch()

 useEffect(()=>{
if(prevname.current != name){
    Datafetch() 
    prevname.current = name
}
 },[name])

 

const Datafetch = async  () =>{
    
    const Data = await fetch(url , ApiOption)
    const json = await Data.json()
    //setInfo(json.results)

//make a filter function
const result = json.results.filter((movies, index)=>(
   index < 9   
))

//dispatch the search info to store 
dispatch(AddSearchMovieinfo(result)) 
}


}

export default useSearchMovie


