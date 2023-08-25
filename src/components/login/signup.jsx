import React from "react";

function SignUp() {
  return (
    <div>
      <div>Sign Up</div>
      <form className="flex flex-col w-1/6 gap-4 text-black">
        <div>
          <label>Username</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
