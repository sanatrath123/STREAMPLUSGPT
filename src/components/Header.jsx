import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../Appwrite/Auth'
import {logout} from '../store/AuthSlice'

const Header = () => {
  const status = useSelector((state) => state.auth.status);
const Navigate = useNavigate()
const userData = useSelector((state)=>state.auth.UserData)
const dispatch = useDispatch()
  //logout function
  const LogoutHandel = async ()=>{
    const data = await  authService.LogoutAccount() 
  console.log("this is data",data)
 if(data){ 
  dispatch(logout())
  Navigate('/login')
 }
    
     
  }

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

  return (
    <div className='w-full h-20 bg-gray-900 flex justify-between'>
      <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/405492/large_plusstream.png' alt='logo' className='h-30 w-30 ml-8 bg-gray-300' />
      <ul className='text-white font-bold text-xl flex flex-wrap  w-5/12'>
        {Navitems.map((item) => (
          item.active ? <li key={item.name} className='my-auto mx-8 p-2' onClick={() => {}}>
            <Link to={item.slug}>{item.name}</Link>
          </li> : null
        ))}
        <li className='my-auto mx-8 p-2 flex '>
          <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' alt='account' className='w-8 h-8 bg-black' />{userData ? <p className='ml-2 bg-gray-800'>Hello {userData.name}</p> : null}
        </li>
        {
          status ? <li className='my-auto mx-8 p-2 corser-pointer' onClick={LogoutHandel}>
          
          LOGOUT
        </li> :null
        }
      </ul>
    </div>
  );
};

export default Header;
