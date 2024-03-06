import React, { useEffect } from 'react'
import {AddToprated} from '../store/MovieSlice'
import {ApiOption} from '../Constant.js'
import { useDispatch } from 'react-redux'

const useTopratedmovie = () => {

const dispatch = useDispatch()

const url ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const GetToprated = async ()=>{
    const data = await fetch(url , ApiOption)
    const json = await data.json()
  
  dispatch(AddToprated(json.results))
}


useEffect(()=>{
    GetToprated()
},[])


}

export default useTopratedmovie