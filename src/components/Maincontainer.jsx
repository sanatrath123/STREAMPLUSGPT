
import { useSelector } from 'react-redux'
import useTralierid from '../hooks/useTralierid'
import { useEffect, useState } from 'react'
import useTrendingmovies from '../hooks/useTrendingmovies'

const Maincontainer = () => {
  
 const BannerInfo = useSelector((state)=>state.movies.Moviedata)
 const [curentBanner , setCurent] = useState(0)
  

useTralierid()

useEffect(()=>{
 const id = setInterval(()=>{
    setCurent((prev)=>prev==3 ? 0 : prev +1)
  },10000)
  return(()=>clearInterval(id))
},[curentBanner])

if(!BannerInfo) return

    return (
  <div className='w-full h-screen bg-gray-700 items-start z-0 hidden sm:hidden md:hidden lg:block xl:block relative'>
    
<div className='mt-1 w-screen h-screen '>
     <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${BannerInfo?.[curentBanner].key}?si=jwGIMP3-McnKpePj`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>

<div className='text-gray-50 w-5/12  absolute top-4  right-7  mt-1 flex flex-col'>
<h1 className='mt-6 text-7xl mx-auto font-bold  '>{BannerInfo?.[curentBanner].data.title}</h1>
<p className='text-xl font-semibold mt-4 '>{BannerInfo?.[curentBanner].data.overview
}</p>

<div className='flex mt-8 justify-between w-5/6 '>
<span className='text-xl font-extrabold'>realease on- {BannerInfo?.[curentBanner].data.release_date} </span>
<span className='text-xl font-bold'>IMDB {BannerInfo?.[curentBanner].data.vote_average}</span>
</div>
    </div>

 </div>
//Add conditional operator on NowplayingMovies ? : null
   )
}
  


export default Maincontainer

