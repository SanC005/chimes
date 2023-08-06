"use client";
import React, { useState } from "react";
import { getLinkPreview } from "link-preview-js";
import AddIcon from "@mui/icons-material/Add";
function Addpost() {
  const [linktext,setLinkText]= useState("");
  const [linkdata,setLinkData]= useState("");
  const changeLink = (e) => {
      setLinkText(e)
  }
  const addnew = (e) => {
    e.preventDefault()
    console.log("working")
    getLinkPreview(linktext).then((data) =>{
      console.log(data)
      setLinkData(data)
    }
    );
    console.log(setLinkData)
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
