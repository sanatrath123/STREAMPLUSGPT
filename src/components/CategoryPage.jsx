import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiOption } from '../Constant'
import Moviecard from './Moviecard'

const CategoryPage = () => {

const [movieInfo , setMovieInfo] = useState()
const {genresId, name} =useParams()
const prevId = useRef()

const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genresId}`




  const FetchData = async ()=>{
    try {
      console.log("fun called")
      const data = await fetch(url ,ApiOption)
    const json = await data.json()
    setMovieInfo(json.results)
    console.log(json.results)
    } catch (error) {
   console.log("ERROR IN :: FETCH CATEGORY DATA", error)
    }
}

if(genresId !== prevId.current){
    FetchData()
    prevId.current = genresId
}


  return (
    <div className='w-full bg-zinc-800 '>
<h1 className='text-4xl bg-gray-700 text-white flex w-full h-20 pt-2 pl-7 font-semibold align-middle'>{name}</h1>
<div className='w-full overflow-hidden flex flex-wrap '>
  {
    movieInfo && movieInfo.map((movie)=>(
    
<div key={movie.id} className='max-w-60 aspect-square mb-4 mr-5 '>
  {console.log(movie)}
<Moviecard

{...{
  id: movie.id,
  poster_path: movie.poster_path,
  rating: movie.vote_average,
  title: movie.title,
  
  
}}
/>
</div>
    ))
  }

</div>
    </div>
  )
}

export default CategoryPage