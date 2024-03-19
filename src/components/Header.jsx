import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../Appwrite/Auth'
import {logout} from '../store/AuthSlice'
import { changeLang } from '../store/LangSlice';
import lang from '../hooks/lang';

const Header = () => {
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
  Navigate('/login')
 }
    
     
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

  const Optionchange = (event)=>{

dispatch(changeLang(event.target.value))

  }

  return (
    <div className='w-full h-20 bg-gray-900 flex justify-between'>
      <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/405492/large_plusstream.png' alt='logo' className='h-30 w-30 ml-8 bg-gray-300' />
      <ul className='text-white font-bold text-xl flex flex-wrap  w-6/12'>
        {Navitems.map((item) => (
          item.active ? <li key={item.name} className='my-auto mx-8 p-2' onClick={() => {}}>
            <Link to={item.slug}>{item.name}</Link>
          </li> : null
        ))}
        {/* <li className='my-auto mx-8 p-2 flex '>
          <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' alt='account' className='w-8 h-8 bg-black' />{userData ? <p className='ml-2 bg-gray-800'>Hello {userData.name}</p> : null}
        </li> */}



        {
          status ? <>
          <li className='my-auto mx-8 p-2  cursor-pointer bg-orange-400 rounded-lg' onClick={LogoutHandel}>
          {lang[StoreLang].LOGOUT}
         
        </li>

      
       <li className='my-auto mx-8 p-2 corser-pointer bg-purple-600 rounded-lg'>
          
       <Link to={'/GptSearch'}>  GPt Search </Link>
        </li>
       


        <li className='my-auto mx-8 p-1 flex flex-col cursor-pointer' onClick={() => setToggle(!toggle)}>
  <div className='flex flex-col mx-auto relative'>
    <img className='w-7 h-7 bg-gray-200 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" />
    {toggle ? (
      <ul className='flex flex-col w-60 bg-gray-500 absolute left-1/2 transform -translate-x-1/2 mt-9 items-center pb-2'>
     
      <li className='w-11/12 p-1 mt-4 rounded-lg text-xl bg-blue-400 flex justify-center'><Link to={"/nowplaying"}>
          Now Playing
          </Link></li>
     
        <li className='w-11/12 p-1 mt-2 rounded-lg text-xl bg-blue-400 flex justify-center'>
        <Link to={"/toprated"}>
          TOP RATED
          </Link></li>
       <Link to={"/watchlater"}>
       <li className='w-full p-1 mt-2 rounded-lg text-xl bg-blue-400 flex justify-center'>WatchLater</li>
       </Link>
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
