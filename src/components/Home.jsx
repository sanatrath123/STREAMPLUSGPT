import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {ApiOption, ApiUrl} from '../Constant'


const Home = () => {
  
const GetMovies =  async ()=>{

  console.log(ApiUrl)
  try {
    const data = await fetch(ApiUrl,ApiOption)

  const json = await data.json()

  console.log(json.result)
  } catch (error) {
    console.log("API NOT FETCHED", error)
  }
}

useEffect(()=>{
  GetMovies()
},[])
 const status = useSelector((state)=>state.auth.status)
return(
  status ? <div className='bg-gray-400 w-50 h-30 '>Home</div> : <div className='w-full h-64 bg-black'>this is unathenticated home</div>
) 
}

export default Home