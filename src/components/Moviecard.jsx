import React from 'react'
import {AddFavoriteList} from '../store/MovieSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//this is for store the id then we fetch it for iys own page
import { AddMovieId } from '../store/MovieSlice'



const Moviecard = (props) => {

 const imgpath = props.poster_path
 const rating = props.rating
 const title = props.title
 const dispatch = useDispatch()

// storing the props for favorite movies 
const AddMovies = ()=>{
dispatch(AddFavoriteList(props))
}
//function for storing the id of a movies in store 
const handelClick = ()=>{
console.log(props.id)
 dispatch(AddMovieId(props.id))

}

  return (
    <div className='w-2/12 aspect-square  bg-red-400 m-2 '>
      <span onClick={AddMovies} className='absolute text-3xl flex bg-white border-1 border-black'>❤️</span>
      {/* the id is sending to main.jsx as moviesid */}
       <Link to={`/IndiMoviepage/${props.id}`} >
       <img onClick={handelClick}  src={`https://image.tmdb.org/t/p/original/${imgpath}`} alt="photo" />
       </Link>
       
    </div>
  )
}

export default Moviecard