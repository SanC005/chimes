import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div className="text-white justify-center">
      {/* <Image
      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      <div className="flex justify-center p-2 bg-cyan-200">
        <div className="px-8">
          <img
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            className="w-48 rounded-full"
          ></img>
        </div>
        <div className="flex-col bg-blue-400 w-1/3 text-left rounded-lg p-3">
            <div className="pb-2">user_name</div>
            <div className="text-sm grow h-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia omnis at provident possimus fugit expedita, iusto sequi perspiciatis minima voluptate architecto repellendus odit impedit qui, debitis ea modi alias!</div>

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
