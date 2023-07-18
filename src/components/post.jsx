import React from 'react'

function Post() {
  return (
    <div className='bg-green-400 text-center w-1/3 h-72 rounded-2xl flex flex-col'>
        <div className='h-16 text-xl'>title</div>
        <div className="flex justify-around h-full">
            <div className="">
            <img
                // src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
                className="object-cover w-72 h-44"
            ></img>
            </div>

        </div>
            <div className='h-full'>Post title</div>
            <div className='h-full'>Link</div>

        <div className='flex justify-around bottom-0'>
            <div className="w-full border-lime-400 border-2 rounded-bl-2xl">Like</div>
            <div className='w-full border-lime-400 border-2'>Comment</div>
            <div className='w-full border-lime-400 border-2 rounded-br-2xl'>Share</div>
        </div>
    </div>
  )
}

export default Post