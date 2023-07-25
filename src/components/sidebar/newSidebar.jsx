import React from "react";
import { sidebarEntries } from "./sidebardata";
export default function NewSidebar() {
    const item = sidebarEntries.map(entry => 
        <li className="h-16 text-lg p-4 hover:bg-white hover:text-black" key={entry.id}>{entry.title}</li>
    )
  return (
    <div className="">
      <ul className="flex flex-col ">{item}</ul>
    </div>
  );
}
