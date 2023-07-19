// import Navbar from "@/components/navbar"
"use client"
import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar/Sidebar";
import Popup from "@/components/Popup";
import "../styles/global.css";
import Feed from "@/components/feed";
import { useState } from "react";
export default function Home() {
  // const [buttonPopup,setButtonPopup] = useState(false);
  return (
    <div>
      <main>
      {/* <Navbar/> */}
      {/* <div className='text-center bold text-white'>
        chimes
      </div> */}
      <div className="flex h-100vh">
        {/* <Sidebar /> */}
        <div className="absolute start-56 end-0">
          <Profile />
          <Feed />
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
