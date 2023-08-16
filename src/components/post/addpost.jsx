"use client";
import React, { useEffect, useState } from "react";
import {postData,fetchData} from "app/api/postData";
import { usePostContext, useUpdatePostContext } from "utils/postContext";
// import { getLinkPreview } from "link-preview-js";
// import AddIcon from "@mui/icons-material/Add";

function Addpost({setCount,data,setData}) {
  const [linktext,setLinkText]= useState("");
  const [linkdata,setLinkData]= useState({});
  const { postItem} = usePostContext();
  const {AddPost,DeletePost} = useUpdatePostContext();
  useEffect(() => {
    //Adding to useContext
    const newitemlist = postItem
    let item = { id:String(Math.random()),
      title: linkdata?.title || "no title available",
    img: linkdata?.image || "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postTitle: linkdata?.description || "no description available",
    link: linkdata?.url || "no link available"}
    console.log("before")
    console.log(postItem)
    AddPost(item)
    console.log("after")
    console.log(postItem)
    // console.log("item aara")
    // console.log(item)
    // console.log("above is item")
    // console.log(postItem)
    // newitemlist.push(item)
    // console.log(newitemlist)
    // setPostItem(newitemlist) //issue here
    // console.log("this is item")
    const url = `https://chimes-api.vercel.app/api/v1/posts`
    postData(item,url)
    // .then(setTimeout(() => {
    //   console.log('count incremented...')
    //   setCount((count) => count + 1)
    // }, 1000));
  },[linkdata])
  
  const changeLink = (e) => {
      setLinkText(e)
  }
  const addnew = async (e) => {
    e.preventDefault()
    // console.log("working")
    await fetchData(`http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_PREVIEW_API_KEY}&q=${linktext}`).then(function(result){
      console.log("fetching link...")
      
      // console.log(result)
      setLinkData(result)
      // console.log("got link and this is the new data")
      // data.push({
      //   "title": linkdata?.title || "basic title",
      //   "img": linkdata?.image || "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      //   "postTitle": linkdata?.description || "basic description",
      //   "link": linkdata?.url || "www.google.com",
      // })
      // setData(data)
      // console.log(data)
      })
        
  };
  return (
    <div className="bg-green-400 text-center max-w-md m-auto w-full h-80 rounded-2xl hover:bg-green-500 active:bg-green-600">
      <div
        className="flex h-full justify-center items-center cursor-pointer text-black"
        
      >
        {/* <AddIcon sx={{ fontSize: 180 }} /> */}
        <div>
          <form className="flex flex-col gap-3">
            <label className="">Link 
            <input className="mx-2"type="text" onChange={(e) => changeLink(e.target.value)} />
            </label>
            <button onClick={(e) => addnew(e)} className="bg-slate-400 m-1 p-1 rounded-md">Add</button>
          </form>
        </div>
      </div>
       
    </div>
  );
}

export default Addpost;
