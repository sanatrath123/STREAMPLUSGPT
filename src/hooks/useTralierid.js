import React, { useEffect } from 'react'
import { ApiOption } from '../Constant';
import {useDispatch, useSelector  } from 'react-redux';
import { AddTrailerid } from '../store/MovieSlice';

const useTralierid = () => {
 
     const moviedata = useSelector((state)=>state.movies.Moviedata)


const dispatch = useDispatch()

const url =  `https://api.themoviedb.org/3/movie/${moviedata?.id}/videos?language=en-US`;

const GetTrailerid = async ()=>{
    try {
        const data =  await fetch(url,ApiOption)
    const json = await data.json()
    console.log(json)
    dispatch(AddTrailerid(json))
    } catch (error) {
        console.log("ERROR IN TRAILER FETCH",error)
    }
}
useEffect(()=>{
    GetTrailerid()
},[])

}

export default useTralierid