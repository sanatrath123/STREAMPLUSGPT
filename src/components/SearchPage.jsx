import React from 'react';
import { useState } from 'react';
import useSearchMovie from '../hooks/useSearchMovie';
import { useDispatch, useSelector } from 'react-redux';
import {AddSearchMovie} from '../store/MovieSlice';
import Moviecard from './Moviecard'

const SearchPage = () => {
  
   // const [searhMovieData , setSearhMovieData ] = useState(null)
  const disptach = useDispatch()
const Moviesinfo = useSelector((state)=>state.movies.Movies.info)
//console.log(Moviesinfo)
const Submitform = (event)=>{
    event.preventDefault()

disptach(AddSearchMovie(event.target.elements.inputValue.value))

}

// const handelChange = (event)=>{
//     setSearchTerm( event.target.value)
// }

  useSearchMovie()



    return (
       
<div className='w-full bg-gray-600 bg-cover flex flex-wrap justify-center' style={{backgroundImage: `url("https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=")`,  minHeight: "100vh"}}>

        
<form onSubmit={Submitform} className='w-8/12 bg-transparent flex justify-center mt-3  h-24'>
 <input
 type='text'
 name="inputValue"
  className='w-8/12 h-12 mt-5 border-2 rounded-xl text-gray-900 text-2xl'/>
 <button type='submit' className='w-2/12 h-12 mt-5 mx-2 rounded-2xl  bg-blue-700 text-white'>
    Search
 </button>
</form>


    <div className='w-full  flex justify-center flex-wrap'>
  {
 Moviesinfo &&
 Moviesinfo.map((item)=>(
<Moviecard
    key={item.id}
    {...{id: item.id,
        poster_path: item.poster_path,
        original_title: item.original_title
    }}
    />
 ))
 

  }

    </div> 


        </div>
      );
      
}

export default SearchPage;