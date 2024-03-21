import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TrendingPage = () => {

const Trendinglist = useSelector((state)=>state.movies.TrendingMovies)


  return (
Trendinglist &&     
<div className='w-auto bg-transparent  '>
<h1 className='w-full flex bg-transparent0 h-16 text-4xl pl-8 font-semibold text-gray-100'>Trending Now</h1>

<div className='flex overflow-x-scroll pl-6' 
 style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>

{
  Trendinglist.map((movie)=>(

    <div className='min-w-80 mx-2 my-2 rounded-full aspect-square overflow-x-scrol' key={movie.id}
    >
<Link to={`/IndiMoviepage/${movie.id}`}>
<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="photo"  className='flex bg-cover rounded-full aspect-square'/>
</Link>
    </div>
  ))
}

</div>

    </div>
  )
}

export default TrendingPage