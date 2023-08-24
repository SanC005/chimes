"use client"
import getData from "app/api/getData";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import { privateDatas } from "components/public_feed/privatedata";
import React, { useEffect, useState } from "react";
import { usePostContext } from "utils/postContext";

export default function Private() {
  const [privateItem, setPrivateItem] = useState([]);
  const { postItem,setPostItem } = usePostContext();
  useEffect(() => {
    // console.log("rendering...");
    // const url = `https://chimes-api.vercel.app/api/v1/private`;
    // getData(url).then((data) => {
    //   console.log(data.posts)
    //   setPrivateItem(data?.posts)
      
    // }
    // );
    let newPrivate = postItem.filter((item) => item.visibility===false)
    setPrivateItem(newPrivate)
  }, []);
  return (
    <div className="text-white bg-red-600">
      <Profile />
      <Feedgrid data={privateItem} />
    </div>
  );
}
