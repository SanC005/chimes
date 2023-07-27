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
    <div>
      <div className="bg-red-500">
        {log ? <Login/>:<SignUp/>}
      </div>
      <div>
        <button className="bg-slate-600" onClick={Logging}>LOG IN</button>
      </div>
      
    </div>
  );
}

export default LoginPage;
