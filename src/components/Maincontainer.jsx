import React from 'react'
import { useSelector } from 'react-redux'
import Bgvideo from './Bgvideo'
import useMaincontainerMovieinfo from '../hooks/useMaincontainerMovieinfo'
import Mainmoviesinfo from './Mainmovieinfo'
import useTralierid from '../hooks/useTralierid'

const Maincontainer = () => {

  const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
 const trailerid = useSelector((state)=>state.movies.Trailerid)
   
   //update for main container
   useMaincontainerMovieinfo()
 useTralierid()

    return (
NowPlaying ?
  
    <div className='w-full h-screen bg-gray-700 items-start z-0'>
      
 <Bgvideo id={trailerid?.[2]?.key} /> 

<Mainmoviesinfo />

 </div> : null
//Add conditional operator on NowplayingMovies ? : null
   )
}
  


export default Maincontainer

