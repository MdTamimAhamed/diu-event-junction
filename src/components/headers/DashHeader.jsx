import React from 'react'
import {MdNotifications} from 'react-icons/md'

function DashHeader() {
    const userDetails = JSON.parse(localStorage.getItem('admin-details'))

    const userName = userDetails.firstName
    const userNameFirstLetter = userName.charAt(0)
  return (
    <>
        <div className='w-full border-b-2 border-secondary bg-white '>
            <div className='container flex justify-between px-8 py-5 items-center m-auto'>
                <div className='flex items-center'>
                    <h2>DIU Event Junction</h2>
                    <button className='ml-16'>Search</button>
                </div>
                <div className='flex items-center [&>p]:ml-3'>

                    <p className=' text-[24px]'><MdNotifications/></p>

                    <div className='ml-10 flex flex-col'>
                        <p className='text-right text-sm font-bold'>{`${userDetails.firstName} ${userDetails.lastName}`}</p>
                        <p className='text-right text-[11px] text-gray'>{userDetails.email}</p>
                    </div>

                    <p className=' bg-light-gray flex justify-center items-center w-10 h-10 rounded-full
                    text-white text-lg'>
                        {userNameFirstLetter}
                    </p>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default DashHeader