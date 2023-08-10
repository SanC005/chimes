"use client";
import React, { useState } from "react";
import Popup from "../popups/popup";
import Link from "next/link";
import Sharebox from "components/popups/sharebox";
import Comments from "components/popups/comments";
import { BookmarkAdd, Close, Visibility } from "@mui/icons-material";
function Deletepost(id, setCount,data) {
  console.log(data)
  // Object.keys(data).forEach(function(_id){
  //   if (data[_id] === id) {
  //     delete data[_id];
  //   }
  // });
  fetch(`https://chimes-api.vercel.app/api/v1/posts/${id}`, {
    method: "DELETE",
  })
  // .then(() => setCount((count) => count - 1));
}
function Post(props) {
  const buttonStyles = "hover:bg-green-500 active:bg-green-700 cursor-pointer";
  const increase = () => {
    setLikecount((likecount) => likecount + 1);
    console.log("increasing");
    // alert(`${expand.opens} ${expand.window}`)
  };
  // const openPopup = () => setButtonPopup((buttonPopup) => !buttonPopup);
  const openShare = (e) => {
    // alert(expand.opens)
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
  const [buttonPopup, setButtonPopup] = useState(false);
  const [likecount, setLikecount] = useState(0);
  const [expand, setExpand] = useState({
    opens: false,
    window: "start",
  });
  const win = expand.window;
  return (
    <div>
      <div className="bg-green-400 text-center max-w-md m-auto h-80 rounded-2xl flex flex-col ">
        <div className="flex justify-end gap-1">
          <div className={`${buttonStyles}`}>
            <Visibility />
          </div>
          <div className={`${buttonStyles}`}>
            <BookmarkAdd />
          </div>
          <div
            className={`${buttonStyles}`}
            onClick={() => Deletepost(props._id, props.setCount,props.data)}
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
          <div className="btn-primary rounded-bl-2xl " onClick={increase}>
            {likecount} Likes
            {/* <button className="w-full" onClick={increase}>{likecount} Likes</button> */}
          </div>
          <div
            className="btn-primary"
            name="comment"
            onClick={() => openShare("comment")}
          >
            Comment
          </div>
          <div
            className="btn-primary rounded-br-2xl"
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
          {win === "comment" ? <Comments /> : <Sharebox data={props} />}
        </div>
      </div>
    </div>
  );
}

export default Post;
