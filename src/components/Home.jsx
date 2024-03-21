
import { useSelector } from 'react-redux'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer'
import MovieList from './MovieList'
import Login from './Login'
import useTrendingmovies from '../hooks/useTrendingmovies'


const Home = () => {
  
  const status = useSelector((state)=>state.auth.status)
 const NowPlayingMovies = useSelector((state)=>state.movies. Nowplayingmovies)
 
 useNowplaying()
 useTrendingmovies()

return( 
  status && NowPlayingMovies  ? 

  <div className='bg-gray-400 overflow-x-hidden'>
  
   {/* here we send the data from root to maintain the flow */}
<Maincontainer /> 
<MovieList/>

  </div> : <Login/>
) 
}

export default Home