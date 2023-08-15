"use client"
import React, { createContext, useContext, useState } from 'react'

const PostItemContext = createContext("posts")
export function usePostContext(){
  return useContext(PostItemContext)
}


export default function PostContext({children}) {
  const [postItem,setPostItem]=useState([])
  const third =3
  const providerValue = {
    postItem,setPostItem
  };
  // const provided = useMemo(() => ({
  //   value: postItem,
  //   setValue: (value) => setPostItem(value)
  // }), [])
  // function setPosts(arg){
  //   setPostItem(arg)
  // }
  return (
    <PostItemContext.Provider value={providerValue}>
      {children}
    </PostItemContext.Provider>
  )
}
