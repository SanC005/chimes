"use client";
import NavItem from "./navitem";
import React, { useState } from "react";
import Link from "next/link";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Public", href: "/public" },
  { text: "Private", href: "/private" },
  { text: "Profile", href: "/profile" },
  { text: "Login", href: "/login" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const active = ""
  return (
    <div className="bg-blue-400 w-full h-16 z-20 flex justify-between fixed">
      <div className=" w-1/2">
      <Link href={"/"}>
        <div className="px-4">
          <img src="https://cdn-icons-png.flaticon.com/128/7096/7096707.png" height={60} width={60} alt="chimes icon"></img>
        </div>
      </Link>
        
      </div>
      <div className={`${navActive ? "active" : ""} flex w-1/2 justify-end`}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
