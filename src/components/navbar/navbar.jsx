"use client";
import NavItem from "./navitem";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Public", href: "/public" },
  { text: "Private", href: "/private" },
  { text: "Profile", href: "/profile" },
  { text: "Login", href: "/login" },
];
const Navbar = () => {
  const [hamMenu,sethamMenu] = useState(false);
  const openMenu = () => {
      sethamMenu((hamMenu) => !hamMenu)
  
  }
  return (
    <div className="flex flex-col">
    <div className={`bg-blue-400 w-full h-16 z-20 flex justify-between fixed`}>
      <div className="w-full flex justify-between">
        <Link href={"/"}>
          <div className="px-2  h-full rounded-full ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7096/7096707.png"
              height={60}
              width={60}
              alt="chimes icon"
            ></img>
          </div>
        </Link>
        <div className="flex items-center w-1/2 min-w-[230px] lg:min-w-[360px] shrink-0 justify-center rounded-md">
        
          <form className="flex">   
              {/* <label className="m-2 hidden xl:block">Search</label> */}
              <div className="flex items-center">
              <input placeholder="search for posts..." className="w-[180px] mx-1 text-black rounded-md opacity-90 lg:w-[300px]"></input>
              <Search fontSize="large" className=" bg-blue-600 hover:bg-sky-600 active:bg-sky-300 m-1 rounded-md ring-1 ring-blue-600"/>

              </div>
          </form>

        </div>
      </div>
      <div className={`md:flex justify-end hidden md:visible`}>
        {MENU_LIST.map((menu) => (
          <div key={menu.text}>
            <NavItem {...menu} />
          </div>
        ))}
      </div>
      <div className="p-3 md:hidden" onClick={() => openMenu()}>
        <MenuIcon fontSize="large" />
      </div>
    </div>
    <div className={`mt-16 w-full fixed bg-blue-600 z-20 ${hamMenu?`visible`:`hidden`}`}>
    {MENU_LIST.map((menu) => (
          <div key={menu.text} >
            <NavItem {...menu} />
          </div>
        ))}
    </div>
    </div>
  );
};
export default Navbar;
