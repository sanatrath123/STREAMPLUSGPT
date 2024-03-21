import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useIndivisualtralier from '../hooks/useIndivisualtralier'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ApiOption } from '../Constant'
import { AddFavoriteList } from '../store/MovieSlice'

const IndiMoviepage = () => {
 
const dispatch = useDispatch()
//   const id = useSelector((state)=>state.movies.MovieId?.id)
//   console.log(id)
//  const info = useSelector((state)=>state.movies.MovieId?.info)
 const [moviedata , setMoviedata] = useState(null)
 
const movieId = useParams()

console.log(movieId)
const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}?language=en-US`
 const MovieInfo = useIndivisualtralier(movieId)

 //create a function to set movies info
 const fetchdata =  async  ()=>{
  
        const data = await fetch(url ,ApiOption)
        const json = await data.json()
        setMoviedata(json)
        console.log(json)
 }

 //for watchlater feature
 const Addlater = ()=>{
  
  console.log(moviedata)
 const {id ,poster_path} = moviedata
  dispatch(AddFavoriteList({id ,poster_path}))
  
   }

  
    useEffect(()=>{
        fetchdata()
  },[movieId])

moviedata && console.log(moviedata)


  return (
    MovieInfo && moviedata ? <div className='bg-black min-h-screen'>
     <div className='bg-black w-full flex  m-auto justify-between '>
        <div className='flex flex-wrap w-5/12 text-gray-100 ml-10'>
<div className='flex w-10/12 items-center flex-wrap'>
<Link to={"/"}>
<button  className='bg-gray-200 text-gray-900 font-xl px-5  mr-8 h-8 rounded-lg cursor-pointer flex items-center mt-2'>
 BACK
</button></Link>

<h1 className='text-5xl text-gray-100 p-2 mx-3 mt-2 font-bold'>{moviedata?.title}</h1> <br/>

<div className='w-full mb-3'>
<h1 className='text-3xl text-gray-100 p-2 my-1'>{moviedata?.belongs_to_collection
?.name}</h1>
</div>

<div className='w-full mt-4 flex '>
<div className='w-9 h-9 border-2 border-gray-100 text-xl flex  justify-center mx-1'>A</div>
<span className='text-2xl ml-5 font-semibold'>{moviedata?.release_date}</span>
<span className='text-2xl ml-5 font-semibold'>🔴{moviedata?.spoken_languages[0]?.english_name}
</span>
<span className='text-2xl ml-5 font-semibold'>🔴{moviedata?.genres[0]?.name}</span>
</div>
</div>

<div className='w-11/12 text-xl '>
 {moviedata?.overview
}
</div>

<button onClick={Addlater} className='w-36 h-12 bg-gray-300 text-black text-2xl font-semibold mx-2 px-3 py-2 rounded-xl'>
WatchLater
</button>

<Link to={`https://www.youtube.com/embed/${ MovieInfo?.[0]?.key}?si=jgXDzAFGtM6_gMoG`}>
<button className='w-36 h-12 bg-red-400 text-black text-2xl font-semibold mx-3 px-3 py-2 rounded-xl'>
Play Now
</button>
</Link>

        </div>
        <div className='mx-0 py-4 w-7/12 aspect-video '>
        <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${ MovieInfo?.[0]?.key}?si=jgXDzAFGtM6_gMoG`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
         </div> 

         <div className='w-full flex flex-wrap justify-center bg-black'>
          <h1 className='text-3xl text-gray-100 font-medium flex w-full h-10 pl-10 pt-5 mt-5 '>More Episods</h1>
         {
         
          MovieInfo ?
         MovieInfo.map((item)=>(
         
          <iframe className='w-2/12 aspect-square my-2 mx-2' key={item.id} src={`https://www.youtube.com/embed/${item.key}?si=x9iOrQcMuYRo1F64`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           )) : <h1 className=''>We did not find any videos related to this movie</h1>
      }
         </div>
         </div>
          : null
        
   )

}

export default IndiMoviepage