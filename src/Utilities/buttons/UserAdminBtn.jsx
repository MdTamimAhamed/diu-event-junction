import React from 'react'

function UserAdminBtn({ type,btnName}) {
  
  return (
    <>
        <button
        className={`'bg-black  text-white':'text-black'}
        w-full py-1 
        text-sm font-medium rounded `}
        type={type || 'button'}>

          {btnName}
        </button>
    </>
  )
}

export default UserAdminBtn