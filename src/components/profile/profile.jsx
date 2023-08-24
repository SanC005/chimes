"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import Desc from "./description/desc";
import { CheckBox } from "@mui/icons-material";
function Profile() {
  //VARIABLES DEFINED HERE
  const lightbg = ""
  const darkbg = "hover:bg-white hover:text-black active:bg-white active:text-black"
  const [person, setPerson] = useState({
    icon: "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
    username: "Username",
    description: "write your description!",
  });
  const [buttonEdit, setButtonEdit] = useState({
    value: false,
    text: "edit",
  });
  const ChangeDesc = () => {
    setButtonEdit((buttonEdit) => !buttonEdit);
    // alert(buttonEdit)
  };
  
  const changeText = (newtext) => {
      // alert(person.description)
      setPerson((prevState) => ({
        ...prevState,description:newtext
      }))
  }
    

  return (
    <div className="bg-cyan-700">
      <div className="max-w-lg  mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-3xl p-10 ">
        <div className="md:flex md:justify-evenly">
          <div className="md:shrink-0 flex justify-center">
            <img
              className="h-36 w-36 object-cover md:h-48 md:w-48 rounded-full"
              src={person.icon}
              alt="Profile Icon"
            ></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold text-center md:text-left">
              {person.username}
            </div>
            <div
              onClick={ChangeDesc}
              className="block mt-1 text-black hover:bg-slate-200 text-center md:text-left pr-2 cursor-pointer"
            >
              {buttonEdit ? (
                <div className="">
                  <EditIcon />
                  Edit
                </div>
              ) : (
                <div className="">
                  <CheckBox />
                  Save
                </div>
              )}
            </div>
            <div className="mt-2 text-slate-500 text-center md:text-left">
              <Desc text={person.description} trigger={buttonEdit} changeText={changeText}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly text-2xl text-center bg-black">
        <Link className="w-full" href="/public">
          <div className={`${darkbg} w-full`}>Public</div>
        </Link>

        <Link className="w-full" href="/private">
          <div className={`${darkbg} w-full`}>Private</div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
