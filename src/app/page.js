"use client"
import Profile from "components/profile/profile";
// import "src/app/globals.css";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { postDatas } from "components/public_feed/postdata";
import { useEffect, useState } from "react";
import PostsDataDB from "./api/postsDataDB";
// import Postingdata from "components/post/PostingData";

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    // headers: {
    //   "Content-Type": "application/json",
    //   "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    // },
    // body: JSON.stringify({}),
  
  .then((response) => {
    // if (response.ok) {
    //   // return response.json();
    //   console.log("working")
    // } else {
    //   throw new Error("Network response was not ok.");
    //     // console.log("error")
    // }

    return response.json()
  })
  .then((data) => {
    resolve(data);
  })
  .catch((error) => {
    reject(error);
  });
  });
}

// async function getData() {
//   const res = await fetch('http://localhost:5001/api/v1/posts')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }
export default function Home() {
  const [count,setCount] = useState(0);
  const [val,setVal] = useState(null)
  // const url = `https://jsonplaceholder.typicode.com/posts`
  
  
  
  useEffect(() => {
    const url = `https://chimes-api.vercel.app/api/v1/posts`
    fetch(url).then(response => response.json()).then(data =>{
      // console.log(data.posts[0])
      setVal(data?.posts)
    } )
    
  }, [count])
  
  

  // fetchData(url).then(function(result){
  //         console.log("fetching posts...")
          
  //         setVal(result)
  //         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

  //         const {_id} = result;
  //         console.log(_id)
  // })
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch('api/data')
  //     response = await response.json()
  //     dataSet(response)
  //   }

  //   fetchMyAPI()
  // }, [])
  // useEffect(() => {
  //   async function fetchAPI(urls){
  //     let response = await PostsDataDB(urls)
  //     response = await response.json
  //     console.log(response)
  //     setVal(response)
  //   }
  //   fetchAPI(url)
  // },[])
  //   const data = PostsData(url)
  //   console.log("this is data??")
  // }, []).then(() => {
  //   console.log(data)
  //   console.log("data ended]]]")
  //   setVal(data)
  // })
    
    
  // console.log(data)
  // const box = items.map(item => <li key={item._id}>{item.title}</li>
  // )
  return (
    <div className="">
      <Profile />
      <div className="bg-red-500" onClick={() => console.log(count)}>hey</div>
      <Feedgrid data={val} setCount={setCount}/>
    </div>
  );
}
