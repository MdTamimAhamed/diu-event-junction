import React from 'react'
import LoginSignupFormBtn from '../../Utilities/buttons/LoginSignupFormBtn'
import FormInputHandler from '../formInputHandler/FormInputHandler'
import {BsInfoCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ToolTip from '../tooltip/ToolTip'
import { useState } from 'react'

function AdminSignupForm() {

    const [toolTip, setToolTip] = useState(false)
    const handleToolTip = ()=>{
        setToolTip(!toolTip)
    }
  return (
    <>
        <div className=' flex'>
          <div className='h-[490px] w-[400px] shadow-[0px_5px_25px_rgba(0,0,0,0.1)] bg-white rounded-tl-lg rounded-bl-lg '>
            <div className='px-8 mt-10'>
              <h2 className='text-2xl font-medium'>Sign up</h2>
              <p className='mb-3 text-sm text-gray'>Requires special permission!</p>
            </div>
            <form className='px-8'>
              <div className='flex gap-2'>
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
              </div>

              <FormInputHandler
                state=''
                setState=''
                type='email'
                name='diuEmail'
                placeholder='DIU Email'
              />

              <div className=' relative'>
                <div className= {` ${(toolTip)? 'block' : 'hidden'}  absolute right-[-1%] top-[-75%]`}>
                    <ToolTip
                        text='Its a permission key to access the club admin post!'
                    />
                </div>
                <BsInfoCircleFill 
                onClick={handleToolTip}
                className=' text-gray absolute top-[50%] right-3 translate-y-[-50%]'
                
                />
                <FormInputHandler
                    state=''
                    setState=''
                    type='text'
                    name='accessToken'
                    placeholder='Access Token'
                />
              </div>

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
                btnColor='black' //color from color-scheme
              />

              <div className='py-6'>
                <p className='text-sm text-center'>Already have an account? 
                <span className=' font-bold text-black cursor-pointer hover:underline'> 
                    <Link to='/' >Login</Link>
                </span>
                </p>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default AdminSignupForm