import React from "react";
import Post from "../post/post";
import Addpost from "../post/addpost";
import { useTheme, useUpdateTheme } from "utils/themeContext";


function Feedgrid({ data }) {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  const post = data?.map((postData) => (
    <li className="p-2" key={postData.id}>
      <Post
        id={postData.id}
        title={postData.title}
        img={postData.img}
        postTitle={postData.postTitle}
        link={postData.link}
      />
    </li>
  ));
  return (
    <div className={` ${darkTheme?"bg-purple-400":"bg-cyan-500"} grid grid-cols-1 list-none p-2 md:grid-cols-2 lg:grid-cols-3`}>
      <div className="p-2">
        <Addpost data={data}/>
      </div>
      {post}
    </div>
  );
}

export default Feedgrid;
