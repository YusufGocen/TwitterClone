import React from 'react'
import { Link } from 'react-router-dom'
import {whoFollowUser} from '../Mock'
import FollowButton from './FollowButton'

const WhoFollow = () => {
  return (
    <div className='bg-[#16181c] mb-4 rounded-2xl'>
        <h5 className='h-12 flex items-center font-extrabold text-xl py-3 px-4 leading-6 text-[#E7E9EA]'>
            Kimi takip etmeli
        </h5>
        <div className='grid'>
            {whoFollowUser.map(user=><FollowButton user={user} key={user.id}/>)}
        </div>
        <div className='grid'>
            <Link to={"/ConnectPeople"} className='h-[3.25rem] px-4 flex items-center text-[0.938rem] text-[#1d9bf8] transition-colors hover:bg-white/[0.03]'>
                Daha fazla göster
            </Link>
        </div>
    </div>
  )
}

export default WhoFollow