"use client";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { useEffect, useState } from "react";
import getData from "./api/getData";
import { useTheme, useUpdateTheme } from "utils/themeContext";
import { usePostContext } from "utils/postContext";
// const originalConsoleWarn = console.warn;
// console.warn = function (...args) {
//   if (
//     args[0] &&
//     typeof args[0] === "string" &&
//     args[0].includes("Support for defaultProps will")
//   ) {
//     return;
//   }
//   originalConsoleWarn.apply(console, args);
// };
// import { postDatas } from "components/public_feed/postdata";
// import PostsDataDB from "./api/postsDataDB";
// import Postingdata from "components/post/PostingData";

export default function Home() {
  const [count, setCount] = useState(0);
  const {postItem,setPostItem} = usePostContext()
  useEffect(() => {
    console.log("rendering...")
    const url = `https://chimes-api.vercel.app/api/v1/posts`;
    getData(url).then((data) => (setPostItem(data?.posts))
    )
      console.log(postItem)
    }, [count]);
    const darkTheme = useTheme()
    const toggleTheme = useUpdateTheme()
  return (
    <div className="">
      <Profile />
      {postItem? <div>
      <div className={darkTheme? `bg-black`:`bg-red-500`} onClick={toggleTheme}>hey</div>
      <Feedgrid data={postItem} setCount={setCount}/>
      </div>:<div>Loading...</div>}
    </div>
  );
}
