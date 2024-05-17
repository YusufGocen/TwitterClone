import React from 'react'
import { useState } from 'react'

const FollowButton = ({user}) => {
    const [follow, setFollow] = useState(false)
  return (
    <div className='bg-[#16181c] rounded-2xl grid'>
        <div className='py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]'>
                    <img src={user.avatar} className='w-10 h-10 rounded-full object-cover' alt="" />
                    <div className='flex-1 flex flex-col text-left'>
                        <div className='text-[0.938rem] text-[#e7e9ea] font-bold'>{user.fullName}</div>
                        <div className='text-[0.938rem] text-[#71767b]'>@{user.username}</div>
                    </div>
                    <div >
                       {follow ? (
                         <button className=' whitespace-nowrap group' onClick={() => {setFollow(false)}}>
                            <div className='flex group-hover:hidden py-4 px-4 mt-1 h-7 bg-transparent border text-[#EFF3F4] rounded-full flex items-center justify-center font-semibold transition-colors '>Takip ediliyor</div>
                            <div className='hidden group-hover:flex border hover:border-[#67070f] hover:bg-[#f4212e1a] py-4 px-4 mt-1 h-7 text-[#f4212e] rounded-full flex items-center justify-center font-semibold transition-colors '>Takipi bırak</div>
                         </button>
                       ) : (
                        <button className='py-4 px-4 mt-1 h-7 bg-[#EFF3F4] text-[#2B2F34] rounded-full flex items-center justify-center font-semibold hover:bg-[#d7dbdc] transition-colors' 
                        onClick={()=>setFollow(true)}>Takip et</button>
                       )}
                    </div>
        </div>
    </div>
  )
}

export default FollowButton