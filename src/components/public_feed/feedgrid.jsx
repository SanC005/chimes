import React from 'react'
import Post from '../post/post'
import { postDatas } from '../post/postdata'
function Feedgrid() {
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
    
    <div className='grid grid-cols-1 bg-cyan-500 list-none p-2 md:grid-cols-2 lg:grid-cols-3'>
        {/* <div className='flex justify-center'> */}
            {/* <Post/> */}
            {post}
            {/* {postDatas.map((postData) => (
            <Post id={postData.id} title={postData.title} img={postData.img} postTitle={postData.postTitle} link={postData.link}/>
            ))} */}
        {/* </div> */}
    </div>
  )
}

export default Feedgrid