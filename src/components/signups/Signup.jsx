import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import RoleSelectBtn from '../../Utilities/buttons/RoleSelectBtn'
import SignupForm from '../forms/SignupForm'
import AdminSignupForm from '../forms/AdminSignupForm'

function Signup() {
  
  const [selectRole, setSelectRole] = useState('')

  return (
    <>
      <div>
        <p className=' text-center'>Ahsan: Put the header here...</p>
      </div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className=' w-[300px] bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] flex justify-between items-center gap-2 mb-6 p-[5px] rounded-md'>
          <RoleSelectBtn
            type = 'button'
            role = 'user'
            btnName='User'
            state = {selectRole}
            setState = {setSelectRole}
            />

            <RoleSelectBtn
            type = 'button'
            role = 'admin'
            btnName='Admin'
            state = {selectRole}
            setState = {setSelectRole}
            />
      </div>
      {(selectRole === 'admin')?
        <AdminSignupForm/>
        :
        <SignupForm/>
      }
      </div>
    </>
  )
}

export default Signup