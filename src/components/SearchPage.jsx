import React from 'react';
import { useState } from 'react';
import useSearchMovie from '../hooks/useSearchMovie';
import { useDispatch, useSelector } from 'react-redux';
import {AddSearchMovie} from '../store/MovieSlice';
import Moviecard from './Moviecard'
import useGenresCategories from '../hooks/useGenresCategories'
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  
   // const [searhMovieData , setSearhMovieData ] = useState(null)

  const disptach = useDispatch() 
const Moviesinfo = useSelector((state)=>state.movies.Movies.info)
const GenresCategories = useSelector((state)=>state.genres.genresdata)
const navigate = useNavigate()


//console.log(Moviesinfo)
const Submitform = (event)=>{
    event.preventDefault()

disptach(AddSearchMovie(event.target.elements.inputValue.value))

}

// const handelChange = (event)=>{
//     setSearchTerm( event.target.value)
// }


//naviagte to new category page 
const handelClick = (id,name)=>{
navigate(`/category/${name}/${id}`)
}

//see the category page 
 const [toggleCategory , setToggleCategory] = useState(false)



  useSearchMovie()
useGenresCategories()


    return (
       
<div className='w-full bg-gray-600 bg-cover flex flex-col  justify-center ' style={{backgroundImage: `url("https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=")`,  minHeight: "90vh"}}>

        
<div className='w-full flex flex-nowrap  justify-center absolute top-20'>
<form onSubmit={Submitform} className='w-8/12 bg-transparent flex justify-center mt-3  h-24 '>
 <input
 type='text'
 name="inputValue"
  className='w-9/12 h-12 mt-5 border-2 rounded-xl text-gray-900 text-2xl'/>
 <button type='submit' className='w-2/12 h-12 mt-5 mx-2 rounded-2xl  bg-blue-700 text-white'>
    Search
 </button>
</form>


{/* options for different movie categories */}

<div className='w-10 h-10 mt-8 flex justify-center '>
  <img src="https://www.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600nw-432264136.jpg" alt="" className='rounded-xl mt-2 w-auto' onMouseOver={()=>setToggleCategory(true)} onClick={()=>setToggleCategory(!toggleCategory)} />

{ toggleCategory &&
  <div className='w-96  bg-gray-200 absolute overflow-hidden mt-16 mr-32 rounded-2xl z-20' >
<ul className='flex flex-wrap text-lg font-semibold px-2 text-gray-100 justify-center align-middle overflow-hidden'>
  <h2 className='flex w-full text-gray-800 text-xl font-medium justify-center'>Categories</h2>
{ GenresCategories ?
 GenresCategories.map((category)=>(
  
  <li key={category.id} onClick={()=>handelClick(category.id ,category.name)} className='mx-2 px-1 bg-gray-800 text-gray-100 flex w-5/12 h-full rounded-xl mt-2 justify-center cursor-pointer'>{category.name}</li>
 ))
 : null
 }
</ul>
</div>
}
</div>
</div>




    <div className=' flex flex-wrap justify-center mt-24 overflow-hidden'>
  {Moviesinfo &&
 
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










