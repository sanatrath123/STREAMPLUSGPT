import React, { useEffect } from 'react'
import {AddToprated} from '../store/MovieSlice'
import ApiOption from '../Constant'
import {useDispatch } from '@reduxjs/toolkit'
const useTopratedmovie = () => {

const dispatch = useDispatch()

const url ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const GetToprated = async ()=>{
    const data = await fetch(url , ApiOption)
    const json = await data.json()
    console.log(json)
  dispatch(AddToprated())
}


useEffect(()=>{
    GetToprated()
},[])


}

export default useTopratedmovie