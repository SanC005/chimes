import React from 'react'

function Popup(props) {
  return (props.trigger)?(
    <div className='w-full h-full fixed bg-black flex items-center justify-center opacity-80'>
        <div className='relative w-1/3 h-1/3 bg-white text-black rounded-lg'>
            <div className='absolute rounded-lg top-0 right-0 bg-red-700'>
            <button onClick={()=> props.setTrigger(false)}>close</button>

            </div>
            <div className='flex justify-center'>
                {props.children}
            </div>
        </div> 
    </div>
  ): ""
}

export default Popup