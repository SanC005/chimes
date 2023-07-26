import React from "react";
import { sidebarEntries } from "./sidebardata";
import Link from "next/link";
export default function NewSidebar() {
    const item = sidebarEntries.map(entry => 
      <Link className="h-16 text-lg p-4 hover:bg-white hover:text-black" key={entry.id}
          href={entry.link}>{entry.title}</Link>
    )
  return (
    <div className="bg-inherit h-screen fixed w-56">
      <div className="flex flex-col ">{item}</div>
    </div>
  );
}
