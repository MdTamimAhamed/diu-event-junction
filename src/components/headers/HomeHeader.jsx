import React ,{useEffect, useState}from 'react'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

function HomeHeader() {

  const [bgClass, setBgClass] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgClass('bg-white');
      } else {
        setBgClass('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
        <nav className={`w-full fixed z-[9999] py-6 ${bgClass?'bg-white shadow-md': ''} transition-all ease-in`}>
          <div className='container px-24 flex justify-between mx-auto'>
            <div className={`${bgClass? 'text-black':'text-white'} text-lg font-bold`}>DIU <span className='text-secondary font-bold' >Event</span> Junction</div>
            <div className='flex'>
              <ul className={`flex items-center gap-x-12 ${bgClass? 'text-black':'text-white'} `}>
                <li>
                  <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                  <Link to="#"><span>Events</span></Link>
                </li>
                <li>
                  <Link to="#"><span>Clubs</span></Link>
                </li>
                <li>
                  <Link to="#"><span>Gallery</span></Link>
                </li>
                <li>
                  <Link to="#"><span>About</span></Link>
                </li>
                <li>
                  <Link to="#"><span>Contact</span></Link>
                </li>
                <FiSearch className='mr-24 ml-10'/>
              </ul>
              <div className='w-7 h-7 rounded-full flex justify-center items-center bg-secondary'>
                <p className='font-medium text-white'>T</p>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default HomeHeader