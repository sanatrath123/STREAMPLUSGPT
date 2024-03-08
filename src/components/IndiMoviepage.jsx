import React from 'react'
import { useSelector } from 'react-redux'
import useIndivisualtralier from '../hooks/useIndivisualtralier'
import { useParams } from 'react-router-dom'

const IndiMoviepage = () => {

//   const id = useSelector((state)=>state.movies.MovieId?.id)
//   console.log(id)
//  const info = useSelector((state)=>state.movies.MovieId?.info)
 
const movieId = useParams()
console.log(movieId)

 const MovieInfo = useIndivisualtralier(movieId)

  return (
   MovieInfo ? 
    <div className='bg-gray-800 w-9/12 flex flex-col  m-auto p-4 items-center mt-1'>
        <h1 className='text-3xl text-white my-2 p-2'>Trailer of Moviename</h1>
        {/* this is the main trailer section */}
        <div className='w-8/12 aspect-video flex items-start  mt-2'>
        <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${ MovieInfo?.[0]?.key}?si=jgXDzAFGtM6_gMoG`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        {/* this is the other movies section */}
        <h1 className='text-3xl text-white my-2 p-2 '>Other Movies Section</h1>
        
        <div className='w-full aspect-auto flex  bg-gray-800  flex-wrap justify-center  '>
        {
           MovieInfo.map((item)=>(
            <iframe className='w-3/12 h-80 my-2 mx-2' key={item.id} src={`https://www.youtube.com/embed/${item.key}?si=x9iOrQcMuYRo1F64`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          ))
        }
        
        </div>
        
        </div>  : null
       
  )
}

export default IndiMoviepage



