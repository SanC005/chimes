"use client";
// import Login from "components/login/login";
// import React, { useState } from "react";
import SignUp from "components/login/signup";
function LoginPage() {
//   const [log, setLog] = useState(true);
//   const Logging = () => {
//       setLog((log) => (!log))
//   }
  return (
    <div className="bg-white h-screen flex justify-center">
      <div className="flex flex-col gap-5 mt-16">
      <div className="">
        <SignUp/>
      </div>
      

      </div>
      
    </div>
  );
}

export default LoginPage;
