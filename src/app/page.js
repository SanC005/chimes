"use client";
const originalConsoleWarn = console.warn;
console.warn = function (...args) {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("Support for defaultProps will")
  ) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { useEffect, useState } from "react";
import getData from "./api/getData";
// import { postDatas } from "components/public_feed/postdata";
// import PostsDataDB from "./api/postsDataDB";
// import Postingdata from "components/post/PostingData";

export default function Home() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState([]);
  useEffect(() => {
    console.log("rendering...")
    const url = `https://chimes-api.vercel.app/api/v1/posts`;
    getData(url).then((data) => (setVal(data?.posts))
    )
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //       setVal(data?.posts);
    //     });
    }, [count]);

  return (
    <div className="">
      <Profile />
      {val? <div>
      <div className="bg-red-500" onClick={() => console.log(count)}>hey</div>
      <Feedgrid data={val} setCount={setCount} setVal={setVal}/>
      </div>:<div>Loading...</div>}
    </div>
  );
}
