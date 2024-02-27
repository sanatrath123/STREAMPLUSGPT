import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../Appwrite/Auth'
import {logout} from '../store/AuthSlice'
import { changeLang } from '../store/LangSlice';
import lang from '../hooks/lang';

const Header = () => {
  const status = useSelector((state) => state.auth.status);
const Navigate = useNavigate()
const userData = useSelector((state)=>state.auth.UserData)
const dispatch = useDispatch()
//select language state variable 
const StoreLang = useSelector((state)=>state.Lang.lang)
  //logout function
  const LogoutHandel = async ()=>{
    const data = await  authService.LogoutAccount() 
  
 if(data){ 
  dispatch(logout())
  Navigate('/login')
 }
    
     
  }
console.log(lang[StoreLang].HOME)
  const Navitems = [
    {
      name: 'HOME',
      slug: '/home',
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
    
  ];

  const Optionchange = (event)=>{
console.log(event.target.value)
dispatch(changeLang(event.target.value))

  }

  return (
    <div className='w-full h-20 bg-gray-900 flex justify-between'>
      <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/405492/large_plusstream.png' alt='logo' className='h-30 w-30 ml-8 bg-gray-300' />
      <ul className='text-white font-bold text-xl flex flex-wrap  w-5/12'>
        {Navitems.map((item) => (
          item.active ? <li key={item.name} className='my-auto mx-8 p-2' onClick={() => {}}>
            <Link to={item.slug}>{item.name}</Link>
          </li> : null
        ))}
        {/* <li className='my-auto mx-8 p-2 flex '>
          <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' alt='account' className='w-8 h-8 bg-black' />{userData ? <p className='ml-2 bg-gray-800'>Hello {userData.name}</p> : null}
        </li> */}

<li className='my-auto mx-8 p-1 flex flex-col'>
  {console.log(lang)}
  <select  className='text-black text-xl' onChange={Optionchange}>
    <option value={"English"} className='text-black text-xl'>English</option>
    <option value={"hindi"} className='text-black text-xl'>hindi</option>
    <option value={"odia"} className='text-black text-xl'>odia</option>
  </select>
 
</li>


        {
          status ? <>
          <li className='my-auto mx-8 p-2 corser-pointer' onClick={LogoutHandel}>
          {lang[StoreLang].LOGOUT}
         
        </li>

      
       <li className='my-auto mx-8 p-2 corser-pointer bg-purple-600 rounded-lg'>
          
       <Link to={'/GptSearch'}>  GPt Search </Link>
        </li>
       
          </>
        
      
        :null
        }
      </ul>
    </div>
  );
};

export default Header;
