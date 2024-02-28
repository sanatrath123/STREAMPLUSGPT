import React from 'react'
import { useSelector } from 'react-redux'
import Bgvideo from './Bgvideo'
import useNowPlayingMovie from '../hooks/MaincontainerMovieinfo'
import Mainmoviesinfo from './Mainmovieinfo'
import useTralierid from '../hooks/useTralierid'

const Maincontainer = (data) => {

  const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
 const trailerid = useSelector((state)=>state.movies.Trailerid)
   console.log(data.id)
 
 useTralierid()

    return (

  
    <div className='w-full h-screen bg-gray-700 items-start'>
      
 <Bgvideo id={trailerid?.[3]?.key} /> 

<Mainmoviesinfo/>

 </div> 
//Add conditional operator on NowplayingMovies ? : null
   )
}
  


export default Maincontainer

