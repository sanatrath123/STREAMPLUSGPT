import React from 'react'
import Moviecard from './Moviecard'
import { useSelector } from 'react-redux'

const MovieList = () => {

const Nowplaying = useSelector((state)=>state.movies.Nowplayingmovies )


  return (
 <div className='w-full flex flex-col bg-red-400 mt-4 '>
 <h1 className='bg-red-400 text-3xl text-white mb-3 pl-4'>NOWPLAYING MOVIES</h1>
   {Nowplaying ?
     <div className='w-full bg-red-400 flex flex-wrap absolute  justify-center mt-8'>
      
    {
      Nowplaying.map((movies)=>(
        <Moviecard key={movies.id} {...{ poster_path: movies.poster_path, rating: movies.vote_average }} />
      ))
    }
       
    </div>

    : null}
 </div>
  )
}

export default MovieList