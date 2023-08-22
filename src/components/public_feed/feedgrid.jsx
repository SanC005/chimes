import React from "react";
import Post from "../post/post";
import Addpost from "../post/addpost";



function Feedgrid({ data }) {
  const post = data?.map((postData) => (
    <li className="p-2" key={postData.id}>
      <Post
        id={postData.id}
        title={postData.title}
        img={postData.img}
        postTitle={postData.postTitle}
        link={postData.link}
        visibility={postData.visibility}
        bookmark={postData.bookmark}
        like={postData.like}
      />
    </li>
  ));
  return (
    <div className={`bg-cyan-500 grid grid-cols-1 list-none p-2 md:grid-cols-2 lg:grid-cols-3`}>
      <div className="p-2">
        <Addpost data={data}/>
      </div>
      {post}
    </div>
  );
}

export default Feedgrid;
