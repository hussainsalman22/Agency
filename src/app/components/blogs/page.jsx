import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import Blogcard from "../Blogcard/page"
import './blogs.css'

const blogs = () => {
  return (
    <div id='blog' className='text-white lg:px-24 px-4'>
      <div>

      </div>
      <div className='h-28 '></div>
      <div className='relative' id='blogs'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-12'>
          <div className='lg:w-1/3 space-y-5 z-30'>
            <h4 className='text-gray-200 font-semibold text-2xl'>Our Blog</h4>
            <h2 className='text-5xl font-bold mb-5 leading-snug'>Explore Recent Publications</h2>
            <a href='' className='inline-flex items-center gap-2 font-semibold hover:text-orange-300 transition-all duration-300 ease-in'><span>
              check all blogs </span> <BsArrowBarRight /></a>

          </div>

          <div className='lg:w-2/3 my-8'>
            <div className='flex mb-10'>
              <div className='h-8 w-1/3 rounded-s-2xl bg-white'></div>
              <div className='h-8 w-1/3  bg-red-700'></div>
              <div className='h-8 w-1/3  bg-blue-700'></div>
              <div className='h-8 w-1/3 rounded-e-2xl bg-orange-700'></div>
            </div>
            <Blogcard/>

            {/* btn */}

            <div className='w-full mx-auto relative flex justify-end'>
              <button className='lg:relative right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange-300 
              hover:text-white transition-all duration-300 hover:translate-y-3 mb-20'>Read More</button>
            </div>
          </div>
        </div>
        {/* SHAPES */}

        <div className='hidden lg:block'>
          <div className="csshape4"></div>
          <div className="csshape4"></div>
        </div>
      </div>
    </div>
  )
}

export default blogs
