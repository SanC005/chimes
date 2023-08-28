import React from "react";

function Desc({text,trigger,changeText}) {
  
  return <div className="text-center flex justify-center">
    {!trigger? <div><textarea className=" max-h-36" value={text} name="description" onChange={(e) => changeText(e.target.value)}></textarea></div> : <div>{text}</div>}

    </div>;
}

export default Desc;
