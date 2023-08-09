import React from "react";
import Post from "../post/post";
import Addpost from "../post/addpost";
function Feedgrid({ data,setCount }) {
  const post = data?.map((postData) => (
    <li className="p-2" key={postData._id}>
      <Post
        setCount={setCount}
        _id={postData._id}
        title={postData.title}
        img={postData.img}
        postTitle={postData.postTitle}
        link={postData.link}
      />
    </li>
  ));
  return (
    <div className="grid grid-cols-1 bg-cyan-500 list-none p-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-2">
        <Addpost setCount={setCount}/>
      </div>
      {post}
    </div>
  );
}

export default Feedgrid;
