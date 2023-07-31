// "use client"
import Profile from "components/profile/profile";
// import "src/app/globals.css";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { postDatas } from "components/public_feed/postdata";
// import Postingdata from "components/post/PostingData";
async function getData() {
  const res = await fetch('http://localhost:5001/api/v1/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Home() {

  const data = await getData()
  const items = data.posts
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
