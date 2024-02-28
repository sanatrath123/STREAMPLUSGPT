import React, { useEffect } from 'react'
import { ApiOption } from '../Constant';
import {useDispatch, useSelector  } from 'react-redux';
import { AddTrailerid } from '../store/MovieSlice';

const useTralierid =  () => {
 
     const NowplayingMovies  = useSelector((state)=>state.movies.Nowplayingmovies)

     const Movieid = NowplayingMovies[0]?.id




const dispatch = useDispatch()

const url = `https://api.themoviedb.org/3/movie/${Movieid}/videos?language=en-US`

const GetTrailerid = async ()=>{
    try {
        const data =  await fetch(url,ApiOption)
    const json = await data.json()
    dispatch(AddTrailerid(json?.results))
    } catch (error) {
        console.log("ERROR IN TRAILER FETCH",error)
    }
}
useEffect(()=>{
    GetTrailerid()
},[])

}

export default useTralierid