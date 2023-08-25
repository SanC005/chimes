"use client";
import React, { createContext, useContext, useState } from "react";

const PostItemContext = createContext();
const updatePostContext = createContext();
const activePageContext = createContext();
export function useActivepage(){
  return useContext(activePageContext);
}
export function usePostContext() {
  return useContext(PostItemContext);
}
export function useUpdatePostContext() {
  return useContext(updatePostContext);
}
export default function PostContextProvider({ children }) {
  //Index for page active 
  const [activePage,setActivePage] = useState("Home");
  const [postItem, setPostItem] = useState([]);
  function setNewActivePage(page){
    setActivePage(page);
  }
  function AddPost(item) {
    setPostItem((data) => [...data, item]);
  }
  function UpdatePost(given_id,field) {
    // objIndex = postItem.findIndex((obj => obj.id == given_id));
    // postItem[objIndex].field = newvalue
    const newState = postItem.map(obj => { 
      if(field==="visibility"){
        return (
          obj.id === given_id? { ...obj, visibility:!obj.visibility } : obj
        )
      }
      else if(field==="bookmark"){
        return (
          obj.id === given_id? { ...obj, bookmark:!obj.bookmark } : obj
        )
      }
      else if(field==="like"){
        return (
          obj.id === given_id? { ...obj, like:!obj.like } : obj
        )
      }
    }
    );
    setPostItem(newState)
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
      <updatePostContext.Provider value={{ AddPost, DeletePost,UpdatePost }}>
        <activePageContext.Provider value={{activePage,setNewActivePage}}>
        {children}
        </activePageContext.Provider>
      </updatePostContext.Provider>
    </PostItemContext.Provider>
  );
}
