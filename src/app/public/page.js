"use client"
import getData from "app/api/getData";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import { postDatas } from "components/public_feed/postdata";
import { useEffect, useState } from "react";
import { usePostContext } from "utils/postContext";

export default function Public() {
  const [publicItem, setPublicItem] = useState([]);
  const { postItem,setPostItem } = usePostContext();
  useEffect(() => {
    // console.log("rendering...");
    // const url = `https://chimes-api.vercel.app/api/v1/public`;
    // getData(url).then((data) => {
    //   console.log(data.posts)
    //   setPublicItem(data?.posts)
    //   }
    //   );
      const newPublic = postItem.filter((item) => item.visibility===true)
    setPublicItem(newPublic)
  }, [postItem]);
  return (
    <div>
      <Profile />
      <Feedgrid data={publicItem} />
    </div>
  );
}
