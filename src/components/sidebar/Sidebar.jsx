"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sidebarEntries } from "./sidebardata";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function sidebar() {
  const boxes = sidebarEntries.map(item => <li className="" key={item.id}>
    <MenuItem rootStyles={{'width':'100vw'}}>{item.title}</MenuItem>
  </li>)
  return (
    <div>

    
    <Sidebar rootStyles={{
     'height' :'100vh',
     'background':'white',
     'position':'absolute',
      'top': '0',
      'left': '0',
      'padding':'0'
    }}>
    <Menu rootStyles={{
      'height':'40vw',
      'width':'100%',
      'color':'black',
      'padding':'0',
      // 'border':'black solid',
      'background':'white',
      'display':'flex',
      // 'overflow':'auto'
    }}>
      
      {/* <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu> */}
      {/* <MenuItem rootStyles={{'width':'100vw'}} className="bg-indigo-500"> Documentation </MenuItem> */}
      <ul> {boxes}</ul>
      {/* <MenuItem> {sidebarEntries[0].title} </MenuItem>
      <MenuItem> Documentation </MenuItem>
      <MenuItem> Calendar </MenuItem>
      <MenuItem> Documentation </MenuItem>
      <MenuItem> Calendar </MenuItem> */}
    </Menu>
  </Sidebar>
  </div>
  )
}

export default sidebar;
