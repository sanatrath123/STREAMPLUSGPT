import React from "react";
import {useForm} from 'react-hook-form'
import Input from "./Input";
import authService from '../Appwrite/Auth'
import {login} from '../store/AuthSlice'
import { useNavigate , Link, Navigate } from "react-router-dom";
import {  useDispatch } from "react-redux";

const Signup = () => {

  const {register , handleSubmit} = useForm()
 const dispatch = useDispatch()
//create function 
 const create = async  (data)=>{

const userdata = await  authService.CreateAccount(...data)
if(userdata){
  const userdata = authService.GetCurrentUser(userdata)
      dispatch(login(userdata))
 
  Navigate('/login')
}
}

  return (
    <section className="bg-gray-700 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-pink-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create and account
                </h1>

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        type="text"
                        placeholder= "Enter Your Name"
                        label="NAME"
                    {
                      ...register("name",{
                        required: true
                      })
                    }/>

                    <Input
                    type="email"
                    placeholder= "Enter Your Email"
                    label="EMAIL"

                    {
                      ...register("email",{
                        required:true,
                        validate: {
                          matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                      }
                      })
                    }
                    
                    />

                    <Input
                    type="password"
                    placeholder="Enter your Password"
                    label="PASSWORD"

                    {
                      ...register("password",{
                        required:true,
                      })
                    }
                    
                    />
                        
                        
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  
                    </div>
                </form>
               
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? 
                        {/* ADD THE LINK */}
                        {/* <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500"></Link>Login here <Link/> */}
                    </p>
                
            </div>
        </div>
    </div>
  </section>
  );
};

export default Signup;
