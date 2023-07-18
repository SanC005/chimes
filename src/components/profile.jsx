import React from "react";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
function Profile() {
  return (
    <div className="text-white justify-center">
      {/* <Image
      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      <div className="flex justify-center p-5 bg-cyan-200">
        <div className="px-8 w-1/4 py-4 object-cover">
          <img
            // src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            className="object-cover rounded-full w-48 h-48"
          ></img>
        </div>
        <div className="flex-col bg-blue-400 w-1/3 text-left rounded-lg p-4 ">
            <div className="flex justify-between">
            <div className="pb-3">user_name</div>
            <div className="bg-gray-700 text-center w-1/4 rounded-lg h-1/4"><EditIcon/>edit</div>

            </div>
            <div className="text-sm h-5/6 bg-yellow-400 w-full"> Description!</div>
        </div>
      </div>
      <div className="flex justify-evenly text-2xl text-center">
        <div className="border-red-500 hover:bg-white hover:text-black w-full">
            Public
        </div>
        <div className="border-red-500 hover:bg-white hover:text-black w-full">
            Private
        </div>
      </div>
     
    </div>
  );
}

export default Profile;
