import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../Appwrite/Auth'
import {logout} from '../store/AuthSlice'
import { changeLang } from '../store/LangSlice';
import lang from '../hooks/lang';
import { reset } from '../store/MovieSlice';

const Header = () => {
  const NavRef = useRef('')
  const [toggle , setToggle] = useState(false)
  const status = useSelector((state) => state.auth.status);
const Navigate = useNavigate()
const userData = useSelector((state)=>state.auth.UserData)
const dispatch = useDispatch()
//select language state variable 
const StoreLang = useSelector((state)=>state.Lang.lang)
//const favlist = useSelector((state)=>state.movies.FavoriteList)
  //logout function
  const LogoutHandel = async ()=>{
    const data = await  authService.LogoutAccount() 
  
 if(data){ 
  dispatch(logout())
  dispatch(reset())
  Navigate('/login')
 }
    
     
  }

  const handleHover = ()=>{
    if(toggle == true) return

    setToggle(true)
  }

  const Navitems = [
    {
      name: 'HOME',
      slug: '/',
      active: status
    },
    {
      name: 'LOGIN',
      slug: '/login',
      active: !status
    },
    {
      name: 'SIGNUP',
      slug: '/signup',
      active: !status
    },
    {
      name:"Movies🔍",
      slug:'/search',
      active: status
    }
    
  ];

 

  return (
    <div className='w-full bg-zinc-800 flex flex-nowrap  justify-between '>
      <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/405492/large_plusstream.png' alt='logo' className='md:h-30 md:w-30 w-20 h-16 ml-8 bg-gray-300' />
      <ul className='text-white font-bold text-xl flex flex-wrap w-7/12 2xl:w-[60%] lg:justify-center justify-end'>
      
        {Navitems.map((item) => (
          item.active ? <li key={item.name} className='lg:relative md:relative absolute my-auto mx-8 p-2 hidden lg:block xl:block ' onClick={() => {}}>
            <Link to={item.slug}>{item.name}</Link>
          </li> : null
        ))}
        {/* <li className='my-auto mx-8 p-2 flex '>
          <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' alt='account' className='w-8 h-8 bg-black' />{userData ? <p className='ml-2 bg-gray-800'>Hello {userData.name}</p> : null}
        </li> */}



        {
          status ? <>
          <li className='my-auto mx-8 p-2  cursor-pointer bg-orange-400 rounded-lg hidden xl:block' onClick={LogoutHandel}>
          {lang[StoreLang].LOGOUT}
         
        </li>

      
       <li className='my-auto mx-8 p-2 corser-pointer bg-purple-600 rounded-lg hidden xl:block'>
          
       <Link to={'/GptSearch'}>  GPt Search </Link>
        </li>
       


        <li 
         className='my-auto mx-8 p-1 flex flex-col cursor-pointer' 
        onMouseOver={handleHover}
        onClick={() => setToggle(!toggle)}>
  <div className='flex flex-col mx-auto relative'>
    <img className=' h-7 ' src="/menu.png" alt="" />
    {toggle ? (
      <ul className='flex flex-col w-60 bg-transparent absolute left-[-20px] transform -translate-x-1/2 mt-9 items-center pb-2 z-50 bg-zinc-700 rounded-lg top-2'>
     
      <li className='w-11/12 p-1 mt-4 rounded-lg text-xl bg-blue-400 flex justify-center'><Link to={"/nowplaying"}>
          Now Playing
          </Link></li>
     
        <li className='w-11/12 p-1 mt-2 rounded-lg text-xl bg-blue-400 flex justify-center'>
        <Link to={"/toprated"}>
          TOP RATED
          </Link></li>
      
       <li className='w-11/12 p-1 mt-2 rounded-lg text-xl bg-blue-400 flex justify-center'> <Link to={"/watchlater"}>WatchLater </Link></li>
      

       {/* <li className='w-full hidden sm:block md:block p-1 mt-2 rounded-lg text-xl bg-blue-400  justify-center  '><Link to={'/GptSearch'}>  GPt Search </Link></li> */}
       <li className='w-11/12 block lg:hidden md:block p-1 mt-2 rounded-lg text-xl bg-yellow-400 justify-center text-center'>
  <Link to={'/GptSearch'}>GPt Search</Link>
  </li>

  <li className='w-11/12 block lg:hidden md:block p-1 mt-2 rounded-lg text-xl bg-violet-400 justify-center text-center'>Search🔍</li>

  <li className='w-11/12 block lg:hidden md:block p-1 mt-2 rounded-lg text-xl bg-red-400 justify-center text-center'
  
  >Logout</li>

      </ul>
    ) : null}
  </div>
</li>
          </>
        
      
        :null
        }




      </ul>
    </div>
  );
};

export default Header;
