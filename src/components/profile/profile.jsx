"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import Desc from "./description/desc";
import { CheckBox } from "@mui/icons-material";
function Profile() {
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
  function changeIcon() {}

  return (
    <div className="bg-cyan-700">
      {/* <Image
      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      {/* <div className="flex justify-center p-5 bg-cyan-200 sm:block">
        <div className="px-8 w-1/4 py-4 object-cover">
          <img
            // src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            //src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            src={person.icon}
            className="object-cover rounded-full w-48 h-48"
          ></img>
          
        </div>
        <div className="flex-col bg-blue-500 w-1/3 text-left rounded-lg p-4">
            <div className="flex justify-between">
            <div className="pb-3">{person.username}</div>
            <div className="bg-blue-700 text-center w-1/4 rounded-lg h-1/4" >
                <button onClick={ChangeDesc()}><EditIcon/>{buttonEdit.text}</button>
                </div>

            </div>
            <div className="text-sm h-5/6 bg-blue-400 w-full rounded-lg p-1 px-2"><Desc text={person.description} trigger={buttonEdit} setTrigger={setButtonEdit}/></div>
        </div>
      </div> */}
      <div class="max-w-lg  mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-3xl p-10 ">
        <div className="md:flex md:justify-evenly">
          <div className="md:shrink-0 flex justify-center">
            <img
              class="h-36 w-36 object-cover md:h-48 md:w-48 rounded-full"
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
                <div>
                  <CheckBox />
                  Save
                </div>
              )}
            </div>
            <p className="mt-2 text-slate-500 text-center md:text-left">
              {person.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly text-2xl text-center bg-black">
        <Link className="w-full" href="/public">
          <div className=" hover:bg-white hover:text-black w-full">Public</div>
        </Link>

        <Link className="w-full" href="/private">
          <div className=" hover:bg-white hover:text-black w-full">Private</div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
