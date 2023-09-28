import React from 'react'

function LoginSignupFormBtn({type,btnName,btnColor,textColor,hoverColor}) {
  return (
    <>
        <button
        className={`w-full py-2 bg-${btnColor} text-white hover:bg-${hoverColor} rounded-md`}
        type={type || 'submit'}
        >{btnName}</button>
    </>
  )
}

export default LoginSignupFormBtn