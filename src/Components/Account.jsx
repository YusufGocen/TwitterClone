import React from 'react'
import { Popover } from '@headlessui/react'
import {useAccount} from '../CreateSlice/Hooks'
import { IoIosMore } from "react-icons/io";


const Account = () => {
    const account=useAccount()
  return (
    <div className='mt-auto '>
          <Popover className="relative">
            <Popover.Button className='my-3 p-3 rounded-full flex w-[16.563rem] hover:bg-[#eff3f41a] text-left outline-none items-center'>
              <img src={account.avatar} className='w-10 h-10 rounded-full' alt="" /> 
              <div className='mx-3 text-[0.938rem]'>
                <h6 className=' font-bold'> {account.fullName}</h6>
                <div className='text-[#71767b]'>
                    {account.username}
                </div>               
              </div>        
              <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
            </Popover.Button>
            
            <Popover.Panel className="absolute bottom-full w-[18.75rem] left-1/2 -translate-x-1/2 bg-black rounded-xl shadow-box ">
               <div className='py-2'>
                    <button className='py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transition-colors font-semibold text-[0.938rem]'>
                        Var olan bir hesap ekle
                    </button>
                    <button className='py-5 px-4 text-left hover:bg-[#eff3f41a] w-full  transition-colors font-semibold text-[0.938rem] '>
                       <div className='max-w-[13.625rem] '>
                        {account.username} hesabından çıkış yap
                       </div>
                    </button>
                    
               </div>
            </Popover.Panel>
          </Popover>
    </div>
  )
}

export default Account