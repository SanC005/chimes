"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sidebarEntries } from "./sidebardata";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarComp() {
  const boxes = sidebarEntries.map((item) => (
    <li className="" key={item.id}>
      <MenuItem rootStyles={{ width: "100vw" }}>{item.title}</MenuItem>
    </li>
  ));
  return (
    <div>
      <Sidebar
        rootStyles={{
          height: "100vh",
          background: "white",
          position: "absolute",
          top: "0",
          left: "0",
          padding: "0",
        }}
      >
        <Menu
          rootStyles={{
            height: "40vw",
            width: "100%",
            color: "black",
            padding: "0",
            background: "white",
            display: "flex",
          }}
        >
          <ul> {boxes}</ul>
        </Menu>
      </Sidebar>
    </div>
  );
}
