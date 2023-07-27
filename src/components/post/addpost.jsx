"use client";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
function Addpost() {
  const addnew = () => {
    alert("click");
  };
  return (
    <div className="bg-green-400 text-center max-w-md m-auto w-full h-80 rounded-2xl hover:bg-green-500 active:bg-green-600">
      <div
        className="flex h-full justify-center items-center cursor-pointer"
        onClick={addnew}
      >
        <AddIcon sx={{ fontSize: 180 }} />
      </div>
       
    </div>
  );
}

export default Addpost;
