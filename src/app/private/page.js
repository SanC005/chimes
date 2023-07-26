import Profile from 'components/profile/profile'
import Feedgrid from 'components/public_feed/feedgrid'
import { privateDatas } from 'components/public_feed/privatedata'
import React from 'react'

export default function Private() {
  return (
        <div className='text-white bg-red-600'>
          <Profile />
          <Feedgrid data={privateDatas}/>
        </div>

  )
}
