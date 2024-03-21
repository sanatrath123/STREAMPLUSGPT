import React from 'react';
import { useState } from 'react';
import useSearchMovie from '../hooks/useSearchMovie';
import { useDispatch, useSelector } from 'react-redux';
import {AddSearchMovie} from '../store/MovieSlice';
import Moviecard from './Moviecard'
import useGenresCategories from '../hooks/useGenresCategories'

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
  className='w-9/12 h-12 mt-5 border-2 rounded-xl text-gray-900 text-2xl'/>
 <button type='submit' className='w-2/12 h-12 mt-5 mx-2 rounded-2xl  bg-blue-700 text-white'>
    Search
 </button>
</form>

{/* options for different movie categories */}

<div className='w-auto h-12 absolute mt-24 rounded-lg '>
<ul className='flex text-2xl font-semibold px-3 text-gray-100 justify-center align-middle  '>
  <li className='mx-5 px-2 bg-black flex w-2/12 h-full rounded-xl mt-2 justify-center cursor-pointer'>Comedy</li>
 
</ul>
</div>

    <div className=' flex flex-wrap justify-center mt-8 overflow-hidden'>
  {
 Moviesinfo.map((item)=>(
<div className='max-w-60 mx-6' key={item.id}>
  <Moviecard
       key={item.id}
       {...{
id: item.id ,
poster_path: item.poster_path,
rating: item.vote_average,
title: item.title,
        }
       }
       /> 
     </div>
 ))
 

  }

    </div> 




        </div>
      );
      
}

export default SearchPage;