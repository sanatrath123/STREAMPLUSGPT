
import { useSelector ,useDispatch } from 'react-redux'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer'
import MovieList from './MovieList'
import Login from './Login'
import useTrendingmovies from '../hooks/useTrendingmovies'
import {AddUser} from "../store/AuthSlice"
//delete this this for demo porpuse & userdatbase
import servise from '../Appwrite/Database'

const Home = () => {
  
  const status = useSelector((state)=>state.auth.status)
 const NowPlayingMovies = useSelector((state)=>state.movies. Nowplayingmovies)
 useTrendingmovies()
 //useNowplaying()

//get the user from the database and store its info
 const id = useSelector((state)=>state.auth.UserData?.$id)
 const dispatch = useDispatch()
 const databasedata = async ()=>{
const userdatbase = await  servise.GetUserData(id)
if(userdatbase){
  
  dispatch(AddUser(userdatbase))
}
 }
 databasedata()
//ends 


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