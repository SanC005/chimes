// "use client"
import Profile from "components/profile/profile";
// import "src/app/globals.css";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
import { postDatas } from "components/public_feed/postdata";
export default function Home() {
  return (
    <div className="">
      
    <Profile />
    {/* <Feedgrid data={postDatas}/> */}
    
    </div>
  );
}
