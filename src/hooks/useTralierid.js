import  { useEffect } from 'react'
import { ApiOption } from '../Constant';
import {useDispatch, useSelector  } from 'react-redux';
import { AddMovieData } from '../store/MovieSlice';

const useTralierid =  () => {

     const NowplayingMovies  = useSelector((state)=>state.movies.TrendingMovies)
     const BannerMovies  = NowplayingMovies.filter((movie , i)=> i<4)
     const dispatch = useDispatch()


const GetTrailerid = async ()=>{
    try {
const promises  = BannerMovies.map((movie)=> fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,ApiOption))

const response  = await Promise.all(promises)
const json = await Promise.all(response.map((res)=>res.json()))
 const data = json.map((mov,i)=>{
   const trailerKey = mov.results.find((vid)=>vid.type =="Trailer")
    const BannerData = {key:trailerKey.key , data:BannerMovies[i]}
    return BannerData
})
     dispatch(AddMovieData(data))
    } catch (error) {
        console.log("ERROR IN TRAILER FETCH",error)
    }
}
useEffect(()=>{
    GetTrailerid()
},[])

}

export default useTralierid


