"use client";
// import SignUp from "components/login/signup";
// import React, { useState } from "react";
import Login from "components/login/login";

function LoginPage() {
  // const [log, setLog] = useState(true);
  // const Logging = () => {
  //     setLog((log) => (!log))
  // }
  return (
    <div className="bg-white h-screen flex justify-center">
      <div className="flex flex-col gap-5 mt-16">
      <div className="">
        <Login/>
      </div>
      

      </div>
      
    </div>
  );
}

export default LoginPage;
