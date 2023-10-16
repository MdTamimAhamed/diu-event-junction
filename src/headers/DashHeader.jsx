import React from 'react'

function DashHeader() {
  return (
    <>
        <div className=' border-b-2 border-secondary'>
            <div className='container flex justify-between px-8 py-6 items-center m-auto'>
                <div className='flex items-center'>
                    <h2>DIU Event Junction</h2>
                    <button className='ml-16'>Search</button>
                </div>
                <div className='flex [&>p]:pl-5'>
                    <p>Notification</p>
                    <p>Username</p>
                    <p>Profile</p>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default DashHeader