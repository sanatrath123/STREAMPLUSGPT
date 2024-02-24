import React from 'react'
import { useSelector } from 'react-redux'
import Bgvideo from './Bgvideo'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies'
import Mainmoviesinfo from './Mainmovieinfo'
import useTralierid from '../hooks/useTralierid'

const Maincontainer = () => {

//   const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
//  const trailerid = useSelector((state)=>state.movies.Trailerid)
    
//  useNowPlayingMovie( )
//  useTralierid()

    return (

  
    <div className='w-full h-screen bg-gray-700 items-start'>
      
 <Bgvideo /> 
{/* add the id={trailerid?.[0]?.key} inside the Bgvideo as a props */}
<Mainmoviesinfo/>
{/* pass the props from Mainmoviesinfo */}
 </div> 
//Add conditional operator on NowplayingMovies ? : null
   )
}
  


export default Maincontainer

