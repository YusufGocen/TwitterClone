import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { RiFileList2Line} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import More from './MenuBar/More';
const Menu = () => {
  return (
    <div className='mt-[0.313rem] mb-[0.125rem] cursor-pointer  rounded-full group '>
        <NavLink to={"/"}>
                <div className='p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <GoHomeFill   className='w-[1.641rem]  h-[1.641rem]' />
                <div className=' text-xl pr-4'>
                    Anasayfa
                </div>
                </div>
        </NavLink>
        <NavLink to={"/explore"}>
                <div className='p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <PiMagnifyingGlassBold    className='w-[1.641rem]  h-[1.641rem]' />
                <div className=' text-xl pr-4'>
                    Keşfet
                </div>
                </div>
        </NavLink>
        <NavLink to={"/notification"}>
              <div className=' p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a] relative'>
                    <RiNotification2Line className='w-[1.641rem]  h-[1.641rem]' />
                    
                <div className=' text-xl pr-4'>
                    Bildirimler
                </div>
              </div>
        </NavLink>
        <NavLink to={"/message"}>
              <div className=' p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <FaRegEnvelope className='w-[1.641rem]  h-[1.641rem]' />            
                <div className=' text-xl pr-4'>
                    Mesajlar
                </div>
              </div>
        </NavLink>
        <NavLink to={"/List"}>
              <div className=' p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <RiFileList2Line className='w-[1.641rem]  h-[1.641rem]' />            
                <div className=' text-xl pr-4'>
                    Listeler
                </div>
              </div>
        </NavLink>
        <NavLink to={"/Premium"}>
              <div className=' p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <FaXTwitter className='w-[1.641rem] h-[1.641rem]' />            
                <div className=' text-xl pr-4'>
                    Premium
                </div>
              </div>
        </NavLink>
        <NavLink to={"/profil"}>
              <div className=' p-3 inline-flex items-center rounded-full gap-5 text-[#e7e9ea] font-bold hover:bg-[#eff3f41a]'>
                    <HiOutlineUser className='w-[1.641rem] h-[1.641rem]' />            
                <div className=' text-xl pr-4'>
                    Profil
                </div>
              </div>
        </NavLink>
        <More/> 
        <div className="py-3 w-[85%]">
          <button className='bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors px-3 text-[1.063rem] h-[3.25rem] w-full'>
            Gönder
          </button>
        </div>
    </div>  
    
  )
}

export default Menu