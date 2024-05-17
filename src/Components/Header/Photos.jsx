import React from 'react'

const Photos = ({photos}) => {
  return (
    <div className='mt-3'>
        <img src={photos} alt="" className='border border-[#2f3336] rounded-xl object-cover max-h-[510px]' />
    </div>
  )
}

export default Photos