// "use client"
import Profile from "components/profile/profile";
// import "src/app/globals.css";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { postDatas } from "components/public_feed/postdata";
// import Postingdata from "components/post/PostingData";

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    //   "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    // },
    // body: JSON.stringify({}),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok.");
        // console.log("error")
    }
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
  let data
  fetchData(`https://chimes-api.vercel.app/api/v1/posts`).then(function(result){
          console.log("setting")
          console.log(result)
          data =result
          // setVal(result)
          console.log("setted")
  })

  const items = data?.posts
  // console.log(data)
  // const box = items.map(item => <li key={item._id}>{item.title}</li>
  // )
  return (
    <div className="">
      <Profile />
      <Feedgrid data={items}/>
    </div>
  );
}
