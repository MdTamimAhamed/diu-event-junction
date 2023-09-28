import React from 'react'
import LoginSignupFormBtn from '../../Utilities/buttons/LoginSignupFormBtn'
import { ColorNames } from '../../Utilities/color/Color'

function SignupForm() {
  return (
    <>
        <div className='h-screen flex justify-center items-center'>
          <div className='w-[450px] shadow-[0px_3px_10px_rgba(0,0,0,0.2)]'>
            <div>
              <h2>Sign up</h2>
              <p>Please sign up to continue.</p>
            </div>
            <form className='[&>input]:w-full [&>input]:border-2  p-10'>
              <input 
                type="text"
                name="firstName"
                onChange=''
                value=''
                placeholder='First Name' 
              />

              <input 
                type="text"
                name="lastName"
                onChange=''
                value=''
                placeholder='Last Name' 
              />

              <input 
                type="email"
                name="diuEmail"
                onChange=''
                value=''
                placeholder='DIU Email' 
              />

              <input 
                type="password"
                name="password"
                onChange=''
                value=''
                placeholder='Password' 
              />

              <input 
                type="password"
                name="confirmPass"
                onChange=''
                value=''
                placeholder='Confirm Password' 
              />

              <LoginSignupFormBtn
                type='submit'
                btnName='Signup'
                btnColor={ColorNames.secondary}
                textColor={ColorNames.white}
              />
            </form>
          </div>
        </div>
    </>
  )
}

export default SignupForm