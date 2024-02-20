import React from 'react'
import { useSelector } from 'react-redux'
import Bgvideo from './Bgvideo'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies'
import Mainmoviesinfo from './Mainmovieinfo'
import useTralierid from '../hooks/useTralierid'

const Maincontainer = () => {

  const NowPlaying = useSelector((state)=>state.movies.Nowplayingmovies)
 const trailerid = useSelector((state)=>state.movies.Trailerid)
    
 useNowPlayingMovie( )
 
 useTralierid()

    return (

  NowPlaying ?
    <div className='w-full h-80 bg-gray-700 items-start'>
      
<Bgvideo id={trailerid?.[0]?.key} />
<Mainmoviesinfo/>


    </div> 
    : null )
}
  


export default Maincontainer

