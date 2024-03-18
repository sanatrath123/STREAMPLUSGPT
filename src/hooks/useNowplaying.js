 
import { ApiOption  } from '../Constant'
 import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddNowplaying} from '../store/MovieSlice'
 
 const useNowplaying = () => {

const dispatch = useDispatch()
const Nowplayingmovies = useSelector((state)=>state.movies.Nowplayingmovies)
const ApiUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"



    const GetNowPlayingMovies =  async ()=>{

        try {
          
          const data = await fetch(ApiUrl,ApiOption)

        const json = await data.json()
       
       
        dispatch(AddNowplaying(json.results))
      
      } catch (error) {
          console.log("API NOT FETCHED", error)
        }
      }
      useEffect(()=>{
        !Nowplayingmovies && GetNowPlayingMovies()
      },[])
 } 
 
 export default useNowplaying