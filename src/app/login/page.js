"use client";
import Login from "components/login/login";
import SignUp from "components/login/signup";
import React, { useState } from "react";
function LoginPage() {
  const [log, setLog] = useState(true);
  const Logging = () => {
      setLog((log) => (!log))
  }
  return (
    <div className="bg-sky-600 h-screen flex justify-center">
      <div className="flex flex-col gap-5 mt-16">
      <div className="">
        {log ? <Login/>:<SignUp/>}
      </div>
      <div>
        <button className="bg-slate-800" onClick={Logging}>LOG IN</button>
      </div>

      </div>
      
    </div>
  );
}

export default LoginPage;
