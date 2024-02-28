import React from 'react'
import { useSelector } from 'react-redux'

const Mainmovieinfo = () => {

 const MovieInfo = useSelector((state)=>state.movies.Moviedata)
  return (

    MovieInfo ?
    <div className='text-white w-5/12  absolute top-96 left-16 mt-1 flex flex-col'>
<h1 className='mt-6 text-7xl mx-auto font-bold  '>{MovieInfo.title}</h1>
<p className='text-xl font-semibold mt-4 '>{MovieInfo.overview
}</p>

<div className='flex mt-8 justify-between w-5/6 '>
<span className='text-xl font-extrabold'>realease on- {MovieInfo.release_date} </span>
<span className='text-xl font-bold'>IMDB {MovieInfo.vote_average}</span>
</div>
    </div> : null
  )
}

export default Mainmovieinfo