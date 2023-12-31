"use client";
import React, { useState,useEffect } from "react";
import Popup from "../popups/popup";
import Link from "next/link";
import Sharebox from "components/popups/sharebox";
import Comments from "components/popups/comments";
import {
  Bookmark,
  BookmarkAdd,
  BookmarkBorder,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useUpdatePostContext } from "utils/postContext";
import UpdateData from "app/api/updateData";

function Post({ like,bookmark, visibility, ...props }) {
  //STATES DEFINED HERE
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [likecount, setLikecount] = useState(0);
  // const [like, setLike] = useState(false);
  const { AddPost, DeletePost,UpdatePost } = useUpdatePostContext();
  const [expand, setExpand] = useState({
    opens: false,
    window: "start",
  });


  //VARIABLES DEFINED HERE
  const win = expand.window;
  const buttonStyles = "hover:bg-green-500 active:bg-green-700 cursor-pointer";
  const btnprimary = "w-full border-lime-400 border";
  const bluebg = "bg-blue-500 hover:bg-blue-600 focus:bg-blue-800 active:bg-blue-800"
  const greenbg = "bg-green-400 hover:bg-green-500 focus:bg-green-700 active:bg-green-700"


  //FUNCTIONS DEFINED HERE
  function Deletepost(delete_id) {
    DeletePost(delete_id);
    console.log("deleting...");
    const token = localStorage.getItem('token')
    fetch(`https://chimes-api.vercel.app/api/v2/posts/home/${delete_id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  function UpdatingDBPost(id,item){
    const token = localStorage.getItem('token')
      UpdateData(item,`https://chimes-api.vercel.app/api/v2/posts/home/${id}`,token)
  }
  // const increase = () => {
    //   setLikecount((likecount) => likecount + 1);
    //   console.log("increasing");
    // };
    // const openPopup = () => setButtonPopup((buttonPopup) => !buttonPopup);
    const openShare = (e) => {
      if (e === expand.window) {
        setExpand((prev) => ({
          ...prev,
          opens: false,
          window: "empty",
        }));
      } else {
        setExpand((prev) => ({
          ...prev,
          opens: true,
          window: e,
        }));
      }
    };
  const toggleLike = () => {
    UpdatePost(props.temp_id,"like")
    UpdatingDBPost(props.temp_id,{like:!like})
  };
  const changeVisibility = () => {
    UpdatePost(props.temp_id,"visibility")
    UpdatingDBPost(props.temp_id,{visibility:!visibility})
    
  };
  const changeBookmark = () => {
    UpdatePost(props.temp_id,"bookmark")
    UpdatingDBPost(props.temp_id,{bookmark:!bookmark})
  };
  // useEffect(() => {
    

  // }, []);
  return (
    <div>
      <div className="bg-green-400 text-center max-w-md m-auto h-80 rounded-2xl flex flex-col ">
        <div className="flex justify-end gap-1">
          <div className={`${buttonStyles}`} onClick={() => changeVisibility()}>
            {/* <Visibility /> */}
            {visibility ? <Visibility /> : <VisibilityOff />}
          </div>
          <div className={`${buttonStyles}`} onClick={() => changeBookmark()}>
            {/* <BookmarkAdd /> */}
            {bookmark ? <Bookmark /> : <BookmarkBorder />}
          </div>
          <div
            className={`${buttonStyles}`}
            onClick={() => Deletepost(props.temp_id, props.data)}
          >
            <Close />
          </div>
        </div>


        <div className="h-16 text-xl truncate">{props.title}</div>
        <Link href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-around h-full">
            <div className="px-1">
              <img
                src={props.img}
                className="object-cover w-72 h-44 border border-green-800 rounded-lg"
              ></img>
            </div>
          </div>
        </Link>
        <div className="flex flex-col">
          <div className="h-8 text-sm truncate px-2">{props.postTitle}</div>
          <div className="h-8 p-2 text-sm hover:text-gray-200 active:text-gray-500 truncate">
            <Link href={props.link} target="_blank" rel="noopener noreferrer">
              {props.link}
            </Link>
          </div>
        </div>


        <div className="flex justify-around bottom-0 cursor-pointer">
          <div className={`${btnprimary} rounded-bl-2xl ${like?`${bluebg}`:`${greenbg}`}`} onClick={() => toggleLike()}>
            {/* {likecount} */}
             {like?<div>Liked</div>:<div>Like!</div>}
            {/* <button className="w-full" onClick={increase}>{likecount} Likes</button> */}
          </div>
          <div
            className={`${btnprimary} ${(expand.opens && expand.window==="comment")?`${bluebg}`:`${greenbg}`}`}
            name="comment"
            onClick={() => openShare("comment")}
          >
            Comment
          </div>
          <div
            className={`${btnprimary} rounded-br-2xl ${(expand.opens && expand.window==="share")?`${bluebg}`:`${greenbg}`}`}
            name="share"
            onClick={() => openShare("share")}
          >
            Share
          </div>
        </div>
        <div className="absolute left-0 top-0 right-50">
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>This is my popup</h3>
          </Popup>
        </div>
      </div>
      <div
        className={`bg-black rounded-xl m-1 h-20 block max-w-md m-auto ${
          expand.opens ? "block" : "hidden"
        }`}
      >
        <div className="">
          {win === "comment" ? (
            <Comments />
          ) : (
            // <Sharebox data={props} />
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
