// import Navbar from "@/components/navbar"

import Sidebar from "@/components/Sidebar";
import "../styles/global.css";
export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <Sidebar/>
      <div className='text-center bold'>
        chimes
      </div>
    </main>
  )
}
