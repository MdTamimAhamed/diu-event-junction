import React from 'react'
import FormInputHandler from '../formInputHandler/FormInputHandler'
import LoginSignupFormBtn from '../../Utilities/buttons/LoginSignupFormBtn'
import { Link } from 'react-router-dom'

function AdminLoginForm() {
  return (
    <>
          <div className='h-[350px] w-[400px] shadow-[0px_5px_25px_rgba(0,0,0,0.1)] bg-white rounded-tl-lg rounded-bl-lg '>
            <div className='px-8 mt-10'>
              <h2 className='text-2xl font-medium'>Login</h2>
              <p className='mb-3 text-sm text-gray'>Please login to continue.</p>
            </div>
            <form className='px-8'>

              <FormInputHandler
                state=''
                setState=''
                type='email'
                name='diuEmail'
                placeholder='Enter email'
              />

              <FormInputHandler
                state=''
                setState=''
                type='password'
                name='password'
                placeholder='Password'
              />
              
              <div className='flex justify-end text-sm font-medium text-black'>
                <p>Forgot password?</p>
              </div>

              <LoginSignupFormBtn
                type='submit'
                btnName='Login'
                btnColor='black' //color from color-scheme
              />

              <div className='py-6'>
                <p className='text-sm text-center'>Don't have an account? 
                <span className=' font-bold text-black cursor-pointer hover:underline'> 
                    <Link to='/signup' >Signup</Link>
                </span>
                </p>
              </div>
            </form>
          </div>
    </>
  )
}

export default AdminLoginForm