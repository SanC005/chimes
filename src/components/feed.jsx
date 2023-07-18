import React from 'react'
import Post from './post'

function Feed() {
  return (
    
    <div className='bg-orange h-1/2 w-full flex flex-col gap-4 p-2'>
        <div className='flex justify-center'>
            <Post/>
        </div>
    </div>
  )
}

export default Feed