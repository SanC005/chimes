"use client";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { useEffect, useState } from "react";
import getData from "./api/getData";
import { useTheme, useUpdateTheme } from "utils/themeContext";
import { usePostContext } from "utils/postContext";

export default function Home() {
  const [count, setCount] = useState(0);
  const { postItem, setPostItem } = usePostContext();
  useEffect(() => {
    console.log("rendering...");
    const url = `https://chimes-api.vercel.app/api/v1/posts`;
    // getData(url).then((data) => setPostItem(data?.posts));
    console.log("new postitem")
    console.log(postItem);
  }, [postItem]);
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  return (
    <div className="">
      <Profile />
      {/* {postItem ? ( */}
        <div>
          <div
            className={darkTheme ? `bg-black` : `bg-red-500`}
            onClick={toggleTheme}
          >
            hey
          </div>

            <Feedgrid data={postItem} />

        </div>
      {/* ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}
