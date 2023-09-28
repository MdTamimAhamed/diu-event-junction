import React from 'react'
import Role from '../role/Role'
import LoginSignupFormBtn from '../../Utilities/buttons/LoginSignupFormBtn'
import FormInputHandler from '../formInputHandler/FormInputHandler'
import Welcom from './Welcom'

function SignupForm() {
  const roleArr = ['user','admin']
  return (
    <>  
        <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Role 
          role = {roleArr[0]}
        />
        <div className='flex justify-center'>
          <div className='h-[490px] w-[400px] shadow-[0px_5px_25px_rgba(0,0,0,0.1)] bg-white rounded-tl-lg rounded-bl-lg '>
            <div className='px-8 mt-10'>
              <h2 className='text-2xl font-medium'>Sign up</h2>
              <p className='mb-3 text-sm text-gray'>Please sign up to continue.</p>
            </div>
            <form className='px-8'>
              <FormInputHandler
                state=''
                setState=''
                type='text'
                name='firstName'
                placeholder='First Name'
              />

              <FormInputHandler
                state=''
                setState=''
                type='text'
                name='lasttName'
                placeholder='Last Name'
              />

              <FormInputHandler
                state=''
                setState=''
                type='email'
                name='diuEmail'
                placeholder='DIU Email'
              />

              <FormInputHandler
                state=''
                setState=''
                type='password'
                name='password'
                placeholder='Password'
              />

              <FormInputHandler
                state=''
                setState=''
                type='password'
                name='confirmPass'
                placeholder='Confirm Password'
              />

              <LoginSignupFormBtn
                type='submit'
                btnName='Signup'
                btnColor='secondary' //color from color-scheme
              />

              <div className='py-6'>
                <p className='text-sm text-center'>Already have an account? 
                <span className=' font-bold text-secondary cursor-pointer hover:underline'> Login</span>
                </p>
              </div>
            </form>
          </div>
          <Welcom/>
        </div>
      </div>
    </>
  )
}

export default SignupForm