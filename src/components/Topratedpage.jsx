import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Moviecard from './Moviecard'


const Topratedpage = () => {

    const MovieList  = useSelector((state)=>state.movies.Toprated)
 


return (
    MovieList ?

  <div className='w-full bg-zinc-800 pt-4 '>
<div className='mt-2 p-2 ml-8 flex align-middle '>
    <Link to={"/"}>
    <button className='text-gray-100 bg-gray-400 w-16 h-8 rounded-lg'>BACK</button>
    </Link>
<h1 className='text-3xl font-bold text-gray-100  ml-8'> TOP-RATED MOVIES</h1>
</div>

<div className='flex flex-wrap justify-center mt-4 overflow-hidden'>
{
    MovieList.map((movie)=>(
     <div className='max-w-60 mx-6' key={movie.id}>
  <Moviecard
       key={movie.id}
       {...{
id: movie.id ,
poster_path: movie.poster_path,
rating: movie.vote_average,
title: movie.title,
        }
       }
       /> 
     </div>
    ))
}
</div>

  </div>


  : <div className='w-full bg-gray-950 text-4xl flex items-center m-auto p-auto'>
There is no Movies Found 
  </div>
) 
}

export default Topratedpage