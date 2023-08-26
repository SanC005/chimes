import React from "react";

function Desc({text,trigger,changeText}) {
  
  return <div className="w-40 text-center">
    {!trigger? <div><textarea onChange={(e) => changeText(e.target.value)}>{text}</textarea></div> : <div>{text}</div>}

    </div>;
}

export default Desc;
