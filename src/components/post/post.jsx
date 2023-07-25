"use client";
import React, { useState } from "react";
import Popup from "../popups/popup";
import Link from "next/link";
import Sharebox from "components/popups/sharebox";
import Comments from "components/popups/comments";

function Post(props) {
  const increase = () => {
    setLikecount((likecount) => likecount + 1);
    console.log("increasing");
  };
  function increase2() {
    console.log("inc2");
  }
  const openPopup = () => setButtonPopup((buttonPopup) => !buttonPopup);
  const openShare = (e) => {
    // alert(expand.opens)
    if(e==expand.window){
      setExpand((prev) => ({
        ...prev, opens: false, window: "empty"
      }))
    }
    else{
      setExpand((prev) => ({
        ...prev, opens: true, window: e
      }))
    }
    // setExpand((prev) => ({
    //   ...prev,
    //   window: e,
    //   opens: !prev.opens,
    // }));
  };
  // function HandleClick() {
  // setLikecount((likecount) => (likecount+1));
  // }
  const [buttonPopup, setButtonPopup] = useState(false);
  const [likecount, setLikecount] = useState(0);
  //UseReducer?
  const [expand, setExpand] = useState({
    opens: false,
    window: "start",
  });
  const win = expand.window;
  return (
    //w-1/3 earlier before mapping
    // {`text-white ${true?'text-green-500' : 'text-red-500'`} template string
    <div>
      <div className="bg-green-400 text-center max-w-md m-auto h-80 rounded-2xl flex flex-col">
        <div className="h-16 text-xl">{props.title}</div>
        <Link href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-around h-full">
            <div className="px-1">
              <img
                // src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                //src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
                src={props.img}
                className="object-cover w-72 h-44 border border-green-800 rounded-lg"
              ></img>
            </div>
          </div>
        </Link>
        <div className="flex flex-col">
          <div className="h-full">{props.postTitle}</div>
          <div className="h-full p-2 text-sm hover:text-gray-200 active:text-gray-500">
            <Link href={props.link} target="_blank" rel="noopener noreferrer">
              {props.link}
            </Link>
          </div>
        </div>

        <div className="flex justify-around bottom-0 ">
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
        className={`bg-black h-20 block max-w-md m-auto ${
          expand.opens ? "block" : "hidden"
        }`}
      >
        <div>{win == "comment" ? <Comments /> : <Sharebox />}</div>
      </div>
    </div>
  );
}

export default Post;
