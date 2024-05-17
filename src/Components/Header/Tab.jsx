import React from 'react'
import Content from './Content'
import Items from './Items'
import Item from './Item'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {TabContext} from './Context'


const Tab = ({children,activeTab}) => {
  const [active, setActive] = useState(activeTab)
const contents=children.filter(e=>e.type==Content)
const ıtems=children.filter(e=>e.type==Items)
const content = contents.find(c => c.props.id === active)


const data={
  active,setActive
}
  return (
    <TabContext.Provider value={data}>
      <div className='border-b border-[#2f3336]'>
          {ıtems}
      </div>
          {content}
    </TabContext.Provider>
  )
}

Tab.Items=Items
Tab.Item=Item
Tab.Content=Content

Tab.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.node
	),
	activeTab: PropTypes.string.isRequired
}

export default Tab