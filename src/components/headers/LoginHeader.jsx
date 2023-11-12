import React from 'react'
import { Link } from 'react-router-dom'

function LoginHeader() {
  return (
    <>
    
        <div>
        <nav className='bg-primary p-8'>
          <div className="container mx-auto flex justify-between items-center">
              
              <div className="font-poppins text-white text-lg font-bold">DIU <span className='text-secondary' >Event</span> Junction</div>

              
              <div className="space-x-10 flex justify-between items-center text-white " >
                
                <Link > 
                      <p className='border-b-[2px] border-secondary'>Home</p>
                </Link>
                <Link> 
                      <p className='hover:border-b-[2px] border-secondary'>About</p>
                </Link>
                <Link> 
                      <p className='hover:border-b-[2px] border-secondary'>Contact</p>
                </Link>



                  {/* <a href="#" className="font-poppins text-base font-semibold text-white"><span className='py-1 border-b-[2px] border-secondary'>Home</span></a>
                  <a href="#" className="font-poppins text-base font-semibold text-white"><span className='py-1 border-b-[2px] hover:border-secondary'>About</span></a>
                  <a href="#" className="font-poppins text-base font-semibold text-white"><span className='py-1 border-b-[2px] hover:border-secondary'>Contact</span></a> */}
              </div>
          </div>
        </nav>
        </div>
        
    
    </>
  )
}

export default LoginHeader