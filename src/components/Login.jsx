import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import Input from "./Input";
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authService from '../Appwrite/Auth';
import {login} from '../store/AuthSlice'


function Login() {

const {register , handleSubmit} = useForm()
//const navigate = useNavigate()
const dispatch = useDispatch()
const [error , setError]= useState()

//function onsubmit
const create = async (data)=>{
    setError(null)
    try {
        const session = await authService.LoginAccount(...data)
        if(session){
            const userData = await authService.GetCurrentUser()
       
            if(userData){
              
                dispatch(login(userData))
                navigate("/")
               
        }
    }
    } catch (error) {
        console.log("ERROR IN LOGIN HANDEL FUNCTION",error)
    }
}

  return (
    <section className="bg-gray-700 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                LOGIN TO ACCOUNT
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(create)} >
                  <div>
                      <Input
                      type="email"
                      placeholder="Enter Your Email"
                      label="EMAIL"
                      {
                        ...register("email",{
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                            }
                        })
                      }
                      />
                    
                  </div>
                  <div>
                      <Input
                      type="password"
                      label="PASSWORD"
                      placeholder="ENTER YOUR PASSWORD"
                      {
                        ...register("password",{
                            required: true
                        })
                      }
                      />
                  </div>
                  <div className="flex items-center justify-between">
                   
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login