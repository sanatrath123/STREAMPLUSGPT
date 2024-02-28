import React from 'react'

const Moviecard = (props) => {

 const imgpath = props.poster_path
 const rating = props.rating
  return (
    <div className='w-2/12 aspect-square  bg-red-400 m-2 '>
       <img src={`https://image.tmdb.org/t/p/original/${imgpath}`} alt="photo" />
       
    </div>
  )
}

export default Moviecard