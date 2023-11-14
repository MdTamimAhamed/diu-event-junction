import React from 'react'
import { GoStarFill } from "react-icons/go";
import { MdBookmarkAdded } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { HiShare } from "react-icons/hi";

function Analytics() {
  return (
    <div >
        <h1 className='font-poppins font-bold text-md  '>Event Analytics</h1>
        <div className='w-[800px] pt-6'>
            <div className='flex flex-wrap justify-start items-center gap-8'>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                     <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><GoStarFill className='text-white text-2xl'/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>1480</p>
                      <p className='text-md font-bold text-secondary text-center'>Interested</p>
                    </div>
                  </div>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                      <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><MdBookmarkAdded className='text-white text-2xl'/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>1290</p>
                      <p className='text-md font-bold text-secondary text-center'>Going</p>
                    </div>
                  </div>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                      <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><BsEyeFill className='text-white text-2xl '/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>3200</p>
                      <p className='text-md font-bold text-secondary text-center'>Views</p>
                    </div>
                  </div>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                      <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><AiFillHeart className='text-white text-2xl '/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>1607</p>
                      <p className='text-md font-bold text-secondary text-center'>Favourite</p>
                    </div>
                  </div>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                     <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><HiUsers className='text-white text-2xl'/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>1480</p>
                      <p className='text-md font-bold text-secondary text-center'>User</p>
                    </div>
                  </div>
                  <div className='space-x-10 flex justify-between items-center border-none rounded px-8 py-5 shadow-sm bg-white'>
                     <div className='w-[40px] h-[40px] bg-secondary rounded-full flex justify-center items-center'><HiShare className='text-white text-2xl'/></div>
                    <div className='font-poppins'>
                      <p className='text-3xl font-bold'>1200</p>
                      <p className='text-md font-bold text-secondary text-center'>Shares</p>
                    </div>
                  </div>
            </div>

        </div>
    </div>
  )
}

export default Analytics