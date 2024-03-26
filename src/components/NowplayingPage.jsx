import React,{useRef} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Moviecard from './Moviecard'


const NowplayingPage = () => {

    const MovieList  = useSelector((state)=>state.movies.Nowplayingmovies)
  const Favlist = useSelector((state)=>state.movies.FavoriteList)
const divRef = useRef()
const navigate = useNavigate()

const handelClick =(e)=>{
if(e.target == divRef.current){
  navigate("/")
}
}

return (
    MovieList ?
    <div ref={divRef} className=' w-full flex items-center bg-black fixed inset-0  bg-opacity-20 backdrop-blur-sm' onClick={handelClick}>
      
  <div className='w-10/12  bg-zinc-800 pt-4 overflow-y-scroll mx-auto mt-2' style={{ maxHeight: '35rem' }}>
<div className='mt-2 p-2 ml-8 flex '>
   <Link to={"/"}>
    <button className='text-gray-100 py-3 px-5 bg-gray-400 w-20 h-10 rounded-xl flex items-center'>BACK</button>
    </Link>
<h1 className='text-3xl font-bold text-gray-100  ml-8'> NOW PLAYING MOVIES</h1>
</div>

<div className='flex flex-wrap justify-center mt-4 overflow-hidden space-x-6'>
{
    MovieList.map((movie)=>(
       <div className='max-w-60 aspect-square mx-2' key={movie.id}>
        
<Moviecard
       
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
  </div>

  : <div className='w-full bg-gray-950 text-4xl flex items-center m-auto p-auto'>
There is no Movies Found 
  </div>

) 
}

export default NowplayingPage