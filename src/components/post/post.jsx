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

function Post({ bookmark, visibility, ...props }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [likecount, setLikecount] = useState(0);
  const [like, setLike] = useState(false);
  const { AddPost, DeletePost,UpdatePost } = useUpdatePostContext();
  const [expand, setExpand] = useState({
    opens: false,
    window: "start",
  });
  const win = expand.window;
  const buttonStyles = "hover:bg-green-500 active:bg-green-700 cursor-pointer";
  const btnprimary = "w-full border-lime-400 border hover:bg-green-500 focus:bg-black active:bg-green-700";
  function Deletepost(delete_id) {
    DeletePost(delete_id);
    console.log("deleting...");
    fetch(`https://chimes-api.vercel.app/api/v1/posts/${delete_id}`, {
      method: "DELETE",
    });
  }
  const toggleLike = () => {
    setLike((like) => !like);
  };
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
  const changeVisibility = () => {
    UpdatePost(props.id,"visibility")
  };
  const changeBookmark = () => {
    UpdatePost(props.id,"bookmark")
  };
  useEffect(() => {
    setLike(props.like)

  }, []);
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
            onClick={() => Deletepost(props.id, props.data)}
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
          <div className="h-8 text-sm truncate ">{props.postTitle}</div>
          <div className="h-8 p-2 text-sm hover:text-gray-200 active:text-gray-500">
            <Link href={props.link} target="_blank" rel="noopener noreferrer">
              {props.link}
            </Link>
          </div>
        </div>

        <div className="flex justify-around bottom-0 cursor-pointer">
          <div className={`${btnprimary} rounded-bl-2xl ${like?`bg-blue-500 hover:bg-blue-600 active:bg-blue-800`:``}`} onClick={() => toggleLike()}>
            {/* {likecount} */}
             {like?<div>Liked</div>:<div>Like!</div>}
            {/* <button className="w-full" onClick={increase}>{likecount} Likes</button> */}
          </div>
          <div
            className={`${btnprimary} ${(expand.opens && expand.window==="comment")?`bg-blue-500 hover:bg-blue-600 active:bg-blue-800`:``}`}
            name="comment"
            onClick={() => openShare("comment")}
          >
            Comment
          </div>
          <div
            className={`${btnprimary} rounded-br-2xl ${(expand.opens && expand.window==="share")?`bg-blue-500 hover:bg-blue-600 active:bg-blue-800`:``}`}
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
