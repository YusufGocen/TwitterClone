import React from 'react'


const Premium = () => {
  return (
    <div className='bg-[#16181c] mb-4 flex flex-col rounded-2xl py-3 px-4 gap-2.5'>
        <h6 className='font-extrabold text-xl leading-6 text-[#E7E9EA]'>Premium'a Abone Ol</h6>
        <span className='leading-5 font-bold text-[0.875rem] text-[#C1C2C3]'>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</span>
        <div>
           <button className='bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors px-4 h-9 text-[1.063rem]  '>Abone ol</button>
        </div>
    </div>
  )
}

export default Premium