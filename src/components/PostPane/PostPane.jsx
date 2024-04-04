import React from 'react'
import './postPane.css'
import AddPost from '../AddPost/AddPost'
import Post, { Post3 } from '../Post/Post'
import { Post1 } from '../Post/Post'
import { Post2 } from '../Post/Post'


export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost/>
      <Post/>
      <Post1/>
      <Post2/>
      <Post3/>
    </div>
  )
}
