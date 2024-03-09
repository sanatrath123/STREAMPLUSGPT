import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteFavorite } from '../store/MovieSlice'

const Watchlater = () => {

const movielist = useSelector((state)=>state.movies.FavoriteList)
const dispatch = useDispatch()
//delete function

const deleteMovie= (id)=>{
const Id = id ;
console.log("clicked", Id)
const newmovie = movielist.filter((movie)=>(
    movie.id != Id 
))

dispatch(DeleteFavorite(newmovie))
console.log(newmovie)
}

  
    return (
<div className='w-full flex items-center flex-col mx-auto mt-4'>
<h1 className='text-4xl text-gray-900 bg-red-400 flex justify-center w-5/12 h-20 rounded-2xl mb-5 pt-3'>
    Watch Later Videos
</h1>

    <div className='w-9/12 h-screen flex flex-wrap overflow-hidden justify-center mx-auto bg-gray-500'>


{
    movielist ? movielist.map((movie)=>(
       
        <div className='w-2/12 bg-transparent m-2 mx-7' key={movie.id}>
      {/* the id is sending to main.jsx as moviesid */}
       <Link to={`/IndiMoviepage/${movie.id}`} >
       <img className='w-full aspect-auto bg-cover ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="photo" />
       </Link>
       <div onClick={()=>deleteMovie(movie.id)} className='w-full text-xl flex items-center  justify-center h-8 p-2 mt-2 bg-blue-300 rounded-xl'>Watched ✅</div>
    </div>
       
    )) : <div>
<h1 className='text-2xl text-gray-900  flex justify-center w-7/12   mb-5 pt-3 p-4'>
  There is no Watch Later Videos 
</h1>
    </div>
}
    </div>
    </div>
  )



}

export default Watchlater