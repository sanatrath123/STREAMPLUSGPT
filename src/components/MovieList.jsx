import React from 'react';
import Moviecard from './Moviecard';
import { useSelector } from 'react-redux';
import useTopratedmovie from '../hooks/useTopratedmovie'
import TrendingPage from './TrendingingPage';


const MovieList = () => {
  const Nowplaying = useSelector((state) => state.movies.Nowplayingmovies);
 const TopratedList = useSelector((state)=>state.movies.Toprated)
const favoritelist = useSelector((state)=>state.movies.FavoriteList)

useTopratedmovie()




return(
<div className=' bg-zinc-800 mt-4 relative'>
  <h1 className=' bg-transparent font-semibold text-3xl h-20  text-white flex items-center pb-4  pl-8'>
    NOW PLAYING MOVIES   
  </h1>
  <div className='overflow-hidden '>
  {
  Nowplaying ? (
    <div className=' flex justify-center flex-wrap'>
      {Nowplaying.map((movie) => {
       const Isicon = favoritelist.find((favmovie)=> favmovie?.id === movie?.id)
return(
<div key={movie.id} className='max-w-80 mb-4 aspect-square mr-7'>
<Moviecard

{...{
  id: movie.id,
  poster_path: movie.poster_path,
  rating: movie.vote_average,
  title: movie.title,
  icon: Isicon ? false : true
  
}}
/>
</div>


)
      })}
    </div>
  ) : null
  }
  </div>

{/* trending component */}
<TrendingPage/>


{/* Toprated component */}
  <h1 className=' bg-transparent font-semibold text-3xl text-white flex pl-8 pb-4 mt-4'>
    TOP RATED MOVIES
  </h1>

{TopratedList ? (
    <div className=' flex  space-x-10  overflow-x-auto overflow-y-hidden pb-12 px-7' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
      {TopratedList.map((movie) => {
        const isFav = favoritelist.find((favmovie)=> favmovie?.id === movie?.id)
       return(
        <div className='min-w-80 aspect-square' key={movie.id}>
          <Moviecard
  
  {...{
    id: movie.id,
    poster_path: movie.poster_path,
    rating: movie.vote_average,
    title: movie.title,
    icon: isFav ? false : true
  }}
/>
        </div>

       )
     } )}
    </div>
  ) : null}


{/* upcoming movies */}

</div>
)
}


export default MovieList;
