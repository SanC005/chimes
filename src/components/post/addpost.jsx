"use client";
import React, { useState } from "react";
import { getLinkPreview } from "link-preview-js";
import AddIcon from "@mui/icons-material/Add";
function postData(linkdata,setCount) {
  return new Promise((resolve, reject) => {
    fetch(`https://chimes-api.vercel.app/api/v1/posts`,{
      method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "title": linkdata?.title,
      "img": linkdata?.image,
      "postTitle": linkdata?.description,
      "link": linkdata?.url,
    })
  }
    )
  .then((response) => {
    if (response.ok) {
      
      return response.json();
    } else {
      console.log(linkdata.url)
      console.log("post didnt add")
      // throw new Error("Post didnt happen.");
    }
  })
  .then((data) => {
    resolve(data);
  })
  .then(()=> setCount((count) => (count+1)))
  .catch((error) => {
    reject(error);
  });
  });
}
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error while fetching")
      throw new Error("Network response was not ok.");
    }
  })
  .then((data) => {
    resolve(data);
  })
  .catch((error) => {
    reject(error);
  });
  });
}
function Addpost({setCount}) {
  const [linktext,setLinkText]= useState("");
  const [linkdata,setLinkData]= useState({});
  const changeLink = (e) => {
      setLinkText(e)
  }
  const addnew = (e) => {
    e.preventDefault()
    console.log("working")
    fetchData(`http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_PREVIEW_API_KEY}&q=${linktext}`).then(function(result){
      console.log("fetching link...")
      setLinkData(result)
      console.log(result)
      console.log("got link")
      }).then(function(result){
        console.log("fetching link...")
        postData(linkdata,setCount)
        
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
