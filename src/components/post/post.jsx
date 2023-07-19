"use client";
import React, { useState } from "react";
import Popup from "../Popup";

function Post(props) {
  const increase = () => setLikecount((likecount) => likecount + 1);
  const openPopup = () => setButtonPopup((buttonPopup) => !buttonPopup);
  const [buttonPopup, setButtonPopup] = useState(false);
  // function HandleClick() {
  // setLikecount((likecount) => (likecount+1));
  // }
  const [likecount, setLikecount] = useState(0);
  return (
    //w-1/3 earlier before mapping
    <div className="bg-green-400 text-center w-full h-72 rounded-2xl flex flex-col"> 
      <div className="h-16 text-xl">{props.title}</div>
      <div className="flex justify-around h-full">
        <div className="p-1">
          <img
            // src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            //src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
            src={props.img}
            className="object-cover w-72 h-44"
          ></img>
        </div>
      </div>
      <div className="h-full">{props.postTitle}</div>
      <div className="h-full">{props.link}</div>

      <div className="flex justify-around bottom-0">
        <div className="btn-primary rounded-bl-2xl" onClick={increase}>
          {likecount} Likes
          {/* <button className="w-full" onClick={increase}>{likecount} Likes</button> */}
        </div>
        <div className="btn-primary border-2">Comment</div>
        <div className="btn-primary rounded-br-2xl" onClick={openPopup}>
          Share
        </div>
      </div>
      <div className="absolute left-0 top-0 right-50">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>This is my popup</h3>
        </Popup>
      </div>
    </div>
  );
}

export default Post;
