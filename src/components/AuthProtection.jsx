import React, { useEffect ,useState} from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AuthProtection({Authentication=true, children}) {

const authstatus = useSelector((state)=>state.auth.status)
const navigate = useNavigate()
const [looader , setLooader] = useState(true)
useEffect(
  ()=>{
 if(authstatus && Authentication !== Authentication )
{
  console.log("authstatus",authstatus, "Authentication", Authentication)
  navigate("/login")
} else if(!Authentication && authstatus !== Authentication)
{
  console.log("authstatus",authstatus, "Authentication", Authentication)
  navigate("/")
}
setLooader(false)
  },[Authentication , authstatus,navigate]
)

  return (looader ? <h1 className='text-3xl text-black'>LOADING PAGE ........</h1>   :  <>{children}</>)
  
}

export default AuthProtection

// import React, { useEffect ,useState} from 'react'
// import {  useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// function AuthProtection({Authentication=true, children}) {

// const authstatus = useSelector((state)=>state.auth.status)
// const navigate = useNavigate()
// const [looader , setLooader] = useState(true)
// useEffect(
//   ()=>{
//  if(authstatus && Authentication)
// {
//   console.log("authstatus",authstatus, "Authentication", Authentication)
//   navigate("/")
// }
//  else 
// {
//   console.log("authstatus",authstatus, "Authentication", Authentication)
//   navigate("/login")
// }
// setLooader(false)
//   },[Authentication , authstatus,navigate]
// )

//   return (looader ? <h1 className='text-3xl text-black'>LOADING PAGE ........</h1>   :  <>{children}</>)
  
// }

// export default AuthProtection