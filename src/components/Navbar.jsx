import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

      const navigate = useNavigate()

      return (
      <>
      <div className='w-full flex justify-between item-center font-semibold'>
            <div className='flex items-center gap-2'>
                  <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left } alt="" />

                  <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                  {/* <p className='bg-red-500 text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>

                  <p className='bg-red-500 py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p> */}

                  <a className='bg-yellow-700 text-black w-24 h-8 rounded-full flex items-center justify-center cursor-pointer' href="https://www.instagram.com/ravish._rajput/" target="_blank">Developer</a>
            </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>

            <p className='bg-red-500 px-4 py-1 rounded-2xl cursor-pointer'>Music</p>

            <p className='bg-red-500 px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>

      </>
      )
}
export default Navbar
