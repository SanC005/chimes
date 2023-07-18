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
      <div className="flex justify-center ">
        <div>
          {" "}
          <img
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            className="w-48 rounded-full"
          ></img>
        </div>
        <div>user_name</div>
      </div>
      <div className="flex justify-evenly">
        <div>
            Public
        </div>
        <div>
            Private
        </div>
      </div>
     
    </div>
  );
}

export default Profile;
