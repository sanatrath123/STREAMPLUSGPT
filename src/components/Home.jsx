
import { useSelector } from 'react-redux'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer'

const Home = () => {
  const status = useSelector((state)=>state.auth.status)
  useNowplaying()

 const NowPlayingMovies = useSelector((state)=>state.movies.NowPlayingMovies)
 
return( 
  status  ? 

  <div className='bg-gray-400 w-100 h-full '>
 {console.log("hi")}
<Maincontainer/>


  </div> : <div className='bg-red w-full h-80'></div>
) 
}

export default Home