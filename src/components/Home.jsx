
import { useSelector } from 'react-redux'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer'
import MovieList from './MovieList'

const Home = () => {
  const status = useSelector((state)=>state.auth.status)
 const NowPlayingMovies = useSelector((state)=>state.movies.NowPlayingMovies)
 
 //useNowplaying()
 //uncmt this

return( 
  status  ? 

  <div className='bg-gray-400 w-full overflow-hidden'>

<Maincontainer/>
<MovieList/>

  </div> : <div className='bg-red w-full h-80'></div>
) 
}

export default Home