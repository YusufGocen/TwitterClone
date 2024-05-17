import React from 'react'
import Search from './Search'
import Premium from './Premium'
import Topics from './Topics'
import WhoFollow from './WhoFollow'
import Footer from './Footer'

const RightBar = () => {
  return ( 
    <div className='w-[345px] mr-2'>
      <Search/>
      <Premium/>
      <Topics/>
      <WhoFollow/>
      <Footer/>
    </div>
  )
}

export default RightBar