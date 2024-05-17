import React from 'react'
import Sticky from '../Header/Sticky'
import Tab from '../Header/Tab'
import ForYou from '../Header/ForYou'

const Home = () => {
  return (
    <div>
      <Sticky title="AnaSayfa"/>
      <Tab activeTab='for-you'>
        <Tab.Items>
            <Tab.Item id="for-you">
              Sana özel
            </Tab.Item>
            <Tab.Item id="following">
              Takip edilenler
            </Tab.Item>
        </Tab.Items>
        <Tab.Content  id="for-you">
          <ForYou/>
        </Tab.Content>
        <Tab.Content  id="following">
          2.content
        </Tab.Content>
      </Tab>
    </div>
  )
}

export default Home     