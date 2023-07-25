"use client"
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
function Addpost() {
  const addnew = () => {
    // alert("click")
    console.log("adding new post")
  }
  return (
    <div className="bg-green-400 text-center w-full h-72 rounded-2xl"> 
    <div className='flex h-full justify-center items-center' >
    <   AddIcon onClick={addnew} sx={{ fontSize: 180 }}/>

    </div>
    
    
    
  </div>
  )
}

export default Addpost