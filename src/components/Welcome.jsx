import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
const Welcome= ({setCount}) => {
  const Navigate = useNavigate()
 
  return (
    <div className='w-3/12 h-44 bg-pink-200 flex items-center flex-col'>
       <h1 className='text-2xl font-bold'>WELCOME BRO</h1>
       <button className='m-4 py-2 px-4 border rounded-xl  bg-blue-800 corser-pointer' onClick={()=>{
        setCount(1)

Navigate('/home')

       }}>OK</button>
    </div>
  )
}

export default Welcome