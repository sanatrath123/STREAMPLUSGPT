import React, { useState } from 'react'
import {AddFavoriteList} from '../store/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'
import servise from '../Appwrite/Database'
import { Link } from 'react-router-dom'
//this is for store the id then we fetch it for iys own page
//import { AddMovieId } from '../store/MovieSlice'



const Moviecard = (props) => {

 const imgpath = props.poster_path
 const rating = props.rating
 const title = props.title
 const dispatch = useDispatch()

 const [showicon ,setShowicon] = useState(props.icon)
 const [show ,setShow] = useState(false)

// storing the props for favorite movies 
const AddMovies = ()=>{
 console.log(props)
dispatch(AddFavoriteList(props))
setShowicon(false)

servise.createWatchlater(props)
}


 

//function for storing the id of a movies in store 
// const handelClick = ()=>{
// console.log(props.id)
//  dispatch(AddMovieId(props.id))
// }

// add in 1st div hover:scale-125 

return (
  <div className='relative min-w-60  bg-transparent mx-8 my-5 shadow-2xl transition-all  hover:scale-125 duration-500 cursor-pointer rounded-lg overflow-none'>
   <div className='flex '>
   {showicon && (
      <div>
<img
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAD19fUICAiGhobPz89UVFS0tLSxsbEzMzMwMDA5OTnq6ur7+/vt7e3n5+epqanV1dWAgIC6urpsbGw7OztkZGQrKytdXV1XV1fJyclPT09FRUWioqLAwMCYmJgeHh5zc3OPj4/f39/UtMYTAAACuklEQVR4nO3c6XKiQBRA4YgjqyAqiME14/u/43SLa7ScH2LBvX2+VIXQGOUEgmKMX18AAAAAAAAAAAAAgLalh+28sZ3Xk67X5hO8zcpal+tVudx6Xa/OB3h/BhdRoLNweFOYdb06H3BXGGovjEPteymFMlEoH4XyUSgfhfJRKB+F8lEoH4XyUSgfhfJRKB+F8lEoH4XyuVUYOVA47np1PoBC+SiUz61Xm1AoE4XyUSgfhfJRKB+F8lEoH4XyOfZsYpB2vTofQKF8jhWG+gv1P1+q8d9k3dqGca6/UOGjtvS2sNpkPTqYelY2nkzGWfZr8mzMTry04Y3HZsh8MoOTw+x+L00f2Ft5foVPbiuzK5VlLTy+TafbMMzDwAjz3E7yZq6ZnMZ+LQobeRAGGzuSB/kmX1wCB/uf80VuvbjCx0WnNy+Yvr8veLt1HMdJUpZJZKdJEsdRUiZJZQfNXFUmD4uio+OiKjLjVRlVyf5aONzH0YP4xRU+WZTYdVrv3t+I3mzQZ7M2Cof/v53ODGct7KU9L9S/DfUXspdSSGHX2insuuKVNgrT8Kcolivf97+LYmGmSzPr+6tFUXybSXEc/F5eZ+1Fm8ssC/OtfmE/r8zI+mbFIr8Nq8Uyf/9Ymk6mo1E9Mur6PKntiP04zRxHR9fR82WOX54W1/PiWlj9bYbfZK6kT2fSd+eHLfzo+4dC+dwqVPlMlHN/Ie3TUb4tFMpHoXz394faj6X67/EdKNxoL9T/SgUH9lIKReLsST63HrVRKJNrhfqPNBRKRKF8FMpHoXwUykehfBTKR6F8jhXq/x9S9YUxhSK59R60FMpEoXwUykehfI6dW/DOHyK5tg3V/x6qP3tyoFD/XurAsZRCiVwrVH+kCXQWDrQX7pIqblR+rfEe/yubXhw0bkIAAAAAAAAAAAAAvfcPcxtJpsJhNWIAAAAASUVORK5CYII=' 
        onClick={AddMovies} 
        className='absolute bottom-0 left-0 transform -translate-x-1/2 bg-gray-500 border-1 border-black  h-8 w-8 mb-2 ml-10 z-20'
        alt="Add Movie"
      />
      <span className="absolute top-0 left-1/2 -translate-x-1/2 hidden text-white bg-black px-2 py-1 rounded-md">
          Add to Favorites
        </span>
      </div>
      
    )}



    
    </div>
    {/* the id is sending to main.jsx as moviesid */}
    <Link to={`/IndiMoviepage/${props.id}`}>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${imgpath}`} alt={`${props?.original_title}`} />
    </Link>
  </div>





);


}

export default Moviecard