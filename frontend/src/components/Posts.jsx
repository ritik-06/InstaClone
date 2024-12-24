import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const Posts = () => {
  // const { posts = [] } = useSelector(store => store.post || {});
  const {posts} = useSelector(store => store.post);
  // console.log(posts);
  return (
    <div>
        {
            posts.map((post) => <Post key={post._id} post={post}/>)
        }
    </div>
  )
}

export default Posts