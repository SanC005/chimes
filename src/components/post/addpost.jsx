"use client";
import React, { useEffect, useState, useRef } from "react";
import { postData, fetchData } from "app/api/postData";
import { usePostContext, useUpdatePostContext } from "utils/postContext";
import { Close } from "@mui/icons-material";
// import { getLinkPreview } from "link-preview-js";
// import AddIcon from "@mui/icons-material/Add";

function Addpost() {
  const [linktext, setLinkText] = useState("");
  const [linkdata, setLinkData] = useState({});
  const [toggleValue, setToggleValue] = useState(false);
  const [error,setError]=useState(false);
  const [toggleBookmarkValue, setToggleBookmarkValue] = useState(false);
  const { postItem } = usePostContext();
  const { AddPost, DeletePost } = useUpdatePostContext();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      //Adding to useContext
      console.log("adding new post...");
      const newitemlist = postItem;
      let item = {
        id: String(Math.random()),
        title: linkdata?.title || "no title available",
        img:
          linkdata?.image ||
          "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        postTitle: linkdata?.description || "no description available",
        link: linkdata?.url || "no link available",
        visibility: toggleValue,
        bookmark: toggleBookmarkValue,
        liked:false,
      };
      console.log("before");
      console.log(postItem);
      AddPost(item);
      console.log("after");
      console.log(postItem);
      const url = `https://chimes-api.vercel.app/api/v1/home`;
      postData(item, url);
    } else {
      isMounted.current = true;
    }
  }, [linkdata]);

  const changeLink = (e) => {
    setLinkText(e);
  };
  const OnTheme = "bg-[#2196F3]";
  const offTheme = "bg-[#ccc]";
  const toggleVisibility = () => {
    setToggleValue((toggleValue) => !toggleValue);
  };
  const toggleBookmark = () => {
    setToggleBookmarkValue((toggleBookmarkValue) => !toggleBookmarkValue);
  };
  const addnew = async (e) => {
    e.preventDefault();
    // console.log("working")
    await fetchData(
      `https://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_PREVIEW_API_KEY}&q=${linktext}`
    ).then(function (result) {
      console.log("fetching link...");
      setError(false)
      setLinkData(result);
    }).catch(() => setError(true));
  };
  const Clear = () => {
    document.querySelector('#addLinkInput').value=''
    setLinkText("")
  }
  return (
    <div className="bg-green-400 text-center max-w-md m-auto w-full h-80 rounded-2xl hover:bg-green-500 ">
      <div className="flex h-full justify-center items-center cursor-pointer text-black">
        {/* <AddIcon sx={{ fontSize: 180 }} /> */}
        <div className="w-11/12 lg:w-full ">
          <form className="flex flex-col gap-4">
            <div className="flex items-center justify-center px-1 gap-1 ">

              <div className="font-bold">Link</div>

              <input id="addLinkInput"
                className="block min-w-0"
                type="text"
                onChange={(e) => changeLink(e.target.value)}
              />

            <div className="bg-gray-400 p-2 rounded-md" onClick={() => Clear()}><Close/></div>
            </div>
            <div className="flex flex-col gap-3  w-[280px] m-auto overflow-hidden">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => toggleVisibility()}
              ></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 peer-focus:ring-0 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                {toggleValue ? <div>Public</div> : <div>Private</div>}
              </span>
            </label>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => toggleBookmark()}
              ></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 peer-focus:ring-0 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                Add to Bookmarks
              </span>
            </label>
            </div>
            <div>

            </div>


            {/* <label className="w-14 h-8 inline-block relative"> 
                <input type="checkbox" className="" onClick={() => toggleVisibility()}></input>
                <span className={`${toggleValue?OnTheme:offTheme} absolute top-0 left-0 right-0 bottom-0 cursor-pointer before:bg-white  before:h-7 before:w-7`}></span>
            </label> */}
            <button
              onClick={(e) => addnew(e)}
              className="bg-slate-400 mx-auto p-1 rounded-md w-2/3"
            >
              Add
            </button>
            {error?<div className="text-red-600">Preview for the url is not available</div>:''}
          </form>
        </div>
      </div>
       
    </div>
  );
}

export default Addpost;
