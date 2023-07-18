// import Navbar from "@/components/navbar"
import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar/Sidebar";
import "../styles/global.css";
import Feed from "@/components/feed";
export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <div className='text-center bold text-white'>
        chimes
      </div>
      <div className="flex h-100vh">
          <Sidebar/>

        <div className="absolute start-56 stroke-lime-700 end-0">
          <Profile/>
          <Feed/>
        </div>
      </div>

    </main>
  )
}
