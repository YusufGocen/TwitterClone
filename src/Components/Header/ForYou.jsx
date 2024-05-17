import React from 'react'
import { Post } from '../Mock/Post'
import Despatch from './Despatch'
const ForYou = () => {
  return (
    <div>
        {Post.map(item=><Despatch item={item} key={item.id}/>)}
    </div>
  )
}

export default ForYou