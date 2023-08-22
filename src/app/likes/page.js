"use client"
import getData from "app/api/getData";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import React, { useEffect, useState } from "react";

export default function Likes() {
  const [LikesItem, setLikesItem] = useState([]);
  useEffect(() => {
    console.log("rendering...");
    const url = `https://chimes-api.vercel.app/api/v1/likes`;
    getData(url).then((data) => {
      console.log(data.posts)
      setLikesItem(data?.posts)
      
    }
    );
  }, []);
  return (
    <div className="text-white bg-red-600">
      <Profile />
      <Feedgrid data={LikesItem} />
    </div>
  );
}
