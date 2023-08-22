"use client";
import React, { createContext, useContext, useState } from "react";

const PostItemContext = createContext();
const updatePostContext = createContext();
export function usePostContext() {
  return useContext(PostItemContext);
}
export function useUpdatePostContext() {
  return useContext(updatePostContext);
}

export default function PostContextProvider({ children }) {
  const [postItem, setPostItem] = useState([]);
  function AddPost(item) {
    setPostItem((data) => [...data, item]);
  }
  function DeletePost(delete_id) {
    const filteredpost = postItem.filter((item) => item.id !== delete_id);
    // setPostItem(filteredpost)
    setPostItem(filteredpost);
  }
  // const providerValue = {
  //   postItem,setPostItem
  // };
  // const provided = useMemo(() => ({
  //   value: postItem,
  //   setValue: (value) => setPostItem(value)
  // }), [])
  // function setPosts(arg){
  //   setPostItem(arg)
  // }
  return (
    <PostItemContext.Provider value={{ postItem, setPostItem }}>
      <updatePostContext.Provider value={{ AddPost, DeletePost }}>
        {children}
      </updatePostContext.Provider>
    </PostItemContext.Provider>
  );
}
