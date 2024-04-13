import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import Input from "./Input";
import authService from '../Appwrite/Auth'
import {login,AddUser} from '../store/AuthSlice'
import { useNavigate , Link} from "react-router-dom";
import {  useDispatch } from "react-redux";
import servise from "../Appwrite/Database";

const Signup = () => {

  const {register , handleSubmit , formState: { errors }} = useForm()
 const dispatch = useDispatch()
 const Navigate = useNavigate()
 const [error , setError] = useState()

//create function 
 const Create = async  (data)=>{
setError(null)

const userdata = await  authService.CreateAccount(data)
 userdata == "Wrong Email Id & Passowrd" && setError("Wrong Email Id & Passowrd")
if(userdata){
  debugger
  //login the user
  const session = await authService.LoginAccount(data)
const currentuser = await authService.GetCurrentUser()
if(currentuser){
  const userdatabase =  await servise.CreateUser(userdata)
  dispatch(login(userdata))
  dispatch(AddUser(userdatabase))
  Navigate("/")
}else{
  Navigate("/login")
}
}
 }

 
  return (
 
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-0">
       
        <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                    Create and account
                </h1>

                <form onSubmit={handleSubmit(Create)}>
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
                          "Email address must be a uniqe valid address",
                      }
                      })
                    }
                    
                    />
                    {errors.email && <p className="text-gray-200" style={{ marginTop: '-1rem' }}>{errors.email.message}</p>}

<Input
  type="password"
  placeholder="Enter your Password"
  label="PASSWORD"
  {
    ...register("password", {
      required: true,
      validate: {
        matchPattern: value =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=]).{8,}$/.test(
            value
          ) || "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character",
      },
    })
  }
/>
{errors.password && <p className="text-gray-200" style={{ marginTop: '-1rem' }}>{errors.password.message}</p>}


               
                        
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  
                    </div>
                </form>
               
                <p className="text-sm font-light text-white dark:text-gray-400">
                        Already have an account? 
                        {/* ADD THE LINK */}
                        <Link to="/login" >Login here </Link>
                    </p>
                
            </div>
            <span className="flex h-8 text-red-400 text-lg font-extralight w-11/12 mx-auto mb-2">{error !== null &&  error}</span>
        </div>
    </div>
  
  );
};

export default Signup;
