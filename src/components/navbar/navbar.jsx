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
  return (
    <div className="bg-blue-400 w-full h-16 z-20 flex justify-between fixed">
      <div className="w-full flex justify-between">
        <Link href={"/"}>
          <div className="px-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7096/7096707.png"
              height={60}
              width={60}
              alt="chimes icon"
            ></img>
          </div>
        </Link>
        <div className="flex items-center w-1/2 min-w-[200px] shrink-0 justify-center bg-cyan-900 rounded-md">
          

<form>   
    <label className="m-2 hidden xl:inline-block">Search</label>
    <input placeholder="search posts" className="mx-1 text-black"></input>
    <Search className="hover:bg-cyan-950 active:bg-gray-500"/>
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
      <div className="p-3 md:hidden">
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
};
export default Navbar;
