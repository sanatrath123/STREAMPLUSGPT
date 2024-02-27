
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Welcome from './components/Welcome'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App() {
 


  return (
   

  <div className='w-full block bg-gray-300 '>
  <Header/>
  <Outlet/> 
  
  </div> 
  
  )
}

export default App
