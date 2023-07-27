"use client";
import NavItem from "./navitem";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
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
      <div className=" w-1/2 ">
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
      </div>
      <div className={`flex w-1/2 justify-end invisible md:visible`}>
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
