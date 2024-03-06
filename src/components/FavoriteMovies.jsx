import React from 'react'
import Moviecard from './Moviecard'
import { useSelector } from 'react-redux'


const FavoriteMovies = () => {

const FavoriteList = useSelector((state)=>state.movies.FavoriteList)

  return (
    <div className='w-8/12 bg-gray-700'>


    </div>
  )
}

export default FavoriteMovies