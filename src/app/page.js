"use client";
import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { useEffect, useState } from "react";
import getData from "./api/getData";
import { useTheme, useUpdateTheme } from "utils/themeContext";
import { usePostContext } from "utils/postContext";
import { useUpdatePostContext } from "utils/postContext";
import Router from "next/router";

export default function Home() {
  const { postItem,setPostItem } = usePostContext();
  const {AddPost,DeletePost} = useUpdatePostContext();


  useEffect(() => {
    console.log("rendering...");
    const token = localStorage.getItem('token')
    //home to feed/all
    const url = `https://chimes-api.vercel.app/api/v2/posts/feed`;
    getData(url,token).then((data) => {
      console.log("this is the data")
      console.log(data?.posts)
      setPostItem(data?.posts)
      // data?.map((ele) => console.log(ele.id))
      // .forEach(element => {
      //   AddPost(element)
      // })
    }
    );
    console.log("new postitem")
    console.log(postItem);
  }, []);
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  return (
    <div className="">
      <Profile />
      {/* {postItem ? ( */}
        <div>
          {/* <div
            className={darkTheme ? `bg-black` : `bg-red-500`}
            onClick={toggleTheme}
          >
            hey
          </div> */}

            <Feedgrid data={postItem}/>

        </div>
      {/* ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}
