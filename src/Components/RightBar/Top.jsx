import React from 'react'
import {Link} from 'react-router-dom'
import {Popover} from '@headlessui/react'

const Top = ({item}) => {
  return (
    <Link to="/" className='py-3 px-4 transition-colors hover:bg-white/[0.03] relative'>
      <div className='text-[0.813rem] text-[#71767b] leading-4'>{item.title}</div>
      <div className='text-[0.938rem] font-bold leading-5 mt-0.5'>{item.topic.value}</div>
      <div  className='text-[0.813rem] text-[#71767b] leading-4 mt-1'>{item.postCount}</div>
      <Popover className='absolute top-2 right-2.5 '>
        <Popover.Button>
           <div className='outline-none text-[#71767b] w-[2.172rem] h-[2.172rem] flex items-center justify-center rounded-full hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors'>
            <svg width={18.75} fill='currentColor' viewBox="0 0 24 24" aria-hidden="true" ><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
            </div>
        </Popover.Button>
        <Popover.Panel className='w-[24rem] grid absolute top-2 right-0 bg-black shadow-box rounded-xl z-[1]   '>
          <div className='hover:bg-white/[0.03] px-4 py-3 flex items-center gap-3 text-[0.938rem] leading-5 font-bold text-[#e7e9ea]'>
              <svg fill='currentColor' width={18.75} viewBox="0 0 24 24"><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></svg>
              İlgimi çekmiyor
          </div>
          <div className='hover:bg-white/[0.03] px-4 py-3 flex items-center gap-3 text-[0.938rem] leading-5 font-bold text-[#e7e9ea]'>
              <svg fill='currentColor' width={18.75} viewBox="0 0 24 24"  ><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></svg>
              Bu gündem başlığı zararlı veya spam içeriyor
           </div>
        </Popover.Panel>
      </Popover>
    </Link>
  )
}

export default Top