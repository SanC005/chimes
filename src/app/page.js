"use client"
import Navbar from "@/components/navbar/navbar";
import Profile from "@/components/profile/profile";
import Sidebar from "@/components/sidebar/Sidebar";
import Popup from "@/components/Popup";
import "../styles/global.css";
import Feed from "@/components/public_feed/feed";
import { useState } from "react";
import Feedgrid from "@/components/public_feed/feedgrid";
export default function Home() {
  // const [buttonPopup,setButtonPopup] = useState(false);
  return (
    <div>
      <main>
        <div className="py-8">
          <Navbar/>

        </div>
      {/* <div className='text-center bold text-white'>
        chimes
      </div> */}
      <div className="flex h-100vh">
        {/* <Sidebar/> */}
        <div className="absolute start-0 end-0 md:start-56 md:end-0 lg:start-56 lg:end-0">
          <Profile />
          {/* <Feed /> */}
          <Feedgrid/>
        </div>
      </div>
    </main>
    <div className="">
      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>This is my popup</h3>
      </Popup> */}

    </div>
    </div>
    
  );
}
