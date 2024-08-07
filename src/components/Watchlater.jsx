import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteFavorite ,DeleteAllFavorite ,AddFavoriteList ,RetriveFavlist} from '../store/MovieSlice'

const Watchlater = () => {
const DBwatchlater = useSelector((state)=>state.auth.userdatabase)
const movielist = useSelector((state)=>state.movies.FavoriteList)
const dispatch = useDispatch()

//delete function
const deleteMovie= (id)=>{
const Id = id ;
const newmovie = movielist.filter((movie)=>(
    movie.id !== Id 
))

dispatch(DeleteFavorite(newmovie))

console.log(newmovie)
}


//delete all function
const DeleteAll =()=>{
    dispatch(DeleteAllFavorite())  //implement this feature in tommorow
}
  

useEffect(()=>{
  
    console.log( DBwatchlater[0])
    DBwatchlater?.[0]?.watchlater.map((item)=>{
        const {id, poster_path} = item
        dispatch(AddFavoriteList({id ,poster_path}))
    })

dispatch(RetriveFavlist())
},[])

    return (
<div className='w-full flex items-center flex-col mx-auto mt-4'>
<h1 className='text-4xl text-gray-900 bg-red-400 flex justify-center w-5/12 h-20 rounded-2xl mb-5 pt-3'>
    Watch Later Videos
</h1>
    <div className='w-9/12 flex flex-wrap overflow-hidden justify-center mx-auto bg-gray-500'>


{
    movielist ? movielist.map((movie)=>(
       
        <div className='w-2/12 bg-transparent m-2 mx-7' key={movie?.id}>
      {/* the id is sending to main.jsx as moviesid */}
       <Link to={`/IndiMoviepage/${movie?.id}`} >
       <img className='w-full aspect-auto bg-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="photo" />
       </Link>
       <div onClick={()=>deleteMovie(movie.id)} className='w-full text-xl flex items-center  justify-center h-8 p-2 mt-2 bg-blue-300 rounded-xl'>Watched ✅</div>
    </div>
       
    )) : <div>
<h1 className='text-2xl text-gray-900  flex justify-center w-7/12   mb-5 pt-3 p-4'>
  There is no Watch Later Videos
</h1>

<Link to={"/"}>BACK
  <button className='w-12 h-8 bg-slate-400 text-white text-2xl'>BACK</button>
  </Link>

    </div>
}

    </div>
    <button onClick={DeleteAll} className='w-28 h-12 text-xl rounded-lg bg-red-500 text-gray-100 font-bold'>Delete All</button>
    </div>
  )



}

export default Watchlater