import React, { useState } from 'react'
import UserAdminBtn from '../../Utilities/buttons/UserAdminBtn'

function Role({role}) {

  
  return (
    <>
      <div className=' w-[300px] bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] flex justify-between items-center mb-6 p-[5px] rounded-md'>
        <UserAdminBtn
          type='button'
          btnName='User'
        />
        <UserAdminBtn
          type='button'
          btnName='Admin'
        />
      </div>
    </>
  )
}

export default Role