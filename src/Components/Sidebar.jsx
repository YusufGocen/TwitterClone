import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Account from './Account';

const Sidebar = () => {
  return (
    <div className='w-[17.188rem] min-h-screen max-h-screen flex flex-col sticky top-0 bg-black z-10'>
      <div className=' logo w-[3.875rem] h-[3.125rem] rounded-full flex items-center justify-center cursor-pointer '>
        <Link to={"/"}>
          <FaXTwitter className=' w-[2.25rem] h-[1.875rem]'/>  
        </Link>
      </div>
        <Menu/>
        <Account/>
    </div>
  )
}

export default Sidebar