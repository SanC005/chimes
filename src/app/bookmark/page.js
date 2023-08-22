"use client"
import getData from "app/api/getData";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import React, { useEffect, useState } from "react";

export default function Bookmark() {
  const [BookmarkItem, setBookmarkItem] = useState([]);
  useEffect(() => {
    console.log("rendering...");
    const url = `https://chimes-api.vercel.app/api/v1/bookmark`;
    getData(url).then((data) => {
      console.log(data.posts)
      setBookmarkItem(data?.posts)
      
    }
    );
  }, []);
  return (
    <div className="text-white bg-red-600">
      <Profile />
      <Feedgrid data={BookmarkItem} />
    </div>
  );
}
