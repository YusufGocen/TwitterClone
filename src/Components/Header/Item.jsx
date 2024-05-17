import React from 'react'
import PropTypes from 'prop-types'
import {useTab} from './Context'
import classNames from 'classnames'
const Item = ({children,id}) => {
const {active,setActive}=useTab()
  return (
    <button type='button' className='text-center flex-auto ' onClick={() => {
      setActive(id)
    }}>
      <div className={classNames("h-[3.313rem] relative inline-flex items-center",{
        "font-bold":active==id
      })}>
        {children}
        {active===id &&(
            <div className='h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[#1d9bf0]'/>
        )}
      </div>
    </button>
  )
}
Item.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	id: PropTypes.string
} 
export default Item