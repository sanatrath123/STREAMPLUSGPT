import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {ApiOption} from "../Constant"
import { AddGenresData } from '../store/GenresSlice'

const useGenresCategories = () => {

const GenresData = useSelector((state)=>state.genres.GenresData)
const dispatch = useDispatch()
 
const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"

const FetchData = async  ()=> {
    const data = await fetch(url , ApiOption)
    const json = await data.json()
console.log(json.genres)
dispatch(AddGenresData(json.genres))

}

useEffect(()=>{
   !GenresData && FetchData()
},[])


}

export default useGenresCategories