import React from 'react'
import Post from '../post/post'
import { postDatas } from './postdata'
function Feed() {
    const post = postDatas.map(postData => 
        <li className="p-2" key={postData.id}>
            <Post title={postData.title}
            img={postData.img}
            postTitle={postData.postTitle}
            link={postData.link}
            />
        </li>
    )
  return (
    
    <div className='bg-cyan-500 h-1/2 w-full flex flex-col gap-4 p-2'>
        <div className='flex justify-center'>
            {/* <Post/> */}
            <ul>{post}</ul>
            {/* {postDatas.map((postData) => (
            <Post id={postData.id} title={postData.title} img={postData.img} postTitle={postData.postTitle} link={postData.link}/>
            ))} */}
        </div>
    </div>
  )
}

export default Feed