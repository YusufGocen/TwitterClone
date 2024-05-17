import React from 'react'
import propTypes from 'prop-types'

const Sticky = ({title}) => {
  return (  
    <div className='sticky top-0 z-10 bg-black/-[.65] backdrop-blur-md'>
      <h3 className='px-4 font-bold text-xl flex items-center h-[3.313rem]'>
        {title}
      </h3>
      
    </div>
  )
}

Sticky.propTypes={
  title:propTypes.string.isRequired
}
export default Sticky