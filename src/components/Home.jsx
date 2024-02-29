
import { useSelector } from 'react-redux'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer'
import MovieList from './MovieList'

const Home = () => {
  
  const status = useSelector((state)=>state.auth.status)
 const NowPlayingMovies = useSelector((state)=>state.movies. Nowplayingmovies)
 
 useNowplaying()
 

return( 
  status && NowPlayingMovies  ? 

  <div className='bg-gray-400 w-full overflow-hidden'>
  
   {/* here we send the data from root to maintain the flow */}
<Maincontainer /> 
<MovieList/>

  </div> : <div className='bg-red-600 w-full h-80'></div>
) 
}

export default Home