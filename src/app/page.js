// "use client"
import Profile from "components/profile/profile";
// import "src/app/globals.css";
import Feedgrid from "components/public_feed/feedgrid";
import NewSidebar from "components/sidebar/newSidebar";
export default function Home() {
  return (
    <div className="flex">
      <div className="bg-black w-full">
        <NewSidebar/>
      </div>
    <div className="absolute start-0 end-0 md:start-56 md:end-0 lg:start-56 lg:end-0">
      <Profile />
      <Feedgrid />
    </div>

    </div>
  );
}
