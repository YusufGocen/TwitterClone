import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import RightBar from './RightBar/RightBar'

const MainLayout = () => {
  return (
    <div className='w-[79.063rem] mx-auto flex '>
        <Sidebar/>
        <div className='flex-1 flex gap-[1.875rem]'>
            <div className='flex-1 max-w-[37.5rem] border-x border-[#2f3336]'>
                <Outlet/>   
            </div>
            <RightBar/>
        </div>
    </div>
  )
}

export default MainLayout