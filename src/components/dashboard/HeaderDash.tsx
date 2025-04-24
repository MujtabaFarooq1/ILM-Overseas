import Image from 'next/image'
import React from 'react'

const HeaderDash = () => {
  return (
    <div className='bg-white w-full p-5 gap-3 flex justify-end border-b'>
        <Image width={30} height={20} src="/images/Notification.svg" alt="" className='bg-amber-100 rounded-full p-1' />
        <Image width={20} height={20} src="/images/Notification.svg" alt="" />
    </div>
  )
}

export default HeaderDash