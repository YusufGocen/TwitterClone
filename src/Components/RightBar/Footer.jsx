import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mb-4 px-4 flex flex-wrap gap-2'>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813erm] hover:underline'>Hizmet Şartları</Link>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Gizlilik Politikası</Link>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Çerez Politikası</Link>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Imprint</Link>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Erişebilirlik</Link>
        <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Reklam bilgisi</Link>
        <div className='w-full'>
            <Link to={"/"} className='text-[#71767b] leading-4 text-[0.813rem] hover:underline'>Daha fazla ...</Link>
            <span className='text-[#71767b] px-4 leading-4 text-[0.813rem] hover:underline'>© 2024 X Corp.</span>
        </div>
    </div>
  )
}

export default Footer